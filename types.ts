export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectImage {
  id: string;
  slug?: string; // For routing
  url: string; 
  category: 'Solar PV' | 'Battery Storage' | 'Inverters' | 'Commercial';
  description: string;
  location?: string;
  systemSize?: string;
  // Case Study Fields
  title?: string;
  client?: string;
  date?: string;
  challenge?: string; // HTML allowed
  solution?: string; // HTML allowed
  outcome?: string; // HTML allowed
  stats?: { label: string; value: string }[];
  gallery?: string[];
}

export interface CalculatorState {
  monthlyBill: number;
  sunHours: number; // Average peak sun hours
  systemSize: number; // in kW
  batteryCapacity: number; // in kWh
}

export interface ProductSpec {
  id: string; // Added for routing
  name: string;
  brand: string;
  image: string;
  features: string[];
  description: string;
  techSpecs?: Record<string, string>;
}

export interface ProductPageData {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  heroImage: string;
  description: string;
  features: { title: string; desc: string; icon: string }[];
  specs: Record<string, string>;
  relatedProducts?: string[];
  priceRange?: { low: string; high: string };
  category?: string;
}

export interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  extendedContent?: string;
  benefits: { title: string; desc: string; icon: string }[];
  products: ProductSpec[];
  galleryImages?: string[];
  faqs: { question: string; answer: string }[];
  relatedServices?: string[];
}

export interface BlogPost {
  id: string;
  slug: string; // Added for routing
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

export interface BlogPostData {
  id: string;
  title: string;
  date: string;
  category: string;
  author: string;
  heroImage: string;
  content: string;
  relatedLinks?: { label: string; url: string }[];
  locationSlug?: string;
  relatedLocations?: string[];
  targetService?: string;
}

export interface LocationItem {
  name: string;
  slug: string;
  county: string;
  lat?: number;
  lng?: number;
}

export interface LocationPageData {
  slug: string;
  name: string;
  metaDescription: string;
  heroImage: string;
  introTitle: string;
  introText: string[];
  extendedContent?: string; // NEW: For 1500+ word SEO content HTML
  localLandmarks: string[];
  solarPotential: string;
  planningAdvice: string;
  faq: { question: string; answer: string }[];
}

export interface Brand {
  name: string;
  logo: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  system: string;
}

export interface CostGuideData {
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string;
    table?: { col1: string; col2: string }[];
  }[];
  faqs: { question: string; answer: string }[];
}

export interface AboutPageData {
  title: string;
  heroImage: string;
  story: string[];
  values: { title: string; desc: string; icon: string }[];
  teamStats: { label: string; value: string }[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category?: 'Technical' | 'Financial' | 'Regulatory';
}