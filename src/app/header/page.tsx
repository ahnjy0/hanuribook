import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Header from "@/components/common/Header/Header";

export const metadata: Metadata = {
  title: `Header (공통) · ${SITE_TITLE}`,
};

export default function Page() {
  return <Header />;
}
