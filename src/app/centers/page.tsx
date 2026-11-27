import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Centers from "@/views/Centers/Centers";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 센터찾기`,
};

export default function Page() {
  return <Centers />;
}
