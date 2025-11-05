import { ParsonsQuestionBase } from './parsons-base.model';

/**
 * 1NF-specific question model.
 * Contains a list of draggable code lines and the correct order
 * representing the 1NF model structure.
 */
export interface Parsons1NFQuestion extends ParsonsQuestionBase {
  section: 1;
  code: LineItem[];
  correctOrder: number[];
  feedback: { codeLineId: number; text: string }[];
  question: string;
}


/**
 * Represents a single draggable line of code used in 1NF puzzles. Because 1NF only holds 4 atomic, plain 'LineItems' per question
 */
export interface LineItem {
  id: number;
  text: string;
  cheatAnimating?: boolean;
}
