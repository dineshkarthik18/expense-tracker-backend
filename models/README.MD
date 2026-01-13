# Expense Tracker Backend

This is a backend API for an Expense Tracker mobile application.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

## Features
- User Registration
- User Login
- JWT based Authentication
- Add Expense
- View Expense List

## API Endpoints

### Register User
POST /api/auth/register

Request Body:
{
  "email": "test@gmail.com",
  "password": "123456"
}

---

### Login User
POST /api/auth/login

---

### Add Expense
POST /api/expense/add

Headers:
Authorization: JWT_TOKEN

Request Body:
{
  "title": "Food",
  "amount": 200
}

---

### Get Expense List
GET /api/expense/list

Headers:
Authorization: JWT_TOKEN

## How to Run Project
1. Install dependencies  
   npm install

2. Create .env file  
   MONGO_URL=your_mongodb_url  
   JWT_SECRET=your_secret

3. Run server  
   node index.js
