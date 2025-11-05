
import { Parsons3NFGameState } from '../../states/parsons/parsons-3nf.state';

/**
 * Engine responsible for generating detailed feedback for the 3NF stage.
 *
 * Responsibilities:
 * Evaluate user-constructed tables and columns against the expected 3NF solution
 * Provide per-column feedback across three dimensions:
 * Column correctness (exists and in correct table)
 * Key type correctness (PK/FK/NONE)
 * Reference correctness (foreign key reference)
 * Highlight missing or duplicate columns
 * Update the game state with visual highlights and textual feedback
 */

export class Parsons3NFFeedbackEngine {

  /**
  * Evaluates all user input tables and generates feedback.
  * Feedback is divided into 'kolom', 'keyType', and 'reference' categories.
  */
  static getFeedback(state: Parsons3NFGameState): Parsons3NFGameState {
    if (!state.currentQuestion) return state;

    // Reset previous feedback
    state.feedbackGiven = false;
    const newDetailedMessages = { kolom: {}, keyType: {}, reference: {} } as any;
    const newHighlightedStatus: Record<string, 'correct' | 'incorrect'> = {};

    // Tracking sets for matched vs. expected feedback
    const matchedFeedbackKeys = new Set<string>();
    const expectedKeys = new Set<string>();

    // Normalize all expected feedback keys for reliable matching (TABLENAME_COLUMN_KEYTYPE format) to easier map their corresponding feedback
    state.currentQuestion.feedback.forEach(fb => {
      expectedKeys.add(
        `${fb.target_table}__${fb.column_name}__${(fb.expectedKeyType || 'NONE').toUpperCase()}`
      );
    });

    // Iterate over user-created tables
    state.userInputTables.forEach(table => {
      table.columns.forEach((column, colIndex) => {
        const keyKolom = `${table.tableName}_${colIndex}_kolom`;
        const keyKeyType = `${table.tableName}_${colIndex}_keyType`;
        const keyRef = `${table.tableName}_${colIndex}_reference`;

        // Check if column names are empty
        if (!column.columnName?.trim()) {
          newDetailedMessages.kolom[keyKolom] = `❌ Deze rij bevat nog geen kolomnaam.`;
          newHighlightedStatus[keyKolom] = 'incorrect';
          return;
        }

        // Check if duplicate columns are filled in with the same name/key/references
        const isDuplicate = table.columns.some(
          (other, otherIndex) =>
            otherIndex !== colIndex &&
            other.columnName === column.columnName &&
            other.keyType === column.keyType &&
            other.referencesTableId === column.referencesTableId
        );
        if (isDuplicate) {
          newDetailedMessages.kolom[keyKolom] = `❌ Deze kolom is dubbel in deze tabel.`;
          newHighlightedStatus[keyKolom] = 'incorrect';
          return;
        }

        // Attempt to find feedback match for this column
        const match = state.currentQuestion?.feedback.find(
          fb =>
            fb.target_table === table.tableName &&
            fb.column_name === column.columnName
        );

        // Column not expected = mark as incorrect
        if (!match) {
          newDetailedMessages.kolom[keyKolom] = `❌ Kolom "${column.columnName}" hoort niet in "${table.tableName}".`;
          newHighlightedStatus[keyKolom] = 'incorrect';
          return;
        }

        // When the column name is mapped as correct
        matchedFeedbackKeys.add(
          `${match.target_table}__${match.column_name}__${(match.expectedKeyType || 'NONE').toUpperCase()}`
        );
        newDetailedMessages.kolom[keyKolom] = `✅ Kolomnaam correct`;
        newHighlightedStatus[keyKolom] = 'correct';

         // Key type validation (PK/FK/NONE)
        const actualKey = (column.keyType || 'NONE').toUpperCase();
        const expectedKey = (match.expectedKeyType || 'NONE').toUpperCase();

        if (actualKey === expectedKey) {
          newDetailedMessages.keyType[keyKeyType] = `✅ Sleuteltype correct`;
          newHighlightedStatus[keyKeyType] = 'correct';
        } else {
          newDetailedMessages.keyType[keyKeyType] = `❌ Sleuteltype fout`;
          newHighlightedStatus[keyKeyType] = 'incorrect';
        }

        // Foreign key reference validation
        if (actualKey === 'FK') {
          const expectedId = Number(match.referencesTableId ?? -1);
          const actualId = Number(column.referencesTableId ?? -2);

          if (!column.referencesTableId) {
            newDetailedMessages.reference[keyRef] = `❌ Geen verwijzing ingevuld.`;
            newHighlightedStatus[keyRef] = 'incorrect';
          } else if (expectedId === actualId) {
            newDetailedMessages.reference[keyRef] = `✅ Verwijzing correct`;
            newHighlightedStatus[keyRef] = 'correct';
          } else {
            newDetailedMessages.reference[keyRef] = `❌ Verkeerde referentie.`;
            newHighlightedStatus[keyRef] = 'incorrect';
          }
        }
      });
    });

    // Detect missing expected columns that the user did not create but were expected
    expectedKeys.forEach(expected => {
      if (!matchedFeedbackKeys.has(expected)) {
        const [table, column, keyType] = expected.split('__');
        const baseKey = `${table}_${column}_MISSING`;
        newDetailedMessages.kolom[baseKey] = `❌ Kolom "${column}" (${keyType}) ontbreekt in tabel "${table}".`;
        newHighlightedStatus[baseKey] = 'incorrect';
      }
    });

    // Determine overall correctness and control "Next" button visibility
    const correctCount = Object.values(newHighlightedStatus).filter(v => v === 'correct').length;
    const total = Object.keys(newHighlightedStatus).length;

    state.showNextButton = correctCount === total && total > 0;
    state.feedbackGiven = true;
    state.highlightedStatus = newHighlightedStatus;
    state.detailedFeedbackMessages = newDetailedMessages;

    return state;
  }
}
