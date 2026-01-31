# 🧠 HabitForge (Frontend)

📌 A modern React frontend for **HabitForge**, a habit-tracking and productivity web app to help users build better routines, track progress, and stay motivated.

---

## 🚀 Features

✔ User Authentication (Login / Signup)  
✔ Forgot Password Flow with OTP Verification  
✔ Interactive Dashboard  
✔ Habit List & Management  
✔ Analytics Overview  
✔ Profile / Settings  
✔ Responsive UI  
✔ Cloudinary Avatar Upload  
✔ Clean UI with Tailwind CSS  

---

## 🛠 Built With

- **React** – UI Library  
- **React Router v6** – SPA navigation  
- **Tailwind CSS** – Utility-first styling  
- **React Query (optional)** – Async data caching  
- **Axios** – HTTP client  
- **React Hot Toast** – Toast notifications  
- **Cloudinary** – Image uploads  

---

## 📁 Folder Structure

src/
├── api/ # Axios instance + API utilities
├── assets/ # Images, videos
├── Components/
│ ├── Navbar/ # Sidebar, top bar, Footer
│ └── UI/ # Reusable UI parts
├── Hooks/ # Custom hooks (useAuth, etc.)
├── Pages/ # Screens (Dashboard, Settings, Login, etc.)
├── Contexts/ # React Context providers
├── styles/ # Tailwind / custom CSS
├── App.jsx
├── main.jsx
└── index.css


---

## 🔧 Installation

1. Clone the frontend repo:
```bash
git clone https://github.com/sushankannahd17/habitforge-frontend.git
Install dependencies:

cd habitforge-frontend
npm install
Create .env file in root:

VITE_API_BASE_URL=http://yourbackendurl.com
VITE_SOME_KEY=yourkey
Run the dev server:

npm run dev
🔑 Authentication Flow
The app handles:

✔ User login & logout
✔ Context-based session store (sessionStorage)
✔ Protected routes
✔ Redirects if not authenticated
✔ Forgot Password → OTP → Reset Password

You can extend the auth logic using React Query or JWT refresh token logic.

📦 API Integration
This frontend expects matching backend routes:

POST /auth/login
POST /auth/signup
POST /auth/genOTP
POST /auth/confirmOTP
POST /auth/getAccountDetails
PATCH /auth/modifyAccountDetails
POST /auth/logout
Each call uses Axios and toast.promise for feedback.

🖼 Environment Variables
Add:

VITE_API_BASE_URL=<your backend URL>
Example:

VITE_API_BASE_URL=https://api.habitforge.app
📌 Deployment
You can deploy this on:

🎯 Vercel
🎯 Netlify
🎯 Cloudflare Pages
🎯 Render

Just connect your GitHub and set the environment variables.

🎨 UX
Tailwind utility-first CSS

Clean, minimalist dashboard

Sidebar navigation

Responsive pages

Toast notifications

Avatar upload & preview

🧑‍💻 Contributing
Fork it

Create feature branch

Commit your changes

Push & open a PR

📜 License
This project is open-source under the MIT License.

❤️ Made With
Built with ❤️ by Sushan Kannah D
Keeping you productive one habit at a time 🚀


---

If you want, I can generate:

🔹 a **README for your backend** as well  
🔹 a **project overview diagram**  
🔹 a **Docs site (Storybook / MDX)**  

Just tell me!
::contentReference[oaicite:0]{index=0}