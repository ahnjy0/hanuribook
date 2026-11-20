import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Socrates from "@/views/Socrates/Socrates";

export const metadata: Metadata = {
  title: `상세 · 중고등정규 중등 소크라테스 · ${SITE_TITLE}`,
};

export default function Page() {
  return (
    <Socrates />
  );
}
