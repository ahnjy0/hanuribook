import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import BottomNav from "@/components/common/BottomNav/BottomNav";

export const metadata: Metadata = {
  title: `Bottom Navigation (공통) · ${SITE_TITLE}`,
};

export default function Page() {
  return <BottomNav />;
}
