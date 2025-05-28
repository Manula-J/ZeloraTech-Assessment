import { Router } from "express";
import { CandidateController } from "../controllers/candidate.controller";

const CandidateRouter = Router();

CandidateRouter.post('/new-candidate', CandidateController.createNewCandidate);

CandidateRouter.get('/get-candidates', CandidateController.getAllCandidates);
CandidateRouter.get('/get-candidates/:id', CandidateController.getCandidateById);

CandidateRouter.patch('/update/:id', CandidateController.updateCandidate);
CandidateRouter.patch('/update-stage/:id', CandidateController.updateCandidateStage);

CandidateRouter.delete('/delete/:id', CandidateController.deleteCandidate);

export default CandidateRouter;