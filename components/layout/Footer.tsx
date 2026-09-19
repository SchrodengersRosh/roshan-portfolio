import { Container } from "./Container";
import { LocalTime } from "@/components/ui/LocalTime";
import { siteConfig } from "@/content/site";
import { Rule } from "@/components/ui/Rule";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark bg-night text-paper py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Left */}
          <div>
            <p className="font-serif text-[1.25rem] text-paper">Roshan</p>
            <p className="text-mono text-[rgba(243,240,233,0.6)] mt-2">
              Builder &middot; Digital strategist &middot; Engineering student,
              DSCE
            </p>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-col gap-2 md:items-center">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-mono text-[rgba(243,240,233,0.6)] hover:text-paper transition-colors duration-250"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-mono text-[rgba(243,240,233,0.6)]">
              &copy; {currentYear} Roshan
            </p>
            <p className="text-mono text-[rgba(243,240,233,0.6)]">
              <LocalTime />
            </p>
          </div>
        </div>

        <Rule dark className="my-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-mono text-[rgba(243,240,233,0.6)]">
            Designed and built by Roshan. Deployed on Vercel.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-mono text-[rgba(243,240,233,0.6)] hover:text-paper transition-colors duration-250"
          >
            Back to top
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 10V2M6 2L2 6M6 2L10 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
