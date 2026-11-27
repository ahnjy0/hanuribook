import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import ElementaryDetail from "@/views/ElementaryDetail/ElementaryDetail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 논리리더`,
};

export default function Page() {
  return <ElementaryDetail program="logic" />;
}