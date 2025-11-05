import * as oracledb from 'oracledb';

// Global reference to the Oracle connection pool
let pool: oracledb.Pool | null = null;

/**
 * Provides a centralized OracleDB connection pool for the entire application.
 *   Uses the credentials and connection string from the .environment variables
 *   Creates the connection pool only once (singleton)
 *   Returns an open connection pool for each backend call
*/

export async function getConnection(): Promise<any> {
  const user = process.env.ORA_USER!;
  const password = process.env.ORA_PASSWORD!;
  const connectString = process.env.ORA_CONNECT_STRING!; // bv. parsons_high

    // Initialize connection pool
  if (!pool) {
    pool = await oracledb.createPool({
      user,
      password,
      connectString,
      poolMin: 0, // no idle connections on startup
      poolMax: 4, // maximum number of concurrent connections because of oracle cloud availability
      poolIncrement: 1,
    });
    console.log('[DBQuest] Pool created (THICK client). Alias=', connectString);
  }
  return pool.getConnection();
}
