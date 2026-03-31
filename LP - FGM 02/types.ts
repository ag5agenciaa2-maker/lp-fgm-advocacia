
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}
