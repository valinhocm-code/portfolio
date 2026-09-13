import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Cached at the edge, revalidated by tag/time — see revalidate config
  // per-fetch in lib/sanity/queries.ts.
  useCdn: process.env.NODE_ENV === "production",
});
