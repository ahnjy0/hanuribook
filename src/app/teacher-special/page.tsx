import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import TeacherSpecial from "@/views/TeacherSpecial/TeacherSpecial";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 교사특별반`,
};

export default function Page() {
  return <TeacherSpecial />;
}
