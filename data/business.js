// Core business info — edit here and it updates everywhere on the site.
module.exports = {
  name: 'Mr. Cape Codder',
  legalName: 'Mr. Cape Codder LLC',
  tagline: 'Property Management & Estate Care',
  slogan: 'The Most Connected on Cape',
  owner: 'Jeremy Wahlstrom',
  phone: '(239) 822-6851',
  phoneHref: '+12398226851',
  email: 'Mrcapecodder@gmail.com',
  serviceArea: 'Cape Cod, Nantucket, Martha’s Vineyard and surrounding areas',
  // Set SITE_URL in Railway once the domain is pointed (used for canonical tags + sitemap)
  url: (process.env.SITE_URL || 'https://www.mrcapecodder.com').replace(/\/$/, ''),
  policies: [
    'Groceries are billed at receipt cost plus time.',
    'Extra handyman hours are $100 an hour.',
    'Heavy equipment work (land clearing, grading, stone driveways, drainage) is quoted by the job.',
    'We serve all of Cape Cod, Nantucket and Martha’s Vineyard. Trips off Cape and to the islands carry a $75 trip fee plus ferry cost.'
  ]
};
