import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { WorkCard } from "@/app/components/WorkCard";
import { services, works } from "@/app/site-data";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <SiteHeader />
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">SHO&apos;S AUTOMATION LAB</p>
            <h1 id="hero-title">
              面倒な手作業を、
              <span>少しずつ自動化。</span>
            </h1>
            <p className="hero-lead">
              データ整理・リサーチ・集計の仕組み化・小規模なWeb制作を、
              <strong>確認できて、使い続けられる形</strong>に整えます。
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                相談内容を整理する
              </Link>
              <Link className="text-link" href="/services">
                サービスと料金を見る <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="shoの業務自動化研究室のイメージ">
            <div className="hero-image-wrap">
              <Image
                src="/assets/profile-sho.png"
                alt="ノートパソコンで作業するshoのイラスト"
                width={1024}
                height={1024}
                sizes="(max-width: 800px) 70vw, 380px"
                priority
              />
            </div>
            <div className="hero-flow" aria-hidden="true">
              <span>整理</span><i>···</i><span>実装</span><i>···</i><span>確認</span>
            </div>
            <p>AIは手段。目的は、現場の手作業を安全に減らすこと。</p>
          </div>
        </section>

        <section className="service-section" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">WHAT I DO</p>
                <h2 id="services-title">小さな改善を、4つの入口から。</h2>
              </div>
              <p>
                大きなシステムを前提にせず、いま困っている一つの作業から整理します。
              </p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="section-link-row">
              <Link className="button button-outline" href="/services">
                対応内容と料金目安を見る
              </Link>
            </div>
          </div>
        </section>

        <section className="works-section section-shell" id="works" aria-labelledby="works-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">SELECTED WORKS</p>
              <h2 id="works-title">数字と確認記録が残る、3つの自主制作。</h2>
            </div>
            <p>
              架空データまたは確認可能な公開情報を使い、成果だけでなく処理と検証も記録しています。
            </p>
          </div>
          <div className="works-grid">
            {works.map((work, index) => (
              <WorkCard key={work.slug} work={work} index={index} />
            ))}
          </div>
          <div className="section-link-row">
            <Link className="button button-outline" href="/works">
              すべての制作実績を見る
            </Link>
          </div>
        </section>

        <section className="home-web-works section-shell" aria-labelledby="home-web-title">
          <div><p className="eyebrow">WEB DESIGN STUDIES</p><h2 id="home-web-title">7つの業種を、<br />7つの見せ方で。</h2></div>
          <div><p>BtoB、カフェ、サロン、学習教室、建築、AI SaaS、飲食店LP。目的と閲覧者に合わせて、構成から作り分けたWebサイト自主制作です。</p><Link className="button button-outline" href="/web-works">Web制作7件を見る</Link></div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="section-shell approach-layout">
            <div className="approach-intro">
              <p className="eyebrow">APPROACH</p>
              <h2 id="approach-title">作って終わりにしないための、4つの工程。</h2>
              <p>
                AIが出した結果をそのまま完成とせず、目的・数字・表示・使い方まで順番に確認します。
              </p>
              <Link className="text-link" href="/about">
                制作方針を詳しく見る <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><h3>整理する</h3><p>目的、入力、成果物、残す手作業を確認します。</p></div></li>
              <li><span>02</span><div><h3>小さく作る</h3><p>一つの作業から、確認できる形で実装します。</p></div></li>
              <li><span>03</span><div><h3>照合する</h3><p>件数差分、数式、出典、表示、例外を確かめます。</p></div></li>
              <li><span>04</span><div><h3>使える形にする</h3><p>更新方法と注意点を残し、再確認できる状態に整えます。</p></div></li>
            </ol>
          </div>
        </section>

        <section className="lab-section section-shell" aria-labelledby="lab-title">
          <div className="lab-card">
            <div>
              <p className="eyebrow">AUTOMATION LAB</p>
              <h2 id="lab-title">成功例だけでなく、失敗と確認方法も記録します。</h2>
            </div>
            <p>
              note・X・YouTubeでは、ExcelやWeb調査の改善例、AIに任せるときの注意点、
              自動化しない方がよい場面も発信します。
            </p>
            <div className="lab-links" aria-label="外部発信メディア">
              <a href="https://note.com/sho_03_lab" target="_blank" rel="noreferrer">note <span aria-hidden="true">↗</span></a>
              <a href="https://x.com/sho_03_lab" target="_blank" rel="noreferrer">X <span aria-hidden="true">↗</span></a>
              <a href="https://www.youtube.com/@sho_03_lab" target="_blank" rel="noreferrer">YouTube <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="contact-band section-shell" aria-labelledby="contact-band-title">
          <div>
            <p className="eyebrow">CONSULTATION</p>
            <h2 id="contact-band-title">まだ内容が固まっていなくても大丈夫です。</h2>
          </div>
          <div>
            <p>現在の作業と、どう変えたいかを伺い、対応できる範囲と進め方を整理します。</p>
            <Link className="button button-primary" href="/contact">相談内容を整理する</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
