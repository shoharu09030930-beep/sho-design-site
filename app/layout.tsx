import type { Metadata } from "next";
import "./globals.css";

const publicUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: {
    default: "shoの業務自動化研究室",
    template: "%s｜shoの業務自動化研究室",
  },
  description:
    "データ整理・公開情報リサーチ・集計の仕組み化・小規模なWeb制作を、確認できて使い続けられる形に整える自主制作ポートフォリオです。",
  icons: {
    icon: "/assets/profile-sho.png",
    shortcut: "/assets/profile-sho.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "shoの業務自動化研究室",
    description: "面倒な手作業を、少しずつ自動化。",
    url: "/",
    siteName: "shoの業務自動化研究室",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "shoの業務自動化研究室｜面倒な手作業を、少しずつ自動化。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "shoの業務自動化研究室",
    description: "面倒な手作業を、少しずつ自動化。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
