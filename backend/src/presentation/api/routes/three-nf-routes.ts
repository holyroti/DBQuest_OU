import { Router } from 'express';
import { ThreeNFController } from '@presentation/api/routes/../controllers/ThreeNFController';

const router = Router();
const c = new ThreeNFController();

//Resolve the API endpoint urls of the 3NF Controller, called by the ThreeNFService
router.get('/:questionId/details', (req, res, next) => c.getDetails(req, res, next));

export const threeNfRouter = router;