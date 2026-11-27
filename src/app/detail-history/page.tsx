import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import AdvancedDetail from "@/views/AdvancedDetail/AdvancedDetail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 똑똑 한국사`,
};

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white">
      <AdvancedDetail program="history" />
    </div>
  );
}
