// candidate.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CandidateService {

  // Creates a new candidate record in the database
  async createCandidate(data: {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    positionId: number;
    applicationStage?: string;
    overallScore: number;
    refferalStatus: string;
    assessmentStatus?: string;
  }) {
    return await prisma.candidate.create({ data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      telephone: data.telephone,
      positionId: data.positionId,
      applicationStage: data.applicationStage,
      overallScore: data.overallScore,
      refferalStatus: data.refferalStatus,
      assessmentStatus: data.assessmentStatus,
    }})
  }


  // Retreives all the candidate records
  async getAllCandidates() {
    return await prisma.candidate.findMany();
  }


  // Retreives candidate record by id
  async getCandidateById(id: number) {
    return await prisma.candidate.findUnique({
      where: { id }
    });
  }


  // Update candidate record by id
  async updateCandidate(id: number, data: any) {
    return await prisma.candidate.update({
      where: { id },
      data,
    });
  }


  // Delete candidate by id
  async deleteCandidate(id: number) {
    return await prisma.candidate.delete({
      where: { id }
    });
  }
}