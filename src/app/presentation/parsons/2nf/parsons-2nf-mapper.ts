import { Parsons2NFQuestion } from '../../models/parsons/parsons-2nf.model';
import { ParsonsFeedback } from '../../models/parsons/parsons-2nf.model';
/**
 * Mapper class responsible for converting raw API data into a structured
 * Parsons2NFQuestion object for the 2NF stage.
 *
 * Responsibilities:
 * Safely unwrap database or API responses (case-insensitive keys)
 * Normalize table structures and group columns per table
 * Standardize feedback entries for consistent frontend use
 */

export class Parsons2NFMapper {

  /**
   * Converts raw API responses (question, tables, and feedback) into a Parsons2NFQuestion
   * */
  static mapQuestion(question: any, tables: any[], feedback: any[]): Parsons2NFQuestion {
    return {
      questionId: question.questionId ?? question.QUESTION_ID ?? 0,
      section: 2,
      instructions: question.instructions ?? question.INSTRUCTIONS ?? '',
      summary: question.summary ?? question.SUMMARY ?? '',
      htmlContent: question.htmlContent ?? question.HTML_CONTENT ?? '',
      title: question.title ?? question.TITLE ?? '',
      twoNFTables: this.normalizeTables(tables),
      feedback: this.normalizeFeedback(feedback)
    };
  }

  /**
   * Normalizes raw table and column data into a consistent list of tables
  * */
  private static normalizeTables(tables: any[]): Parsons2NFQuestion['twoNFTables'] {
    const tableMap: Record<string, any> = {};

    (tables || []).forEach((t: any) => {
      const tableName = t.tableName ?? t.TABLE_NAME;
      if (!tableName) return;

      if (!tableMap[tableName]) {
        tableMap[tableName] = { tableName, columns: [] };
      }

      tableMap[tableName].columns.push({
        columnName: t.columnName ?? t.COLUMN_NAME ?? '',
        keyType: t.keyType ?? t.KEY_TYPE ?? 'NONE',
        referencesTable: t.references ?? t.REFERENCES ?? null
      });
    });

    return Object.values(tableMap);
  }

  /**
   * Normalizes raw feedback records into a clean, lowercase, and type-safe formats.
  */
  private static normalizeFeedback(feedback: any[]): ParsonsFeedback[] {
    return (feedback || []).map((f: any) => ({
      columnName: f.columnName ?? f.COLUMN_NAME ?? '',
      targetTable: f.targetTable ?? f.TARGET_TABLE ?? '',
      feedback: f.feedback ?? f.FEEDBACK ?? '',
      feedbackType: (f.feedbackType ?? f.FEEDBACK_TYPE ?? 'incorrect').toLowerCase(),
      keyType: f.keyType ?? f.KEY_TYPE ?? 'NONE',
      references: f.references ?? f.REFERENCES ?? null
    }));
  }
}
