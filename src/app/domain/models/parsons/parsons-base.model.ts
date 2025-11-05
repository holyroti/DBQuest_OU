/**
 * Base interface shared by all Parsons Problem question types.
 * Defines the common structure for 1NF, 2NF, and 3NF stages.
 */
export interface ParsonsQuestionBase {
  questionId: number;
  section: 1 | 2 | 3; // For 1NF, 2NF, 3NF stages
  instructions: string; //Instructions per question
  summary: string; //Summary per question
  htmlContent?: string; //HTML table displayed per question containing mock-data
}


/**
 * Represents a column within a 2NF & 3NF Parsons table.
 */
export interface ParsonsColumn {
  columnName: string;
  keyType: 'PK' | 'FK' | 'NONE';
  referencesTable?: string | null;
  referencesTableId?: number | null; 
  cheatAnimating?: boolean; 
}

/**
 * Represents a table with a list of  Parsons columns reused in the 2NF and 3NF components
 * Used because columns are assigned to tables.
 */
export interface ParsonsTable {
  id?: number;
  tableName: string;
  columns: ParsonsColumn[];
  targetTable?: string; 
}
