import { Request, Response, NextFunction } from 'express';
import { OracleTwoNFRepository } from '../../infrastructure/repositories/OracleTwoNFRepository';

/**
 * Handles 2NF endpoints.
 * Each method calls its corresponding backend repository containing the SQL code executed in the database.
 */
export class TwoNFController {
  private repo = new OracleTwoNFRepository();

  //Calls the repository to fetch the current 2NF question
  async getQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ success: false, message: "Invalid questionId" });

      const question = await this.repo.fetchColumnQuestion(id);
      res.json({ success: true, data: question });
    } catch (err) {
      next(err);
    }
  }

  //Calls the repository to fetch the current 2NF  tables of the question
  async getTables(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const tables = await this.repo.fetchTwoNFTables(id);
      res.json({ success: true, data: tables });
    } catch (err) {
      next(err);
    }
  }

  //Calls the repository to fetch the current 2NF feedback of the question
  async getFeedback(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const feedback = await this.repo.fetchColumnFeedback(id);
      res.json({ success: true, data: feedback });
    } catch (err) {
      next(err);
    }
  }
}
