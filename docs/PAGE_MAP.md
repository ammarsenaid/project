# FachkundePilot — Page Map

## Public Pages
1. **Home** (`/`)
   - Value proposition, featured certificates, social proof, CTA.
2. **All Certificates** (`/certificates`)
   - Search/filter certificate directory.
3. **Certificate Detail** (`/certificates/[slug]`)
   - Overview, structure preview, outcomes, enrollment CTA.
4. **Pricing** (`/pricing`)
5. **About** (`/about`)
6. **FAQ** (`/faq`)
7. **Blog** (`/blog`, `/blog/[slug]`)
8. **Login** (`/login`)
9. **Register** (`/register`)

## User App Pages (Protected)
1. **Dashboard** (`/app/dashboard`)
2. **My Certificates** (`/app/certificates`)
3. **Certificate Learning Page** (`/app/certificates/[slug]`)
4. **Section Page** (`/app/certificates/[slug]/sections/[sectionId]`)
5. **Lesson Page** (`/app/certificates/[slug]/lessons/[lessonId]`)
6. **Flashcards** (`/app/certificates/[slug]/flashcards`)
7. **Mock Exams** (`/app/certificates/[slug]/mock-exams`)
8. **Exam Result** (`/app/certificates/[slug]/mock-exams/[attemptId]/result`)
9. **Glossary** (`/app/certificates/[slug]/glossary`)
10. **Math Trainer** (`/app/certificates/[slug]/math-trainer`)
11. **Profile** (`/app/profile`)
12. **Settings** (`/app/settings`)

## Admin Pages (Protected + Role-Gated)
1. **Admin Dashboard** (`/admin`)
2. **Manage Certificates** (`/admin/certificates`)
3. **Manage Sections** (`/admin/sections`)
4. **Manage Lessons** (`/admin/lessons`)
5. **Manage Flashcards** (`/admin/flashcards`)
6. **Manage Questions** (`/admin/questions`)
7. **Manage Mock Exams** (`/admin/mock-exams`)
8. **Manage Glossary** (`/admin/glossary`)
9. **Manage Users** (`/admin/users`)
10. **Upload Content** (`/admin/uploads`)
11. **Analytics** (`/admin/analytics`)

## Shared Utility Routes
- Not found / error pages.
- Legal pages (`/impressum`, `/datenschutz`, `/agb`) for German market compliance.
- API/route handlers for data operations.
