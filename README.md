# SociVeda 🌿

> **India's Premier Platform for Online Homeopathic Healthcare**

SociVeda connects patients across India with verified, experienced homeopathic doctors through secure video and audio consultations. Every treatment is personalized, every prescription is digital, and care is delivered entirely from the comfort of home.

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home** | Hero, stats, features, how it works, testimonials, FAQ |
| `/services` | **Treatment** | Full list of homeopathic treatments offered |
| `/doctors` | **Find Doctors** | Browse verified homeopathic specialist profiles |
| `/blog` | **Blog** | Health & wellness articles from practitioners |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Database** | Supabase (PostgreSQL + JSONB) |
| **Animations** | GSAP |
| **Icons** | Lucide React |
| **Fonts** | Plus Jakarta Sans, Inter (Google Fonts) |
| **Deployment** | Vercel (recommended) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase project

### Installation

```bash
git clone https://github.com/harsharyann/SociVeda.git
cd SociVeda
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.tsx        ← Home Page
│   ├── services/       ← Treatment Page
│   ├── doctors/        ← Doctors Page
│   └── blog/           ← Blog Page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
└── lib/
    └── supabase.ts
```

---

## 🌱 Made with ❤️ for Natural Healing, across India.

> Sociveda consultations are not a substitute for emergency medical care. In a medical emergency, contact your nearest hospital immediately.
