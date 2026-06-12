export const BRAND = {
  name: 'Mohamed Ahmed Fouad',
  fullName: 'Mohamed Ahmed Fouad Amin',
  title: 'Real Estate Expert',
  company: 'Alfouad Group',
  tagline: 'Guiding Excellence In Real Estate',
  phone: '+971 58 589 9995',
  whatsappLink: 'https://wa.me/971585899995',
  email: 'info@mohamedahmedfouad.com',
  city: 'Dubai, United Arab Emirates',
  country: 'AE',
  website: 'https://mohamedahmedfouad.com',
};

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mohamedahmedfouad.com'
).replace(/\/$/, '');

export const DEFAULT_OG_IMAGE = '/og-image.png';
export const DEFAULT_TITLE = 'Mohamed Ahmed Fouad — Real Estate Expert';
export const DEFAULT_DESCRIPTION =
  'Mohamed Ahmed Fouad Amin is a distinguished real estate expert, author, and investment consultant with over two decades of experience in valuation, development advisory, and high-level market analysis across the UAE and the MENA region.';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Biography', href: '/#biography' },
  { label: 'Services', href: '/#services' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Media', href: '/#media' },
  { label: 'Contact', href: '/#contact' },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: 'Real Estate Valuation',
    description: 'Accurate valuations for residential, commercial, and mixed-use properties.',
    icon: 'valuation',
  },
  {
    title: 'Investment Advisory',
    description: 'Data-driven investment strategies for maximum returns.',
    icon: 'investment',
  },
  {
    title: 'Market Analysis',
    description: 'In-depth market research and feasibility studies for smarter decisions.',
    icon: 'analysis',
  },
  {
    title: 'Development Advisory',
    description: 'Guiding developers from concept to successful project delivery.',
    icon: 'development',
  },
  {
    title: 'Risk Assessment',
    description: 'Identifying risks and opportunities to protect and grow your assets.',
    icon: 'risk',
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100+', label: 'Happy Clients' },
  { value: 'UAE & MENA', label: 'Market Expertise' },
];

export const SOCIAL_LINKS = [
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/mohamedahmedfouad' },
  { platform: 'twitter', url: 'https://twitter.com/mohamedahmedfouad' },
  { platform: 'instagram', url: 'https://instagram.com/mohamedahmedfouad' },
  { platform: 'youtube', url: 'https://youtube.com/@mohamedahmedfouad' },
];
