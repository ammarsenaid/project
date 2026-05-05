# FachkundePilot — Admin Panel Plan

## 1) Certificate Creation Workflow
1. Create certificate record (title, slug, category, summary, status=draft).
2. Define metadata (estimated hours, target audience, icon/media).
3. Add localized marketing descriptions.
4. Save and move to section builder.

## 2) Section Creation Workflow
1. Select certificate.
2. Add section title and description in German.
3. Set ordered position.
4. Save as draft/published.

## 3) Lesson Creation Workflow
1. Choose certificate + section.
2. Create lesson with German canonical content.
3. Add summary, duration, and assets.
4. Add translations (AR/EN/TR explanations).
5. Preview in learner mode.
6. Publish when validation passes.

## 4) PDF / Asset Upload Workflow
1. Upload to Supabase storage bucket.
2. Auto-generate metadata in `uploads` table.
3. Link file to lesson/certificate entity.
4. Run basic checks (file type, size).

## 5) Flashcard Creation Workflow
1. Select certificate/section.
2. Add German front/back.
3. Add translation explanations.
4. Tag difficulty.
5. Save and publish.

## 6) Question Creation Workflow
1. Create German question stem.
2. Add options and mark correctness.
3. Attach explanation and difficulty.
4. Validate (min options, correct answer presence).
5. Add to question bank and mock exams.

## 7) CSV/Excel Import Workflow
1. Download template format.
2. Upload CSV/XLSX file.
3. Server-side parse + validation report.
4. Review row-level errors.
5. Approve import batch.
6. Imported items remain draft by default.

## 8) Publish / Unpublish Logic
- Entities have `draft | published | archived` states.
- Publishing requires required field completeness.
- Unpublishing hides content from learners without deleting history.
- Versioning/audit log recommended for traceability.

## 9) Multilingual Editing Workflow
- German canonical tab mandatory.
- Language tabs for AR/EN/TR explanations.
- Translation completeness indicators per entity.
- Fallback logic: show German when translation missing.

## 10) Draft/Published Status Logic
- Draft editable and non-public.
- Published visible to learners and indexed in app navigation.
- Changes to published content can use staged updates with publish confirmation.
