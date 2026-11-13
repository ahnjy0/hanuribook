import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Advanced from "@/views/Advanced/Advanced";

export const metadata: Metadata = {
  title: `02-4 초등심화 (과학탐탐·한국사·세계문화지리·세계사) · ${SITE_TITLE}`,
};

export default function Page() {
  return <Advanced />;
}
