import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Main from "@/views/Main/Main";

export const metadata: Metadata = {
  title: SITE_TITLE,
};

export default function Page() {
  return <Main />;
}
