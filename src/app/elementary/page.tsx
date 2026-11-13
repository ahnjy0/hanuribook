import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Elementary from "@/views/Elementary/Elementary";

export const metadata: Metadata = {
  title: `02-3 초등정규 (어휘리더·독서리더·논리리더) · ${SITE_TITLE}`,
};

export default function Page() {
  return <Elementary />;
}
