import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import StyleGuide from "@/views/StyleGuide/StyleGuide";

export const metadata: Metadata = {
  title: `스타일가이드 · 디자인 시스템 · ${SITE_TITLE}`,
};

export default function Page() {
  return <StyleGuide />;
}
