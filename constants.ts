import { Property, MarketStat } from './types';

export const MARKET_STATS: MarketStat[] = [
  {
    label: "Total Sales",
    value: "142",
    description: "Properties sold in Crestmead in 2025"
  },
  {
    label: "Median Price",
    value: "$680,000",
    description: "Up 8.4% from previous year"
  },
  {
    label: "Avg Days on Market",
    value: "22",
    description: "Properties are moving faster than ever"
  },
  {
    label: "Highest Sale",
    value: "$925,000",
    description: "Record breaking price for the suburb"
  }
];

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    category: "Best 4 Bedroom Sale",
    address: "12 Waratah Drive, Crestmead",
    price: "$815,000",
    bedrooms: 4,
    bathrooms: 2,
    carSpaces: 2,
    soldDate: "Oct 14, 2025",
    description: "A stunning renovation that set a new benchmark for 4-bedroom layouts in the northern pocket. The integration of indoor-outdoor living was the key selling point.",
    imageUrl: "https://picsum.photos/seed/house1/800/600"
  },
  {
    id: '2',
    category: "Best 3 Bedroom Sale",
    address: "58 Julie Street, Crestmead",
    price: "$695,000",
    bedrooms: 3,
    bathrooms: 1,
    carSpaces: 4,
    soldDate: "Aug 02, 2025",
    description: "Proving that land size still matters. This classic high-set home on 800sqm attracted 12 bidders at auction due to its massive side access and shed potential.",
    imageUrl: "https://picsum.photos/seed/house2/800/600"
  },
  {
    id: '3',
    category: "Best Entry Level Purchase",
    address: "8 Trulson Drive, Crestmead",
    price: "$585,000",
    bedrooms: 3,
    bathrooms: 1,
    carSpaces: 1,
    soldDate: "Mar 15, 2025",
    description: "An original condition gem that offered the perfect canvas for first home buyers. Sold off-market to a buyer from our exclusive database.",
    imageUrl: "https://picsum.photos/seed/house3/800/600"
  },
  {
    id: '4',
    category: "Highest ROI Flip",
    address: "22 Bumstead Road, Crestmead",
    price: "$780,000",
    bedrooms: 4,
    bathrooms: 2,
    carSpaces: 2,
    soldDate: "Dec 01, 2025",
    description: "Purchased for $450k in 2023, this property underwent a complete transformation. The result? A sophisticated family haven that commanded a premium price.",
    imageUrl: "https://picsum.photos/seed/house4/800/600"
  }
];

export const AGENT_BIO = {
  name: "Rob Ford",
  title: "Lead Agent | Crestmead Specialist",
  agency: "Zevesto Property Group",
  description: "With over a decade of experience in the Logan corridor, Rob Ford has become synonymous with Crestmead real estate. His data-driven approach, combined with the premium marketing of Zevesto Property Group, ensures every home is not just listed, but launched.",
  contact: "0400 000 000",
  email: "rob.ford@zevesto.com.au"
};