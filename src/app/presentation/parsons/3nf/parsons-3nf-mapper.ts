import {
  Parsons3NFTable,
  Parsons3NFColumn,
  Parsons3NFFeedback,
  Parsons3NFQuestion
} from '../../models/parsons/parsons-3nf.model';


/**
 * Mapper class responsible for converting raw backend data
 * into structured 3NF entity models used in the 3NF component.
 *
 * Responsibilities:
 * Map question, table, column, and feedback data
 * Normalize inconsistent field names from the backend (upper/lower case)
 * Match feedback to corresponding columns and expected relationships to be used in the 3NF game state
 */

export class Parsons3NFMapper {
  /**
  * Maps a single raw API table object into Parsons3NFTable.
  * And also matches all corresponding 3NF tables
  */
  static mapTable(raw: any, allColumns: any[], feedback: any[]): Parsons3NFTable {
    const tableName = raw.targetTable ?? raw.TARGET_TABLE ?? '';

    return {
      id: raw.id ?? raw.ID,
      tableName,
      referencesTable: raw.referencesTable ?? raw.REFERENCES_TABLE ?? [],
      columns: (allColumns || [])
        .filter(c => c.TARGET_TABLE === tableName || c.target_table === tableName)
        .map(c => this.mapColumn(c, feedback)),   // Map each column with its feedback
    };
  }


  /**
   * Maps a single raw API column object into Parsons3NFColumn + link its corresponding column feedback
   * */
  static mapColumn(raw: any, feedback: any[]): Parsons3NFColumn {
    // Find matching feedback entry for this column (based on column and table name)
    const fb = feedback.find(
      f =>
        (f.COLUMN_NAME ?? f.column_name) === (raw.COLUMN_NAME ?? raw.columnName) &&
        (f.TARGET_TABLE ?? f.target_table) === (raw.TARGET_TABLE ?? raw.target_table)
    );

    return {
      id: raw.id ?? raw.ID,
      columnId: raw.columnId ?? raw.COLUMN_ID ?? null,
      columnName: raw.columnName ?? raw.COLUMN_NAME ?? '',
      keyType: raw.keyType ?? raw.KEY_TYPE ?? 'NONE',
      referencesTableId:
        raw.referencesTableId ??
        raw.REFERENCES_TABLE_ID ??
        raw.REFERENCES_TABLEID ??
        null,
      target_table: raw.target_table ?? raw.TARGET_TABLE ?? '',
      feedbackMessage: fb?.FEEDBACK ?? fb?.feedback ?? '',
      feedbackType: (fb?.FEEDBACK_TYPE ?? fb?.feedbackType ?? '').toLowerCase(),
      expectedKeyType: fb?.EXPECTED_KEY_TYPE ?? fb?.expectedKeyType ?? 'NONE',
      expectedReferencesTableId:
        fb?.REFERENCES_TABLE_ID ??
        fb?.referencesTableId ??
        null,
      cheatAnimating: false,
    };
  }

  /**
   * Maps a single raw feedback record into a structured Parsons3NFFeedback
   * */
  static mapFeedback(raw: any): Parsons3NFFeedback {
    return {
      id: raw.id ?? raw.ID,
      questionid: raw.questionid ?? raw.QUESTIONID,
      target_table: raw.target_table ?? raw.TARGET_TABLE ?? '',
      column_name: raw.column_name ?? raw.COLUMN_NAME ?? '',
      expectedKeyType: (raw.expectedKeyType ?? raw.EXPECTED_KEY_TYPE ?? raw.KEY_TYPE ?? 'NONE') as 'PK' | 'FK' | 'NONE',
      referencesTableId: raw.referencesTableId ?? raw.REFERENCES_TABLE_ID ?? raw.REFERENCES_TABLEID ?? null,
      feedback: raw.feedback ?? raw.FEEDBACK ?? '',
      feedbackType: (raw.feedbackType ?? raw.FEEDBACK_TYPE ?? 'incorrect').toLowerCase() as 'correct' | 'incorrect',
    };
  }

  /**
   * Maps the full 3NF question into a Parsons3NFQuestion model,
   * including its tables, columns, feedback, and dropdown reference options
   * */
  static mapQuestion(question: any, tables: any[], feedback: any[], columns: any[]): Parsons3NFQuestion {
    const mappedTables = tables.map(t => this.mapTable(t, columns, feedback));
    const mappedFeedback = feedback.map(this.mapFeedback);

    return {
      questionId: question.questionId ?? question.QUESTIONID,
      section: 3,
      instructions: question.instructions ?? question.INSTRUCTIONS ?? '',
      summary: question.summary ?? question.SUMMARY ?? '',
      htmlContent: question.htmlCode ?? question.HTML_CODE ?? '',
      question: question.question ?? question.QUESTION ?? '',
      tables: mappedTables,
      feedback: mappedFeedback,
      availableColumnNames: [...new Set(columns.map(c => c.COLUMN_NAME ?? c.columnName).filter(Boolean))],
      availableReferences: mappedTables.map(t => ({ id: t.id, name: t.tableName }))
    };
  }

}
