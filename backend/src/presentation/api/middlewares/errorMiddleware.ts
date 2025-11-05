import { Request, Response, NextFunction } from 'express';

/**
 * Centralized Express error handler.
 * Logs all uncaught exceptions and sends a generic JSON response to the frontend.
 */
export function errorMiddleware(err: any, _req: Request, res: Response, _next: NextFunction) {
  console.error('[Error]', err);
  const status = err?.status || 500;
  const message = err?.message || 'Internal server error';
  res.status(status).json({ error: message });
}
