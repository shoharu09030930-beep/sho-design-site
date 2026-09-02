import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-logo" href="/">shoの業務自動化研究室</Link>
          <p>面倒な手作業を、少しずつ自動化。</p>
        </div>
        <div className="footer-nav">
          <Link href="/works">制作実績</Link>
          <Link href="/web-works">Webサイト自主制作</Link>
          <Link href="/about">この研究室について</Link>
          <a href="https://note.com/sho_03_lab" target="_blank" rel="noreferrer">note</a>
          <a href="https://x.com/sho_03_lab" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.youtube.com/@sho_03_lab" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© 2026 sho. 掲載作品は、明記のない限り自主制作です。</small>
      </div>
    </footer>
  );
}
