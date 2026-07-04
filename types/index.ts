export type Testimonial = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  procedure?: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type BeforeAfterItem = {
  id: string;
  procedure: string;
  beforeImage: string;
  afterImage: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
};
