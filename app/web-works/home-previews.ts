import type { webWorks } from "./data";

type WebWorkSlug = (typeof webWorks)[number]["slug"];

export const homeWebPreviews = {
  "nexa-operations": {
    detail: "数値と処理状況を、管理画面で一覧に。",
    alt: "NEXA OPERATIONSの画面。濃紺のメニューと数値・処理工程を並べた管理画面。",
  },
  "mugi-to-hi": {
    detail: "パンの写真と焼き上がり時刻を、便りのように。",
    alt: "MUGI TO HIの画面。オリーブ色の誌面と大きなパンの写真、焼き上がりの案内。",
  },
  sui: {
    detail: "縦書きと余白で、サロンの静けさを表現。",
    alt: "SUIの画面。自然光の入る施術室と、広い余白に置いた縦書きの言葉。",
  },
  "hop-step-lab": {
    detail: "探究マップとイラストで、学びの楽しさを。",
    alt: "HOP STEP LABの画面。鮮やかな色の探究マップと、観察する子どもたちのイラスト。",
  },
  "ma-studio": {
    detail: "建築写真を大きく見せる、作品中心の構成。",
    alt: "間 / MA STUDIOの画面。建築写真を主役に、作品名と情報を端正に配置。",
  },
  flowpilot: {
    detail: "操作できる製品デモで、自動化の流れを紹介。",
    alt: "FLOWPILOTの画面。暗い背景に自動化フローと操作パネルを並べた製品デモ。",
  },
} satisfies Record<WebWorkSlug, { detail: string; alt: string }>;
