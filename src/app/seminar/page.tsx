import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Seminar from "@/views/Seminar/Seminar";

export const metadata: Metadata = {
  title: `05-4 온라인설명회 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Seminar />;
}
