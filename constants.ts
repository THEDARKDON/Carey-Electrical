import { ProjectImage, ServiceItem, ServiceDetailData, BlogPost, LocationItem, Brand, Testimonial, ProductPageData, LocationPageData, CostGuideData, AboutPageData, BlogPostData, GlossaryTerm } from './types';

// SEO: Brand Information
export const BRAND = {
  name: "Carey Electrical",
  tagline: "Power Your Future With Clean Energy",
  phone: "01635 783887",
  email: "info@careyelectrical.co.uk",
  location: "Newbury & Surrounding Areas"
};

// Accreditations
export const ACCREDITATIONS = [
  { name: "MCS Certified", sub: "Microgeneration Certification Scheme" },
  { name: "NICEIC", sub: "Approved Contractor" },
  { name: "RECC", sub: "Renewable Energy Consumer Code" },
  { name: "TrustMark", sub: "Government Endorsed Quality" },
  { name: "IWA", sub: "Deposit Protection" }
];

// Market Leaders / Partners
export const TRUSTED_BRANDS: Brand[] = [
  { name: "Myenergi", logo: "", description: "Certified Installer of Libbi, Zappi & Eddi" },
  { name: "Tesla", logo: "", description: "Powerwall 3 Certified Installer" },
  { name: "GivEnergy", logo: "", description: "Premium All-in-One Battery Systems" },
  { name: "SolarEdge", logo: "", description: "Optimized Inverter Technology" },
  { name: "Victron", logo: "", description: "Off-Grid Energy Specialists" },
  { name: "Jinko Solar", logo: "", description: "Tier 1 N-Type Panel Manufacturer" }
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    location: 'Newbury, Berkshire',
    quote: 'Carey Electrical transformed our energy usage. The team was professional, the installation was tidy, and our bills have dropped by 80%. Highly recommend the Libbi system.',
    rating: 5,
    system: '6kW Solar + 10kWh Battery'
  },
  {
    id: 't2',
    name: 'David Thorne',
    location: 'Basingstoke, Hampshire',
    quote: 'Excellent communication from start to finish. They handled all the DNO paperwork and the handover was thorough. The app is addictive!',
    rating: 5,
    system: 'Tesla Powerwall 2'
  },
  {
    id: 't3',
    name: 'Green Oak Farm',
    location: 'Hungerford',
    quote: 'We needed a complex ground mount solution for our barn. Carey Electrical designed a system that maximizes yield without disturbing our operations.',
    rating: 5,
    system: '12kW Ground Mount Array'
  }
];

// Services Data
export const SERVICES: ServiceItem[] = [
  {
    id: 'domestic-solar',
    title: 'Domestic Solar Panels',
    description: 'High-efficiency Tier 1 panels designed for aesthetics and performance.',
    icon: 'Home'
  },
  {
    id: 'integrated-solar',
    title: 'In-Roof Integrated Solar',
    description: 'Sleek, flush-fitting panels that replace your roof tiles. Perfect for new builds.',
    icon: 'LayoutGrid'
  },
  {
    id: 'battery-storage',
    title: 'Battery Storage',
    description: 'Store excess energy for use at night. We specialize in Myenergi Libbi & Tesla.',
    icon: 'BatteryCharging'
  },
  {
    id: 'ev-charging',
    title: 'EV Charging',
    description: 'Smart home chargers that integrate with your solar to charge for free.',
    icon: 'Car'
  },
  {
    id: 'solar-carports',
    title: 'Solar Carports',
    description: 'Turn your driveway into a power station. Bespoke timber and aluminium frames.',
    icon: 'Warehouse'
  },
  {
    id: 'flat-roof-solar',
    title: 'Flat Roof Solar',
    description: 'Ballasted systems for extensions and garages. No roof penetration required.',
    icon: 'SquareStack'
  },
  {
    id: 'commercial-solar',
    title: 'Commercial Solar',
    description: 'Large-scale arrays to reduce operating costs and carbon footprint.',
    icon: 'Building2'
  },
  {
    id: 'agricultural-solar',
    title: 'Agricultural Solar',
    description: 'High-yield systems for barns, sheds, and ground mounts on farm land.',
    icon: 'Wheat'
  },
  {
    id: 'commercial-ev',
    title: 'Commercial EV Charging',
    description: 'Workplace charging solutions for fleets and employees. OZEV approved.',
    icon: 'Building'
  },
  {
    id: 'inverter-replacement',
    title: 'Inverter Replacement',
    description: 'System offline? We replace failed inverters to get you generating again.',
    icon: 'RefreshCw'
  },
  {
    id: 'solar-repairs',
    title: 'Solar Repairs',
    description: 'Diagnosing and fixing faults, isolation errors, and storm damage.',
    icon: 'ZapOff'
  },
  {
    id: 'solar-removal',
    title: 'Removal & Reinstall',
    description: 'Safe removal of solar panels for roof repairs or extensions.',
    icon: 'Hammer'
  },
  {
    id: 'new-builds',
    title: 'New Builds & Developers',
    description: 'Part L compliant solar solutions for self-builders and developments.',
    icon: 'HardHat'
  },
  {
    id: 'bird-proofing',
    title: 'Bird Proofing',
    description: 'Protect your investment from pigeons and debris with our mesh systems.',
    icon: 'Feather'
  },
  {
    id: 'maintenance',
    title: 'Cleaning & Maintenance',
    description: 'Keep your system generating at 100% with annual health checks.',
    icon: 'Wrench'
  },
  {
    id: 'ground-mount',
    title: 'Roof & Ground Mount',
    description: 'Versatile mounting solutions for flat roofs, fields, and complex terrains.',
    icon: 'Layers'
  },
  {
    id: 'off-grid',
    title: 'Off-Grid Systems',
    description: 'Complete energy independence with Victron Energy integration.',
    icon: 'WifiOff'
  }
];

