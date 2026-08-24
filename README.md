# StaffOps — Employee Management System

A full-stack **Employee Management System** built with **React.js, Node.js, Express.js, and MongoDB**.

StaffOps provides employee management, attendance tracking, leave management, payslip management, authentication, profile management, and dashboard functionality through a separate frontend and backend architecture.

## Features

- User authentication and authorization
- JWT-based authentication
- Role-based access control
- Employee management
- Employee profile management
- Attendance management
- Leave application and management
- Payslip management
- Dashboard with employee-related information
- RESTful API integration
- Secure password hashing using bcrypt
- Protected API routes
- Image/file upload support
- Email functionality
- Background and scheduled jobs using Inngest
- Responsive user interface
- Separate frontend and backend architecture

## Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React
- React Hot Toast
- date-fns

### Backend

- Node.js
- Express.js
- RESTful APIs
- JSON Web Token (JWT)
- bcrypt
- Multer
- Nodemailer
- Inngest
- CORS
- dotenv

### Database

- MongoDB
- Mongoose

## Project Structure

```text
StaffOps/
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── inngest/
│   ├── seed.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Main Modules

### Authentication

- User login and authentication
- JWT-based authentication
- Password hashing using bcrypt
- Protected application routes
- Role-based authorization

### Employee Management

- Create employee records
- View employee information
- Update employee details
- Manage employee profiles

### Attendance Management

- Track employee attendance
- Store attendance records
- Retrieve attendance information

### Leave Management

- Submit leave applications
- Manage leave requests
- Track leave status

### Payslip Management

- Manage employee payslip information
- Retrieve payslip records
- Display salary-related information

### Dashboard

- Employee overview
- Attendance information
- Leave information
- Payslip-related information

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

## Backend Architecture

The backend follows a modular REST API architecture.

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
MongoDB
```

- **Routes** handle API endpoints.
- **Controllers** contain business logic.
- **Models** define MongoDB data structures using Mongoose.
- **Middleware** handles authentication and request processing.
- **Config** contains application configuration such as database connection.
- **Inngest** handles background and scheduled jobs.

## Database Models

The application uses Mongoose models for the main entities:

- User
- Employee
- Attendance
- Leave Application
- Payslip

## Security

StaffOps implements several security practices:

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes
- Authentication middleware
- Role-based authorization
- CORS configuration
- Environment variables for sensitive configuration

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/satyajit-pradhan522/StaffOps.git
cd StaffOps
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
```

Add the other environment variables required by the application services.

> Never commit the actual `.env` file or real credentials to GitHub.

### 5. Start the Backend

```bash
cd server
npm run dev
```

The backend runs on the configured port, for example:

```text
http://localhost:4000
```

### 6. Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend will be available at the Vite development URL, typically:

```text
http://localhost:5173
```

The React frontend communicates with the Node.js/Express backend through REST APIs.

## Admin Setup

For initial development, the project includes a seed script for creating the admin user.

Run:

```bash
cd server
node seed.js
```

Make sure the required MongoDB and environment variables are configured before running the seed script.

## API Structure

The backend provides separate API modules for different application features:

```text
/api/auth
/api/employees
/api/profile
/api/attendance
/api/leave
/api/payslips
/api/dashboard
/api/inngest
```

Each module follows a route → controller → model architecture.

## Purpose

StaffOps demonstrates the development of a full-stack employee management application using the MERN stack.

The project demonstrates practical implementation of:

- React.js frontend development
- Node.js and Express.js backend development
- RESTful API development
- MongoDB database integration
- Mongoose data modeling
- JWT authentication
- Password hashing
- Role-based authorization
- Employee management
- Attendance management
- Leave management
- Payslip management
- Frontend-backend API integration
- Responsive UI development
- Email services
- Background and scheduled jobs

## Author

**Satyajit Pradhan**

Full-Stack Web Developer

- GitHub: https://github.com/satyajit-pradhan522
- LinkedIn: https://www.linkedin.com/in/satyajit-pradhan522/
