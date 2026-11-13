import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Centers from "@/views/Centers/Centers";

export const metadata: Metadata = {
  title: `반응형 · 센터찾기 (Tablet 834) · ${SITE_TITLE}`,
};

export default function Page() {
  return (
    <div className="min-h-[2500px] w-[834px] bg-white">
      <Centers />
    </div>
  );
}
