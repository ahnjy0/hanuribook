import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Kinder from "@/views/Kinder/Kinder";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 유아정규`,
};

export default function Page() {
  return <Kinder />;
}
