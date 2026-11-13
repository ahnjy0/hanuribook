import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Middle from "@/views/Middle/Middle";

export const metadata: Metadata = {
  title: `02-5 중고등정규 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Middle />;
}
