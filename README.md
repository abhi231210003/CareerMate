<div align="center">

# 🧠 CareerMate — AI Career Coach

**Your personal AI-powered career coach for professional success.**

Advance your career with personalized guidance, AI-driven interview prep, smart resume building, and real-time industry insights — all in one platform.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk)](https://clerk.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Key Modules](#-key-modules)
- [Database Schema](#-database-schema)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI-Powered Career Guidance** | Get personalized career advice and insights powered by advanced AI technology |
| 🎤 **Interview Preparation** | Practice with role-specific questions and receive instant AI feedback |
| 📊 **Industry Insights** | Stay ahead with real-time industry trends, salary data, and market analysis |
| 📄 **Smart Resume Builder** | Generate ATS-optimized resumes with AI assistance |
| ✉️ **Cover Letter Generator** | Create tailored, compelling cover letters for any job application |
| 📈 **Progress Tracking** | Monitor your improvement with detailed performance analytics |

### By the Numbers
- **50+** Industries Covered
- **1000+** Interview Questions
- **95%** Success Rate
- **24/7** AI Support

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://reactjs.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **Authentication** | [Clerk](https://clerk.com/) |
| **Database ORM** | [Prisma](https://www.prisma.io/) |
| **Database** | PostgreSQL |
| **Background Jobs** | [Inngest](https://www.inngest.com/) |
| **Forms** | React Hook Form + Zod |
| **Charts** | Recharts |
| **PDF Export** | html2pdf.js |
| **Markdown Editor** | @uiw/react-md-editor |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- [Clerk](https://clerk.com/) account
- [Inngest](https://www.inngest.com/) account (for background jobs)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/abhi231210003/sensai.git
cd sensai
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables)).

4. **Set up the database**

```bash
npx prisma migrate dev
```

5. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🔐 Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/dbname"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI (OpenRouter)
OPENROUTER_API_KEY=your_ai_api_key

```

---

## 📁 Project Structure

```
sensai/
├── actions/             # Server actions
│   ├── cover-letter.js
│   ├── dashboard.js
│   ├── interview.js
│   ├── resume.js
│   └── user.js
├── app/
│   ├── (auth)/          # Sign-in / Sign-up pages
│   ├── (main)/          # Protected app pages
│   │   ├── ai-cover-letter/
│   │   ├── dashboard/
│   │   ├── interview/
│   │   ├── onboarding/
│   │   └── resume/
│   └── api/             # API routes (Inngest)
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui primitives
│   ├── hero.jsx
│   ├── header.jsx
│   └── footer.jsx
├── data/                # Static data (features, FAQs, etc.)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions & Prisma client
├── prisma/
│   └── schema.prisma    # Database schema
├── public/              # Static assets
├── middleware.js        # Clerk authentication middleware
└── next.config.mjs
```

---

## 🔑 Key Modules

### 🎯 Dashboard
Personalized home screen showing industry insights, salary trends, and a snapshot of your career preparation progress.

### 📝 Resume Builder
An AI-assisted markdown editor that helps craft ATS-optimized resumes. Supports PDF export and provides an ATS score with feedback.

### ✉️ Cover Letter Generator
Generates tailored cover letters based on the job description, company name, and job title. Stores multiple drafts per user.

### 🎤 Interview Preparation
AI-generated mock interview questions specific to your industry and role. Tracks your quiz scores and provides improvement tips.

### 📊 Industry Insights
Real-time data on salary ranges, market outlook, growth rate, demand levels, top skills, and key industry trends.

### 🛤️ Onboarding
Guided setup where users select their industry and enter professional details to personalize the entire platform experience.

---

## 🗄️ Database Schema

The app uses **PostgreSQL** via **Prisma ORM** with the following core models:

- **User** — Profile, skills, industry, and experience
- **Assessment** — Quiz results and AI-generated improvement tips
- **Resume** — Markdown content with ATS score and feedback
- **CoverLetter** — Generated cover letters with job/company context
- **IndustryInsight** — Aggregated salary, trends, and market data per industry

---




