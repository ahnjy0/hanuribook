import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import ElementaryDetail from "@/views/ElementaryDetail/ElementaryDetail";

export const metadata: Metadata = {
  title: `상세 · 초등정규 어휘리더 · ${SITE_TITLE}`,
};

export default function Page() {
  return <ElementaryDetail program="vocab" />;
}