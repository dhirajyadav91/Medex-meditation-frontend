# Medex - MERN Stack Session Management App

This project is a **MERN Stack** application with **React + Vite** frontend and **Node.js + Express + MongoDB** backend.  
It allows users to **register, log in, create sessions, save drafts, publish sessions**, and view public sessions.

---

## 🚀 Features
- **Authentication**
  - Login & Registration using JWT
  - Protected routes with token-based authentication
- **Session Management**
  - Create sessions with title, tags, JSON file URL, and optional video link
  - Save sessions as **draft** or **publish** them
  - View your own sessions (All, Published, Draft)
- **Public Sessions**
  - Publicly accessible page to view all published sessions
- **Responsive UI**
  - Built with **Tailwind CSS**
  - Fixed top navbar with routing
- **Backend API**
  - Node.js + Express + MongoDB
  - Separate routes for authentication and session management

---

## 📂 Folder Structure


project/
│
├── backend/ # Node.js + Express + MongoDB API
│ ├── models/ # Mongoose Schemas
│ ├── routes/ # API routes
│ ├── controllers/ # Business logic
│ └── server.js # App entry point
│
├── frontend/ # React + Vite + Tailwind frontend
│ ├── src/
│ │ ├── pages/ # Page components (Login, Dashboard, Sessions, etc.)
│ │ ├── components/ # Reusable UI components
│ │ ├── api/ # API calls using Axios
│ │ └── App.jsx
│
└── README.md # Project documentation


---

## ⚡ Tech Stack
- **Frontend**: React (Vite), React Router, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT Authentication
- **Tools**: ESLint, dotenv

---

## 🔧 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/dhirajyadav91/medex-app.git
cd medex-app
2️⃣ Install dependencies
Backend

bash
Copy
Edit
cd backend
npm install
Frontend

bash
Copy
Edit
cd ../frontend
npm install
3️⃣ Setup Environment Variables
Create .env in backend folder:

env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Create .env in frontend folder:

env
VITE_BASE_URL=http://localhost:8080
4️⃣ Run the project
Run backend

bash
cd backend
npm start
Run frontend

bash
cd ../frontend
npm run dev
Or run both together:

bash
npm run dev:all
📌 API Endpoints
Auth
POST /api/v1/auth/register → Register user

POST /api/v1/auth/login → Login & get token

Sessions
POST /api/v1/session/my-sessions/save-draft → Create session as draft

POST /api/v1/session/my-sessions/publish → Publish a session

GET /api/v1/session/my-sessions → Get logged-in user's sessions

GET /api/v1/session/public → Get all published sessions

📷 Screenshots