import { Parsons2NFQuestion } from '../../models/parsons/parsons-2nf.model';
import { Parsons2NFGameState } from '../../states/parsons/parsons-2nf.state';
import { ParsonsFeedback } from '../../models/parsons/parsons-2nf.model';
import { ParsonsColumn } from '../../models/parsons/parsons-base.model';

/**
 * Engine responsible for evaluating feedback logic and cheat animations
 * in the 2NF Parsons Problems stage.
 *
 * Responsibilities:
 * Compare user-assigned columns with the expected 2NF feedback rules
 * Generate visual and textual feedback for each column
 * Animate the cheat mode by auto-placing correct columns step-by-step
 */

export class Parsons2NFFeedbackEngine {

  /**
  * Compares the user's current column assignments to the expected feedback definitions present in the 2NF Feedback model.
  * Generates per-column highlight status and feedback messages displayed in the frontend.
  * */
  static getFeedback(currentQuestion: Parsons2NFQuestion, columnAssignments: Record<string, ParsonsColumn[]>) {
    const highlightedStatus: Parsons2NFGameState['highlightedStatus'] = {};
    const feedbackMessages: Parsons2NFGameState['feedbackMessages'] = {};
    let allCorrect = true;

    Object.keys(columnAssignments).forEach((tableName) => {
      const assignedCols = columnAssignments[tableName];

      // Iterate over each table and its assigned columns
      assignedCols.forEach((col) => {
        const key = this.buildKey(col, tableName);

        // Try to find a matching feedback entry
        const match: ParsonsFeedback | undefined = currentQuestion.feedback.find(
          (fb) =>
            fb.columnName.toLowerCase() === col.columnName.toLowerCase() &&
            fb.targetTable.toLowerCase() === tableName.toLowerCase() &&
            fb.keyType.toUpperCase() === col.keyType.toUpperCase() &&
            (fb.references?.trim().toLowerCase() || 'none') ===
            (col.referencesTable?.trim().toLowerCase() || 'none')
        );

        if (match) {
          // Match found = use predefined feedback type and message
          highlightedStatus[key] = match.feedbackType;
          feedbackMessages[key] = match.feedback || '';
        } else {
          // No match = mark as incorrect and provide contextual message
          highlightedStatus[key] = 'incorrect';
          feedbackMessages[key] = `Kolom ${col.columnName} hoort niet thuis in ${tableName}.`;
          allCorrect = false;
        }
      });
    });

    return { highlightedStatus, feedbackMessages, allCorrect };
  }

  /**
   * Executes the cheat logic that automatically places correct columns one-by-one in the frontend.
   */
  static cheatStepByStep(
    currentQuestion: Parsons2NFQuestion,
    availableColumns: ParsonsColumn[],
    columnAssignments: Record<string, ParsonsColumn[]>,
    onStep: (updatedAvailable: ParsonsColumn[], updatedAssignments: Record<string, ParsonsColumn[]>, movedColumn: ParsonsColumn) => void,
    onComplete: () => void
  ) {
    if (!currentQuestion) return;

    // Determine which available columns have valid matching feedback in the model
    const correctAssignments = currentQuestion.feedback.filter(fb =>
      availableColumns.some(
        c =>
          c.columnName.toLowerCase() === fb.columnName.toLowerCase() &&
          c.keyType.toUpperCase() === fb.keyType.toUpperCase() &&
          (c.referencesTable?.toLowerCase() || 'none') === (fb.references?.toLowerCase() || 'none')
      )
    );

    let step = 0;

    // Interval animation loop: move one correct column every 600 ms
    const interval = setInterval(() => {
      if (step >= correctAssignments.length) {
        clearInterval(interval);
        onComplete();
        return;
      }

      const nextCorrect = correctAssignments[step];
      const col = availableColumns.find(
        c => c.columnName.toLowerCase() === nextCorrect.columnName.toLowerCase()
      );

      if (col) {
        // Remove column from available pool and add it to its correct table
        availableColumns = availableColumns.filter(c => c !== col);
        columnAssignments[nextCorrect.targetTable] = [
          ...(columnAssignments[nextCorrect.targetTable] || []),
          col,
        ];
        // Trigger animation update callback
        onStep(availableColumns, { ...columnAssignments }, col);
      }

      step++;
    }, 600);
  }

  /**
  * Builds a unique key for identifying feedback and highlight entries per column placement. Returns a unique key to be used in the frontend highlight/feedback maps
  */
  private static buildKey(col: ParsonsColumn, tableName: string): string {
    const refVal = col.referencesTable?.trim() || 'none';
    return `${col.columnName}_${tableName}_${refVal}`;
  }
}
