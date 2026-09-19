import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Rule } from '@/components/ui/Rule';
import { Reveal } from '@/components/ui/Reveal';
import { WorkRow } from './WorkRow';
import { caseStudies } from '@/content/work';

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeader
            index="01"
            name="Selected work"
            annotation="Three projects. Real business, real code, real customers."
          />
        </Reveal>

        <Reveal>
          <Grid>
            <h2
              id="work-heading"
              className="text-h2 font-serif text-ink lg:col-span-8"
            >
              Work I can actually talk about in detail.
            </h2>
          </Grid>
        </Reveal>

        <div className="mt-12">
          <Rule />
          {caseStudies.map((study) => (
            <div key={study.slug}>
              <Reveal>
                <WorkRow study={study} />
              </Reveal>
              <Rule />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
