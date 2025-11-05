import { Request, Response, NextFunction } from 'express';
import { OracleThreeNFRepository } from '../../infrastructure/repositories/OracleThreeNFRepository';

/**
 * Handles 2NF endpoints.
 * Each method calls its corresponding backend repository containing the SQL code executed in the database.
 */
export class ThreeNFController {
  private repo = new OracleThreeNFRepository();

  //Calls the repository to fetch the current 3NF question details (question+tables+columns+feedback) async

  async getDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.questionId);

      const [question, tables, columns, feedback] = await Promise.all([
        this.repo.fetchQuestion(id),
        this.repo.fetchTables(id),
        this.repo.fetchColumns(id),
        this.repo.fetchFeedback(id)
      ]);

      if (!question) {
        return res.status(404).json({ success: false, message: '3NF question not found' });
      }

      res.json({
        success: true,
        data: { question, tables, columns, feedback }
      });
    } catch (err) {
      console.error(" get3NFDetails error:", err);
      next(err);
    }
  }
}
