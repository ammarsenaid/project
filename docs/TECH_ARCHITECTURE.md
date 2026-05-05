# FachkundePilot — Technical Architecture

## 1) Recommended Stack
- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS.
- **Backend**: Supabase (Postgres + Auth + Storage + RLS).
- **API Layer**: Next.js route handlers + Supabase SDK.
- **Hosting**: Vercel (frontend) + Supabase project.
- **Future Integrations**: Stripe (billing), AI tutor service.

## 2) Frontend Structure
- `app/(marketing)` for public pages.
- `app/(auth)` for login/register.
- `app/(app)` for protected learner experience.
- `app/(admin)` for admin CMS area.
- Shared UI primitives in `components/ui`.
- Domain components in `components/certificates`, `components/flashcards`, etc.

## 3) Backend Structure
- Supabase as primary BaaS:
  - Postgres relational schema.
  - Row-Level Security for tenant-safe data access.
  - Storage buckets for uploads (PDFs, images, assets).
- Service-role operations restricted to secure server-only contexts.
- Optional background jobs (cron/queues) for reminders and spaced review scheduling.

## 4) Database Choice
- **PostgreSQL (Supabase)** for strong relational integrity and multilingual content consistency.
- Use normalized tables + optional JSONB for flexible metadata.
- Use database migrations (SQL migration files).

## 5) Authentication & Authorization
- Supabase Auth (email/password + magic link or OAuth later).
- Role model:
  - `user`
  - `admin`
  - `editor` (optional)
- RLS policies enforce per-user progress isolation and admin write privileges.

## 6) File Storage
- Supabase Storage buckets:
  - `lesson-assets`
  - `certificate-media`
  - `admin-uploads`
- Metadata tracked in `uploads` table.
- Signed URLs for protected assets.

## 7) Admin Panel Logic
- Admin CRUD workflows for certificates, sections, lessons, flashcards, questions, glossary.
- Draft/published states on content entities.
- Validation gates before publish (required language fields, section ordering, question integrity).
- Import pipeline for CSV/Excel normalization.

## 8) Multilingual Content Handling
- German canonical content fields.
- Translation tables per content type (lessons, flashcards, glossary, optionally questions explanations).
- UI language state:
  - Content language locked to German for exam prompts where required.
  - Explanation language selectable by learner preference.

## 9) SEO Requirements
- Public certificate pages SSR/SSG optimized.
- Metadata per certificate and category.
- Schema.org structured data for courses/FAQ/blog posts.
- Clean slug URLs and canonical tags.

## 10) Deployment Notes
- CI/CD: Git-based deployment to Vercel.
- Environment management:
  - `.env.local` for dev.
  - Vercel env vars for prod.
- Monitoring: error logging, uptime checks, and analytics events.
- Backups: scheduled Supabase backups + migration versioning.
