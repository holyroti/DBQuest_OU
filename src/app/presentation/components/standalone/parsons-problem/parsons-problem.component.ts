import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Parsons1NFComponent } from '../features/parsons-1nf/parsons-1nf.component';
import { Parsons2NFComponent } from '../features/parsons-2nf/parsons-2nf.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Parsons3NFComponent } from '../features/parsons-3nf/parsons-3nf.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-parsons-problem',
  templateUrl: './parsons-problem.component.html',
  styleUrls: ['./parsons-problem.component.css'],
  standalone: true,
  imports: [Parsons1NFComponent, Parsons2NFComponent, CommonModule, FormsModule, DragDropModule, ToolbarComponent, Parsons3NFComponent, MatProgressBarModule,],
})

//Main game component. This renders the 1NF/2NF/3NF components depending on the stage. After completing a question it renders the badge award modal + confetti animations.

export class ParsonsProblemComponent implements OnInit {
  username: string = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}').username || 'Guest';
  selectedSection: number = 1;
  selectedQuestionId: number = 1;
  stage: number = 1; // default to stage 1 when starting a new journey

  // Call the child components (1/2/3NF when progressing to next stage)
  @Output() stageChange = new EventEmitter<number>();

  //Badge Modal Properties
  showBadgeModal: boolean = false;
  badgeMessage: string = '';
  badgeImage: string = '';
  badgeRevealed: boolean = false;
  achievements: number[] = [];

  // Define the maximum question id. Currently at 5 in beta
  maxQuestionId: number = 5;

  //Labels as input for the Toolbarcomponent
  stages: string[] = [
    '0NV naar 1NV',
    '1NV naar 2NV',
    '2NV naar 3NV',
    'Claim Badge'
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedQuestionId = params['questionId'] ? +params['questionId'] : 1;
      this.stage = params['stage'] ? +params['stage'] : 1;

      // If user navigates directly to badge stage url, use fallback/default badge
      if (this.stage === 4 && !this.badgeImage) {
        this.badgeImage = '/assets/images/badges/default.png';
        this.badgeMessage = 'Oei! Je hebt deze badge nog niet verdiend. Probeer de vraag eerst op te lossen!';
        this.showBadgeModal = true;
      }
    });
  }

  nextStage(): void {
    if (this.stage > 4)
      return;

    this.stage++;
    this.router.navigate(['/parsons', this.selectedQuestionId, this.stage]);
  }

  revealBadge(): void {
    this.badgeRevealed = true;
  }

  //Opens the badge modal and displays the correct victory message
  openBadgeModal(badgeData: {
    cheatUsed: boolean;
    questionId: number;
    badgeAwarded: boolean;
    alreadyEarned: boolean;
  }): void {
    this.badgeRevealed = false;
    this.badgeImage = badgeData.badgeAwarded
      ? `/assets/images/badges/${badgeData.questionId}.png`
      : '/assets/images/badges/default.png';

    const hasAllBadges = this.achievements.length === this.maxQuestionId;

    if (badgeData.cheatUsed) {
      this.badgeMessage = 'Oei! Je hebt gespiekt 👀! We hadden het wel door hoor 😄 Probeer de volgende keer de vraag te maken zonder te spieken, dan zul je zeker deze coole badge verdienen! Je kunt het altijd opnieuw proberen ↩️!';
    } else {
      if (badgeData.alreadyEarned) {
        this.badgeMessage = `Super goed gedaan 🏅! Je hebt vraag ${badgeData.questionId} al eens eerder afgerond, dus de badge heb je al! 😄 Lekker aan het oefenen?`;
      } else {
        this.badgeMessage = `Gefeliciteerd! 🎉 Je hebt een badge verdiend voor het afronden van vraag ${badgeData.questionId}.`;
      }

      if (hasAllBadges) {
        this.badgeMessage += ` 🎉 En wow, je hebt alle ${this.maxQuestionId} badges verzameld en het spel uitgespeeld! Dank je wel voor het spelen! 🙌`;
      }
    }

    this.badgeRevealed = badgeData.badgeAwarded;
    this.showBadgeModal = true;
    this.stage = 4;
    this.router.navigate(['/parsons', badgeData.questionId, this.stage]);
  }

  // Goes to the next question available that is not completed yet
  handleStage3Complete(questionId: number): void {
    this.stage = 4;
    this.showBadgeModal = true;
    this.router.navigate(['/parsons', questionId, this.stage]);
  }

  // Called from the badge modal's Next Question button. If all 5 questions are completed display a toast and go to the first question
  nextQuestionAndCloseBadge(): void {
    this.showBadgeModal = false;

    if (this.selectedQuestionId >= this.maxQuestionId) {
      this.selectedQuestionId = 1;
      this.toastr.success('Dank je wel voor het spelen! Je hebt alle (5) vragen uitgespeeld! Je keert nu terug naar vraag 1!', 'Game Uitgespeeld!');
    } else {
      this.selectedQuestionId++;
    }

    this.stage = 1;
    this.router.navigate(['/parsons', this.selectedQuestionId, this.stage]);
  }

  //Go to the landing page
  toHome(): void {
    this.router.navigate(['/landing']);
  }

  //Retry the current question
  retryCurrentQuestion(): void {
    // Close the badge modal
    this.showBadgeModal = false;
    // Keep the same question ID; reset stage to 1.
    this.stage = 1;
    this.router.navigate(['/parsons', this.selectedQuestionId, this.stage]);
  }

  //Invokes the next stage(1-4) of the current question
  navigateToStage(newStage: number): void {
    if (newStage >= 1 && newStage <= 3) {
      this.stage = newStage;
      this.router.navigate(['/parsons', this.selectedQuestionId, newStage]);
    }
  }

}
