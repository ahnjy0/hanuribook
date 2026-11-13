import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Main from "@/views/Main/Main";

export const metadata: Metadata = {
  title: `01 메인 홈 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Main />;
}
