import type { Metadata } from "next";
import NexaConsole from "./NexaConsole";

export const metadata: Metadata = {
  title: "NEXA OPERATIONS｜Webサイト自主制作",
  description: "架空の業務改善支援会社を、業務コンソール型の画面として設計した自主制作Webサイトです。",
};

export default function NexaOperationsPage() {
  return <NexaConsole />;
}
