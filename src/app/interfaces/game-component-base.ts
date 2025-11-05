// src/app/shared/game-component.base.ts
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GameLogService } from '../shared-services/game-log.service';
import { UserService } from '../shared-services/user.service';

@Directive()

//Main interface for the 1/2/3NF component sharing related methods. These need to be implemented in the corresponding components
export abstract class GameComponentBase<TQuestion, TItem> {
  @Input() questionId: number | null = null;
  @Input() currentStage = 1;
  @Output() completed = new EventEmitter<void>();
  @Output() stageChange = new EventEmitter<number>();

  feedbackMessages: Record<string | number, string> = {};
  highlightedStatus: Record<string | number, 'correct' | 'incorrect' | 'neutral'> = {};
  feedbackGiven = false;
  showNextButton = false;
  getFeedbackClickCount = 0;
  cheatUsed = false;

  constructor(
    protected toastr: ToastrService,
    protected gameLogService: GameLogService,
    protected userService: UserService
  ) { }

  abstract loadQuestion(id: number): void | Promise<void>;
  abstract resetPuzzle(): void;
  abstract getFeedback(): void;
  abstract simulateCheat(): void;

  runCheat(tutor: string): void {
    this.cheatUsed = true;
    this.toastr.info('🙋' + tutor + ' vult de juiste antwoorden in!');
    this.resetPuzzle();
    this.simulateCheat();
  }
  

}
