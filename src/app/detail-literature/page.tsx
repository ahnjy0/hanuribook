import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Literature from "@/views/Literature/Literature";

export const metadata: Metadata = {
  title: `상세 · 중고등정규 고등 문학 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Literature />;
}
