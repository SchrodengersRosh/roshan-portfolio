import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/content/work";

interface CaseStudyHeaderProps {
  study: CaseStudy;
}

export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const indexStr = String(study.index).padStart(2, "0");

  return (
    <header className="pt-40 pb-16 lg:pb-24">
      <Container>
        <Reveal>
          <Eyebrow className="mb-6">
            Selected work &middot; {indexStr}
          </Eyebrow>
        </Reveal>

        <Reveal>
          <h1 className="text-display font-serif text-ink">{study.title}</h1>
          {study.subtitle && (
            <p className="text-h3 font-serif italic text-ink-2 mt-2">
              {study.subtitle}
            </p>
          )}
        </Reveal>

        <Reveal>
          <Grid className="mt-8">
            <p className="text-lead lg:col-span-6 max-w-[40ch]">
              {study.thesis}
            </p>
          </Grid>
        </Reveal>
      </Container>
    </header>
  );
}
