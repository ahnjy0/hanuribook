"use client";

import { useEffect, useRef, useState } from "react";

const IMG = { src: "https://cdn.hanuribook.com/img/program/curriculum_9.jpg", w: 716, h: 1874 };

/**
 * '프로그램 전체 보기' 버튼 + 전체 커리큘럼 이미지 모달
 * - 기본 <dialog>(showModal) 사용: Esc 닫기, 포커스 가두기, 뒤 화면 조작 막기를 브라우저가 처리
 * - 열려 있는 동안 페이지 스크롤 잠금, 이미지는 모달 안에서 세로 스크롤
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
        {/* 이미지: 모달 폭에 꽉 차게(안쪽 여백 20px) 크게 보여 주고, 세로로 긴 이미지는 이 영역 안에서 스크롤.
            제목줄은 고정, 끝까지 스크롤해도 뒤 페이지로 스크롤이 넘어가지 않음(overscroll-contain) */}
        <div className="box-border min-h-0 flex-auto overflow-y-auto overscroll-contain p-5">
          <img
            className="block h-auto w-full rounded-[8px]"
            src={IMG.src}
            width={IMG.w}
            height={IMG.h}
            alt="한우리 프로그램 전체 커리큘럼: 유아(꿈꾸는 새싹 1·2), 초등(어휘리더·독서리더·논리리더, 초등심화 과학탐탐·똑똑 한국사·세계문화·지리·세계사), 중등(소크라테스 1~3), 고등(소클고등문학)과 단기 특강 프로그램을 학년별로 정리한 표"
            loading="lazy"
          />
        </div>
      </dialog>
    </>
  );
}
