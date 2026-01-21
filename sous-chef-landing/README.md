# Sous Chef Landing Page

A modern, responsive landing page for the Sous Chef Smart Recipe Discovery App, built to collect emails during the development phase.

## Features

- 📧 **Email Collection**: Three strategically placed signup forms (Hero, Middle, Footer)
- 🎨 **Modern Design**: Custom Tailwind CSS theme with warm, food-themed colors
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Vite and React
- 🗄️ **Supabase Backend**: Secure email storage with PostgreSQL
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🔔 **Toast Notifications**: User-friendly success/error messages

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS 3
- **Backend**: Supabase (PostgreSQL)
- **UI Components**: Custom components with react-hot-toast

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- Supabase account (free tier works)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`
   - Update the values with your Supabase credentials

3. **Set up Supabase database**:
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the schema from the setup section below

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**: Navigate to [http://localhost:5173](http://localhost:5173)

## Supabase Database Setup

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE waitlist_signups (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT,
  platform_interest TEXT,
  metadata JSONB
);

CREATE INDEX idx_email ON waitlist_signups(email);
CREATE INDEX idx_created_at ON waitlist_signups(created_at DESC);

ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous signups" ON waitlist_signups
  FOR INSERT WITH CHECK (true);

CREATE POLICY "No public reads" ON waitlist_signups
  FOR SELECT USING (false);
```

## Deployment to Render

1. Push to GitHub
2. Create new Static Site on [render.com](https://render.com)
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`
5. Add environment variables in Render dashboard

## Project Structure

```
src/
├── components/
│   ├── common/       # Button, Input
│   ├── sections/     # Hero, Features, HowItWorks, Screenshots, FAQ, Footer
│   └── layout/       # Header, Layout
├── hooks/            # useEmailSubmit
├── lib/              # supabase
├── utils/            # validation, constants
└── styles/           # globals.css
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

Built with ❤️ for home cooks everywhere
