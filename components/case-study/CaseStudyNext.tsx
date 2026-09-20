import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Rule } from "@/components/ui/Rule";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/content/work";

interface CaseStudyNextProps {
  study: CaseStudy;
}

export function CaseStudyNext({ study }: CaseStudyNextProps) {
  return (
    <div className="py-24 lg:py-36">
      <Container>
        <Rule />
        <Reveal>
          <Link
            href={`/work/${study.slug}`}
            className="group flex items-center justify-between py-10 lg:py-14"
          >
            <div>
              <span className="text-mono text-ink-2">Next</span>
              <h3 className="text-h2 font-serif text-ink mt-2">
                {study.title}
              </h3>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
              className="flex-shrink-0 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M8 16H24M24 16L18 10M24 16L18 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
        <Rule />
      </Container>
    </div>
  );
}
