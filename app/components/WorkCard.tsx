import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/site-data";

export function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <article className={`work-card work-card-${index + 1}`}>
      <Link className="work-image-link" href={`/works/${work.slug}`} aria-label={`${work.title}の詳細を見る`}>
        <Image src={work.mainImage} alt={`${work.title}のメイン画像`} width={1200} height={1200} sizes="(max-width: 800px) 100vw, 44vw" />
      </Link>
      <div className="work-card-body">
        <div className="work-meta"><span>自主制作</span><span>{work.category}</span></div>
        <h3><Link href={`/works/${work.slug}`}>{work.title}</Link></h3>
        <p>{work.summary}</p>
        <div className="work-metrics">
          {work.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
          ))}
        </div>
        <Link className="text-link" href={`/works/${work.slug}`}>
          詳細を見る <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
