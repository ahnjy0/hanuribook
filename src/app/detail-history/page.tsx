import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import ProgramDetail from "@/components/templates/ProgramDetail/ProgramDetail";

export const metadata: Metadata = {
  title: `상세 · 초등심화 똑똑한국사 · ${SITE_TITLE}`,
};

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white">
      <ProgramDetail program="history" />
    </div>
  );
}
