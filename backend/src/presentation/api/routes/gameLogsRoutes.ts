import { Router } from 'express';
import { GameLogsController } from '@presentation/api/routes/../controllers/GameLogsController';
const router = Router();
const c = new GameLogsController();

//Resolve the API endpoint urls of the GameLog Controller, called by the GameLogService
router.post('/', (req, res, next) => c.createGameLog(req, res, next));
router.get('/achievements/:userId', (req, res, next) => c.getAchievementsForUser(req, res, next));
router.get('/incomplete/:userId', (req, res, next) => c.getFirstIncomplete(req, res, next));

export const gameLogsRouter = router;
