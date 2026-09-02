import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./sui.module.css";

export const metadata: Metadata = {
  title: "SUI｜Webサイト自主制作",
  description: "架空の完全予約制サロンを、写真と短文が交互に現れる静かな予約日記として設計した自主制作Webサイトです。",
};

export default function SuiPage(){
  return <div className={styles.site}>
    <aside className={styles.sideRail}>
      <Link href="/web-works/sui" className={styles.logo}><span>SUI</span><small>PRIVATE SALON</small></Link>
      <p>2026<br/>SEPTEMBER</p>
      <nav><a href="#concept">想い</a><a href="#care">施術</a><a href="#reserve">予約</a></nav>
      <Link href="/web-works" className={styles.back}>← 06 WORKS</Link>
    </aside>
    <main className={styles.journal}>
      <section className={styles.opening} id="concept">
        <div className={styles.openingPhoto}><Image src="/assets/web-works/sui-hero.png" alt="柔らかな光が入る静かな施術室" fill priority sizes="(max-width: 700px) 100vw, 68vw" /></div>
        <div className={styles.openingWords}><span>09 / 02</span><h1>忙しさを脱いで、<br/>ただ呼吸する<br/>時間を。</h1><p>一日三組だけの、静かなケア。</p></div>
        <p className={styles.availability}><i>次の空き</i><b>9月7日（月）14:00</b><span>○</span></p>
      </section>

      <article className={styles.entryOne}>
        <header><span>JOURNAL 01</span><time>朝の支度</time></header>
        <div className={styles.ritualPhoto}><Image src="/assets/web-works/sui-ritual-v2.png" alt="施術前に整えたリネンと陶器の器" fill sizes="(max-width: 700px) 100vw, 43vw" /></div>
        <div className={styles.entryText}><span>BEFORE OPENING / 09:10</span><h2>朝の支度</h2><p>新しいリネンを一枚ずつ重ね、湯を沸かし、窓辺の光を確かめる。施術の前に、まず部屋の呼吸を整えます。</p><dl><div><dt>室温</dt><dd>24℃</dd></div><div><dt>香り</dt><dd>白檀</dd></div><div><dt>お茶</dt><dd>焙じ茶</dd></div></dl><small>その日の体調や気分に耳を澄ませながら、必要なケアだけを静かに重ねます。</small></div>
      </article>

      <section className={styles.pause} aria-label="サロンの考え方">
        <header className={styles.pauseHeader}><span>PHILOSOPHY</span><h2>SUIが大切にしていること</h2><p>からだを急いで変えるのではなく、いまの状態を知り、少し軽くなって帰るために。</p></header>
        <ol className={styles.principles}><li><span>01</span><h3>急がせない</h3><p>話す時間も、黙っている時間も、その日のペースに合わせます。</p></li><li><span>02</span><h3>決めつけない</h3><p>決まった型よりも、触れた感覚とご本人の言葉を大切にします。</p></li><li><span>03</span><h3>残しすぎない</h3><p>必要なケアだけを選び、次の日へ疲れを持ち越さない強さで整えます。</p></li></ol>
      </section>

      <article className={styles.entryTwo} id="care">
        <header><span>JOURNAL 02</span><time>今日のケア</time></header>
        <div className={styles.detailPhoto}><Image src="/assets/web-works/sui-hero.png" alt="自然光の差す施術台と枝もの" fill sizes="(max-width: 700px) 100vw, 37vw" /></div>
        <div className={styles.menuLines}>
          <p><span>01</span><b>静養 90分</b><em>呼吸・首肩・足元をゆっくり整える基本のケア</em><strong>¥12,000</strong></p>
          <p><span>02</span><b>余白 120分</b><em>カウンセリングと全身ケア、お茶の時間まで</em><strong>¥16,000</strong></p>
          <p><span>03</span><b>朝凪 60分</b><em>午前の短いリセット。上半身を中心に</em><strong>¥8,500</strong></p>
          <small>すべて税込 / 完全予約制 / 女性専用という架空設定です</small>
        </div>
      </article>

      <section className={styles.reserve} id="reserve">
        <header><span>RESERVATION NOTE</span><h2>九月のご案内</h2><p>○ 空きあり　△ 時間相談　— 受付終了</p></header>
        <div className={styles.calendar} role="table" aria-label="9月の予約状況">
          <div role="row"><span>MON</span><b>07</b><em>○ 14:00</em></div><div role="row"><span>THU</span><b>10</b><em>△ 11:00</em></div><div role="row"><span>SAT</span><b>12</b><em>—</em></div><div role="row"><span>MON</span><b>14</b><em>○ 10:00</em></div><div role="row"><span>FRI</span><b>18</b><em>○ 15:30</em></div>
        </div>
        <div className={styles.reserveNote}><p>ご希望の日時とメニューをお知らせください。</p><a href="#reserve">予約方法を読む →</a><small>架空サロンを題材にした自主制作です。実際の予約・送信機能はありません。</small></div>
      </section>
      <footer><span>SUI / QUIET CARE JOURNAL</span><Link href="/web-works">6つのWeb制作へ戻る ↗</Link></footer>
    </main>
  </div>;
}
