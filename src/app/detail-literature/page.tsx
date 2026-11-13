import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import ProgramDetail from "@/components/templates/ProgramDetail/ProgramDetail";

export const metadata: Metadata = {
  title: `상세 · 중고등정규 고등 문학 · ${SITE_TITLE}`,
};

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white">
      <ProgramDetail program="literature" />
    </div>
  );
}
