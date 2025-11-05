import { OraclePlayerRepository } from '@application/use-cases/auth/../../../infrastructure/repositories/OraclePlayerRepository';
import { IPasswordHasher } from '@application/use-cases/auth/../../services/PasswordHasher';

interface Input {
  username: string;
  password: string;
  icon?: string;
  displayName?: string;
}

/**
 * RegisterPlayer use-case:
 * Registers a new account, hashes the password, and stores it in Oracle cloud database.
 */
export class RegisterPlayer {
  constructor(
    private repo: OraclePlayerRepository, // 👈 direct concrete repo
    private hasher: IPasswordHasher
  ) {}

  async execute(input: Input): Promise<{ playerId: number }> {
    const { username, password, icon, displayName } = input;

    const existing = await this.repo.findByUsername(username);
    if (existing) {
      throw new Error("Username already taken");
    }

    const hashed = await this.hasher.hash(password);

    const newPlayerId = await this.repo.createPlayer(username, hashed, icon, displayName);
    return { playerId: newPlayerId };
  }
}
