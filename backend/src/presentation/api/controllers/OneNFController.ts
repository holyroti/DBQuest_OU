import { Request, Response, NextFunction } from 'express';
import { OracleOneNFRepository } from '../../infrastructure/repositories/OracleOneNFRepository';

/**
 * Handles 1NF endpoints.
 * Each method calls its corresponding backend repository containing the SQL code executed in the database.
 */
export class OneNFController {
  private repo = new OracleOneNFRepository();

  //Calls the repository to fetch the current 1NF question
  async getQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "Invalid questionId" });
      }
      const rows = await this.repo.fetchQuestionById(id);
      res.json({ success: true, data: rows });
    } catch (err) { next(err); }
  }

  //Calls the repository to fetch the correct order /solution of the 1NF question
  async getCorrectOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "Invalid questionId" });
      }
      const rows = await this.repo.fetchCorrectOrder(id);
      res.json({ success: true, data: rows });
    } catch (err) { next(err); }
  }

  //Calls the repository to fetch the feedback of the 1NF question
  async getFeedback(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "Invalid questionId" });
      }
      const rows = await this.repo.fetchFeedback(id);
      res.json({ success: true, data: rows });
    } catch (err) { next(err); }
  }
}
