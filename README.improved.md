# SENSAI — AI Career Coach

A concise, production-oriented AI assistant that helps professionals build resumes, write cover letters, practice and track interview performance, and monitor industry trends — all personalized to the user's industry, experience and skillset.

---

**Problem Statement**
- Job seekers bounce between many tools (resume builders, ATS checks, interview question banks, market research). These tools are rarely personalized and don't keep context. SENSAI solves this by creating a single, personalized career assistant that uses the user's profile to tailor resumes, cover letters, interview quizzes, and industry insights.

**Core Product Flows**
- Onboarding: user shares industry, experience, skills, and bio.
- Industry Insights: AI-generated salary ranges, growth rates, trends, and recommended skills — refreshed weekly.
- Resume Builder: single-source resume saved in markdown, with AI-assisted improvements and ATS-aware suggestions.
- Cover Letters: generate tailored cover letters from job descriptions and user profile.
- Interview Practice: AI-generated multiple-choice quizzes tailored to the user's industry and skills, with saved assessments and AI improvement tips.
- Dashboard: aggregated metrics, charts, and history of assessments and content.

**Key Features & Why They Matter**
- Personalization: The user's industry, skills, and experience drive all AI outputs so results feel relevant and actionable.
- Persisted History: All resumes, cover letters, and assessments are stored so users can track progress and improvements over time.
- Periodic Refresh: Weekly re-generation of industry insights prevents stale data and keeps recommendations up-to-date.
- Server-first AI orchestration: AI calls and DB writes happen on the server for security, reliability, and cost control.

**Tech Stack & Rationale**
- Next.js (App Router) — single framework for server/client code, server actions, and fast developer DX.
- React 19 + Tailwind CSS + Radix UI — composable, accessible, and fast UI development.
- Clerk — fast, production-ready authentication with minimal setup.
- Prisma + PostgreSQL (Neon) — typed ORM and reliable relational storage for models like User, Resume, Assessment, CoverLetter, IndustryInsight.
- OpenRouter (AI) — flexible provider abstraction to call LLMs for structured outputs and creative text.
- Inngest — cron-based background jobs for weekly industry insight regeneration.
- Sonner — lightweight toast notifications for UX feedback.

**Architecture Overview**
- Client: React components for UI, onboarding forms, editors, and local state.
- Server: Next.js server actions handle authentication checks, DB access via Prisma, and calls to generateWithOpenRouter() for AI.
- Background Jobs: Inngest cron job runs weekly to refresh industry insights.
- Data Models: User, Assessment, Resume, CoverLetter, IndustryInsight (schema in `prisma/schema.prisma`).

**Notable Implementation Choices**
- Structured AI outputs: Prompts request strict JSON for things like quizzes and industry insights to enable deterministic parsing.
- Temperature tuning: Low temperature (0.2) for structured/precise tasks; higher (0.7) for creative tasks (cover letters, resume improvements).
- Upsert patterns: resume upsert ensures a single resume record per user for simpler UI and storage.
- Revalidation: `revalidatePath()` used after resume saves to keep server-rendered pages fresh.

**Run locally (quick)**
1. Copy `.env.example` to `.env` and set values for `DATABASE_URL`, `OPENROUTER_API_KEY`, and Clerk keys.
2. Install and generate Prisma client:

```powershell
npm install
npm run postinstall
```

3. Run dev server:

```powershell
npm run dev
```

**Important env variables**
- `DATABASE_URL` — PostgreSQL connection string.
- `OPENROUTER_API_KEY` — API key for the AI provider.
- `CLERK_*` — Clerk publishable and secret keys for auth.

**Files to review**
- `app/` — UI and routes for onboarding, dashboard, resume, cover letters, interview practice.
- `actions/` — server actions that orchestrate DB and AI calls (cover-letter.js, resume.js, interview.js, dashboard.js, user.js).
- `lib/openrouter.js` — centralized AI client wrapper.
- `lib/prisma.js` — Prisma client singleton.
- `prisma/schema.prisma` — schema definitions for core data models.
- `lib/inngest/functions.js` — background job for industry insights.

**Testing & Further Work**
- End-to-end tests for AI output parsing (quiz JSON & industry JSON).
- Add `.env.example` and CI checks for secrets and basic smoke tests.
- Add usage limits / cost monitoring for OpenRouter when scaling.
- Cleanup: remove unused `lib/rate-limiter.js` if not needed.

**How to talk about it in interviews**
- Focus on the problem (fragmented career tools) → solution (one personalized workflow) → technical tradeoffs: server-first AI orchestration for security and cost control, Prisma for typed DB access, and Inngest for scheduled workloads.
- Highlight measurable outcomes: personalization, persisted progress, and deterministic AI output formats that enable reliable parsing.
- Mention specific challenges you solved: migrating AI provider, handling stale build/database race issues, and tuning prompts/temperatures for reliability.

---

If you want, I can:
- Replace the project's `README.md` with this version (commit it),
- Produce a condensed 60-second pitch or a STAR-format answer for interviews, or
- Add an `.env.example` and a short CONTRIBUTING.md next.
