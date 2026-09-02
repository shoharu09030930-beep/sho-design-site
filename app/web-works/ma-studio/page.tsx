import type { Metadata } from "next";
import { StudioViewer } from "./StudioViewer";

export const metadata: Metadata = {
  title: "間 / MA STUDIO｜Webサイト自主制作",
  description: "作品を切り替えて閲覧する、架空の建築・インテリア事務所「間 / MA STUDIO」の自主制作Webサイトです。",
};

export default function MaStudioPage() {
  return <StudioViewer />;
}
