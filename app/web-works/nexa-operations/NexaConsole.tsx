"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./nexa.module.css";

const cases = [
  { id: "CS-024", company: "製造業 / 80名", title: "月末集計の標準化", before: "40時間", after: "5時間", reduction: "87.5%", status: "運用確認中", steps: ["部門別売上表を収集", "商品コードを照合", "月次表へ統合", "差分だけを担当者確認"] },
  { id: "CS-031", company: "卸売業 / 26名", title: "在庫更新の一本化", before: "126項目", after: "48項目", reduction: "61.9%", status: "試験運用", steps: ["入力元を2表に限定", "商品マスタへ照合", "例外行を自動抽出", "更新履歴を保存"] },
  { id: "CS-038", company: "士業 / 12名", title: "確認漏れの予防", before: "月12件", after: "0件", reduction: "100%", status: "設計完了", steps: ["受付内容を分類", "期限と担当を付与", "未確認だけを通知", "完了ログを月次保存"] },
] as const;

const queue = [
  ["09:12", "販売管理CSV", "照合済み", "正常"], ["09:09", "商品マスタ", "3件を要確認", "注意"],
  ["08:55", "月次集計表", "更新済み", "正常"], ["08:42", "入金明細", "処理待ち", "待機"],
] as const;

const views = [
  { id: "overview", n: "01", label: "Overview", ja: "全体状況" },
  { id: "cases", n: "02", label: "Cases", ja: "改善事例" },
  { id: "workflows", n: "03", label: "Workflows", ja: "処理工程" },
  { id: "reports", n: "04", label: "Reports", ja: "月次レポート" },
] as const;

type View = typeof views[number]["id"];

function Metrics() {
  return <div className={styles.metricStack}>
    <article><span>今月の削減時間</span><strong>128.5<small>h</small></strong><i><b style={{width:"78%"}} /></i><p>目標 160h / 達成率 80%</p></article>
    <article><span>自動処理成功率</span><strong>98.2<small>%</small></strong><i><b style={{width:"98.2%"}} /></i><p>前月比 +1.4pt</p></article>
    <article><span>要確認キュー</span><strong>03<small>件</small></strong><i><b style={{width:"22%"}} /></i><p>重大な停止 0件</p></article>
  </div>;
}

