# Job Portal Backend

This is the **backend** for the Job Portal project, built with **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs for user authentication, job management, company management, and application processing. The backend handles business logic, data storage, authentication, file uploads, and email notifications.

---

## Features

- **User Authentication:** Register/login for students and recruiters using JWT tokens.
- **Role-Based Access:** Separate permissions for students, recruiters, and admins.
- **Profile Management:** Update user profiles, upload profile photos and resumes (Cloudinary integration).
- **Job Management:** Recruiters can create, update, and delete job postings.
- **Company Management:** Recruiters can create and manage company profiles.
- **Application Management:** Students can apply for jobs; recruiters can view and manage applicants.
- **Admin Controls:** (If enabled) Admins can manage all users, jobs, and companies.
- **File Uploads:** Handles file uploads (images, resumes) using Multer and Cloudinary.
- **Email Notifications:** Sends emails on application status changes using Nodemailer.

---

## Tech Stack

- **Node.js** (runtime)
- **Express.js** (web framework)
- **MongoDB** (database)
- **Mongoose** (ODM)
- **JWT** (authentication)
- **Multer** (file uploads)
- **Cloudinary** (file storage)
- **Nodemailer** (email notifications)
- **dotenv** (environment variables)
- **cookie-parser** (cookie handling)
- **CORS** (cross-origin requests)

---

## Folder Structure

```
backend/
├── controllers/   # Route handlers and business logic
├── middlewares/   # Custom middleware (auth, error handling, etc.)
├── models/        # Mongoose schemas and models
├── routes/        # Express route definitions
├── utils/         # Utility functions (Cloudinary, email, etc.)
├── .env           # Environment variables (not committed)
├── index.js       # Entry point
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Cloudinary](https://cloudinary.com/) account for file uploads

### Installation

1. **Install dependencies:**
    ```sh
    npm install
    ```

2. **Create a `.env` file** in the `backend/` folder with the following variables:
    ```
    PORT=8000
    MONGODB_URI=your_mongodb_connection_string
    SECRET_KEY=your_jwt_secret
    CLOUD_NAME=your_cloudinary_cloud_name
    API_KEY=your_cloudinary_api_key
    API_SECRET=your_cloudinary_api_secret
    MAIL_USER=your_email@gmail.com
    MAIL_PASS=your_email_password_or_app_password
    ```

3. **Start the backend server:**
    ```sh
    npm run dev
    ```
    The backend will run on [http://localhost:8000](http://localhost:8000).

---

## API Endpoints

- **Auth:** `/api/v1/auth/register`, `/api/v1/auth/login`, `/api/v1/auth/logout`
- **Users:** `/api/v1/user/profile`, `/api/v1/user/update`
- **Jobs:** `/api/v1/jobs`, `/api/v1/jobs/:id`
- **Companies:** `/api/v1/companies`, `/api/v1/companies/:id`
- **Applications:** `/api/v1/applications`, `/api/v1/applications/:id`
- **Admin:** `/api/v1/admin/*` (if enabled)

Refer to the code in the `routes/` and `controllers/` folders for detailed API usage.

---

## Customization

- **Environment Variables:** Adjust `.env` for your database, Cloudinary, and email credentials.
- **CORS:** Update allowed origins in `index.js` if needed.
- **Email Templates:** Customize email content in the utils/email utility.

---

## Learnings & Highlights

- **RESTful API Design:** Modular, scalable route and controller structure.
- **Authentication:** Secure JWT-based authentication and role-based access.
- **File Handling:** Efficient file uploads and storage with Multer and Cloudinary.
- **Email Integration:** Automated notifications using Nodemailer.
- **Error Handling:** Centralized error middleware for clean code.

---

## License

This project is licensed under the