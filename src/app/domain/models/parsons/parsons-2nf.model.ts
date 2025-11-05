import { ParsonsQuestionBase, ParsonsTable } from './parsons-base.model';

/**
 * 2NF-specific question model.
 * Contains the list of tables and feedback rules defining
 * correct column placements for partial dependency solutions.
 */

export interface Parsons2NFQuestion extends ParsonsQuestionBase {
  section: 2;
  twoNFTables: ParsonsTable[];
  feedback: ParsonsFeedback[];
  title: string;
}

/**
 * Each feedback entry describes the correct target table,
 * key type, and reference relation for a specific column.
 */
export interface ParsonsFeedback {
  columnName: string;
  targetTable: string;
  keyType: string;
  references?: string | null;
  feedback: string;
  feedbackType: 'correct' | 'incorrect';
}

