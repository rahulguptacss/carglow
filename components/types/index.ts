import data from '../data/data.json';

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
  items: ServiceItem[];
  sidebar?: ServiceSidebarData;
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

export interface BlogPost {
  slug?: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

export interface BlogSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  posts: BlogPost[];
  sidebar?: {
    search_placeholder?: string;
    categories_title?: string;
    categories?: { name: string; slug: string }[];
    cta?: {
      badge?: string;
      title?: string;
      description?: string;
      button_text?: string;
      button_href?: string;
      image?: string;
    };
    recent_title?: string;
  };
}

export interface EnquirySectionData {
  subtitle: string;
  title_line1: string;
  title_line2?: string;
  title_highlight: string;
  description: string;
  image: string;
  highlights: { icon: string; title: string; description: string }[];
  form: {
    subtitle: string;
    title: string;
    title_highlight: string;
    description: string;
    button_text: string;
    footer_text: string;
    placeholders: {
      name: string;
      phone: string;
      email: string;
      address: string;
      service: string;
      date: string;
      time: string;
      message: string;
    };
  };
  stats: { icon: string; title: string; description: string }[];
}

export interface QuoteSectionData {
  subtitle: string;
  title_line1: string;
  title_line2?: string;
  title_highlight: string;
  description: string;
  image: string;
  features: { icon: string; title: string; description: string }[];
  quote_box: { text: string; line1: string; line2: string };
  form: {
    subtitle: string;
    title: string;
    title_highlight: string;
    description: string;
    button_text: string;
    footer_text: string;
    placeholders: {
      name: string;
      phone: string;
      email: string;
      service: string;
      date: string;
      time: string;
      message: string;
    };
  };
  stats: { value: string; label: string }[];
}

export interface ContactCard {
  icon: string;
  title: string;
  value?: string;
  href?: string;
  text?: string;
}

export interface ContactSectionData {
  subtitle: string;
  title: string;
  title_line1?: string;
  title_highlight?: string;
  description: string;
  cards: ContactCard[];
  socials: { icon: string; href: string }[];
  form: {
    subtitle: string;
    title: string;
    description: string;
    button_text: string;
    footer_text: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    };
  };
  center: {
    image: string;
    title: string;
    title_highlight?: string;
    description: string;
    address_label: string;
    address: string;
    hours_label: string;
    hours: string[];
    help_title: string;
    help_button: string;
    phone: string;
  };
  map: {
    embed_url: string;
    label: string;
    address: string;
    link_text: string;
    link: string;
  };
}

export interface GalleryPhotoItem {
  image: string;
  alt: string;
}

export interface PhotoGalleryData {
  subtitle: string;
  title: string;
  items: GalleryPhotoItem[];
}

export interface GalleryVideoItem {
  image: string;
  title: string;
  duration: string;
  url: string;
}

export interface VideoGalleryData {
  subtitle: string;
  title: string;
  items: GalleryVideoItem[];
}

export interface GallerySectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
}

export interface SitemapLink {
  name: string;
  href: string;
}

export interface SitemapGroup {
  icon: string;
  title: string;
  links: SitemapLink[];
}

export interface SitemapSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  groups: SitemapGroup[];
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata?: { title: string };
  heading?: string;
  description?: string;
  button_text?: string;
  button_href?: string;
}

export interface MissionVisionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  left_subtitle?: string;
  left_title_line1?: string;
  left_title_highlight?: string;
  left_description?: string;
  image?: string;
  badge_icon?: string;
  badge_title?: string;
  badge_subtitle?: string;
  items: FaqItem[];
}

export interface LegalSection {
  title: string;
  content: string;
  list?: string[];
}

export interface LegalPageData {
  last_updated?: string;
  sections: LegalSection[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
}

export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  num: string;
  title: string;
  desc: string;
  number?: string;
  description?: string;
}

export interface ServiceDetailsData {
  title: string;
  description: string;
  image: string;
  icon?: string;
  subtitle?: string;
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  gallery: string[];
}

export interface ServiceSidebarData {
  services_title?: string;
  enquiry?: {
    subtitle?: string;
    title?: string;
    description?: string;
    button_text?: string;
    footer_text?: string;
    form_placeholders?: {
      name?: string;
      phone?: string;
      service?: string;
      message?: string;
    };
  };
  help?: {
    title?: string;
    description?: string;
    phone?: string;
    time?: string;
  };
}

