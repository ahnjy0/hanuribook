"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import KindIcon, { CENTER_KIND_STYLE as KIND_STYLE, type CenterKind } from "@/components/common/CenterKindIcon";
import type { CentersVals } from "../useCenters";

type Props = Pick<CentersVals, "centers">;

/** 지도 마커: 유형 아이콘 + 센터명. active면 강조 */
function MapMarker({
  name,
  kind,
  pos,
  active = false,
}: {
  name: string;
  kind: CenterKind;
  pos: string;
  active?: boolean;
}) {
  const s = KIND_STYLE[kind];
  return (
    <span
      className={`absolute flex items-center gap-1.5 rounded-[10px] py-1 pr-2.5 pl-1 text-[12px] font-bold whitespace-nowrap shadow-[0_2px_6px_rgba(0,0,0,0.12)] ${pos} ${
        active ? "bg-[#D94E0F] text-white" : "border border-[#E4E4E4] bg-white text-[#1F1F1F]"
      }`}
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-[7px]"
        style={{ background: active ? "#FFFFFF" : s.bg }}
      >
        <KindIcon kind={kind} size={16} color={s.fg} />
      </span>
      {name}
      <span className="sr-only">{` (${s.label})`}</span>
    </span>
  );
}

/** 센터명 앞 유형 아이콘 (보이는 글자는 없고, 화면낭독기용으로만 유형명을 읽어 줌) */
function CenterKindBadge({ kind }: { kind: CenterKind }) {
  const s = KIND_STYLE[kind];
  return (
    <span
      className="flex h-10 w-10 flex-none items-center justify-center rounded-[12px]"
      style={{ background: s.bg }}
    >
      <KindIcon kind={kind} size={24} color={s.fg} />
      <span className="sr-only">{s.label}</span>
    </span>
  );
}

/** 지도 위 센터 마커 자리(지도 API 연결 전 임시 배치) */
const MARKERS: { name: string; kind: CenterKind; pos: string }[] = [
  { name: "서초북지부", kind: "branch", pos: "top-[42%] left-[28%]" },
  { name: "서초남지부", kind: "branch", pos: "top-[26%] left-[52%]" },
  { name: "서초2동독서교실", kind: "room", pos: "top-[60%] left-[4%]" },
  { name: "서초중앙독서교실", kind: "room", pos: "top-[76%] left-[42%]" },
];

/** 지도(지도 API 연결 전 그림): active 이름의 마커를 강조 */
function MapView({ active, className, id, label }: { active: string; className: string; id?: string; label: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#F1F3F0] ${className}`} id={id} role="img" aria-label={label}>
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <path
          d="M-10 150 C60 120 110 170 170 140 S280 90 330 120 S400 110 420 100 L420 130 C380 140 340 150 300 145 S200 175 160 172 S60 160 -10 180Z"
          fill="#CFE3F5"
        />
        <path d="M0 60 L400 80 M0 230 L400 210 M80 0 L110 300 M220 0 L200 300 M320 0 L340 300" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 60 L400 80 M0 230 L400 210 M80 0 L110 300 M220 0 L200 300 M320 0 L340 300" stroke="#E2E2E2" strokeWidth="1" />
        <rect x="240" y="190" width="60" height="40" rx="6" fill="#DDEED8" />
        <rect x="30" y="20" width="50" height="30" rx="6" fill="#DDEED8" />
      </svg>{" "}
      <span className="absolute top-2.5 left-1/2 -translate-x-1/2 rounded-full border border-[#E4E4E4] bg-white px-3 py-1.5 text-[12px] font-bold text-[#C2410C]">
        ↻ 이 지역 재검색
      </span>{" "}
      {MARKERS.map((m) => (
        <MapMarker key={m.name} name={m.name} kind={m.kind} pos={m.pos} active={m.name === active} />
      ))}
      <button
        className="absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center rounded-[50%] border border-[#E4E4E4] bg-white"
        aria-label="현재 위치로 이동"
      >
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D94E0F" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      </button>
      <span className="absolute bottom-3 left-3 text-[11px] text-[#555555]">[지도 API 영역]</span>
    </div>
  );
}

type Center = CentersVals["centers"][number];

/**
 * '위치보기' 지도 시트: 화면 아래에서 위로 올라오는 창(센터명 · 주소 + 그 센터 마커를 강조한 지도)
 * - 기본 <dialog>(showModal) 사용: Esc 닫기, 포커스 가두기, 뒤 화면 조작 막기를 브라우저가 처리
 * - 열려 있는 동안 페이지 스크롤 잠금, 바깥(어두운 배경) 클릭 시 닫힘
 * - 데스크톱에서도 아래에 붙되 가운데 최대 720px
 */
