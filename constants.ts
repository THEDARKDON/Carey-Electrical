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
    url: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
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
    gallery: ['/57eef691-a691-4489-9629-c5336d019a3c.jpg']
  },
  {
    id: 'p2',
    slug: 'reading-premium-black',
    url: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
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
    url: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
    category: 'Solar PV',
    description: 'In-Roof Solar Installation on New Build',
    location: 'Basingstoke',
    systemSize: '8.4kW System',
    title: "Integrated Solar for New Build",
    client: "Mr. & Mrs. Davies",
    date: "November 2024",
    challenge: `<p>This stunning new build required an integrated solar solution that would blend seamlessly with the roof design. The client wanted maximum generation without compromising the architectural vision.</p>`,
    solution: `<p>We deployed an <strong>In-Roof Integrated System</strong> that replaces traditional roof tiles. The all-black panels sit flush with the surrounding roof, creating a sleek, modern appearance that complements the property design.</p>`,
    outcome: `<p>An impressive 8.4kW system generating over 8,000 kWh annually. The seamless integration has enhanced the property value while delivering exceptional energy savings.</p>`,
    stats: [
      { label: "System Size", value: "8.4 kW" },
      { label: "Annual Generation", value: "8,200 kWh" },
      { label: "CO2 Saved", value: "1.9 Tons/yr" }
    ]
  },
  {
    id: 'p4',
    url: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
    category: 'Solar PV',
    description: 'Outbuilding Solar Installation',
    location: 'Thatcham',
    systemSize: '4kW Array'
  },
  {
    id: 'p5',
    url: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    category: 'Solar PV',
    description: 'Domestic Roof Installation',
    location: 'Hungerford',
    systemSize: '5.2kW Array'
  },
  {
    id: 'p6',
    slug: 'winchester-commercial',
    url: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
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
    url: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
    category: 'Solar PV',
    description: 'Garden Office Solar Installation',
    location: 'Andover',
    systemSize: '4kW Array'
  },
  {
    id: 'p8',
    url: '/img_8048.jpeg',
    slug: 'dual-roof-heritage',
    category: 'Solar PV',
    description: 'Dual Section Installation on Heritage Tiles',
    location: 'Oxford',
    systemSize: '8kW Array',
    title: "Heritage Property Solar Installation",
    client: "Period Home Owner",
    date: "November 2024",
    challenge: `<p>This character property with clay roof tiles required a sensitive installation approach. The dual-aspect roof meant panels needed to work on both orientations while maintaining the home's aesthetic appeal.</p>`,
    solution: `<p>We installed <strong>all-black panels</strong> across both roof sections, carefully integrating with the existing heritage tiles. The system was designed to maximize generation from both east and west-facing arrays.</p>`,
    outcome: `<p>A stunning 8kW system that blends seamlessly with the period property. The dual orientation provides extended generation throughout the day.</p>`,
    stats: [
      { label: "System Size", value: "8 kW" },
      { label: "Panels", value: "18x 440W" },
      { label: "Daily Coverage", value: "Extended" }
    ]
  },
  {
    id: 'p9',
    url: '/img_8050.jpeg',
    slug: 'libbi-professional-install',
    category: 'Battery Storage',
    description: 'Professional Myenergi Libbi Installation',
    location: 'Newbury',
    systemSize: '10kWh Storage',
    title: "Premium Battery Storage Setup",
    client: "The Thompson Family",
    date: "October 2024",
    challenge: `<p>The client needed a high-capacity battery system to maximize self-consumption from their existing 6kW solar array. Space in the utility room was limited.</p>`,
    solution: `<p>We installed a <strong>Myenergi Libbi system</strong> with professional cable management and safety isolators. The Carey Electrical branded installation showcases our attention to detail and quality workmanship.</p>`,
    outcome: `<p>A clean, professional installation providing 10kWh of usable storage. The system now stores excess solar during the day for evening use.</p>`,
    stats: [
      { label: "Storage", value: "10 kWh" },
      { label: "Self-Use", value: "88%" },
      { label: "Warranty", value: "10 Years" }
    ]
  },
  {
    id: 'p10',
    url: '/img_8715.jpeg',
    slug: 'new-build-development',
    category: 'Commercial',
    description: 'New Build Development Installation',
    location: 'Reading',
    systemSize: '24kW System',
    title: "Multi-Property New Build Solar",
    client: "Property Developer",
    date: "September 2024",
    challenge: `<p>A new build development required integrated solar installations during the construction phase. Coordination with builders and strict timelines were essential.</p>`,
    solution: `<p>Our team worked alongside the construction crew to install <strong>in-roof integrated solar panels</strong> on multiple new-build properties. The systems were designed and installed during the roofing phase for seamless integration.</p>`,
    outcome: `<p>Multiple new homes delivered with pre-installed solar systems, offering future homeowners immediate energy savings and a future-proofed property.</p>`,
    stats: [
      { label: "Properties", value: "4 Units" },
      { label: "Total Capacity", value: "24 kW" },
      { label: "Integration", value: "In-Roof" }
    ]
  },
  {
    id: 'p11',
    url: '/img_8716.jpeg',
    category: 'Commercial',
    description: 'Development Site Installation',
    location: 'Thatcham',
    systemSize: '18kW Array'
  },
  {
    id: 'p12',
    url: '/img_9312.jpeg',
    slug: 'large-capacity-storage',
    category: 'Battery Storage',
    description: 'High Capacity Battery Installation',
    location: 'Basingstoke',
    systemSize: '20kWh Storage',
    title: "Large Scale Domestic Storage",
    client: "Energy Independent Homeowner",
    date: "August 2024",
    challenge: `<p>The client wanted maximum energy independence with a large solar array and substantial battery storage for a self-sufficient home during winter months.</p>`,
    solution: `<p>We installed a <strong>dual Myenergi Libbi system</strong> providing 20kWh of total storage capacity. The professional garage installation includes all necessary safety equipment and monitoring.</p>`,
    outcome: `<p>One of our largest domestic battery installations. The client can now store sufficient energy to run the home entirely from stored solar during summer months.</p>`,
    stats: [
      { label: "Total Storage", value: "20 kWh" },
      { label: "Summer Self-Use", value: "98%" },
      { label: "Winter Support", value: "60%" }
    ]
  },
  {
    id: 'p13',
    url: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    category: 'Solar PV',
    description: 'All-Black Panels on Concrete Tiles',
    location: 'Hungerford',
    systemSize: '5.2kW Array'
  },
  {
    id: 'p14',
    url: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
    category: 'Solar PV',
    description: 'Multi-Section In-Roof Array',
    location: 'Winchester',
    systemSize: '12kW System'
  },
  {
    id: 'p15',
    url: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
    category: 'Battery Storage',
    description: 'Myenergi Ecosystem Integration',
    location: 'Andover',
    systemSize: '5kW Hybrid'
  }
];

