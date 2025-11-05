
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { OneNFService } from '../../services/parsons/one-nf.service'; // 👈 jouw nieuwe repo service
import { Parsons1NFQuestion } from '../../models/parsons/parsons-1nf.model';
import { LineItem } from '../../models/parsons/parsons-1nf.model';
import { Parsons1NFGameState } from '../../states/parsons/parsons-1nf.state';

@Injectable({ providedIn: 'root' })

/**
 * 1NF Service responsible for handling all 1NF Parsons Problem game logic.
 * Acts as a bridge between the frontend component and the repository service (OneNFService).
 * 
 * Responsibilities:
 * Fetching question, correct order, and feedback data
 * Managing drag/drop logic
 * Handling feedback and cheat interactions
 * Resetting and updating game states
 */

export class Parsons1NFService {
  constructor(private oneNFService: OneNFService) { }

  /**
   * Loads question data, the correct question order, and feedback simultaneously for a given question ID.
   * Combines all three observables using forkJoin and maps the results into a single Parsons1NFQuestion object.
   * 
   * @param questionId The ID of the question to load
   * @returns An observable emitting a fully prepared Parsons1NFQuestion
   */
  loadQuestionData(questionId: number): Observable<Parsons1NFQuestion> {
    const question = this.oneNFService.getQuestion(questionId);
    const correctOrder = this.oneNFService.getCorrectOrder(questionId);
    const feedback = this.oneNFService.getFeedback(questionId);

    return forkJoin([question, correctOrder, feedback]).pipe(
      map(([question, correctOrder, feedback]) => {
        return {
          ...question,
          correctOrder: correctOrder.map(c => c.codeLineId),
          feedback: feedback.map(f => ({
            codeLineId: f.codeLineId,
            text: f.feedbackText
          }))
        } as Parsons1NFQuestion;
      })
    );
  }

  /**
   * Automatically completes the puzzle (in cheat mode).
   * Visually animates correct placements one by one and marks them as correct.
   * 
   * @param state Current 1NF game state
   * @param currentQuestion Current question model with correct order and feedback
   * @returns Updated game state after cheat execution
   */
  async runCheat(state: Parsons1NFGameState, currentQuestion: Parsons1NFQuestion): Promise<Parsons1NFGameState> {
    if (!currentQuestion) return state;

    state.getFeedbackClickCount = (state.getFeedbackClickCount ?? 0) + 1;
    state.cheatUsed = true;

    /* Resets the current state before the cheat begins*/
    state.placedItems = [];
    state.availableItems = [...currentQuestion.code];
    state.highlightedStatus = {};
    state.feedbackMessages = {};
    state.feedbackGiven = true;
    state.showNextButton = true;
    state.isCheating = true;

    /* Sequentially place correct items in the frontend with animations + delay*/
    currentQuestion.correctOrder.forEach((id, i) => {
      const line = currentQuestion.code.find(c => c.id === id);
      if (line) {
        const cheatItem = { ...line, cheatAnimating: true };
        setTimeout(() => {
          state.placedItems.push(cheatItem);
          state.availableItems = state.availableItems.filter(c => c.id !== id);

          const feedback = currentQuestion.feedback.find(f => f.codeLineId === id);
          state.highlightedStatus[id] = 'correct';
          state.feedbackMessages[id] = feedback ? feedback.text : 'Correct!';

          /* Stop the animation flag at the end*/
          if (i === currentQuestion.correctOrder.length - 1) {
            state.isCheating = false;
          }
        }, i * 400);
      }
    });

    state.isCheating = false;
    return state;
  }

  /**
   * Resets the puzzle to its initial randomized state.
   * Clears placements, feedback, and highlighted lines.
   * 
   * @param originalCode The original set of code lines for the question
   * @returns Parsons1NFGameState with a new randomized left widget and a cleared right widget
   */
  resetPuzzle(originalCode: LineItem[]) {
    const highlightedStatus: Parsons1NFGameState['highlightedStatus'] = {};
    originalCode.forEach(item => {
      highlightedStatus[item.id] = 'neutral';
    });

    return {
      availableItems: this.shuffleArray([...originalCode]),
      placedItems: [],
      feedbackMessages: {},
      highlightedStatus,
      showNextButton: false,
      feedbackGiven: false,
      isCheating: false,
      cheatUsed: false,
      showTableModal: false,
      showSummaryModal: false,
      showCharacterModal: false,
      summaryModalContent: ''
    };
  }


  /**
   * Evaluates the current code lines on the right, and returns detailed feedback.
   * Compares placed items with the correct order and assigns status & messages per line.
   * 
   * @param currentItems Array of code lines placed by the user (right widget)
   * @param currentQuestion The qcurrent question model
   * @returns 1NFGameState with statuses, messages, and overall correctness indicators
   */
  getFeedback(currentItems: LineItem[], currentQuestion: Parsons1NFQuestion) {
    const correctOrderSet = new Set(currentQuestion.correctOrder);
    const highlightedStatus: Parsons1NFGameState['highlightedStatus'] = {};
    const feedbackMessages: Parsons1NFGameState['feedbackMessages'] = {};

    let correctCount = 0;
    let hasIncorrectItem = false;

    currentItems.forEach(item => {
      const feedback = currentQuestion.feedback.find(f => f.codeLineId === item.id);
      const isCorrect = correctOrderSet.has(item.id);

      if (isCorrect) {
        highlightedStatus[item.id] = 'correct';
        feedbackMessages[item.id] = feedback ? feedback.text : 'Correct!';
        correctCount++;
      } else {
        highlightedStatus[item.id] = 'incorrect';
        feedbackMessages[item.id] = feedback ? feedback.text : 'Fout.';
        hasIncorrectItem = true;
      }
    });

    return {
      highlightedStatus,
      feedbackMessages,
      correctCount,
      allCorrectPlaced: correctCount === currentQuestion.correctOrder.length,
      onlyCorrectItems:
        currentItems.length === currentQuestion.correctOrder.length && !hasIncorrectItem
    };
  }

  /**
   * Handles the drag-and-drop interaction between available (left widget) and placed code lines (right widget).
   * Also Supports moving within the same container or transferring between left/right lists.
  */
  applyDrop(event: CdkDragDrop<LineItem[]>, codeItems: LineItem[], currentItems: LineItem[], highlightedStatus: Parsons1NFGameState['highlightedStatus'], feedbackMessages: Parsons1NFGameState['feedbackMessages']) {
    let dropDirection: 'left' | 'right' = 'left';
    const movedItem = event.previousContainer.data[event.previousIndex];
    const isGoingToRight = event.container.id.includes('right');

    dropDirection = isGoingToRight ? 'right' : 'left';

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (!isGoingToRight && movedItem) {
        delete highlightedStatus[movedItem.id];
        delete feedbackMessages[movedItem.id];
      }
    }

    return { codeItems, currentItems, dropDirection, highlightedStatus, feedbackMessages };
  }

  /** Helper method that shuffles/randomizes the left widget's items */
  private shuffleArray(array: LineItem[]): LineItem[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
