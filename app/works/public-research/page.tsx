import type { Metadata } from "next";
import { WorkDetail } from "@/app/components/WorkDetail";
import { getWork } from "@/app/site-data";

export const metadata: Metadata = { title: "公開情報リサーチ", description: "全国20政令指定都市を公式情報で確認し、出典まで管理した自主制作サンプルです。" };

export default function Page() {
  return <WorkDetail work={getWork("public-research")!} />;
}
