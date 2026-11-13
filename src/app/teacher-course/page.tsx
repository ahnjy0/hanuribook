import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import TeacherCourse from "@/views/TeacherCourse/TeacherCourse";

export const metadata: Metadata = {
  title: `05-3 지도교사 입문과정 · ${SITE_TITLE}`,
};

export default function Page() {
  return <TeacherCourse />;
}
