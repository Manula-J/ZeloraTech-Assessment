# Recruitment Pipeline

This project is a full-stack implementation of a recruitment pipeline interface as part of the ZeloraTech assessment. It includes both a `React` frontend and a `Node.js` backend connected to a `PostgreSQL` database using `Prisma ORM`.

## 🧩 Project Overview

The application recreates a recruitment pipeline UI with multiple candidate stages (Applying Period, Screening, Interview, Test) and supports candidate management through a RESTful API. The frontend displays candidates in a Kanban-style layout. The backend handles CRUD operations and filtering of candidates stored in PostgreSQL.

## 🛠️ Tech Stack

- Frontend: React, Material UI
- Backend: Node.js, Express
- Database: PostgreSQL
- ORM: Prisma
- Environment variables for configuration (including database connection strings)

## ⚙️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm
- [PostgreSQL](https://www.postgresql.org/) installed and running
- Environment variables setup (`.env` file)

### Frontend Setup

1. Navigate to the frontend directory

   ```bash
   cd client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the frontend development server

   ```bash
   npm start
   ```

The frontend will run on http://localhost:3000

### Backend Setup

1. Navigate to the backend directory

   ```bash
   cd server
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend root with your PostgreSQL connection string

   ```bash
   DATABASE_URL=postgresql://username:password@localhost:5432/yourdatabase
   ```

4. Run Prisma migrations to set up the database schema

   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the backend server

   ```bash
   npm start
   ```

The backend will run on http://localhost:4000

## 📌 Assumptions and Decisions

- PostgreSQL is installed on the user's system and accessible via the `DATABASE_URL` specified in the `.env` file.

- The backend runs on **port 4000**, and the frontend runs on **port 3000**. These ports are assumed to be free and not in use by other processes.

- **Environment variables** are used to store sensitive configurations (e.g., DB connection string) and are **not included in source control**.

- The frontend is implemented using **React and Material UI**, with no usage of Tailwind CSS as per the project requirements.

- The project assumes the user will **run backend before frontend** to ensure that the API is reachable.

- Data validations and error handling are handled at a basic level for demonstration purposes.

- Prisma is used for database modeling and migrations; it is assumed that users will **run migrations before starting the backend**.

## 📚 API Endpoints Overview

| Method | Endpoint                        | Description                                 |
| ------ | ------------------------------- | ------------------------------------------- |
| POST   | `/candidate/new-candidate`      | Create a new candidate                      |
| GET    | `/candidate/get-candidates`     | List all candidates (filterable by stage)   |
| GET    | `/candidate/get-candidates/:id` | Get details of a single candidate by Id     |
| PATCH  | `/candidate/update/:id`         | Update candidate details                    |
| PATCH  | `/candidate/update-stage/:id`   | Update candidate `applicationStage` details |
| DELETE | `/candidate/delete/:id`         | Delete a candidate                          |
