import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Elementary from "@/views/Elementary/Elementary";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 초등정규`,
};

export default function Page() {
  return <Elementary />;
}
