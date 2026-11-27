import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Seminar from "@/views/Seminar/Seminar";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 온라인설명회`,
};

export default function Page() {
  return <Seminar />;
}
