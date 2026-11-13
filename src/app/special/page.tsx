import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Special from "@/views/Special/Special";

export const metadata: Metadata = {
  title: `02-6 단기특강 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Special />;
}
