import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "ご相談",
  description: "業務自動化、業務ツール、小規模アプリ、Webサイト制作について、現在の困り事から相談内容を整理できます。",
};

const defaultContactUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSft6ZenKWkUz-qHnN-hZ6MHgW2nhERPYTcVAYEHdTdDguA_hg/viewform";

export default function ContactPage() {
  const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL ?? defaultContactUrl;

  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <SiteHeader />
      <main id="main">
        <section className="page-hero contact-page-hero section-shell">
          <p className="eyebrow">CONSULTATION</p>
          <h1>何を作るかより、<br />何に困っているかから。</h1>
          <p>内容が固まっていない段階でも構いません。下の項目に沿って整理すると、対応可否とお見積もりに必要な情報をまとめられます。</p>
        </section>

        <section className="contact-layout section-shell">
          <div className="contact-guide">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>ご相談から開始まで</h2>
            <ol>
              <li><span>01</span><div><strong>困り事を共有</strong><p>今の方法と、減らしたい作業を伺います。</p></div></li>
              <li><span>02</span><div><strong>対応範囲を確認</strong><p>実現方法、残す手作業、確認方法を整理します。</p></div></li>
              <li><span>03</span><div><strong>お見積もり</strong><p>作業範囲、金額、納期をご案内します。</p></div></li>
              <li><span>04</span><div><strong>合意後に開始</strong><p>内容をご確認いただいてから制作を始めます。</p></div></li>
            </ol>
            <Link className="text-link" href="/services">サービスと料金目安を見る <span aria-hidden="true">→</span></Link>
          </div>
          <ContactForm contactUrl={contactUrl} />
        </section>

        <section className="contact-boundary section-shell" aria-labelledby="contact-boundary-title">
          <div><p className="eyebrow">SCOPE</p><h2 id="contact-boundary-title">最初に確認すること</h2></div>
          <div><p>対象サービスの利用規約、個人情報や機密情報の扱い、利用環境を確認します。安全に実施できない内容や、専門資格・大規模な運用体制が必要な内容は、着手前にお伝えします。</p><Link href="/privacy" className="text-link">個人情報の取り扱いを見る <span aria-hidden="true">→</span></Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
