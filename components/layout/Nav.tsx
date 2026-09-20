"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "./Container";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DUR_FAST } from "@/lib/motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/work/");
  const shouldReduceMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section tracking on landing page
  useEffect(() => {
    if (isCaseStudy) return;

    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isCaseStudy]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape and trap focus
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }

      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        aria-label="Primary"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-250",
          scrolled
            ? "bg-paper/85 backdrop-blur-sm border-b border-rule"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          {/* Left: Name and location */}
          <div className="flex items-baseline gap-3">
            <Link
              href="/"
              className="font-serif text-[1.25rem] text-ink leading-none"
            >
              Roshan
            </Link>
            <span className="text-mono text-ink-2 hidden md:inline">
              Bengaluru
            </span>
          </div>

          {/* Center/Right: Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {isCaseStudy ? (
              <Link
                href="/#work"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 font-mono text-mono tracking-[0.08em] uppercase border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper transition-colors duration-250"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 3L5 7L9 11"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to work
              </Link>
            ) : (
              <>
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-mono text-ink-2 hover:text-ink transition-colors duration-250",
                      "bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-[position:0_100%] bg-no-repeat bg-gradient-to-r from-ink to-ink transition-[background-size,color] duration-250",
                      activeSection === item.href.replace("#", "") &&
                        "bg-[length:100%_1px] text-ink"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
                <CopyEmail variant="button" />
              </>
            )}
          </div>

          {/* Mobile: Menu button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-mono text-ink cursor-pointer"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </Container>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : DUR_FAST }}
            className="fixed inset-0 z-40 bg-paper pt-20 flex flex-col md:hidden"
          >
            <Container className="flex flex-col flex-1 justify-between pb-12">
              <div className="flex flex-col gap-6 pt-8">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-h2 font-serif text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-8 border-t border-rule">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-mono text-ink-2"
                >
                  {siteConfig.email}
                </a>
                <div className="flex gap-4">
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
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
