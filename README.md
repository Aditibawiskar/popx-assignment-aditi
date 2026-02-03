# PopX - React Frontend Assignment

This repository contains the solution for the PopX Frontend Intern/Fresher assignment. The project is a pixel-perfect recreation of the provided Adobe XD designs, built with **React.js** and **Vite**.

## 🚀 Features

-   **Pixel Perfect Design:** Matches the Adobe XD mockups exactly, including custom floating labels and specific color palettes (`#6C25FF`, `#CEBAFF`).
-   **Mobile-First Layout:** The app is centered within a restricted mobile view (450px max-width) on desktop screens to simulate a native app experience.
-   **Routing:** Seamless navigation between Landing, Login, Signup, and Profile pages using `react-router-dom`.
-   **State Management:**
    -   Persists User Name and Email using `localStorage` to display dynamic data on the Profile page after Signup/Login.
    -   Handles form inputs and radio button states.
-   **Clean Code Architecture:** Structured with separate folders for `pages`, `components`, and `styles`.

## 🛠️ Tech Stack

-   **Frontend:** React.js (Vite)
-   **Styling:** CSS3 (Custom Modules & Global Styles)
-   **Routing:** React Router DOM
-   **Font:** Rubik (via Google Fonts)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone git remote add origin https://github.com/Aditibawiskar/popx-assignment-aditi.git
    cd popx-assignment-aditi
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173/`

## 📂 Folder Structure

* **src/**
    * **components/**
        * `Container.jsx` (Reusable UI wrapper)
    * **pages/**
        * `LandingPage.jsx` (Welcome Screen)
        * `LoginPage.jsx` (Signin Screen)
        * `SignupPage.jsx` (Create Account Screen)
        * `ProfilePage.jsx` (Account Settings Screen)
    * **styles/**
        * `form.css` (Global Styles & Fonts)
    * `App.jsx` (Main Routing Setup)
    * `main.jsx` (Entry Point)


---
**Submitted by:** Aditi Bawiskar


