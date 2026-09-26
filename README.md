# Job Portal Application

A professional React-based job search platform built to demonstrate front-end development skills, state management, and component architecture.

## 🚀 Overview
This application provides a clean, searchable interface for users to browse and filter job listings. It was built as a portfolio project to showcase proficiency in modern React patterns.

## 🛠 Tech Stack
*   **Frontend:** React (Vite)
*   **State Management:** React Context API
*   **Styling:** CSS3
*   **Routing:** React Router DOM
*   **Data Validation:** Zod
*   **Testing:** Vitest & React Testing Library

## 🔑 Key Features
*   **Advanced Filtering:** Dynamically filter jobs by department, location, and experience.
*   **Search Functionality:** Real-time job title searching.
*   **Sorting:** Sort listings by various headers (Title, Department, etc.).
*   **Pagination:** Efficient data display using custom hooks.
*   **Responsive UI:** Mobile-friendly design.

## 💻 Technical Highlights
*   **Custom Hooks:** Implemented reusable hooks (e.g., `useFilteredJobs`, `useSort`, `usePagination`) to decouple business logic from UI components.
*   **Context API:** Managed global application state (jobs, search, and filters) without prop drilling.
*   **Testing:** Includes a suite of unit tests for core logic and component interactions using Vitest.

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
