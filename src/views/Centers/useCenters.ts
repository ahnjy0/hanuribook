import { useState } from "react";

type FilterKey = "near" | "parking" | "trial" | "small";

const O = { bg: "#FFF1E7", fg: "#C2410C" };
const B = { bg: "#EAF2FF", fg: "#2F5AA8" };
const G = { bg: "#F1F1F2", fg: "#4A4A4A" };
const T = { bg: "#E8F5EE", fg: "#1F7A4C" };

import type { CenterKind } from "@/components/common/CenterKindIcon";

const ALL_CENTERS: {
  name: string; kind: CenterKind; badges: { t: string; bg: string; fg: string }[];
  addr: string; hours: string; extra: string; tags: FilterKey[];
}[] = [
  { name: "서초북지부", kind: "branch", badges: [{ t: "우수 센터", ...O }, { t: "전문 지도교사 8명", ...B }, { t: "소그룹 / 1:1", ...G }], addr: "서울 서초구 신반포로 194 본관 4층 (고속터미널역 8-1번 출구 280m)", hours: "화~토 10:00 - 19:30 (일·월 정기휴무)", extra: "건물 지하 2시간 무료 주차 지원", tags: ["near", "parking", "small"] },
  { name: "서초남지부", kind: "branch", badges: [{ t: "심화 논술 특화", ...O }, { t: "전문 지도교사 12명", ...B }], addr: "서울 강남구 남부순환로 2936 원빌딩 5층", hours: "월~토 10:00 - 20:30 (일요일 휴무)", extra: "초등 독서력 평가실 & 중등 토론룸 구비", tags: ["near"] },
  { name: "서초중앙독서교실", kind: "room", badges: [{ t: "우수 러닝센터", ...O }, { t: "체험수업 가능", ...T }], addr: "경기 성남시 분당구 성남대로 385 분당클리닉빌딩 3층", hours: "화~토 09:30 - 18:30", extra: "지하 주차장 완비 (방문 등록 시 90분 무료)", tags: ["parking", "trial"] },
  { name: "서초2동독서교실", kind: "room", badges: [{ t: "유아/초등 독서코칭", ...B }, { t: "소그룹 토론", ...G }], addr: "서울 마포구 백범로 170 공덕더샵 상가동 2층", hours: "월~금 11:00 - 19:30 / 토 09:30 - 15:00", extra: "유아 전용 독서 코칭실 운영", tags: ["small", "trial"] },
];

const FILTER_DEFS: [FilterKey, string][] = [
  ["near", "◎ 내 주변 센터"],
  ["parking", "P 주차 가능"],
  ["trial", "체험수업 가능"],
  ["small", "소그룹 수업"],
];

export function useCenters() {
  const [view, setView] = useState<"map" | "list">("map");
  const [f, setF] = useState<Partial<Record<FilterKey, boolean>>>({ near: true });

  const filters = FILTER_DEFS.map(([k, label]) => {
    const on = !!f[k];
    return {
      label,
      sel: on,
      bg: on ? "#F26522" : "#FFFFFF",
      fg: on ? "#FFFFFF" : "#333333",
      border: on ? "1px solid #F26522" : "1px solid #E4E4E4",
      toggle: () => setF((prev) => ({ ...prev, [k]: !on })),
    };
  });
  // "내 주변" 필터는 정렬 기준일 뿐 목록을 거르지 않습니다 (원본 동작 유지)
  const active = (Object.keys(f) as FilterKey[]).filter((k) => f[k] && k !== "near");
  const centers = ALL_CENTERS.filter((c) => active.every((k) => c.tags.includes(k)));
  const isMap = view === "map";

  return {
    filters,
    centers,
    count: centers.length,
    isMap,
    mapSel: isMap,
    listSel: !isMap,
    mapBg: isMap ? "#FFFFFF" : "transparent",
    listBg: isMap ? "transparent" : "#FFFFFF",
    showMap: () => setView("map"),
    showList: () => setView("list"),
  };
}

export type CentersVals = ReturnType<typeof useCenters>;
