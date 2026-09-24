# 💪 FitLog — Workout Library

FitLog is a modern and responsive workout library built with Next.js. It helps users explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track their workout activities in one place.

The project focuses on providing a clean, dark, no-nonsense interface for people who want to discover workouts and organize their training.

---

## 🚀 Live Project

**Live Demo:** https://b14-a6-fit-log-beta.vercel.app/

---

## 🛠️ Technologies Used

* **Next.js** — App Router
* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **Next/Image**
* **React Context API**
* **LocalStorage**
* **REST API**

---

## ✨ Features

### 1. 🏋️ Workout Library

Browse a collection of workouts covering different muscle groups, equipment, difficulty levels, duration, calories, and ratings.

### 2. 🔎 Workout Search

Search workouts by:

* Workout name
* Muscle group
* Equipment

### 3. 📋 Daily Workout Plan

Add workouts to today's plan with a maximum limit of **5 exercises**.

### 4. ❤️ Save Workouts

Save workouts for later and access them from the **My Plan** page.

### 5. 📊 Workout Details

View detailed information about each workout, including:

* Description
* Muscle groups
* Equipment
* Difficulty
* Duration
* Calories
* Sets and reps
* Rating
* Instructions

### 6. 💾 LocalStorage Persistence

Plan and saved workouts are stored in the browser's localStorage, so the data remains available after refreshing the page.

### 7. 🔔 Toast Notifications

Relevant toast notifications appear when users:

* Add a workout to the plan
* Save a workout
* Remove a workout
* Mark a workout as done

### 8. 📈 My Plan Dashboard

The My Plan page provides live workout statistics:

* Total exercises
* Total minutes
* Total calories

### 9. 🔃 Workout Sorting

Sort workouts by:

* Duration
* Calories
* Rating

### 10. 📱 Responsive Design

The application is designed to work across:

* Mobile
* Tablet
* Desktop

### 11. ⏳ Loading & Error Handling

The application includes:

* Loading UI while workout data is being fetched
* Custom 404 page for invalid routes

---

## 📁 Project Structure


src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── WorkoutGrid.tsx
│   │   ├── WorkoutSearch.tsx
│   │   ├── WorkoutActions.tsx
│   │   ├── PlanWorkoutCard.tsx
│   │   └── Footer.tsx
│   │
│   ├── context/
│   │   └── fitlog-context.tsx
│   │
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── not-found.tsx
│   ├── loading.tsx
│   ├── layout.tsx
│   └── page.tsx
│
└── types/
    └── workout.ts


---

## 🔌 API

FitLog uses a REST API to fetch workout data.

**All workouts:**


https://api.abcz.workers.dev/api/fitlog


**Single workout:**


https://api.abcz.workers.dev/api/fitlog/:id


---

## 🎯 Project Goals

The main goals of FitLog are to provide a simple and focused workout experience where users can:

* Discover new exercises
* Learn how to perform them
* Build a daily workout plan
* Save workouts for later
* Track basic workout statistics
* Keep their workout data after page reloads

---

## 👨‍💻 Developer

**AH Jibon**

Built as a Programming Hero assignment project.

---

## 📄 License

This project was created for educational purposes.
