export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
  sublinks?: LinkType[];
}

export interface HeaderData {
  logo_image: string;
  logo_text: string;
  logo_subtext: string;
  contact_info: { icon: string; label: string; value: string }[];
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_image: string;
  logo_text: string;
  description: string;
  socials: { icon: string; href: string }[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: { address: string; phone: string; email: string };
  copyright: string;
}

export interface HeroSlide {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  title_line2: string;
  description: string;
  primary_button: { text: string; href: string };
  secondary_button: { text: string; href: string };
  image: string;
}

export interface HeroSectionData {
  slides: HeroSlide[];
  stats: { value?: string; label: string; icon?: string }[];
  mobile_features?: { label: string; icon: string }[];
  floating_badges: { value: string; label: string; icon: string }[];
}

export interface AboutSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  steps: { number?: string; title: string; description: string; icon: string }[];
}

export interface WorkProcessSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  steps: { number: string; title: string; description: string; icon: string }[];
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  items: { title: string; description: string; image: string; link: string; icon: string }[];
}

export interface FeaturesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  badge: { value: string; label: string };
  items: { title: string; description: string; icon: string }[];
}

export interface PricingSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  packages: {
    name: string;
    description?: string;
    price: string;
    period: string;
    is_popular: boolean;
    image: string;
    features: { text: string; included: boolean }[];
    button: { text: string; href: string };
  }[];
}

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  reviews: { text: string; author: string; role: string; avatar: string; rating: number }[];
}

export interface CtaSectionData {
  subtitle?: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  phone: string;
  button: { text: string; href: string };
  image: string;
}

export interface BlogSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  posts: { title: string; description: string; image: string; date: string; category: string; link: string }[];
}
