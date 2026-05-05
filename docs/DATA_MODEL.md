# FachkundePilot — Data Model

> Type notation is Postgres-oriented and implementation-ready for Supabase.

## 1) `users`
- **Fields**: `id (uuid, pk)`, `email (text, unique)`, `created_at (timestamptz)`
- **Purpose**: Auth identity reference (mirrors Supabase auth users).
- **Relationships**: 1:1 with `user_profiles`; 1:N with progress/attempt tables.
- **Notes**: Usually sourced from `auth.users`; keep app-level shadow only if needed.

## 2) `user_profiles`
- **Fields**: `id (uuid, pk, fk->users.id)`, `full_name (text)`, `preferred_language (text)`, `timezone (text)`, `exam_target_date (date)`, `created_at`, `updated_at`
- **Purpose**: Learner profile and preferences.
- **Relationships**: FK to `users`.
- **Notes**: Include onboarding completion flag optionally.

## 3) `certificate_categories`
- **Fields**: `id (uuid, pk)`, `name (text)`, `slug (text, unique)`, `description (text)`, `sort_order (int)`
- **Purpose**: Group certificates by industry.
- **Relationships**: 1:N with `certificates`.
- **Notes**: Stable taxonomy for filtering.

## 4) `certificates`
- **Fields**: `id (uuid, pk)`, `category_id (uuid, fk)`, `title_de (text)`, `slug (text, unique)`, `short_description_de (text)`, `status (text: draft|published)`, `estimated_hours (int)`, `created_at`, `updated_at`
- **Purpose**: Core certificate catalog entries.
- **Relationships**: N:1 `certificate_categories`; 1:N sections, exams, glossary.
- **Notes**: German title as source-of-truth.

## 5) `certificate_languages`
- **Fields**: `id (uuid, pk)`, `certificate_id (uuid, fk)`, `language_code (text)`, `title_localized (text)`, `description_localized (text)`
- **Purpose**: Localized presentation metadata.
- **Relationships**: N:1 `certificates`.
- **Notes**: Keep exam prompts German; this is for assistive/context text.

## 6) `sections`
- **Fields**: `id (uuid, pk)`, `certificate_id (uuid, fk)`, `title_de (text)`, `description_de (text)`, `sort_order (int)`, `status`, `created_at`, `updated_at`
- **Purpose**: Chapter-level grouping.
- **Relationships**: N:1 `certificates`; 1:N `lessons`, `flashcards`, `questions`.
- **Notes**: Order is mandatory for guided progression.

## 7) `lessons`
- **Fields**: `id (uuid, pk)`, `certificate_id (uuid, fk)`, `section_id (uuid, fk)`, `title_de (text)`, `content_de (text)`, `summary_de (text)`, `duration_minutes (int)`, `sort_order (int)`, `status`, `created_at`, `updated_at`
- **Purpose**: Core learning units.
- **Relationships**: N:1 `sections`, `certificates`; 1:N `lesson_translations`, progress refs.
- **Notes**: Can include markdown content and asset links.

## 8) `lesson_translations`
- **Fields**: `id (uuid, pk)`, `lesson_id (uuid, fk)`, `language_code (text)`, `title_localized (text)`, `explanation_localized (text)`, `summary_localized (text)`, `created_at`, `updated_at`
- **Purpose**: Simplified multilingual explanations.
- **Relationships**: N:1 `lessons`.
- **Notes**: Unique constraint on `(lesson_id, language_code)`.

## 9) `flashcards`
- **Fields**: `id (uuid, pk)`, `certificate_id (uuid, fk)`, `section_id (uuid, fk)`, `front_de (text)`, `back_de (text)`, `difficulty (smallint)`, `status`, `created_at`, `updated_at`
- **Purpose**: Vocabulary and concept recall cards.
- **Relationships**: N:1 with `sections`/`certificates`; 1:N translations/reviews.
- **Notes**: German front should stay exam-authentic.

## 10) `flashcard_translations`
- **Fields**: `id (uuid, pk)`, `flashcard_id (uuid, fk)`, `language_code (text)`, `explanation_localized (text)`, `example_localized (text)`
- **Purpose**: Localized card explanations.
- **Relationships**: N:1 `flashcards`.
- **Notes**: Unique `(flashcard_id, language_code)`.

## 11) `questions`
- **Fields**: `id (uuid, pk)`, `certificate_id (uuid, fk)`, `section_id (uuid, fk)`, `question_text_de (text)`, `question_type (text)`, `explanation_de (text)`, `difficulty (smallint)`, `status`, `created_at`, `updated_at`
- **Purpose**: Exam question bank.
- **Relationships**: 1:N `question_options`; N:M via `mock_exam_questions`.
- **Notes**: Supports single/multiple choice.

