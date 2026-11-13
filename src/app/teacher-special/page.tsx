import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import TeacherSpecial from "@/views/TeacherSpecial/TeacherSpecial";

export const metadata: Metadata = {
  title: `05-2 교사특별반 · ${SITE_TITLE}`,
};

export default function Page() {
  return <TeacherSpecial />;
}
