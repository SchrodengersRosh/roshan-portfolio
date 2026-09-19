import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Rule } from '@/components/ui/Rule';
import { Tag } from '@/components/ui/Tag';
import { Reveal } from '@/components/ui/Reveal';
import { experienceEntries } from '@/content/experience';
import { siteConfig } from '@/content/site';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="02" name="Experience" />
        </Reveal>

        <Reveal>
          <Grid>
            <h2
              id="experience-heading"
              className="text-h2 font-serif text-ink lg:col-span-7"
            >
              Commercial work, not classroom exercises.
            </h2>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid className="mt-6">
            <p className="text-lead lg:col-span-6">
              Alongside college, I&rsquo;ve done paid digital marketing and
              business development work for businesses in India and the US. Here
              is the scope, described honestly, without invented numbers.
            </p>
          </Grid>
        </Reveal>

        <div className="mt-12">
          {experienceEntries.map((entry, i) => {
            // Determine the display title
            const displayTitle = entry.conditionalTitle
              ? siteConfig.flags.showClientNames
                ? entry.conditionalTitle.shown
                : entry.conditionalTitle.hidden
              : entry.title;

            return (
              <div key={i}>
                <Rule />
                <Reveal>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-2 py-8 lg:py-10">
                    <div className="lg:col-span-3">
                      <span className="text-mono text-ink-2">{entry.label}</span>
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="text-[1.125rem] font-medium text-ink">
                        {displayTitle}
                      </h3>
                      <p className="text-body text-ink-2 mt-2">{entry.text}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {entry.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
          <Rule />
        </div>
      </Container>
    </section>
  );
}
