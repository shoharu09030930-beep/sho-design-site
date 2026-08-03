import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "この研究室について",
  description: "shoの業務自動化研究室が大切にしている、AI活用と品質確認の考え方を紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <SiteHeader />
      <main id="main">
        <section className="page-hero section-shell">
          <p className="eyebrow">ABOUT THE LAB</p>
          <h1>この研究室について</h1>
          <p>AIそのものではなく、面倒な仕事を安全に減らし、現場で使える状態にすることを目的にしています。</p>
        </section>

        <section className="about-profile section-shell">
          <div className="about-image"><Image src="/assets/profile-sho.png" alt="ノートパソコンで作業するshoのイラスト" width={1024} height={1024} sizes="(max-width: 800px) 80vw, 420px" /></div>
          <div className="about-copy">
            <p className="eyebrow">PROFILE</p><h2>sho</h2>
            <p>営業・ソフトウェア営業・現場職の経験を経て、現在はAIを活用したリサーチ、データ整理、集計、小規模な業務補助ツール制作に取り組んでいます。</p>
            <p>作業内容を先に整理し、AIに任せる部分、人が確認する部分、人だけが判断する部分を分けて進めることを大切にしています。</p>
            <div className="profile-tags"><span>データ整理</span><span>公開情報リサーチ</span><span>業務補助ツール</span><span>Web制作</span></div>
          </div>
        </section>

        <section className="principles-section">
          <div className="section-shell">
            <div className="section-heading"><p className="eyebrow">PRINCIPLES</p><h2>大切にしていること</h2></div>
            <div className="principles-grid">
              <article><span>01</span><h3>小さく始める</h3><p>大規模な仕組みを先に考えず、一つの繰り返し作業から改善します。</p></article>
              <article><span>02</span><h3>推測で埋めない</h3><p>確認できない値は作らず、要確認として残します。</p></article>
              <article><span>03</span><h3>出典と変更を残す</h3><p>どこを見て、何を変えたかを後から追える形にします。</p></article>
              <article><span>04</span><h3>確認方法まで渡す</h3><p>更新や再確認ができるよう、使い方と注意点を整えます。</p></article>
            </div>
          </div>
        </section>

        <section className="role-section section-shell">
          <div className="section-heading split-heading"><div><p className="eyebrow">AI & HUMAN</p><h2>AIと人の役割を分ける。</h2></div><p>速さと安全性のどちらかに偏らないよう、工程ごとに担当を分けます。</p></div>
          <div className="role-grid">
            <article><p>AIが得意なこと</p><ul><li>資料・仕様の読み取り</li><li>下書きと反復処理</li><li>表の整理と実装補助</li><li>検証項目の洗い出し</li></ul></article>
            <article><p>人が確認すること</p><ul><li>目的と優先順位</li><li>機密・公開範囲</li><li>結果の妥当性</li><li>外部送信と最終判断</li></ul></article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