export const PRODUCTS_CONTENT: Record<string, ProductPageData> = {
  'tesla-powerwall': {
    id: 'tesla-powerwall',
    name: 'Tesla Powerwall 3',
    brand: 'Tesla',
    tagline: 'The Future of Home Energy Storage',
    heroImage: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
    description: 'Powerwall 3 is a fully integrated solar and battery system, designed for easy installation and seamless backup protection.',
    features: [{ title: 'Integrated Inverter', desc: 'Built-in solar inverter for higher efficiency.', icon: 'Zap' }, { title: 'Storm Watch', desc: 'Automatically detects incoming storms.', icon: 'CloudLightning' }, { title: 'Liquid Cooling', desc: 'Advanced thermal management.', icon: 'Thermometer' }],
    specs: { 'Energy Capacity': '13.5 kWh', 'Power Output': '11.5 kW Continuous', 'Solar Input': '6 MPPTs', 'Warranty': '10 Years', 'Weight': '130 kg', 'Dimensions': '1098 x 609 x 193 mm' }
  },
  'myenergi-libbi': {
    id: 'myenergi-libbi',
    name: 'Myenergi Libbi',
    brand: 'Myenergi',
    tagline: 'Modular. Smart. British.',
    heroImage: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
    description: 'Libbi is not just a battery; it is an eco-smart energy system that communicates with Zappi and Eddi.',
    features: [{ title: 'Modular Design', desc: 'Stackable 5kWh modules.', icon: 'Layers' }, { title: 'Ecosystem', desc: 'Talks to Zappi and Eddi.', icon: 'Wifi' }, { title: 'UK Support', desc: 'Designed in the UK.', icon: 'Flag' }],
    specs: { 'Capacity': '5kWh - 20kWh', 'Inverter Power': '3.68kW or 5kW', 'Backup': 'Optional', 'Warranty': '10 Years', 'Chemistry': 'LiFePO4', 'Efficiency': '97%' }
  },
  'myenergi-zappi': {
    id: 'myenergi-zappi',
    name: 'Myenergi Zappi',
    brand: 'Myenergi',
    tagline: 'The World\'s #1 Solar EV Charger',
    heroImage: '/57eef691-a691-4489-9629-c5336d019a3c.jpg', // Reusing libbi image context or generic if available
    description: 'Zappi is a smart EV charger with a difference. It can operate as a standard charger, or it can use 100% green energy generated from your Solar PV or wind generation.',
    features: [{ title: 'Solar Charging', desc: 'Charge on sunshine.', icon: 'Sun' }, { title: 'No Earth Rod', desc: 'Built-in pen fault protection.', icon: 'Shield' }, { title: 'App Control', desc: 'Monitor & control from anywhere.', icon: 'Smartphone' }],
    specs: { 'Power': '7kW (Single Phase) or 22kW (3-Phase)', 'Connector': 'Type 2 Tethered or Untethered', 'Warranty': '3 Years', 'Connectivity': 'WiFi & Ethernet', 'Modes': 'Fast, Eco, Eco+' }
  },
  'jinko-tiger': {
    id: 'jinko-tiger',
    name: 'Jinko Tiger Neo',
    brand: 'Jinko Solar',
    tagline: 'N-Type Technology for Maximum Yield',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
    description: 'The Tiger Neo N-type module adopts TOPCon technology for higher efficiency and lower degradation.',
    features: [{ title: 'N-Type TOPCon', desc: 'Superior efficiency.', icon: 'Sun' }, { title: 'All-Black', desc: 'Sleek obsidian look.', icon: 'Eye' }, { title: '30 Year Warranty', desc: 'Industry leading guarantee.', icon: 'ShieldCheck' }],
    specs: { 'Power Output': '440W - 460W', 'Efficiency': '22.8%', 'Degradation': '<0.4% per year', 'Warranty': '30 Year Power', 'Cell Type': 'N-Type Monocrystalline', 'Dimensions': '1762 x 1134 x 30 mm' }
  },
  'givenergy-aio': {
    id: 'givenergy-aio',
    name: 'GivEnergy All-in-One',
    brand: 'GivEnergy',
    tagline: 'Power Your Entire Home',
    heroImage: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
    description: 'A premium 13.5kWh battery with a massive discharge rate, capable of powering heat pumps.',
    features: [{ title: 'High Discharge', desc: '6kW continuous power.', icon: 'Zap' }, { title: 'Grid Services', desc: 'Ready for grid balancing.', icon: 'TrendingUp' }, { title: 'IP65 Rated', desc: 'Suitable for outdoor.', icon: 'CloudRain' }],
    specs: { 'Capacity': '13.5 kWh', 'Power': '6.0 kW', 'Backup': 'Full Whole-House Backup', 'Warranty': '12 Years', 'Depth of Discharge': '100%', 'Connectivity': 'WiFi / LAN / 4G' }
  }
};

