import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Main from "@/views/Main/Main";

export const metadata: Metadata = {
  title: `반응형 · 메인 홈 (Desktop 1440) · ${SITE_TITLE}`,
};

export default function Page() {
  return (
    <div className="min-h-[3300px] w-[1440px] bg-white">
      <Main />
    </div>
  );
}
