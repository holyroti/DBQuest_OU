import { DialogueMap } from '../../visual-novel-dialogues/assets.config';
export type FeedbackStatus = 'correct' | 'incorrect' | 'neutral';

/**
 * Shared base state for all Parsons Problem stages (1NF, 2NF, and 3NF).
 * 
 * Responsibilities:
 * Manage global UI flags (modals, feedback, next button)
 * Store progress and feedback data shared across all stages
 * Provide structure for stage-specific state extensions
 */

export interface ParsonsGameStateBase {
  /** Generic set of boolean flags for modals to open (character, table, summary, cheat) */
  modals: Record<'character' | 'table' | 'summary' | 'cheat', boolean>;

  /** Indicates whether the "Next" button should be shown */
  showNextButton: boolean;

  /** True once feedback has been given for the current question */
  feedbackGiven: boolean;

  /** Whether the current question has been fully loaded and frontend is ready */
  questionLoaded: boolean;

  /** Whether the user is currently in cheat animation mode */
  isCheating: boolean;

  /** Whether the user has ever used the cheat feature for this question */
  cheatUsed: boolean;

  /** Number of times the player requested feedback */
  getFeedbackClickCount: number;

  /** Highlighting map (element ID + status) to be used in feedback checking */
  highlightedStatus: Record<string | number, FeedbackStatus>;


  /** Textual feedback map (element ID + message from the backend) */
  feedbackMessages: Record<string | number, string>;

  /** Progress label shown at the bottom or top of the stage (with the next instruction) */
  progressText: string;

  /** Whether the character dialogue modal is open */
  showCharacterModal: boolean;

  /** The current dialogue map used for the active NPC of the current stage */
  currentCharacterDialogues: DialogueMap;

  /** Whether the table overview modal is open (containing mock data)*/
  showTableModal: boolean;

  /** Whether the summary modal is visible */
  showSummaryModal: boolean;

  /** Whether the cheat confirmation modal is visible */
  showCheatConfirmModal: boolean;

  /** Content shown inside the summary modal */
  summaryModalContent: string;
}

/**
 * Initializes the shared base state with default values for the 1NF/2NF/3NF stages.
 * Used by each stage-specific `createInitialParsons1/2/3NFState()` initializer.
 */
export function createInitialParsonsBaseState(): ParsonsGameStateBase {
  return {
    modals: {
      character: false,
      table: false,
      summary: false,
      cheat: false,
    },
    showNextButton: false,
    feedbackGiven: false,
    questionLoaded: false,
    isCheating: false,
    cheatUsed: false,
    getFeedbackClickCount: 0,
    highlightedStatus: {},
    feedbackMessages: {},
    progressText: '',
    showCharacterModal: false,
    currentCharacterDialogues: {},
    showTableModal: false,
    showSummaryModal: false,
    showCheatConfirmModal: false,
    summaryModalContent: ""
  };

}

/**
 * Toggles one of the shared modals ('character', 'table', 'summary', 'cheat')
 * for any Parsons Problem stage generically.
 *
 * @param state: Current game state (1NF, 2NF, or 3NF)
 * @param type : The modal type to open or close
 * @param open :Boolean indicating whether to show (true) or hide (false)
 */
export function toggleModalBase<T extends ParsonsGameStateBase>(
  state: T,
  type: 'character' | 'table' | 'summary' | 'cheat',
  open: boolean
): T {
  const newState = {
    ...state,
    modals: {
      ...state.modals,
      [type]: open,
    },
  };

  switch (type) {
    case 'character':
      (newState as ParsonsGameStateBase).showCharacterModal = open;
      break;
    case 'table':
      (newState as ParsonsGameStateBase).showTableModal = open;
      break;
    case 'summary':
      (newState as ParsonsGameStateBase).showSummaryModal = open;
      break;
    case 'cheat':
      (newState as ParsonsGameStateBase).showCheatConfirmModal = open;
      break;
  }
  return newState;
}
