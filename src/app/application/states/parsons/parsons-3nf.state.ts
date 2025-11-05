import { ParsonsGameStateBase, createInitialParsonsBaseState } from './parsons-base.state';
import { Parsons3NFQuestion, Parsons3NFTable, Parsons3NFFeedback } from '../../models/parsons/parsons-3nf.model';

/**
 * Game state for the 3NF Parsons stage.
 * Stores both the player's constructed solution and the backend-defined solution.
 */
export interface Parsons3NFGameState extends ParsonsGameStateBase {
  /** Currently loaded 3NF question */
  currentQuestion?: Parsons3NFQuestion;

  /** Correct target solution tables (from backend) */
  solutionTables: Parsons3NFTable[];

  /** Player’s current drag/dropped inputted tables */
  userInputTables: Parsons3NFTable[];

  /** Dropdown options for available column names, displayed in the frontend */
  availableColumnNames: string[];

  /** Dropdown options for available table references */
  availableReferences: { id: number; name: string }[];

  /** Map of table IDs to names for fast lookup */
  tableIdToName: { [key: number]: string };

  /** Feedback dataset used to validate player input */
  feedback: Parsons3NFFeedback[];
  showCheatConfirmModal: boolean;

  /** Instructional text displayed above the tables */
  currentStepText: string;

  /** Whether answers are currently revealed (disables inputs) */
  showAnswers: boolean;

  /** Detailed feedback messages grouped by aspect (column, keyType, reference) */
  detailedFeedbackMessages: {
    kolom: Record<string, string>;
    keyType: Record<string, string>;
    reference: Record<string, string>;
  };
}

/** Initializes the 3NF state with empty arrays and default instructional text. */
export function createInitialParsons3NFState(): Parsons3NFGameState {
  return {
    ...createInitialParsonsBaseState(),
    currentQuestion: undefined,
    solutionTables: [],
    userInputTables: [],
    availableColumnNames: [],
    availableReferences: [],
    tableIdToName: {},
    feedback: [],
    showCheatConfirmModal: false,
    currentStepText: 'Vul de juiste tabellen in volgens 3NF.',
    showAnswers: false,
    detailedFeedbackMessages: { kolom: {}, keyType: {}, reference: {} },
  };
}
