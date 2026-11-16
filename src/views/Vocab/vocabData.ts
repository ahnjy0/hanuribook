// 어휘리더 페이지 공통 색상·교재 데이터

/** 강조색(진한 주황 — 흰 바탕 위 글자용), 연한 노랑 배경 */
export const ACCENT = "#C2410C";
export const SOFT = "#FFF4D6";

export type Book = {
  title: string;
  grade: string;
  goal: string;
  src: string;
  w: number;
  h: number;
};

export const BOOKS: Book[] = [
  {
    title: "어휘리더 1",
    grade: "초등 1학년",
    goal: "다양한 어휘력 기르기",
    src: "https://cdn.hanuribook.com/img/hanuribook/level2_01.png",
    w: 259,
    h: 340,
  },
  {
    title: "어휘리더 2",
    grade: "초등 2학년",
    goal: "발표력 키우기",
    src: "https://cdn.hanuribook.com/img/hanuribook/level2_02.png",
    w: 257,
    h: 342,
  },
];
