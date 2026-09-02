import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { WorkCard } from "@/app/components/WorkCard";
import { WebWorkCard } from "@/app/components/WebWorkCard";
import { works } from "@/app/site-data";
import { webWorks } from "@/app/web-works/data";

export const metadata: Metadata = {
  title: "制作実績",
  description: "データ整理、公開情報リサーチ、売上集計・簡易自動化の自主制作実績を紹介します。",
};

export default function WorksPage() {
  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <SiteHeader />
      <main id="main">
        <section className="page-hero section-shell">
          <p className="eyebrow">WORKS</p>
          <h1>制作実績</h1>
          <p>結果だけでなく、整理のルール、出典、件数照合、更新方法まで残した自主制作です。</p>
        </section>
        <section className="works-page-list section-shell">
          {works.map((work, index) => <WorkCard key={work.slug} work={work} index={index} />)}
        </section>
        <section className="web-works-on-works section-shell" aria-labelledby="web-works-title">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">WEB DESIGN STUDIES</p><h2 id="web-works-title">目的から設計を変えた、6つのWebサイト。</h2></div>
            <p>架空事業者を題材に、業種・閲覧者・行動に合わせて異なるトーンと情報設計で制作しました。</p>
          </div>
          <div className="web-works-list">{webWorks.map(work => <WebWorkCard key={work.slug} work={work} />)}</div>
        </section>
        <section className="site-as-work section-shell">
          <div>
            <p className="eyebrow">WEB PRODUCTION</p>
            <h2>このWebサイトも、自主制作です。</h2>
          </div>
          <p>
            情報設計、文章整理、画像制作、PC・スマートフォン対応、表示確認、公開までを一つの制作工程として記録しています。
            各作品は架空事業者を題材にした自主制作です。
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
