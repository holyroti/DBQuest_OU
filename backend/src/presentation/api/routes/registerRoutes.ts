import { Express } from 'express';
import { authRouter } from '@presentation/api/routes/authRoutes';
import { gameLogsRouter } from '@presentation/api/routes/gameLogsRoutes';
import { oneNFRouter } from '@presentation/api/routes/one-nf-routes';
import { twoNFRouter } from '@presentation/api/routes/two-nf-routes';
import { threeNfRouter } from '@presentation/api/routes/three-nf-routes';

/**
 * Combines all routers into the main Express app.
 * Each sub-router handles its own feature domain (1nf,2nf,3nf, auth, player, gamelogs).
 */
export function registerRoutes(app: Express) {
  app.use('/api/auth', authRouter);
  app.use('/api', authRouter);
  app.use('/api/gamelogs', gameLogsRouter);

  app.use("/api/1nf", oneNFRouter);
  app.use("/api/2nf", twoNFRouter);
  app.use('/api/3nf', threeNfRouter);
}
