import { useState } from "react";
import { SPECIAL_PAGES, SPECIAL_PROGRAMS, type SpecialPageId } from "./specialData";

export type SpecialDetailProps = { page: SpecialPageId };

/** 단기특강 상세: 페이지의 과정 목록 + 현재 고른 과정(과정이 여러 개면 탭으로 전환) */
export function useSpecialDetail({ page }: SpecialDetailProps) {
  const def = SPECIAL_PAGES[page];
  const [sel, setSel] = useState(def.programs[0]);

  const tabs = def.programs.map((id) => ({
    id,
    label: SPECIAL_PROGRAMS[id].name,
    tag: SPECIAL_PROGRAMS[id].tag,
    sel: id === sel,
    pick: () => setSel(id),
  }));

  return {
    crumbs: `프로그램 > 단기특강 > ${def.crumb}`,
    tabs,
    hasTabs: tabs.length > 1,
    cur: SPECIAL_PROGRAMS[sel],
  };
}

export type SpecialDetailVals = ReturnType<typeof useSpecialDetail>;
