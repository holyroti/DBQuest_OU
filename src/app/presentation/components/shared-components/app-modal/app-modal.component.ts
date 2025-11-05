import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})

//Generic Modal component for displaying summaries, and cheat confirmation modals
export class AppModalComponent {

  //If acting as a summary modal, fill in its title, content and flag for display
  @Input() titleSummary: string = '';
  @Input() contentSummary: string = '';
  @Input() showModalSummary: boolean = false;


  //If acting as a cheat modal, fill in its title, content and flag for display
  @Input() titleCheat: string = '';
  @Input() contentCheat: string = '';
  @Input() showModalCheat: boolean = false;

  //Closing emitters
  @Output() closeModalSummary = new EventEmitter<void>();
  @Output() closeModalCheat = new EventEmitter<void>();
  @Output() confirmCheat = new EventEmitter<void>();

  closeSummary(): void {
    this.closeModalSummary.emit();
  }

  closeCheat(): void {
    this.closeModalCheat.emit();
  }
}
