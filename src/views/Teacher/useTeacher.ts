import { useState } from "react";

const WORKS = [
  { title: "일기 쓰기", desc: "회원이 직접 쓴 일기 과제물" },
  { title: "독서 감상문", desc: "필독서를 읽고 쓴 감상문" },
  { title: "토론 활동지", desc: "찬반 토론 준비 활동지" },
];

export function useTeacher() {
  const [i, setI] = useState(0);
  const n = WORKS.length;
  return {
    work: { ...WORKS[i], n: i + 1 },
    total: n,
    prev: () => setI((v) => (v - 1 + n) % n),
    next: () => setI((v) => (v + 1) % n),
  };
}

export type TeacherVals = ReturnType<typeof useTeacher>;
