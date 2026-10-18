// Packages from the current Squarespace store.
// TODO (client): add Keeper and Seacrest details — the current site references them but doesn't list them.
const img = require('./images');

module.exports = [
  {
    slug: 'winter-ready',
    name: 'Winter Ready',
    price: '$3,300',
    terms: 'for the season · or 5 payments of $720, November–March',
    image: img.pkgWinterReady,
    pitch: 'One package that gets your home ready for winter and looks after it through every storm.',
    groups: [
      { title: 'Fall winter prep (first weeks)', items: ['Pipes and heat checked, outdoor water shut off', 'Gutters cleared and leaves cleared', 'Generator tested and storm prep done', 'Your winter plan in writing'] },
      { title: 'Snow & storms, December–March', items: ['Up to 8 snow visits: shoveling, snow blowing and salting of driveway and walks', 'Post-storm check after up to 4 major storms, with photos', 'Text updates before and after each storm', 'Salt, sand and fuel included', 'Additional snow visits $175 each'] }
    ]
  },
  {
    slug: 'noreaster',
    name: 'Nor’easter',
    badge: 'Most Popular',
    price: '$2,025',
    terms: 'per month for 4 months',
    image: img.pkgNoreaster,
    pitch: 'Your driveway cleared and your house looked after by Mr. Cape Codder himself.',
    groups: [
      { title: 'Included', items: ['Everything in Keeper', 'Shoveling, snow blowing and salting of driveway and walks (up to 8 visits a season, then $175 a visit)', '3 handyman hours every month to fix what the weekly checks find', 'Ice dam and roof snow watch, with a specialist called in if needed', 'Salt, sand and fuel included'] }
    ]
  },
  {
    slug: 'the-commodore',
    name: 'The Commodore',
    price: '$4,300',
    terms: 'per month for 13 months',
    image: img.pkgCommodore,
    pitch: 'Everything done before you walk in the door.',
    groups: [
      { title: 'Included', items: ['Everything in Seacrest', 'Arrival prep: heat or AC on, beds made, fresh linens, flowers and your fridge stocked to your list', 'Housekeeping scheduled, supervised and checked', 'Outdoor furniture, seasonal storage, mattresses and linens managed', '9 handyman hours every month', 'A monthly report with photos and a direct line to Jeremy'] }
    ]
  }
];