function MapSheet({ center, onClose }: { center: Center | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (center && !d.open) d.showModal();
    if (!center && d.open) d.close();
    document.body.style.overflow = center ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [center]);

  return (
    <dialog
      ref={ref}
      // 리셋(Preflight)이 없어 dialog 기본 테두리·여백을 직접 지움
      // 모바일·태블릿: 화면 맨 아래에 붙고(mb-0 mt-auto) 위 모서리만 둥글게, 아래에서 위로 올라옴
      // 데스크톱: 화면 가운데(my-auto), 네 모서리 둥글게, 살짝 커지며 나타남
      className="mx-auto mt-auto mb-0 box-border flex max-h-[85dvh] w-full max-w-[720px] animate-sheet-up flex-col overflow-hidden rounded-t-[24px] border-0 bg-white p-0 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] backdrop:bg-black/60 motion-reduce:animate-none lg:my-auto lg:w-[calc(100%-64px)] lg:animate-pop-in lg:rounded-[24px] lg:shadow-[0_20px_50px_rgba(0,0,0,0.3)] [&:not([open])]:hidden"
      aria-labelledby="ct-sheet-title"
      onClose={onClose}
      onClick={(e) => {
        // 다이얼로그 바깥(배경) 클릭 → 닫기
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 위 손잡이 막대(장식, 아래에서 올라오는 모바일·태블릿만) */}
      <span className="mx-auto mt-2.5 h-1.5 w-10 flex-none rounded-full bg-[#DDDDDD] lg:hidden" aria-hidden="true" />
      {/* 머리: 목록 카드와 같은 유형 아이콘 + 지부명 */}
      <div className="flex flex-none items-center justify-between gap-2 px-5 pt-3 pb-3 lg:pt-5">
        <div className="flex min-w-0 items-center gap-2.5">
          {center && <CenterKindBadge kind={center.kind} />}
          <h2 className="m-0 text-[20px] font-extrabold text-[#1F1F1F]" id="ct-sheet-title">
            {center?.name}
          </h2>
        </div>
        <button
          type="button"
          className="-mr-2 flex h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-full border-0 bg-transparent"
          aria-label="닫기"
          onClick={onClose}
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div className="flex min-h-0 flex-auto flex-col gap-3 overflow-y-auto overscroll-contain px-5 pb-5">
        {/* 지부 정보: 목록 카드와 같은 회색 박스(주소 · 운영 시간) */}
        {center && (
          <ul className="m-0 flex flex-none list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] leading-[1.5] text-[#222222]">
            <li className="flex gap-2">
              <svg className="mt-0.25 flex-none" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A4A4A" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="min-w-0 flex-auto">{center.addr}</span>
            </li>
            <li className="flex gap-2">
              <svg className="mt-0.25 flex-none" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A4A4A" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {center.hours}
            </li>
          </ul>
        )}
        {center && (
          <MapView
            active={center.name}
            className="h-[44dvh] max-h-[420px] min-h-[240px] flex-none rounded-[16px] border border-[#E6E6E6]"
            label={`${center.name} 위치 지도`}
          />
        )}
      </div>
    </dialog>
  );
}

export default function ResultsSection({ centers }: Props) {
  // '위치보기'로 고른 센터(있으면 지도 시트가 열림)
  const [sel, setSel] = useState<Center | null>(null);
  return (
    <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 gap-4 px-5 pt-3.5 pb-12 lg:grid-cols-2 lg:items-start lg:gap-6">
      <MapSheet center={sel} onClose={() => setSel(null)} />
      {/* 지도: 항상 표시(첫 센터 강조) */}
      <MapView
        active="서초북지부"
        className="h-65 rounded-[20px] border border-[#E6E6E6] md:h-85 lg:h-[620px]"
        id="ct-map"
        label="서울 주요 한우리 센터 위치 지도"
      />
      <ul className="m-0 grid list-none grid-cols-1 gap-3.5 p-0 md:grid-cols-2 lg:grid-cols-1">
        {centers.map((c, i) => (
          <li key={i}>
            <article className="flex flex-col gap-3 rounded-[22px] border border-[#EEEEEE] bg-white p-5">
              <div className="flex items-center gap-2.5">
                <CenterKindBadge kind={c.kind} />
                <h2 className="m-0 text-[20px] font-extrabold">{c.name}</h2>
              </div>
              <ul className="m-0 flex list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] leading-[1.5] text-[#222222]">
                <li className="flex gap-2">
                  <svg
                    className="mt-0.25 flex-none"
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A4A4A"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="min-w-0 flex-auto">{c.addr}</span>
                  {/* 위치보기: 아래에서 위로 올라오는 지도 시트 열기 */}
                  <button
                    type="button"
                    className="inline-flex h-7.5 flex-none cursor-pointer items-center gap-0.75 self-start rounded-full border border-solid border-[#F26522] bg-white px-2.5 py-0 font-[family-name:inherit] text-[12px] font-bold whitespace-nowrap text-[#C2410C]"
                    aria-haspopup="dialog"
                    aria-label={`${c.name} 위치보기`}
                    onClick={() => setSel(c)}
                  >
                    <svg
                      aria-hidden="true"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M3 11 22 2l-9 19-2-8-8-2z" />
                    </svg>
                    위치보기
                  </button>
                </li>
                <li className="flex gap-2">
                  <svg
                    className="mt-0.25 flex-none"
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A4A4A"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  {c.hours}
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-2">
                {/* 전화 문의: 흰 바탕 + 주황 테두리 · 글자 + 전화 아이콘(옆 '상담 예약하기'와 같은 주황 계열) */}
                <a
                  className="flex h-12.5 items-center justify-center gap-1.5 rounded-[12px] border-[1.5px] border-solid border-[#F26522] bg-white text-[15px] font-bold text-[#C2410C] no-underline"
                  href="tel:0262762666"
                >
                  <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  전화 문의
                </a>
                <Link
                  className="flex h-12.5 items-center justify-center gap-1.5 rounded-[12px] bg-[#F26522] text-[15px] font-bold text-white no-underline"
                  href="/consult"
                >
                  상담 예약하기
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
