# Oarabile Trading Enterprise (Pty) Ltd — Website

Branded by WebDevPro using Ultra Max 6. Responsive, five-page Vite/React/TypeScript website.

## Pages
Home · About · Services · Projects (`/gallery`) · Contact

## Features
- Three-slide animated hero with typewriter headline and auto-play/pause controls
- Flip-effect service cards, scroll reveals, slide/fade/scale animations and reduced-motion support
- Mobile navigation and bottom quick links
- Business information extracted from the provided October 2026 company profile
- WhatsApp contact assistant and prefilled enquiry form (visitors must press Send themselves)
- Installable progressive web app with client-specific icon and offline notice
- Social metadata, robots and sitemap, SPA routing for Vercel

## Development
```
npm ci
npm run build:release
npm run dev
```

## Branding and imagery
The logo and derived app icons are from the supplied Oarabile logo image.
Project references and titles derive from the provided Business Profile.pdf.
Imagery is illustrative royalty-free construction photography hosted at Pexels, **not** photographs of Oarabile's completed projects. Sources and credits are recorded in `public/brand/photo-sources.md`. For permanently hosted/local assets, download the licensed images with proper terms and replace remote URLs in `site.config.json` and CSS.

## Important
The contact enquiry opens WhatsApp rather than storing or sending anything on a server. The site does not claim active Google Business, ads, email mailbox, or backend database. Verify the exact office location, CIDB/COIDA status and custom domain readiness independently before commercial launch. The source company profile includes banking details, which are intentionally not displayed on the site.
