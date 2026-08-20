# Full Stack Employee Management System

A full-stack Employee Management System built with **React.js, Node.js, Express.js, and MongoDB**. The application provides employee management, attendance tracking, leave management, payslip management, authentication, and dashboard functionality through a separate frontend and backend architecture.

## Features

* User authentication and authorization
* Employee management
* Employee profile management
* Attendance management
* Leave application and management
* Payslip management
* Dashboard with employee-related information
* RESTful API integration
* Secure password handling using bcrypt
* JWT-based authentication
* Image/file upload support
* Email functionality
* Responsive user interface
* Separate frontend and backend

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* Lucide React
* React Hot Toast
* date-fns

### Backend

* Node.js
* Express.js
* RESTful APIs
* JSON Web Token (JWT)
* bcrypt
* Multer
* Nodemailer
* Inngest
* CORS
* dotenv

### Database

* MongoDB
* Mongoose

## Project Structure

```text
FullStack-EMS/
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── server/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json
```

## Main Modules

### Authentication

* User login and authentication
* JWT-based session authentication
* Password hashing using bcrypt
* Protected application routes

### Employee Management

* Create employee records
* View employee information
* Update employee details
* Manage employee profiles

### Attendance Management

* Track employee attendance
* Store attendance records
* Retrieve attendance information

### Leave Management

* Submit leave applications
* Manage leave requests
* Track leave status

### Payslip Management

* Manage employee payslip information
* Retrieve payslip records
* Display salary-related information

### Dashboard

* Employee-related overview
* Attendance information
* Leave information
* Payslip-related information

## Application Architecture

```text
React.js Frontend
       ↓
     Axios
       ↓
Express.js REST APIs
       ↓
Node.js Backend
       ↓
    Mongoose
       ↓
   MongoDB
```

## API Structure

The backend follows a RESTful API architecture with separate routes and controllers for different application modules.

```text
Routes
  ↓
Controllers
  ↓
Models
  ↓
MongoDB
```

The application separates business logic into controllers and database schemas into Mongoose models.

## Database Models

The backend contains models for the main application entities, including:

* User
* Employee
* Attendance
* Leave Application
* Payslip

## Security

The application includes:

* JWT-based authentication
* Password hashing with bcrypt
* Protected routes
* Authentication middleware
* CORS configuration
* Environment variables for sensitive configuration

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/satyajit-pradhan522/FullStack-EMS.git

cd FullStack-EMS
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server` directory and configure the required environment variables used by the backend, including the MongoDB connection string and authentication configuration.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add any other environment variables required by the application services.

### 5. Start the backend

```bash
cd server
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend communicates with the backend through REST APIs.

## Purpose

This project demonstrates the development of a full-stack employee management application using the MERN stack.

It demonstrates practical implementation of:

* React.js frontend development
* Node.js and Express.js backend development
* RESTful API development
* MongoDB database integration
* Mongoose data modeling
* JWT authentication
* Password hashing
* Employee management
* Attendance management
* Leave management
* Payslip management
* Frontend-backend API integration
* Responsive UI development
