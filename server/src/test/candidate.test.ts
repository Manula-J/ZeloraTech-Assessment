import { test , describe, expect } from "@jest/globals";
import request from "supertest";
import app from "../server";
import { application } from "express";



describe('Candidate API Tests', () => {

  let createdCandidateId: number;

  test('Create new candidate', async () => {
    const newCandidate = {
      firstName: "Julia",
      lastName: "Roberts",
      email: "julia.roberts@example.com",
      telephone: "+1-555-000-1111",
      positionId: 1,
      applicationStage: "Screening",
      overallScore: 3.7,
      refferalStatus: "Not Referred",
      assessmentStatus: "Incomplete"
    };

    const response = await request(app).post('/candidate/new-candidate').send(newCandidate);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.firstName).toBe(newCandidate.firstName);

    createdCandidateId = response.body.id;
  })


  test('Get candidate by Id', async () => {
    const response = await request(app).get(`/candidate/get-candidates/${createdCandidateId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', createdCandidateId);
    expect(response.body.firstName).toBe('Julia');
  })


  test('Get all candidates', async () => {
    const response = await request(app).get('/candidate/get-candidates');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  })


  test('Update candidate', async () => {
    const updatedCandidate = {
      assessmentStatus: "Completed"
    }

    const response = await request(app).patch(`/candidate/update/${createdCandidateId}`).send(updatedCandidate);
    expect(response.status).toBe(200);
    expect(response.body.data.assessmentStatus).toBe(updatedCandidate.assessmentStatus);
  })


  test('Update Stage', async () => {
    const updatedStage = {
      newStage: "Interview"
    }

    const response = await request(app).patch(`/candidate/update-stage/${createdCandidateId}`).send(updatedStage);
    expect(response.status).toBe(200);
    expect(response.body.applicationStage).toBe(updatedStage.newStage);
  })


  test('Delete candidate', async () => {
    const response = await request(app).delete(`/candidate/delete/${createdCandidateId}`);
    expect(response.status).toBe(200);

    // Confirm the candidate is deleted
    const getResponse = await request(app).get(`/candidate/get-candidates/${createdCandidateId}`);
    expect(getResponse.status).toBe(404);
  })
})