// Project Images Gallery
export const PROJECTS: ProjectImage[] = [
  {
    id: 'p1',
    slug: 'newbury-libbi-retrofit',
    url: 'IMG_2857.jpeg', 
    category: 'Battery Storage',
    description: 'Myenergi Libbi 5kW Hybrid Inverter Installation',
    location: 'Newbury',
    systemSize: '5kWh Storage',
    title: "Eco-Smart Battery Retrofit in Newbury",
    client: "The Richardson Family",
    date: "January 2025",
    challenge: `<p>The client had an existing 4kW solar array installed in 2018 but was exporting over 60% of their generation back to the grid during the day while they were at work. They needed a way to store this energy to use in the evenings for cooking and EV charging.</p>`,
    solution: `<p>We installed a <strong>Myenergi Libbi 5kW Hybrid</strong> system. As they already had a Zappi EV charger, the Libbi was the natural choice for a seamless ecosystem. We replaced their old string inverter with the Libbi hybrid inverter, cleaning up the garage wall and providing a single app for solar, battery, and car charging control.</p>`,
    outcome: `<p>Self-consumption increased from 40% to 92%. The client now charges their battery overnight on the Octopus Intelligent tariff (7.5p/kWh) during winter, and runs almost entirely off solar in the summer.</p>`,
    stats: [
      { label: "Annual Savings", value: "£1,150" },
      { label: "Self Consumption", value: "92%" },
      { label: "Payback Period", value: "6.5 Years" }
    ],
    gallery: ['IMG_2864.jpeg', 'IMG_3962.jpeg']
  },
  {
    id: 'p2',
    slug: 'reading-premium-black',
    url: 'IMG_0692.jpeg',
    category: 'Solar PV',
    description: 'Premium All-Black Panels on Tiled Roof',
    location: 'Reading',
    systemSize: '6.4kW Array',
    title: "High-Yield Aesthetics in Reading",
    client: "Private Homeowner",
    date: "December 2024",
    challenge: `<p>The homeowner in Lower Earley wanted to maximize generation but was very concerned about the aesthetics. The property faces a busy street, so the panels needed to look sleek and modern, not industrial.</p>`,
    solution: `<p>We selected <strong>Jinko Tiger Neo 440W All-Black</strong> panels. These N-type panels offer superior efficiency and a deep black appearance that blends perfectly with the dark concrete tiles. We used the <strong>K2 Mounting System</strong> with black clamps and rails, ensuring no silver metalwork was visible.</p>`,
    outcome: `<p>A stunning 6.4kW array that generates over 6,000 kWh per year. The curb appeal of the property has arguably been enhanced, proving that solar can be beautiful.</p>`,
    stats: [
      { label: "System Size", value: "6.4 kW" },
      { label: "Panels", value: "16x Jinko 440W" },
      { label: "Inverter", value: "SolarEdge 5kW" }
    ]
  },
  {
    id: 'p3',
    slug: 'basingstoke-optimized',
    url: 'IMG_0758.jpeg',
    category: 'Solar PV',
    description: 'High Efficiency Array with Optimized Spacing',
    location: 'Basingstoke',
    systemSize: '5.2kW System',
    title: "Optimized Solar for Shaded Roof",
    client: "Mr. & Mrs. Davies",
    date: "November 2024",
    challenge: `<p>This property in Chineham had a complex roof with a large chimney and a dormer window that cast moving shadows throughout the day. A traditional string inverter would have seen the system's performance crippled by these shaded areas.</p>`,
    solution: `<p>We deployed a <strong>SolarEdge Optimized System</strong>. By placing a power optimizer under each of the 12 panels, we ensured that each panel operates independently. When the chimney shades two panels in the afternoon, the other ten continue to generate at 100% capacity.</p>`,
    outcome: `<p>Generation is estimated to be 25% higher than a standard string system. The client can view the performance of every single panel individually via the monitoring app.</p>`,
    stats: [
      { label: "Yield Boost", value: "+25%" },
      { label: "Panels", value: "12x Trina 435W" },
      { label: "Tech", value: "SolarEdge P401" }
    ]
  },
  {
    id: 'p4',
    url: 'IMG_3962.jpeg', 
    category: 'Battery Storage',
    description: 'Clean Garage Installation of Libbi System',
    location: 'Thatcham',
    systemSize: '10kWh Storage'
  },
  {
    id: 'p5',
    url: 'IMG_3045.jpeg',
    category: 'Solar PV',
    description: 'Ground Mount System on Gravel Bed',
    location: 'Hungerford',
    systemSize: '8kW Array'
  },
  {
    id: 'p6',
    slug: 'winchester-commercial',
    url: 'IMG_3042.jpeg',
    category: 'Commercial',
    description: 'Large Scale Roof Installation',
    location: 'Winchester',
    systemSize: '12kW Array',
    title: "Commercial Solar for Manufacturing",
    client: "Winchester Joinery Ltd",
    date: "October 2024",
    challenge: `<p>A busy joinery workshop with high daytime electricity usage from machinery. They were facing soaring energy bills that were eating into their profit margins.</p>`,
    solution: `<p>We designed a 12kW 3-phase system using high-wattage <strong>585W Jinko Commercial Modules</strong>. The system connects directly to their distribution board, offsetting the power used by saws and extraction units in real-time.</p>`,
    outcome: `<p>The business has reduced its grid draw by 60% during operating hours. The system is projected to pay for itself in just 3.8 years thanks to the high self-consumption rate.</p>`,
    stats: [
      { label: "ROI", value: "26%" },
      { label: "Payback", value: "3.8 Years" },
      { label: "CO2 Saved", value: "2.8 Tons/yr" }
    ]
  },
  {
    id: 'p7',
    url: 'IMG_3047.jpeg',
    category: 'Solar PV',
    description: 'Compact Ground Mount System',
    location: 'Andover',
    systemSize: '4kW Array'
  },
  {
    id: 'p8',
    url: 'IMG_1023.jpeg',
    category: 'Solar PV',
    description: 'Sleek Installation on Slate Roof',
    location: 'Oxford',
    systemSize: '6kW Array'
  },
  {
    id: 'p9',
    url: 'IMG_3256.jpeg',
    category: 'Solar PV',
    description: 'Multi-Section Complex Roof Array',
    location: 'Newbury',
    systemSize: '10kW System'
  },
  {
    id: 'p10',
    url: 'IMG_2864.jpeg',
    category: 'Battery Storage',
    description: 'Myenergi Ecosystem Integration',
    location: 'Reading',
    systemSize: '5kW Hybrid'
  },
  {
    id: 'p11',
    url: 'IMG_3039.jpeg',
    category: 'Solar PV',
    description: 'Flat Roof Extension Array',
    location: 'Thatcham',
    systemSize: '3.2kW Array'
  },
  {
    id: 'p12',
    url: 'IMG_3254.jpeg',
    category: 'Commercial',
    description: 'Commercial Installation with Van Fleet',
    location: 'Basingstoke',
    systemSize: '50kW System'
  }
];

export const PRODUCTS_CONTENT: Record<string, ProductPageData> = {
  'tesla-powerwall': {
    id: 'tesla-powerwall',
    name: 'Tesla Powerwall 3',
    brand: 'Tesla',
    tagline: 'The Future of Home Energy Storage',
    heroImage: 'IMG_3962.jpeg',
    description: 'Powerwall 3 is a fully integrated solar and battery system, designed for easy installation and seamless backup protection.',
    features: [{ title: 'Integrated Inverter', desc: 'Built-in solar inverter for higher efficiency.', icon: 'Zap' }, { title: 'Storm Watch', desc: 'Automatically detects incoming storms.', icon: 'CloudLightning' }, { title: 'Liquid Cooling', desc: 'Advanced thermal management.', icon: 'Thermometer' }],
    specs: { 'Energy Capacity': '13.5 kWh', 'Power Output': '11.5 kW Continuous', 'Solar Input': '6 MPPTs', 'Warranty': '10 Years', 'Weight': '130 kg', 'Dimensions': '1098 x 609 x 193 mm' }
  },
  'myenergi-libbi': {
    id: 'myenergi-libbi',
    name: 'Myenergi Libbi',
    brand: 'Myenergi',
    tagline: 'Modular. Smart. British.',
    heroImage: 'IMG_2864.jpeg',
    description: 'Libbi is not just a battery; it is an eco-smart energy system that communicates with Zappi and Eddi.',
    features: [{ title: 'Modular Design', desc: 'Stackable 5kWh modules.', icon: 'Layers' }, { title: 'Ecosystem', desc: 'Talks to Zappi and Eddi.', icon: 'Wifi' }, { title: 'UK Support', desc: 'Designed in the UK.', icon: 'Flag' }],
    specs: { 'Capacity': '5kWh - 20kWh', 'Inverter Power': '3.68kW or 5kW', 'Backup': 'Optional', 'Warranty': '10 Years', 'Chemistry': 'LiFePO4', 'Efficiency': '97%' }
  },
  'myenergi-zappi': {
    id: 'myenergi-zappi',
    name: 'Myenergi Zappi',
    brand: 'Myenergi',
    tagline: 'The World\'s #1 Solar EV Charger',
    heroImage: 'IMG_2864.jpeg', // Reusing libbi image context or generic if available
    description: 'Zappi is a smart EV charger with a difference. It can operate as a standard charger, or it can use 100% green energy generated from your Solar PV or wind generation.',
    features: [{ title: 'Solar Charging', desc: 'Charge on sunshine.', icon: 'Sun' }, { title: 'No Earth Rod', desc: 'Built-in pen fault protection.', icon: 'Shield' }, { title: 'App Control', desc: 'Monitor & control from anywhere.', icon: 'Smartphone' }],
    specs: { 'Power': '7kW (Single Phase) or 22kW (3-Phase)', 'Connector': 'Type 2 Tethered or Untethered', 'Warranty': '3 Years', 'Connectivity': 'WiFi & Ethernet', 'Modes': 'Fast, Eco, Eco+' }
  },
  'jinko-tiger': {
    id: 'jinko-tiger',
    name: 'Jinko Tiger Neo',
    brand: 'Jinko Solar',
    tagline: 'N-Type Technology for Maximum Yield',
    heroImage: 'IMG_0758.jpeg',
    description: 'The Tiger Neo N-type module adopts TOPCon technology for higher efficiency and lower degradation.',
    features: [{ title: 'N-Type TOPCon', desc: 'Superior efficiency.', icon: 'Sun' }, { title: 'All-Black', desc: 'Sleek obsidian look.', icon: 'Eye' }, { title: '30 Year Warranty', desc: 'Industry leading guarantee.', icon: 'ShieldCheck' }],
    specs: { 'Power Output': '440W - 460W', 'Efficiency': '22.8%', 'Degradation': '<0.4% per year', 'Warranty': '30 Year Power', 'Cell Type': 'N-Type Monocrystalline', 'Dimensions': '1762 x 1134 x 30 mm' }
  },
  'givenergy-aio': {
    id: 'givenergy-aio',
    name: 'GivEnergy All-in-One',
    brand: 'GivEnergy',
    tagline: 'Power Your Entire Home',
    heroImage: 'IMG_2857.jpeg',
    description: 'A premium 13.5kWh battery with a massive discharge rate, capable of powering heat pumps.',
    features: [{ title: 'High Discharge', desc: '6kW continuous power.', icon: 'Zap' }, { title: 'Grid Services', desc: 'Ready for grid balancing.', icon: 'TrendingUp' }, { title: 'IP65 Rated', desc: 'Suitable for outdoor.', icon: 'CloudRain' }],
    specs: { 'Capacity': '13.5 kWh', 'Power': '6.0 kW', 'Backup': 'Full Whole-House Backup', 'Warranty': '12 Years', 'Depth of Discharge': '100%', 'Connectivity': 'WiFi / LAN / 4G' }
  }
};