export const BLOG_POSTS: BlogPost[] = [
  { id: '1', slug: 'is-solar-worth-it-berkshire', title: 'Is Solar Worth It in Berkshire & Hampshire? (2025 Guide)', excerpt: 'With energy prices fluctuating, we analyze the real ROI for homeowners in Reading, Newbury and Basingstoke.', date: 'Jan 28, 2025', image: '/img_8048.jpeg', category: 'Market Analysis', readTime: '8 min read', featured: true },
  { id: '2', slug: 'solar-power-reading-guide', title: 'Why Reading is Leading the Solar Revolution in 2025', excerpt: 'Reading is becoming a hub for smart energy. From Caversham to Earley, discover how urban homeowners are beating grid prices.', date: 'Feb 2, 2025', image: '/img_8715.jpeg', category: 'Local Projects', readTime: '6 min read' },
  { id: '3', slug: 'best-solar-batteries-2025', title: 'Best Solar Batteries 2025: Tesla Powerwall 3 vs Libbi', excerpt: 'We compare the leading battery storage systems available in the UK. Which one is right for your home?', date: 'Feb 10, 2025', image: '/img_8050.jpeg', category: 'Technology', readTime: '10 min read' },
  { id: '4', slug: 'bird-proofing-cost-guide', title: 'Solar Panel Bird Proofing Cost Guide 2025', excerpt: 'Pigeons nesting under your solar panels? Learn about the costs of removal, cleaning, and mesh installation to protect your roof.', date: 'Feb 12, 2025', image: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg', category: 'Maintenance', readTime: '6 min read' },
  { id: '5', slug: 'solar-carports-vs-roof', title: 'Solar Carports vs Roof Solar: Which is Better?', excerpt: 'Running out of roof space? Discover why solar carports are becoming the premium choice for homeowners in Ascot and Wokingham.', date: 'Feb 18, 2025', image: '/baea77fd-a9df-488b-9759-39748439a29a.jpg', category: 'Technology', readTime: '7 min read' },
  { id: '6', slug: 'in-roof-solar-guide', title: 'In-Roof vs On-Roof Solar: Aesthetics & Cost', excerpt: 'Building a new home or re-roofing? Integrated solar panels (GSE) offer a stunning flush finish. We compare the costs and benefits.', date: 'Feb 22, 2025', image: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg', category: 'Technology', readTime: '8 min read' },
  { id: '7', slug: 'solar-panels-winchester-heritage', title: 'Installing Solar in Winchester Conservation Areas', excerpt: 'Living in a historic city doesn\'t mean you can\'t have solar. Learn about our heritage-compliant all-black systems.', date: 'Dec 20, 2024', image: '/img_8048.jpeg', category: 'Planning', readTime: '7 min read' },
  { id: '8', slug: 'oxford-solar-net-zero', title: 'Oxford\'s Path to Net Zero: How Homeowners Can Help', excerpt: 'Oxford City Council has ambitious climate goals. See how residential solar arrays are contributing to a greener city.', date: 'Dec 5, 2024', image: '/img_8716.jpeg', category: 'Local Projects', readTime: '6 min read' },
  { id: '9', slug: '0-vat-battery-storage', title: '0% VAT on Battery Storage Extended', excerpt: 'Great news for homeowners! The government has extended the 0% VAT relief to include standalone battery storage systems.', date: 'Feb 15, 2024', image: '/img_9312.jpeg', category: 'Finance', readTime: '3 min read' }
];

export const BLOG_CONTENT: Record<string, BlogPostData> = {
  'is-solar-worth-it-berkshire': { id: '1', title: 'Is Solar Worth It in Berkshire & Hampshire? (2025 Guide)', date: 'Jan 28, 2025', category: 'Market Analysis', author: 'James Carey, Lead Engineer', heroImage: '/img_8048.jpeg', content: `<h2>The Financial Reality...</h2>` },
  'in-roof-solar-guide': {
    id: '6',
    title: 'In-Roof vs On-Roof Solar: Aesthetics & Cost',
    date: 'Feb 22, 2025',
    category: 'Technology',
    author: 'James Carey',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
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
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
    content: `<h2>The Rise of the Solar Carport...</h2>` 
  },
  'bird-proofing-cost-guide': {
    id: '4',
    title: 'Solar Panel Bird Proofing Cost Guide 2025',
    date: 'Feb 12, 2025',
    category: 'Maintenance',
    author: 'James Carey',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    content: `<h2>The True Cost of Pigeon Pests...</h2>`
  },
  'best-solar-batteries-2025': {
    id: '3',
    title: 'Best Solar Batteries 2025: Tesla Powerwall 3 vs Libbi vs GivEnergy',
    date: 'Feb 10, 2025',
    category: 'Technology',
    author: 'James Carey',
    heroImage: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
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
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg', // Using a nice roof image
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
    heroImage: '/img_8048.jpeg',
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
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
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
  'thatcham': {
    slug: 'thatcham',
    name: 'Thatcham',
    metaDescription: 'Solar Panel Installers Thatcham. Local MCS certified experts for RG18 & RG19. Battery storage & EV charging specialists.',
    heroImage: '/img_8050.jpeg',
    introTitle: 'Your Local Solar Installers',
    introText: [
      'Thatcham is home to Carey Electrical. As your neighbours, we take pride in delivering exceptional solar installations to the community we live and work in.',
      'From Cold Ash to Midgham, we have installed systems on every type of property in the RG18 and RG19 postcodes.'
    ],
    extendedContent: `
      <h2>Why Choose Your Local Installer</h2>
      <p>Being based in Thatcham means we can respond quickly to any service calls and provide ongoing support to our local customers. We are invested in our community and our reputation here matters to us.</p>
      <h3>Battery Storage Solutions</h3>
      <p>Thatcham homeowners are increasingly pairing solar with battery storage. The <strong>Tesla Powerwall 3</strong> and <strong>Myenergi Libbi</strong> are popular choices for whole-home backup and energy independence.</p>
    `,
    localLandmarks: ['Thatcham Nature Discovery Centre', 'Bucklebury Common', 'Kennet & Avon Canal'],
    solarPotential: 'Excellent. Thatcham benefits from good solar irradiance and many south-facing properties.',
    planningAdvice: 'Most installations fall under Permitted Development. We handle any planning requirements.',
    faq: [
      { question: 'How quickly can you respond to issues?', answer: 'Being local, we can usually attend within 24-48 hours for urgent issues.' },
      { question: 'Do you offer maintenance plans?', answer: 'Yes, we offer annual maintenance packages for local customers.' }
    ]
  },
  'reading': {
    slug: 'reading',
    name: 'Reading',
    metaDescription: 'Solar Panel Installation Reading. MCS certified installers for RG1-RG6. Commercial and residential solar experts.',
    heroImage: '/img_8715.jpeg',
    introTitle: 'Solar Solutions for Reading & Surrounding Areas',
    introText: [
      'Reading is a thriving hub for both residential and commercial solar installations. From Victorian terraces in Caversham to modern developments in Green Park, we design systems for every property type.',
      'We serve all Reading postcodes including RG1 through RG6, Tilehurst, Earley, and Woodley.'
    ],
    extendedContent: `
      <h2>Commercial Solar in Reading</h2>
      <p>Reading's business parks offer excellent opportunities for commercial solar. We have installed systems on warehouses in Winnersh Triangle and offices in Thames Valley Park.</p>
      <h3>Residential Installations</h3>
      <p>From period properties in Sonning to new builds in Shinfield, we design solar systems that complement your home's architecture while maximizing energy generation.</p>
    `,
    localLandmarks: ['Reading Festival Site', 'Madejski Stadium', 'Forbury Gardens'],
    solarPotential: 'Good to Excellent. Urban shading can be a factor but many properties have excellent roof exposure.',
    planningAdvice: 'Reading Borough Council generally supports solar installations. We assist with any conservation area requirements.',
    faq: [
      { question: 'Do you install on flats?', answer: 'We can assess apartment buildings for communal solar installations.' },
      { question: 'What about terraced houses?', answer: 'Yes, terraced houses are often ideal candidates with their consistent roof lines.' }
    ]
  },
  'basingstoke': {
    slug: 'basingstoke',
    name: 'Basingstoke',
    metaDescription: 'Solar Panels Basingstoke. MCS certified solar installers for RG21-RG24. Battery storage and EV charging specialists.',
    heroImage: '/img_9312.jpeg',
    introTitle: 'Solar Energy for North Hampshire',
    introText: [
      'Basingstoke combines modern town centre living with beautiful Hampshire villages. We install solar systems across all RG21-RG24 postcodes.',
      'From executive homes in Chineham to rural properties in Old Basing, we deliver tailored energy solutions.'
    ],
    extendedContent: `
      <h2>Modern Homes, Modern Energy</h2>
      <p>Basingstoke's many newer developments are ideal for solar. Properties built since the 1980s typically have excellent roof structures for panel installation.</p>
      <h3>Rural Properties</h3>
      <p>For farms and rural estates around Basingstoke, we offer <a href="#/services/ground-mount">ground-mounted solar</a> and agricultural installations that can transform unused land into clean energy generators.</p>
    `,
    localLandmarks: ['The Malls', 'Basing House', 'The Anvil'],
    solarPotential: 'Excellent. Basingstoke receives strong solar irradiance with many properties having ideal roof orientations.',
    planningAdvice: 'Basingstoke & Deane Council supports renewable energy. Most residential installs are Permitted Development.',
    faq: [
      { question: 'Do you cover Hook and Fleet?', answer: 'Yes, we cover the wider Basingstoke area including Hook, Fleet, and Odiham.' },
      { question: 'Can you install on new builds?', answer: 'Yes, we work with developers and new homeowners to install solar on new properties.' }
    ]
  },
  'hungerford': {
    slug: 'hungerford',
    name: 'Hungerford',
    metaDescription: 'Solar Panel Installers Hungerford. Heritage specialists for RG17. Listed building experience and rural solar experts.',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    introTitle: 'Solar for the Kennet Valley',
    introText: [
      'Hungerford is a beautiful market town with many period properties. We specialize in sympathetic solar installations that respect the town conservation area.',
      'From Hungerford Common to Kintbury, we provide expert solar installation services throughout RG17.'
    ],
    extendedContent: `
      <h2>Heritage Solar Specialists</h2>
      <p>Hungerford High Street features many listed and historic buildings. We offer <strong>integrated in-roof solar</strong> that maintains the character of period properties.</p>
      <h3>Rural & Agricultural</h3>
      <p>The farmland surrounding Hungerford is perfect for larger solar installations. We offer ground-mounted systems and barn roof installations for rural properties.</p>
    `,
    localLandmarks: ['Hungerford Common', 'Kennet & Avon Canal', 'Littlecote House'],
    solarPotential: 'Excellent. Rural locations benefit from minimal shading and clean air for optimal panel performance.',
    planningAdvice: 'We have experience with West Berkshire conservation areas and can guide you through any planning requirements.',
    faq: [
      { question: 'Can solar be installed on thatched roofs?', answer: 'We recommend ground-mounted systems for thatched properties due to fire safety considerations.' },
      { question: 'Do you work on listed buildings?', answer: 'Yes, we have extensive experience and can assist with Listed Building Consent applications.' }
    ]
  },
  'winchester': {
    slug: 'winchester',
    name: 'Winchester',
    metaDescription: 'Solar Panels Winchester. Heritage solar installers for SO22-SO23. MCS certified with conservation area expertise.',
    heroImage: '/img_8716.jpeg',
    introTitle: 'Solar Energy for Historic Winchester',
    introText: [
      'Winchester combines ancient history with modern living. We specialize in solar installations that respect the city unique heritage while delivering clean energy.',
      'From the cathedral quarter to Oliver Battery and Stanmore, we serve all Winchester postcodes.'
    ],
    extendedContent: `
      <h2>Solar in a World Heritage Setting</h2>
      <p>Winchester requires careful consideration when installing solar. We use <strong>all-black panels</strong> and <strong>integrated in-roof systems</strong> to minimize visual impact in sensitive areas.</p>
      <h3>Modern Winchester</h3>
      <p>Areas like Kings Worthy and Weeke offer excellent opportunities for conventional solar installations. These properties often have ideal south-facing roofs.</p>
    `,
    localLandmarks: ['Winchester Cathedral', 'Winchester College', 'Hospital of St Cross'],
    solarPotential: 'Good. Winchester has a mix of historic and modern properties with varying solar potential.',
    planningAdvice: 'We have extensive experience with Winchester City Council planning requirements and conservation area guidelines.',
    faq: [
      { question: 'Can I install solar near the cathedral?', answer: 'Properties in the conservation area may need planning permission. We can advise on the best approach.' },
      { question: 'Do you cover the surrounding villages?', answer: 'Yes, we serve Alresford, Kings Worthy, Micheldever, and surrounding villages.' }
    ]
  },
  'andover': {
    slug: 'andover',
    name: 'Andover',
    metaDescription: 'Solar Panel Installation Andover. MCS certified installers for SP10-SP11. Battery storage and EV charging experts.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
    introTitle: 'Solar Solutions for Test Valley',
    introText: [
      'Andover offers a mix of modern housing estates and charming villages. We install solar systems across SP10 and SP11 postcodes.',
      'From the town centre to Charlton, Anna Valley, and the surrounding villages, we deliver professional solar installations.'
    ],
    extendedContent: `
      <h2>Growing Community, Growing Demand</h2>
      <p>Andover's expanding housing developments are perfect for solar. New estates in Picket Twenty and East Anton feature many suitable properties.</p>
      <h3>Rural Properties</h3>
      <p>The Test Valley countryside surrounding Andover offers excellent opportunities for ground-mounted solar on larger properties and farms.</p>
    `,
    localLandmarks: ['Hawk Conservancy Trust', 'Museum of the Iron Age', 'Finkley Down Farm'],
    solarPotential: 'Excellent. Andover receives strong solar irradiance with minimal urban shading.',
    planningAdvice: 'Test Valley Borough Council is supportive of renewable energy. Most installations are Permitted Development.',
    faq: [
      { question: 'Do you cover Whitchurch?', answer: 'Yes, we serve Andover, Whitchurch, Stockbridge, and all surrounding areas.' },
      { question: 'Can you install on agricultural buildings?', answer: 'Yes, farm buildings often make excellent candidates for large solar installations.' }
    ]
  },
  'oxford': {
    slug: 'oxford',
    name: 'Oxford',
    metaDescription: 'Solar Panel Installers Oxford. MCS certified experts for OX1-OX4. University city solar specialists with heritage experience.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
    introTitle: 'Solar Energy for the City of Dreaming Spires',
    introText: [
      'Oxford presents unique challenges and opportunities for solar installation. We have the expertise to install systems that complement the city diverse architecture.',
      'From Summertown to Headington, Cowley to Botley, we serve all Oxford postcodes.'
    ],
    extendedContent: `
      <h2>Heritage and Innovation</h2>
      <p>Oxford is a city where history meets innovation. We offer solar solutions that respect the architectural heritage while embracing clean energy technology.</p>
      <h3>Suburban Oxford</h3>
      <p>Areas like Kidlington, Botley, and Headington offer excellent opportunities for conventional solar installations with many suitable 1930s-1980s properties.</p>
    `,
    localLandmarks: ['Bodleian Library', 'Radcliffe Camera', 'University Parks'],
    solarPotential: 'Good. Oxford has varied potential depending on property age and location.',
    planningAdvice: 'Oxford City Council has strong sustainability goals. We navigate conservation area requirements expertly.',
    faq: [
      { question: 'Can college buildings have solar?', answer: 'We work with institutional clients to assess heritage buildings for appropriate solar solutions.' },
      { question: 'Do you cover Abingdon?', answer: 'Yes, we serve Oxford and all surrounding towns including Abingdon, Witney, and Bicester.' }
    ]
  },
  'didcot': {
    slug: 'didcot',
    name: 'Didcot',
    metaDescription: 'Solar Panels Didcot. MCS certified installers for OX11. New build specialists and battery storage experts.',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    introTitle: 'Solar for South Oxfordshire',
    introText: [
      'Didcot is one of the fastest-growing towns in the UK. Its modern housing stock makes it ideal for solar installation.',
      'We serve Didcot and surrounding villages including Harwell, Blewbury, and Cholsey.'
    ],
    extendedContent: `
      <h2>Modern Homes, Clean Energy</h2>
      <p>Didcot's numerous new developments are perfect for solar. Properties on Great Western Park and other new estates typically have excellent roof structures.</p>
      <h3>Science Vale</h3>
      <p>The growing tech and science community in Didcot increasingly values energy independence and sustainability.</p>
    `,
    localLandmarks: ['Didcot Railway Centre', 'Harwell Campus', 'Wittenham Clumps'],
    solarPotential: 'Excellent. New builds often have optimal roof orientations for solar.',
    planningAdvice: 'South Oxfordshire District Council supports renewable energy. Most installations are straightforward.',
    faq: [
      { question: 'Is my new build suitable for solar?', answer: 'Most new builds in Didcot are excellent candidates. We provide free assessments.' },
      { question: 'Can you add solar to new build warranties?', answer: 'We work carefully to maintain your new build warranty when installing solar.' }
    ]
  },
  'wantage': {
    slug: 'wantage',
    name: 'Wantage',
    metaDescription: 'Solar Panel Installation Wantage. MCS certified solar experts for OX12. Rural and heritage solar specialists.',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    introTitle: 'Solar Energy for the Vale of White Horse',
    introText: [
      'Wantage sits at the heart of the beautiful Vale of White Horse. We install solar systems that suit both the market town and surrounding rural properties.',
      'From Grove to East Hendred, we serve all of the OX12 postcode area.'
    ],
    extendedContent: `
      <h2>Market Town Solar</h2>
      <p>Wantage town centre has many period properties that benefit from our heritage solar expertise. We use sympathetic installation methods for older buildings.</p>
      <h3>Rural Installations</h3>
      <p>The surrounding villages and farms offer excellent opportunities for larger solar installations and ground-mounted systems.</p>
    `,
    localLandmarks: ['Uffington White Horse', 'Vale & Downland Museum', 'Ridgeway National Trail'],
    solarPotential: 'Excellent. The Vale benefits from good solar exposure and many properties have ideal orientations.',
    planningAdvice: 'Vale of White Horse District Council supports renewables. We handle all planning requirements.',
    faq: [
      { question: 'Can I install solar on a barn conversion?', answer: 'Yes, barn conversions often have excellent roof space for solar installations.' },
      { question: 'Do you cover Faringdon?', answer: 'Yes, we serve Wantage, Grove, Faringdon, and all surrounding villages.' }
    ]
  },
  'marlborough': {
    slug: 'marlborough',
    name: 'Marlborough',
    metaDescription: 'Solar Panels Marlborough. Heritage solar specialists for SN8. MCS certified with conservation area expertise.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
    introTitle: 'Solar for Historic Marlborough',
    introText: [
      'Marlborough is a historic market town requiring sensitive approaches to solar installation. We specialize in heritage-friendly solutions.',
      'We serve Marlborough and surrounding villages including Pewsey, Aldbourne, and Ramsbury.'
    ],
    extendedContent: `
      <h2>Conservation Area Expertise</h2>
      <p>Marlborough High Street and surrounding areas are protected. We offer <strong>in-roof solar systems</strong> and rear-of-property installations that respect the town's character.</p>
      <h3>North Wessex Downs</h3>
      <p>Properties in the AONB require careful consideration. We design systems that complement the landscape while delivering clean energy.</p>
    `,
    localLandmarks: ['Marlborough College', 'Savernake Forest', 'Avebury Stone Circle'],
    solarPotential: 'Good to Excellent. Rural properties often have minimal shading and excellent exposure.',
    planningAdvice: 'We have extensive experience with Wiltshire Council and AONB planning requirements.',
    faq: [
      { question: 'Can I install solar in the AONB?', answer: 'Yes, with appropriate design. We specialize in sympathetic installations.' },
      { question: 'Do you work on listed buildings?', answer: 'Yes, we can assist with Listed Building Consent applications and appropriate solutions.' }
    ]
  },
  'wokingham': {
    slug: 'wokingham',
    name: 'Wokingham',
    metaDescription: 'Solar Panel Installers Wokingham. MCS certified for RG40-RG41. Premium solar and battery storage specialists.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
    introTitle: 'Solar Solutions for Wokingham Borough',
    introText: [
      'Wokingham offers a mix of historic town centre properties and modern executive homes. We install solar across all property types.',
      'From Wokingham Without to Finchampstead, we serve RG40 and RG41 postcodes.'
    ],
    extendedContent: `
      <h2>Executive Homes</h2>
      <p>Wokingham's many executive properties are ideal for premium solar installations. We offer <strong>all-black systems</strong> and <strong>solar carports</strong> for discerning homeowners.</p>
      <h3>Town Centre Properties</h3>
      <p>The historic town centre requires careful installation approaches. We have experience with Wokingham's conservation areas.</p>
    `,
    localLandmarks: ['California Country Park', 'Dinton Pastures', 'Wokingham Town Hall'],
    solarPotential: 'Excellent. Many properties have large, unshaded roofs ideal for solar.',
    planningAdvice: 'Wokingham Borough Council supports solar installations. We handle conservation area requirements.',
    faq: [
      { question: 'Do you cover Crowthorne?', answer: 'Yes, we serve Wokingham, Crowthorne, Finchampstead, and surrounding areas.' },
      { question: 'Can you install solar carports?', answer: 'Yes, solar carports are popular with Wokingham homeowners who have large driveways.' }
    ]
  },
  'bracknell': {
    slug: 'bracknell',
    name: 'Bracknell',
    metaDescription: 'Solar Panels Bracknell. MCS certified installers for RG12 & RG42. New town solar specialists.',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    introTitle: 'Solar Energy for Bracknell Forest',
    introText: [
      'Bracknell new town planning means many properties have excellent roof orientations for solar. We serve all Bracknell Forest areas.',
      'From Sandhurst to Binfield, Warfield to Crowthorne, we install across RG12 and RG42.'
    ],
    extendedContent: `
      <h2>New Town Advantage</h2>
      <p>Bracknell's planned layout means many homes have ideal south-facing roofs. Properties from the 1950s onwards are typically well-suited to solar.</p>
      <h3>Commercial Opportunities</h3>
      <p>Bracknell's business parks offer excellent commercial solar potential. We work with businesses to reduce energy costs and carbon footprints.</p>
    `,
    localLandmarks: ['The Lexicon', 'Coral Reef Waterworld', 'South Hill Park'],
    solarPotential: 'Excellent. Many properties have unobstructed, well-oriented roofs.',
    planningAdvice: 'Bracknell Forest Council is supportive of renewables. Most residential installs are Permitted Development.',
    faq: [
      { question: 'Are 1960s houses suitable for solar?', answer: 'Yes, many Bracknell properties from this era have excellent roof structures for solar.' },
      { question: 'Do you install on commercial properties?', answer: 'Yes, we offer commercial solar installations for businesses in Bracknell.' }
    ]
  },
  'abingdon': {
    slug: 'abingdon',
    name: 'Abingdon',
    metaDescription: 'Solar Panel Installation Abingdon. MCS certified experts for OX14. Heritage and modern solar specialists.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
    introTitle: 'Solar for Abingdon-on-Thames',
    introText: [
      'Abingdon-on-Thames combines historic charm with modern development. We offer solar solutions for all property types across OX14.',
      'From the town centre to Radley, Drayton, and Marcham, we serve the wider Abingdon area.'
    ],
    extendedContent: `
      <h2>Historic Town Centre</h2>
      <p>Abingdon's Abbey area and town centre require sensitive installation approaches. We offer heritage-friendly solutions for period properties.</p>
      <h3>Modern Developments</h3>
      <p>New housing in areas like North Abingdon offers excellent opportunities for conventional solar installations.</p>
    `,
    localLandmarks: ['Abingdon Abbey', 'Abingdon County Hall Museum', 'River Thames'],
    solarPotential: 'Good to Excellent. Varied depending on property type and location.',
    planningAdvice: 'Vale of White Horse District Council supports solar. We handle conservation area requirements.',
    faq: [
      { question: 'Can I install solar on a riverside property?', answer: 'Yes, we can install on properties near the Thames with appropriate consideration for views.' },
      { question: 'Do you work in Culham?', answer: 'Yes, we serve Abingdon and all surrounding villages including Culham, Sutton Courtenay, and Milton.' }
    ]
  },
  'maidenhead': {
    slug: 'maidenhead',
    name: 'Maidenhead',
    metaDescription: 'Solar Panels Maidenhead. MCS certified installers for SL6. Premium solar and EV charging specialists.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
    introTitle: 'Solar Solutions for Maidenhead',
    introText: [
      'Maidenhead offers excellent opportunities for residential and commercial solar. We serve all SL6 postcodes from Cookham to Cox Green.',
      'With the Elizabeth Line improving London connections, Maidenhead homeowners are investing in their properties with solar installations.'
    ],
    extendedContent: `
      <h2>Riverside Properties</h2>
      <p>Maidenhead's Thames-side properties often have excellent roof exposure. We design systems that complement riverside homes.</p>
      <h3>Executive Solar</h3>
      <p>Areas like Pinkneys Green and Cookham Rise feature many executive homes ideal for premium solar installations and solar carports.</p>
    `,
    localLandmarks: ['Boulters Lock', 'Maidenhead Heritage Centre', 'Cliveden'],
    solarPotential: 'Excellent. Many properties have large, unshaded roofs.',
    planningAdvice: 'RBWM supports solar installations. We have experience with the borough conservation areas.',
    faq: [
      { question: 'Do you cover Cookham?', answer: 'Yes, we serve Maidenhead, Cookham, Bourne End, and surrounding areas.' },
      { question: 'Can you install EV chargers too?', answer: 'Yes, we offer combined solar and EV charging packages.' }
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
  heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
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
    heroImage: '/img_8048.jpeg',
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
         image: '/img_8048.jpeg',
         features: ['N-Type Technology', 'All-Black Aesthetics', 'High Efficiency'],
         description: 'The Tiger Neo N-type module adopts TOPCon technology for higher efficiency and lower degradation.',
         techSpecs: { 'Power Output': '440W', 'Efficiency': '22.8%', 'Warranty': '25 Years' }
       }
    ],
    faqs: [
      { question: 'Do I need planning permission?', answer: 'Most domestic installations are Permitted Development, so no planning is required unless you live in a listed building.' },
      { question: 'How long does installation take?', answer: 'A typical residential system takes 1-2 days to install.' }
    ],
    galleryImages: ['/img_8048.jpeg', '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg', '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'integrated-solar': {
    id: 'integrated-solar',
    title: 'Integrated In-Roof Solar',
    subtitle: 'The aesthetic choice for new builds and re-roofing.',
    heroImage: '/img_8715.jpeg',
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
    galleryImages: ['/img_8715.jpeg', '/img_8716.jpeg', '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'agricultural-solar': {
    id: 'agricultural-solar',
    title: 'Agricultural Solar Systems',
    subtitle: 'Powering farms and rural businesses.',
    heroImage: '/img_8716.jpeg',
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
    galleryImages: ['/baea77fd-a9df-488b-9759-39748439a29a.jpg', '/baea77fd-a9df-488b-9759-39748439a29a.jpg']
  },
  'solar-carports': {
    id: 'solar-carports',
    title: 'Solar Carports',
    subtitle: 'Generate power from your parking space.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg', // Using ground mount image as proxy for carport structure
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
    galleryImages: ['/baea77fd-a9df-488b-9759-39748439a29a.jpg']
  },
  'flat-roof-solar': {
    id: 'flat-roof-solar',
    title: 'Flat Roof Solar Systems',
    subtitle: 'Specialist ballasted mounting for flat roofs.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
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
    galleryImages: ['/baea77fd-a9df-488b-9759-39748439a29a.jpg', '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'solar-repairs': {
    id: 'solar-repairs',
    title: 'Solar Panel Repairs',
    subtitle: 'Expert diagnostics and repair for faulty solar systems.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
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
    galleryImages: ['/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'commercial-ev': {
    id: 'commercial-ev',
    title: 'Commercial EV Charging',
    subtitle: 'Scalable workplace charging solutions.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
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
    galleryImages: ['/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'solar-removal': {
    id: 'solar-removal',
    title: 'Solar Removal & Reinstall',
    subtitle: 'Expert removal service for roof repairs and renovations.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
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
    galleryImages: ['/baea77fd-a9df-488b-9759-39748439a29a.jpg']
  },
  'new-builds': {
    id: 'new-builds',
    title: 'New Build Solar',
    subtitle: 'Integrated solar solutions for developers and self-builders.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
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
    galleryImages: ['/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg', '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg']
  },
  'commercial-solar': {
    id: 'commercial-solar',
    title: 'Commercial Solar Installation',
    subtitle: 'Power your business with sustainable energy.',
    heroImage: '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
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
    galleryImages: ['/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg', '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'battery-storage': {
    id: 'battery-storage',
    title: 'Battery Storage Systems',
    subtitle: 'Store your solar energy for use day and night.',
    heroImage: '/img_8050.jpeg',
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
         image: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
         features: ['13.5kWh Capacity', 'Built-in Inverter', 'Backup Gateway'],
         description: 'The gold standard in home battery storage.',
         techSpecs: { 'Capacity': '13.5kWh', 'Power': '11.5kW', 'Warranty': '10 Years' }
       },
       {
         id: 'myenergi-libbi',
         name: 'Myenergi Libbi',
         brand: 'Myenergi',
         image: '/img_8050.jpeg',
         features: ['Modular Design', 'Ecosystem Integration', 'UK Support'],
         description: 'Smart battery storage that talks to your Zappi EV charger.',
         techSpecs: { 'Capacity': '5-20kWh', 'Power': '5kW', 'Warranty': '10 Years' }
       }
    ],
    faqs: [
        { question: 'Can I add a battery to existing panels?', answer: 'Yes, we can retrofit batteries to almost any existing solar system.' }
    ],
    galleryImages: ['/img_8050.jpeg', '/img_9312.jpeg', '/57eef691-a691-4489-9629-c5336d019a3c.jpg']
  },
  'bird-proofing': {
    id: 'bird-proofing',
    title: 'Solar Panel Bird Proofing',
    subtitle: 'Protect your investment from pigeons and pests.',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
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
    galleryImages: ['/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg', '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'maintenance': {
    id: 'maintenance',
    title: 'Solar Panel Cleaning & Maintenance',
    subtitle: 'Maximize your generation with professional care.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
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
    galleryImages: ['/baea77fd-a9df-488b-9759-39748439a29a.jpg', '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg']
  },
  'ground-mount': {
    id: 'ground-mount',
    title: 'Ground Mount Systems',
    subtitle: 'Utilize your land for maximum energy generation.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
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
    galleryImages: ['/baea77fd-a9df-488b-9759-39748439a29a.jpg', '/baea77fd-a9df-488b-9759-39748439a29a.jpg']
  },
  'off-grid': {
    id: 'off-grid',
    title: 'Off-Grid Systems',
    subtitle: 'Complete energy independence for remote locations.',
    heroImage: '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
    overview: 'For locations without a grid connection, or for those seeking total autonomy. We design robust off-grid systems using Victron Energy equipment for reliability.',
    benefits: [
      { title: 'No Bills', desc: 'Total freedom from utility companies.', icon: 'WifiOff' },
      { title: 'Reliability', desc: 'Power where the grid cannot reach.', icon: 'Shield' }
    ],
    products: [],
    faqs: [
        { question: 'Can I run a whole house off-grid?', answer: 'Yes, with sufficient solar and battery capacity, plus a backup generator for winter.' }
    ],
    galleryImages: ['/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg']
  },
  'ev-charging': {
    id: 'ev-charging',
    title: 'EV Charger Installation',
    subtitle: 'Drive on sunshine with smart home charging.',
    heroImage: '/57eef691-a691-4489-9629-c5336d019a3c.jpg',
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
         image: '/57eef691-a691-4489-9629-c5336d019a3c.jpg', // Fallback to Libbi img for demo if Zappi specific not available
         features: ['Solar Diversion', 'No Earth Rod Needed', '3 Charging Modes'],
         description: 'The world\'s #1 solar-compatible EV charger. Made in Britain.',
         techSpecs: { 'Power': '7kW', 'Warranty': '3 Years', 'Connection': 'Tethered/Socket' }
      }
    ],
    faqs: [
      { question: 'Do I need a new fuse box?', answer: 'Often yes, or a mini consumer unit. We include this in our survey and quote.' },
      { question: 'Can I charge two cars?', answer: 'Yes, we can install dual chargers or load-balance two units so they don\'t overload your supply.' }
    ],
    galleryImages: ['/57eef691-a691-4489-9629-c5336d019a3c.jpg']
  },
  'inverter-replacement': {
    id: 'inverter-replacement',
    title: 'Solar Inverter Replacement',
    subtitle: 'Get your system back online fast.',
    heroImage: '/baea77fd-a9df-488b-9759-39748439a29a.jpg',
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
    galleryImages: ['/baea77fd-a9df-488b-9759-39748439a29a.jpg']
  }
};