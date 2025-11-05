import { Router } from 'express';
import { PlayerController } from '@presentation/api/routes/../controllers/PlayerController';
const router = Router();

//Resolve the API endpoint urls of the Playerontroller, called by the Authservice

export const playerRouter = router;
