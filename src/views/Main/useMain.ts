import { useState } from "react";
import { PATHS } from "@/routes";

type TabKey = "regular" | "advanced" | "special";

/** 대상 연령대 — 카드의 아이콘·색상 구분에 사용 */
export type Stage = "kinder" | "elementary" | "middle" | "high";

const TAB_DEFS: [TabKey, string][] = [
  ["regular", "정규"],
  ["advanced", "정규 심화"],
  ["special", "특강"],
];

const STAGE_TONE: Record<Stage, { soft: string; ink: string }> = {
  kinder: { soft: "#FFF3C9", ink: "#8A5A00" },
  elementary: { soft: "#FFE7D9", ink: "#C2410C" },
  middle: { soft: "#E2F3E7", ink: "#1E7334" },
  high: { soft: "#E3EDFC", ink: "#1E4E9C" },
};

const stageOf = (age: string): Stage =>
  age.startsWith("유아") ? "kinder" : age.startsWith("초등") ? "elementary" : age.startsWith("고") ? "high" : "middle";

// desc: 각 프로그램 상세·소개 화면의 기존 문구를 그대로 사용
const PROGRAMS: Record<TabKey, { age: string; title: string; desc: string; href: string }[]> = {
  regular: [
    { age: "유아 6~7세", title: "꿈꾸는 새싹", desc: "듣기·말하기·읽기·쓰기 생각하기 기본 다지기", href: PATHS.Kinder },
    { age: "초등 1·2학년", title: "어휘리더", desc: "책 읽기의 즐거움과 교과 기초 어휘·표현력 다지기", href: PATHS.DetailVocab },
    { age: "초등 3·4학년", title: "독서리더", desc: "과목별 심화 배경지식 확장 및 갈래별 글쓰기 기초 훈련", href: PATHS.DetailReading },
    { age: "초등 5·6학년", title: "논리리더", desc: "비판적 미디어 읽기, 실전 찬반토론 및 중등 서술형 완벽 대비", href: PATHS.DetailLogic },
    { age: "중학생", title: "중등 소크라테스", desc: "질문하고 토론하며 논리를 세우는 중등 독서토론", href: PATHS.DetailSocrates },
    { age: "고등학생", title: "고등 문학", desc: "교과서·수능 문학 작품을 깊이 읽고 해석하는 힘", href: PATHS.DetailLiterature },
  ],
  advanced: [
    { age: "초등 3~6학년", title: "과학탐탐", desc: "궁금증을 탐구로, 탐구를 글로", href: PATHS.DetailScience },
    { age: "초등 3~6학년", title: "똑똑한국사", desc: "이야기로 읽고 흐름으로 이해하는 우리 역사", href: PATHS.DetailHistory },
    { age: "초등 3~6학년", title: "세계문화지리", desc: "지도를 펼치면 세계가 보여요", href: PATHS.DetailGeo },
    { age: "초등 5~6학년", title: "세계사", desc: "세계의 흐름 속에서 오늘을 읽다", href: PATHS.DetailWorld },
  ],
  special: [
    { age: "유아", title: "참깨한글", desc: "그림책과 놀이로 자음·모음을 익히고 읽기 독립을 준비하는 유아 맞춤 한글 과정.", href: PATHS.Special },
    { age: "초등", title: "다다어휘", desc: "교과서 필수 어휘와 한자어를 집중적으로 익혀 독해의 기초 체력을 다집니다.", href: PATHS.Special },
    { age: "초등", title: "똑독해", desc: "문단 구조와 핵심어 찾기로 비문학 지문을 정확하게 읽는 독해 전략 특강.", href: PATHS.Special },
    { age: "초등", title: "한국사봄 | 한국사람", desc: "시대 흐름과 인물 중심으로 한국사를 정리하고 탐구 활동으로 기억에 남깁니다.", href: PATHS.Special },
    { age: "중·고등", title: "별별문학독해 | 교과문학탐독", desc: "교과서 수록 문학 작품을 갈래별로 깊이 읽고 내신 서술형까지 대비합니다.", href: PATHS.Special },
    { age: "고등", title: "고등 통합사회", desc: "통합사회 핵심 개념을 시사 이슈와 연결해 읽고 토론·논술로 정리합니다.", href: PATHS.Special },
  ],
};

export function useMain() {
  const [tab, setTab] = useState<TabKey>("regular");

  const progTabs = TAB_DEFS.map(([k, label]) => {
    const on = k === tab;
    return {
      label,
      sel: on,
      bg: on ? "#E6450F" : "transparent",
      fg: on ? "#FFFFFF" : "#9A3412",
      weight: on ? 800 : 600,
      pick: () => setTab(k),
    };
  });

  const progs = PROGRAMS[tab].map((p) => {
    const stage = stageOf(p.age);
    return { ...p, stage, tone: STAGE_TONE[stage] };
  });

  return { progTabs, progs };
}

export type MainVals = ReturnType<typeof useMain>;
