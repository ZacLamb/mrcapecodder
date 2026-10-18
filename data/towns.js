// Service-area towns. Each town gets a hub page (/service-areas/:slug)
// and one page per service (/services/:service/:slug).
// region: upper | mid | lower | outer | nantucket | vineyard
const towns = [
  // ---------- Upper Cape ----------
  {
    name: 'Bourne', region: 'upper',
    villages: ['Buzzards Bay', 'Sagamore', 'Sagamore Beach', 'Monument Beach', 'Pocasset', 'Cataumet'],
    water: ['the Cape Cod Canal', 'Buttermilk Bay', 'Buzzards Bay'],
    blurb: 'Bourne straddles the Cape Cod Canal, so it is the first stop for owners driving down from Boston or Providence — and the town where storm surge in Buzzards Bay can arrive fastest.',
    homes: 'year-round neighborhoods, canal-side cottages and waterfront homes along Buttermilk Bay and Pocasset Harbor'
  },
  {
    name: 'Sandwich', region: 'upper',
    villages: ['Sandwich Village', 'East Sandwich', 'Forestdale'],
    water: ['Cape Cod Bay', 'Scorton Creek', 'Shawme Pond', 'the Sandwich Marina'],
    blurb: 'Sandwich is the oldest town on the Cape, with historic homes around Shawme Pond and bay-front properties along Town Neck and East Sandwich that take the brunt of northeast winter storms.',
    homes: 'antique colonials in the village, bay-front cottages and wooded properties in Forestdale'
  },
  {
    name: 'Falmouth', region: 'upper',
    villages: ['Woods Hole', 'North Falmouth', 'West Falmouth', 'East Falmouth', 'Waquoit', 'Teaticket', 'Hatchville'],
    water: ['Vineyard Sound', 'Buzzards Bay', 'Falmouth Harbor', 'Waquoit Bay', 'Great Pond'],
    blurb: 'Falmouth has more shoreline than almost any town on the Cape — Buzzards Bay on one side, Vineyard Sound on the other — and Woods Hole is the main ferry gateway to Martha’s Vineyard.',
    homes: 'harbor-front homes, estates along the Sound, and seasonal cottages on the salt ponds'
  },
  {
    name: 'Mashpee', region: 'upper',
    villages: ['New Seabury', 'Popponesset', 'Mashpee Commons'],
    water: ['Popponesset Bay', 'Mashpee-Wakeby Pond', 'the Mashpee River', 'Nantucket Sound'],
    blurb: 'Mashpee mixes gated waterfront communities like New Seabury with condo developments and quiet pond-front homes, many owned by part-time residents.',
    homes: 'golf and waterfront communities, condos, and lakefront homes on Mashpee-Wakeby Pond'
  },
  // ---------- Mid Cape ----------
  {
    name: 'Barnstable', region: 'mid',
    villages: ['Hyannis', 'Centerville', 'Osterville', 'Cotuit', 'Marstons Mills', 'West Barnstable', 'Barnstable Village'],
    water: ['Hyannis Harbor', 'Lewis Bay', 'Barnstable Harbor', 'Wequaquet Lake', 'the Three Bays'],
    blurb: 'Barnstable is the Cape’s largest town and its hub — Hyannis is where the Nantucket ferries leave, while Osterville, Cotuit and Centerville hold some of the Cape’s most significant waterfront estates.',
    homes: 'estates on the south-side bays, rental properties in Hyannis, and historic homes along Route 6A'
  },
  {
    name: 'Yarmouth', region: 'mid',
    villages: ['Yarmouth Port', 'South Yarmouth', 'West Yarmouth', 'Bass River'],
    water: ['Bass River', 'Lewis Bay', 'Parkers River', 'Bass Hole'],
    blurb: 'Yarmouth runs from the historic captains’ houses of Yarmouth Port on the bay side to the busy summer-rental neighborhoods along Nantucket Sound in South and West Yarmouth.',
    homes: 'sea captains’ homes on 6A, river-front homes on Bass River and short-term rentals near the south-shore beaches'
  },
  {
    name: 'Dennis', region: 'mid',
    villages: ['Dennis Village', 'Dennis Port', 'East Dennis', 'South Dennis', 'West Dennis'],
    water: ['Bass River', 'Sesuit Harbor', 'Swan Pond River', 'Cape Cod Bay', 'Nantucket Sound'],
    blurb: 'Dennis is one of the few Cape towns that touches both Cape Cod Bay and Nantucket Sound, and its beach neighborhoods turn over thousands of summer rentals every season.',
    homes: 'beach cottages in Dennis Port and West Dennis, bay-side homes near Sesuit Harbor and village properties along 6A'
  },
  // ---------- Lower Cape ----------
  {
    name: 'Brewster', region: 'lower',
    villages: ['Brewster Village', 'East Brewster', 'West Brewster'],
    water: ['the Cape Cod Bay tidal flats', 'Long Pond', 'Cliff Pond', 'Nickerson State Park'],
    blurb: 'Brewster is known for miles of bay-side tidal flats and freshwater kettle ponds, with wooded lots and pond-front homes that sit empty much of the off-season.',
    homes: 'bay-front homes, pond-front cottages, and condo communities like Ocean Edge'
  },
  {
    name: 'Harwich', region: 'lower',
    villages: ['Harwich Port', 'West Harwich', 'East Harwich', 'South Harwich', 'North Harwich', 'Pleasant Lake'],
    water: ['Wychmere Harbor', 'Saquatucket Harbor', 'Allen Harbor', 'the Herring River', 'Long Pond'],
    blurb: 'Harwich has three harbors on Nantucket Sound and a large share of seasonal homes, which makes it one of the busiest towns on the Cape for spring openings and fall closings.',
    homes: 'harbor-front homes in Harwich Port, seasonal cottages along the Sound and pond-front homes on Long Pond'
  },
  {
    name: 'Chatham', region: 'lower',
    villages: ['Chatham Village', 'North Chatham', 'South Chatham', 'West Chatham', 'Chathamport'],
    water: ['Pleasant Bay', 'Stage Harbor', 'Oyster Pond', 'Chatham Harbor', 'Monomoy'],
    blurb: 'Chatham sits at the elbow of the Cape, exposed to the open Atlantic, with shifting barrier beaches, high-value waterfront homes and owners who are often hundreds of miles away in winter.',
    homes: 'waterfront estates on Pleasant Bay and Stage Harbor and historic homes in the village'
  },
  {
    name: 'Orleans', region: 'lower',
    villages: ['Orleans Village', 'East Orleans', 'South Orleans'],
    water: ['Town Cove', 'Pleasant Bay', 'Rock Harbor', 'Nauset Beach'],
    blurb: 'Orleans is the gateway to the Outer Cape, with Rock Harbor on the bay, Nauset Beach on the ocean and Pleasant Bay in between — a lot of water to keep an eye on during a nor’easter.',
    homes: 'waterfront homes on Pleasant Bay and Town Cove and seasonal homes near Nauset'
  },
  // ---------- Outer Cape ----------
  {
    name: 'Eastham', region: 'outer',
    villages: ['Eastham', 'North Eastham'],
    water: ['Nauset Marsh', 'Salt Pond', 'First Encounter Beach', 'Great Pond'],
    blurb: 'Eastham sits between Cape Cod Bay and the National Seashore, with summer cottages, kettle-pond homes and long winters when many streets are almost entirely seasonal.',
    homes: 'summer cottages, bay-side homes and cottage colonies near the National Seashore'
  },
  {
    name: 'Wellfleet', region: 'outer',
    villages: ['Wellfleet Village', 'South Wellfleet'],
    water: ['Wellfleet Harbor', 'Gull Pond', 'the kettle ponds', 'the Atlantic beaches'],
    blurb: 'Wellfleet is quiet and spread out, with homes tucked into the woods around the kettle ponds and along the harbor — great for privacy, harder to check on when you are off Cape.',
    homes: 'wooded and pond-front homes, harbor-side properties and seasonal cottages'
  },
  {
    name: 'Truro', region: 'outer',
    villages: ['Truro', 'North Truro'],
    water: ['the Pamet River', 'Pamet Harbor', 'Cape Cod Bay', 'Head of the Meadow'],
    blurb: 'Truro is the least-populated town on the Cape, mostly National Seashore, with dune-top and bay-side homes that see strong winds and very few neighbors in the off-season.',
    homes: 'bay-side cottage colonies, dune and bluff homes and seasonal rentals'
  },
  {
    name: 'Provincetown', region: 'outer',
    villages: ['West End', 'East End', 'Downtown'],
    water: ['Provincetown Harbor', 'MacMillan Pier', 'Race Point', 'Herring Cove'],
    blurb: 'Provincetown is tightly packed, highly seasonal and heavily rented — properties here turn over constantly in summer and sit close together on narrow streets where access and timing matter.',
    homes: 'condos, guest-house style properties, harbor-front homes and short-term rentals'
  },
  // ---------- Islands ----------
  {
    name: 'Nantucket', region: 'nantucket',
    villages: ['Nantucket Town', 'Siasconset', 'Madaket', 'Polpis', 'Wauwinet', 'Surfside'],
    water: ['Nantucket Harbor', 'Madaket Harbor', 'Nantucket Sound', 'the Atlantic'],
    blurb: 'Nantucket is 30 miles out to sea, reached by ferry from Hyannis. Many island homes are second homes, and getting the right contractor across the water on short notice is half the battle.',
    homes: 'historic downtown homes, ’Sconset cottages and large shingle-style estates'
  },
  {
    name: 'Edgartown', region: 'vineyard',
    villages: ['Edgartown Village', 'Katama', 'Chappaquiddick'],
    water: ['Edgartown Harbor', 'Katama Bay', 'Edgartown Great Pond'],
    blurb: 'Edgartown is the Vineyard’s historic whaling port, with captains’ houses in the village, waterfront homes on the harbor and Chappaquiddick a short ferry ride across.',
    homes: 'historic village homes, harbor-front estates and summer homes in Katama'
  },
  {
    name: 'Oak Bluffs', region: 'vineyard',
    villages: ['Oak Bluffs', 'East Chop', 'Copeland District'],
    water: ['Oak Bluffs Harbor', 'Lagoon Pond', 'Sengekontacket Pond', 'Nantucket Sound'],
    blurb: 'Oak Bluffs is the Vineyard’s summer harbor town, famous for its gingerbread cottages, with a seasonal ferry and a lot of rental turnover packed into a few short months.',
    homes: 'gingerbread cottages, East Chop waterfront homes and summer rentals'
  },
  {
    name: 'Tisbury', region: 'vineyard',
    villages: ['Vineyard Haven', 'West Chop'],
    water: ['Vineyard Haven Harbor', 'Lake Tashmoo', 'Lagoon Pond'],
    blurb: 'Tisbury and Vineyard Haven are the island’s year-round port, where the Steamship Authority ferry lands every day — the easiest place on the Vineyard for us to stage materials and crews.',
    homes: 'year-round village homes, West Chop estates and harbor-side properties'
  },
  {
    name: 'West Tisbury', region: 'vineyard',
    villages: ['West Tisbury', 'North Tisbury'],
    water: ['Tisbury Great Pond', 'Lambert’s Cove'],
    blurb: 'West Tisbury is up-island farm country — larger lots, long driveways and stone walls, where snow, storm cleanup and land work are a bigger job than in the down-island towns.',
    homes: 'farmhouses, large wooded lots and pond-side homes'
  },
  {
    name: 'Chilmark', region: 'vineyard',
    villages: ['Chilmark', 'Menemsha'],
    water: ['Menemsha Harbor', 'Menemsha Pond', 'Squibnocket'],
    blurb: 'Chilmark is rural, hilly and remote by Vineyard standards, with large private properties and the fishing village of Menemsha on the harbor.',
    homes: 'large private estates, hilltop homes and properties near Menemsha'
  },
  {
    name: 'Aquinnah', region: 'vineyard',
    villages: ['Aquinnah'],
    water: ['Menemsha Pond', 'Squibnocket Pond', 'the Gay Head Cliffs'],
    blurb: 'Aquinnah sits at the far western tip of the Vineyard, beside the clay cliffs — the most remote town on the island, where owners especially need someone local they can count on.',
    homes: 'remote private homes, seasonal cottages and pond-side properties'
  }
];

