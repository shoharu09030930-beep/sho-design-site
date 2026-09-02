import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./hop.module.css";

export const metadata: Metadata = {
  title: "HOP STEP LAB｜Webサイト自主制作",
  description: "探究の道をたどる、架空の子ども向け学習教室「HOP STEP LAB」の自主制作Webサイトです。",
};

export default function HopStepLabPage() {
  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/web-works/hop-step-lab"><span>HOP!</span><strong>STEP LAB</strong></Link>
        <div className={styles.legend} aria-label="探究マップの順番"><span><i />みつける</span><span><i />ためす</span><span><i />つたえる</span></div>
        <a className={styles.ticketLink} href="#trial">体験チケット <b>→</b></a>
      </header>

      <main className={styles.map}>
        <svg className={styles.route} viewBox="0 0 1000 2650" preserveAspectRatio="none" aria-hidden="true">
          <path d="M540 130 C880 250 790 500 475 545 C110 600 105 920 420 1010 C780 1110 860 1310 610 1435 C280 1605 205 1830 525 1940 C840 2045 800 2310 515 2470" />
        </svg>

        <div className={styles.mapIntro}>
          <p>小学生のための探究学習教室</p>
          <h1><span>きょうの</span><br />「なんで？」<br /><em>を探しに行こう。</em></h1>
          <div><strong>MAP 01</strong><p>ここには決まった答えも、同じ道順もありません。気になった場所から、のぞいてみてください。</p></div>
        </div>

        <span className={`${styles.routePin} ${styles.pinStart}`}>START!</span>
        <span className={`${styles.routePin} ${styles.pinOne}`}>1</span>
        <span className={`${styles.routePin} ${styles.pinTwo}`}>2</span>
        <span className={`${styles.routePin} ${styles.pinThree}`}>3</span>
        <span className={`${styles.routePin} ${styles.pinFour}`}>4</span>

        <ol className={styles.stops}>
          <li className={styles.discovery}>
            <div className={styles.imageWrap}><Image src="/assets/web-works/hop-discovery-v2.png" alt="葉や石を虫眼鏡で観察する子どもたちの切り紙イラスト" fill sizes="(max-width: 700px) 95vw, 48vw" /></div>
            <div className={styles.note}><span>STOP 01 / DISCOVER</span><h2>まず、よく見る。</h2><p>葉っぱの線、石の重さ、風の音。いつもの景色にも、問いの種がかくれています。</p><b>きょう見つけた「？」をメモ →</b></div>
            <p className={styles.speech}>これ、どうして<br />光って見えるの？</p>
          </li>

          <li className={styles.experiment}>
            <div className={styles.imageWrap}><Image src="/assets/web-works/hop-experiment-v2.png" alt="色水の実験と記録をする子どもたちの切り紙イラスト" fill sizes="(max-width: 700px) 95vw, 45vw" /></div>
            <div className={styles.note}><span>STOP 02 / TRY</span><h2>やって、まちがえる。</h2><p>予想どおりじゃなくても大丈夫。混ぜる、分ける、作り直す。失敗は次のヒントになります。</p><b>安全な道具と少人数サポート</b></div>
            <p className={styles.speech}>色をまぜたら、<br />次はどうなる？</p>
          </li>

          <li className={styles.presentation}>
            <div className={styles.imageWrap}><Image src="/assets/web-works/hop-presentation-v2.png" alt="工作を友だちに発表する子どもたちの切り紙イラスト" fill sizes="(max-width: 700px) 95vw, 45vw" /></div>
            <div className={styles.note}><span>STOP 03 / SHARE</span><h2>自分のことばで話す。</h2><p>うまく説明できなくても、作品を見せるだけでもいい。伝えると、新しい見方が返ってきます。</p><b>月に一度の小さな発表会</b></div>
            <p className={styles.speech}>ぼくはここを、<br />もう一回つくったよ！</p>
          </li>

          <li className={styles.parents}>
            <div className={styles.boardTape} aria-hidden="true" />
            <span>おうちの方へ</span>
            <h2>安心メモ</h2>
            <ul><li><b>8名まで</b><small>一人ずつ話せる少人数クラス</small></li><li><b>入退室通知</b><small>到着と退出を保護者へお知らせ</small></li><li><b>材料費込み</b><small>月謝以外の追加費用はありません</small></li></ul>
            <p>対象：小学1〜6年生<br />毎週 水・金・土曜日</p>
          </li>
        </ol>

        <div className={styles.trial} id="trial">
          <div className={styles.ticketStub}>TRIAL<br />TICKET</div>
          <div><span>MAP GOAL</span><h2>つぎは、教室で。</h2><p>無料体験 60分<br />土曜日 10:00 / 14:00</p></div>
          <a href="#trial">空いている日をみる <b>→</b></a>
          <small>架空の学習教室を題材にした自主制作です。申込機能は実装していません。</small>
        </div>

        <div className={styles.mapFooter}><span>HOP STEP LAB / FICTIONAL STUDY</span><Link href="/web-works">6つのWeb制作へ戻る ↗</Link></div>
      </main>
    </div>
  );
}
