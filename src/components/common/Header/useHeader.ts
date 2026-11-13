import { useState } from "react";
import { PATHS } from "@/routes";

export type HeaderProps = {
  /** 활성화할 주 메뉴 탭 (home, program, consult, center, teacher) */
  active?: string;
  /** 활성화할 하위 메뉴 라벨 */
  sub?: string;
  /** "프로그램 > 유아정규" 형태의 브레드크럼 문자열 */
  crumbs?: string;
  theme?: "orange" | "pink";
};

const TAB_DEFS = [
  { key: "program", label: "프로그램", href: PATHS.Program },
  { key: "consult", label: "수업상담", href: PATHS.Consult },
  { key: "center", label: "센터찾기", href: PATHS.Centers },
  { key: "teacher", label: "한우리선생님", href: PATHS.Teacher },
];

const SUB_MAP: Record<string, [string, string][]> = {
  program: [
    ["소개", PATHS.Program],
    ["유아정규", PATHS.Kinder],
    ["초등정규", PATHS.Elementary],
    ["초등심화", PATHS.Advanced],
    ["중고등정규", PATHS.Middle],
    ["단기특강", PATHS.Special],
  ],
  teacher: [
    ["한우리선생님", PATHS.Teacher],
    ["교사특별반", PATHS.TeacherSpecial],
    ["지도교사 입문과정", PATHS.TeacherCourse],
    ["온라인설명회", PATHS.Seminar],
    ["센터모집", PATHS.Franchise],
  ],
};

const toItems = (arr: [string, string][]) => arr.map(([label, href]) => ({ label, href }));

const MENU_GROUPS = [
  { label: "프로그램", href: PATHS.Program, items: toItems(SUB_MAP.program) },
  { label: "수업상담", href: PATHS.Consult, items: [] },
  { label: "센터찾기", href: PATHS.Centers, items: [] },
  { label: "한우리선생님", href: PATHS.Teacher, items: toItems(SUB_MAP.teacher) },
].map((g) => ({ ...g, hasItems: g.items.length > 0 }));

export function useHeader(props: HeaderProps) {
  const active = props.active ?? "program";
  const sub = props.sub ?? "유아정규";
  const crumbStr = props.crumbs ?? "프로그램 > 유아정규";
  const pink = (props.theme ?? "orange") === "pink";
  const [open, setOpen] = useState(false);

  const tabs = TAB_DEFS.map((t) => ({ ...t, on: t.key === active, off: t.key !== active }));
  const subs = (SUB_MAP[active] || []).map(([label, href]) => ({
    label,
    href,
    on: label === sub,
    off: label !== sub,
  }));
  const parts = crumbStr ? crumbStr.split(">").map((s) => s.trim()).filter(Boolean) : [];
  const crumbs = parts.map((label, i) => ({
    label,
    weight: i === parts.length - 1 ? 700 : 400,
    color: i === parts.length - 1 ? "#1F1F1F" : "#6B6B6B",
  }));

  return {
    menuOpen: open,
    menuClosed: !open,
    menuExp: open,
    menuLabel: open ? "전체 메뉴 닫기" : "전체 메뉴 열기",
    toggleMenu: () => setOpen((v) => !v),
    menuGroups: MENU_GROUPS,
    tabs,
    subs,
    hasSubs: subs.length > 0,
    crumbs,
    hasCrumbs: crumbs.length > 0,
    accent: pink ? "#EE6D9F" : "#F26522",
    accentText: pink ? "#B8326A" : "#D94E0F",
    accentFill: pink ? "#D63F7C" : "#F26522",
  };
}
