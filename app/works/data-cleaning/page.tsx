import type { Metadata } from "next";
import { WorkDetail } from "@/app/components/WorkDetail";
import { getWork } from "@/app/site-data";

export const metadata: Metadata = { title: "Excel・CSVデータ整理", description: "架空データ50件を整理し、変更理由まで記録した自主制作サンプルです。" };

export default function Page() {
  return <WorkDetail work={getWork("data-cleaning")!} />;
}