export default function NexaConsole() {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState<View>("overview");
  const current = cases[selected];
  const viewMeta = views.find((item) => item.id === view) ?? views[0];

  return <div className={styles.shell}>
    <aside className={styles.rail}>
      <Link href="/web-works/nexa-operations" className={styles.brand} aria-label="NEXA OPERATIONS"><i aria-hidden="true"><span /><span /><span /></i><strong>NEXA</strong><small>OPS</small></Link>
      <nav aria-label="業務コンソール">
        {views.map((item) => <button key={item.id} aria-pressed={view === item.id} onClick={() => setView(item.id)}><b>{item.n}</b><span>{item.label}</span><small>{item.ja}</small></button>)}
      </nav>
      <div className={styles.railFoot}><span>● SYSTEM ONLINE</span><Link href="/web-works" aria-label="6つのWeb制作へ戻る">↙</Link></div>
    </aside>

    <div className={styles.workspace}>
      <header className={styles.topbar}><div><span>OPERATIONS / {viewMeta.label.toUpperCase()}</span><strong>{viewMeta.ja}</strong></div><p>最終更新 2026.09.02 09:14</p><a href="#consult">改善相談 <b>↗</b></a></header>
      <div className={styles.mobileTabs} aria-label="表示切替">
        {views.map((item) => <button key={item.id} aria-pressed={view === item.id} onClick={() => setView(item.id)}>{item.ja}</button>)}
      </div>

      <main className={styles.board}>
        {view === "overview" && <div className={styles.overviewLayout}>
          <section className={styles.overview}>
            <div className={styles.sectionTitle}><span>LIVE METRICS</span><p>架空サンプル値</p></div>
            <Metrics />
            <div className={styles.health}><span>PROCESS HEALTH</span><div><b>請求処理</b><i><em style={{width:"92%"}} /></i><small>92</small></div><div><b>売上集計</b><i><em style={{width:"86%"}} /></i><small>86</small></div><div><b>顧客管理</b><i><em style={{width:"74%"}} /></i><small>74</small></div></div>
          </section>
          <section className={styles.flowPanel}>
            <div className={styles.sectionTitle}><span>TODAY&apos;S FLOW</span><p>売上データ更新 / 4工程</p></div>
            <ol className={styles.pipeline}>{current.steps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2,"0")}</b><span>{step}</span><i>{index < 3 ? "完了" : "確認"}</i></li>)}</ol>
            <div className={styles.queueHead}><span>RECENT ACTIVITY</span><button onClick={() => setView("workflows")}>処理履歴を見る →</button></div>
            <div className={styles.queue} role="table" aria-label="直近の処理履歴">{queue.map(([time,name,result,status]) => <div role="row" key={time + name}><time>{time}</time><b>{name}</b><span>{result}</span><em data-status={status}>{status}</em></div>)}</div>
          </section>
          <aside className={styles.casePanel}>
            <div className={styles.sectionTitle}><span>CASE FILE</span><p>{current.id}</p></div>
            <div className={styles.caseSelect}>{cases.map((item,index) => <button key={item.id} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{item.id}</span><b>{item.title}</b></button>)}</div>
            <CaseDetail current={current} />
          </aside>
        </div>}

        {view === "cases" && <section className={styles.focusView}>
          <header><span>CASE LIBRARY / 03 FILES</span><h1>改善前と改善後を、同じ尺度で比べる。</h1><p>事例を選ぶと、右側の設計内容と削減結果が切り替わります。</p></header>
          <div className={styles.caseWorkspace}><div className={styles.caseCards}>{cases.map((item,index) => <button key={item.id} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{item.id} / {item.company}</span><strong>{item.title}</strong><p>{item.before} <i>→</i> {item.after}</p><b>{item.reduction} reduction</b></button>)}</div><div className={styles.focusCase}><CaseDetail current={current} /><ol>{current.steps.map((step,index) => <li key={step}><span>{String(index + 1).padStart(2,"0")}</span>{step}</li>)}</ol></div></div>
        </section>}

        {view === "workflows" && <section className={styles.focusView}>
          <header><span>WORKFLOW MONITOR</span><h1>処理の現在地と、確認が必要な場所。</h1><p>自動化する工程と、人が判断する工程を分けて表示しています。</p></header>
          <div className={styles.workflowGrid}><ol className={styles.largePipeline}>{current.steps.map((step,index) => <li key={step}><span>{String(index + 1).padStart(2,"0")}</span><div><small>{index === 0 ? "INPUT" : index === 3 ? "HUMAN CHECK" : "AUTOMATION"}</small><strong>{step}</strong></div><em>{index < 3 ? "完了" : "確認待ち"}</em></li>)}</ol><div><div className={styles.queueHead}><span>RECENT ACTIVITY</span><p>本日 4件</p></div><div className={styles.queue}>{queue.map(([time,name,result,status]) => <div key={time + name}><time>{time}</time><b>{name}</b><span>{result}</span><em data-status={status}>{status}</em></div>)}</div></div></div>
        </section>}

        {view === "reports" && <section className={styles.focusView}>
          <header><span>MONTHLY REPORT / AUGUST</span><h1>削減できた時間を、次の改善へつなぐ。</h1><p>4週間の推移と、部門別の改善余地をまとめた架空レポートです。</p></header>
          <div className={styles.reportGrid}><div className={styles.chart}><div className={styles.chartHead}><span>削減時間の推移</span><strong>128.5h</strong></div><div className={styles.bars}>{[52,68,81,96].map((height,index) => <div key={height}><i style={{height:`${height}%`}} /><span>W{index + 1}</span></div>)}</div></div><Metrics /><div className={styles.reportNotes}><span>NEXT ACTIONS</span><ol><li><b>01</b><p>商品マスタの要確認3件を担当者へ共有</p></li><li><b>02</b><p>請求処理の例外条件を来週見直し</p></li><li><b>03</b><p>月次集計の確認手順を1ページに標準化</p></li></ol></div></div>
        </section>}
      </main>
      <footer className={styles.statusbar} id="consult"><p>この画面は架空企業を題材にした自主制作です。数値・事例はすべてサンプルです。</p><a href="#consult">30分の改善相談 <span>→</span></a></footer>
    </div>
  </div>;
}

function CaseDetail({ current }: { current: typeof cases[number] }) {
  return <div className={styles.caseDetail}><span>{current.company}</span><h2>{current.title}</h2><dl><div><dt>BEFORE</dt><dd>{current.before}</dd></div><div><dt>AFTER</dt><dd>{current.after}</dd></div></dl><div className={styles.reduction}><span>REDUCTION</span><strong>{current.reduction}</strong></div><p>STATUS <b>{current.status}</b></p><a href="#consult">設計メモを見る →</a></div>;
}
