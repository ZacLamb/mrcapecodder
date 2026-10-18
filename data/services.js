// Services. Each one gets a main page (/services/:slug) and a page for every town.
// Town pages are built from `localAngle(town)` + `faqs` so each one carries
// town-specific content instead of a copy-paste template.
const img = require('./images');

const list = (arr, max = 4) => {
  const a = arr.slice(0, max);
  if (a.length <= 1) return a.join('');
  return `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`;
};
const islandNote = (t) =>
  t.island
    ? ` Because ${t.name} is on ${t.region === 'nantucket' ? 'the island' : 'Martha’s Vineyard'}, visits carry our standard $75 island trip fee plus ferry cost — we batch work so you are not paying that more than you need to.`
    : '';

const services = [
  {
    slug: 'property-management',
    name: 'Estate & Property Management',
    short: 'Property Management',
    icon: 'home',
    image: img.shingleHouse,
    hero: img.bayHouse,
    summary: 'Full-service oversight for homes, estates and seasonal properties — we act as your local representative on Cape.',
    intro: 'Mr. Cape Codder provides estate and property management for owners who need dependable oversight of their Cape Cod property. Our goal is simple: keep every home, estate or seasonal property secure, well maintained and ready to use at any time — and protect its value while you are away.',
    sections: [
      { title: 'Property Oversight & Inspections', items: ['Scheduled property inspections', 'Storm and weather damage checks', 'Security and safety verification', 'Preventative maintenance monitoring'] },
      { title: 'Maintenance Coordination', items: ['Contractor scheduling and supervision', 'Routine home maintenance', 'Landscaping and property care', 'Seasonal property preparation'] },
      { title: 'Project & Contractor Management', items: ['Home improvement project coordination', 'Construction and renovation oversight', 'Vendor and contractor selection', 'Quality control and progress monitoring'] },
      { title: 'Seasonal Property Services', items: ['Spring opening and fall closing', 'Winter storm preparation', 'Snow removal and property access', 'Utility and system monitoring'] }
    ],
    localAngle: (t) => [
      `Owning ${t.homes} in ${t.name} means dealing with salt air, wind and seasons that change fast. Most of our ${t.name} clients do not live here year-round, so they need one local person who knows the property, holds the keys and makes the calls.`,
      `We cover ${list(t.villages)} and properties along ${list(t.water, 3)}. ${t.blurb}${islandNote(t)}`
    ],
    faqs: [
      { q: 'What does property management include in {town}?', a: 'Scheduled inspections, storm checks, contractor scheduling and supervision, seasonal opening and closing, and a single point of contact for anything the house needs. You choose the level of service; we handle the rest.' },
      { q: 'Do I need to live on Cape to use your service?', a: 'No — most of our clients live off Cape for at least part of the year. We send photo reports and text updates so you always know the condition of your {town} property.' },
      { q: 'Who actually does the work?', a: 'Jeremy Wahlstrom oversees every property personally and brings in trusted local tradespeople from our network for anything specialized. That network is why we are known as “The Most Connected on Cape.”' }
    ]
  },
  {
    slug: 'home-watch',
    name: 'Home Watch & Property Inspections',
    short: 'Home Watch',
    icon: 'eye',
    image: img.cedarDoor,
    hero: img.whiteHouse,
    summary: 'Scheduled walk-throughs of your empty home with photos — leaks, heat, pests and storm damage caught early.',
    intro: 'An empty house on Cape Cod can go weeks before anyone notices a failed furnace, a slow leak or a window left cracked in a storm. Our home watch visits put eyes on your property on a regular schedule and after every major weather event, with photos sent straight to you.',
    sections: [
      { title: 'Every Visit', items: ['Interior and exterior walk-through', 'Heat, AC and thermostat check', 'Look for leaks, moisture and mold', 'Doors, windows and locks verified'] },
      { title: 'Systems & Safety', items: ['Water heater, sump and well pump check', 'Smoke and CO detector check', 'Alarm and camera verification', 'Breaker panel and utilities monitored'] },
      { title: 'After Storms', items: ['Post-storm inspection with photos', 'Roof, siding and tree damage check', 'Ice dam and gutter monitoring', 'Emergency board-up and tarp coordination'] },
      { title: 'Reporting', items: ['Photo report after every visit', 'Text updates before and after storms', 'Fix-it list with recommended next steps', 'Direct line to Jeremy'] }
    ],
    localAngle: (t) => [
      `Homes in ${t.name} — especially ${t.homes} — can sit empty for long stretches between October and May. That is when small problems get expensive: a frozen pipe, a failed sump or a shingle lifted by a ${t.region === 'outer' || t.region === 'lower' ? 'Atlantic' : 'coastal'} storm.`,
      `We run scheduled visits across ${list(t.villages)}, and we check every client property after major storms roll through ${list(t.water, 2)}. ${t.island ? 'On the island, a local set of eyes is the difference between a quick fix and a ruined season.' : 'You get photos the same day, so you are never guessing.'}${islandNote(t)}`
    ],
    faqs: [
      { q: 'How often should my {town} home be checked?', a: 'Weekly is standard for an empty house in winter, with an extra visit after every major storm. Some owners step down to every other week in shoulder season. We will recommend a schedule at the walk-through.' },
      { q: 'What happens if you find a problem?', a: 'You get photos and a recommendation right away. Small fixes can be handled with included handyman hours; bigger jobs go to the right tradesperson from our network, with your approval.' },
      { q: 'Do you check after storms?', a: 'Yes. Post-storm checks with photos are part of our winter packages, and we send text updates before and after each storm.' }
    ]
  },
  {
    slug: 'rental-management',
    name: 'Rental & Airbnb Management',
    short: 'Rental Management',
    icon: 'key',
    image: img.bedroom,
    hero: img.beachHouses,
    summary: 'Short-term and seasonal rental management — guests, turnovers, pricing and protection handled locally.',
    intro: 'For owners who rent seasonally or run short-term rentals, Mr. Cape Codder manages the operational side so you get the income without the day-to-day work of hosting. We handle guests, cleanings, calendars and problems — locally and in person.',
    sections: [
      { title: 'Guest Communication', items: ['Inquiry responses and booking coordination', 'Guest support before and during stays', 'Check-in and check-out assistance'] },
      { title: 'Property Preparation', items: ['Cleaning and turnover coordination', 'Linen and supply management', 'Property readiness inspections'] },
      { title: 'Rental Operations', items: ['Pricing and availability management', 'Calendar scheduling', 'Listing coordination'] },
      { title: 'Property Protection', items: ['Damage reporting and resolution', 'Inspections between guests', 'Maintenance coordination when needed'] }
    ],
    localAngle: (t) => [
      `${t.name} rentals live and die by the summer calendar. Same-day turnovers, a broken AC on a 90-degree Saturday or a guest locked out at midnight all need someone local who can actually show up.`,
      `We manage ${t.homes} across ${list(t.villages)}, coordinating cleaners, linens and maintenance so each stay starts on time and your reviews stay strong.${islandNote(t)}`
    ],
    faqs: [
      { q: 'Do you manage Airbnb and VRBO listings in {town}?', a: 'Yes. We coordinate listings, calendars and pricing, handle guest communication, and run every turnover with an inspection between guests.' },
      { q: 'Who handles cleaning and linens?', a: 'We schedule and supervise turnover cleaning, manage linens and supplies, and do a readiness check before each arrival.' },
      { q: 'What if a guest damages the property?', a: 'We document it with photos, report it to you and the platform, and coordinate repairs through our contractor network.' }
    ]
  },
  {
    slug: 'seasonal-opening-closing',
    name: 'Seasonal Opening, Closing & Winterization',
    short: 'Opening & Closing',
    icon: 'leaf',
    image: img.dormers,
    hero: img.picketFence,
    summary: 'Spring openings and fall closings done right — water, heat, gutters, generators and storm prep.',
    intro: 'Opening and closing a Cape house is a checklist with a lot of ways to go wrong. We handle it start to finish — shutting off outdoor water, checking heat, clearing gutters and testing generators in the fall, then getting everything running and guest-ready in the spring.',
    sections: [
      { title: 'Fall Closing & Winter Prep', items: ['Pipes and heat checked; outdoor water shut off', 'Gutters and leaves cleared', 'Generator tested and storm prep done', 'Outdoor furniture and seasonal items stored', 'Your winter plan in writing'] },
      { title: 'Spring Opening', items: ['Water turned on and checked for leaks', 'HVAC started and filters changed', 'Outdoor furniture and grills set out', 'Yard, deck and walkway clean-up'] },
      { title: 'Arrival Ready', items: ['Beds made with fresh linens', 'Fridge stocked to your list', 'Heat or AC set before you arrive', 'Housekeeping checked'] }
    ],
    localAngle: (t) => [
      `In ${t.name}, the window between the last warm weekend and the first hard freeze can be short. Closing ${t.homes} on time — water off, heat confirmed, gutters clear — is what keeps a winter from turning into an insurance claim.`,
      `Our Winter Ready package is built for exactly this: fall prep in the first weeks, then snow and storm coverage December through March for properties in ${list(t.villages)}.${islandNote(t)}`
    ],
    faqs: [
      { q: 'When should I schedule my {town} closing?', a: 'Most owners close between mid-October and mid-November. We book closings in order, so earlier is better — and we can run your opening in spring as part of the same plan.' },
      { q: 'What is included in Winter Ready?', a: 'Fall prep (pipes, heat, outdoor water, gutters, leaves, generator test, storm prep and a written winter plan), plus up to 8 snow visits, post-storm checks after up to 4 major storms, and text updates. $3,300 for the season or 5 payments of $720.' },
      { q: 'Can you get the house ready before I arrive?', a: 'Yes — heat or AC on, beds made, linens fresh and the fridge stocked to your list. Groceries are billed at receipt cost plus time.' }
    ]
  },
  {
    slug: 'snow-removal',
    name: 'Snow Removal & Storm Response',
    short: 'Snow Removal',
    icon: 'snow',
    image: img.snowHouse,
    hero: img.snowCabin,
    summary: 'Driveways and walks shoveled, blown and salted — plus ice dam watch and post-storm checks.',
    intro: 'When a nor’easter hits the Cape, you want your driveway cleared, your walks safe and someone checking the house the moment the storm passes. We shovel, snow-blow and salt — and keep watch on roofs and ice dams so you are not surprised in spring.',
    sections: [
      { title: 'Snow Clearing', items: ['Driveway and walk shoveling', 'Snow blowing', 'Salting and sanding', 'Clearing access to doors, oil fills and meters'] },
      { title: 'Storm Response', items: ['Post-storm property check with photos', 'Ice dam and roof snow watch', 'Downed limb and debris cleanup', 'Specialist called in when needed'] },
      { title: 'Heavy Winter Work', items: ['Equipment-assisted snow removal', 'Large driveways and estate properties', 'Storm cleanup with heavy machinery'] }
    ],
    localAngle: (t) => [
      `${t.name} sees its share of nor’easters, and ${t.region === 'outer' || t.region === 'lower' || t.island ? 'out here wind-driven snow and coastal flooding can hit hard' : 'heavy wet snow and ice can pile up fast on driveways and roofs'}. An unplowed driveway can also mean no oil delivery and no access for emergency repairs.`,
      `Our Nor’easter and Winter Ready packages include up to 8 snow visits a season across ${list(t.villages)}, with additional visits at $175 each. Salt, sand and fuel are included.${islandNote(t)}`
    ],
    faqs: [
      { q: 'Do you offer seasonal snow contracts in {town}?', a: 'Yes. Our winter packages include up to 8 snow visits per season (shoveling, snow blowing and salting of driveway and walks). Extra visits are $175 each.' },
      { q: 'Do you watch for ice dams?', a: 'Yes — ice dam and roof snow watch is part of the Nor’easter package, and we bring in a specialist if a roof needs to be cleared.' },
      { q: 'Will you check the house after a storm?', a: 'We do a post-storm check with photos and send you a text update before and after each storm.' }
    ]
  },
  {
    slug: 'handyman',
    name: 'Handyman & Home Maintenance',
    short: 'Handyman',
    icon: 'wrench',
    image: img.tools,
    hero: img.carpentry,
    summary: 'The small fixes that keep a house in shape — handled by someone who already knows your property.',
    intro: 'Most home problems start small: a sticking door, a loose railing, a dripping faucet, a light that will not come on. Our handyman service fixes the things our inspections find before they become bigger repairs. Handyman hours are built into our monthly packages, and extra hours are $100 an hour.',
    sections: [
      { title: 'Repairs', items: ['Doors, locks, screens and hardware', 'Trim, siding and shingle repair', 'Deck boards and railings', 'Minor plumbing and fixture swaps'] },
      { title: 'Upkeep', items: ['Filter and battery changes', 'Caulking and weatherproofing', 'Gutter cleaning', 'Furniture assembly and moving'] },
      { title: 'How It Works', items: ['Included hours in monthly packages', 'Extra hours at $100/hour', 'Licensed trades brought in for bigger jobs', 'Photos before and after'] }
    ],
    localAngle: (t) => [
      `Salt air is hard on houses in ${t.name}. Hardware corrodes, cedar shingles cup and split, decks weather fast and screens tear in the wind. Staying ahead of it is cheaper than catching up.`,
      `Because we already inspect ${t.homes} across ${list(t.villages)}, we know what each house needs before we arrive — so your handyman hours go to fixing, not figuring out.${islandNote(t)}`
    ],
    faqs: [
      { q: 'How much does handyman work cost in {town}?', a: 'Handyman hours are included in our monthly packages (3 hours a month with Nor’easter, 9 with The Commodore). Extra hours are $100 an hour.' },
      { q: 'What if the job needs a licensed trade?', a: 'We bring in the right licensed electrician, plumber, roofer or carpenter from our network and supervise the work for you.' },
      { q: 'Can you fix things your inspections find?', a: 'That is exactly what the included hours are for — fixing what the weekly checks find, before it becomes a bigger repair.' }
    ]
  },
  {
    slug: 'contractor-management',
    name: 'Contractor & Project Management',
    short: 'Project Management',
    icon: 'clipboard',
    image: img.roofWork,
    hero: img.lighthouseHouse,
    summary: 'Renovations, repairs and builds coordinated and supervised by someone on site — not someone on the phone.',
    intro: 'Running a renovation from out of state is hard. Contractors miss dates, problems go unreported and quality slips when nobody is watching. We act as your on-site representative — choosing the right trades from our network, scheduling them, checking progress and reporting back to you.',
    sections: [
      { title: 'Planning', items: ['Scope and walk-through with you', 'Vendor and contractor selection', 'Quotes gathered and compared', 'Permitting coordination with your contractor'] },
      { title: 'On-Site Oversight', items: ['Scheduling and site access', 'Progress checks with photos', 'Quality control', 'Issues flagged before they become change orders'] },
      { title: 'Project Types', items: ['Renovations and remodels', 'Roofing, siding and windows', 'Decks, docks and stonework', 'Storm damage repairs'] }
    ],
    localAngle: (t) => [
      `Good contractors in ${t.name} are booked months out, and the best ones work with people they know. That is where our network comes in — we know who does what well, and who will actually show up.`,
      `We oversee projects on ${t.homes} across ${list(t.villages)}, so you can approve decisions from wherever you are and still know the job is being done right.${islandNote(t)}`
    ],
    faqs: [
      { q: 'Do you do the construction yourselves?', a: 'We coordinate and supervise. Specialized work goes to trusted licensed contractors from our network; equipment work such as grading, drainage and land clearing we can handle directly.' },
      { q: 'How do I stay updated on my {town} project?', a: 'You get regular progress photos and updates, and a direct line to Jeremy for decisions.' },
      { q: 'Can you help after storm damage?', a: 'Yes — we document the damage for insurance, secure the property and line up the right trades for repairs.' }
    ]
  },
  {
    slug: 'concierge',
    name: 'Arrival Prep & Concierge Services',
    short: 'Concierge',
    icon: 'star',
    image: img.towels,
    hero: img.dunesHouse,
    summary: 'Everything done before you walk in the door — heat on, beds made, fridge stocked, flowers on the table.',
    intro: 'Arrive at a house that is already ready. Our concierge service handles the details — housekeeping, linens, groceries, flowers and climate — so the first hour of your vacation is not spent making beds and running to the store.',
    sections: [
      { title: 'Arrival Prep', items: ['Heat or AC on before you arrive', 'Beds made with fresh linens', 'Flowers and fridge stocked to your list', 'Final walk-through before arrival'] },
      { title: 'Household Management', items: ['Housekeeping scheduled, supervised and checked', 'Outdoor furniture and seasonal storage', 'Mattresses and linens managed', 'Errands and deliveries'] },
      { title: 'White-Glove Support', items: ['Monthly report with photos', 'Direct line to Jeremy', 'Groceries billed at receipt cost plus time', 'Trusted vendors for anything else you need'] }
    ],
    localAngle: (t) => [
      `${t.name} is where you come to relax — not to spend the first day airing out the house and shopping. ${t.island ? 'On the island, where every errand takes longer, having it done before you step off the ferry makes a real difference.' : 'We make sure the house is ready before you cross the bridge.'}`,
      `Our concierge service is part of The Commodore package and available à la carte for ${t.homes} across ${list(t.villages)}.${islandNote(t)}`
    ],
    faqs: [
      { q: 'What is The Commodore package?', a: 'Our most complete package: everything in Seacrest plus arrival prep, supervised housekeeping, seasonal storage, 9 handyman hours a month and a monthly photo report — $4,300 a month for 13 months.' },
      { q: 'How are groceries billed in {town}?', a: 'Groceries are billed at receipt cost plus time.' },
      { q: 'Can you prepare the house for guests, not just me?', a: 'Yes — we can prep for family, friends or guests using the same checklist.' }
    ]
  },
  {
    slug: 'heavy-equipment',
    name: 'Heavy Machinery & Equipment Services',
    short: 'Heavy Equipment',
    icon: 'truck',
    image: img.excavator,
    hero: img.excavator2,
    summary: 'Land clearing, grading, drainage, driveways and site work — done with care for the property around it.',
    intro: 'Mr. Cape Codder provides professional heavy machinery and equipment operation for residential, commercial and estate properties. From land clearing and site prep to drainage, driveways and storm cleanup, we get the work done efficiently while protecting the look and integrity of your property. Equipment work is quoted by the job.',
    sections: [
      { title: 'Site Work', items: ['Land clearing and brush removal', 'Grading and leveling', 'Excavation support', 'Trenching and utility prep', 'Lot preparation and property expansion'] },
      { title: 'Driveways & Drainage', items: ['Driveway repair and preparation', 'Gravel and stone driveways', 'Drainage and water runoff solutions', 'Material spreading and distribution'] },
      { title: 'Cleanup & Hauling', items: ['Stump removal and site cleanup', 'Seasonal storm cleanup', 'Debris hauling and material moving', 'Demolition'] },
      { title: 'Specialty', items: ['Equipment-assisted landscaping', 'Docks and stonework', 'Estate and large-property maintenance', 'Work in environmentally sensitive areas'] }
    ],
    localAngle: (t) => [
      `Sandy soil, high water tables and coastal conservation rules make site work in ${t.name} different from inland jobs. Drainage has to be done right, and work near ${list(t.water, 2)} often means extra care around wetlands and buffer zones.`,
      `We handle land clearing, grading, driveways and drainage for ${t.homes} across ${list(t.villages)}. Every job is quoted individually after a site visit.${islandNote(t)}`
    ],
    faqs: [
      { q: 'How is heavy equipment work priced in {town}?', a: 'By the job. We visit the property, scope the work and give you a written quote.' },
      { q: 'Can you work near wetlands or the water?', a: 'Yes. We regularly work around docks, stonework and environmentally sensitive areas and coordinate with your contractor or engineer on any required approvals.' },
      { q: 'Do you fix drainage and washed-out driveways?', a: 'Yes — drainage and water runoff solutions, driveway repair and stone driveways are some of our most common jobs.' }
    ]
  },
  {
    slug: 'marine-services',
    name: 'White Boats Marine Services',
    short: 'Marine Services',
    icon: 'anchor',
    image: img.whiteBoat1,
    hero: img.marinaSunset,
    summary: 'Our marine division: boat cleaning, sanitation, dock oversight, marine contractors and vessel transport.',
    intro: 'White Boats is the marine services division of Mr. Cape Codder. Many Cape properties include docks, moorings and boats that need the same level of care as the house. We keep your vessel and waterfront clean, maintained and ready — so you have one trusted contact for the property and the boat.',
    sections: [
      { title: 'Vessel Cleaning & Maintenance', items: ['Exterior boat washing', 'Interior detailing', 'Hull cleaning', 'Routine maintenance coordination'] },
      { title: 'Marine Sanitation', items: ['Bilge cleaning and sanitation', 'Waste system maintenance', 'Tank sanitation'] },
      { title: 'Dock & Waterfront Oversight', items: ['Dock inspections', 'Hardware and structure checks', 'Seasonal dock preparation'] },
      { title: 'Marine Contractors & Transport', items: ['Marine mechanics and system servicing', 'Zinc inspection and replacement', 'Yard-to-mooring or dock transport', 'Cape to Islands vessel delivery with trusted captains'] }
    ],
    localAngle: (t) => [
      `Boats and docks in ${t.name} — on ${list(t.water, 3)} — see salt, sun and storms all season. Regular cleaning, bilge care and dock checks keep small issues from turning into a lost weekend or a haul-out.`,
      `White Boats services vessels and waterfront property across ${list(t.villages)}, and can run your boat from the yard to your mooring or dock${t.island ? ', or across from the Cape to the island' : ', or out to Nantucket and Martha’s Vineyard'} with one of our trusted captains.${islandNote(t)}`
    ],
    faqs: [
      { q: 'Do you clean boats at moorings in {town}?', a: 'Yes — exterior washing, interior detailing and hull cleaning, at your dock or mooring or at the yard.' },
      { q: 'Can you move my boat from the yard to my mooring?', a: 'Yes. We retrieve vessels from the boat yard and deliver them to your mooring or dock, and can transport boats between the Cape and the Islands.' },
      { q: 'Do you handle mechanical work?', a: 'We coordinate marine mechanics, zinc inspection and replacement, and system servicing through our network of marine professionals.' }
    ]
  }
];

services.forEach((s) => {
  s.url = `/services/${s.slug}`;
});

const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
module.exports = { services, bySlug, list };
