import { client } from "@/sanity/client";
import type { CaseStudy } from "./types";

// One shared projection so the grid and the detail page always agree
// on field names — change it once, both places update.
const CASE_STUDY_PROJECTION = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  client,
  year,
  agency,
  excerpt,
  coverImage,
  coverIsVideo,
  coverVideoUrl,
  credits,
  gallery,
  featured,
  order
}`;

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!client) return [];
  const query = /* groq */ `
    *[_type == "caseStudy"] | order(order asc, _createdAt desc) ${CASE_STUDY_PROJECTION}
  `;
  return client.fetch(query, {}, { next: { revalidate: 60, tags: ["caseStudy"] } });
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  if (!client) return [];
  const query = /* groq */ `
    *[_type == "caseStudy" && featured == true] | order(order asc, _createdAt desc) ${CASE_STUDY_PROJECTION}
  `;
  return client.fetch(query, {}, { next: { revalidate: 60, tags: ["caseStudy"] } });
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  if (!client) return null;
  const query = /* groq */ `
    *[_type == "caseStudy" && slug.current == $slug][0] ${CASE_STUDY_PROJECTION}
  `;
  return client.fetch(query, { slug }, { next: { revalidate: 60, tags: ["caseStudy"] } });
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  if (!client) return [];
  const query = /* groq */ `*[_type == "caseStudy"].slug.current`;
  return client.fetch(query, {}, { next: { revalidate: 60, tags: ["caseStudy"] } });
}
