import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { CdkDragDrop, DragDropModule, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { Parsons2NFQuestion } from '../../models/parsons/parsons-2nf.model';
import { ParsonsColumn } from '../../models/parsons/parsons-base.model';
import { Parsons2NFService } from './parsons-2nf.service';
import { Parsons2NFGameState, createInitialParsons2NFState } from '../../states/parsons/parsons-2nf.state';
import { GameComponentBase } from '../../interfaces/game-component-base';
import { GameLogService } from '../../shared-services/game-log.service';
import { UserService } from '../../shared-services/user.service';
import { AppModalComponent } from '../../shared-components/app-modal/app-modal.component';
import { VisualNovelComponent } from '../../shared-components/visual-novel/visual-novel.component';
import { larissaDialogues } from '../../visual-novel-dialogues/larissaDialogue';
import { toggleModalBase } from '../../states/parsons/parsons-base.state';

@Component({
  selector: 'app-parsons-2nf',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule, AppModalComponent, VisualNovelComponent],
  templateUrl: './parsons-2nf.component.html',
  styleUrls: ['./parsons-2nf.component.css'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ transform: '{{enterTransform}}', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { params: { enterTransform: 'translateX(-100%)' } })
    ])
  ]
})

/**
 * Main component for handling the 2NF Parsons Problem stage.
 * Extends the base game component with logic for splitting columns into correct tables
 * and identifying partial dependencies. Includes drag-and-drop functionality, feedback, and cheat animation
 */
