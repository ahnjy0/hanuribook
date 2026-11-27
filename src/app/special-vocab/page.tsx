import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import SpecialDetail from "@/components/templates/SpecialDetail/SpecialDetail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 다다어휘`,
};

export default function Page() {
  return <SpecialDetail page="vocab" />;
}
