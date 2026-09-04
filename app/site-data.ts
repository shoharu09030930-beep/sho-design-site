export type Work = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  mainImage: string;
  detailImages: { src: string; alt: string }[];
  metrics: { value: string; label: string }[];
  challenge: string;
  actions: string[];
  deliverables: string[];
  quality: string[];
  tools: string[];
  note: string;
};

export type ServiceOffer = {
  slug: string;
  title: string;
  description: string;
  examples: string[];
  price: string;
  priceLabel: string;
  suitableFor: string[];
  deliverables: string[];
  note: string;
};

export const serviceOffers: ServiceOffer[] = [
  {
    slug: "automation",
    title: "業務自動化",
    description: "転記・集計・情報収集など、繰り返し発生する手作業を整理し、安全に減らせる仕組みを作ります。",
    examples: ["データ転記", "定期集計", "Web情報収集"],
    price: "30,000円〜",
    priceLabel: "小規模な自動化",
    suitableFor: ["同じ転記や集計を何度も行っている", "作業手順は決まっているが時間がかかる", "どこまで自動化できるか相談したい"],
    deliverables: ["現行作業と自動化範囲の整理", "自動処理の実装", "動作確認と使い方の記録"],
    note: "対象サイトの規約や画面仕様により、自動化できない操作があります。",
  },
  {
    slug: "tools",
    title: "業務ツール作成",
    description: "Excel・CSV・ブラウザ上のデータを扱う、小さな専用ツールや入力・確認画面を作ります。",
    examples: ["Excel・CSV", "入力支援", "集計・変換"],
    price: "30,000円〜",
    priceLabel: "小規模な業務ツール",
    suitableFor: ["既存の表をもっと使いやすくしたい", "定型処理をボタン一つにまとめたい", "市販ソフトでは機能が合わない"],
    deliverables: ["必要な入力・処理・出力の整理", "ツール本体", "確認方法・操作手順"],
    note: "利用人数、対応OS、外部サービス連携の有無で金額が変わります。",
  },
  {
    slug: "apps",
    title: "小規模アプリ作成",
    description: "業務の流れに合わせた、ブラウザで使える小規模な管理・検索・計算アプリを作ります。",
    examples: ["管理画面", "検索・計算", "データ保存"],
    price: "50,000円〜",
    priceLabel: "小規模なWebアプリ",
    suitableFor: ["複数の情報を一つの画面で管理したい", "入力から結果確認までをまとめたい", "まず小さな試作から始めたい"],
    deliverables: ["画面と機能の整理", "アプリの実装", "表示・操作・例外時の確認"],
    note: "ログイン、決済、大規模データベースなどは内容を確認して個別に判断します。",
  },
  {
    slug: "websites",
    title: "Webサイト・LP制作",
    description: "目的と閲覧者を整理し、スマートフォンでも見やすいWebサイトやLPを制作・修正します。",
    examples: ["事業サイト", "LP", "既存ページ修正"],
    price: "30,000円〜",
    priceLabel: "1ページのWebサイト・LP",
    suitableFor: ["サービスを説明するページが必要", "既存サイトの一部を改善したい", "内容整理から一緒に進めたい"],
    deliverables: ["掲載内容と構成の整理", "PC・スマートフォン対応", "公開前の表示・リンク確認"],
    note: "原稿、写真、ページ数、予約・決済等の機能により金額が変わります。",
  },
];

export const services = serviceOffers.map(({ title, description, examples }) => ({
  title,
  description,
  examples,
}));

