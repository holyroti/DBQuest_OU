/**
 * Initializes the Oracle Client libraries (THICK mode (full 2GB client)).
 *  Reads the TNS_Wallet directory to use the certificate to create an oracle cloud connection
 *  Reads TNS_ADMIN en ORACLE_LIB_DIR
 *  Verifies that both directories exist and logs configuration paths.
 *  Falls back to a warning if the client is still in THIN mode. (We want the full thick oracle client in case a thin client is not sufficient enough)
 */

import * as oracledb from 'oracledb';

export function initOracleClient() {
  const libDir = process.env.ORACLE_LIB_DIR;
  const configDir = process.env.TNS_ADMIN;
  console.log('[DBQuest] Using TNS_ADMIN=', configDir);
  console.log('[DBQuest] Using ORACLE_LIB_DIR=', libDir);     // from wallet/tnsnames dir

  // Ensure required environment variables are present
  if (!libDir) throw new Error('Missing ORACLE_LIB_DIR in .env');
  if (!configDir) throw new Error('Missing TNS_ADMIN in .env');

  // Initialize the Oracle Client with the library and configuration dirs
  oracledb.initOracleClient({ libDir, configDir });

  // Verify mode (THIN vs THICK). Thin client can give us minor errors so always use thick just in case. 
  if (oracledb.thin) {
    console.warn('[DBQuest] Warning: still in THIN mode, check ORACLE_LIB_DIR');
  } else {
    console.log('[DBQuest] Thick mode initialised. libDir=', libDir, 'configDir=', configDir);
  }
}
