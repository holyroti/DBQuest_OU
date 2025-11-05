import { Request, Response, NextFunction } from 'express';
import { OraclePlayerRepository } from '../../infrastructure/repositories/OraclePlayerRepository';

export class PlayerController {
  private repo = new OraclePlayerRepository();

  /**
 * Handles User/Player endpoints.
 * Each method calls its corresponding backend repository containing the SQL code executed in the database.
 */

  //Gets the current user info by username
  async getByUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const username = String(req.params.username).trim();
      const player = await this.repo.findByUsername(username);

      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }

      res.json({
        id: player.id,
        username: player.username,
        displayName: player.displayName,
        icon: player.icon
      });
    } catch (err) {
      console.error("PlayerController.getByUsername error:", err);
      next(err);
    }
  }
}
