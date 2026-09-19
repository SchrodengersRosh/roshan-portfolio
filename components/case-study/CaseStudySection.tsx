import { Rule } from "@/components/ui/Rule";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudySection as CaseStudySectionType } from "@/content/work";

interface CaseStudySectionProps {
  section: CaseStudySectionType;
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <div>
      <Rule />
      <Reveal>
        <div className="py-10 lg:py-14">
          <span className="text-mono text-ink-2">{section.label}</span>
          <h2 className="text-h3 font-serif text-ink mt-4">
            {section.heading}
          </h2>
          {section.paragraphs && (
            <div className="mt-6 space-y-4">
              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-body text-ink lg:text-[1.125rem] max-w-[62ch]"
                >
                  {para}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="mt-6 space-y-0">
              {section.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-body text-ink lg:text-[1.125rem] max-w-[62ch] py-3 border-t border-rule first:border-t-0"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    </div>
  );
}