const regions = {
  upper: { label: 'Upper Cape', short: 'Upper Cape' },
  mid: { label: 'Mid Cape', short: 'Mid Cape' },
  lower: { label: 'Lower Cape', short: 'Lower Cape' },
  outer: { label: 'Outer Cape', short: 'Outer Cape' },
  nantucket: { label: 'Nantucket', short: 'Nantucket' },
  vineyard: { label: 'Martha’s Vineyard', short: 'the Vineyard' }
};

const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

towns.forEach((t) => {
  t.slug = `${slugify(t.name)}-ma`;
  t.regionLabel = regions[t.region].label;
  t.island = t.region === 'nantucket' || t.region === 'vineyard';
  t.state = 'MA';
});

const bySlug = Object.fromEntries(towns.map((t) => [t.slug, t]));
const nearby = (town, n = 5) => {
  const same = towns.filter((t) => t.region === town.region && t.slug !== town.slug);
  const order = ['upper', 'mid', 'lower', 'outer', 'nantucket', 'vineyard'];
  const i = order.indexOf(town.region);
  const adj = towns.filter((t) => [order[i - 1], order[i + 1]].includes(t.region));
  return [...same, ...adj].slice(0, n);
};
const grouped = () => Object.keys(regions).map((k) => ({ key: k, ...regions[k], towns: towns.filter((t) => t.region === k) }));

module.exports = { towns, regions, bySlug, nearby, grouped, slugify };
