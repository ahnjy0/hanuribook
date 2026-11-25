import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import AppShell from "@/components/common/AppShell";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "한우리독서토론논술",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 가변 폰트(한글 전체) — 동적 서브셋이라 화면에 쓰인 글자 묶음만 내려받음 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
