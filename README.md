# Expense Tracker Backend

This is a backend REST API for an Expense Tracker application.

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

## Features
- User Registration & Login
- JWT based authentication
- Add expense
- Get expense list
- Secure protected APIs

## API Endpoints

### Auth
POST /api/auth/register  
POST /api/auth/login  

### Expense
POST /api/expense/add  
GET /api/expense/list  

## Setup Instructions
1. Clone the repository
2. Run npm install
3. Create a .env file with MONGO_URL and JWT_SECRET
4. Run node index.js

Server runs on port 5000
