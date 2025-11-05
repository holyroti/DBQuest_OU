import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { UserService } from '../shared-services/user.service';
import { VisualNovelComponent } from '../shared-components/visual-novel/visual-novel.component';
import { GameLogService } from '../shared-services/game-log.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, VisualNovelComponent, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
  username: string = '';
  showUniversityModal: boolean = false;
  achievements: number[] = [];
  userId = "";
  incompleteQuestionId: number = 1; // defaults to question 1
  
  showQuestionOverviewModal = false;
  
  //Simple input for the question overview modal
  questions = [
    {
      id: 1,
      difficulty: 'Makkelijk',
      summary: 'Normaliseer een studenteninschrijvingssysteem met eenvoudige gegevens en herhalingen.'
    },
    {
      id: 2,
      difficulty: 'Gemiddeld',
      summary: 'Breng structuur aan in een excursieplanning met meerdere begeleiders per student.'
    },
    {
      id: 3,
      difficulty: 'Moeilijk',
      summary: 'Behoud overzicht in het bijhouden van tentamen-en-cijferadministratie.'
    },
    {
      id: 4,
      difficulty: 'Makkelijk',
      summary: 'Herstructureer het collegegeldbestand zodat studenten op tijd betalen.'
    },
    {
      id: 5,
      difficulty: 'Gemiddeld',
      summary: 'Normaliseer een dataset over boekbestellingen, studenten, uitgevers en boekhoeveelheden.'
    },
  ];

  constructor(private router: Router, private userService: UserService, private gameLogService: GameLogService) { }

  ngOnInit(): void {
    const user = this.userService.getLoggedInUser();
    if (!user) {
      this.router.navigate(['/']); // redirect to login if not logged in
    }

    this.username = user.DISPLAYNAME;
    this.userId = user.PLAYERID || 0;
    this.fetchAchievements();
    this.fetchIncomplete();
  }

  //Fetches the first incomplete question and stage id's (where no badge is earned yet) as input for the continue where you left off button
  fetchIncomplete(): void {
    this.gameLogService.getFirstIncomplete(this.userId).subscribe(
      (res: any) => {
        const incomplete = res.data; 
        if (incomplete && incomplete.QUESTION_ID != null) {
          this.incompleteQuestionId = incomplete.QUESTION_ID;
        } else {
          this.incompleteQuestionId = 1;
        }
      }
    );
  }

  //Fetches unlocked badges from the backend to display on the landing page
  fetchAchievements(): void {
    if (this.userId) {
      this.gameLogService.getAchievements(this.userId).subscribe(
        (res: any) => {
          if (res?.success && Array.isArray(res.data)) {
            this.achievements = res.data.map((row: any) => row.BADGE_ID);
          } else {
            this.achievements = [];
          }
        }
      );
    }
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  //Opens up the parsons main game component with the selected question id
  startGame(): void {
    this.router.navigate(['/parsons']); // navigate to game page
  }

  //Opens up the parsons main component with the last stage and questionID that has not been completed yet
  continueGame(): void {
    this.gameLogService.getFirstIncomplete(this.userId).subscribe(
      (res: any) => {
        const incomplete = res.data;

        if (incomplete && incomplete.QUESTION_ID != null && incomplete.MAX_STAGE != null) {
          const questionId = Number(incomplete.QUESTION_ID);
          const nextStage = Number(incomplete.MAX_STAGE) + 1;

          // If user has not yet finished all 3 stages, send them to the next stage of same question
          if (nextStage <= 3) {
            this.router.navigate(['/parsons', questionId, nextStage]);
          } else {
            // (optional fallback) if logic ever breaks, go to first question stage 1
            this.router.navigate(['/parsons', 1, 1]);
          }

        } else {
          // No incomplete question found: start fresh at stage and question 1
          this.router.navigate(['/parsons', 1, 1]);
        }
      },
      (err) => {
        this.router.navigate(['/parsons', 1, 1]);
      }
    );
  }

  //Opens up the tutorial visual novel overlay
  openUniversityModal(): void {
    this.showUniversityModal = true;
  }

  closeUniversityModal(): void {
    this.showUniversityModal = false;
  }

  goToQuestion(id: number) {
    this.showQuestionOverviewModal = false;
    this.router.navigate(['/parsons', id, 1]);
  }

  toggleOverview() {
    this.showQuestionOverviewModal = !this.showQuestionOverviewModal;
  }

  closeOverview() {
    this.showQuestionOverviewModal = false;
  }
}
