import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import SpecialDetail from "@/components/templates/SpecialDetail/SpecialDetail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 소클 고등 통합사회`,
};

export default function Page() {
  return <SpecialDetail page="society" />;
}
