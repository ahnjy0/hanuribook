import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Teacher from "@/views/Teacher/Teacher";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 한우리선생님`,
};

export default function Page() {
  return <Teacher />;
}
