import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Special from "@/views/Special/Special";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 단기특강`,
};

export default function Page() {
  return <Special />;
}
