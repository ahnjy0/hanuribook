import type { ReactNode } from "react";
import TitleIcon, { type TitleIconKind } from "@/views/Program/sections/TitleIcon";

/** 섹션 제목: 지도교사 입문과정 · 프로그램 소개와 같은 왼쪽 정렬 + 주황 타일 아이콘 */
export default function Title({ id, icon, children }: { id: string; icon: TitleIconKind; children: ReactNode }) {
  return (
    <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold break-keep lg:gap-3 lg:text-[30px]" id={id}>
      <TitleIcon kind={icon} />
      {children}
    </h2>
  );
}

/** 섹션 틀: 본문 폭 1200px, 섹션 사이 위 여백(첫 섹션은 first) */
export function Section({ id, first = false, children }: { id: string; first?: boolean; children: ReactNode }) {
  return (
    <section
      className={`mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 lg:gap-5 ${first ? "pt-8 lg:pt-14" : "pt-12 lg:pt-24"}`}
      aria-labelledby={id}
    >
      {children}
    </section>
  );
}

/** 연한 살구색 카드(지도교사 입문과정 카드와 같은 색) */
export const CARD = "rounded-[18px] border border-solid border-[#FBE7DA] bg-[#FFF7F1]";
