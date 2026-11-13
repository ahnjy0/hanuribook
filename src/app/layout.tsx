import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import AppShell from "@/components/common/AppShell";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "한우리독서토론논술 · 반응형 웹 프로토타입",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
