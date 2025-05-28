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
  async getAllCandidates(
    applicationStage?: string,
    page: number = 1,
    limit: number = 10,
    sortBy: string = "id",
    order: string = "asc"
  ) {
    const whereClause = applicationStage ? { applicationStage } : {};
    const skip = (page - 1) * limit;
    const sortOrder = order.toLowerCase() === "desc" ? "desc" : "asc";

    return await prisma.candidate.findMany({
      where: whereClause,
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip,
      take: limit,
    });
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


  // Update candidate stage by id
  async updateCandidateStage(id: number, newStage: string) {
    return await prisma.candidate.update({
      where: { id },
      data: { applicationStage: newStage },
    })
  }


  // Delete candidate by id
  async deleteCandidate(id: number) {
    return await prisma.candidate.delete({
      where: { id }
    });
  }
}