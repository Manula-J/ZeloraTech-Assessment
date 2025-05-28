import { Router } from "express";
import { CandidateController } from "../controllers/candidate.controller";

const CandidateRouter = Router();

// Creation of new candidate
CandidateRouter.post('/new-candidate', CandidateController.createNewCandidate);

// Getting the candidates
CandidateRouter.get('/get-candidates', CandidateController.getAllCandidates);
CandidateRouter.get('/get-candidates/:id', CandidateController.getCandidateById);

// Updating candidate data
CandidateRouter.patch('/update/:id', CandidateController.updateCandidate);
CandidateRouter.patch('/update-stage/:id', CandidateController.updateCandidateStage);

// Deletion of candidates
CandidateRouter.delete('/delete/:id', CandidateController.deleteCandidate);

export default CandidateRouter;