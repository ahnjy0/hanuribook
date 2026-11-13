"use client";

import { useEffect, type ReactNode } from "react";

/**
 * 페이지 안의 해시 링크 처리 (원본 페이지 동작 유지):
 *  - href="#"   : 아무 동작 안 함 (자리표시 링크)
 *  - href="#id" : 해당 요소로 부드럽게 스크롤
 * 화면 간 이동은 next/link 가 담당합니다.
 */
export default function AppShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const app = document.getElementById("app");
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a || !app?.contains(a)) return;
      const href = a.getAttribute("href") ?? "";
      if (href === "#") {
        e.preventDefault();
        return;
      }
      if (href.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <div id="app">{children}</div>;
}
