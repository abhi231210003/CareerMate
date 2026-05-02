# Project Write-Up

SENSAI is an AI-powered career coach platform I built to solve a simple but real problem: job seekers usually have to jump between multiple tools for resume writing, cover letters, interview practice, and industry research, and most of those tools are generic rather than personalized. I wanted to build one place where a user can onboard once, share their industry, experience, bio, and skills, and then get tailored career support across the full job-search journey.

The product flow starts with onboarding. After the user signs in, they enter their profile details, and the system uses that context to personalize everything else. From there, the platform generates industry insights like salary ranges, in-demand skills, growth trends, and market outlook, then refreshes those insights periodically so the data does not go stale. On top of that, users can build and save resumes, generate cover letters, and practice interview quizzes that are specific to their role and industry. The dashboard then brings it all together with performance tracking and progress visibility.

# Tech Stacks

I used Next.js 15 because it gives me a strong full-stack framework in one codebase. The App Router and server actions let me keep AI calls and database writes on the server, which is cleaner and safer than pushing that logic into the client. It also made routing, layouts, and page composition straightforward for a multi-module product.

I used Prisma with PostgreSQL on Neon because the app needs structured relational data: users, resumes, cover letters, assessments, and industry insights. Prisma gave me type safety, readable schema definitions, and easier data access. Neon was a good fit because it is managed, cloud-hosted, and works well for a serverless-style Next.js app.

For authentication, I used Clerk because I wanted a fast, production-ready auth layer without spending time building sign-in, sign-up, session handling, and protected routes from scratch. That let me focus on the product logic instead of auth plumbing.

For AI, I used OpenRouter because it gives a unified API for model access and reduces vendor lock-in. That was important for this project because AI providers can have rate limits or cost changes, so I wanted an abstraction that makes it easier to switch models without rewriting the app. I also used different temperatures depending on the task: lower temperature for structured JSON outputs like insights and quiz generation, and higher temperature for creative tasks like resumes and cover letters.

I used Inngest for background jobs because one part of the product needs scheduled work. Industry insights are not just generated once; they need weekly refreshes. Inngest made that cron-based workflow clean and reliable without mixing it into user requests.

For the UI, I used Tailwind CSS and Radix UI because I wanted to move quickly while still keeping the interface responsive and accessible. I also used Sonner for toast notifications so users get clear feedback after actions like saving quiz results or generating content.

# Architecture

I would describe it as a server-first career assistant. The client collects input and renders the experience, while the server handles the real work: authentication checks, database persistence, AI generation, and scheduled updates. Each feature is backed by a specific data model, so the app can store user progress and generate personalized output based on that history.

For example, when a user completes onboarding, their industry becomes the anchor for the rest of the app. That same profile is used to generate interview questions, tailor resume suggestions, create cover letters, and produce industry insights. That is what makes the product feel personalized instead of just being a set of disconnected AI prompts.

# Overview

“I built SENSAI, an AI career coach platform, because job seekers usually need multiple separate tools for resumes, cover letters, interview prep, and industry research. I wanted to combine those into one personalized workflow. The user signs in with Clerk, completes onboarding, and then the app uses their industry, skills, and experience to generate tailored outputs like ATS-friendly resumes, cover letters, interview quizzes, and market insights. I used Next.js and server actions so the app stays full-stack in one codebase, Prisma and PostgreSQL for structured data management, OpenRouter for flexible AI integration, and Inngest for weekly background refreshes of industry data. The result is a personalized career assistant that not only generates content, but also tracks progress over time.”