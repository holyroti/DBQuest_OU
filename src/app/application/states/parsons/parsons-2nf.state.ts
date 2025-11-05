import { ParsonsGameStateBase, createInitialParsonsBaseState } from './parsons-base.state';
import { ParsonsColumn } from '../../models/parsons/parsons-base.model';

/**
 * Game state for the 2NF Parsons stage.
 * Manages column assignments, modal visibility, and cheat progress.
 */
export interface Parsons2NFGameState extends ParsonsGameStateBase {
  /** List of all available columns not yet assigned to a table */
  availableColumns: ParsonsColumn[];

  /** Mapping of tableName + assigned columns by the player */
  columnAssignments: { [tableName: string]: ParsonsColumn[] };
  cheatAnimating: boolean;

  /** Stores the column currently being moved during cheat animation */
  currentlyCheatingColumn: ParsonsColumn | null;

  /** Last drag-and-drop direction ('left' or 'right') used for animations*/
  dropDirection: 'left' | 'right' | null;
  summaryModalContent: string;
  showSummaryModal: boolean;
  showTableModal: boolean;
}

/** Initializes the 2NF state with default values and empty structures. */
export function createInitialParsons2NFState(): Parsons2NFGameState {
  return {
    ...createInitialParsonsBaseState(),
    availableColumns: [],
    columnAssignments: {},
    cheatAnimating: false,
    currentlyCheatingColumn: null,
    dropDirection: null,
    summaryModalContent: '',
    showSummaryModal: false,
    showTableModal: false,
  };
}
