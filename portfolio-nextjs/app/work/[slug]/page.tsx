import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/queries";

export async function generateStaticParams() {
  try {
    const slugs = await getAllCaseStudySlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    // No dataset yet, or Sanity temporarily unreachable at build time —
    // fall back to zero pre-rendered paths; they'll render on-demand.
    return [];
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}
