import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import SpecialDetail from "@/components/templates/SpecialDetail/SpecialDetail";

export const metadata: Metadata = {
  title: `상세 · 단기특강 별별문학독해 | 교과문학탐독 · ${SITE_TITLE}`,
};

export default function Page() {
  return <SpecialDetail page="literature" />;
}
