"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlForImage } from "@/sanity/image";
import type { CaseStudy } from "@/lib/types";

/**
 * The one placeholder unit. Every project on the homepage grid is an
 * instance of this component, fed by a CaseStudy document from Sanity.
 * Nothing here is hardcoded content — swap the Sanity dataset and the
 * whole grid repopulates.
 */
export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [hovered, setHovered] = useState(false);
  const imageUrl = urlForImage(caseStudy.coverImage).width(1200).height(675).url();

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">
        <Image
          src={imageUrl}
          alt={caseStudy.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 ease-out ${
            hovered ? "scale-[1.03]" : "scale-100"
          }`}
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between text-sm">
        <span className="link-underline">{caseStudy.title}</span>
        {caseStudy.client && (
          <span className="text-neutral-500">@ {caseStudy.client}</span>
        )}
      </div>
    </Link>
  );
}
