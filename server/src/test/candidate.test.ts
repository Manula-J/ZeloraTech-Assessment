import { test , describe, expect } from "@jest/globals";
import request from "supertest";
import app from "../server";



describe('GET /candidate', () => {

  test(' ', async () => {
    const response = await request(app).get('/candidate/get-candidates');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  })
})