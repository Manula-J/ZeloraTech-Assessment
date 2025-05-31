import { Router } from "express";
import { PositionController } from "../controllers/position.controller";

const PositionRouter = Router();

//  Creation of new position
PositionRouter.post('new-position', PositionController.createNewPosition);

export default PositionRouter;