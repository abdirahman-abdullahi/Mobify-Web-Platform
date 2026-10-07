# Mobify Web Platform

Mobify is a React-based web platform developed as a modern frontend concept for a mobile-device financing and retail service.

The project focuses on creating a clean, responsive user experience that allows users to explore available phones, understand the financing process, submit an application, and contact the business.

> **Project Status:** 🚧 Frontend Prototype / In Development

The React frontend and core page structure have been implemented. Backend services, persistent data storage, authentication, and application processing are planned for future development.

## Current Features

### Home Page

A structured landing page introducing the service and directing users toward available devices and the application process.

### Phone Catalogue

A dedicated phones page and reusable phone-card components for displaying mobile devices.

### Application Interface

An application form has been created as the foundation for the device-financing application workflow.

### How It Works

The platform includes a dedicated explanation of the customer journey and financing process.

### FAQ

Reusable FAQ components provide answers to common customer questions.

### Contact

A dedicated contact page and contact-information components provide a structured way to display business communication details.

### About

An About page provides space for company and service information.

## Reusable Components

The frontend uses reusable React components including:

- Navbar
- Hero Section
- Phone Card
- How It Works Section
- Application Form
- FAQ Section
- Contact Information
- Footer

## Technology Stack

- React
- Vite
- React Router
- JavaScript
- CSS
- HTML
- Git
- GitHub

## Project Structure

```text
mobify/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── components_styles/
│   │   ├── pages/
│   │   ├── pages_styles/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
├── .gitignore
└── README.md
```

## Pages

The current application contains:

- Home
- Phones
- Apply
- How It Works
- About
- Contact

## Getting Started

### Install dependencies

```bash
cd frontend
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide the local development address in the terminal.

## Development Roadmap

Future development may include:

- Backend API
- PostgreSQL database
- User accounts
- Customer authentication
- Phone inventory management
- Device detail pages
- Financing application processing
- Application status tracking
- Admin dashboard
- Customer dashboard
- Form validation
- Database persistence
- Payment functionality
- Responsive UI improvements

## Purpose

This project was developed to practice modern React application development, reusable component architecture, page routing, responsive interface design, and the structure of a commercial web platform.

## Author

**Abdirahman Abdullahi**

Full-Stack Developer

---

This project is currently a frontend prototype and remains under development.