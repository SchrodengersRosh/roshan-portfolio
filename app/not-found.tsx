import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100svh-64px)] flex items-center">
      <Container>
        <p className="text-mono text-ink-2 mb-4">404</p>
        <h1 className="text-display font-serif text-ink">Page not found.</h1>
        <p className="text-lead mt-6 max-w-[40ch]">
          This page doesn&rsquo;t exist. If you were looking for something
          specific, it might have moved.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-mono tracking-[0.08em] uppercase border border-ink bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors duration-250"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}
