import { Request, Response } from "express";
import { PositionService } from "../services/position.service";

const positionService = new PositionService();

export class PositionController {

  //@desc     Create a new position
  //@route    POST /position/new-position
  //@access   public
  static async createNewPosition(req: Request, res: Response): Promise<any> {
    
  }
}