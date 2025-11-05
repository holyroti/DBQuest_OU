import oracledb from 'oracledb';
import { getConnection } from '@infrastructure/repositories/../db/OracleClient';

/**
 * Repository responsible for all Game-Log related DB actions. A game log is an entry where a user has completed a stage of a question
 * Uses the OracleClient package to obtain and close connections safely.
 */

export class OracleGameLogsRepository {

  //Create a new gamelog.
  async createGameLog(data: any): Promise<void> {
    const conn = await getConnection();
    try {
      const sql = `
        INSERT INTO parsons.GAME_LOGS (
          id,
          user_id,
          question_id,
          section_id,
          completion_time,
          get_feedback_clicks,
          cheat_used,
          achievement_awarded,
          badge_id
        ) VALUES (
          parsons.GAME_LOGS_SEQ.NEXTVAL,
          :user_id,
          :question_id,
          :section_id,
          TO_TIMESTAMP(:completion_time, 'YYYY-MM-DD HH24:MI:SS.FF3'),
          :get_feedback_clicks,
          :cheat_used,
          :achievement_awarded,
          :badge_id
        )
      `;
      const binds = {
        user_id: data.userId,
        question_id: data.questionId,
        section_id: data.sectionId,
        completion_time: data.completionTime,
        get_feedback_clicks: data.getFeedbackClicks ?? 0,
        cheat_used: data.cheatUsed ?? 'N',
        achievement_awarded: data.achievementAwarded ?? 'N',
        badge_id: data.badgeId ?? null,
      };

      await conn.execute(sql, binds, { autoCommit: true });
    } finally { try { await conn.close(); } catch { } }
  }

  //Fetch all achievements the user already has earned
  async getAchievementsForUser(userId: number): Promise<any[]> {
    const conn = await getConnection();
    try {
      const sql = `SELECT DISTINCT badge_id
      FROM parsons.GAME_LOGS 
      WHERE user_id = :userId 
        AND badge_id IS NOT NULL
      ORDER BY badge_id`;
      const result = await conn.execute(sql, [userId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return result.rows as any[];
    } finally { try { await conn.close(); } catch { } }
  }

  //Fetch the first incomplete question (order by questionID asc) so that the user can continue where they left off
  async getFirstIncomplete(userId: number): Promise<any | null> {
    const conn = await getConnection();
    try {
      const sql = `SELECT q.question_id,
       NVL(MAX(gl.section_id), 0) AS last_section_id
      FROM parsons.questions q
      LEFT JOIN parsons.game_logs gl
        ON q.question_id = gl.question_id AND gl.user_id = :userId
      GROUP BY q.question_id
      HAVING NVL(MAX(gl.section_id), 0) < 3
      ORDER BY q.question_id ASC
      FETCH FIRST 1 ROWS ONLY`;
      const result = await conn.execute(sql, [userId], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      return (result.rows as any[])[0] ?? null;
    } finally { try { await conn.close(); } catch { } }
  }
}
