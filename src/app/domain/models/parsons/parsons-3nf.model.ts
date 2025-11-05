import { ParsonsQuestionBase } from './parsons-base.model';

/**
 * 3NF-specific question definition containing all relevant metadata,
 * tables, feedback entries, and dropdown helper data for references.
 */

export interface Parsons3NFQuestion extends ParsonsQuestionBase {
  section: 3;
  question: string;
  tables: Parsons3NFTable[];
  feedback: Parsons3NFFeedback[];

  availableColumnNames: string[];
  availableReferences: { id: number; name: string }[];
}

/**
 * Represents a single table in a 3NF question.
 * Each table holds one or more columns and optional references.
 */
export interface Parsons3NFTable {
  id: number;
  tableName: string;        
  referencesTable: string[]; 
  columns: Parsons3NFColumn[];
}

/**
 * Represents a column in the 3NF puzzle, including expected values
 * (from backend feedback) and current user selections.
 */
export interface Parsons3NFColumn {
  id: number;
  columnId: number | null;
  columnName: string;
  keyType: 'PK' | 'FK' | 'NONE';
  referencesTableId: number | null;
  target_table: string;

  // Optional dynamically created feedback information
  feedbackMessage?: string;
  feedbackType?: 'correct' | 'incorrect';

  // Expected values derived from the backend
  expectedKeyType?: 'PK' | 'FK' | 'NONE';
  expectedReferencesTableId?: number | null; // ✅ nu number/null
  cheatAnimating?: boolean;
}

/**
 * Defines the backend feedback rule for a specific 3NF column.
 * Used to determine whether the player’s solution is correct.
 */
export interface Parsons3NFFeedback {
  id: number;
  questionid: number;
  target_table: string;
  column_name: string;

  expectedKeyType: 'PK' | 'FK' | 'NONE';
  referencesTableId: number | null;      // ✅ altijd number/null
  feedback: string;
  feedbackType: 'correct' | 'incorrect';
}
