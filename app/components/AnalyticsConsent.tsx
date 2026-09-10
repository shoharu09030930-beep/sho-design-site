"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { readPreference, savePreference, SETTINGS_EVENT, subscribePreference, trackAction, trackPage } from "@/app/analytics";

export function AnalyticsSettingsButton() {
  return <button type="button" className="analytics-settings-link" onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}>アクセス解析の設定</button>;
}

export function AnalyticsConsent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [excluded, setExcluded] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    function sync() {
      const pref = readPreference();
      setExcluded(pref.excluded);
      setOpen(pref.consent === null && !pref.excluded);
      trackPage(window.location.pathname);
    }
    function show() { setExcluded(readPreference().excluded); setOpen(true); setMessage(""); }
    const timer = window.setTimeout(sync, 0);
    const unsubscribe = subscribePreference(sync);
    window.addEventListener(SETTINGS_EVENT, show);
    function click(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      const url = new URL(target.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === "/services") trackAction("service_click");
      else if (url.pathname === "/contact") trackAction("consult_click");
      else if (url.pathname === "/works" || url.pathname.startsWith("/works/") || url.pathname === "/web-works" || url.pathname.startsWith("/web-works/")) trackAction("work_click");
    }
    document.addEventListener("click", click);
    return () => { clearTimeout(timer); unsubscribe(); window.removeEventListener(SETTINGS_EVENT, show); document.removeEventListener("click", click); };
  }, []);
  useEffect(() => { trackPage(pathname); }, [pathname]);
  function choose(value: "accepted" | "declined") {
    savePreference(value, excluded);
    const stored = readPreference();
    if (stored.consent !== value) { setMessage("設定を保存できませんでした。アクセス解析は開始していません。"); return; }
    setOpen(false);
  }
  if (!open) return null;
  return <section className="analytics-consent" aria-label="アクセス解析の設定">
    <strong>アクセス解析へのご協力について</strong>
    <p>同意いただいた場合のみ、Google Analyticsで閲覧状況と相談ボタンなどの操作を計測します。氏名・メール・相談の入力内容は計測に含めません。同意しなくてもすべての機能をご利用いただけます。<a href="/privacy" className="text-link">詳しく見る</a></p>
    <div className="analytics-consent-actions">
      <button type="button" onClick={() => choose("declined")}>同意しない</button>
      <button type="button" onClick={() => choose("accepted")}>同意する</button>
    </div>
    <details><summary>管理者向けの設定</summary><label><input type="checkbox" checked={excluded} onChange={e => setExcluded(e.target.checked)} />このブラウザを計測から除外する</label><p>選択後に上のボタンで保存してください。別のブラウザや端末では個別に設定が必要です。</p></details>
    <p className="analytics-consent-note">選択は180日間保存します。ページ下部の「アクセス解析の設定」から変更できます。</p>
    {message && <p role="status">{message}</p>}
  </section>;
}
