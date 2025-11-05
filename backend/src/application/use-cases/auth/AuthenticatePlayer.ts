import { OraclePlayerRepository } from '@application/use-cases/auth/../../../infrastructure/repositories/OraclePlayerRepository';
import { IPasswordHasher } from '@application/use-cases/auth/../../services/PasswordHasher';
import { Player } from '@application/use-cases/auth/../../../domain/entities/Player';

//Helper interface for the Playerdata fetched from the backend
interface Input {
  username: string;
  password: string;
}

//Helper interface for the Playerdata fetched from the backend. This will be mapped to a Playermodel by the frontend service
interface Output {
  playerId: number;
  username: string;
  displayName: string | null;
  icon: string | null;
}

/**
 * AuthenticatePlayer use-case (ONION-model):
 * Validates a user's credentials and returns minimal profile info.
 */

export class AuthenticatePlayer {
  constructor(
    private repo: OraclePlayerRepository,
    private hasher: IPasswordHasher
  ) {}

  // Authenticate method
  async execute(input: Input): Promise<Output> {
    const { username, password } = input;

    // Find the player
    const player: Player | null = await this.repo.findByUsername(username);
    if (!player) {
      throw new Error("User not found");
    }

    if (!player.passwordHash) {
      throw new Error("No password hash found for this user");
    }

    // Compare the password hash
    const valid = await this.hasher.compare(password, player.passwordHash);
    if (!valid) {
      throw new Error("Invalid credentials");
    }

    // Returns minimal player information 
    return {
      playerId: player.id,
      username: player.username,
      displayName: player.displayName,
      icon: player.icon,
    };
  }
}
