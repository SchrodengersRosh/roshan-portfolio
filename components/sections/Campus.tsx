'use client';

import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { campusRoles, campusEvents } from '@/content/campus';
import { cn } from '@/lib/utils';

export function Campus() {
  return (
    <section id="campus" aria-labelledby="campus-heading" className="py-24 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="03" name="Campus & stage" />
        </Reveal>

        <Reveal>
          <Grid>
            <h2
              id="campus-heading"
              className="text-h2 font-serif text-ink lg:col-span-8"
            >
              Where I learned to hold a room.
            </h2>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid className="mt-6">
            <p className="text-lead lg:col-span-6">
              College teams are the closest thing to a real company most students
              get: deadlines, budgets, sponsors, and an audience that will
              absolutely tell you if you&rsquo;re boring. I&rsquo;ve been on the
              marketing, PR, emcee and fashion teams at DSCE.
            </p>
          </Grid>
        </Reveal>

        <Grid className="mt-12">
          {/* Left: Role blocks */}
          <div className="lg:col-span-6 space-y-0">
            {campusRoles.map((role, i) => (
              <Reveal key={role.label} delay={i * 0.06}>
                <div className={cn(i > 0 && 'border-t border-rule', 'py-6 lg:py-8')}>
                  <span className="text-mono text-ink-2">{role.label}</span>
                  <p className="text-body text-ink-2 mt-2 max-w-[50ch]">
                    {role.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right: Event lineup */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <Reveal>
              <div className="border border-rule bg-paper-2 p-8">
                <span className="text-mono text-ink-2">
                  Hosted &middot; Organised &middot; Performed
                </span>
                <div className="mt-6 space-y-0">
                  {campusEvents.map((event, i) => (
                    <div
                      key={event.name}
                      className={cn(
                        'py-4 group cursor-default',
                        i > 0 && 'border-t border-rule'
                      )}
                    >
                      <p className="text-h3 font-serif text-ink transition-transform duration-250 group-hover:scale-105">
                        {event.name}
                      </p>
                      {event.role && (
                        <span className="text-mono text-ink-3 mt-1 block">
                          {event.role}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