export const BLOG_POSTS: BlogPost[] = [
  { id: '1', slug: 'is-solar-worth-it-berkshire', title: 'Is Solar Worth It in Berkshire & Hampshire? (2025 Guide)', excerpt: 'With energy prices fluctuating, we analyze the real ROI for homeowners in Reading, Newbury and Basingstoke.', date: 'Jan 28, 2025', image: 'IMG_0758.jpeg', category: 'Market Analysis', readTime: '8 min read', featured: true },
  { id: '2', slug: 'solar-power-reading-guide', title: 'Why Reading is Leading the Solar Revolution in 2025', excerpt: 'Reading is becoming a hub for smart energy. From Caversham to Earley, discover how urban homeowners are beating grid prices.', date: 'Feb 2, 2025', image: 'IMG_3039.jpeg', category: 'Local Projects', readTime: '6 min read' },
  { id: '3', slug: 'best-solar-batteries-2025', title: 'Best Solar Batteries 2025: Tesla Powerwall 3 vs Libbi', excerpt: 'We compare the leading battery storage systems available in the UK. Which one is right for your home?', date: 'Feb 10, 2025', image: 'IMG_3962.jpeg', category: 'Technology', readTime: '10 min read' },
  { id: '4', slug: 'bird-proofing-cost-guide', title: 'Solar Panel Bird Proofing Cost Guide 2025', excerpt: 'Pigeons nesting under your solar panels? Learn about the costs of removal, cleaning, and mesh installation to protect your roof.', date: 'Feb 12, 2025', image: 'IMG_0692.jpeg', category: 'Maintenance', readTime: '6 min read' },
  { id: '5', slug: 'solar-carports-vs-roof', title: 'Solar Carports vs Roof Solar: Which is Better?', excerpt: 'Running out of roof space? Discover why solar carports are becoming the premium choice for homeowners in Ascot and Wokingham.', date: 'Feb 18, 2025', image: 'IMG_3045.jpeg', category: 'Technology', readTime: '7 min read' },
  { id: '6', slug: 'in-roof-solar-guide', title: 'In-Roof vs On-Roof Solar: Aesthetics & Cost', excerpt: 'Building a new home or re-roofing? Integrated solar panels (GSE) offer a stunning flush finish. We compare the costs and benefits.', date: 'Feb 22, 2025', image: 'IMG_1023.jpeg', category: 'Technology', readTime: '8 min read' },
  { id: '7', slug: 'solar-panels-winchester-heritage', title: 'Installing Solar in Winchester Conservation Areas', excerpt: 'Living in a historic city doesn\'t mean you can\'t have solar. Learn about our heritage-compliant all-black systems.', date: 'Dec 20, 2024', image: 'IMG_1023.jpeg', category: 'Planning', readTime: '7 min read' },
  { id: '8', slug: 'oxford-solar-net-zero', title: 'Oxford\'s Path to Net Zero: How Homeowners Can Help', excerpt: 'Oxford City Council has ambitious climate goals. See how residential solar arrays are contributing to a greener city.', date: 'Dec 5, 2024', image: 'IMG_3254.jpeg', category: 'Local Projects', readTime: '6 min read' },
  { id: '9', slug: '0-vat-battery-storage', title: '0% VAT on Battery Storage Extended', excerpt: 'Great news for homeowners! The government has extended the 0% VAT relief to include standalone battery storage systems.', date: 'Feb 15, 2024', image: 'IMG_3962.jpeg', category: 'Finance', readTime: '3 min read' }
];

export const BLOG_CONTENT: Record<string, BlogPostData> = {
  'is-solar-worth-it-berkshire': { id: '1', title: 'Is Solar Worth It in Berkshire & Hampshire? (2025 Guide)', date: 'Jan 28, 2025', category: 'Market Analysis', author: 'James Carey, Lead Engineer', heroImage: 'IMG_0758.jpeg', content: `<h2>The Financial Reality...</h2>` },
  'in-roof-solar-guide': {
    id: '6',
    title: 'In-Roof vs On-Roof Solar: Aesthetics & Cost',
    date: 'Feb 22, 2025',
    category: 'Technology',
    author: 'James Carey',
    heroImage: 'IMG_1023.jpeg',
    content: `
      <h2>The Difference Explained</h2>
      <p>When most people think of solar, they picture "On-Roof" systems where rails are bolted above the tiles. "In-Roof" (or Integrated) solar sits flush with the roofline, acting as the roof covering itself.</p>
      
      <h3>Aesthetics</h3>
      <p>There is no contest. In-roof systems like the <strong>GSE Integration</strong> system look stunning. They don't have visible gaps or rails, and they sit lower, making them less obtrusive. This is the preferred choice for self-builders and architects.</p>

      <h3>Cost Comparison</h3>
      <p>If you are retrofitting, In-Roof is more expensive because we have to remove tiles. However, if you are <strong>re-roofing</strong> or building a <strong>new roof</strong>, In-Roof is often cheaper! Why? Because you save money by not buying thousands of pounds worth of slate or clay tiles for the area the panels cover.</p>

      <h3>Heat Dissipation</h3>
      <p>Critics used to argue that In-Roof panels get hotter and lose efficiency. Modern systems have excellent airflow channels behind the panels, making this efficiency loss negligible compared to the aesthetic gain.</p>
    `,
    relatedLinks: [
      { label: "View Integrated Solar Service", url: "#/services/integrated-solar" },
      { label: "New Builds Services", url: "#/services/new-builds" }
    ]
  },
  'solar-carports-vs-roof': {
    id: '5',
    title: 'Solar Carports vs Roof Solar: Which is Better?',
    date: 'Feb 18, 2025',
    category: 'Technology',
    author: 'James Carey',
    heroImage: 'IMG_3045.jpeg',
    content: `<h2>The Rise of the Solar Carport...</h2>` 
  },
  'bird-proofing-cost-guide': {
    id: '4',
    title: 'Solar Panel Bird Proofing Cost Guide 2025',
    date: 'Feb 12, 2025',
    category: 'Maintenance',
    author: 'James Carey',
    heroImage: 'IMG_0692.jpeg',
    content: `<h2>The True Cost of Pigeon Pests...</h2>`
  },
  'best-solar-batteries-2025': {
    id: '3',
    title: 'Best Solar Batteries 2025: Tesla Powerwall 3 vs Libbi vs GivEnergy',
    date: 'Feb 10, 2025',
    category: 'Technology',
    author: 'James Carey',
    heroImage: 'IMG_3962.jpeg',
    content: `<h2>The Battle for Storage Supremacy...</h2>` // Abbreviated for this snippet
  }
};