export const works: Work[] = [
  {
    slug: "data-cleaning",
    number: "01",
    title: "Excel・CSVデータ整理",
    shortTitle: "データ整理",
    category: "DATA CLEANING",
    summary: "架空の顧客データを、原本を残しながら統一ルールで整理。空欄は推測せず、処理理由まで記録しました。",
    mainImage: "/assets/work-data-cleaning-main.png",
    detailImages: [
      { src: "/assets/work-data-cleaning-detail-1.png", alt: "データ整理前後の比較" },
      { src: "/assets/work-data-cleaning-detail-2.png", alt: "対応内容と成果物の一覧" },
    ],
    metrics: [
      { value: "50→44件", label: "整理前後" },
      { value: "6件", label: "重複削除" },
      { value: "216件", label: "処理ログ" },
      { value: "8件", label: "要確認" },
    ],
    challenge: "会社名・担当者名の表記ゆれ、重複、空欄、電話番号や日付の形式違いが混ざった顧客データを想定しました。整理結果だけでは、何をどのルールで直したか追えない状態です。",
    actions: [
      "顧客IDを基準に重複6件を判定し、先頭行を採用",
      "法人格、空白、英字、日付、電話番号、都道府県、ステータスを統一",
      "メールアドレスの前後空白を削除し、小文字化",
      "空欄8件は補完せず、要確認として明示",
      "変更前・変更後・処理理由を216件の処理ログに記録",
    ],
    deliverables: [
      "Excelブック（概要・整理前・整理後・処理ログ・集計・ルール）",
      "整理前CSV 50件",
      "整理後CSV 44件",
      "掲載用画像3点と作業説明",
    ],
    quality: [
      "整理前50件－整理後44件＝重複削除6件を数式で照合",
      "数式エラー0件を確認",
      "全6シートを画像化して目視確認",
      "原本を保全し、整理後データを別シートで管理",
    ],
    tools: ["Microsoft Excel", "CSV", "Excel関数", "条件付き書式", "表・グラフ"],
    note: "すべてポートフォリオ用の架空データです。実在する企業・人物・連絡先とは関係ありません。",
  },
  {
    slug: "public-research",
    number: "02",
    title: "公開情報リサーチ・一覧化",
    shortTitle: "公開情報リサーチ",
    category: "PUBLIC RESEARCH",
    summary: "全国20政令指定都市を公式サイトで確認。確認元URLと確認日を各行に残し、更新時にも追える一覧にしました。",
    mainImage: "/assets/work-research-main.png",
    detailImages: [
      { src: "/assets/work-research-detail-1.png", alt: "政令指定都市20市の一覧プレビュー" },
      { src: "/assets/work-research-detail-2.png", alt: "調査プロセスと出典管理の説明" },
    ],
    metrics: [
      { value: "20市", label: "調査対象" },
      { value: "20/20", label: "所在地確認" },
      { value: "21件", label: "公式出典" },
      { value: "7区分", label: "地方別集計" },
    ],
    challenge: "検索結果だけでは、調査対象・確認元・確認時点が分かりにくく、情報が変わったときに再確認しづらいという課題を想定しました。",
    actions: [
      "指定都市市長会の公式一覧で対象20市を確定",
      "各自治体の庁舎案内・アクセスページで所在地を確認",
      "名称、分類、郵便番号、所在地、公式URLを統一形式で一覧化",
      "各行に所在地確認元URLと確認日を記録",
      "地方区分別の件数を数式で集計し、グラフ化",
    ],
    deliverables: [
      "Excelブック（概要・一覧・地方別集計・出典一覧・調査ルール）",
      "公開情報一覧CSV 20件",
      "掲載用画像3点と更新方法",
      "対象分類1件＋所在地確認20件の出典一覧",
    ],
    quality: [
      "対象20件・所在地確認済み20件・地方別合計20件の一致を確認",
      "数式エラー0件を確認",
      "全5シートを画像化して目視確認",
      "変更可能性のある情報に確認日と備考を付与",
    ],
    tools: ["Webブラウザ", "Microsoft Excel", "CSV", "Excel関数", "条件付き書式"],
    note: "公開情報は2026年7月27日時点の確認結果です。利用時には各行の確認元URLで最新情報をご確認ください。",
  },
  {
    slug: "sales-dashboard",
    number: "03",
    title: "売上集計・簡易自動化",
    shortTitle: "集計・簡易自動化",
    category: "SALES OPERATIONS",
    summary: "架空売上144件を月別・商品別に集計。データ追記後も集計とグラフが更新されるExcelにしました。",
    mainImage: "/assets/work-dashboard-main.png",
    detailImages: [
      { src: "/assets/work-dashboard-detail-1.png", alt: "売上ダッシュボードの全体画面" },
      { src: "/assets/work-dashboard-detail-2.png", alt: "データ追記後に自動更新される仕組み" },
    ],
    metrics: [
      { value: "144件", label: "架空売上" },
      { value: "12か月", label: "集計期間" },
      { value: "6商品", label: "商品マスタ" },
      { value: "300行", label: "入力範囲" },
    ],
    challenge: "売上データを追加するたびに商品情報を転記し、月別・商品別の集計表とグラフを手で更新する状況を想定しました。",
    actions: [
      "2025年1月から12月の架空売上データ144件を作成",
      "商品コードから名称・カテゴリ・単価を自動取得",
      "数量×単価で売上金額を計算し、月別・商品別・チャネル別に集計",
      "年間売上、販売数量、平均受注額をダッシュボードに表示",
      "入力候補とチェックシートを用意し、更新ミスを確認可能に",
    ],
    deliverables: [
      "Excelブック（ダッシュボード・売上データ・各集計・商品マスタ・更新ガイド・チェック）",
      "架空売上CSV 144件",
      "掲載用画像3点と更新手順",
      "最大300行までの入力・自動計算範囲",
    ],
    quality: [
      "元データと月別・商品別集計の売上差額0を確認",
      "元データと各集計の数量差分0を確認",
      "モデルチェックPASS、数式エラー0件を確認",
      "全7シートを画像化して目視確認",
    ],
    tools: ["Microsoft Excel", "CSV", "SUMIFS", "VLOOKUP", "IF", "TEXT", "入力規則"],
    note: "すべて架空データを使用した自主制作です。実在するクライアント資料や非公開情報は使用していません。",
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
