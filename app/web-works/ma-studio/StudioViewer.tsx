"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./ma.module.css";

const projects = [
  { number: "01", title: "COURTYARD HOUSE", japanese: "中庭の家", type: "RESIDENCE", place: "KANAGAWA", year: "2026", image: "/assets/web-works/ma-studio-hero.png", description: "内と外の境界を薄くし、光と植栽を暮らしの中心に置いた住宅。" },
  { number: "02", title: "LIGHT WELL", japanese: "光井戸の改修", type: "RENOVATION", place: "TOKYO", year: "2025", image: "/assets/web-works/ma-light-well-v2.png", description: "細長い住戸の中央に光の通り道をつくり、上下階の気配をつなぐ改修。" },
  { number: "03", title: "KIOSK 04", japanese: "路地の茶店", type: "RETAIL", place: "KYOTO", year: "2025", image: "/assets/web-works/ma-kiosk-v2.png", description: "閉じた佇まいと小さな開口だけで、路地に灯りと居場所を生む茶店。" },
];

export function StudioViewer() {
  const [active, setActive] = useState(0);
  const [panel, setPanel] = useState<"about" | "office" | null>(null);
  const current = projects[active];

  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <button className={styles.wordmark} type="button" onClick={() => setPanel("about")} aria-label="事務所について">
          <strong>間</strong><span>MA STUDIO</span>
        </button>
        <div className={styles.headerMeta}><span>ARCHITECTURE</span><span>INTERIOR</span><span>2024—2026</span></div>
        <nav aria-label="スタジオ情報">
          <button type="button" onClick={() => setPanel("about")}>ABOUT</button>
          <button type="button" onClick={() => setPanel("office")}>OFFICE</button>
          <Link href="/web-works">INDEX ↗</Link>
        </nav>
      </header>

      <main className={styles.desktopViewer}>
        <aside className={styles.projectIndex} aria-label="作品一覧">
          <p>SELECTED WORKS</p>
          <ol>
            {projects.map((project, index) => (
              <li key={project.number}>
                <button type="button" onClick={() => setActive(index)} aria-current={active === index ? "true" : undefined}>
                  <span>{project.number}</span><strong>{project.title}</strong><small>{project.type} / {project.year}</small>
                </button>
              </li>
            ))}
          </ol>
          <div className={styles.indexNote}>VIEW<br />BY PROJECT<br />NOT BY PAGE</div>
        </aside>

        <div className={styles.stage} key={current.number}>
          <Image src={current.image} alt={`${current.japanese}の建築写真`} fill priority={active === 0} sizes="76vw" />
          <div className={styles.photoShade} />
          <div className={styles.projectNumber}>{current.number}<span>/ 03</span></div>
          <div className={styles.projectInfo}>
            <p>{current.type} — {current.place} — {current.year}</p>
            <h1>{current.title}</h1>
            <div><span>{current.japanese}</span><p>{current.description}</p></div>
          </div>
          <div className={styles.stageControls}>
            <button type="button" onClick={() => setActive((active + projects.length - 1) % projects.length)} aria-label="前の作品">←</button>
            <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => setActive((active + 1) % projects.length)} aria-label="次の作品">→</button>
          </div>
        </div>
      </main>

      <main className={styles.mobileArchive}>
        <p className={styles.mobileIntro}>SELECTED WORKS<br /><span>写真を縦にたどる、小さな作品集。</span></p>
        {projects.map((project) => (
          <figure key={project.number}>
            <div className={styles.mobilePhoto}><Image src={project.image} alt={`${project.japanese}の建築写真`} fill sizes="100vw" /></div>
            <figcaption><span>{project.number}</span><div><h1>{project.title}</h1><p>{project.japanese} — {project.place} — {project.year}</p><small>{project.description}</small></div></figcaption>
          </figure>
        ))}
        <button className={styles.mobileAbout} type="button" onClick={() => setPanel("about")}>ABOUT MA STUDIO ↗</button>
      </main>

      <div className={`${styles.drawer} ${panel ? styles.drawerOpen : ""}`} aria-hidden={!panel}>
        <button className={styles.drawerClose} type="button" onClick={() => setPanel(null)} aria-label="パネルを閉じる">CLOSE ×</button>
        {panel === "about" ? (
          <div className={styles.drawerBody}><span>ABOUT / 01</span><p className={styles.verticalStatement}>空間に、<br />静かな余白を。</p><div><p>私たちは、建物の形より先に、そこで流れる時間を考えます。</p><p>光、風、視線、素材の変化。暮らしの背景として長く残る住宅と小さな商空間を設計します。</p></div></div>
        ) : panel === "office" ? (
          <div className={styles.drawerBody}><span>OFFICE / 02</span><dl><div><dt>STUDIO</dt><dd>間 / MA STUDIO</dd></div><div><dt>LOCATION</dt><dd>Tokyo, Japan</dd></div><div><dt>SCOPE</dt><dd>Architecture<br />Interior<br />Renovation</dd></div><div><dt>CONTACT</dt><dd>Project inquiry<br />by appointment</dd></div></dl><small>架空の建築事務所を題材にした自主制作です。</small></div>
        ) : null}
      </div>
      {panel && <button className={styles.scrim} type="button" onClick={() => setPanel(null)} aria-label="パネルを閉じる" />}
    </div>
  );
}
