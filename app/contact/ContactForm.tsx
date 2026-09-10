"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { serviceOffers } from "@/app/site-data";
import { trackAction } from "@/app/analytics";

type ContactFormProps = {
  contactUrl?: string;
};

export function ContactForm({ contactUrl }: ContactFormProps) {
  const serviceSelect = useRef<HTMLSelectElement>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("service") ?? "";
    if (serviceSelect.current && serviceOffers.some((service) => service.slug === selected)) {
      serviceSelect.current.value = selected;
    }
  }, []);

  function openContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const serviceSlug = String(form.get("service") ?? "");
    const service = serviceOffers.find((item) => item.slug === serviceSlug)?.title ?? "未定・相談したい";

    if (!contactUrl) return;

    const destination = new URL(contactUrl);
    destination.searchParams.set("usp", "pp_url");
    destination.searchParams.set("entry.719823312", String(form.get("name") ?? ""));
    destination.searchParams.set("entry.889758560", String(form.get("email") ?? ""));
    destination.searchParams.set("entry.512772423", service);
    destination.searchParams.set("entry.1494924065", String(form.get("current") ?? ""));
    destination.searchParams.set("entry.129062753", String(form.get("goal") ?? ""));
    destination.searchParams.set("entry.2102728589", String(form.get("budget") ?? ""));
    destination.searchParams.set("entry.343307416", String(form.get("timing") ?? ""));
    destination.searchParams.set("entry.936931036", String(form.get("materials") ?? ""));

    const url = destination.toString();
    setPreparedUrl(url);
    // This counts a handoff attempt, NOT a completed inquiry. Never send url or form.
    trackAction("consultation_form_open");
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // The same-tab link remains available if this browser rejects popups.
    }
  }

  return (
    <form className="contact-form" onSubmit={openContactForm} onChange={() => setPreparedUrl(null)}>
      <div className="field-row">
        <label>
          <span>お名前・事業者名</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>返信先メールアドレス</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>相談の種類</span>
        <select name="service" ref={serviceSelect} defaultValue="" required>
          <option value="">選択してください</option>
          {serviceOffers.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}
          <option value="other">未定・相談したい</option>
        </select>
      </label>

      <label>
        <span>現在困っていること</span>
        <textarea name="current" rows={5} placeholder="例：毎週、複数のExcelファイルを一つの表へ転記しています。" required />
      </label>

      <label>
        <span>どのような状態にしたいですか</span>
        <textarea name="goal" rows={4} placeholder="例：ファイルを選ぶだけで集計表が更新されるようにしたいです。" required />
      </label>

      <div className="field-row">
        <label>
          <span>予算の目安</span>
          <select name="budget" required defaultValue="">
            <option value="" disabled>選択してください</option>
            <option>1万円〜3万円</option>
            <option>3万円〜5万円</option>
            <option>5万円〜10万円</option>
            <option>10万円〜20万円</option>
            <option>20万円以上</option>
            <option>まだ決めていない</option>
          </select>
        </label>
        <label>
          <span>希望時期</span>
          <select name="timing" required defaultValue="">
            <option value="" disabled>選択してください</option>
            <option>できるだけ早く</option>
            <option>1か月以内</option>
            <option>2〜3か月以内</option>
            <option>時期は相談したい</option>
          </select>
        </label>
      </div>

      <label>
        <span>参考資料について</span>
        <input name="materials" type="text" placeholder="例：現在使っている表と作業手順があります（この画面には添付しないでください）" />
      </label>

      <div className="contact-caution">
        <strong>送信前のお願い</strong>
        <p>パスワード、認証コード、顧客名簿、社外秘資料などは送らないでください。必要な資料と共有方法は、相談内容を確認した後に決めます。</p>
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit">Googleフォームで確認する</button>
      </div>
      <p className="form-status" role="status" aria-live="polite">
        {preparedUrl
          ? "確認用の入力内容を準備しました。Googleフォームが開いた場合は、内容を確認して送信してください。まだ相談は送信されていません。"
          : "この画面だけでは送信されません。次の画面で内容を確認してから送信できます。"}
      </p>
      {preparedUrl && (
        <p className="form-status">
          開かない場合は、<a className="text-link" href={preparedUrl} referrerPolicy="no-referrer" onClick={() => trackAction("consultation_form_fallback")}>このタブでGoogleフォームを開く</a>こともできます。入力内容は引き継がれます。
        </p>
      )}
    </form>
  );
}
