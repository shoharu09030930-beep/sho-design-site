// Only public, fixed labels may enter analytics. Never pass form values or hrefs.
export const MEASUREMENT_ID = "G-W1QDFL0ZET";
export const SITE_ORIGIN = "https://sho-design-site.vercel.app";
export const CONSENT_KEY = "sho-analytics-consent-v1";
export const EXCLUDE_KEY = "sho-analytics-excluded-v1";
export const SETTINGS_EVENT = "sho:analytics-settings";
const PREFERENCE_EVENT = "sho:analytics-preference";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
const pages: Record<string, string> = {
  "/": "ホーム", "/services": "サービス・料金", "/contact": "相談", "/privacy": "個人情報の取り扱い",
  "/about": "この研究室について", "/works": "制作実績", "/web-works": "Webサイト自主制作",
  "/works/data-cleaning": "データ整理", "/works/public-research": "公開情報リサーチ",
  "/works/sales-dashboard": "売上集計", "/web-works/nexa-operations": "NEXA",
  "/web-works/mugi-to-hi": "麦と灯", "/web-works/sui": "SUI", "/web-works/hop-step-lab": "HOP",
  "/web-works/ma-studio": "MA", "/web-works/flowpilot": "Flowpilot",
};
export function safePage(path: string) {
  const clean = path.replace(/\/$/, "") || "/";
  return Object.hasOwn(pages, clean) ? clean : "/other";
}
export function safeReferrer(raw: string) {
  try {
    const url = new URL(raw);
    // Keep only an origin. In particular, strip all Google Form input parameters.
    const hosts = ["note.com", "x.com", "t.co", "twitter.com", "www.google.com", "www.google.co.jp", "www.bing.com", "search.yahoo.co.jp", "crowdworks.jp", "coconala.com"];
    return hosts.includes(url.hostname) ? `https://${url.hostname}/` : "";
  } catch { return ""; }
}
export function safeCampaign(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const source = params.get("utm_source");
  if (source !== "note" && source !== "x") return {};
  const content = params.get("utm_content") ?? "";
  const allowed = ["profile", "n389df687cf6a", "n1ba17ca63852", "n9f427599975f", "n640994daa5cd"];
  return {
    campaign_source: source,
    campaign_medium: source === "x" ? "social" : "referral",
    campaign_name: "organic_content",
    campaign_content: allowed.includes(content) ? content : "other",
  };
}
export type Consent = "accepted" | "declined" | null;
type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    "ga-disable-G-W1QDFL0ZET"?: boolean;
  }
}
export function readPreference(): {consent: Consent; excluded: boolean} {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null");
    const valid = saved && Number.isFinite(saved.at) && Date.now() - saved.at < MAX_AGE && saved.at <= Date.now();
    return {consent: valid && ["accepted", "declined"].includes(saved.value) ? saved.value : null, excluded: localStorage.getItem(EXCLUDE_KEY) === "1"};
  } catch { return {consent: null, excluded: false}; }
}
let initialized = false;
let lastPage = "";
let firstReferrer = "";
let campaign: Record<string, string> = {};
function permitted() {
  const pref = readPreference();
  return window.location.origin === SITE_ORIGIN && pref.consent === "accepted" && !pref.excluded;
}
function clearAnalyticsCookies() {
  for (const part of document.cookie.split(";")) {
    const name = part.trim().split("=")[0];
    if (!/^_ga(?:_|$)/.test(name)) continue;
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
  }
}
export function applyPreference() {
  window["ga-disable-G-W1QDFL0ZET"] = !permitted();
  if (!permitted()) {
    lastPage = "";
    clearAnalyticsCookies();
  }
}
export function savePreference(consent: Exclude<Consent, null>, excluded: boolean) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({value: consent, at: Date.now()}));
    localStorage.setItem(EXCLUDE_KEY, excluded ? "1" : "0");
  } catch { /* Fail closed when preferences cannot be stored. */ }
  applyPreference();
  window.dispatchEvent(new Event(PREFERENCE_EVENT));
}
function pageFields(path: string) {
  const page = safePage(path);
  return {page_location: SITE_ORIGIN + page, page_title: pages[page] ?? "その他", page_referrer: firstReferrer};
}
export function trackPage(path: string) {
  applyPreference();
  if (!permitted()) return;
  const page = safePage(path);
  if (lastPage === page) return;
  if (!initialized) {
    firstReferrer = safeReferrer(document.referrer);
    campaign = safeCampaign(window.location.search);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // Google's queue expects the standard gtag arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    });
    window.gtag("set", {allow_google_signals: false, allow_ad_personalization_signals: false, ...pageFields(path)});
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_domain: window.location.hostname, cookie_expires: 60 * 60 * 24 * 180,
      ...pageFields(path), ...campaign,
      ...(new URLSearchParams(window.location.search).get("analytics_debug") === "1" ? {debug_mode: true} : {}),
    });
    const script = document.createElement("script");
    script.async = true;
    script.referrerPolicy = "no-referrer";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
    initialized = true;
  }
  // Keep automatic engagement events on sanitized URLs during SPA navigation too.
  window.gtag?.("set", pageFields(path));
  window.gtag?.("config", MEASUREMENT_ID, {update: true, send_page_view: false, ...pageFields(path)});
  window.gtag?.("event", "page_view", {...pageFields(path), ...campaign, send_to: MEASUREMENT_ID});
  lastPage = page;
}
const EVENTS = ["service_click", "consult_click", "work_click", "consultation_form_open", "consultation_form_fallback"] as const;
export type AnalyticsEvent = typeof EVENTS[number];
export function trackAction(name: AnalyticsEvent) {
  if (!EVENTS.includes(name) || !permitted() || !initialized) return;
  window.gtag?.("event", name, {...pageFields(window.location.pathname), send_to: MEASUREMENT_ID});
}
export function subscribePreference(callback: () => void) {
  function storageChanged(event: StorageEvent) {
    if (event.key === null || event.key === CONSENT_KEY || event.key === EXCLUDE_KEY) { applyPreference(); callback(); }
  }
  window.addEventListener("storage", storageChanged);
  window.addEventListener(PREFERENCE_EVENT, callback);
  return () => { window.removeEventListener("storage", storageChanged); window.removeEventListener(PREFERENCE_EVENT, callback); };
}
