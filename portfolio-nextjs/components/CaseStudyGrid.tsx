import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (caseStudies.length === 0) {
    return (
      <p className="px-10 py-24 text-sm text-neutral-500">
        Nenhum case publicado ainda. Adicione um pelo Sanity Studio em{" "}
        <code>/studio</code>.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-10 py-16 sm:grid-cols-2">
      {caseStudies.map((cs) => (
        <CaseStudyCard key={cs._id} caseStudy={cs} />
      ))}
    </div>
  );
}
