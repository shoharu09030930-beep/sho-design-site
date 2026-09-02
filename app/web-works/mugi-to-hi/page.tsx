import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadShelf from "./BreadShelf";
import styles from "./mugi.module.css";

export const metadata: Metadata = {
  title: "MUGI TO HI｜Webサイト自主制作",
  description: "架空の地域密着ベーカリーを、写真雑誌と商品棚のように設計した自主制作Webサイトです。",
};

export default function MugiToHiPage(){
  return <div className={styles.site}>
    <header className={styles.header}><Link href="/web-works/mugi-to-hi" className={styles.wordmark}><span>麦</span><i>と</i><span>日</span></Link><p>BAKERY JOURNAL / ISSUE 07</p><nav><a href="#today">今日のパン</a><a href="#story">店のこと</a><a href="#shop">店舗案内</a></nav></header>
    <main>
      <section className={styles.cover}>
        <p className={styles.openNote}><span>OPEN</span><b>8:00—17:00</b><small>水・木曜休み<br/>売り切れ次第終了</small></p>
        <div className={styles.coverTitle}><span>BAKERY JOURNAL / ISSUE 07</span><h1><small>MUGI TO HI</small><b>朝のパン便り</b></h1><p>窯が温まるころ、店の一日が始まります。今日の焼き上がりと、生地の小さな記録を一冊のようにまとめました。</p></div>
        <div className={styles.coverPhoto}><Image src="/assets/web-works/mugi-to-hi-hero.png" alt="木のテーブルに並ぶカンパーニュとクロワッサン" fill priority sizes="(max-width: 700px) 100vw, 56vw" /></div>
        <div className={styles.todaySlip}><span>TODAY / 09.02</span><h2>焼き上がり</h2><dl><div><dt>08:00</dt><dd>カンパーニュ</dd></div><div><dt>09:30</dt><dd>クロワッサン</dd></div><div><dt>11:00</dt><dd>季節のデニッシュ</dd></div></dl><small>○ まだあります　△ 残りわずか</small></div>
        <p className={styles.coverCaption}>毎日の食卓へ、焼きたてを。</p>
      </section>

      <BreadShelf />

      <section className={styles.story} id="story">
        <div className={styles.storyLead}><span>NOTE FROM THE OVEN</span><h2>窯のそばから</h2><p>派手な新作よりも、明日も食べたくなる味を。気温と湿度を見ながら、その日の生地と相談して焼いています。</p><dl><div><dt>室温</dt><dd>24℃</dd></div><div><dt>湿度</dt><dd>68%</dd></div><div><dt>発酵</dt><dd>ゆっくり</dd></div></dl></div>
        <div className={styles.storyPhoto}><Image src="/assets/web-works/mugi-counter-v2.png" alt="朝の店内に並んだ焼きたてのパン" fill sizes="(max-width: 700px) 100vw, 58vw" /></div>
        <aside><span>BAKER&apos;S MEMO</span><p>今週はプラムのデニッシュ。<br/>酸味を残すよう、焼き込みは少し短めです。</p><small>— 店主</small></aside>
      </section>

      <section className={styles.shop} id="shop">
        <div className={styles.shopMark}><span>麦</span><i>と</i><span>日</span></div>
        <div><span>SHOP INFORMATION</span><h2>散歩の途中に、<br/>お立ち寄りください。</h2></div>
        <dl><div><dt>住所</dt><dd>神奈川県○○市 1–2–3<br/><small>架空の所在地です</small></dd></div><div><dt>営業時間</dt><dd>8:00—17:00<br/>水・木曜休み</dd></div><div><dt>お支払い</dt><dd>現金 / 各種カード</dd></div></dl>
        <p>このページは架空のベーカリーを題材にした自主制作です。実在の店舗ではありません。</p>
        <Link href="/web-works">6つのWeb制作へ戻る ↗</Link>
      </section>
    </main>
  </div>;
}
