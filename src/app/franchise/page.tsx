import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Franchise from "@/views/Franchise/Franchise";

export const metadata: Metadata = {
  title: `05-5 센터모집 · ${SITE_TITLE}`,
};

export default function Page() {
  return <Franchise />;
}
