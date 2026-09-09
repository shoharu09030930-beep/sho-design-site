import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const generatedRoot = new URL("../.next/server/app/", import.meta.url);

const generatedPages = [
  "index.html",
  "works.html",
  "works/data-cleaning.html",
  "works/public-research.html",
  "works/sales-dashboard.html",
  "web-works.html",
  "web-works/nexa-operations.html",
  "web-works/mugi-to-hi.html",
  "web-works/sui.html",
  "web-works/hop-step-lab.html",
  "web-works/ma-studio.html",
  "web-works/flowpilot.html",
  "about.html",
  "services.html",
  "contact.html",
  "privacy.html",
];

test("generates every public page as static HTML", async () => {
  await Promise.all(
    generatedPages.map((page) => access(new URL(page, generatedRoot))),
  );
});

test("home page includes the brand, core works, and social links", async () => {
  const html = await readFile(new URL("index.html", generatedRoot), "utf8");

  assert.match(html, /shoの業務自動化研究室/);
  assert.match(html, /面倒な手作業を、/);
  assert.match(html, /Excel・CSVデータ整理/);
  assert.match(html, /公開情報リサーチ・一覧化/);
  assert.match(html, /売上集計・簡易自動化/);
  assert.match(html, /https:\/\/note\.com\/sho_03_lab/);
  assert.match(html, /https:\/\/x\.com\/sho_03_lab/);
  assert.match(html, /https:\/\/www\.youtube\.com\/@sho_03_lab/);
});

test("services page publishes four offers with reference prices", async () => {
  const html = await readFile(new URL("services.html", generatedRoot), "utf8");

  assert.match(html, /業務自動化/);
  assert.match(html, /業務ツール作成/);
  assert.match(html, /小規模アプリ作成/);
  assert.match(html, /Webサイト・LP制作/);
  assert.match(html, /30,000円〜/);
  assert.match(html, /50,000円〜/);
  assert.match(html, /参考料金（税込）/);
});

test("contact page includes intake fields and the sensitive-data warning", async () => {
  const html = await readFile(new URL("contact.html", generatedRoot), "utf8");

  assert.match(html, /現在困っていること/);
  assert.match(html, /どのような状態にしたいですか/);
  assert.match(html, /予算の目安/);
  assert.match(html, /返信先メールアドレス/);
  assert.match(html, /1FAIpQLSft6ZenKWkUz-qHnN-hZ6MHgW2nhERPYTcVAYEHdTdDguA_hg/);
  assert.match(html, /Googleフォームで確認する/);
  assert.match(html, /パスワード、認証コード、顧客名簿、社外秘資料/);
  assert.match(html, /個人情報の取り扱い/);
});

test("work pages disclose that the projects are self-initiated", async () => {
  const pages = await Promise.all(
    generatedPages
      .filter((page) => page.startsWith("works/"))
      .map((page) => readFile(new URL(page, generatedRoot), "utf8")),
  );

  for (const html of pages) {
    assert.match(html, /自主制作/);
  }
});

test("web design studies have six distinct static pages and fictional-project disclosure", async () => {
  const pages = await Promise.all(
    generatedPages
      .filter((page) => page.startsWith("web-works/") && page.endsWith(".html"))
      .map((page) => readFile(new URL(page, generatedRoot), "utf8")),
  );

  assert.equal(pages.length, 6);
  for (const html of pages) {
    assert.match(html, /架空/);
    assert.match(html, /自主制作/);
    assert.match(html, /href="\/(?:web-works|works)"/);
  }
});

test("web design studies list the public steak LP without bundling its photos", async () => {
  const html = await readFile(new URL("web-works.html", generatedRoot), "utf8");

  assert.match(html, /7つの目的に/);
  assert.match(html, /はらぺこステーキ/);
  assert.match(html, /自主制作・架空店舗/);
  assert.match(html, /https:\/\/harapeko-steak-lp-sample\.shoharu-0903-0930\.chatgpt\.site\//);
  assert.doesNotMatch(html, /steak-photo|hamburg-photo/);
});

test("includes the public visual assets used by the site", async () => {
  const assets = [
    "og.png",
    "assets/profile-sho.png",
    "assets/work-data-cleaning-main.png",
    "assets/work-research-main.png",
    "assets/work-dashboard-main.png",
    "assets/web-works/mugi-to-hi-hero.png",
    "assets/web-works/sui-hero.png",
    "assets/web-works/ma-studio-hero.png",
    "assets/web-works/ma-light-well-v2.png",
    "assets/web-works/ma-kiosk-v2.png",
    "assets/web-works/hop-discovery-v2.png",
    "assets/web-works/hop-experiment-v2.png",
    "assets/web-works/hop-presentation-v2.png",
    "assets/web-works/mugi-counter-v2.png",
    "assets/web-works/sui-ritual-v2.png",
  ];

  await Promise.all(
    assets.map((asset) => access(new URL(`public/${asset}`, projectRoot))),
  );
});
