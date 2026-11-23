import { PATHS } from "@/routes";
import { SPECIAL_PROGRAMS, inkOf, onAccentOf, type SpecialProgramId } from "@/components/templates/SpecialDetail/specialData";

/**
 * 카드 색: 상세 페이지(specialData)의 과정 색과 연결 — 상세 색을 바꾸면 카드도 함께 바뀜
 * tint = 연한 바탕(soft), badge = 강조색(accent, 분야 라벨 바탕), badgeFg = 분야 라벨 글자색,
 * ink = 대상 라벨 글자색(흰 바탕 위 강조 글자), line = 강조색 25% 테두리
 * 별별문학독해 | 교과문학탐독 카드는 첫 번째 탭 과정(별별문학독해) 색
 */
const toneOf = (id: SpecialProgramId) => {
  const t = SPECIAL_PROGRAMS[id].theme;
  return { tint: t.soft, badge: t.accent, badgeFg: onAccentOf(t), ink: inkOf(t), line: `${t.accent}40` };
};

/**
 * 단기특강 카드 데이터(초등심화 전체 페이지 과정 카드와 같은 디자인)
 * id: 카드 구분 키 / age: 대상 라벨 / field: 분야 라벨(특강색 알약)
 * tint · line · badge: 카드 배경 · 테두리 · 강조색(대상 라벨 글자, 분야 라벨 바탕, 상세보기 버튼)
 * href: 상세 페이지(SpecialDetail 템플릿). 한국사봄 | 한국사람은 아직 상세 내용이 없어 자리표시 "#"(누르면 아무 동작 없음, 색도 따로 지정)
 */
const ITEMS: {
  id: string;
  age: string;
  field: string;
  title: string;
  desc: string;
  tint: string;
  line: string;
  badge: string;
  badgeFg: string;
  ink: string;
  href: string;
}[] = [
  { id: "hangul", age: "유아", field: "한글", title: "참깨한글", desc: "책을 읽으며 한글을 재미있게 깨치는 한글 프로그램", ...toneOf("hangul"), href: PATHS.SpecialHangul },
  { id: "vocab", age: "초등", field: "어휘", title: "다다어휘", desc: "교과서 필수 어휘 집중 학습", ...toneOf("vocab"), href: PATHS.SpecialVocab },
  { id: "nonfiction", age: "초등", field: "비문학", title: "똑독해", desc: "사회, 과학, 경제 11가지 비문학 독해 원리 학습", ...toneOf("nonfiction"), href: PATHS.SpecialNonfiction },
  { id: "history", age: "초등", field: "역사", title: "한국사봄 | 한국사람", desc: "한국사 집중 대비", tint: "#FFF1E0", line: "#F6D9B5", badge: "#B45309", badgeFg: "#FFFFFF", ink: "#B45309", href: "#" },
  { id: "literature", age: "중·고등", field: "문학", title: "별별문학독해 | 교과문학탐독", desc: "중등 교과 및 수능 연계 작품 분석", ...toneOf("litMiddle"), href: PATHS.SpecialLiterature },
  { id: "society", age: "고등", field: "통합사회", title: "소클 고등 통합사회", desc: "통합사회 교과 대비", ...toneOf("society"), href: PATHS.SpecialSociety },
];

export function useSpecial() {
  return { items: ITEMS };
}

export type SpecialVals = ReturnType<typeof useSpecial>;