export const LOCATIONS: LocationItem[] = [
  { name: 'Newbury', slug: 'newbury', county: 'Berkshire', lat: 51.4014, lng: -1.3231 },
  { name: 'Thatcham', slug: 'thatcham', county: 'Berkshire', lat: 51.4062, lng: -1.2656 },
  { name: 'Reading', slug: 'reading', county: 'Berkshire', lat: 51.4543, lng: -0.9781 },
  { name: 'Windsor', slug: 'windsor', county: 'Berkshire', lat: 51.4839, lng: -0.6044 },
  { name: 'Ascot', slug: 'ascot', county: 'Berkshire', lat: 51.4085, lng: -0.6705 },
  { name: 'Basingstoke', slug: 'basingstoke', county: 'Hampshire', lat: 51.2629, lng: -1.0866 },
  { name: 'Hungerford', slug: 'hungerford', county: 'Berkshire', lat: 51.4137, lng: -1.5164 },
  { name: 'Winchester', slug: 'winchester', county: 'Hampshire', lat: 51.0632, lng: -1.308 },
  { name: 'Andover', slug: 'andover', county: 'Hampshire', lat: 51.2063, lng: -1.4791 },
  { name: 'Oxford', slug: 'oxford', county: 'Oxfordshire', lat: 51.7520, lng: -1.2577 },
  { name: 'Didcot', slug: 'didcot', county: 'Oxfordshire', lat: 51.6060, lng: -1.2413 },
  { name: 'Wantage', slug: 'wantage', county: 'Oxfordshire', lat: 51.5896, lng: -1.4298 },
  { name: 'Marlborough', slug: 'marlborough', county: 'Wiltshire', lat: 51.4221, lng: -1.7282 },
  { name: 'Wokingham', slug: 'wokingham', county: 'Berkshire', lat: 51.4116, lng: -0.8390 },
  { name: 'Bracknell', slug: 'bracknell', county: 'Berkshire', lat: 51.4160, lng: -0.7526 },
  { name: 'Abingdon', slug: 'abingdon', county: 'Oxfordshire', lat: 51.6708, lng: -1.2828 },
  { name: 'Maidenhead', slug: 'maidenhead', county: 'Berkshire', lat: 51.5224, lng: -0.7202 }
];

export const LOCATION_CONTENT: Record<string, LocationPageData> = {
  'windsor': {
    slug: 'windsor',
    name: 'Windsor',
    metaDescription: 'Solar Panels Windsor & Eton. Heritage specialist solar installers for SL4. In-roof systems and Tesla Powerwall certified.',
    heroImage: 'IMG_3256.jpeg', // Using a nice roof image
    introTitle: 'Renewable Energy for Royal Berkshire',
    introText: [
      'Windsor combines historic charm with modern living. We specialize in solar installations that respect the unique character of properties in Windsor, Eton, and Old Windsor.',
      'From Grade II listed buildings to modern executive homes in St. Leonards Hill, we design systems that deliver performance without compromising aesthetics.'
    ],
    extendedContent: `
      <h2>Solar in a Historic Setting</h2>
      <p>Installing solar in Windsor requires a delicate touch. We are experts in <strong>Integrated In-Roof Solar</strong> which sits flush with the tiles, mimicking the roofline. This is often the preferred choice for planning officers in conservation areas.</p>

      <h3>Solar Carports for Windsor Homes</h3>
      <p>Many Windsor properties have limited roof space due to dormers or gables, but ample driveways. A <a href="#/services/solar-carports">timber solar carport</a> is a popular addition, providing shelter for vehicles and a perfect mounting surface for solar panels, often under Permitted Development rights.</p>

      <h3>Battery Storage</h3>
      <p>Maximize your independence from the grid. We install the <strong>Tesla Powerwall 3</strong>, which offers whole-home backup—essential for maintaining security systems and electric gates during power outages.</p>
    `,
    localLandmarks: ['Windsor Castle', 'The Long Walk', 'Legoland Windsor'],
    solarPotential: 'Good. We use 3D modelling to analyze shading from mature trees common in Windsor avenues.',
    planningAdvice: 'We have extensive experience dealing with RBWM planning specifically for solar in conservation zones.',
    faq: [
      { question: 'Can I put solar on a listed building?', answer: 'It is possible but requires Listed Building Consent. We can assist with the application process, often recommending ground mounts or outbuilding installs.' },
      { question: 'Do you cover Eton Wick?', answer: 'Yes, we cover all of SL4 including Eton, Datchet, and Old Windsor.' }
    ]
  },
  // ... (Other locations retained)
  'ascot': {
    slug: 'ascot',
    name: 'Ascot',
    metaDescription: 'Solar Panels Ascot & Sunningdale. Premium aesthetic solar carports and Tesla Powerwall installers for SL5.',
    heroImage: 'IMG_3254.jpeg',
    introTitle: 'Luxury Solar for Ascot Homes',
    introText: [
      'Ascot and Sunningdale represent some of the finest properties in Berkshire. We understand that for homeowners here, energy independence cannot come at the cost of aesthetics.',
      'We specialize in high-end, discreet solar installations, including in-roof systems and premium solar carports.'
    ],
    extendedContent: `
      <h2>Premium Energy Solutions for SL5</h2>
      <p>Residents in <strong>Sunninghill</strong>, <strong>Cheapside</strong>, and Ascot demand the best. We install top-tier technology like the <strong>Tesla Powerwall 3</strong> and <strong>SunPower Maxeon</strong> panels, known for their superior performance and sleek black appearance.</p>

      <h3>Solar Carports in Ascot</h3>
      <p>For properties with large driveways or multiple vehicles, a <a href="#/services/solar-carports">solar carport</a> is an elegant solution. We design bespoke timber or powder-coated aluminium structures that shelter your luxury vehicles while generating the power to charge them. This is a popular choice for gated estates where roof space on the main house might be limited by complex architecture.</p>

      <h3>Hidden Solar for High Value Homes</h3>
      <p>We are experts in "invisible" energy. From routing cables through internal risers to using low-profile mounting systems that hide behind parapet walls on flat roof extensions, we ensure the technology serves you without dominating your home's visual appeal.</p>
    `,
    localLandmarks: ['Ascot Racecourse', 'Windsor Great Park', 'Sunningdale Golf Club'],
    solarPotential: 'Excellent. The large plots in Ascot often mean less shading from neighbours.',
    planningAdvice: 'We are experienced with RBWM planning requirements, particularly for carports and conservation areas.',
    faq: [
      { question: 'Do you install Tesla Powerwalls?', answer: 'Yes, we are Certified Tesla Installers and can provide the Powerwall 3.' },
      { question: 'Can you build a custom carport?', answer: 'Yes, we work with specialist framers to build carports that match your property style.' }
    ]
  },
  // Keep other existing location data
  'newbury': {
    slug: 'newbury',
    name: 'Newbury',
    metaDescription: 'Solar Panel Installers Newbury. MCS Certified electricians for RG14 & RG20. Experts in Tesla Powerwall, Zappi EV Chargers & Battery Storage.',
    heroImage: 'IMG_0692.jpeg',
    introTitle: 'Local Solar Experts for West Berkshire',
    introText: [
      'Newbury is our home turf. From the historic streets of Donnington to the modern developments at the Racecourse, we understand the specific energy needs of Newbury homeowners.',
      'West Berkshire Council declared a Climate Emergency in 2019, and we are proud to help local residents in Wash Common, Speen, and Greenham transition to clean energy.'
    ],
    extendedContent: `
      <h2>Tailored Solar Solutions for RG14</h2>
      <p>Newbury has a diverse range of property types, and a "one size fits all" approach doesn't work here. We offer bespoke designs that respect the character of your home while maximizing generation.</p>

      <h3>Repairs & Maintenance</h3>
      <p>Newbury was an early adopter of solar. Many systems installed in 2011/2012 are now needing attention. Whether it's an inverter failure or potential pigeon damage, our <a href="#/services/solar-repairs">solar repair service</a> can get your system generating at full capacity again.</p>

      <h3>EV Charger Installation in Newbury</h3>
      <p>With electric vehicle ownership soaring in West Berkshire, home charging is essential. We are certified installers of the <a href="#/product/myenergi-zappi">Myenergi Zappi</a> and Tesla Wall Connector.</p>
    `,
    localLandmarks: ['Newbury Racecourse', 'Highclere Castle', 'Kennet & Avon Canal'],
    solarPotential: 'Excellent. Newbury receives above-average solar irradiance for the UK. South-facing roofs can generate 950kWh per kW installed.',
    planningAdvice: 'Permitted Development applies to most unlisted homes. We offer full planning support for Listed Buildings in the town centre.',
    faq: [
      { question: 'Where are you based?', answer: 'Our HQ is in Thatcham, just 3 miles from Newbury town centre.' },
      { question: 'Can you fix broken panels?', answer: 'Yes, we can source replacements for damaged panels or upgrade your system.' }
    ]
  },
};

export const COST_GUIDE_CONTENT: CostGuideData = {
  title: "Solar Panel Costs 2025: Comprehensive Guide",
  lastUpdated: "January 2025",
  sections: [],
  faqs: []
};

