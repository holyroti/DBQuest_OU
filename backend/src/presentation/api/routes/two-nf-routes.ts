import { Router } from 'express';
import { TwoNFController } from '@presentation/api/routes/../controllers/TwoNFController';

const router = Router();
const c = new TwoNFController();

//Resolve the API endpoint urls of the 2NF Controller, called by the TwoNFService
router.get("/:id", (req, res, next) => c.getQuestion(req, res, next));
router.get("/:id/tables", (req, res, next) => c.getTables(req, res, next));
router.get("/:id/feedback", (req, res, next) => c.getFeedback(req, res, next));

export const twoNFRouter = router;