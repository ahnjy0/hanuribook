import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Socrates from "@/views/Socrates/Socrates";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 소크라테스`,
};

export default function Page() {
  return (
    <Socrates />
  );
}
