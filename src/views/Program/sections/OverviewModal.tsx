"use client";

import { useEffect, useRef, useState } from "react";
import { ELEMENTARY } from "@/views/ElementaryDetail/elementaryData";
import { ADVANCED } from "@/views/AdvancedDetail/advancedData";
import { SPECIAL_TONE } from "@/views/Special/useSpecial";

/**
 * 전체 커리큘럼 표(기존 이미지 curriculum_9.jpg 와 같은 내용을 HTML 로 구성)
 * 격자: 6열(단계 · 학년 · 정규 · 정규 심화 · 단기 특강 A · 단기 특강 B) × 17줄
 *  1 머리줄 / 2~4 유아(5~7세) / 5 화살표 / 6~11 초등(초1~초6) / 12 화살표 / 13~15 중등(중1~중3) / 16 사이 줄 / 17 고등
 * 과정 블록은 [시작 줄, 끝 줄+1] · [시작 열, 끝 열+1] 로 자리를 지정. 줄바꿈(\n)은 그대로 줄을 나눠 표시
 */
type Block = { r: [number, number]; c: [number, number]; label: string; sub?: string; bg: string; fg?: string };

const GAP_ROWS = [5, 12, 16];
const LAST_ROW = 17;

// 단계 띠(1열): 프로그램 칸 색과 겹치지 않게 모두 진한 회색 바탕 + 흰 글자
const STAGES: Block[] = [
  { r: [2, 5], c: [1, 2], label: "유아", bg: "#5C5C5C", fg: "#FFFFFF" },
  { r: [6, 12], c: [1, 2], label: "초등", bg: "#5C5C5C", fg: "#FFFFFF" },
  { r: [13, 16], c: [1, 2], label: "중등", bg: "#5C5C5C", fg: "#FFFFFF" },
  { r: [17, 18], c: [1, 2], label: "고등", bg: "#5C5C5C", fg: "#FFFFFF" },
];

// 학년(2열)
const GRADES: [number, string][] = [
  [2, "5세"], [3, "6세"], [4, "7세"],
  [6, "초1"], [7, "초2"], [8, "초3"], [9, "초4"], [10, "초5"], [11, "초6"],
  [13, "중1"], [14, "중2"], [15, "중3"],
  [17, "고"],
];

// 프로그램 색: 각 프로그램 페이지의 강조색과 연결(상세 데이터의 색을 바꾸면 이 표도 함께 바뀜)
// 정규 = 유아정규 분홍 · 초등 3과정(ELEMENTARY) · 소크라테스 퍼플 · 고등 문학 남색 / 정규 심화 = ADVANCED / 단기 특강 = 단기특강 목록 색(SPECIAL_TONE)
// fg: 블록 글자색(밝은 색 위는 진한 글자)
const C = {
  kinder: "#C7336E",
  vocab: ELEMENTARY.vocab.accent,
  reading: ELEMENTARY.reading.accent,
  logic: ELEMENTARY.logic.accent,
  socrates: "#5B4596",
  literature: "#2B3A5C",
  science: ADVANCED.science.accent,
  history: ADVANCED.history.accent,
  geo: ADVANCED.geo.accent,
  world: ADVANCED.world.accent,
};
const sp = (id: string) => ({ bg: SPECIAL_TONE[id].badge, fg: SPECIAL_TONE[id].badgeFg });

