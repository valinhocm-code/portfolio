import type { SanityImageSource } from "@sanity/image-url";

export type Credit = {
  role: string;
  names: string;
};

export type CaseStudy = {
  _id: string;
  title: string;
  slug: string;
  client?: string;
  year?: string;
  agency?: string;
  excerpt?: string;
  coverImage: SanityImageSource;
  coverIsVideo?: boolean;
  coverVideoUrl?: string;
  credits?: Credit[];
  gallery?: SanityImageSource[];
  featured?: boolean;
  order?: number;
};
