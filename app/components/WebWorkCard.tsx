import Image from "next/image";
import Link from "next/link";
import type { webWorks } from "@/app/web-works/data";

type WebWork = (typeof webWorks)[number];

export function WebWorkCard({ work }: { work: WebWork }) {
  return (
    <article className="web-work-card">
      <Link className={`web-work-preview web-work-${work.theme}`} href={`/web-works/${work.slug}`} aria-label={`${work.title}のサイトを見る`}>
        {"image" in work && work.image ? (
          <Image src={work.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
        ) : (
          <div className="web-work-art" aria-hidden="true"><i /><i /><i /></div>
        )}
        <span className="web-work-preview-label">VIEW SITE ↗</span>
        <strong>{work.title}</strong>
      </Link>
      <div className="web-work-meta">
        <span>WEB {work.number}</span>
        <div><p>{work.industry}</p><h3><Link href={`/web-works/${work.slug}`}>{work.title}</Link></h3><small>{work.tone}</small></div>
      </div>
    </article>
  );
}
