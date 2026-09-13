import CaseStudyGrid from "@/components/CaseStudyGrid";
import { getAllCaseStudies } from "@/lib/queries";

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudyGrid caseStudies={caseStudies} />;
}
