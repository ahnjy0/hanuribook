"use client";

import { useEffect, useRef, useState } from "react";

/** ISMS 방패 로고 (푸터 배지와 팝업에서 공용) */
function IsmsShield({ width, height }: { width: number; height: number }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 30 34" fill="none">
      <path
        d="M15 2 3 6.5v9.5c0 7.7 5.2 13.6 12 16 6.8-2.4 12-8.3 12-16V6.5z"
        fill="#2F5AA8"
        stroke="#7FA6E6"
        strokeWidth="1.5"
      />
      <text
        x="15"
        y="20"
        textAnchor="middle"
        fontSize="7"
        fontWeight="800"
        fill="#FFFFFF"
        fontFamily="Pretendard, sans-serif"
      >
        ISMS
      </text>
    </svg>
  );
}

const INFO = [
  { label: "인증범위", value: "대성마이맥, 한우리열린교육, 소속학원 시스템" },
  { label: "유효기간", value: "2024.12.04 ~ 2027.12.03" },
  { label: "인증기관", value: "한국인터넷진흥원(KISA)" },
];

/**
 * 푸터의 "정보보호 관리체계 ISMS 인증 획득" 배지.
 * 누르면 인증 정보 팝업(<dialog>)이 열립니다. Esc·바깥 클릭·닫기 버튼으로 닫힙니다.
 */
export default function IsmsBadge() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // 열림 상태 ↔ <dialog> 동기화 + 열려 있는 동안 뒤 화면 스크롤 잠금
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="group flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left font-[family-name:inherit]"
      >
        <IsmsShield width={30} height={34} />
        <span className="text-[11px] leading-[1.4] text-[#BDBDBD] underline-offset-2 group-hover:text-white group-hover:underline">
          정보보호 관리체계
          <br />
          ISMS 인증 획득
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="isms-title"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false); // 바깥(배경) 클릭 시 닫기
        }}
        className="m-auto box-border max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[440px] overflow-y-auto rounded-[24px] border-0 bg-white p-0 font-pretendard text-[#1F1F1F] shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop:bg-[rgba(17,17,17,0.55)]"
      >
        <div className="relative flex flex-col gap-5 px-6 pt-7 pb-6">
          <button
            type="button"
            aria-label="닫기"
            onClick={() => setOpen(false)}
            className="absolute top-3.5 right-3.5 flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-[#6B6B6B] hover:bg-[#F4F4F5] hover:text-[#1F1F1F]"
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <h2 id="isms-title" className="m-0 pr-10 text-[19px] leading-[1.4] font-extrabold tracking-[-0.03em] break-keep">
            한우리열린교육 정보보호 관리체계 인증 획득
          </h2>

          {/* 인증서 이미지 영역 (A4 세로 비율 794:1116) — 이미지 파일이 준비되면 아래 자리표시를 <img> 로 교체 */}
          <div className="flex justify-center rounded-[18px] bg-[#F1F4F9] p-3">
            <div className="flex aspect-[794/1116] h-[min(46vh,360px)] flex-col items-center justify-center gap-3 rounded-[6px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] ring-1 ring-[#D9DEE8]">
              <IsmsShield width={64} height={73} />
              <span className="text-[12px] text-[#8A94A6]">정보보호 관리체계 인증서</span>
            </div>
          </div>

          <dl className="m-0 flex flex-col gap-3 rounded-[16px] bg-[#F7F7F8] px-4.5 py-4">
            {INFO.map((row) => (
              <div key={row.label} className="flex gap-3 text-[14px] leading-[1.5]">
                <dt className="w-16 flex-none font-bold text-[#2F5AA8]">{row.label}</dt>
                <dd className="m-0 break-keep text-[#333333]">{row.value}</dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="h-13 cursor-pointer rounded-[14px] border-0 bg-[#1F1F1F] font-[family-name:inherit] text-[16px] font-bold text-white hover:bg-[#333333]"
          >
            닫기
          </button>
        </div>
      </dialog>
    </>
  );
}
