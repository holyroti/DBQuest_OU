/**
 * Application entry point for the DBQuest backend.
 * Responsible for initializing Oracle connectivity, registering routes,
 * and starting the Express server.
 */

import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { json } from 'express';
import cors from 'cors';
import { registerRoutes } from './api/routes/registerRoutes';
import { errorMiddleware } from './api/middlewares/errorMiddleware';
import { initOracleClient } from '@infrastructure/db/OracleClientSetup';
import { getConnection } from '@infrastructure/db/OracleClient';

// Initialize Oracle client libraries
initOracleClient();

/** A startup check to verify Oracle connectivity */
async function startupConnectionCheck() {
  try {
    const conn = await getConnection();
    const r = await conn.execute("select 1 as ok from dual");
    try { await conn.close(); } catch { }
    console.log('[DBQuest] Oracle connectivity OK (select 1 from dual):', r?.rows?.[0]);
  } catch (e: any) {
    console.error('[DBQuest] Oracle connectivity FAILED:', e?.message || e);
  }
}
startupConnectionCheck();

// Configure Express app
const app = express();
app.use(cors());
app.use(json());

//Register all feature routes
registerRoutes(app);

//Global error handler
app.use(errorMiddleware);

//Start server depending on the port used in the .env file
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(port, () => {
  console.log(`[DBQuest] API running on http://localhost:${port}`);
});