// 과정 블록(3~6열)
const BLOCKS: Block[] = [
  // 정규
  { r: [3, 4], c: [3, 4], label: "꿈꾸는 새싹 1", bg: C.kinder },
  { r: [4, 5], c: [3, 4], label: "꿈꾸는 새싹 2", bg: C.kinder },
  { r: [6, 7], c: [3, 4], sub: "생각하는 나무", label: "어휘리더 1", bg: C.vocab },
  { r: [7, 8], c: [3, 4], sub: "생각하는 나무", label: "어휘리더 2", bg: C.vocab },
  { r: [8, 9], c: [3, 4], sub: "생각하는 나무", label: "독서리더 1", bg: C.reading },
  { r: [9, 10], c: [3, 4], sub: "생각하는 나무", label: "독서리더 2", bg: C.reading },
  { r: [10, 11], c: [3, 4], sub: "생각하는 나무", label: "논리리더 1", bg: C.logic },
  { r: [11, 12], c: [3, 4], sub: "생각하는 나무", label: "논리리더 2", bg: C.logic },
  { r: [13, 14], c: [3, 4], label: "소크라테스 1", bg: C.socrates },
  { r: [14, 15], c: [3, 4], label: "소크라테스 2", bg: C.socrates },
  { r: [15, 16], c: [3, 4], label: "소크라테스 3", bg: C.socrates },
  { r: [17, 18], c: [3, 4], label: "소클고등문학", bg: C.literature },
  // 정규 심화
  { r: [8, 9], c: [4, 5], label: "과학탐탐", bg: C.science },
  { r: [9, 10], c: [4, 5], sub: "한우리 통합사회1", label: "똑똑 한국사", bg: C.history },
  { r: [10, 11], c: [4, 5], sub: "한우리 통합사회2", label: "세계문화 · 지리", bg: C.geo },
  { r: [11, 12], c: [4, 5], sub: "한우리 통합사회3", label: "세계사", bg: C.world },
  // 단기 특강
  { r: [2, 5], c: [5, 6], label: "참깨\n한글", ...sp("hangul") },
  { r: [7, 10], c: [5, 6], label: "다다\n어휘", ...sp("vocab") },
  { r: [10, 12], c: [5, 6], label: "한국사\n봄", ...sp("history") },
  // 교과 문학 탐독: 문학 특강 페이지의 교과 문학 탐독 파랑
  { r: [16, 17], c: [5, 6], label: "교과\n문학\n탐독", bg: "#3769B2" },
  { r: [9, 12], c: [6, 7], label: "똑독해", ...sp("nonfiction") },
  // 갈래별 주제별 문학 독해(별별 문학 독해): 문학 특강 페이지의 짙은 갈색
  { r: [12, 13], c: [6, 7], label: "갈래별\n주제별\n문학\n독해", ...sp("literature") },
  { r: [13, 16], c: [6, 7], label: "한국\n사람", ...sp("history") },
  { r: [16, 18], c: [6, 7], label: "소클\n고등\n통합\n사회", ...sp("society") },
];

const HEADS: { c: [number, number]; lines: string[] }[] = [
  { c: [3, 4], lines: ["정규", "프로그램", "(단계별 1년)"] },
  { c: [4, 5], lines: ["정규 심화", "프로그램", "(단계별 1년)"] },
  { c: [5, 7], lines: ["단기 특강", "프로그램", "(2~3개월)"] },
];

const area = (r: [number, number], c: [number, number]) => ({ gridRow: `${r[0]} / ${r[1]}`, gridColumn: `${c[0]} / ${c[1]}` });

/** 아래 방향 화살표(굵은 선) */
function ArrowDown({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" width="22" height="26" viewBox="0 0 22 26" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2v21M3 15l8 8 8-8" />
    </svg>
  );
}

function CurriculumChart() {
  const rows = Array.from({ length: LAST_ROW }, (_, i) => i + 1);
  return (
    <figure className="m-0">
      <figcaption className="sr-only">
        한우리 프로그램 전체 커리큘럼: 단계·학년별 정규, 정규 심화, 단기 특강 프로그램
      </figcaption>
      <div
        // 칸 사이 흰 1px 선(gap-px + 흰 배경). 모바일은 좁은 단계·학년 칸, 데스크톱(모달 최대 600px)은 조금 넓게
        className="grid grid-cols-[30px_34px_minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[auto] auto-rows-[minmax(42px,auto)] gap-px bg-white text-center sm:grid-cols-[44px_46px_minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] sm:auto-rows-[minmax(48px,auto)]"
      >
        {/* 바탕 칸: 머리줄·학년 줄은 회색, 단계 사이 줄은 더 옅은 회색 한 줄 */}
        {rows.flatMap((r) =>
          GAP_ROWS.includes(r)
            ? [<div key={`g${r}`} className="bg-[#F5F5F5]" style={area([r, r + 1], [1, 7])} aria-hidden="true" />]
            : [1, 2, 3, 4, 5, 6].map((c) => (
                <div key={`b${r}-${c}`} className="bg-[#E9E9E9]" style={area([r, r + 1], [c, c + 1])} aria-hidden="true" />
              )),
        )}

        {/* 머리줄 */}
        {HEADS.map((h) => (
          <div
            key={h.lines[0]}
            className="flex flex-col items-center justify-center px-0.5 py-2.5 text-[11px] leading-[1.35] break-keep text-[#333333] sm:text-[14px] lg:text-[14px]"
            style={area([1, 2], h.c)}
          >
            {h.lines.map((l, i) => (
              <span key={l} className={i === 2 ? "text-[10px] sm:text-[12px] lg:text-[12px]" : undefined}>
                {l}
              </span>
            ))}
          </div>
        ))}

        {/* 단계 띠: 글자를 세로로 */}
        {STAGES.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-center text-[15px] font-extrabold tracking-[0.2em] [writing-mode:vertical-rl] sm:text-[20px] lg:text-[20px]"
            style={{ ...area(s.r, s.c), background: s.bg, color: s.fg }}
          >
            {s.label}
          </div>
        ))}

        {/* 학년 */}
        {GRADES.map(([r, g]) => (
          <div
            key={g}
            className="flex items-center justify-center bg-[#DCDCDC] text-[12px] text-[#333333] sm:text-[15px] lg:text-[15px]"
            style={area([r, r + 1], [2, 3])}
          >
            {g}
          </div>
        ))}

        {/* 과정 블록 */}
        {BLOCKS.map((b) => (
          <div
            key={b.label}
            className="flex flex-col items-center justify-center px-0.5 py-1 leading-[1.25] break-keep"
            // 칸 색: 프로그램 색을 흰색과 섞어 조금 흐리게(75%)
            style={{ ...area(b.r, b.c), background: `color-mix(in srgb, ${b.bg} 75%, #FFFFFF)`, color: b.fg ?? "#FFFFFF" }}
          >
            {b.sub && <span className="text-[9px] text-black/55 sm:text-[11px] lg:text-[11px]">{b.sub}</span>}
            <span className={`font-bold ${b.c[0] >= 5 ? "text-[10px] sm:text-[12px] lg:text-[12px]" : "text-[12px] sm:text-[15px] lg:text-[15px]"}`}>
              {b.label.split("\n").map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </span>
          </div>
        ))}

        {/* 유아 → 초등 화살표 */}
        <div className="flex items-center justify-center" style={area([5, 6], [3, 4])} aria-hidden="true">
          <ArrowDown color="#E68BC3" />
        </div>
        {/* 초등 → 중등 화살표: 정규(보라) 아래로 + 정규 심화(연보라)에서 꺾여 정규 쪽으로 */}
        <div className="relative" style={area([12, 13], [3, 5])} aria-hidden="true">
          <span className="absolute top-1.5 left-[calc(25%-26px)]">
            <ArrowDown color="#B862D6" />
          </span>
          {/* 꺾인 선: 정규 심화 칸 가운데에서 아래로 → 왼쪽으로 → 화살표 */}
          <span className="absolute top-0 left-[75%] h-[14px] w-[3px] rounded-full bg-[#8B7FE8]" />
          <span className="absolute top-[11px] right-[25%] left-[calc(25%+15px)] h-[3px] rounded-full bg-[#8B7FE8]" />
          <span className="absolute top-[11px] left-[calc(25%+4px)]">
            <ArrowDown color="#8B7FE8" />
          </span>
        </div>
      </div>
    </figure>
  );
}

