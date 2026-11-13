import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import CourseHub from "@/components/templates/CourseHub/CourseHub";

export const metadata: Metadata = {
  title: `과정 목록 템플릿 (초등정규·초등심화·중고등정규 공통) · ${SITE_TITLE}`,
};

export default function Page() {
  return <CourseHub />;
}
