# Mr. Cape Codder — website

Node/Express + EJS rebuild of mrcapecodder.com. Deploys on Railway with no config (`npm start`, listens on `PORT`).

## Pages

| Route | What |
|---|---|
| `/` | Home |
| `/services` | All services |
| `/services/:service` | 10 service pages |
| `/services/:service/:town` | Service × town pages (10 services × 22 towns = 220) |
| `/service-areas` and `/service-areas/:town` | Town hubs (22) |
| `/packages` | Winter Ready, Nor’easter, The Commodore |
| `/about`, `/contact` | About, walk-through request form |
| `/sitemap.xml`, `/robots.txt` | Generated automatically |

Old Squarespace URLs (`/services-1`, `/marine`, `/store`, `/store/p/...`, `/about-1`, `/garbs-1`) 301-redirect to the new pages.

## Editing

Everything lives in `/data`:

- `business.js` — name, phone, email, owner, policies
- `services.js` — service copy, included items, FAQs, and the town-specific paragraphs
- `towns.js` — towns, villages, waterways, local blurbs (add a town here and all its pages appear)
- `packages.js` — package pricing and inclusions (Keeper and Seacrest still need details)
- `images.js` — every image URL on the site

## Railway environment variables

- `SITE_URL` — e.g. `https://www.mrcapecodder.com` (canonical tags + sitemap)
- `LEAD_WEBHOOK_URL` — optional. Contact form submissions are POSTed here as JSON (e.g. a GHL inbound webhook). Leads are also written to the Railway logs.

## Images — important

Photos from the current site are hotlinked from Squarespace’s CDN. **Before cancelling Squarespace**, download them into `public/images/` and update `data/images.js`, or they will break. The rest are Unsplash stock — swap for real job photos as they come in.
