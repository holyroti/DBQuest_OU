import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

import { Parsons1NFQuestion } from '../../models/parsons/parsons-1nf.model';
import { LineItem } from '../../models/parsons/parsons-1nf.model'; 
import { Parsons1NFService } from './parsons-1nf.service';
import { Parsons1NFGameState, createInitialParsons1NFState } from '../../states/parsons/parsons-1nf.state';
import { GameLogService } from '../../shared-services/game-log.service';
import { UserService } from '../../shared-services/user.service';
import { GameComponentBase } from '../../interfaces/game-component-base';
import { AppModalComponent } from '../../shared-components/app-modal/app-modal.component';
import { VisualNovelComponent } from '../../shared-components/visual-novel/visual-novel.component';
import { dannyDialogues } from '../../visual-novel-dialogues/dannyDialogue';
import { DomSanitizer } from '@angular/platform-browser';
import { toggleModalBase } from '../../states/parsons/parsons-base.state';

@Component({
  selector: 'app-parsons-1nf',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule, AppModalComponent, VisualNovelComponent],
  templateUrl: './parsons-1nf.component.html',
  styleUrls: ['./parsons-1nf.component.css'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ transform: '{{ direction }}', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ], { params: { direction: 'translateX(-100%)' } }),
    ]),
  ],
})

/**
 * Main component for handling the 1NF Parsons Problem stage.
 * Extends the base game component with 1NF-specific logic such as single question line ordering,
 * Contains application page rendering, feedback validation, cheat simulation, and modal management.
 */

export class Parsons1NFComponent
  extends GameComponentBase<Parsons1NFQuestion, LineItem>
  implements OnInit, OnChanges {
  @Input() currentQuestion: Parsons1NFQuestion | null = null;
  @Input() override questionId: number | null = null;
  @Input() override currentStage = 1;
  @Output() override stageChange = new EventEmitter<number>();
  @Output() override completed = new EventEmitter<void>();

  state: Parsons1NFGameState = createInitialParsons1NFState();
  userId = '';
  sectionId = 1;
  //dannyDialogue = dannyDialogues;

  constructor(
    private parsons1NFService: Parsons1NFService,
    toastr: ToastrService,
    gameLogService: GameLogService,
    userService: UserService,
    private cdRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
    super(toastr, gameLogService, userService);
  }

  /**
   * Initializes the component, loads the question data based on the given questionId and sets the logged-in user's ID. Checking the user's ID per stage to see if the user's account has not been switched (validation)
   */
  ngOnInit(): void {
    if (this.questionId) this.loadQuestion(this.questionId);
    this.userId = this.userService.getLoggedInUserId() || '';
    this.state.currentCharacterDialogues = dannyDialogues;
  }

  /**
   * Reacts if the questionId changes and renders the next question for this 1NF stage
   * @param changes: object containing the new questionId if changed
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questionId']?.currentValue) {
      this.loadQuestion(changes['questionId'].currentValue);
    }
  }

  /**
  * Loads the 1NF question data by ID and resets the puzzle state.
  * Uses the service to fetch question content and initialize draggable items.
  *
  * @param id: The ID of the question to load.
  */
  loadQuestion(id: number): void {
    this.parsons1NFService.loadQuestionData(id).subscribe({
      next: (q) => {
        this.currentQuestion = q;

        const reset = this.parsons1NFService.resetPuzzle(q.code);
        this.state = {
          ...this.state,
          ...reset,
          availableItems: [...q.code],
          questionLoaded: true,
          summaryModalContent: q.summary
        };
      },
    });
  }

  /**
   * Evaluates the player's current solution.
   * Compares placed items with the correct order, fetched from the backend and updates
   * visual feedback (highlight colors, messages, and proceed to next-button visibility).
   */
  getFeedback(): void {
    if (!this.currentQuestion) return;
    this.getFeedbackClickCount++;
    const result = this.parsons1NFService.getFeedback(this.state.placedItems, this.currentQuestion);
    this.state.highlightedStatus = result.highlightedStatus;
    this.state.feedbackMessages = result.feedbackMessages;
    this.state.showNextButton = result.allCorrectPlaced;
    this.state.feedbackGiven = true;
  }

  /**
 * Resets the puzzle to its initial state using the questionId's default question-lines 
 * Keeps meta properties (current progress, getFeedbackClicked counters) intact.
 */
  resetPuzzle(): void {
    if (!this.currentQuestion) return;
    const resetFields = this.parsons1NFService.resetPuzzle(this.currentQuestion.code);
    this.state = { ...this.state, ...resetFields };
    this.state.isCheating = false;
  }

  /**
    * Simulates the "cheat" behavior where the system automatically
    * places the correct order of items, and.
    * Updates the full game state accordingly.
    */
  async simulateCheat(): Promise<void> {
    if (!this.currentQuestion) return;
    this.state = await this.parsons1NFService.runCheat(this.state, this.currentQuestion);
  }

  /**
  * Handles item dropping between available and placed lists (left and right widgets).
  * Updates the game state based on the result of the service logic.
  *
  * @param event: The Angular CDK drag-drop event containing moved items.
  */
  onDrop(event: CdkDragDrop<LineItem[]>): void {
    const dropResult = this.parsons1NFService.applyDrop(
      event,
      this.state.availableItems,
      this.state.placedItems,
      this.state.highlightedStatus,
      this.state.feedbackMessages
    );
    this.state = { ...this.state, ...dropResult };
    this.cdRef.detectChanges();
  }

  /** Emits an event to navigate the page to the previous stage (1NF/2NF/3NF). At 1NF this is disabled */
  emitPreviousStage() { this.stageChange.emit(this.currentStage - 1); }

  /** Emits an event to navigate the page to the previous stage (1NF/2NF/3NF). At 1NF proceed to 2NF with the same questionId */
  emitNextStage() { this.stageChange.emit(this.currentStage + 1); }


  /** Resets the puzzle via button click. */
  clickResetPuzzle() { this.resetPuzzle(); }

  /** Emits an event indicating the question was completed and redirects to the next stage (2NF) of the same questionId. */
  navigateToNextQuestion() { this.completed.emit(); }

  /** Toggles the respective modal dynamically. */
  toggleModal(type: 'character' | 'cheat' | 'summary' | 'table', open: boolean): void {
    this.state = toggleModalBase(this.state, type, open);
  }

}
