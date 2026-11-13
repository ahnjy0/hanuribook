import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Footer from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: `Footer (공통) · ${SITE_TITLE}`,
};

export default function Page() {
  return <Footer />;
}
