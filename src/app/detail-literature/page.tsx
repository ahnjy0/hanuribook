import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Literature from "@/views/Literature/Literature";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 소클 고등 문학`,
};

export default function Page() {
  return <Literature />;
}
