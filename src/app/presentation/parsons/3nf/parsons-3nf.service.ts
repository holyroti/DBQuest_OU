import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Parsons3NFFeedbackEngine } from './parsons-3nf-feedback';
import { GameLogService } from '../../shared-services/game-log.service';
import { Parsons3NFGameState } from '../../states/parsons/parsons-3nf.state';
import { Parsons3NFQuestion, Parsons3NFTable, Parsons3NFColumn } from '../../models/parsons/parsons-3nf.model';
import { ThreeNFService } from '../../services/parsons/three-nf.service';

/**
 * Service handling the full game logic for the 3NF Parsons Problem stage.
 * 
 * Responsibilities:
 * Loading and preparing detailed 3NF questions (including feedback and foreign key mapping)
 * Managing user input tables and animations
 * Handling feedback, reset, and cheat mechanics
 */

@Injectable({ providedIn: 'root' })
export class Parsons3NFService {
  constructor(private gameLogService: GameLogService, private threeNFService: ThreeNFService) { }

  /**
 * Generates a unique key for mapping feedback messages to a specific table-column-aspect combination.
 * Used by the feedback and cheat logic for the detailed feedback message traceability.
 */
  getFeedbackKey(
    column: any,
    table: any,
    columnIndex: number,
    aspect: 'kolom' | 'keyType' | 'reference'
  ): string {
    return `${table.tableName}_${columnIndex}_${aspect}`;
  }

  /**
  * Loads a full 3NF question including its structure, feedback, and table details.
  * Maps fetched data into the 3NF game state and prepares user interaction tables.
  */
  async loadQuestion(state: Parsons3NFGameState, id: number): Promise<void> {
    try {
      const mappedQuestion: Parsons3NFQuestion = await firstValueFrom(
        this.threeNFService.getDetails(id)
      );
      // Flattens the foreign key labels fetched from the backend
      this.resolveForeignKeys(mappedQuestion.tables, mappedQuestion.feedback);

      const mappedColumns: Parsons3NFColumn[] = mappedQuestion.tables.flatMap(t => t.columns);

      // Update game state with prepared question data
      state.currentQuestion = mappedQuestion;
      state.solutionTables = mappedQuestion.tables;
      state.userInputTables = this.createEmptyUserTables(mappedQuestion.tables);

      // Prepare available 3nf dropdown options
      state.availableColumnNames = [...new Set(mappedColumns.map(c => c.columnName))];
      state.availableReferences = mappedQuestion.tables.map(t => ({ id: t.id, name: t.tableName }));

      // Map table IDs to names for reference lookups
      state.tableIdToName = mappedQuestion.tables.reduce(
        (acc, t) => ({ ...acc, [t.id]: t.tableName }),
        {}
      );

      state.feedback = mappedQuestion.feedback;
      state.detailedFeedbackMessages = { kolom: {}, keyType: {}, reference: {} };
      state.questionLoaded = true;

    } catch (err) {
    }
  }

  /**
   * Generates and applies feedback for the current 3NF state, fetched from the 3nf feedback engine
  */
  getFeedback(state: Parsons3NFGameState): Parsons3NFGameState {
    return Parsons3NFFeedbackEngine.getFeedback(state);
  }

  /**
  * Resets the current puzzle to an empty state while preserving the question data.
  * Clears feedback, highlights, and resets all column inputs.
  */
  resetPuzzle(state: Parsons3NFGameState) {
    if (!state.currentQuestion) return;
    state.userInputTables = this.createEmptyUserTables(state.currentQuestion.tables);
    state.feedbackGiven = false;
    state.highlightedStatus = {};
    state.feedbackMessages = {};
  }

  /**
   * Activates cheat mode for the 3NF stage.
   * Automatically fills in all correct answers table by table using animation delays.
   */
  runCheat(state: Parsons3NFGameState): Parsons3NFGameState {
    state.isCheating = true;
    state.cheatUsed = true;
    state.userInputTables = this.createEmptyUserTables(state.solutionTables);
    this.animateCheatFill(state, 0, 0);
    return state;
  }

  /**
  * Recursively animates the cheat fill process.
  * Sequentially fills each column of each table with the correct values and key types.
  */
  private animateCheatFill(state: Parsons3NFGameState, tableIndex: number, columnIndex: number) {
    if (!state.solutionTables || !state.userInputTables) return;
    // Stop recursion after all tables are filled
    if (tableIndex >= state.solutionTables.length) {
      this.getFeedback(state);
      state.isCheating = false;
      return;
    }

    const solTable = state.solutionTables[tableIndex];
    const userTable = state.userInputTables[tableIndex];

    // Move to next table when current one is complete
    if (!userTable || columnIndex >= solTable.columns.length) {
      setTimeout(() => this.animateCheatFill(state, tableIndex + 1, 0), 400);
      return;
    }

    const solCol = solTable.columns[columnIndex];
    const userCol = userTable.columns[columnIndex];

    if (userCol) {
      // Copy expected values from solution to user table
      userCol.columnName = solCol.columnName;

      userCol.keyType =
        solCol.expectedKeyType && solCol.expectedKeyType !== 'NONE'
          ? solCol.expectedKeyType
          : solCol.keyType;

      userCol.referencesTableId =
        solCol.expectedReferencesTableId !== null
          ? Number(solCol.expectedReferencesTableId)
          : solCol.referencesTableId;

      // Animate the fill visually
      userCol.cheatAnimating = true;
      setTimeout(() => (userCol.cheatAnimating = false), 800);
    }
    // Continue with the next column
    setTimeout(() => this.animateCheatFill(state, tableIndex, columnIndex + 1), 500);
  }

  /**
 * Creates an empty version of the provided tables for user input to be used in the frontend.
 * All columns are cleared of names, key types, and foreign key references.
 */
  private createEmptyUserTables(tables: Parsons3NFTable[]): Parsons3NFTable[] {
    return tables.map(t => ({
      ...t,
      columns: t.columns.map(c => ({
        ...c,
        columnName: '',
        keyType: 'NONE',
        referencesTableId: null,
      })),
    }));
  }

  /**
 * Aligns expected foreign key references between feedback and table definitions.
 * Ensures columns have proper expected key types and references for feedback comparison.
 */
  private resolveForeignKeys(tables: Parsons3NFTable[], feedback: any[]): void {
    tables.forEach(t => {
      t.columns.forEach(col => {
        const fbMatch = feedback.find(
          fb =>
            fb.target_table === t.tableName &&
            fb.column_name === col.columnName
        );

        if (fbMatch) {
          col.expectedKeyType = fbMatch.expectedKeyType;
          col.expectedReferencesTableId = fbMatch.referencesTableId ? Number(fbMatch.referencesTableId) : null;
          // Auto-resolve foreign key references if missing
          if (col.keyType === 'FK' && !col.referencesTableId && col.expectedReferencesTableId) {
            col.referencesTableId = col.expectedReferencesTableId;
          }
        }
      });
    });
  }
}
