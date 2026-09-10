import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "個人情報の取り扱い",
  description: "ご相談時にお預かりする情報の利用目的と取り扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <SiteHeader />
      <main id="main">
        <section className="page-hero compact-page-hero section-shell">
          <p className="eyebrow">PRIVACY</p>
          <h1>個人情報の取り扱い</h1>
          <p>ご相談のためにお預かりする情報は、必要な範囲に限って使用します。</p>
        </section>
        <article className="policy-content section-shell">
          <section><h2>利用目的</h2><p>お名前、連絡先、ご相談内容などの情報は、相談への回答、対応可否の確認、お見積もり、制作に必要な連絡のために使用します。</p></section>
          <section><h2>第三者への提供</h2><p>法令に基づく場合を除き、ご本人の同意なく第三者へ提供しません。相談窓口として外部サービスを利用する場合は、そのサービス上で情報が処理されます。</p></section>
          <section><h2>送らないでいただきたい情報</h2><p>初回相談では、パスワード、認証コード、決済情報、顧客名簿、社外秘資料を送らないでください。資料が必要な場合は、内容を確認した後に安全な共有方法を決めます。</p></section>
          <section><h2>保存と削除</h2><p>お預かりした情報は相談・取引に必要な期間だけ保管し、不要になった情報は適切な方法で削除します。</p></section>
          <section><h2>アクセス解析について</h2><p>当サイトでは、サイト改善と相談導線の確認のため、同意いただいた場合のみGoogle Analytics（提供元：Google LLC）を利用します。閲覧ページ、流入元、閲覧時間の目安、端末やブラウザに関する情報、相談ボタンなどの操作をGoogleへ送信します。ブラウザを区別するためのCookieを使用します。</p><p>氏名、メールアドレス、相談の入力内容、入力済みのGoogleフォームURLはアクセス解析に含めません。操作の録画や広告目的の機能は使用しません。Googleフォームでの回答送信は、サイト上のボタンクリックとは別に取り扱います。</p><p>同意しなくてもサイトのすべての機能をご利用いただけます。ページ下部の「アクセス解析の設定」から、いつでも選択を変更できます。同意を撤回すると、このブラウザからの以後の計測を停止し、当サイトの解析用Cookieを削除します。すでに送信された情報が自動的に削除されるわけではありません。</p><p>同意・拒否の選択はブラウザ内に180日間保存します。管理用の計測除外設定は解除するかブラウザの保存情報を消去するまで保持します。Googleによるデータの取り扱いは、<a className="text-link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">Googleの説明</a>をご確認ください。</p></section>
          <section><h2>内容の変更</h2><p>利用する相談窓口や運用方法の変更に合わせ、この内容を見直すことがあります。</p></section>
          <p className="policy-date">制定日：2026年9月4日／更新日：2026年9月10日</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
