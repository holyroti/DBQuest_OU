import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ProfilePicSelectDialogComponent } from '../profile-pic-select-dialog/profile-pic-select-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserService } from '../shared-services/user.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})

// The main toolbar/progress component rendered at the top of the screen
export class ToolbarComponent {
  @Input() username: string = 'Guest';
  @Input() userIcon: string = 'assets/avatars/icon3.png';

  @Input() isPlaying: boolean = false;      // Whether to show progress bar
  @Input() stage: number = 1;              // Current stage 1=1nf, 2=2nf, 3=3nf, 4=reward (1-based)
  @Input() stages: string[] = [];          // Array of stage label descriptions

  progress = 30; //4 stages +30 for progress to fill the bar
  showInfo = false;
  showAchievements = false;

  constructor(private router: Router, public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    const user = this.userService.getLoggedInUser();
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/']);
    } else {
      this.username = user.DISPLAYNAME || 'Guest';
      this.userIcon = user.ICON || 'assets/avatars/icon3.png'; // Standard Robot icon
    }

  }

  getLoggedInUser(): any {
    try {
      const userData = sessionStorage.getItem('loggedInUser');
      return userData ? JSON.parse(userData) : null;
    } catch (e) {
      return null;
    }
  }

  openProfilePicSelectDialog(): void {
    const dialogRef = this.dialog.open(ProfilePicSelectDialogComponent, {
      width: '400px',
      data: { currentIcon: this.userIcon }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userIcon = result;

        this.userService.updateProfilePicture(result)?.subscribe({
          next: () => console.log(''),
          error: (err) => console.error('', err)
        });
      }
    });

  }

  openInfo(): void {
    this.showInfo = true;
  }

  closeInfo(): void {
    this.showInfo = false;
  }

  logout(): void {
    sessionStorage.clear();
    window.location.reload();
  }

  navigateHome(): void {
    this.router.navigate(['/landing']); // navigates to the root page
  }
}
