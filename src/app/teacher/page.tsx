import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Teacher from "@/views/Teacher/Teacher";

export const metadata: Metadata = {
  title: `05-1 한우리선생님 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Teacher />;
}
