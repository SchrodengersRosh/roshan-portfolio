import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { aboutParagraphs, aboutFacts, showOptionalFacts } from '@/content/about';
import { siteConfig } from '@/content/site';
import { cn } from '@/lib/utils';

export function About() {
  const visibleFacts = aboutFacts.filter(
    (fact) => !fact.optional || showOptionalFacts
  );

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="05" name="About" />
        </Reveal>

        <Grid>
          {/* Left: Heading and text */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                id="about-heading"
                className="text-h2 font-serif text-ink"
              >
                Young, and not pretending otherwise.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6 max-w-[60ch]">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-body text-ink lg:text-[1.125rem]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right: Facts */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            {/* Portrait placeholder - only render if portrait exists */}
            {siteConfig.hasPortrait && (
              <Reveal>
                <div className="relative aspect-[4/5] bg-paper-2 border border-rule mb-6 overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/roshan.jpg"
                    alt="Roshan, Bengaluru"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-400"
                  />
                  <span className="absolute bottom-3 left-3 text-mono text-ink-3">
                    Roshan, Bengaluru
                  </span>
                </div>
              </Reveal>
            )}

            <Reveal>
              <dl>
                {visibleFacts.map((fact, i) => (
                  <div
                    key={fact.label}
                    className={cn(
                      'py-4',
                      i > 0 && 'border-t border-rule'
                    )}
                  >
                    <dt className="text-mono text-ink-3">{fact.label}</dt>
                    <dd
                      className={cn(
                        'text-small text-ink-2 mt-1',
                        fact.optional && 'text-ink-3'
                      )}
                    >
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
