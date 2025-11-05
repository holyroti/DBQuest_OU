import oracledb from 'oracledb';
import { getConnection } from '@infrastructure/repositories/../db/OracleClient';

/**
 * Repository responsible for all 2NF-related DB actions.
 * Uses the OracleClient package to obtain and close connections safely.
 */
export class OracleTwoNFRepository {

  //Fetches the 2NF question (medatata) by questionId
  async fetchColumnQuestion(questionId: number): Promise<any> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT question_id, title, instructions, html_content, summary
        FROM parsons.column_questions
        WHERE question_id = :questionId
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return (result.rows || [])[0];
    } finally { try { await conn.close(); } catch { } }
  }

  //Fetches the corresponding Tables that need to be created in the 2NF
  async fetchTwoNFTables(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT table_name, column_name, key_type, references
        FROM parsons.column_two_nf_tables
        WHERE question_id = :questionId
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows as any[];
    } finally { try { await conn.close(); } catch { } }
  }

  //Fetches the feedback per column of the current questionId
  async fetchColumnFeedback(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT column_name, target_table, feedback, feedback_type, key_type, references
        FROM parsons.column_feedback
        WHERE question_id = :questionId
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows as any[];
    } finally { try { await conn.close(); } catch { } }
  }
}
