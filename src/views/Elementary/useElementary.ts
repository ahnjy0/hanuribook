import { useState } from "react";
import { PATHS } from "@/routes";

type ProgId = "vocab" | "reading" | "logic";

const DEFS: {
  id: ProgId; grade: string; focus: string; title: string; desc: string; tags: string;
  chipBg: string; chipFg: string; long: string; steps: string[];
}[] = [
  { id: "vocab", grade: "초등 1·2학년", focus: "★ 어휘력·기초 문해력", title: "1·2학년 어휘리더", desc: "책 읽기의 즐거움과 교과 기초 어휘·표현력 다지기", tags: "#그림책  #교과기초어휘  #초등입학적응", chipBg: "#FFF1E7", chipFg: "#C2410C",
    long: "그림책과 저학년 문학을 깊이 읽으며 교과서에 나오는 기초 어휘와 표현을 익히고, 자기 생각을 짧은 글로 표현하는 습관을 만듭니다.",
    steps: ["어휘 놀이터", "그림책 깊이 읽기", "교과 연계 읽기", "생각 표현 쓰기"] },
  { id: "reading", grade: "초등 3·4학년", focus: "교과 독서·생각의 확장", title: "3·4학년 독서리더", desc: "과목별 심화 배경지식 확장 및 갈래별 글쓰기 기초 훈련", tags: "#교과연계  #갈래별글쓰기  #배경지식", chipBg: "#EAF2FF", chipFg: "#2F5AA8",
    long: "국어·사회·과학 교과와 연계된 도서로 배경지식을 넓히고, 설명문·감상문·논설문 등 갈래별 글쓰기의 기초를 단단히 다집니다.",
    steps: ["읽기·쓰기", "교과 읽기", "토의·토론", "문학 읽기"] },
  { id: "logic", grade: "초등 5·6학년", focus: "논리적 토론·중등 대비", title: "5·6학년 논리리더", desc: "비판적 미디어 읽기, 실전 찬반토론 및 중등 서술형 완벽 대비", tags: "#찬반토론  #미디어리터러시  #중등논술대비", chipBg: "#FFF6DA", chipFg: "#8A5300",
    long: "비문학과 미디어 텍스트를 비판적으로 읽고, 근거를 갖춘 찬반 토론과 논술 쓰기로 중학교 서술형·수행평가를 준비합니다.",
    steps: ["비문학 독해", "미디어 읽기", "찬반 토론", "논술 쓰기"] },
];

const LINKS: Record<ProgId, [string, string]> = {
  vocab: [PATHS.DetailVocab, "어휘리더"],
  reading: [PATHS.DetailReading, "독서리더"],
  logic: [PATHS.DetailLogic, "논리리더"],
};

const PALETTE: Record<ProgId, { soft: string; line: string; accent: string; ink: string; iconFg: string; btnBg: string; btnFg: string }> = {
  vocab: { soft: "#FFF6D6", line: "#F7E3A1", accent: "#FFC926", ink: "#7A5600", iconFg: "#5C4100", btnBg: "#FFC926", btnFg: "#3D2B00" },
  reading: { soft: "#EEF8DF", line: "#D3EBB0", accent: "#8CC63F", ink: "#3E6B10", iconFg: "#22400A", btnBg: "#8CC63F", btnFg: "#1C3306" },
  logic: { soft: "#E7F0FD", line: "#C3D8F7", accent: "#3B7DDD", ink: "#1E4E9C", iconFg: "#FFFFFF", btnBg: "#2F6FD6", btnFg: "#FFFFFF" },
};

const PROGS = DEFS.map((d) => ({ ...d, ...PALETTE[d.id], href: LINKS[d.id][0], short: LINKS[d.id][1] }));

export function useElementary() {
  // 원본에도 선택 상태만 있고 변경 UI는 없습니다.
  const [sel] = useState<ProgId>("vocab");
  const c = DEFS.find((d) => d.id === sel) ?? DEFS[0];
  return { progs: PROGS, cur: { ...c, steps: c.steps.map((t, i) => ({ n: i + 1, t })) } };
}

export type ElementaryVals = ReturnType<typeof useElementary>;
