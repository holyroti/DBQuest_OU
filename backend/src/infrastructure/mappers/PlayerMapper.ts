import { Player } from '@infrastructure/mappers/../../domain/entities/Player';

//Helper mapper method for the player entity
export class PlayerMapper {
  static fromRow(row: any): Player {
    return new Player({
      playerId: Number(row.PLAYERID ?? row.playerid ?? row.PLAYER_ID ?? row.player_id),
      username: String(row.USERNAME ?? row.username),
      passwordHash: String(row.PASSWORD ?? row.password),
      displayName: row.DISPLAYNAME ?? row.displayname ?? null,
      icon: row.ICON ?? row.icon ?? null,
    });
  }
}
