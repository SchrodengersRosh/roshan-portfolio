import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyMeta } from "@/components/case-study/CaseStudyMeta";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { CaseStudyNext } from "@/components/case-study/CaseStudyNext";
import { PlateFrame } from "@/components/plates/PlateFrame";
import { BlueprintPlate } from "@/components/plates/BlueprintPlate";
import { SchematicPlate } from "@/components/plates/SchematicPlate";
import { ChannelMapPlate } from "@/components/plates/ChannelMapPlate";
import { Rule } from "@/components/ui/Rule";
import { caseStudies } from "@/content/work";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/utils";

const plates: Record<string, React.FC<{ className?: string }>> = {
  blueprint: BlueprintPlate,
  schematic: SchematicPlate,
  "channel-map": ChannelMapPlate,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: `${study.title} · Selected work`,
    description: study.thesis,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} · Selected work`,
      description: study.thesis,
      type: "article",
      locale: "en_IN",
      siteName: "Roshan",
      url: `${getSiteUrl()}/work/${study.slug}`,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const Plate = plates[study.plate];
  const indexStr = String(study.index).padStart(2, "0");

  // Get next study (wraps around)
  const nextIndex = study.index % caseStudies.length;
  const nextStudy = caseStudies[nextIndex];

  // Conditionally render Pyray's "Clients" section with showClientNames
  const processedSections = study.sections.map((section) => {
    if (study.slug === "pyray" && section.label === "Clients") {
      return {
        ...section,
        paragraphs: section.paragraphs?.map((p) =>
          siteConfig.flags.showClientNames
            ? p.replace(
                "focused on outreach",
                "including Adify, focused on outreach"
              )
            : p
        ),
      };
    }
    return section;
  });

  return (
    <article>
      <CaseStudyHeader study={study} />

      {/* Full-width plate */}
      <Container>
        <PlateFrame
          caption={`Fig. ${indexStr}  ·  ${study.title}`}
          className="aspect-[4/3] lg:aspect-[21/9]"
        >
          {Plate && <Plate />}
        </PlateFrame>
      </Container>

      {/* Body */}
      <Container className="mt-16 lg:mt-24">
        <Grid>
          {/* Sticky meta column */}
          <aside className="lg:col-span-3 mb-10 lg:mb-0">
            <div className="lg:hidden border border-rule p-6 mb-8">
              <CaseStudyMeta study={study} />
            </div>
            <div className="hidden lg:block">
              <CaseStudyMeta study={study} />
            </div>
          </aside>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Content column */}
          <div className="lg:col-span-7">
            {processedSections.map((section, i) => (
              <CaseStudySection key={i} section={section} />
            ))}
            <Rule />
          </div>
        </Grid>
      </Container>

      {/* Next project */}
      <CaseStudyNext study={nextStudy} />
    </article>
  );
}
