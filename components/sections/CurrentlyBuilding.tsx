import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Rule } from '@/components/ui/Rule';
import { Tag } from '@/components/ui/Tag';
import { StatusDot } from '@/components/ui/StatusDot';
import { Reveal } from '@/components/ui/Reveal';
import {
  buildingEntries,
  placeholderEntry,
  showPlaceholderEntry,
  buildingLastUpdated,
} from '@/content/building';
import type { BuildingEntry } from '@/content/building';

const statusColors: Record<string, string> = {
  PAPER: 'border-[rgba(243,240,233,0.3)] text-[rgba(243,240,233,0.6)]',
  ACTIVE: 'border-accent text-accent',
  RESEARCH: 'border-[rgba(243,240,233,0.3)] text-[rgba(243,240,233,0.6)]',
  NEXT: 'border-[rgba(243,240,233,0.2)] text-[rgba(243,240,233,0.4)]',
};

export function CurrentlyBuilding() {
  const entries: BuildingEntry[] = [
    ...buildingEntries,
    ...(showPlaceholderEntry ? [placeholderEntry] : []),
  ];

  return (
    <section
      id="building"
      aria-labelledby="building-heading"
      className="section-dark bg-night text-paper py-24 lg:py-40"
    >
      <Container>
        <Reveal>
          <SectionHeader
            index="04"
            name="Currently building"
            dark
            annotationElement={
              <span className="inline-flex items-center gap-2">
                <StatusDot />
                In progress &middot; Updated {buildingLastUpdated}
              </span>
            }
          />
        </Reveal>

        <Reveal>
          <Grid>
            <h2
              id="building-heading"
              className="text-h2 font-serif text-paper lg:col-span-8"
            >
              What&rsquo;s on the bench right now.
            </h2>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid className="mt-6">
            <p className="text-lead lg:col-span-6 !text-[rgba(243,240,233,0.6)]">
              A portfolio that never changes is a resume with better fonts. This
              is the live list.
            </p>
          </Grid>
        </Reveal>

        <div className="mt-12">
          {entries.map((entry, i) => (
            <div key={entry.title}>
              <Rule dark />
              <Reveal delay={i * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-3 py-8 lg:py-10">
                  <div className="lg:col-span-2">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-mono border ${statusColors[entry.status] || statusColors.NEXT}`}
                    >
                      {entry.status}
                    </span>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="text-h3 font-serif text-paper">
                      {entry.title}
                    </h3>
                    <p className="text-body text-[rgba(243,240,233,0.6)] mt-2">
                      {entry.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    {entry.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <Tag key={tag} dark>
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
          <Rule dark />
        </div>
      </Container>
    </section>
  );
}