/**
 * '프로그램 전체 보기' 버튼 + 전체 커리큘럼 표 모달
 * - 기본 <dialog>(showModal) 사용: Esc 닫기, 포커스 가두기, 뒤 화면 조작 막기를 브라우저가 처리
 * - 열려 있는 동안 페이지 스크롤 잠금, 표는 모달 안에서 세로 스크롤
 * - 바깥(어두운 배경) 클릭 시 닫힘
 */
export default function OverviewModal() {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="mt-1 flex h-13 w-full cursor-pointer items-center justify-center rounded-[14px] border-[1.5px] border-solid border-[#F26522] bg-white font-[family-name:inherit] text-[15px] font-bold text-[#C2410C] lg:w-[360px]"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        프로그램 전체 보기
      </button>
      <dialog
        ref={ref}
        // 리셋(Preflight)이 없어 dialog 기본 테두리·여백을 직접 지움
        // 크기: 높이는 화면의 90%까지, 폭은 화면 좌우 16px 여백 안에서 최대 600px(이미지가 크게 보이도록)
        className="m-auto box-border flex max-h-[90dvh] w-[calc(100%-32px)] max-w-[600px] flex-col overflow-hidden rounded-[20px] border-0 bg-white p-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop:bg-black/60 [&:not([open])]:hidden"
        aria-labelledby="ov-title"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // 다이얼로그 바깥(배경) 클릭 → 닫기
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="flex h-16 flex-none items-center justify-between border-0 border-b border-solid border-[#EFEFEF] px-5">
          <h2 className="m-0 text-[16px] font-extrabold whitespace-nowrap text-[#1F1F1F]" id="ov-title">
            프로그램 전체 보기
          </h2>
          <button
            type="button"
            className="-mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent"
            aria-label="닫기"
            onClick={() => setOpen(false)}
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        {/* 커리큘럼 표: 모달 폭에 꽉 차게(안쪽 여백 모바일 12px · 그 이상 20px), 세로로 긴 표는 이 영역 안에서 스크롤.
            제목줄은 고정, 끝까지 스크롤해도 뒤 페이지로 스크롤이 넘어가지 않음(overscroll-contain) */}
        <div className="box-border min-h-0 flex-auto overflow-y-auto overscroll-contain p-3 sm:p-5">
          <div className="overflow-hidden rounded-[8px]">
            <CurriculumChart />
          </div>
        </div>
      </dialog>
    </>
  );
}
