import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/site-data";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export function WorkDetail({ work }: { work: Work }) {
  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <SiteHeader />
      <main id="main">
        <section className="work-detail-hero section-shell">
          <Link className="back-link" href="/works"><span aria-hidden="true">←</span> 制作実績一覧</Link>
          <div className="work-detail-heading">
            <div>
              <p className="eyebrow">WORK {work.number} / {work.category}</p>
              <span className="self-made-label">自主制作</span>
              <h1>{work.title}</h1>
              <p>{work.summary}</p>
            </div>
            <div className="work-detail-image">
              <Image src={work.mainImage} alt={`${work.title}のメイン画像`} width={1200} height={1200} sizes="(max-width: 800px) 100vw, 52vw" priority />
            </div>
          </div>
          <div className="detail-metrics">
            {work.metrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        </section>

        <section className="detail-section detail-section-tint">
          <div className="section-shell detail-two-column">
            <div className="detail-label"><p className="eyebrow">BACKGROUND</p><h2>想定した課題</h2></div>
            <div className="detail-copy lead-copy"><p>{work.challenge}</p></div>
          </div>
        </section>

        <section className="detail-section section-shell">
          <div className="detail-two-column">
            <div className="detail-label"><p className="eyebrow">PROCESS</p><h2>対応内容</h2></div>
            <div className="detail-copy"><ol className="numbered-list">{work.actions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span><p>{action}</p></li>)}</ol></div>
          </div>
        </section>

        <section className="detail-gallery section-shell" aria-label={`${work.title}の画面例`}>
          {work.detailImages.map((image) => (
            <figure key={image.src}><Image src={image.src} alt={image.alt} width={1600} height={1000} sizes="(max-width: 800px) 100vw, 48vw" /><figcaption>{image.alt}</figcaption></figure>
          ))}
        </section>

        <section className="detail-section detail-section-tint">
          <div className="section-shell result-grid">
            <article><p className="eyebrow">DELIVERABLES</p><h2>成果物</h2><ul>{work.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><p className="eyebrow">QUALITY CHECK</p><h2>確認したこと</h2><ul>{work.quality.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </section>

        <section className="detail-tools section-shell">
          <div><p className="eyebrow">TOOLS</p><h2>使用ツール・方法</h2></div>
          <div className="tool-tags">{work.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          <p className="project-note">{work.note}</p>
          <Link className="button button-outline" href="/works">制作実績一覧へ戻る</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
