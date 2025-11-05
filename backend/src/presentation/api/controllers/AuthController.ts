import { Request, Response, NextFunction } from 'express';
import { OraclePlayerRepository } from '../../infrastructure/repositories/OraclePlayerRepository';
import { AuthenticatePlayer } from '../../application/use-cases/auth/AuthenticatePlayer'
import { BcryptPasswordHasher } from '../../application/services/PasswordHasher';
import { RegisterPlayer } from '../../application/use-cases/auth/RegisterPlayer';

/**
 * Handles authentication & registration endpoints.
 * Each method calls its corresponding use-case class in the application layer (ONION structure).
 */

export class AuthController {
  private repo = new OraclePlayerRepository();
  private hasher = new BcryptPasswordHasher();

  /** POST /api/auth/authenticate to validate credentials */
  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body || {};
      const uc = new AuthenticatePlayer(this.repo, this.hasher);
      const out = await uc.execute({ username, password });
      res.json({ success: true, data: out });
    } catch (err) { next(err); }
  }

  /** POST /api/auth/update-icon to update profile picture */
  async updateIcon(req: Request, res: Response, next: NextFunction) {
    try {
      const { playerId, icon } = req.body || {};
      await this.repo.updateIcon(Number(playerId), String(icon));
      res.json({ success: true, message: 'Icon updated successfully' });
    } catch (err) { next(err); }
  }

  /** POST /api/auth/register to create new player account */
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password, icon, displayName } = req.body || {};
      const uc = new RegisterPlayer(this.repo, this.hasher);
      const out = await uc.execute({ username, password, icon, displayName });

      res.json({ success: true, data: out });
    } catch (err) { next(err); }
  }
}
