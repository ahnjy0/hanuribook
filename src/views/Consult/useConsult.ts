import { useState } from "react";

const GRADE_LIST = ["6세", "7세", "초1", "초2", "초3", "초4", "초5", "초6", "중1", "중2", "중3", "고1", "고2"];

const LESSON_TYPES = [
  { key: "visit", label: "방문 수업", desc: "선생님이 가정으로 방문하여 수업" },
  { key: "academy", label: "학원 수업", desc: "회원이 학원으로 방문하여 수업" },
  { key: "homeclub", label: "홈클럽 수업", desc: "회원이 선생님의 가정으로 방문하여 수업" },
] as const;

const STEP_DEFS = ["자녀 정보", "수업 형태", "보호자 정보"];
const STEPS = STEP_DEFS.map((label, i) => ({
  n: i + 1,
  label,
  line: i < 2,
  flex: i < 2 ? "1 1 auto" : "0 0 auto",
  bg: i === 0 ? "#F26522" : "#E4E4E4",
  fg: i === 0 ? "#FFFFFF" : "#4A4A4A",
  weight: i === 0 ? 700 : 500,
  color: i === 0 ? "#1F1F1F" : "#6B6B6B",
}));

const FAQ_DEFS = [
  { q: "상담 신청하면 바로 결제되나요?", a: "아닙니다! 전화 상담과 방문 진단은 무료이며, 실제 수업 진행 여부는 상담 후 자녀와 편안하게 상의하여 결정하실 수 있습니다." },
  { q: "첫 수업은 어떻게 진행되나요?", a: "각 그룹 아이들의 역량과 교사의 재량에 따라 달리 진행될 수 있습니다. 하지만 기본적으로 한우리독서토론논술 프로그램의 특징을 소개하고, 수업 계획과 과제 등 독서토론논술 학습 전반에 대해서 오리엔테이션을 합니다. 그리고 나서 첫 수업을 진행합니다." },
  { q: "우리 아이는 일대일로 수업을 받고 싶은데요?", a: "일대일 수업도 좋습니다. 하지만 또래의 아이들과 같은 주제를 가지고 생각을 이야기 하고 자신의 생각을 논리적으로 설명하고 상대방을 설득하는 것이 토론이고, 그 생각을 쓰기로 변환시키는 일이 논술이기 때문에 아이들의 독서토론논술 지도 방법은 그룹별 활동이 가장 효과적입니다." },
  { q: "선생님이 방문수업을 하나요? 아니면 아이들이 선생님 댁으로 가야 하나요?", a: "아이가 사는 곳이 어딘지에 따라 그 곳에 소속된 선생님이 학생의 집으로 방문하는 경우도 있고, 학생이 선생님 댁으로 가서 수업이 진행되는 경우도 있습니다. 거주 지역이 한우리 소속 센터와 가깝다면 학원형태의 독서교실에서 수업 받을 수도 있습니다." },
];

export function useConsult() {
  const [selGrades, setSelGrades] = useState<string[]>(["초1"]);
  // 중복 선택 가능. 필수 항목이므로 마지막 하나는 해제되지 않음
  const toggleGrade = (label: string) =>
    setSelGrades((prev) => {
      if (!prev.includes(label)) return GRADE_LIST.filter((g) => g === label || prev.includes(g));
      return prev.length > 1 ? prev.filter((g) => g !== label) : prev;
    });
  const grade = selGrades.join(", ");
  // 수업 형태: 선택 항목(단일 선택, 다시 누르면 해제)
  const [lessonKey, setLessonKey] = useState<string | null>(null);
  const lessonTypes = LESSON_TYPES.map((t) => {
    const on = t.key === lessonKey;
    return {
      ...t,
      sel: on,
      pick: () => setLessonKey((prev) => (prev === t.key ? null : t.key)),
    };
  });
  const lessonLabel = LESSON_TYPES.find((t) => t.key === lessonKey)?.label ?? "";
  const [agree, setAgree] = useState(true);
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true, 1: true });
  const [done, setDone] = useState(false);

  const grades = GRADE_LIST.map((label) => {
    const on = selGrades.includes(label);
    return {
      label,
      sel: on,
      bg: on ? "#F26522" : "#F4F4F5",
      fg: on ? "#FFFFFF" : "#333333",
      border: on ? "2px solid #F26522" : "2px solid transparent",
      weight: on ? 700 : 500,
      pick: () => toggleGrade(label),
    };
  });

  const faqs = FAQ_DEFS.map((f, i) => {
    const isOpen = !!open[i];
    return {
      ...f,
      open: isOpen,
      exp: isOpen,
      icon: isOpen ? "−" : "+",
      toggle: () => setOpen((prev) => ({ ...prev, [i]: !isOpen })),
    };
  });

  return {
    done,
    notDone: !done,
    grade,
    submit: () => setDone(true),
    grades,
    lessonTypes,
    lessonLabel,
    steps: STEPS,
    faqs,
    agree,
    toggleAgree: () => setAgree((v) => !v),
  };
}

export type ConsultVals = ReturnType<typeof useConsult>;