export interface BlogArticleSection {
  heading: string;
  content: string;
}

export interface BlogDetailsArticle {
  slug: string;
  title: string;
  category?: string;
  author?: string;
  author_role?: string;
  author_image?: string;
  date?: string;
  read_time?: string;
  share_label?: string;
  image?: string;
  intro?: string;
  sections?: BlogArticleSection[];
  quote?: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  pinterest?: string;
  behance?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  [key: string]: string | undefined;
}

export interface TeamMember {
  slug?: string;
  name: string;
  designation: string;
  description?: string;
  image: string;
  social?: SocialLinks;
}

export interface TeamSectionData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description?: string;
  follow_me_text?: string;
  members?: TeamMember[];
}

export interface TeamDetailsData {
  slug: string;
  name: string;
  designation: string;
  image: string;
  yearsOfExperience?: string;
  position?: string;
  experience?: string;
  specialization?: string;
  location?: string;
  availability?: string;
  aboutSubtitle?: string;
  aboutTitle?: string;
  aboutTitleHighlight?: string;
  aboutDescription?: string[];
  skills?: { name: string; percentage: number }[];
  contact?: {
    title: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    buttonText: string;
    buttonLink?: string;
  };
  social?: SocialLinks;
}

export interface DoorstepAboutData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  features: { icon: string; label: string }[];
}

export interface DoorstepHowItWorksData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  steps: { num: string; title: string; description: string; icon: string }[];
}

export interface DoorstepBookingData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  badge_title: string;
  badge_subtitle: string;
  badge_icon: string;
  features: { icon: string; title: string; description: string }[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  backgroundImage?: string;
}

export interface HeaderProps {
  data: HeaderData;
}

export interface FooterProps {
  data: FooterData;
}

export interface HeroProps {
  data: HeroSectionData;
}

export interface AboutProps {
  data: AboutSectionData;
  hideCta?: boolean;
}

export interface WorkProcessProps {
  data: WorkProcessSectionData;
}

export interface ServicesProps {
  data: ServicesSectionData;
  isGrid?: boolean;
  itemsPerPage?: number;
  variant?: 'default' | 'doorstep';
  showPagination?: boolean;
  bgClass?: string;
}

export interface FeaturesProps {
  data: FeaturesSectionData;
}

export interface PricingProps {
  data: PricingSectionData;
  bgClass?: string;
}

export interface TestimonialsProps {
  data: TestimonialsSectionData;
  isGrid?: boolean;
  itemsPerPage?: number;
  showPagination?: boolean;
  bgClass?: string;
}

export interface CtaProps {
  data: CtaSectionData;
}

export interface BlogProps {
  data: BlogSectionData;
  bgClass?: string;
  showPagination?: boolean;
  itemsPerPage?: number;
}

export interface EnquiryProps {
  data: EnquirySectionData;
  services?: { title: string }[];
}

export interface QuoteProps {
  data: QuoteSectionData;
  services?: { title: string }[];
}

export interface ContactProps {
  data: ContactSectionData;
  services?: { title: string }[];
}

export interface GalleryIntroProps {
  data: GallerySectionData;
}

export interface PhotoGalleryProps {
  data: PhotoGalleryData;
}

export interface VideoGalleryProps {
  data: VideoGalleryData;
}

export interface SitemapProps {
  data: SitemapSectionData;
}

export interface MissionProps {
  data: MissionVisionData;
}

export interface VisionProps {
  data: MissionVisionData;
}

export interface FaqsProps {
  data: FaqsSectionData;
}

export interface LegalPageProps {
  data: LegalPageData;
}

export interface ServiceDetailsProps {
  data: ServiceDetailsData;
  allServices: ServiceItem[];
  sidebarData?: ServiceSidebarData;
}

export interface BlogDetailsProps {
  data: BlogDetailsArticle;
  allPosts: BlogPost[];
  sidebarData?: BlogSectionData['sidebar'];
}

export interface TeamProps {
  data: TeamSectionData;
}

export interface TeamDetailProps {
  data: TeamDetailsData;
}

export interface DoorstepAboutProps {
  data: DoorstepAboutData;
}

export interface DoorstepHowItWorksProps {
  data: DoorstepHowItWorksData;
}

export interface DoorstepBookingProps {
  data: DoorstepBookingData;
}

export interface ThankYouSectionData {
  title: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
}

export interface ThankYouProps {
  data: ThankYouSectionData;
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Automotive.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

export function toSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
