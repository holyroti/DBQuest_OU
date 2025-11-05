import oracledb from 'oracledb';
import { getConnection } from '@infrastructure/repositories/../db/OracleClient';

oracledb.fetchAsString = [oracledb.CLOB];
/**
 * Repository responsible for all 1NF-related DB actions.
 * Uses the OracleClient package to obtain and close connections safely.
 */
export class OracleOneNFRepository {

  //Fetches the 1NF question by questionId
  async fetchQuestionById(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT q.question_id, q.question, q.summary, q.hints, q.html_content,
               cl.code_line_id, cl.text AS code_line_text
        FROM parsons.questions q
        JOIN parsons.code_lines cl ON q.question_id = cl.question_id
        WHERE q.question_id = :questionId
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows as any[];
    } finally { try { await conn.close(); } catch { } }
  }

  //Fetches the correct order (solution) of the question by questionId
  async fetchCorrectOrder(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT cqo.code_line_id, cqo.explanation
        FROM parsons.correct_question_order cqo
        WHERE cqo.question_id = :questionId
        ORDER BY cqo.correct_question_order_id ASC
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows as any[];
    } finally { try { await conn.close(); } catch { } }
  }

  //Fetches the feedback per code line of the current questionId
  async fetchFeedback(questionId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `
        SELECT f.code_line_id, f.feedback_text, c.text AS code_line_text
        FROM parsons.feedback f
        JOIN parsons.code_lines c ON f.code_line_id = c.code_line_id
        WHERE f.question_id = :questionId
      `;
      const result = await conn.execute(sql, [questionId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows as any[];
    } finally { try { await conn.close(); } catch { } }
  }
}
