export interface ContentSection {
  heading?: string;
  text: string;
  image?: string;
  imageAlt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  sections: ContentSection[];
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  imageBefore: string;
  imageAfter: string;
}
