import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Program from "@/views/Program/Program";

export const metadata: Metadata = {
  title: `02-1 프로그램 소개 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Program />;
}
