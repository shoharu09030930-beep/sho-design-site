import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { serviceOffers } from "@/app/site-data";

export const metadata: Metadata = {
  title: "サービス・料金",
  description: "業務自動化、業務ツール、小規模アプリ、Webサイト・LP制作の対応内容と参考料金です。",
};

export default function ServicesPage() {
  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <SiteHeader />
      <main id="main">
        <section className="page-hero service-page-hero section-shell">
          <p className="eyebrow">SERVICES & PRICING</p>
          <h1>困っている作業から、<br />必要な形を考えます。</h1>
          <p>完成した仕様書は必要ありません。現在の作業、減らしたい負担、必要な結果を確認し、小さく始められる方法をご提案します。</p>
        </section>

        <section className="offer-list section-shell" aria-label="サービス一覧">
          {serviceOffers.map((service, index) => (
            <article className="offer-card" id={service.slug} key={service.slug}>
              <div className="offer-heading">
                <span>0{index + 1}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <div className="offer-price">
                  <small>{service.priceLabel}</small>
                  <strong>{service.price}</strong>
                </div>
              </div>
              <div className="offer-details">
                <div><h3>このような場合に</h3><ul>{service.suitableFor.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>基本的な対応</h3><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
              <p className="offer-note">{service.note}</p>
              <Link className="text-link" href={`/contact?service=${service.slug}`}>この内容について相談する <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </section>

        <section className="pricing-notes section-shell" aria-labelledby="pricing-notes-title">
          <div><p className="eyebrow">BEFORE ESTIMATE</p><h2 id="pricing-notes-title">料金について</h2></div>
          <ul>
            <li>表示金額は、対応範囲が明確な小規模案件の参考料金（税込）です。</li>
            <li>内容と利用環境を確認し、作業範囲と正式な金額をご案内してから着手します。</li>
            <li>小さな修正や部分的な自動化は、10,000円から内容を確認します。</li>
            <li>外部サービス利用料、有料素材、公開後の継続保守は別途となる場合があります。</li>
          </ul>
        </section>

        <section className="contact-band section-shell" aria-labelledby="service-contact-title">
          <div><p className="eyebrow">CONSULTATION</p><h2 id="service-contact-title">どの種類か分からなくても、問題ありません。</h2></div>
          <div><p>「今はこうしている」「この作業を減らしたい」という段階から、必要な方法を一緒に整理します。</p><Link className="button button-primary" href="/contact">相談内容を整理する</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
