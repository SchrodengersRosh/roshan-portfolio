import { Tag } from "@/components/ui/Tag";
import { Rule } from "@/components/ui/Rule";
import type { CaseStudy } from "@/content/work";

interface CaseStudyMetaProps {
  study: CaseStudy;
}

export function CaseStudyMeta({ study }: CaseStudyMetaProps) {
  return (
    <div className="lg:sticky lg:top-24">
      <dl className="space-y-0">
        <div className="py-4">
          <dt className="text-mono text-ink-3">Role</dt>
          <dd className="text-small text-ink-2 mt-1">{study.role}</dd>
        </div>
        <Rule />
        <div className="py-4">
          <dt className="text-mono text-ink-3">Type</dt>
          <dd className="text-small text-ink-2 mt-1">{study.type}</dd>
        </div>
        <Rule />
        <div className="py-4">
          <dt className="text-mono text-ink-3">Stack / Skills</dt>
          <dd className="flex flex-wrap gap-2 mt-2">
            {study.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </dd>
        </div>
        <Rule />
        <div className="py-4">
          <dt className="text-mono text-ink-3">Status</dt>
          <dd className="text-small text-ink-2 mt-1">{study.status}</dd>
        </div>
      </dl>
    </div>
  );
}
