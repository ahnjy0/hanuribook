import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Program from "@/views/Program/Program";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 프로그램 소개`,
};

export default function Page() {
  return <Program />;
}