export class Parsons2NFComponent
  extends GameComponentBase<Parsons2NFQuestion, ParsonsColumn>
  implements OnInit, OnChanges {
  @Input() currentQuestion: Parsons2NFQuestion | null = null;
  @Input() override questionId: number | null = null;
  @Input() override currentStage: number = 2;
  @Output() override completed = new EventEmitter<void>();
  @Output() override stageChange = new EventEmitter<number>();

  state: Parsons2NFGameState = createInitialParsons2NFState();
  sectionId = 2;
  userId = '';

  @ViewChildren(CdkDropList) tableDropLists!: QueryList<CdkDropList>;

  constructor(
    private parsons2NFService: Parsons2NFService,
    toastr: ToastrService,
    gameLogService: GameLogService,
    userService: UserService
  ) {
    super(toastr, gameLogService, userService);
  }


  /**
  * Initializes the component by loading the question (if a questionId is provided)
  * and retrieves the current logged-in user's ID. Checking this per stage to see if the user's account has not been switched (validation)
  */
  ngOnInit(): void {
    if (this.questionId) this.loadQuestion(this.questionId);
    this.userId = this.userService.getLoggedInUserId() || '';

    this.state.currentCharacterDialogues = larissaDialogues;
  }

  /**
  * Reacts to @Input changes. When a new questionId is received, or
  * the next question for the 2NF stage is loaded.
  * @param changes: Object containing updated @Input (questionId) properties.
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questionId'] && this.questionId) this.loadQuestion(this.questionId);
  }

  /**
 * Loads the 2NF question data by questionId and resets the puzzle state.
 * Initializes available columns and target tables (left and right widgets).
 * @param questionId: The question ID to load.
 */
  loadQuestion(questionId: number): void {
    this.parsons2NFService.loadQuestionData(questionId).subscribe({
      next: (q) => {
        this.currentQuestion = q;

        const reset = this.parsons2NFService.resetPuzzle(q.twoNFTables);
        this.state = { ...this.state, ...reset, questionLoaded: true, summaryModalContent: q.summary || '' };
      },
      error: (err) => {
      }
    });
  }

  /**
 * Resets the puzzle back to its initial configuration using the
 * question’s default 2NF table structure. Keeps meta progress intact.
 */
  resetPuzzle(): void {
    if (!this.currentQuestion) return;
    const reset = this.parsons2NFService.resetPuzzle(this.currentQuestion.twoNFTables);
    this.state = {
      ...this.state,
      ...this.parsons2NFService.resetPuzzle(this.currentQuestion.twoNFTables)
    };

  }

  /**
  * Evaluates the player’s current 2NF solution.
  * Compares current column assignments to the correct ones from the backend and updates feedback highlights and messages.
  * Shows the “Next” button when all columns are correctly placed.
  */
  getFeedback(): void {
    if (!this.currentQuestion) return;

    const { highlightedStatus, feedbackMessages, allCorrect } =
      this.parsons2NFService.getFeedback(this.currentQuestion, this.state.columnAssignments);

    this.state.highlightedStatus = highlightedStatus;
    this.state.feedbackMessages = feedbackMessages;
    this.state.feedbackGiven = true;
    this.state.showNextButton = allCorrect;
  }

  /**
  * Simulates the “cheat” functionality that progressively moves
  * columns into their correct tables, one by one with an orange animation.
  * Displays an animation per step and calls `getFeedback()` when done to validate.
  */
  simulateCheat(): void {
    if (!this.currentQuestion) return;

    this.state.isCheating = true;
    this.state.cheatAnimating = true;

    this.parsons2NFService.cheatAllColumnsStepByStep(
      this.currentQuestion,
      [...this.state.availableColumns],
      { ...this.state.columnAssignments },
      (updatedAvailable, updatedAssignments, movedCol) => {
        this.state = {
          ...this.state,
          availableColumns: updatedAvailable,
          columnAssignments: updatedAssignments,
          currentlyCheatingColumn: movedCol,
          cheatAnimating: true
        };
      },
      () => {
        this.state = {
          ...this.state,
          isCheating: false,
          cheatAnimating: false,
          currentlyCheatingColumn: null
        };
        this.getFeedback();
      }
    );
  }

  /**
  * Handles drag-and-drop events between available and target tables.
  * Updates state with the result of the move.
  * @param event - The CDK drag-drop event with column transfer data.
  */
  onDrop(event: CdkDragDrop<ParsonsColumn[]>): void {
    const dropResult = this.parsons2NFService.applyDrop(
      event,
      this.state.availableColumns,
      this.state.columnAssignments,
      this.state.highlightedStatus,
      this.state.feedbackMessages
    );
    this.state = { ...this.state, ...dropResult };
  }

  /** Emits an event to navigate back to the previous stage (1NF). */
  emitPreviousStage() { this.stageChange.emit(this.currentStage - 1); }

  /** Emits an event to navigate forward to the next stage (3NF). */
  emitNextStage() { this.stageChange.emit(this.currentStage + 1); }

  /** Resets the current puzzle using the reset button. */
  clickResetPuzzle() { this.resetPuzzle(); }

  /** Angular trackBy helper for efficient DOM rendering (columns). */
  trackByColumn = (_: number, col: any) => col.columnName;

  /** Angular trackBy helper for efficient DOM rendering (tables). */
  trackByTable = (_: number, tbl: any) => tbl.tableName;

  /** Helper for detecting PK columns used in the frontend*/
  isPrimaryKey = (col: any) => col.keyType === 'PK';

  /** Helper for detecting normal (non-key) columns used in the frontend */
  isNormalKey = (col: any) => col.keyType === 'NONE';

  /** Helper for detecting FK columns used in the frontend */
  isForeignKey = (col: any) => col.keyType === 'FK';

  /** Helper method that returns the expected number of columns for a given table name and displays that in the frontend*/
  getExpectedColumnCount(tableName: string) { return this.currentQuestion?.feedback.filter(f => f.targetTable === tableName).length ?? 0; }

  /** Fetches the references of the tables displayed on the widget to the right (for FK feedback display). */
  getReferencesForTable(table: any) { return this.currentQuestion?.feedback.filter(f => f.targetTable === table.tableName && f.references).map(f => f.references) ?? []; }

  /**
   * Helper method that creates a unique key for each column-feedback pair, used in the frontend to map the correct feedbackId to the correct column+table pair of the frontend
   * @param col: The column to evaluate.
   * @param table: The table name where the column was dropped.
   */
  feedbackKeyForColumn(col: ParsonsColumn, table: string) {
    const refVal = col.referencesTable?.trim() || 'none';
    return `${col.columnName}_${table}_${refVal}`;
  }

  /** Emits completion event to load the next stage (3NF). */
  navigateToNextQuestion() { this.completed.emit(); }

  /** Returns the current list of active drop zones to the right (used by Angular CDK). */
  get tableLists() { return this.tableDropLists?.map(dl => dl.id) ?? []; }

  /** Toggles the respective modal dynamically. */
  toggleModal(type: 'character' | 'cheat' | 'summary' | 'table', open: boolean): void {
    this.state = toggleModalBase(this.state, type, open);
  }

}