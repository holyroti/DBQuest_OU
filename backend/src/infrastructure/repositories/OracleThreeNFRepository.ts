import oracledb from 'oracledb';
import { getConnection } from '@infrastructure/repositories/../db/OracleClient';

/**
 * Repository responsible for all 3NF-related DB actions.
 * Uses the OracleClient package to obtain and close connections safely.
 */
export class OracleThreeNFRepository {

  //Fetches the metadata of the 3NF questionId
  async fetchQuestion(questionId: number): Promise<any> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT questionID, sectionID, html_code, hints, instructions, question, summary
        FROM parsons.blank_question
        WHERE questionID = :id
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows?.[0] ?? null;
    } finally {
      await conn.close().catch(() => { });
    }
  }

  //Fetches the corresponding tables need to be created in the 3NF stage by questionId
  async fetchTables(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT ID, questionID, target_table, references_table, summary
        FROM parsons.blank_tables
        WHERE questionID = :id
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows ?? [];
    } finally {
      await conn.close().catch(() => { });
    }
  }

  //Fetches the columns that need to be created in the 3NF stage by questionId
  async fetchColumns(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT ID, questionID, column_name, key_type, references_tableID, target_table
        FROM parsons.blank_table_columns
        WHERE questionID = :id
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows ?? [];
    } finally {
      await conn.close().catch(() => { });
    }
  }

  //Fetches the feedback per column, per table of the 3NF questionId
  async fetchFeedback(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT 
          ID,
          QUESTIONID,
          TARGET_TABLE,
          COLUMN_NAME,
          EXPECTED_KEY_TYPE,
          REFERENCES_TABLE_ID,
          FEEDBACK,
          FEEDBACK_TYPE
        FROM parsons.blank_table_feedback
        WHERE QUESTIONID = :id
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows ?? [];
    } finally {
      await conn.close().catch(() => { });
    }
  }
}
