import { useState } from "react";
import { PATHS } from "@/routes";
import { ELEMENTARY } from "@/views/ElementaryDetail/elementaryData";
import { ADVANCED } from "@/views/AdvancedDetail/advancedData";

/** 정규 심화 탭: 연령 박스 안에 글자 대신 넣는 프로그램 아이콘(그림은 sections/ProgramsSection 에 있음) */
export type ProgIcon = "science" | "history" | "geo" | "world";

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

type Tone = { soft: string; ink: string };

/**
 * 정규 탭 카드 색: 프로그램별 해당 페이지의 주요 색(soft: 연령 박스 배경, ink: 연령 글자)
 * - 초등 3과정은 상세 페이지 데이터(ELEMENTARY)와 연결 — 상세 색을 바꾸면 메인 카드도 함께 바뀜
 * - 꿈꾸는 새싹: 유아정규 분홍 / 소크라테스: 중등 퍼플 / 고등 문학: 중고등정규 전체의 고등 남색
 */
const PAGE_TONE = {
  kinder: { soft: "#FDF0F5", ink: "#C7336E" },
  vocab: { soft: ELEMENTARY.vocab.soft, ink: ELEMENTARY.vocab.accent },
  reading: { soft: ELEMENTARY.reading.soft, ink: ELEMENTARY.reading.accent },
  logic: { soft: ELEMENTARY.logic.soft, ink: ELEMENTARY.logic.accent },
  socrates: { soft: "#F3F0FA", ink: "#5B4596" },
  literature: { soft: "#EEF1F6", ink: "#2B3A5C" },
  // 정규 심화: 초등심화 상세 페이지 데이터(ADVANCED)와 연결
  science: { soft: ADVANCED.science.soft, ink: ADVANCED.science.accent },
  history: { soft: ADVANCED.history.soft, ink: ADVANCED.history.accent },
  geo: { soft: ADVANCED.geo.soft, ink: ADVANCED.geo.accent },
  world: { soft: ADVANCED.world.soft, ink: ADVANCED.world.accent },
} satisfies Record<string, Tone>;

const stageOf = (age: string): Stage =>
  age.startsWith("유아") ? "kinder" : age.startsWith("초등") ? "elementary" : age.startsWith("고") ? "high" : "middle";

// desc: 각 프로그램 상세·소개 화면의 기존 문구를 그대로 사용
// sub: 카드에 보이는 한 줄 설명(정규·정규 심화 탭) / field: 프로그램 분야(특강 탭)
// tone: 카드 색(없으면 연령대 색 STAGE_TONE) / icon: 있으면 연령 박스에 아이콘, 학년은 제목 위 글자로
const PROGRAMS: Record<TabKey, { age: string; title: string; sub?: string; field?: string; desc: string; href: string; tone?: Tone; icon?: ProgIcon }[]> = {
  regular: [
    { age: "유아 6~7세", title: "꿈꾸는 새싹", sub: "누리과정·초등교과 연계 학습", desc: "듣기·말하기·읽기·쓰기 생각하기 기본 다지기", href: PATHS.Kinder, tone: PAGE_TONE.kinder },
    { age: "초등 1·2학년", title: "어휘리더", sub: "교과 학습 대비 필수 어휘 익히기", desc: "책 읽기의 즐거움과 교과 기초 어휘·표현력 다지기", href: PATHS.DetailVocab, tone: PAGE_TONE.vocab },
    { age: "초등 3·4학년", title: "독서리더", sub: "교과 배경지식을 쌓는 문학·비문학 읽기", desc: "과목별 심화 배경지식 확장 및 갈래별 글쓰기 기초 훈련", href: PATHS.DetailReading, tone: PAGE_TONE.reading },
    { age: "초등 5·6학년", title: "논리리더", sub: "근거로 설득하는 서술형 글쓰기 학습", desc: "비판적 미디어 읽기, 실전 찬반토론 및 중등 서술형 완벽 대비", href: PATHS.DetailLogic, tone: PAGE_TONE.logic },
    { age: "중등", title: "소크라테스", sub: "중등 내신 대비 단계별 독해 훈련", desc: "질문하고 토론하며 논리를 세우는 중등 독서토론", href: PATHS.DetailSocrates, tone: PAGE_TONE.socrates },
    { age: "고등", title: "소클 고등 문학", sub: "심층 독서·논구술로 내신·입시 대비", desc: "교과서·수능 문학 작품을 깊이 읽고 해석하는 힘", href: PATHS.DetailLiterature, tone: PAGE_TONE.literature },
  ],
  advanced: [
    { age: "초등 3학년", title: "과학탐탐", sub: "비주얼씽킹을 통한 과학 핵심 개념 및 어휘 이해", desc: "궁금증을 탐구로, 탐구를 글로", href: PATHS.DetailScience, tone: PAGE_TONE.science, icon: "science" },
    { age: "초등 4학년", title: "똑똑 한국사", sub: "한국사 진도 대비 전체 역사 흐름 정복", desc: "이야기로 읽고 흐름으로 이해하는 우리 역사", href: PATHS.DetailHistory, tone: PAGE_TONE.history, icon: "history" },
    { age: "초등 5학년", title: "세계 문화·지리", sub: "세계 주요 나라 질, 정치, 경제, 사회, 문화 이해", desc: "지도를 펼치면 세계가 보여요", href: PATHS.DetailGeo, tone: PAGE_TONE.geo, icon: "geo" },
    { age: "초등 6학년", title: "세계사", sub: "중학교 역사 교육 과정 반영 세계 곳곳의 환경과 생활모습 이해", desc: "세계의 흐름 속에서 오늘을 읽다", href: PATHS.DetailWorld, tone: PAGE_TONE.world, icon: "world" },
  ],
  special: [
    { age: "유아", title: "참깨한글", field: "한글", desc: "그림책과 놀이로 자음·모음을 익히고 읽기 독립을 준비하는 유아 맞춤 한글 과정.", href: PATHS.Special },
    { age: "초등", title: "다다어휘", field: "어휘", desc: "교과서 필수 어휘와 한자어를 집중적으로 익혀 독해의 기초 체력을 다집니다.", href: PATHS.Special },
    { age: "초등", title: "똑독해", field: "비문학", desc: "문단 구조와 핵심어 찾기로 비문학 지문을 정확하게 읽는 독해 전략 특강.", href: PATHS.Special },
    { age: "초·중등", title: "한국사봄 | 한국사람", field: "역사", desc: "시대 흐름과 인물 중심으로 한국사를 정리하고 탐구 활동으로 기억에 남깁니다.", href: PATHS.Special },
    { age: "중등", title: "별별문학독해 | 교과문학탐독", field: "문학", desc: "교과서 수록 문학 작품을 갈래별로 깊이 읽고 내신 서술형까지 대비합니다.", href: PATHS.Special },
    { age: "고등", title: "소클 고등 통합사회", field: "통합사회", desc: "통합사회 핵심 개념을 시사 이슈와 연결해 읽고 토론·논술로 정리합니다.", href: PATHS.Special },
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
    return { ...p, stage, tone: p.tone ?? STAGE_TONE[stage] };
  });

  return { progTabs, progs };
}

export type MainVals = ReturnType<typeof useMain>;
