# Job Portal Frontend

This is the **frontend** for the Job Portal project, built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **Vite**. It provides a modern, responsive user interface for students, recruiters, and admins to interact with the job portal platform.

---

## Features

- **User Authentication:** Register and login as a student or recruiter, with JWT-based authentication.
- **Profile Management:** Update profile details, upload profile photo and resume (Cloudinary integration).
- **Job Search & Application:** Browse, search, and filter jobs; view job details; apply for jobs.
- **Recruiter Dashboard:** Create and manage companies, post jobs, view and manage applicants.
- **Admin Dashboard:** (If enabled) Manage users, jobs, and companies.
- **State Management:** Uses Redux Toolkit and redux-persist for robust, persistent state.
- **Responsive UI:** Built with Tailwind CSS for mobile and desktop.
- **Notifications:** Toast notifications for actions and errors (Sonner).
- **Form Validation:** Formik and Yup for robust form handling and validation.

---

## Tech Stack

- **React** (with hooks)
- **Redux Toolkit** (state management)
- **Redux Persist** (state persistence)
- **React Router** (routing)
- **Tailwind CSS** (styling)
- **Axios** (API requests)
- **Formik & Yup** (forms and validation)
- **Sonner** (toast notifications)
- **Radix UI** (accessible UI components)
- **Vite** (build tool)

---

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Home, Login, Dashboard, etc.)
│   ├── redux/           # Redux slices and store
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and API logic
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- Backend server running (see main project README)

### Installation

1. **Install dependencies:**
    ```sh
    npm install
    ```

2. **Start the development server:**
    ```sh
    npm run dev
    ```
    The app will be available at [http://localhost:5173](http://localhost:5173).

3. **Configure API endpoints:**
    - By default, API requests are sent to `http://localhost:8000/api/v1/`.  
      If your backend runs elsewhere, update the base URL in your API utility (e.g., `src/lib/axios.js`).

---

## Usage

- **Students:** Register, update profile, search and apply for jobs, track applications.
- **Recruiters:** Register, create/manage companies, post jobs, view/manage applicants.
- **Admins:** (If enabled) Manage users, jobs, and companies.

---

## Customization

- **Styling:** Modify `tailwind.config.js` and `index.css` for custom themes.
- **Environment Variables:** Use `.env` files for frontend environment settings if needed.
- **API Integration:** Update API endpoints in `src/lib/axios.js` or similar.

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

## Learnings & Highlights

- **Modern React:** Used hooks, context, and functional components throughout.
- **Redux Toolkit:** Simplified state management and async logic.
- **Persistent State:** Used redux-persist for seamless user experience.
- **Reusable Components:** Built modular, accessible UI components.
- **Form Handling:** Robust validation and UX with Formik and Yup.
- **Responsive Design:** Mobile-first and desktop-ready with Tailwind CSS.

---

## License

This project is licensed under the MIT License.