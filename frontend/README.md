# Fullstack Rating App

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js (Express)
- **Database:** MySQL

## Features
- User registration & login
- Role-based access (User, Store Owner, Admin)
- Users can rate others

## Setup Instructions

### Backend
1. Navigate to `backend/`
2. Create a `.env` file with:


Fullstack Rating App
A full-stack web application that allows users to register, log in, and rate others. Built with React, Node.js (Express), and MySQL.

Features
User Registration & Login

Role-based Access Control (Admin, User, Store Owner)

Rating system for users

REST API integration

Backend deployed on Render, Frontend deployed on Netlify (optional)

Tech Stack
Frontend	Backend	Database
React.js	Node.js + Express	MySQL
Installation & Running
Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Create a .env file with your MySQL credentials:

env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=rating_db
PORT=5000
Install dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
node index.js
Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the React development server:

npm start