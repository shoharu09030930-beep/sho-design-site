import type { Metadata } from "next";
import { WorkDetail } from "@/app/components/WorkDetail";
import { getWork } from "@/app/site-data";

export const metadata: Metadata = { title: "売上集計・簡易自動化", description: "架空売上144件を集計し、データ追記後も更新できるExcelの自主制作サンプルです。" };

export default function Page() {
  return <WorkDetail work={getWork("sales-dashboard")!} />;
}