export const ABOUT_CONTENT: AboutPageData = {
  title: "About Carey Electrical",
  heroImage: 'IMG_3254.jpeg',
  story: [],
  values: [],
  teamStats: []
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  { term: 'kW (Kilowatt)', definition: 'A measure of power. The rate at which energy is generated or used at a specific moment. A 4kW solar system generates 4kW of power at peak performance.', category: 'Technical' },
  { term: 'kWh (Kilowatt-hour)', definition: 'A measure of energy. Using 1kW of power for 1 hour equals 1kWh. This is the unit you see on your electricity bill.', category: 'Technical' },
  { term: 'Inverter', definition: 'The device that converts Direct Current (DC) electricity generated by solar panels into Alternating Current (AC) electricity used by your home appliances.', category: 'Technical' },
  { term: 'String Inverter', definition: 'A standard inverter setup where panels are linked in a series. If one panel is shaded, it can affect the performance of the whole string.', category: 'Technical' },
  { term: 'Micro-Inverter', definition: 'Small inverters attached to individual panels, allowing each to operate independently. Ideal for complex or shaded roofs.', category: 'Technical' },
  { term: 'Optimiser', definition: 'A device (like SolarEdge) attached to a panel to maximize its output before sending DC power to a central inverter. Mitigates shading issues.', category: 'Technical' },
  { term: 'DNO (Distribution Network Operator)', definition: 'The company responsible for the power lines and infrastructure in your area (e.g., SSEN in Berkshire). We must apply to them to connect your solar system.', category: 'Regulatory' },
  { term: 'G98 / G99', definition: 'Engineering standards for connecting to the grid. G98 is for small systems (<3.68kW per phase), G99 is for larger systems.', category: 'Regulatory' },
  { term: 'SEG (Smart Export Guarantee)', definition: 'A government-backed initiative requiring energy suppliers to pay homeowners for renewable energy they export back to the grid.', category: 'Financial' },
  { term: 'MCS (Microgeneration Certification Scheme)', definition: 'The standards organization for solar. You need an MCS certificate to claim SEG payments. Carey Electrical is fully MCS certified.', category: 'Regulatory' },
  { term: 'SOC (State of Charge)', definition: 'The percentage of energy currently held in your battery, relative to its capacity.', category: 'Technical' },
  { term: 'DOD (Depth of Discharge)', definition: 'The percentage of battery capacity that has been discharged. Lithium batteries can typically handle 90-100% DOD safely.', category: 'Technical' },
  { term: 'EPS (Emergency Power Supply)', definition: 'A feature allowing a battery system to provide power to dedicated circuits during a grid power cut.', category: 'Technical' },
  { term: 'MPPT (Maximum Power Point Tracker)', definition: 'Electronic DC-DC converter that optimizes the match between the solar array and the battery bank or utility grid.', category: 'Technical' }
];

