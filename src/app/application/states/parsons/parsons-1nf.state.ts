import { ParsonsGameStateBase, createInitialParsonsBaseState } from './parsons-base.state';
import { LineItem } from '../../models/parsons/parsons-1nf.model';

/**
 * Game state for the 1NF Parsons stage.
 * Tracks the available and placed code lines for the drag-and-drop interface.
 */
export interface Parsons1NFGameState extends ParsonsGameStateBase {
  /** List of all available draggable code lines */
  availableItems: LineItem[];

  /** List of code lines currently placed in the user's solution area (right widget) */
  placedItems: LineItem[];
}

/** Initializes the 1NF state with empty arrays and base defaults. */
export function createInitialParsons1NFState(): Parsons1NFGameState {
  return {
    ...createInitialParsonsBaseState(),
    availableItems: [],
    placedItems: []

  };
}