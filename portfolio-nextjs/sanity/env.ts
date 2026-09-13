export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-01";

// Public Sanity project configuration. Environment variables can override these
// values in Vercel/local development, but the portfolio remains connected to
// its production CMS when they are not configured.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1oj51c2v";
