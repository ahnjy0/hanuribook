import { useState } from "react";

const COURSES = [
  {
    id: "sci", label: "과학탐탐", grade: "초등 3학년", tint: "#E6F4EA", badge: "#1F7A4C",
    img: "실험 관찰 노트를 쓰는 아이", short: "과학 도서 탐구와 실험 관찰 글쓰기",
    slogan: "궁금증을 탐구로, 탐구를 글로",
    desc: "과학 교과와 연계된 도서를 읽고 관찰·실험 활동을 통해 원리를 이해한 뒤, 탐구 보고서와 설명문으로 정리합니다.",
    points: ["교과서 핵심 과학 개념을 책으로 먼저 이해", "관찰·실험 과정을 논리적인 글로 표현", "과학 관련 시사 이슈 토론"],
    steps: ["개념 도서 읽기", "탐구 활동", "실험 관찰 기록", "탐구 보고서 쓰기"],
  },
  {
    id: "kh", label: "한국사", grade: "초등 4학년", tint: "#FFF1E0", badge: "#B45309",
    img: "역사책과 유물 사진 카드", short: "시대 흐름으로 읽는 우리 역사",
    slogan: "이야기로 읽고 흐름으로 이해하는 역사",
    desc: "선사 시대부터 근현대까지 시대별 역사 도서를 읽으며 인물과 사건을 이해하고, 역사적 사고력과 판단력을 기릅니다.",
    points: ["5·6학년 사회 역사 단원 선행 이해", "인물·사건을 연결하는 시대 흐름 정리", "역사 인물 가상 인터뷰·토론"],
    steps: ["시대 개관 읽기", "인물 탐구", "사건 토론", "역사 논술 쓰기"],
  },
  {
    id: "geo", label: "세계문화지리", grade: "초등 5학년", tint: "#E8F1FB", badge: "#2F5AA8",
    img: "세계 지도와 여러 나라 문화 카드", short: "세계 여러 나라의 자연과 문화",
    slogan: "지도를 펼치면 세계가 보여요",
    desc: "대륙별 자연환경과 문화를 다룬 도서를 읽고, 지도 활동과 문화 비교를 통해 세계를 이해하는 넓은 시야를 키웁니다.",
    points: ["대륙·나라별 자연환경과 생활 이해", "지도 읽기와 문화 비교 활동", "세계시민 관점의 토론"],
    steps: ["대륙 탐험 읽기", "지도 활동", "문화 비교", "여행기·소개문 쓰기"],
  },
  {
    id: "wh", label: "세계사", grade: "초등 6학년", tint: "#F1ECFA", badge: "#6B46C1",
    img: "세계사 연표와 고대 문명 그림", short: "문명과 시대로 읽는 세계 역사",
    slogan: "세계의 흐름 속에서 오늘을 읽다",
    desc: "고대 문명부터 현대까지 세계사의 주요 장면을 책으로 읽고, 한국사와 연결하여 시대를 입체적으로 이해합니다.",
    points: ["중학교 역사 과목 대비 배경지식", "한국사와 세계사의 연결 이해", "역사적 쟁점에 대한 논술 훈련"],
    steps: ["문명 읽기", "연표 정리", "쟁점 토론", "역사 논술 쓰기"],
  },
];

export function useAdvanced() {
  const [sel, setSel] = useState("sci");

  const tabs = COURSES.map((d) => {
    const on = d.id === sel;
    return {
      ...d,
      sel: on,
      bg: on ? "#F26522" : "#FFFFFF",
      fg: on ? "#FFFFFF" : "#333333",
      border: on ? "1px solid #F26522" : "1px solid #E4E4E4",
      pick: () => setSel(d.id),
    };
  });
  const c = COURSES.find((d) => d.id === sel) ?? COURSES[0];

  return { tabs, cur: { ...c, steps: c.steps.map((t, i) => ({ n: i + 1, t })) } };
}

export type AdvancedVals = ReturnType<typeof useAdvanced>;