export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'domestic-solar': {
    id: 'domestic-solar',
    title: 'Domestic Solar Panels',
    subtitle: 'Generate your own clean electricity and reduce your bills.',
    heroImage: 'IMG_0758.jpeg',
    overview: 'Our domestic solar PV systems are designed to maximize generation based on your specific roof geometry and usage patterns. We use premium Tier-1 all-black panels for a sleek look that enhances your property value.',
    benefits: [
      { title: 'Lower Bills', desc: 'Reduce electricity costs by up to 70%.', icon: 'PoundSterling' },
      { title: 'Energy Independence', desc: 'Rely less on the grid.', icon: 'ShieldCheck' },
      { title: 'Earn Money', desc: 'Get paid for excess energy via SEG.', icon: 'TrendingUp' },
      { title: 'Increase Value', desc: 'Solar improves EPC ratings.', icon: 'Home' }
    ],
    products: [
       {
         id: 'jinko-tiger',
         name: 'Jinko Tiger Neo',
         brand: 'Jinko Solar',
         image: 'IMG_0758.jpeg',
         features: ['N-Type Technology', 'All-Black Aesthetics', 'High Efficiency'],
         description: 'The Tiger Neo N-type module adopts TOPCon technology for higher efficiency and lower degradation.',
         techSpecs: { 'Power Output': '440W', 'Efficiency': '22.8%', 'Warranty': '25 Years' }
       }
    ],
    faqs: [
      { question: 'Do I need planning permission?', answer: 'Most domestic installations are Permitted Development, so no planning is required unless you live in a listed building.' },
      { question: 'How long does installation take?', answer: 'A typical residential system takes 1-2 days to install.' }
    ],
    galleryImages: ['IMG_0692.jpeg', 'IMG_0758.jpeg', 'IMG_3256.jpeg']
  },
  'integrated-solar': {
    id: 'integrated-solar',
    title: 'Integrated In-Roof Solar',
    subtitle: 'The aesthetic choice for new builds and re-roofing.',
    heroImage: 'IMG_1023.jpeg',
    overview: 'For a seamless finish that blends perfectly with your home, choose Integrated (In-Roof) Solar. The panels replace the tiles rather than sitting above them, creating a flush, watertight, and stunningly modern roofline.',
    extendedContent: `
      <h2>The "Tesla Roof" Look for Less</h2>
      <p>Integrated solar systems, like the <strong>GSE Integration</strong> or <strong>Viridian Clearline Fusion</strong>, offer the ultimate in curb appeal. By sitting flush with the roof tiles, they avoid the "bolted-on" industrial look of traditional solar.</p>
      <h3>Perfect for Re-Roofing</h3>
      <p>If you are planning to replace your roof, integrated solar is a no-brainer. Because the panels act as the roof covering, you save money by not purchasing slate or clay tiles for the area covered by the array. This often makes the net cost of solar surprisingly low.</p>
      <h3>New Build Compliance</h3>
      <p>For self-builders and developers, in-roof solar is the standard for meeting Part L regulations without compromising the architectural vision of the property.</p>
    `,
    benefits: [
      { title: 'Sleek Look', desc: 'Flush with roof tiles.', icon: 'LayoutGrid' },
      { title: 'Save on Tiles', desc: 'Panels act as roof cover.', icon: 'PoundSterling' },
      { title: 'Wind Resistant', desc: 'No wind lift issues.', icon: 'Wind' }
    ],
    products: [],
    faqs: [
      { question: 'Does it overheat?', answer: 'No, modern in-roof systems have engineered airflow channels to ensure panels stay cool and efficient.' },
      { question: 'Is it waterproof?', answer: 'Yes, the interlocking flashing kits are designed to be 100% weather-tight, tested to extreme conditions.' }
    ],
    galleryImages: ['IMG_1023.jpeg', 'IMG_3256.jpeg']
  },
  'agricultural-solar': {
    id: 'agricultural-solar',
    title: 'Agricultural Solar Systems',
    subtitle: 'Powering farms and rural businesses.',
    heroImage: 'IMG_3045.jpeg',
    overview: 'Farms have two things in abundance: roof space and high energy demand. We specialize in robust, high-yield solar systems for barns, grain stores, and ground mounts that turn these assets into profit centers.',
    extendedContent: `
      <h2>Reduce Input Costs</h2>
      <p>With electricity prices squeezing margins, solar provides a way to fix your energy costs for 25+ years. Solar is perfect for powering:</p>
      <ul>
        <li>Grain drying and ventilation systems.</li>
        <li>Cold storage and refrigeration.</li>
        <li>Milking parlours and robotic feeders.</li>
        <li>Electric farm vehicles and machinery.</li>
      </ul>
      <h3>Durable & Robust</h3>
      <p>We understand the farm environment. We use ammonia-resistant panels and IP66 rated inverters that can withstand dust, moisture, and livestock environments.</p>
      <h3>Grid Connection Experts</h3>
      <p>We handle the complex G99 applications required for large export connections, ensuring you can sell your excess power back to the grid at the best rates.</p>
    `,
    benefits: [
      { title: 'Lower Overheads', desc: 'Cut grain drying costs.', icon: 'TrendingDown' },
      { title: 'Asset Value', desc: 'Utilize empty roof space.', icon: 'Building' },
      { title: 'Tax Relief', desc: 'Capital allowances.', icon: 'FileText' }
    ],
    products: [],
    faqs: [
      { question: 'Do you work with 3-phase?', answer: 'Yes, almost all our agricultural installs are 3-phase, ranging from 20kW to 200kW+.' },
      { question: 'Can you ground mount in a field?', answer: 'Yes, we offer pile-driven ground mount systems that don\'t require concrete foundations, preserving soil health.' }
    ],
    galleryImages: ['IMG_3045.jpeg', 'IMG_3047.jpeg']
  },
  'solar-carports': {
    id: 'solar-carports',
    title: 'Solar Carports',
    subtitle: 'Generate power from your parking space.',
    heroImage: 'IMG_3045.jpeg', // Using ground mount image as proxy for carport structure
    overview: 'A solar carport is the ultimate dual-purpose structure. It protects your vehicle from the elements while generating clean energy to power it. We design and install bespoke timber or aluminium carports tailored to your driveway.',
    extendedContent: `
      <h2>The Perfect Partner for Electric Vehicles</h2>
      <p>If your roof is unsuitable for solar due to shading or orientation, a carport is a fantastic alternative. It turns your driveway into a power station.</p>
      <h3>Bespoke Design</h3>
      <p>We don't do "off the shelf" plastic kits. We work with structural engineers to create <strong>oak-framed</strong> or <strong>powder-coated aluminium</strong> structures that enhance the look of your property. The solar panels form the waterproof roof, creating a seamless aesthetic.</p>
      <h3>Integrated Charging</h3>
      <p>We integrate EV chargers (like the Zappi) directly into the carport legs, keeping cables tidy and ensuring you can charge on 100% green energy as soon as you park up.</p>
    `,
    benefits: [
      { title: 'Maximize Space', desc: 'Use driveway for generation.', icon: 'Maximize' },
      { title: 'Vehicle Protection', desc: 'Shelter from sun & rain.', icon: 'Umbrella' },
      { title: 'Perfect Angle', desc: 'Optimized for solar yield.', icon: 'Compass' }
    ],
    products: [],
    faqs: [
      { question: 'Do I need planning permission?', answer: 'Often yes, as it is a permanent structure. We can provide elevation drawings to assist with your application.' },
      { question: 'How many panels fit?', answer: 'A double carport typically fits 12-15 panels, generating around 5-6kW.' }
    ],
    galleryImages: ['IMG_3045.jpeg']
  },
  'flat-roof-solar': {
    id: 'flat-roof-solar',
    title: 'Flat Roof Solar Systems',
    subtitle: 'Specialist ballasted mounting for flat roofs.',
    heroImage: 'IMG_3039.jpeg',
    overview: 'Flat roofs on extensions, garages, or commercial buildings offer excellent solar potential. We use specialist aerodynamic mounting systems that are weighed down (ballasted) rather than bolted through the roof, preserving your waterproofing.',
    extendedContent: `
      <h2>Non-Penetrating Installation</h2>
      <p>The biggest fear with flat roofs is leaks. That's why we use the <strong>Van der Valk</strong> or <strong>K2 Dome</strong> systems. These rely on wind deflectors and concrete ballast blocks to stay secure, meaning we do <strong>not</strong> drill holes in your EPDM or felt roof.</p>
      <h3>East-West Orientation</h3>
      <p>On a flat roof, we often install panels in an East-West "concertina" layout. This allows us to fit more panels in the available space compared to south-facing rows (which need large gaps to prevent self-shading). It also spreads generation more evenly throughout the day.</p>
      <h3>Hidden from View</h3>
      <p>Because the panels are tilted at only 10-15 degrees, they are often completely invisible from the ground, making them an ideal choice for conservation areas.</p>
    `,
    benefits: [
      { title: 'No Leaks', desc: 'Non-penetrating system.', icon: 'Shield' },
      { title: 'Wind Tested', desc: 'Aerodynamic design.', icon: 'Wind' },
      { title: 'High Density', desc: 'Maximize roof usage.', icon: 'Grid' }
    ],
    products: [],
    faqs: [
      { question: 'Is my roof strong enough?', answer: 'We perform a structural calculation to ensure your roof can take the weight of the ballast (typically 20-30kg/m²).' },
      { question: 'Can I see the panels?', answer: 'Usually not from the garden, as the low profile keeps them below the parapet wall.' }
    ],
    galleryImages: ['IMG_3039.jpeg', 'IMG_3254.jpeg']
  },
  'solar-repairs': {
    id: 'solar-repairs',
    title: 'Solar Panel Repairs',
    subtitle: 'Expert diagnostics and repair for faulty solar systems.',
    heroImage: 'IMG_3042.jpeg',
    overview: 'Is your solar system showing a red light? Are your bills higher than expected? We provide comprehensive diagnostic and repair services for all types of solar PV systems, even if we didn\'t install them originally.',
    extendedContent: `
      <h2>Common Solar Faults We Fix</h2>
      <p>Solar systems are robust, but faults can occur over time. We specialize in diagnosing complex issues that general electricians may miss.</p>
      <h3>Inverter Faults</h3>
      <p>The most common failure point. We can diagnose error codes on brands like SMA, Fronius, Solis, and SolarEdge. If repair isn't possible, we offer compatible replacement units.</p>
      <h3>Isolation Errors (RISO Low)</h3>
      <p>This dangerous fault occurs when moisture gets into the DC cabling, often due to squirrel damage or degraded connectors. We use specialist insulation resistance testers to locate the exact fault on the roof.</p>
      <h3>Storm Damage</h3>
      <p>Cracked panels from hail or falling debris can be dangerous. We safely remove damaged panels and source matching replacements to get your array back to full power.</p>
    `,
    benefits: [
      { title: 'Fast Response', desc: 'Local engineers available.', icon: 'Zap' },
      { title: 'All Brands', desc: 'We fix SMA, Solis & more.', icon: 'Settings' },
      { title: 'Safety First', desc: 'Fully insured & qualified.', icon: 'ShieldCheck' }
    ],
    products: [],
    faqs: [
      { question: 'Do you charge a call-out fee?', answer: 'We charge a standard diagnostic fee which includes the first hour of investigation.' },
      { question: 'Can you fix systems you didn\'t install?', answer: 'Yes, we are happy to take on maintenance and repair for orphaned systems.' }
    ],
    galleryImages: ['IMG_3042.jpeg']
  },
  'commercial-ev': {
    id: 'commercial-ev',
    title: 'Commercial EV Charging',
    subtitle: 'Scalable workplace charging solutions.',
    heroImage: 'IMG_3254.jpeg',
    overview: 'Attract top talent and electrify your fleet with our commercial EV charging solutions. We design scalable systems for offices, hotels, and depots, fully compliant with OZEV regulations.',
    extendedContent: `
      <h2>Power Your Fleet</h2>
      <p>Transitioning to an electric fleet saves money and reduces carbon. However, charging infrastructure can be a headache. We handle everything from DNO applications to groundworks.</p>
      <h3>Workplace Charging Scheme (WCS)</h3>
      <p>As OZEV approved installers, we can help you claim grants to reduce the cost of installation. This is available for businesses, charities, and public sector organizations.</p>
      <h3>Load Balancing & Monetization</h3>
      <p>Worried about blowing the main fuse? Our systems use dynamic load balancing to protect your supply. You can also set tariffs to charge employees or visitors for usage, turning your car park into a revenue stream.</p>
    `,
    benefits: [
      { title: 'OZEV Grants', desc: 'Claim government funding.', icon: 'PoundSterling' },
      { title: 'RFID Access', desc: 'Control who charges.', icon: 'Key' },
      { title: 'Back Office', desc: 'Monitor usage & billing.', icon: 'BarChart3' }
    ],
    products: [],
    faqs: [
      { question: 'Can visitors pay to charge?', answer: 'Yes, we can install units with QR codes for instant payment via app.' },
      { question: 'Do you do groundworks?', answer: 'Yes, we handle trenching, plinths, and making good of car park surfaces.' }
    ],
    galleryImages: ['IMG_3254.jpeg']
  },
  'solar-removal': {
    id: 'solar-removal',
    title: 'Solar Removal & Reinstall',
    subtitle: 'Expert removal service for roof repairs and renovations.',
    heroImage: 'IMG_3039.jpeg',
    overview: 'If you need to repair or replace your roof, your solar panels must be removed safely by a qualified electrician. We offer a comprehensive removal, storage, and reinstallation service to ensure your system continues to perform perfectly after your roof works.',
    extendedContent: `
      <h2>Don't Let Roofers Remove Your Panels</h2>
      <p>Solar panels involve high voltage DC electricity. Incorrect disconnection can cause dangerous arcs and fire risks. It also invalidates your MCS certificate and warranty.</p>
      <h3>Our Process</h3>
      <ol>
        <li><strong>Safety Test:</strong> We test the system before removal to benchmark performance.</li>
        <li><strong>Safe Removal:</strong> Panels are disconnected, removed, and stored safely on site or at our facility.</li>
        <li><strong>Re-Installation:</strong> Once your roofer is finished, we re-fit the mounting rails (often replacing old hooks with modern ones) and panels.</li>
        <li><strong>Commissioning:</strong> We re-test the system and provide a new electrical certificate.</li>
      </ol>
      <h3>Bird Proofing Opportunity</h3>
      <p>Reinstallation is the perfect time to add bird proofing mesh, as access is already in place.</p>
    `,
    benefits: [
      { title: 'MCS Certified', desc: 'Maintain your Feed-in Tariff.', icon: 'ShieldCheck' },
      { title: 'Safe Storage', desc: 'We keep your panels safe.', icon: 'Box' },
      { title: 'System Check', desc: 'Full health check included.', icon: 'Activity' }
    ],
    products: [],
    faqs: [
      { question: 'Can you work with my roofer?', answer: 'Yes, we coordinate directly with your roofing contractor to minimize scaffolding time.' },
      { question: 'Will I lose my Feed-in Tariff?', answer: 'No, provided the system is re-commissioned by an MCS installer like us.' }
    ],
    galleryImages: ['IMG_3039.jpeg']
  },
  'new-builds': {
    id: 'new-builds',
    title: 'New Build Solar',
    subtitle: 'Integrated solar solutions for developers and self-builders.',
    heroImage: 'IMG_3256.jpeg',
    overview: 'Meeting Part L building regulations is easier with solar. We work with architects and developers to design integrated solar systems that are aesthetically pleasing and cost-effective.',
    extendedContent: `
      <h2>Part L Compliance Made Easy</h2>
      <p>New building regulations require significant on-site renewable generation. Solar PV is often the most cost-effective way to pass SAP calculations.</p>
      <h3>In-Roof Integrated Systems</h3>
      <p>For new roofs, we recommend <strong>GSE In-Roof</strong> systems. The panels replace the tiles, sitting flush with the roofline. This looks stunning and saves money on roofing materials (tiles).</p>
      <h3>For Self-Builders</h3>
      <p>Building your dream home? We can design a "whole house" energy system including Solar, Battery, EV Charging, and Heat Pump integration, all controlled from a single app.</p>
    `,
    benefits: [
      { title: 'Part L Ready', desc: 'Meet SAP requirements.', icon: 'FileText' },
      { title: 'Aesthetics', desc: 'Flush in-roof finish.', icon: 'Layout' },
      { title: 'Trade Pricing', desc: 'Volume discounts for developers.', icon: 'PoundSterling' }
    ],
    products: [],
    faqs: [
      { question: 'When should we contact you?', answer: 'As early as possible! Ideally during the design phase so we can optimize roof orientation.' },
      { question: 'Do you offer first and second fix?', answer: 'Yes, we fit cabling during first fix and panels/inverters during second fix.' }
    ],
    galleryImages: ['IMG_3256.jpeg', 'IMG_0692.jpeg']
  },
  'commercial-solar': {
    id: 'commercial-solar',
    title: 'Commercial Solar Installation',
    subtitle: 'Power your business with sustainable energy.',
    heroImage: 'IMG_3254.jpeg',
    overview: 'Commercial solar installations offer a high return on investment and safeguard your business against rising energy costs. We specialize in large-scale roof arrays for warehouses, offices, and factories across Berkshire.',
    extendedContent: `
      <h2>The Business Case for Solar PV</h2>
      <p>For businesses in Newbury, Reading, and Basingstoke, energy is a significant overhead. A commercial solar array turns your roof into a revenue generator.</p>
      <h3>Solar for Schools & Education</h3>
      <p>We work with schools to install systems that reduce budget pressure and provide a learning resource for students. The dashboard can be displayed in reception to show real-time carbon savings.</p>
      <h3>Agricultural Solar</h3>
      <p>Farmers have large roof spaces on barns and sheds. We install robust systems that can withstand the rural environment, reducing the cost of grain drying and cold storage.</p>
      <h3>Super-Deduction & Capital Allowances</h3>
      <p>The UK government offers generous tax incentives for businesses investing in green technology. You may be able to claim back up to 100% of the cost of the system against your corporation tax bill in the first year.</p>
    `,
    benefits: [
      { title: 'High ROI', desc: 'Typical payback of 3-5 years.', icon: 'TrendingUp' },
      { title: 'Carbon Neutral', desc: 'Meet your CSR goals.', icon: 'Leaf' },
      { title: 'Tax Benefits', desc: 'Capital allowances available.', icon: 'PoundSterling' }
    ],
    products: [],
    faqs: [
        { question: 'Can we operate during installation?', answer: 'Yes, we minimize disruption and can work out of hours if needed.' },
        { question: 'Do you offer maintenance contracts?', answer: 'Yes, we offer O&M (Operations & Maintenance) packages for commercial arrays.' }
    ],
    galleryImages: ['IMG_3254.jpeg', 'IMG_3042.jpeg']
  },
  'battery-storage': {
    id: 'battery-storage',
    title: 'Battery Storage Systems',
    subtitle: 'Store your solar energy for use day and night.',
    heroImage: 'IMG_2864.jpeg',
    overview: 'Battery storage allows you to use solar energy when the sun goes down, or charge from the grid during cheap overnight tariffs. We are certified installers of Tesla Powerwall, Myenergi Libbi, and GivEnergy systems.',
    benefits: [
      { title: 'Use Solar at Night', desc: 'Increase self-consumption to 90%.', icon: 'Moon' },
      { title: 'Backup Power', desc: 'Keep lights on during power cuts.', icon: 'Zap' },
      { title: 'Smart Tariffs', desc: 'Charge cheap, discharge peak.', icon: 'Clock' }
    ],
    products: [
        {
         id: 'tesla-powerwall',
         name: 'Tesla Powerwall 3',
         brand: 'Tesla',
         image: 'IMG_3962.jpeg',
         features: ['13.5kWh Capacity', 'Built-in Inverter', 'Backup Gateway'],
         description: 'The gold standard in home battery storage.',
         techSpecs: { 'Capacity': '13.5kWh', 'Power': '11.5kW', 'Warranty': '10 Years' }
       },
       {
         id: 'myenergi-libbi',
         name: 'Myenergi Libbi',
         brand: 'Myenergi',
         image: 'IMG_2864.jpeg',
         features: ['Modular Design', 'Ecosystem Integration', 'UK Support'],
         description: 'Smart battery storage that talks to your Zappi EV charger.',
         techSpecs: { 'Capacity': '5-20kWh', 'Power': '5kW', 'Warranty': '10 Years' }
       }
    ],
    faqs: [
        { question: 'Can I add a battery to existing panels?', answer: 'Yes, we can retrofit batteries to almost any existing solar system.' }
    ],
    galleryImages: ['IMG_2864.jpeg', 'IMG_2857.jpeg', 'IMG_3962.jpeg']
  },
  'bird-proofing': {
    id: 'bird-proofing',
    title: 'Solar Panel Bird Proofing',
    subtitle: 'Protect your investment from pigeons and pests.',
    heroImage: 'IMG_0692.jpeg',
    overview: 'Pigeons love nesting under solar panels. This can lead to reduced efficiency, damage to cables, and messy guano buildup. We install robust, non-intrusive mesh systems to keep them out for good.',
    extendedContent: `
      <h2>Why Bird Proofing is Essential</h2>
      <p>The gap between your solar panels and the roof is warm and sheltered—perfect for nesting birds. However, this causes serious problems:</p>
      <ul>
        <li><strong>Hotspots:</strong> Bird droppings (guano) create shading on cells, leading to hotspots and permanent panel damage.</li>
        <li><strong>Fire Risk:</strong> Dry nesting material (twigs, grass) under panels is a significant fire hazard, especially near DC cables.</li>
        <li><strong>Reduced Yield:</strong> A dirty system generates less power.</li>
      </ul>
      <h3>Our Solution</h3>
      <p>We use a specialized <strong>galvanized steel mesh system</strong> that clips directly onto the panel frame. We do NOT drill into your panels (which would void your warranty). The black PVC coating ensures the mesh is almost invisible from the ground.</p>
    `,
    benefits: [
      { title: 'Protect Warranty', desc: 'No drilling into panels.', icon: 'ShieldCheck' },
      { title: 'Stop Noise', desc: 'No more scratching on the roof.', icon: 'VolumeX' },
      { title: 'Maintain Yield', desc: 'Keep panels clean.', icon: 'Sun' }
    ],
    products: [],
    faqs: [
      { question: 'Will it damage my panels?', answer: 'No, we use specialized clips that attach to the frame lip without any drilling or adhesive.' },
      { question: 'Can you clean the panels too?', answer: 'Yes, we typically perform a full clean and biocide treatment before installing the mesh.' }
    ],
    galleryImages: ['IMG_0692.jpeg', 'IMG_3256.jpeg']
  },
  'maintenance': {
    id: 'maintenance',
    title: 'Solar Panel Cleaning & Maintenance',
    subtitle: 'Maximize your generation with professional care.',
    heroImage: 'IMG_0758.jpeg',
    overview: 'Solar panels are generally low maintenance, but they are not "no maintenance". Dirt, lichen, and loose connections can cost you hundreds in lost generation. We offer comprehensive health checks and cleaning.',
    extendedContent: `
      <h2>Annual System Health Check</h2>
      <p>Just like your boiler or car, your solar system needs an occasional check-up. Our MCS certified engineers perform a 20-point inspection including:</p>
      <ul>
        <li><strong>Inverter Analysis:</strong> Checking error logs and firmware updates.</li>
        <li><strong>DC String Testing:</strong> Ensuring voltages and insulation resistance are safe.</li>
        <li><strong>AC Isolator Check:</strong> Tightening connections to prevent thermal damage.</li>
      </ul>
      <h3>Professional Cleaning</h3>
      <p>Rain does wash away some dust, but it doesn't remove bird droppings, lichen, or pollen sap. We use <strong>pure water fed pole systems</strong> to clean your panels without using harsh chemicals that could damage the anti-reflective coating.</p>
    `,
    benefits: [
      { title: 'Boost Output', desc: 'Cleaning can improve yield by 15%.', icon: 'TrendingUp' },
      { title: 'Safety Check', desc: 'Identify loose connections early.', icon: 'Activity' },
      { title: 'Inverter Life', desc: 'Clean fans & update firmware.', icon: 'Cpu' }
    ],
    products: [],
    faqs: [
      { question: 'How often should I clean them?', answer: 'We recommend a professional clean every 1-2 years, depending on the pitch of your roof and local tree cover.' },
      { question: 'Do you check the battery too?', answer: 'Yes, if you have a battery, we check its State of Health (SOH) and calibration.' }
    ],
    galleryImages: ['IMG_0758.jpeg', 'IMG_3042.jpeg']
  },
  'ground-mount': {
    id: 'ground-mount',
    title: 'Ground Mount Systems',
    subtitle: 'Utilize your land for maximum energy generation.',
    heroImage: 'IMG_3045.jpeg',
    overview: 'If roof space is limited but you have land, a ground mount system is an excellent alternative. We offer various mounting solutions including screw piles and concrete ballasts.',
    benefits: [
      { title: 'Perfect Angle', desc: 'Oriented for maximum yield.', icon: 'Compass' },
      { title: 'Easy Maintenance', desc: 'Accessible for cleaning.', icon: 'Wrench' },
      { title: 'Scaleable', desc: 'Not limited by roof size.', icon: 'Maximize' }
    ],
    products: [],
    faqs: [
        { question: 'Do I need planning for ground mount?', answer: 'Often yes, especially for arrays larger than 9m2. We can assist with the application.' }
    ],
    galleryImages: ['IMG_3045.jpeg', 'IMG_3047.jpeg']
  },
  'off-grid': {
    id: 'off-grid',
    title: 'Off-Grid Systems',
    subtitle: 'Complete energy independence for remote locations.',
    heroImage: 'IMG_1023.jpeg',
    overview: 'For locations without a grid connection, or for those seeking total autonomy. We design robust off-grid systems using Victron Energy equipment for reliability.',
    benefits: [
      { title: 'No Bills', desc: 'Total freedom from utility companies.', icon: 'WifiOff' },
      { title: 'Reliability', desc: 'Power where the grid cannot reach.', icon: 'Shield' }
    ],
    products: [],
    faqs: [
        { question: 'Can I run a whole house off-grid?', answer: 'Yes, with sufficient solar and battery capacity, plus a backup generator for winter.' }
    ],
    galleryImages: ['IMG_1023.jpeg']
  },
  'ev-charging': {
    id: 'ev-charging',
    title: 'EV Charger Installation',
    subtitle: 'Drive on sunshine with smart home charging.',
    heroImage: 'IMG_2864.jpeg',
    overview: 'Home charging is the most convenient and cost-effective way to power your electric vehicle. We install smart chargers that integrate seamlessly with your solar panels, allowing you to charge for free using your own clean energy.',
    extendedContent: `
      <h2>The Perfect Partner for Solar</h2>
      <p>If you have solar panels, a standard "dumb" charger will just pull power from the grid when you plug in. A <strong>smart solar charger</strong> like the Myenergi Zappi monitors your home's generation. If you are generating 2kW of excess solar, it sends exactly 2kW to your car.</p>
      <h3>Why Choose a Smart Charger?</h3>
      <ul>
        <li><strong>Eco Mode:</strong> Only charge when green energy is available.</li>
        <li><strong>Fast Mode:</strong> Charge at full speed (7kW) using grid power if you are in a rush.</li>
        <li><strong>Grid Integration:</strong> Works with smart tariffs like Octopus Intelligent to charge cheaply overnight.</li>
      </ul>
      <h3>OZEV Approved Installers</h3>
      <p>We are OZEV approved, meaning we meet the strict safety and quality standards required for government grants (where available for landlords/commercial).</p>
    `,
    benefits: [
      { title: 'Free Miles', desc: 'Charge from excess solar.', icon: 'Sun' },
      { title: 'Smart App', desc: 'Control charging from your phone.', icon: 'Smartphone' },
      { title: 'Future Proof', desc: 'Ready for smart grid tariffs.', icon: 'Wifi' }
    ],
    products: [
      {
         id: 'myenergi-zappi',
         name: 'Myenergi Zappi',
         brand: 'Myenergi',
         image: 'IMG_2864.jpeg', // Fallback to Libbi img for demo if Zappi specific not available
         features: ['Solar Diversion', 'No Earth Rod Needed', '3 Charging Modes'],
         description: 'The world\'s #1 solar-compatible EV charger. Made in Britain.',
         techSpecs: { 'Power': '7kW', 'Warranty': '3 Years', 'Connection': 'Tethered/Socket' }
      }
    ],
    faqs: [
      { question: 'Do I need a new fuse box?', answer: 'Often yes, or a mini consumer unit. We include this in our survey and quote.' },
      { question: 'Can I charge two cars?', answer: 'Yes, we can install dual chargers or load-balance two units so they don\'t overload your supply.' }
    ],
    galleryImages: ['IMG_2864.jpeg']
  },
  'inverter-replacement': {
    id: 'inverter-replacement',
    title: 'Solar Inverter Replacement',
    subtitle: 'Get your system back online fast.',
    heroImage: 'IMG_0758.jpeg',
    overview: 'The inverter is the hardworking heart of your solar system. While panels last 25+ years, inverters typically last 10-12 years. If yours has failed, we can replace it with a modern, high-efficiency unit.',
    extendedContent: `
      <h2>Is Your Inverter Broken?</h2>
      <p>Common signs of inverter failure include:</p>
      <ul>
        <li>Red fault light or error code on the display.</li>
        <li>Blank screen during the day.</li>
        <li>System generating 0kWh on your generation meter.</li>
      </ul>
      <h3>Upgrade, Don't Just Replace</h3>
      <p>Modern inverters are more efficient and "smart". Replacing an old <strong>Sunny Boy</strong> or <strong>Aurora</strong> inverter with a new <strong>Solis</strong> or <strong>Growatt</strong> unit often results in higher yields. We can also add WiFi monitoring so you can finally see your generation on your phone.</p>
      <h3>Hybrid Upgrade</h3>
      <p>Why not upgrade to a <strong>Hybrid Inverter</strong>? This allows you to add a battery now or in the future, without needing extra equipment.</p>
    `,
    benefits: [
      { title: 'Fast Service', desc: 'Stock items fitted in 48hrs.', icon: 'Clock' },
      { title: 'WiFi Included', desc: 'App monitoring standard.', icon: 'Wifi' },
      { title: '10 Year Warranty', desc: 'Peace of mind guaranteed.', icon: 'ShieldCheck' }
    ],
    products: [],
    faqs: [
      { question: 'Will I lose my Feed-in Tariff?', answer: 'No. You are allowed to repair your system. We provide the necessary paperwork to notify your FiT licensee.' },
      { question: 'How much does it cost?', answer: 'A typical 3.6kW string inverter replacement starts from around £850 fully installed.' }
    ],
    galleryImages: ['IMG_0758.jpeg']
  }
};