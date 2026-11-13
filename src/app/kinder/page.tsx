import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Kinder from "@/views/Kinder/Kinder";

export const metadata: Metadata = {
  title: `02-2 유아정규 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Kinder />;
}
