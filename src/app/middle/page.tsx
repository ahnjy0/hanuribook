import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Middle from "@/views/Middle/Middle";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 중고등정규`,
};

export default function Page() {
  return <Middle />;
}
