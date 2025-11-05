import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Parsons2NFQuestion } from '../../models/parsons/parsons-2nf.model';
import { ParsonsColumn } from '../../models/parsons/parsons-base.model';
import { Parsons2NFGameState } from '../../states/parsons/parsons-2nf.state';
import { Parsons2NFMapper } from './parsons-2nf-mapper';
import { Parsons2NFFeedbackEngine } from './parsons-2nf-feedback';
import { TwoNFService } from '../../services/parsons/two-nf.service';

/**
 * Service handling the core game logic for the 2NF Parsons Problem stage.
 * 
 * Responsibilities:
 * Loading question data (base 2NF question, tables, feedback)
 * Managing drag/drop logic across multiple tables
 * Providing feedback via the Parsons2NFFeedbackEngine
 * Supporting cheat functionality
 * Handling game state resets between questions
 */

@Injectable({ providedIn: 'root' })
export class Parsons2NFService {
  constructor(private twoNFService: TwoNFService) { }

  /**
   * Loads a full 2NF question, including its base description, tables, and feedback data.
   * Data is fetched and then mapped into a Parsons2NFQuestion model.
   *
   * @param questionId The ID of the 2NF question to load
   * @returns Parsons2NFQuestion
   */
  loadQuestionData(questionId: number): Observable<Parsons2NFQuestion> {
    const question$ = this.twoNFService.getQuestion(questionId);
    const tables$ = this.twoNFService.getTables(questionId);
    const feedback$ = this.twoNFService.getFeedback(questionId);

    return forkJoin({
      qRes: question$,
      tRes: tables$,
      fRes: feedback$
    }).pipe(
      map(({ qRes, tRes, fRes }) => {
        // Unwraps the JSon API response
        const qData = (qRes && 'data' in qRes ? (qRes as any).data : qRes) as any;
        const tData = (tRes && 'data' in tRes ? (tRes as any).data : tRes) as any[];
        const fData = (fRes && 'data' in fRes ? (fRes as any).data : fRes) as any[];

        return Parsons2NFMapper.mapQuestion(qData, tData, fData);
      })
    );
  }


  /**
  * Resets the 2NF puzzle to its initial state, before items were placed on the right widgets.
  * Rebuilds available columns and clears any feedback or highlights.
  * Each table receives an empty column assignment list.
  *
  * @param tables The list of tables belonging to the current question
  * @returns Partial game state ready to be merged into the full Parsons2NFGameState
  */
  resetPuzzle(tables: Parsons2NFQuestion['twoNFTables']): Partial<Parsons2NFGameState> {
    const availableColumns = tables.flatMap((t) => t.columns);
    const columnAssignments: Record<string, ParsonsColumn[]> = {};
    tables.forEach((t) => (columnAssignments[t.tableName] = []));

    return {
      availableColumns,
      columnAssignments,
      highlightedStatus: {},
      feedbackMessages: {},
      isCheating: false,
      cheatAnimating: false,
      currentlyCheatingColumn: null,
      feedbackGiven: false,
    };
  }


  /**
  * Handles Angular drag-and-drop interactions within and across tables.
  * Updates both the available column list (left) and table-specific assignments (right).
  */
  applyDrop(
    event: CdkDragDrop<ParsonsColumn[]>,
    availableColumns: ParsonsColumn[],
    columnAssignments: Record<string, ParsonsColumn[]>,
    highlightedStatus: Parsons2NFGameState['highlightedStatus'],
    feedbackMessages: Parsons2NFGameState['feedbackMessages']
  ) {
    // Move column within same table or available list
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    // Move between available list and a table (or vice versa)
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    return { availableColumns, columnAssignments, highlightedStatus, feedbackMessages };
  }

  /**
  * Generates feedback based on current column placements.
  * Delegates logic to the Parsons2NFFeedbackEngine
  */
  getFeedback(currentQuestion: Parsons2NFQuestion, columnAssignments: Record<string, ParsonsColumn[]>) {
    return Parsons2NFFeedbackEngine.getFeedback(currentQuestion, columnAssignments);
  }

  /**
  * Triggers a cheat mode animation that automatically places correct columns step-by-step.
  */
  cheatAllColumnsStepByStep(
    currentQuestion: Parsons2NFQuestion,
    availableColumns: ParsonsColumn[],
    columnAssignments: Record<string, ParsonsColumn[]>,
    onStep: (updatedAvailable: ParsonsColumn[], updatedAssignments: Record<string, ParsonsColumn[]>, movedColumn: ParsonsColumn) => void,
    onComplete: () => void
  ) {
    Parsons2NFFeedbackEngine.cheatStepByStep(currentQuestion, availableColumns, columnAssignments, onStep, onComplete);
  }
}
