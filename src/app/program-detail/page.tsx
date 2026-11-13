import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import ProgramDetail from "@/components/templates/ProgramDetail/ProgramDetail";

export const metadata: Metadata = {
  title: `프로그램 상세 템플릿 (공통) · ${SITE_TITLE}`,
};

export default function Page() {
  return <ProgramDetail />;
}
