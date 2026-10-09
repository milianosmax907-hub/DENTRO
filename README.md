# DENTRO — Practical Dental Training Platform (Jordan)

> **"Learn the skill. Master the craft."**
> **"تعلّم المهارة. أتقن الصنعة."**

DENTRO is a specialized practical dental training platform founded in Amman, Jordan. It is tailored for dental students and fresh graduates across all Jordanian universities (University of Jordan, Jordan University of Science and Technology, Mutah University, Yarmouk University, and international graduates).

---

## 1. Brand & Design System

- **Primary Color:** Dark Green (`#123B36`)
- **Background:** Ivory (`#F8F7F2`)
- **Accent:** Pale Mint (`#D5E8DF`)
- **Neutral Palette:** `#1C2D2A` (text), `#405852` (muted text), `#E2E8E4` (subtle border)
- **Typography:**
  - **Arabic (Default):** *Readex Pro* / *IBM Plex Sans Arabic*
  - **English:** *Plus Jakarta Sans*
- **Layout Direction:** Full bidirectional support:
  - Arabic: Right-to-Left (`dir="rtl"`)
  - English: Left-to-Right (`dir="ltr"`)

---

## 2. Platform Architecture & Pages

1. **Home (`/`)**: Hero simulation showcase, 4-KPI strip, why practical training matters, training approach (20% theory, 20% live demo, 60% hands-on drills), featured courses, and registration CTA.
2. **Courses (`/courses`)**: Reusable course cards with category filters, registration status, search bar, and direct details/booking triggers.
3. **Course Details (`/course-details`)**: Deep dive into the flagship **Tooth Preparation — تحضير الأسنان** course with learning objectives, clinical skills, target audience, prerequisites, transparent TBA placeholders, and specific FAQs.
4. **Schedule (`/schedule`)**: Academic-aligned timeline for dental faculties across Jordan, transparent status notices.
5. **Trainers (`/trainers`)**: Rigorous selection standards (Jordanian/Arab board certified specialists) and transparent announcement policies.
6. **About Us (`/about`)**: Origin story, mission, vision, core values, and training lab venue in Amman.
7. **FAQ (`/faq`)**: Interactive accordion covering eligibility, universities, course status, and booking review procedures.
8. **Contact Us (`/contact`)**: Amman coordination desk, phone/WhatsApp, email, and validated direct inquiry form.
9. **Booking (`/booking`)**: Validated multi-step candidate registration with real-time feedback, duplicate submission protection, and post-submission review confirmation.

---

## 3. Flagship Course: Tooth Preparation (تحضير الأسنان)

- **Initial Status:** `Coming Soon` (`قريباً`).
- **Transparency Policy:** As instructed, trainer identities, exact dates, venue addresses, and fees are marked with explicit "سيتم الإعلان قريبًا / To be announced soon" notices until official accreditation and venue scheduling are finalized.

---

## 4. Booking System & Production Readiness

- **Current Prototype State:**
  - Operates with an active **Prototype Demo Mode**.
  - Submissions are validated client-side (Jordan phone formats `079XXXXXXX`, email, university selection, academic level).
  - Data is saved to the browser's persistent `localStorage` (`dentro_demo_bookings_v1`).
  - Unique booking tracking codes are generated (e.g. `DEN-2026-4821`).
  - Submissions are clearly designated as **"Pending Review"** (`submitted_for_review`), never claiming a confirmed seat before review.
  
- **Requirements for Live Production Deployment:**
  1. **Relational / Document Database:** Connect Firestore or PostgreSQL (Cloud SQL) to store candidate records with timestamps and review statuses.
  2. **Notification Pipeline:** Integrate Twilio or WhatsApp Business Cloud API to trigger automated WhatsApp confirmation messages to students upon registration.
  3. **Admin Dashboard:** Role-based access control (RBAC) panel for DENTRO coordinators to manage seat quotas, verify student university IDs, and issue acceptances.
  4. **Payment Gateway Integration:** In Jordan, integrate licensed payment service providers (e.g., CliQ, Jordan Kuwait Bank payment gateway, HyperPay, or STS PayOne) once seats are officially confirmed.

---

## 5. How to Run Locally

### Prerequisites
- Node.js (v18+ or v20+)
- npm or yarn

### Installation
```bash
# Clone repository
cd dentro-dental-platform

# Install dependencies
npm install

# Run Vite development server on port 3000
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 6. License
© 2026 DENTRO. All rights reserved. Amman, Jordan.
