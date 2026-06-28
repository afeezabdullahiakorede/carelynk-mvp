# Carelynk: Smart Access to Care (Frontend MVP)

## 📌 Overview
Carelynk is a mobile-first, comprehensive healthcare management dashboard designed to bridge the gap between patients and medical providers. Developed as a high-fidelity Frontend Minimum Viable Product (MVP) for academic symposium evaluation, this application demonstrates advanced React state management, modular component architecture, and seamless UX/UI implementation.

Developed in collaboration with the Betechified study group, this project showcases rapid prototyping, edge-case handling, and scalable component design.

## 🚀 Key Features

*   **Intelligent Dashboard:** A dynamic home interface that adapts to user states, featuring conditional rendering for upcoming appointments, empty states, and recent health logs.
*   **Multi-Step Appointment Engine:** A fully interactive booking flow that navigates users through hospital selection, department/doctor filtering, and confirmation views without page reloads.
*   **Family & Dependent Management:** A dedicated "Parent Flow" allowing primary account holders to switch contexts, manage pediatric profiles, and assign preferred hospitals for dependents.
*   **Health & Vitals Tracking:** Contextual modal workflows for logging real-time health metrics (Blood Pressure, Weight, Heart Rate) integrated seamlessly into the user's tracking history.
*   **Medication Manager:** A dynamic weekly scheduling strip combined with a state-driven form to add and track medication adherence.
*   **Simulated Authentication:** A secure "Gatekeeper" routing system demonstrating enterprise-grade protected routes and session states prior to backend API integration.

## 🛠️ Technical Architecture & MVP Scope

To meet strict development deadlines while ensuring a flawless presentation, the following engineering decisions were implemented:

*   **Frontend Framework:** Built with **React** and powered by **Vite** for optimized build times and hot Module Replacement (HMR).
*   **State Management:** Utilizes localized `useState` and `useEffect` hooks combined with top-level prop drilling for global navigation, ensuring a lightweight footprint without the overhead of Redux for the MVP phase.
*   **Simulated Backend Service:** A custom `api.js` service handles asynchronous data fetching (with artificial delays) to demonstrate accurate loading states (spinners/skeletons) and simulate database latency.
*   **Mobile-First CSS:** Custom CSS engineered exclusively for mobile viewports, utilizing CSS Variables for global theming, Flexbox/Grid for layout structuring, and keyframe animations for native-feeling slide-over transitions.

## 📂 Project Structure
The repository is organized following industry-standard modularity:
*   `/src/pages` - Core routing views (Home, Profile, Tracker, Records, Login).
*   `/src/components` - Reusable UI elements and complex multi-step flows (BookingFlow, ParentFlow, VitalsModal, Header, BottomNav).
*   `/src/services` - Mock API functions for asynchronous data simulation.

## 🌐 Live Deployment
This project is continuously deployed via Vercel, demonstrating CI/CD integration directly from the main branch. 

**Live Demo:** carelynk-mvp.vercel.app
