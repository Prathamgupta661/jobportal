# Job Portal

A full-stack Job Portal web application built with **React** (frontend) and **Node.js/Express** (backend), using **MongoDB** for data storage. The platform allows students to search and apply for jobs, while recruiters can post jobs and manage companies.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Development Approach](#development-approach)
- [Challenges & Solutions](#challenges--solutions)
- [Learnings](#learnings)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

This Job Portal enables:
- **Students** to register, update their profile, upload resumes, browse/search/apply for jobs, and track their applications.
- **Recruiters** to register, create/manage companies, post jobs, and manage applicants.
- **Admins** to oversee all users, jobs, and companies.

---

## Architecture & Tech Stack

### Architecture

- **Frontend:** React (with hooks), Redux Toolkit for state management, React Router for navigation, Tailwind CSS for styling.
- **Backend:** Node.js with Express.js, MongoDB with Mongoose ODM.
- **API:** RESTful endpoints for all resources.
- **Authentication:** JWT-based, stored in cookies.
- **File Uploads:** Handled via Cloudinary.
- **Email Notifications:** Sent on application status changes.

### Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS, Axios, Formik, Yup, Radix UI, Sonner (toasts), Vite.
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer, Cloudinary, Nodemailer, dotenv.
- **Other:** Redux Persist, ESLint.

---

## Development Approach

1. **Planning:** Defined user stories for students and recruiters.
2. **Backend First:** Designed MongoDB models and REST APIs for users, jobs, companies, and applications.
3. **Frontend:** Built UI components, integrated Redux, and connected to backend APIs.
4. **Authentication:** Implemented JWT authentication and protected routes.
5. **Admin Features:** Added admin dashboards for job and applicant management.
6. **Testing:** Manual and Redux DevTools for debugging.
7. **Deployment:** (Optional) Prepared for deployment with environment variables.

---

## Challenges & Solutions

- **State Persistence:** Used `redux-persist` to keep user state after reloads.
- **Authentication:** JWT tokens in cookies, with protected routes for users/admins.
- **CORS Issues:** Configured CORS middleware in Express.
- **Reusable Components:** Built shared UI components for consistency.
- **Complex State:** Used Redux Toolkit slices and selectors for modular state.

---

## Learnings

- **Full-Stack Integration:** Connecting React frontend with Node/Express backend.
- **State Management:** Advanced Redux patterns and persistence.
- **Authentication:** JWT and route protection in SPAs.
- **Component Design:** Reusable, responsive UI with Tailwind CSS.
- **Debugging:** Using Redux DevTools and browser tools.
- **Best Practices:** Modular code, environment management, and scalable structure.

---

## Project Structure

```
jobportal/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── redux/
    │   ├── hooks/
    │   ├── lib/
    │   └── index.css
    ├── index.html
    ├── package.json
    └── tailwind.config.js
```

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Cloudinary](https://cloudinary.com/) account for file uploads

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/jobportal.git
cd jobportal
```

### 2. Backend Setup

```sh
cd backend
npm install
```

Create a `.env` file in the `backend/` folder with the following variables:

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

Start the backend server:

```sh
npm run dev
```
The backend will run on [http://localhost:8000](http://localhost:8000).

### 3. Frontend Setup

Open a new terminal and run:

```sh
cd frontend
npm install
npm run dev
```
The frontend will run on [http://localhost:5173](http://localhost:5173).

---

## Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Register as a student or recruiter.
- Students can browse and apply for jobs.
- Recruiters can create companies, post jobs, and manage applicants.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any questions, please contact [your-email@example.com](mailto:your-email@example.com).