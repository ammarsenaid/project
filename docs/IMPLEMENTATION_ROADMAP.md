# FachkundePilot — Implementation Roadmap

## Phase 0 — Foundation Setup
- Initialize Next.js App Router + TypeScript + Tailwind.
- Configure Supabase project, env vars, and local tooling.
- Establish folder architecture and coding conventions.
- Set up linting/formatting and migration workflow.

## Phase 1 — Information Architecture & UI Skeleton
- Build route structure for marketing, app, and admin zones.
- Implement shared layout shells and navigation.
- Build static placeholder pages for key flows.
- Build design token baseline and reusable components.

## Phase 2 — Data Model & Auth
- Implement core DB schema tables and constraints.
- Configure Supabase Auth and protected routes.
- Implement role-based guards for admin pages.
- Add initial seed content for 2–3 certificates.

## Phase 3 — Content Management (Admin)
- Implement admin CRUD for certificates, sections, lessons.
- Add flashcard and question management.
- Add upload manager with content linking.
- Add draft/publish workflows.

## Phase 4 — Learner Core Experience
- Implement dynamic certificate browsing.
- Implement lesson rendering and completion events.
- Implement flashcard sessions and review capture.
- Implement glossary views and term linking.

## Phase 5 — Exam Engine + Progress
- Implement mock exam generation and session handling.
- Implement scoring and result analytics.
- Implement progress dashboards and readiness indicators.
- Add recommendations for weak areas.

## Phase 6 — Multilingual Maturity
- Add translation management utilities.
- Add language preference persistence.
- Validate RTL behavior for Arabic explanation rendering.
- Track translation coverage in admin analytics.

## Phase 7 — Monetization & Scale (Post-MVP)
- Integrate Stripe subscriptions and plan gating.
- Add AI tutor layer for guided explanation and Q&A.
- Introduce advanced analytics and cohort insights.
- Expand certificate library and B2B features.

## Recommended Build Order (Strict)
1. Architecture + route skeleton.
2. Data schema + auth.
3. Admin content operations.
4. Learner lesson + flashcard flow.
5. Mock exams + progress metrics.
6. Payments and AI.

## What to Build First
- Reusable content model that supports many certificates.
- Navigation and layout shells that scale.
- Admin-first content tooling to prevent hardcoded learner pages.

## What Not to Build Yet
- Full adaptive personalization engine.
- Native mobile apps.
- Heavy gamification layers.
- Complex enterprise SSO.

## Risks
- Content quality and translation consistency risk.
- Exam regulation changes requiring content updates.
- Over-scoping UI polish before core learning loop works.
- Performance risks if content queries are not indexed.

## Future Improvements
- Certificate-specific study plans.
- Spaced repetition optimization.
- Instructor/cohort management.
- AI-powered weak-topic remediation suggestions.
