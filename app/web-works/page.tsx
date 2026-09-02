import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { WebWorkCard } from "@/app/components/WebWorkCard";
import { webWorks } from "./data";

export const metadata: Metadata = {
  title: "Webサイト自主制作",
  description: "業種・目的・トーンから設計を変えた、6つのWebサイト自主制作を紹介します。",
};

export default function WebWorksPage() {
  return <><a className="skip-link" href="#main">本文へ移動</a><SiteHeader /><main id="main">
    <section className="page-hero section-shell web-works-hero"><p className="eyebrow">WEB DESIGN STUDIES</p><h1>6つの目的に、<br />6つのデザイン。</h1><p>業種ごとの閲覧者と行動を想定し、情報設計・配色・書体・余白・写真・操作感まで個別に設計した自主制作です。</p></section>
    <section className="web-works-intro section-shell"><p>すべて架空の事業者を題材にしています。</p><div><span>6 INDUSTRIES</span><span>RESPONSIVE</span><span>ORIGINAL DESIGN</span></div></section>
    <section className="web-works-list section-shell" aria-label="Webサイト自主制作6件">{webWorks.map(work => <WebWorkCard key={work.slug} work={work} />)}</section>
    <section className="web-works-note section-shell"><p className="eyebrow">DESIGN APPROACH</p><h2>同じ型を着せ替えず、<br />伝える順番から変えました。</h2><p>BtoBは数値と信頼、カフェは写真と温度、サロンは余白、学習教室は楽しさ、建築は作品、SaaSは機能理解を中心に組み立てています。</p></section>
  </main><SiteFooter /></>;
}
