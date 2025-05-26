import { Request, Response } from "express";
import { CandidateService } from "../services/candidate.service";

const candidateService = new CandidateService();

export class CandidateController {
  
  //@desc     Create a new candidate
  //@route    POST /candidate/new-candidate
  //@access   public
  static async createNewCandidate(req: Request, res: Response): Promise<any> {
    try {
      const {
        firstName,
        lastName,
        email,
        telephone,
        positionId,
        applicationStage,
        overallScore,
        refferalStatus,
        assessmentStatus
      } = req.body;

      const newCandidate = await candidateService.createCandidate({
        firstName,
        lastName,
        email,
        telephone,
        positionId,
        applicationStage,
        overallScore,
        refferalStatus,
        assessmentStatus
      })

      res.status(201).json(newCandidate);
    } catch (error) {
      res.status(500).json({ error: "Failed to create new candidate" });
    }
  }


  //@desc     Get all candidates
  //@route    Get /candidate/get-candidates
  //@access   public
  static async getAllCandidates(req: Request, res: Response): Promise<any> {
    try {
      const candidates = await candidateService.getAllCandidates();

      if (!candidates) {
        return res.status(404).json({ error: "Task not found" });
      }

      res.status(200).json(candidates);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch the candidates '});
    }
  }


  //@desc     Get candidate by id
  //@route    Get /candidate/get-candidates/:id
  //@access   public
  static async getCandidateById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const candidateId = Number(id);

      if (isNaN(candidateId)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }

      const candidate = await candidateService.getCandidateById(candidateId);

      if (!candidate) {
        return res.status(404).json({ error: "Task not found" });
      }

      res.status(200).json(candidate);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch the candidates '});
    }
  }


  //@desc     Update candidate by id
  //@route    Patch /candidate/update/:id
  //@access   public
  static async updateCandidate(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const candidateId = Number(id);

      const updateData = req.body;

      if (isNaN(candidateId)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }

      const updated = await candidateService.updateCandidate(candidateId, updateData);

      res.status(200).json({ message: 'Candidate updated', data: updated });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update candidate', details: error });
    }
  }

  
  //@desc     Delete candidate by id
  //@route    Delete /candidate/delete/:id
  //@access   public
  static async deleteCandidate(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const candidateId = Number(id);

      if (isNaN(candidateId)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }

      const deleted = await candidateService.deleteCandidate(candidateId);

      res.status(200).json({ message: 'Candidate deleted', data: deleted });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete candidate', details: error });
    }
  }
}