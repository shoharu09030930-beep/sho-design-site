"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./flow.module.css";

const steps = [
  { id:"trigger", n:"01", label:"受信する", title:"問い合わせを受信", icon:"IN", type:"TRIGGER", description:"フォームから届いた内容を、このフローの入口にします。", setting:"Web form / New response" },
  { id:"classify", n:"02", label:"整理する", title:"AIで分類・要約", icon:"AI", type:"AI STEP", description:"本文を「質問・見積・不具合」に分け、担当者向けに3行で要約します。", setting:"Classify + Summarize" },
  { id:"review", n:"03", label:"確認する", title:"人の承認を待つ", icon:"OK", type:"HUMAN REVIEW", description:"返信前に必ず担当者が内容を確認。判断をAIだけで完結させません。", setting:"Approval required" },
  { id:"send", n:"04", label:"記録する", title:"返信して履歴保存", icon:"GO", type:"ACTION", description:"承認済みの返信を送り、処理内容と確認者を履歴へ保存します。", setting:"Send mail + Log" },
] as const;

export default function FlowDemo(){
  const [active,setActive] = useState(1);
  const [runState,setRunState] = useState<"ready"|"running"|"done">("ready");
  const runDemo = () => { if(runState === "running") return; setRunState("running"); window.setTimeout(() => setRunState("done"), 900); };
  const current = steps[active];
  return <div className={styles.app}>
    <header className={styles.topbar}><Link href="/web-works/flowpilot" className={styles.logo}><i />FLOWPILOT <span>DEMO</span></Link><div className={styles.file}><span>WORKFLOW</span><b>Customer inquiry triage</b><em>Saved</em></div><nav><Link href="/web-works">← Portfolio</Link><button>Share</button><button className={styles.publish}>Publish <span>↗</span></button></nav></header>
    <main className={styles.product}>
      <aside className={styles.tour}>
        <div className={styles.tourTitle}><span>INTERACTIVE TOUR</span><strong>問い合わせ対応フロー</strong><p>工程を選ぶと設定内容を確認できます。</p></div>
        <ol>{steps.map((step,index) => <li key={step.id}><button onClick={() => setActive(index)} aria-pressed={active === index}><b>{step.n}</b><span>{step.label}<small>{step.title}</small></span><i>{active === index ? "●" : "○"}</i></button></li>)}</ol>
        <div className={styles.tourFoot}><span>4 STEPS</span><b>人の確認を残す設計</b></div>
      </aside>

      <section className={styles.canvas} aria-label="問い合わせ対応ワークフロー">
        <div className={styles.howTo} aria-label="使い方"><span><b>1</b> 左から工程を選ぶ</span><i>→</i><span><b>2</b> 右で設定を見る</span><i>→</i><span><b>3</b> 下のデモを実行</span></div>
        <div className={styles.canvasTools}><span>−</span><b>100%</b><span>＋</span><i /> <button>Fit view</button></div>
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.flowLine} aria-hidden="true" />
        <div className={styles.nodes}>
          {steps.map((step,index) => <button key={step.id} className={`${styles.node} ${active === index ? styles.selected : ""}`} onClick={() => setActive(index)} data-index={index}><i>{step.icon}</i><span><small>{step.type}</small><b>{step.title}</b></span><em>{index === 2 ? "1 approver" : "Configured"}</em></button>)}
        </div>
        <div className={styles.testInput}><span>SAMPLE INPUT</span><p><b>件名：</b>料金と導入時期について</p><p>来月から3名で利用したいです。見積と準備期間を教えてください。</p><small>個人情報を含まない架空サンプル</small></div>
        <div className={styles.runResult} data-state={runState}><span>{runState === "ready" ? "WAITING" : runState === "running" ? "RUNNING" : "COMPLETED"}</span><b>{runState === "done" ? "4 / 4 steps passed" : runState === "running" ? "Processing sample…" : "下の「デモを実行」を押してください"}</b></div>
      </section>

      <aside className={styles.inspector}>
        <div className={styles.inspectHead}><span>STEP SETTINGS</span><button>•••</button></div>
        <div className={styles.stepIdentity}><i>{current.icon}</i><span><small>{current.type}</small><h1>{current.title}</h1></span></div>
        <p className={styles.description}>{current.description}</p>
        <label><span>CONFIGURATION</span><b>{current.setting}</b><i>✓</i></label>
        <label><span>ON ERROR</span><b>Stop and notify owner</b><i>⌄</i></label>
        <div className={styles.output}><span>PREVIEW OUTPUT</span><p>{active === 1 ? "分類：見積相談\n要約：3名で来月導入を希望。料金と準備期間の確認。" : active === 2 ? "承認先：営業担当\n期限：2時間以内" : "設定済み。テスト実行で出力を確認できます。"}</p></div>
        <small>架空のSaaSを題材にした自主制作です。実際のAI処理・送信は行いません。</small>
      </aside>
    </main>
    <footer className={styles.runbar}><div><span>TEST MODE</span><b>架空の問い合わせデータで実行</b></div><p><i /> All systems ready</p><button onClick={runDemo} disabled={runState === "running"}>{runState === "running" ? "実行中…" : runState === "done" ? "もう一度試す" : "▶ デモを実行"}</button></footer>
  </div>;
}
