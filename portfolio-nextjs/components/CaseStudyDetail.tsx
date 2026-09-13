import Image from "next/image";
import { urlForImage } from "@/sanity/image";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const heroUrl = urlForImage(caseStudy.coverImage).width(1920).url();

  return (
    <article>
      {/* Hero */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200 sm:aspect-[21/9]">
        {caseStudy.coverIsVideo && caseStudy.coverVideoUrl ? (
          <video
            src={caseStudy.coverVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={heroUrl}
            alt={caseStudy.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      {/* Title + meta + credits row */}
      <div className="flex flex-col gap-8 px-10 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-md">
          <h1 className="text-sm">{caseStudy.title}</h1>
          {caseStudy.excerpt && (
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {caseStudy.excerpt}
            </p>
          )}
        </div>

        {(caseStudy.agency || caseStudy.year) && (
          <div className="text-sm text-neutral-500">
            {caseStudy.agency && <p>Agency {caseStudy.agency}</p>}
            {caseStudy.year && <p>Year {caseStudy.year}</p>}
          </div>
        )}

        {caseStudy.credits && caseStudy.credits.length > 0 && (
          <div className="flex gap-12">
            {caseStudy.credits.map((credit, i) => (
              <div key={i} className="text-sm">
                <p className="text-neutral-500">{credit.role}</p>
                <p className="mt-1 whitespace-pre-line">{credit.names}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Gallery */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <div className="grid grid-cols-1 gap-2 px-10 pb-16 sm:grid-cols-2">
          {caseStudy.gallery.map((img, i) => {
            const url = urlForImage(img).width(1200).url();
            return (
              <div
                key={i}
                className="relative aspect-[16/9] overflow-hidden bg-neutral-200"
              >
                <Image
                  src={url}
                  alt={`${caseStudy.title} — ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}
