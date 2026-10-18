const express = require('express');
const path = require('path');
const compression = require('compression');

const biz = require('./data/business');
const img = require('./data/images');
const packages = require('./data/packages');
const { services, bySlug: serviceBySlug, list } = require('./data/services');
const { towns, bySlug: townBySlug, nearby, grouped, regions } = require('./data/towns');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true);
app.use(compression());
app.use(express.urlencoded({ extended: false, limit: '50kb' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

// Shared template locals
app.use((req, res, next) => {
  res.locals.biz = biz;
  res.locals.img = img;
  res.locals.services = services;
  res.locals.townGroups = grouped();
  res.locals.path = req.path;
  res.locals.canonical = biz.url + (req.path === '/' ? '/' : req.path.replace(/\/$/, ''));
  res.locals.list = list;
  next();
});

// Strip trailing slashes (one canonical URL per page)
app.use((req, res, next) => {
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const q = req.url.slice(req.path.length);
    return res.redirect(301, req.path.slice(0, -1) + q);
  }
  next();
});

// 301s from the old Squarespace URLs
const legacy = {
  '/services-1': '/services',
  '/services-store': '/services',
  '/marine': '/services/marine-services',
  '/about-1': '/services/marine-services',
  '/store': '/packages',
  '/garbs-1': '/',
  '/cart': '/packages'
};
Object.entries(legacy).forEach(([from, to]) => app.get(from, (req, res) => res.redirect(301, to)));
app.get('/store/p/:pkg', (req, res) => res.redirect(301, '/packages'));

// ---------- Pages ----------
app.get('/', (req, res) =>
  res.render('home', {
    title: `${biz.name} | Cape Cod Property Management & Estate Care`,
    description: 'Property management, home watch, rental management, snow removal, heavy equipment and marine services across Cape Cod, Nantucket and Martha’s Vineyard. The Most Connected on Cape.',
    packages
  })
);

app.get('/about', (req, res) =>
  res.render('about', {
    title: `About ${biz.name} | The Most Connected on Cape`,
    description: 'Mr. Cape Codder was built by lifelong Cape Cod residents to give property owners someone local they can trust. Meet Jeremy Wahlstrom.'
  })
);

app.get('/services', (req, res) =>
  res.render('services', {
    title: `Services | ${biz.name} — Cape Cod & the Islands`,
    description: 'Estate & property management, home watch, rental management, seasonal opening and closing, snow removal, handyman, project management, concierge, heavy equipment and marine services.'
  })
);

app.get('/services/:service', (req, res, next) => {
  const s = serviceBySlug[req.params.service];
  if (!s) return next();
  res.render('service', {
    title: `${s.name} on Cape Cod & the Islands | ${biz.name}`,
    description: `${s.summary} Serving all of Cape Cod, Nantucket and Martha’s Vineyard.`,
    s,
    towns
  });
});

app.get('/services/:service/:town', (req, res, next) => {
  const s = serviceBySlug[req.params.service];
  const t = townBySlug[req.params.town];
  if (!s || !t) return next();
  const fill = (str) => str.replace(/\{town\}/g, t.name);
  res.render('service-town', {
    title: `${s.name} in ${t.name}, MA | ${biz.name}`,
    description: `${s.short} in ${t.name}, MA — serving ${list(t.villages, 3)}. ${s.summary}`,
    s,
    t,
    faqs: s.faqs.map((f) => ({ q: fill(f.q), a: fill(f.a) })),
    nearbyTowns: nearby(t, 6),
    otherServices: services.filter((x) => x.slug !== s.slug)
  });
});

app.get('/service-areas', (req, res) =>
  res.render('areas', {
    title: `Service Areas | ${biz.name} — Cape Cod, Nantucket & Martha’s Vineyard`,
    description: 'We serve every town on Cape Cod plus Nantucket and Martha’s Vineyard. Find property management and estate care in your town.'
  })
);

app.get('/service-areas/:town', (req, res, next) => {
  const t = townBySlug[req.params.town];
  if (!t) return next();
  res.render('town', {
    title: `Property Management in ${t.name}, MA | ${biz.name}`,
    description: `Property management, home watch, rental management, snow removal and more in ${t.name}, MA — serving ${list(t.villages, 3)}.`,
    t,
    nearbyTowns: nearby(t, 6)
  });
});

app.get('/packages', (req, res) =>
  res.render('packages', {
    title: `Packages & Pricing | ${biz.name}`,
    description: 'Winter Ready, Nor’easter and The Commodore — property care packages for Cape Cod and Island homeowners.',
    packages
  })
);

app.get('/contact', (req, res) =>
  res.render('contact', {
    title: `Contact & Book a Walk-Through | ${biz.name}`,
    description: 'Book a walk-through of your Cape Cod or Island property. We reach out within 48 hours.',
    prefill: {
      service: String(req.query.service || ''),
      town: String(req.query.town || ''),
      pkg: String(req.query.package || '')
    },
    packages,
    towns,
    sent: req.query.sent === '1',
    error: req.query.error === '1'
  })
);

// Lead form → optional webhook (e.g. a GHL inbound webhook). Set LEAD_WEBHOOK_URL in Railway.
app.post('/contact', async (req, res) => {
  const b = req.body || {};
  if (b.company_website) return res.redirect(303, '/contact?sent=1'); // honeypot
  const lead = {
    name: (b.name || '').trim().slice(0, 120),
    phone: (b.phone || '').trim().slice(0, 40),
    email: (b.email || '').trim().slice(0, 160),
    town: (b.town || '').slice(0, 80),
    service: (b.service || '').slice(0, 80),
    package: (b.package || '').slice(0, 80),
    message: (b.message || '').trim().slice(0, 3000),
    source: 'mrcapecodder.com',
    submitted_at: new Date().toISOString()
  };
  if (!lead.name || (!lead.phone && !lead.email)) return res.redirect(303, '/contact?error=1');
  console.log('[lead]', JSON.stringify(lead));
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      });
    } catch (e) {
      console.error('[lead] webhook failed', e.message);
    }
  }
  res.redirect(303, '/contact?sent=1');
});

// ---------- SEO ----------
app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\n\nSitemap: ${biz.url}/sitemap.xml\n`);
});

const allUrls = () => {
  const urls = ['/', '/about', '/services', '/service-areas', '/packages', '/contact'];
  services.forEach((s) => urls.push(s.url));
  towns.forEach((t) => urls.push(`/service-areas/${t.slug}`));
  services.forEach((s) => towns.forEach((t) => urls.push(`${s.url}/${t.slug}`)));
  return urls;
};

app.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const body = allUrls()
    .map((u) => `  <url><loc>${biz.url}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n');
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
});

app.get('/healthz', (req, res) => res.send('ok'));

// 404
app.use((req, res) => res.status(404).render('404', { title: `Page not found | ${biz.name}`, description: '' }));

if (require.main === module) {
  app.listen(PORT, () => console.log(`Mr. Cape Codder site running on :${PORT}`));
}
module.exports = { app, allUrls };
