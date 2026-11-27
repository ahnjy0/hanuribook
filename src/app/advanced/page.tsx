import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Advanced from "@/views/Advanced/Advanced";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 초등심화`,
};

export default function Page() {
  return <Advanced />;
}
