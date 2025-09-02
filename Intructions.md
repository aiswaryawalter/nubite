Functional Snack Bar Website - Nubite — Build Instructions

Goal: Build a single-page marketing website for a new functional snack bar. The site should introduce the product, engage visitors, collect survey responses, and capture early testers’ emails.

Tech Stack & Conventions

Framework: React (Next.js preferred, but plain React + Vite is fine too).

Language: TypeScript.

Styling: Tailwind CSS.

Components: Functional components, hooks, modular structure.

Forms: Simple state handling (React hooks).

Email Logic: Use a placeholder API handler (mock or /api/sendMail.ts).

File Structure (suggested)

/components
  Logo.tsx
  Hero.tsx
  QRSection.tsx
  SubscribeSection.tsx
  ContactForm.tsx
/pages
  index.tsx
  /api/sendMail.ts (mock handler for form submissions)
  /api/subscribe.ts (mock handler for email subscription)
/public
  logo-placeholder.png
  qr-placeholder.png

Page Sections
1. Landing (Hero Section)

Centered logo placeholder and product name (“Functional Snack Bar”).

Interactive element: e.g., animated call-to-action button “Discover More” that scrolls down to the next section.

Background color and gradients that fit the healthy food / functional nutrition theme (greens, earthy tones, maybe warm accent colors).

2. QR Code Survey Section

Heading: “Help Us Shape the Future of Snacking”

Display a QR code image (placeholder: qr-placeholder.png).

QR should link to a Google Form survey (URL stored in config).

Button “Open Survey” that also redirects to the form.

3. Subscribe for Early Taste Testers

Heading: “Be the First to Taste”

Input: email field with validation (must be a proper email).

Button: “Subscribe”

On submit: call /api/subscribe and show confirmation message (mock logic: log to console or store in array).

Design: clean, friendly, trust-inspiring.

4. Contact Us Section

Heading: “We’d Love to Hear From You”

Form fields:

Name (optional)

Email (required)

Message (textarea, required)

Button: “Send Message”

On submit: call /api/sendMail with JSON payload { name, email, message }.

Show success or error message.

Mock the sending logic (just log in backend handler).

Color & Theme Guidelines

Base palette: Fresh greens, natural beiges, soft oranges/yellows.

Font: Clean sans-serif (e.g., Inter, Roboto).

Vibe: Healthy, modern, approachable, energetic.

Buttons and interactive elements should have hover/focus effects.

Acceptance Criteria

✅ Website loads at / with interactive landing logo section.

✅ QR section shows QR placeholder and “Open Survey” link → Google Form.

✅ Subscribe section accepts only valid emails; on success shows confirmation.

✅ Contact form accepts input; on submit calls mock /api/sendMail.

✅ Styling matches functional food theme; responsive on mobile.

✅ Code runs with npm run dev (or yarn dev).

Tasks for Cursor Agent

Scaffold project with Next.js + TypeScript + Tailwind.

Implement /pages/index.tsx with the four sections in order.

Add interactive smooth-scroll “Discover More” button in Hero.

Add placeholder images (logo-placeholder.png, qr-placeholder.png).

Implement mock API routes: /api/subscribe and /api/sendMail.

Add email validation logic in Subscribe section.

Add form validation and success/error state in Contact Us.

Apply color theme consistently.