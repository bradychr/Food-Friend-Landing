# Sous Chef Landing Page - Setup Guide

## Quick Start

Your landing page is ready! The development server is currently running at:
**http://localhost:5173**

## What's Been Built

### ✅ Complete Landing Page
- **Hero Section**: Main value proposition with email signup form
- **Features Section**: 6 key features in responsive grid
- **How It Works**: 3-step process visualization
- **Screenshots Section**: Placeholder mockups for app previews
- **FAQ Section**: Accordion-style Q&A
- **Footer**: Final CTA with email form, links, and social media placeholders

### ✅ Technical Implementation
- React 18 + Vite for fast development
- Tailwind CSS with custom food-themed design (orange/green)
- Supabase integration for email collection
- react-hot-toast for notifications
- Fully responsive design (mobile-first)
- Accessible (WCAG 2.1 AA compliant)

## Next Steps

### 1. Set Up Supabase (Required for Email Collection)

The forms won't work until you configure Supabase:

1. **Create Supabase Account**:
   - Go to https://supabase.com
   - Sign up for a free account
   - Create a new project (choose a region close to you)

2. **Run Database Schema**:
   - Go to your Supabase dashboard
   - Click "SQL Editor" in the sidebar
   - Click "New Query"
   - Copy and paste this SQL:

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

   - Click "Run" to execute

3. **Get Your API Credentials**:
   - Go to "Settings" → "API"
   - Copy the "Project URL"
   - Copy the "anon public" key

4. **Update Environment Variables**:
   - Open `sous-chef-landing/.env.local`
   - Replace the placeholder values:
   ```
   VITE_SUPABASE_URL=https://your-actual-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
   ```
   - Save the file

5. **Restart Dev Server**:
   - Stop the current server (Ctrl+C in terminal)
   - Run `npm run dev` again
   - Test the email form - it should now save to Supabase!

### 2. View Collected Emails

To see the emails people submit:

1. Go to Supabase dashboard
2. Click "Table Editor" in sidebar
3. Select "waitlist_signups" table
4. You'll see all submitted emails with timestamps and sources

Or run this query in SQL Editor:
```sql
SELECT email, source, created_at
FROM waitlist_signups
ORDER BY created_at DESC;
```

### 3. Deploy to Render

When you're ready to go live:

1. **Push to GitHub**:
   ```bash
   cd sous-chef-landing
   git init
   git add .
   git commit -m "Initial commit: Sous Chef landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/sous-chef-landing.git
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to https://render.com and sign up
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Render will auto-detect settings from `render.yaml`
   - Add environment variables:
     - `VITE_SUPABASE_URL`: (paste from Supabase)
     - `VITE_SUPABASE_ANON_KEY`: (paste from Supabase)
   - Click "Create Static Site"
   - Wait 2-3 minutes for deployment
   - Your site will be live at `https://your-site-name.onrender.com`

3. **Custom Domain** (Optional):
   - In Render dashboard, go to your site
   - Click "Settings" → "Custom Domain"
   - Follow instructions to configure DNS

## Customization Ideas

### Replace Placeholder Images
- Add real app mockups to `public/mockups/`
- Update screenshot placeholders in `src/components/sections/Screenshots.jsx`

### Update Content
- Change headline in `src/components/sections/Hero.jsx`
- Modify features in `src/components/sections/Features.jsx`
- Update FAQs in `src/components/sections/FAQ.jsx`
- Change social links in `src/components/sections/Footer.jsx`

### Adjust Colors
- Edit `tailwind.config.js` to change primary/secondary colors
- Current theme: Orange (primary) + Green (secondary)

### Add Analytics (Future)
- Google Analytics 4
- Hotjar for heatmaps
- Facebook Pixel for ads

### Add SEO (Future)
- Meta tags in `index.html`
- Open Graph tags for social sharing
- Twitter Card tags

## File Locations

### Key Files to Know
- **Landing page sections**: `sous-chef-landing/src/components/sections/`
- **Email form logic**: `sous-chef-landing/src/hooks/useEmailSubmit.js`
- **Supabase config**: `sous-chef-landing/src/lib/supabase.js`
- **Environment variables**: `sous-chef-landing/.env.local`
- **Design system**: `sous-chef-landing/tailwind.config.js`

### Important Commands
```bash
# Start development server
cd sous-chef-landing && npm run dev

# Build for production
cd sous-chef-landing && npm run build

# Preview production build
cd sous-chef-landing && npm run preview
```

## Troubleshooting

### Forms not working?
1. Check `.env.local` has correct Supabase credentials
2. Verify database table exists in Supabase
3. Check browser console for errors (F12)

### Styles broken?
1. Restart dev server
2. Clear browser cache (Ctrl+Shift+R)
3. Check `tailwind.config.js` exists

### Can't access localhost:5173?
1. Check if dev server is running
2. Try different port: `npm run dev -- --port 3000`
3. Check firewall settings

## Success Metrics to Track

### In Supabase Dashboard:
1. Total signups
2. Signups by source (hero/middle/footer)
3. Daily signup rate
4. Most active signup times

### Future Analytics (once added):
- Page views
- Bounce rate
- Time on page
- Conversion rate (visitors → signups)

## Support

If you encounter issues:
1. Check this guide first
2. Review README.md in sous-chef-landing/
3. Check browser console for errors
4. Verify all dependencies installed: `npm install`

---

**Current Status**: ✅ Landing page built and running locally
**Next Action**: Set up Supabase to enable email collection
**After That**: Deploy to Render to make it live

Good luck with your launch! 🚀
