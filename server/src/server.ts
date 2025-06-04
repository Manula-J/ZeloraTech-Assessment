import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';
import CandidateRouter from './routes/candidate.route';
import PositionRouter from './routes/position.route';


// Loading environment variables to process.env
dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Configuration of CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type']
}))

// Mount candidate related routes
app.use('/candidate', CandidateRouter);

// Mount position related routes
app.use('/position', PositionRouter);

// Start the server on the port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

export default app;