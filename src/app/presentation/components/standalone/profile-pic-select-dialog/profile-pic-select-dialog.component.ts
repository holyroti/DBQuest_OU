import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-pic-select-dialog',
  templateUrl: './profile-pic-select-dialog.component.html',
  styleUrls: ['./profile-pic-select-dialog.component.css'],
  standalone: true,
  imports: [CommonModule]
})

//Profile picture selection component, accessed by clicking on your profile picture in the Toolbar(component)
export class ProfilePicSelectDialogComponent {
  availableIcons: string[] = Array.from({ length: 10 }, (_, i) => `assets/avatars/icon${i + 1}.png`);
  selectedIcon: string = '';
  constructor(
    public dialogRef: MatDialogRef<ProfilePicSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedIcon = data?.currentIcon || this.availableIcons[0];
  }

  selectIcon(icon: string): void {
    this.selectedIcon = icon;
  }

  save(): void {
    this.dialogRef.close(this.selectedIcon);
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
