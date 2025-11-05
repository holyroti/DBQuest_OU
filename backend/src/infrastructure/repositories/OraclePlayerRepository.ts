import oracledb from 'oracledb';
import { getConnection } from '@infrastructure/repositories/../db/OracleClient';
import { Player } from '@infrastructure/repositories/../../domain/entities/Player';
import { PlayerMapper } from '@infrastructure/repositories/../mappers/PlayerMapper';

/**
 * Repository responsible for all Player-related DB actions.
 * Uses the OracleClient package to obtain and close connections safely.
 */

export class OraclePlayerRepository {
  //SQL to find the player by their username
  async findByUsername(username: string): Promise<Player | null> {
    const conn = await getConnection();
    try {
      const sql = `SELECT playerID, username, password, displayName, icon FROM players WHERE username = :username`;
      const result = await conn.execute(sql, [username], { outFormat: oracledb.OUT_FORMAT_OBJECT });
      const row = (result.rows as any[])[0];
      return row ? PlayerMapper.fromRow(row) : null;
    } finally { try { await conn.close(); } catch { } }
  }

  //SQL to update the players profile picture in the database
  async updateIcon(playerId: number, icon: string): Promise<void> {
    const conn = await getConnection();
    try {
      const sql = `UPDATE parsons.players SET icon = :icon WHERE playerid = :playerId`;
      await conn.execute(sql, [icon, playerId], { autoCommit: true });
    } finally { try { await conn.close(); } catch { } }
  }

  //Creates a new player and returns its generated ID
  async createPlayer(username: string, password: string, icon?: string | null, displayName?: string | null): Promise<number> {
    const conn = await getConnection();
    try {
      const sql = `
      INSERT INTO players (playerID, username, password, icon, displayName)
      VALUES (parsons.players_seq.NEXTVAL, :username, :password, :icon, :displayName)
      RETURNING playerID INTO :newId
    `;
      const binds = {
        username,
        password,
        icon,
        displayName,
        newId: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
      };

      const result = await conn.execute(sql, binds, { autoCommit: true });
      return result.outBinds?.newId[0];
    } finally { try { await conn.close(); } catch { } }
  }

}
