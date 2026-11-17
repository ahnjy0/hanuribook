import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Science from "@/views/Science/Science";

export const metadata: Metadata = {
  title: `상세 · 초등심화 과학탐탐 · ${SITE_TITLE}`,
};

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Science />
    </div>
  );
}
