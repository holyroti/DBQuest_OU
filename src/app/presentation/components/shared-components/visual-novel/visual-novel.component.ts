import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { dialogues } from '../../visual-novel-dialogues/dialogues';
import {
  Backgrounds,
  characterAssets,
  CharacterState,
  DialogueEntry,
  DialogueMap,
  SceneNavigation
} from '../../visual-novel-dialogues/assets.config';

@Component({
  selector: 'app-visual-novel',
  templateUrl: './visual-novel.component.html',
  styleUrls: ['./visual-novel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VisualNovelComponent implements OnDestroy, OnInit {
  @Input() dialoguesInput?: DialogueMap;
  @Input() currentQuestionId?: number;

  // Default scene key if no question id is provided
  currentScene: keyof DialogueMap = 'introduction';
  dialogueIndex: number = 0;
  // Use default dialogues if none are provided via Input
  dialogues: DialogueMap = dialogues;

  currentDialogue: DialogueEntry = this.dialogues[this.currentScene][this.dialogueIndex];
  currentBackground: string = Backgrounds.hallway;

  // Three character states (index 0: Danny, 1: Larissa, 2: Anna)
  charStates: CharacterState[] = [
    { name: '', visible: false, base: '', eyes: '', mouth: '', isBreatheActive: false },
    { name: '', visible: false, base: '', eyes: '', mouth: '', isBreatheActive: false },
    { name: '', visible: false, base: '', eyes: '', mouth: '', isBreatheActive: false }
  ];

  // To reward a potential badge in the future after listening to the conversation
  currentAchievement: any = null;

  // Array to keep track of the selected choices / and to go back
  private historyStack: Array<{ scene: string; index: number }> = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.dialoguesInput) {
      this.dialogues = this.dialoguesInput;
    }
    if (this.currentQuestionId !== undefined && this.currentQuestionId !== null) {
      this.currentScene = (`question${this.currentQuestionId}` as keyof DialogueMap);
    }
    this.loadDialogue();
  }

  ngOnDestroy() {
    this.charStates.forEach(char => {
      if (char.blinkInterval) clearInterval(char.blinkInterval);
      if (char.mouthInterval) clearInterval(char.mouthInterval);
    });
  }

  loadDialogue() {
    const dialogue = this.dialogues[this.currentScene]?.[this.dialogueIndex];
    if (!dialogue) {
      return;
    }
    this.currentDialogue = dialogue;

    if (dialogue.background) {
      this.currentBackground = Backgrounds[dialogue.background as keyof typeof Backgrounds] || this.currentBackground;
    }

    if (dialogue.characters) {
      // Hide all characters first
      this.charStates.forEach(char => (char.visible = false));
      dialogue.characters.forEach(charConfig => {
        const { index, name, eyes, mouth, breathe } = charConfig;
        this.setCharacterExpression(index, name, eyes, mouth, breathe);
      });
    } else {
      // Hide all if no characters are defined
      this.charStates.forEach(char => (char.visible = false));
    }
  }

  //Update the expressions of the characters: eyes and mouths are loaded individually
  setCharacterExpression(charIndex: number, name: string, eyesKey: string, mouthKey: string, breathe?: boolean) {
    // Clear old intervals
    if (this.charStates[charIndex].blinkInterval) clearInterval(this.charStates[charIndex].blinkInterval);
    if (this.charStates[charIndex].mouthInterval) clearInterval(this.charStates[charIndex].mouthInterval);

    if (!name) {
      this.charStates[charIndex] = { name: '', visible: false, base: '', eyes: '', mouth: '', isBreatheActive: false };
      return;
    }

    // Make character visible with chosen expression
    this.charStates[charIndex].visible = true;
    this.charStates[charIndex].name = name;
    this.charStates[charIndex].base = characterAssets[name]?.base || '';
    this.charStates[charIndex].eyes = characterAssets[name]?.eyes[eyesKey] || '';
    this.charStates[charIndex].mouth = characterAssets[name]?.mouth[mouthKey] || '';
    this.charStates[charIndex].isBreatheActive = !!breathe;

    this.startBlinking(charIndex, name, eyesKey);
    this.startMouthMovement(charIndex, name, mouthKey);
  }

  //Blink their eyes to feel more lively
  startBlinking(charIndex: number, characterName: string, eyesKey: string) {
    const blinkSprite = characterAssets[characterName]?.eyes['blink'];
    if (!blinkSprite) return;

    //Blink with a delay of 200ms
    const blinkOnce = () => {
      this.charStates[charIndex].eyes = blinkSprite;
      setTimeout(() => {
        this.charStates[charIndex].eyes = characterAssets[characterName]?.eyes[eyesKey] || '';
      }, 200);
    };

    // Helper function to schedule the next blink at a random time
    const scheduleNextBlink = () => {
      const randomDelay = Math.floor(Math.random() * 4000) + 2000; // 2-6 seconds
      this.charStates[charIndex].blinkInterval = setTimeout(() => {
        blinkOnce();
        scheduleNextBlink(); // schedule again
      }, randomDelay);
    };

    // Kick off the first blink
    scheduleNextBlink();
  }

  //Animate the mouth movement to feel more lively
  startMouthMovement(charIndex: number, characterName: string, mouthKey: string) {
    // Animate talking frames if mouthKey is "talking1" or "talking2"
    if (!(mouthKey === 'talking1' || mouthKey === 'talking2')) return;

    const mouthFrames = [
      characterAssets[characterName].mouth['talking1'],
      characterAssets[characterName].mouth['talking2']
    ];
    let frameIndex = 0;
    this.charStates[charIndex].mouthInterval = setInterval(() => {
      frameIndex = (frameIndex + 1) % mouthFrames.length;
      this.charStates[charIndex].mouth = mouthFrames[frameIndex];
    }, 200);
  }

  // Renders the next dialogue options
  advanceDialogue(next: number | string | SceneNavigation | null = null) {
    // Push current state onto history stack
    this.historyStack.push({ scene: this.currentScene as string, index: this.dialogueIndex });

    // Figure out new scene/index
    if (typeof next === 'number') {
      this.dialogueIndex = next;
    } else if (typeof next === 'string') {
      this.currentScene = next;
      this.dialogueIndex = 0;
    } else if (next && typeof next === 'object' && 'scene' in next && 'index' in next) {
      this.currentScene = next.scene;
      this.dialogueIndex = next.index;
    } else if (this.currentDialogue?.next !== undefined) {
      this.dialogueIndex = this.currentDialogue.next as number;
    } else {
      return;
    }

    this.loadDialogue();
  }

  previousDialogue() {
    if (this.historyStack.length > 0) {
      const lastState = this.historyStack.pop();
      if (lastState) {
        this.currentScene = lastState.scene as keyof DialogueMap;
        this.dialogueIndex = lastState.index;
        this.loadDialogue();
      }
    }
  }

  closeAchievementModal() {
    this.currentAchievement = null;
  }

  //sanitize a url if a video is displayed
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //Helper function to display a nested table in the frontend
  isNestedTable(cell: any): cell is { headers: string[]; rows: any[][] } {
    return cell && typeof cell === 'object' && 'headers' in cell && 'rows' in cell;
  }

  hasNextDialogue(): boolean {
    //If there are choices to choose from, do not display the button "next" yet
    if (this.currentDialogue.choices && this.currentDialogue.choices.length > 0) {
      return false;
    }

    //If currentDialogue.next is undefined or null, no valid next
    if (this.currentDialogue.next === undefined || this.currentDialogue.next === null) {
      return false;
    }

    // If we reach here, there's a valid next property, so show the next arrow
    return true;
  }
}
