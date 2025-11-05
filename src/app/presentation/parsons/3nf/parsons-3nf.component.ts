import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Parsons3NFGameState, createInitialParsons3NFState } from '../../states/parsons/parsons-3nf.state';
import { Parsons3NFService } from './parsons-3nf.service';
import { ParsonsColumn } from '../../models/parsons/parsons-base.model';
import { AppModalComponent } from '../../shared-components/app-modal/app-modal.component';
import { VisualNovelComponent } from '../../shared-components/visual-novel/visual-novel.component';
import { UserService } from '../../shared-services/user.service';
import { GameLogService } from '../../shared-services/game-log.service';
import { GameComponentBase } from '../../interfaces/game-component-base';
import { ToastrService } from 'ngx-toastr';
import { Parsons3NFQuestion } from '../../models/parsons/parsons-3nf.model';
import { GameLog } from '../../models/game-log.model';
import { toggleModalBase } from '../../states/parsons/parsons-base.state';
import { annaDialogues } from '../../visual-novel-dialogues/annaDialogue';
@Component({
  selector: 'app-parsons-3nf',
  templateUrl: './parsons-3nf.component.html',
  styleUrls: ['./parsons-3nf.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgClass,
    NgIf,
    NgForOf,
    AppModalComponent,
    VisualNovelComponent,
  ],
})

/**
 * Main component for handling the 3NF Parsons Problem stage.
 * Extends the base game component with logic for constructing tables, defining keys,
 * and managing foreign key relationships. This stage focuses on removing transitive dependencies.
 * Includes dynamic dropdown inputs, feedback validation, cheat assistance, badge awarding,
 * and logging of player actions.
 */

export class Parsons3NFComponent extends GameComponentBase<Parsons3NFQuestion, ParsonsColumn> implements OnInit {

  /** Holds the dynamic state of the current 3NF game session. */
  state: Parsons3NFGameState = createInitialParsons3NFState();

  @Input() override questionId: number | null = null;
  @Input() override currentStage = 3;

  /** Emits when the user navigates between stages (2NF<->3NF). */
  @Output() override stageChange = new EventEmitter<number>();

  /** Emits when the user fully completes the question. */
  @Output() override completed = new EventEmitter<void>();

  /** Emits when a badge is awarded after question completion. */
  @Output() badgeAward = new EventEmitter<{
    cheatUsed: boolean;
    questionId: number;
    badgeAwarded: boolean;
    alreadyEarned: boolean;
  }>();

  /** Emits when the next question should be loaded. */
  @Output() nextQuestion = new EventEmitter<number>();


  constructor(
    public parsons3NFService: Parsons3NFService,
    toastr: ToastrService,
    gameLogService: GameLogService,
    userService: UserService
  ) {
    super(toastr, gameLogService, userService);

  }

  /**
  * Initialize the component by loading the questionId.
  */
  async ngOnInit(): Promise<void> {
    if (this.questionId != null) {
      await this.loadQuestion(this.questionId);
    }

    this.state.currentCharacterDialogues = annaDialogues;
  }

  /**
   * Loads the 3NF question data and populates the 3nf state.
   * This includes available columns, table structures, dropdown options, and feedback data.
   *
   * @param questionId: The ID of the question to load.
   */
  async loadQuestion(questionId: number): Promise<void> {
    await this.parsons3NFService.loadQuestion(this.state, questionId);
  }

  /**
  * Resets the puzzle to its default state, clearing user input
  */
  resetPuzzle(): void {
    this.parsons3NFService.resetPuzzle(this.state);
  }

  /**
 * Evaluates the player’s constructed tables (in the service).
 * Checks correctness for column names, key types, and reference relationships.
 * Updates detailed feedback messages for each dropdown and highlights incorrect answers.
 */
  getFeedback(): void {
    this.state = this.parsons3NFService.getFeedback(this.state);
  }

  /**
  * Activates the “cheat” functionality.
  * Automatically fills all dropdowns with the correct answers,
  * shows animations, and disables further input.
  */
  simulateCheat(): void {
    this.parsons3NFService.runCheat(this.state);
  }

  emitPreviousStage() { this.stageChange.emit(this.currentStage - 1); }
  emitNextStage() { this.stageChange.emit(this.currentStage + 1); }
  clickResetPuzzle() { this.resetPuzzle(); }



  /**
  * Handles the completion of the 3NF question.
  * Creates a game log record, awards badges, and emits events for the next question.
  * Uses the game log service to store completion metrics: amounts of times clicked on the getfeedback button, and cheat status.
  */
  navigateToNextQuestion(): void {
    const userId = this.userService.getLoggedInUserId() || '';

    const completionTimeObj = new Date();
    const formattedCompletionTime = completionTimeObj.toISOString()
      .replace('T', ' ')
      .replace('Z', '');

    const achievementAwarded = this.state.cheatUsed ? "N" : "Y";
    const badgeId = this.state.cheatUsed ? null : this.state.currentQuestion?.questionId || null;

    const logData: GameLog = {
      userId,
      questionId: this.state.currentQuestion?.questionId || 1,
      sectionId: 3,
      completionTime: formattedCompletionTime,
      getFeedbackClicks: this.state.getFeedbackClickCount,
      cheatUsed: this.state.cheatUsed ? "Y" : "N",  // nu matcht met union
      achievementAwarded,
      badgeId
    };

    this.gameLogService.createGameLog(logData).subscribe({
      next: () => {
        this.toastr.success(
          achievementAwarded === "Y"
            ? `Gefeliciteerd! Je hebt vraag ${logData.questionId} afgerond en een badge verdiend!`
            : `Je hebt vraag ${logData.questionId} afgerond, maar geen badge verdiend.`,
          'Vraag afgerond'
        );

        this.badgeAward.emit({
          cheatUsed: this.state.cheatUsed,
          questionId: logData.questionId || 1,
          badgeAwarded: achievementAwarded === 'Y',
          alreadyEarned: achievementAwarded === 'N'
        });

        this.nextQuestion.emit(logData.questionId);
      },
      error: (err) => {
        this.nextQuestion.emit(logData.questionId);
      }
    });

    this.completed.emit();
  }

  /**
   * Confirms that the user wants to cheat because that will result in no badge
   */
  confirmCheat(): void {
    this.toastr.info('🙋 Anna vult de juiste antwoorden in!');
    this.state = this.parsons3NFService.runCheat(this.state);
    this.state.showCheatConfirmModal = false;

  }

  /** Toggles the respective modal dynamically. */
  toggleModal(type: 'character' | 'cheat' | 'summary' | 'table', open: boolean): void {
    this.state = toggleModalBase(this.state, type, open);
  }
}
