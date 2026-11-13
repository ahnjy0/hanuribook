import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Centers from "@/views/Centers/Centers";

export const metadata: Metadata = {
  title: `04 센터찾기 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Centers />;
}
