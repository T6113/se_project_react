# Weather Wardrobe React App

A modern React + Vite application that helps users decide what to wear based on the weather. The app features:

- Weather display with real-time temperature and city info
- Clothing item cards filtered by weather type
- Add, preview, and remove clothing items
- User authentication (signup, login, logout)
- Profile section with sidebar and clothing management
- Like/unlike clothing items
- Responsive, clean UI with custom styling

## Backend Repository

**⚠️ Important :** This React frontend requires the backend server to be running for full functionality including authentication, user management, and data persistence.

**Backend Repository:** [https://github.com/T6113/se_project_express](https://github.com/T6113/se_project_express)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Project Structure

- `src/components/` — React components (App, Main, Profile, Sidebar, ItemCard, etc.)
- `src/utils/` — API utilities and constants
- `public/` — Static assets
- `db.json` — Mock database for local API

## Features

- Weather-based clothing suggestions
- User authentication (register, login, logout)
- Add and remove clothing items
- Like/unlike clothing items functionality
- Profile management and editing
- Protected routes for authenticated users
- Avatar placeholders for users
- Responsive design

## Tech Stack

**Frontend:**

- React
- Vite
- CSS Modules
- React Context API
- React Router
- Fetch API
- Modern JavaScript (ES6+)

**Backend:**

- Express.js server (separate repository)
- JWT authentication
- MongoDB/Database integration
- RESTful API endpoints

---

Developed by Thomisha Myers, 2025
