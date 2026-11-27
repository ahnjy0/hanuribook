import type { Metadata } from "next";
import { SITE_TITLE } from "@/routes";
import Franchise from "@/views/Franchise/Franchise";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 센터모집`,
};

export default function Page() {
  return <Franchise />;
}
