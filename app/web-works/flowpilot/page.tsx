import type { Metadata } from "next";
import FlowDemo from "./FlowDemo";

export const metadata: Metadata = {
  title: "FLOWPILOT｜Webサイト自主制作",
  description: "架空のAI業務自動化SaaSを、操作できる製品デモとして設計した自主制作Webサイトです。",
};

export default function FlowpilotPage(){ return <FlowDemo />; }
