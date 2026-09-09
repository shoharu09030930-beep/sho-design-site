import Image from "next/image";
import Link from "next/link";
import type { webWorks } from "@/app/web-works/data";

type WebWork = (typeof webWorks)[number];

export function WebWorkCard({ work }: { work: WebWork }) {
  const href = "externalUrl" in work ? work.externalUrl : `/web-works/${work.slug}`;
  const linkProps = "externalUrl" in work
    ? { href, target: "_blank" as const, rel: "noreferrer" }
    : { href };

  const preview = (
    <>
      {"image" in work && work.image ? (
        <Image src={work.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
      ) : (
        <div className="web-work-art" aria-hidden="true"><i /><i /><i /></div>
      )}
      <span className="web-work-preview-label">{"externalUrl" in work ? "LIVE SAMPLE ↗" : "VIEW SITE ↗"}</span>
      <strong>{work.title}</strong>
    </>
  );

  return (
    <article className="web-work-card">
      {"externalUrl" in work ? (
        <a className={`web-work-preview web-work-${work.theme}`} {...linkProps} aria-label={`${work.title}の公開サンプルを見る（新しいタブ）`}>{preview}</a>
      ) : (
        <Link className={`web-work-preview web-work-${work.theme}`} href={href} aria-label={`${work.title}のサイトを見る`}>{preview}</Link>
      )}
      <div className="web-work-meta">
        <span>WEB {work.number}</span>
        <div>
          <p>{work.industry}</p>
          <h3>{"externalUrl" in work ? <a {...linkProps}>{work.title}</a> : <Link href={href}>{work.title}</Link>}</h3>
          <small>{work.tone}{"externalUrl" in work ? "｜自主制作・架空店舗｜外部公開サンプル" : ""}</small>
        </div>
      </div>
    </article>
  );
}
