// All site imagery in one place.
// "sq" = photos pulled from the current Squarespace site (hotlinked for now).
//   Before the Squarespace plan is cancelled, download these into /public/images
//   and swap the URLs to '/images/<file>' or they will stop loading.
// "us" = Unsplash stock (free license, hotlinking allowed). Swap for real job photos over time.
const us = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
const SQ = 'https://images.squarespace-cdn.com/content/v1/699d8a6a3ee9c54e7a4599a0';

module.exports = {
  // From the current site
  shoreline: `${SQ}/3ae1029c-7407-4c49-bbb2-834c21964661/Capecod+shore+line.jpg?format=2500w`,
  aboutPhoto: `${SQ}/6213a594-8544-49c1-a02e-8c197fc58e11/tempImageCif3F2.jpg?format=1500w`,
  aboutCape: `${SQ}/b723daa8-5599-49a9-add4-68d80add87e8/olivia-jane-7201ioiPOjE-unsplash.jpg?format=1500w`,
  whiteBoat1: `${SQ}/66354ebd-8233-4aad-818b-f856caaf63b2/tempImage6KIXA0.jpg?format=1500w`,
  whiteBoat2: `${SQ}/72765775-3635-4d00-8be5-1fab78e2abd0/469118379_122124742490528129_6325620868206919143_n.jpg?format=1500w`,
  pkgNoreaster: `${SQ}/ec05a4ee-19d3-47d7-946e-2b3c42a40c4d/noreaster.png?format=750w`,
  pkgWinterReady: `${SQ}/9ac12d49-c464-49ba-8751-7ed86c2ff32e/winte+ready.png?format=750w`,
  pkgCommodore: `${SQ}/67a0a79e-3e39-4393-9e06-fd494fc50243/coomodore.png?format=750w`,

  // Stock
  beachPath: us('photo-1708458988303-0828184d091e'),
  lighthouse: us('photo-1595336605453-d0ea24263c6e'),
  lighthouseHouse: us('photo-1629259398284-864e5810536c'),
  beachHouses: us('photo-1668010099840-0c92133388e0'),
  shingleHouse: us('photo-1631149784601-8e6c266b046a'),
  dunesHouse: us('photo-1686950429623-abb1ef6ea8e8'),
  bayHouse: us('photo-1782556987645-18612d06ac75'),
  whiteHouse: us('photo-1768067437750-f18d26d3397b'),
  cedarDoor: us('photo-1788740878181-169fdba83435'),
  dormers: us('photo-1770044001869-12315d4d6884'),
  picketFence: us('photo-1778603231094-d80e21a66e00'),
  harborHills: us('photo-1646569278927-6f1a9b20cb8f'),
  excavator: us('photo-1628645419184-26a1f2757340'),
  excavator2: us('photo-1580901369227-308f6f40bdeb'),
  snowHouse: us('photo-1644657073020-59cba0a380e6'),
  snowCabin: us('photo-1759561489113-f30b3c5b8474'),
  roofWork: us('photo-1778098683484-697beaf16ac0'),
  boatWater: us('photo-1620541518882-d6c1ec080d5c'),
  boatsDock: us('photo-1597549422480-a88d77e7be47'),
  woodDock: us('photo-1543288599-f7237c311e6f'),
  marinaSunset: us('photo-1703728843356-515de7a3b134'),
  bedroom: us('photo-1646592491854-6caaaf4d8ee7'),
  towels: us('photo-1697462247864-338e7eba8c4c'),
  tools: us('photo-1426927308491-6380b6a9936f'),
  drill: us('photo-1606676539940-12768ce0e762'),
  carpentry: us('photo-1567361808960-dec9cb578182')
};
