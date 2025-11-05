import { Router } from 'express';
import { AuthController } from '@presentation/api/routes/../controllers/AuthController';
const router = Router();
const c = new AuthController();

//Resolve the API endpoint urls of the Authenticate Controller, called by the AuthService
router.post('/authenticate', (req, res, next) => c.authenticate(req, res, next));
router.post('/register', (req, res, next) => c.register(req, res, next));
router.post('/update-icon', (req, res, next) => c.updateIcon(req, res, next));

export const authRouter = router;
