import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Consult from "@/views/Consult/Consult";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 수업상담`,
};

export default function Page() {
  return <Consult />;
}
