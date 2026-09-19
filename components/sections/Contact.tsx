import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CopyEmail } from '@/components/ui/CopyEmail';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="06" name="Contact" />
        </Reveal>

        <Reveal>
          <Grid>
            <h2
              id="contact-heading"
              className="font-serif text-ink lg:col-span-11"
              style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6rem)' }}
            >
              Let&rsquo;s build something that has to work.
            </h2>
          </Grid>
        </Reveal>

        <Reveal>
          <Grid className="mt-8">
            <p className="text-lead lg:col-span-7">
              If you run a business and suspect your website, or the lack of one,
              is costing you customers, I&rsquo;d like to hear about it. Same if
              you&rsquo;re building something technical and want a second pair of
              hands who understands the business side too.
            </p>
          </Grid>
        </Reveal>

        {/* Email block */}
        <Reveal>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-h3 font-serif text-ink hover:text-accent transition-colors duration-250"
            >
              {siteConfig.email}
            </a>
            <CopyEmail variant="inline" />
          </div>
        </Reveal>

        {/* Socials */}
        <Reveal>
          <div className="mt-8 flex flex-wrap gap-6">
            {siteConfig.socials
              .filter((s) => s.url)
              .map((social) => (
                <ExternalLink
                  key={social.label}
                  href={social.url}
                  className="text-mono text-ink-2 hover:text-ink transition-colors duration-250"
                >
                  {social.label}
                </ExternalLink>
              ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="text-small text-ink-2 mt-8">
            Based in Bengaluru. Replies within a day or two, usually faster.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
