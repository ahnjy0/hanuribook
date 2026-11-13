import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Consult from "@/views/Consult/Consult";

export const metadata: Metadata = {
  title: `03 수업상담 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Consult />;
}
