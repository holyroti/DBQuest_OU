import { Router } from 'express';
import { OneNFController } from '@presentation/api/routes/../controllers/OneNFController';

const router = Router();
const c = new OneNFController();

//Resolve the API endpoint urls of the 1NF Controller, called by the OneNFService
router.get("/:id", (req, res, next) => c.getQuestion(req, res, next));
router.get("/:id/correct-order", (req, res, next) => c.getCorrectOrder(req, res, next));
router.get("/:id/feedback", (req, res, next) => c.getFeedback(req, res, next));

export const oneNFRouter = router;