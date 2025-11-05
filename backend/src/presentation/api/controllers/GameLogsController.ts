import { Request, Response, NextFunction } from 'express';
import { OracleGameLogsRepository } from '../../infrastructure/repositories/OracleGameLogsRepository';

/**
 * Handles GameLogs endpoints.
 * Each method calls its corresponding backend repository containing the SQL code executed in the database.
 */
export class GameLogsController {
  private repo = new OracleGameLogsRepository();

  // POST create the gamelog
  async createGameLog(req: Request, res: Response, next: NextFunction) {
    try {
      await this.repo.createGameLog(req.body);
      res.status(201).json({ success: true, message: 'Game log created.' });
    } catch (err) { next(err); }
  }

  // GET /achievements/:userId
  async getAchievementsForUser(req: Request, res: Response, next: NextFunction) {
    try {
      const rows = await this.repo.getAchievementsForUser(Number(req.params.userId));
      res.json({ success: true, data: rows });
    } catch (err) { next(err); }
  }

  // GET /incomplete/:userId
  async getFirstIncomplete(req: Request, res: Response, next: NextFunction) {
    try {
      const row = await this.repo.getFirstIncomplete(Number(req.params.userId));
      if (row) res.json({ success: true, data: row });
      else res.json({ success: false, message: 'No incomplete question found' });
    } catch (err) { next(err); }
  }
}