## 12) `question_options`
- **Fields**: `id (uuid, pk)`, `question_id (uuid, fk)`, `option_text_de (text)`, `is_correct (boolean)`, `sort_order (int)`
- **Purpose**: Option set for MCQ questions.
- **Relationships**: N:1 `questions`.
- **Notes**: Validation ensures at least one correct option.

## 13) `mock_exams`
- **Fields**: `id (uuid, pk)`, `certificate_id (uuid, fk)`, `title (text)`, `description (text)`, `duration_minutes (int)`, `total_questions (int)`, `pass_score_percent (numeric)`, `status`, `created_at`
- **Purpose**: Configurable mock exam templates.
- **Relationships**: N:1 `certificates`; 1:N `mock_exam_questions`; 1:N attempts.
- **Notes**: Can support adaptive blueprint later.

## 14) `mock_exam_questions`
- **Fields**: `id (uuid, pk)`, `mock_exam_id (uuid, fk)`, `question_id (uuid, fk)`, `sort_order (int)`, `points (numeric)`
- **Purpose**: Junction table for exam composition.
- **Relationships**: N:1 both sides.
- **Notes**: Unique `(mock_exam_id, question_id)`.

## 15) `glossary_terms`
- **Fields**: `id (uuid, pk)`, `certificate_id (uuid, fk)`, `term_de (text)`, `definition_de (text)`, `section_id (uuid, fk, nullable)`, `status`, `created_at`
- **Purpose**: Central vocabulary base.
- **Relationships**: N:1 `certificates`; optional N:1 `sections`; 1:N translations.
- **Notes**: Supports global and section-specific terms.

## 16) `glossary_translations`
- **Fields**: `id (uuid, pk)`, `glossary_term_id (uuid, fk)`, `language_code (text)`, `definition_localized (text)`, `notes_localized (text)`
- **Purpose**: Multilingual term explanations.
- **Relationships**: N:1 `glossary_terms`.
- **Notes**: Unique `(glossary_term_id, language_code)`.

## 17) `user_progress`
- **Fields**: `id (uuid, pk)`, `user_id (uuid, fk)`, `certificate_id (uuid, fk)`, `section_id (uuid, fk, nullable)`, `lesson_id (uuid, fk, nullable)`, `progress_type (text)`, `status (text)`, `score_percent (numeric, nullable)`, `last_activity_at (timestamptz)`, `created_at`, `updated_at`
- **Purpose**: Unified progress ledger.
- **Relationships**: N:1 users/certificates/optional content references.
- **Notes**: Can track lesson completion, exam states, milestones.

## 18) `user_flashcard_reviews`
- **Fields**: `id (uuid, pk)`, `user_id (uuid, fk)`, `flashcard_id (uuid, fk)`, `rating (smallint)`, `reviewed_at (timestamptz)`, `next_review_at (timestamptz)`, `interval_days (int)`
- **Purpose**: Spaced repetition history and scheduling.
- **Relationships**: N:1 users/flashcards.
- **Notes**: Index `(user_id, next_review_at)` for due-card queries.

## 19) `user_exam_attempts`
- **Fields**: `id (uuid, pk)`, `user_id (uuid, fk)`, `mock_exam_id (uuid, fk)`, `started_at`, `submitted_at`, `score_percent (numeric)`, `passed (boolean)`, `answers_json (jsonb)`
- **Purpose**: Persisted mock exam sessions and outcomes.
- **Relationships**: N:1 users/mock_exams.
- **Notes**: `answers_json` may store option selections/time per question.

## 20) `admin_roles`
- **Fields**: `id (uuid, pk)`, `user_id (uuid, fk)`, `role (text)`, `created_at`
- **Purpose**: RBAC mapping for admin/editor privileges.
- **Relationships**: N:1 users.
- **Notes**: Backed by RLS checks.

## 21) `uploads`
- **Fields**: `id (uuid, pk)`, `uploaded_by (uuid, fk->users.id)`, `bucket (text)`, `path (text)`, `file_name (text)`, `mime_type (text)`, `size_bytes (bigint)`, `entity_type (text)`, `entity_id (uuid, nullable)`, `created_at`
- **Purpose**: File metadata and linkage to content.
- **Relationships**: Optional polymorphic linkage to lessons/certificates/etc.
- **Notes**: Keep soft deletion and audit trail.
