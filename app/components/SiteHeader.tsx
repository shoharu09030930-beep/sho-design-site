import Link from "next/link";

const navItems = [
  { href: "/services", label: "サービス・料金" },
  { href: "/works", label: "制作実績" },
  { href: "/web-works", label: "Web制作" },
  { href: "/#approach", label: "進め方" },
  { href: "/contact", label: "相談する" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-logo" href="/" aria-label="shoの業務自動化研究室 ホーム">
          <span className="logo-mark" aria-hidden="true">s</span>
          <span>shoの業務自動化研究室</span>
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="メニューを開く">メニュー</summary>
          <nav aria-label="モバイルナビゲーション">
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
