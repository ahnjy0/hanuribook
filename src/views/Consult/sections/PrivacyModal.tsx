"use client";

import { useEffect, useRef, useState } from "react";

/** 동의 안내 문서: 제목 · 머리글 · 항목(em: true 면 내용을 주황 강조) · 맨 아래 ※ 안내 */
export type PrivacyDoc = {
  title: string;
  intro: string;
  items: { k: string; v: string; em?: boolean }[];
  note: string;
};

/** 개인정보 수집 및 이용 동의 */
export const PRIVACY_DOC: PrivacyDoc = {
  title: "개인정보 수집 및 이용 동의",
  intro:
    "한우리열린교육은 한우리독서토론논술 교육상담을 위해 아래와 같이 개인정보를 수집·이용합니다. 수집된 개인정보는 교육상담 외 목적으로 사용하지 않습니다.",
  items: [
    {
      k: "개인정보의 수집·이용목적",
      v: "한우리독서토론논술 교육서비스 상담 및 무료체험 안내, 경품제공, 수강등록여부 확인, 무료체험 신청이력 관리",
      em: true,
    },
    { k: "수집하려는 개인정보의 항목", v: "보호자성명, 보호자휴대전화번호, 자녀학년, 거주지역" },
    { k: "개인정보의 보유 및 이용기간", v: "상담 신청일로부터 1년", em: true },
  ],
  note: "귀하는 교육상담 이용에 필요한 최소한의 개인정보 수집·이용에 동의하지 않을 권리가 있으며, 동의 거부 시 서비스가 제한됩니다.",
};

/** 개인정보 제3자 제공 동의 */
export const THIRD_PARTY_DOC: PrivacyDoc = {
  title: "개인정보 제3자 제공 동의",
  intro: "한우리열린교육은 정보 주체의 사전 동의 없이 범위를 초과하여 제 3자에게 제공하지 않습니다.",
  items: [
    { k: "제공 기관", v: "거주지역을 담당하는 한우리지역센터", em: true },
    { k: "제공 목적", v: "한우리독서토론논술 교육서비스에 대한 상담 의사 확인, 수업 및 무료체험 상담", em: true },
    { k: "제공 항목", v: "보호자성명, 보호자휴대전화번호, 자녀학년, 거주지역" },
    { k: "보유 및 이용기간", v: "상담 신청일로부터 1년", em: true },
  ],
  note: "귀하는 교육상담에 필요한 개인정보 제공에 동의하지 않을 권리가 있으며, 동의 거부 시 서비스가 제한됩니다.",
};

/**
 * 개인정보 동의 '자세히보기' 버튼 + 안내 모달(문서를 받아 여러 동의에 같이 씀)
 * - 아래 '안 할래요' → 동의 해제, '동의해요' → 동의 체크, 둘 다 닫힘
 * - 기본 <dialog>(showModal) 사용: Esc 닫기, 포커스 가두기, 뒤 화면 조작 막기를 브라우저가 처리
 * - 열려 있는 동안 페이지 스크롤 잠금, 바깥(어두운 배경) 클릭 시 닫힘
 */
export default function PrivacyModal({
  id,
  doc,
  checked,
  toggle,
}: {
  id: string;
  doc: PrivacyDoc;
  checked: boolean;
  toggle: () => void;
}) {
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

  // 동의 / 거부: 원하는 상태가 아닐 때만 토글하고 닫기
  const decide = (want: boolean) => {
    if (checked !== want) toggle();
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="flex-none cursor-pointer rounded-full border border-solid border-[#D6D6D6] bg-white px-3 py-1.5 font-[family-name:inherit] text-[12px] font-semibold whitespace-nowrap text-[#444444] lg:text-[13px]"
        aria-haspopup="dialog"
        aria-label={`${doc.title} 자세히보기`}
        onClick={() => setOpen(true)}
      >
        자세히보기
      </button>
      <dialog
        ref={ref}
        // 리셋(Preflight)이 없어 dialog 기본 테두리·여백을 직접 지움. 폭은 화면 좌우 16px 여백 안에서 최대 440px
        className="m-auto box-border flex max-h-[90dvh] w-[calc(100%-32px)] max-w-[440px] flex-col overflow-hidden rounded-[20px] border-0 bg-white p-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop:bg-black/60 [&:not([open])]:hidden"
        aria-labelledby={id}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // 다이얼로그 바깥(배경) 클릭 → 닫기
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        {/* 본문: 제목 → 머리글 → • 항목(제목 굵게 + 내용, 강조 내용은 주황) → ※ 안내. 길면 이 영역 안에서 스크롤 */}
        <div className="box-border flex min-h-0 flex-auto flex-col gap-4 overflow-y-auto overscroll-contain px-6 pt-6 pb-5">
          <div className="flex items-start justify-between gap-2">
            <h2 className="m-0 text-[17px] font-extrabold text-[#1F1F1F] lg:text-[18px]" id={id}>
              {doc.title}
            </h2>
            <button
              type="button"
              className="-mt-2 -mr-2 flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-full border-0 bg-transparent"
              aria-label="닫기"
              onClick={() => setOpen(false)}
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <p className="-mt-2 m-0 text-[14px] leading-[1.6] break-keep text-[#444444] lg:text-[15px]">{doc.intro}</p>
          <dl className="m-0 flex flex-col gap-3.5">
            {doc.items.map((it) => (
              <div key={it.k} className="flex flex-col gap-1">
                <dt className="text-[14px] font-bold text-[#1F1F1F] lg:text-[15px]">• {it.k}</dt>
                <dd
                  className={`m-0 text-[14px] leading-[1.55] break-keep lg:text-[15px] ${it.em ? "font-bold text-[#F26522]" : "text-[#444444]"}`}
                >
                  {it.v}
                </dd>
              </div>
            ))}
          </dl>
          <p className="m-0 text-[12px] leading-[1.6] break-keep text-[#8A8A8A] lg:text-[13px]">※ {doc.note}</p>
        </div>
        {/* 아래 버튼: 안 할래요(회색) · 동의해요(주황) */}
        <div className="grid flex-none grid-cols-2 gap-2 px-6 pb-6">
          <button
            type="button"
            className="h-13 cursor-pointer rounded-[12px] border-0 bg-[#BDBDBD] font-[family-name:inherit] text-[16px] font-bold text-white lg:text-[16px]"
            onClick={() => decide(false)}
          >
            안 할래요
          </button>
          <button
            type="button"
            className="h-13 cursor-pointer rounded-[12px] border-0 bg-[#F26522] font-[family-name:inherit] text-[16px] font-bold text-white lg:text-[16px]"
            onClick={() => decide(true)}
          >
            동의해요
          </button>
        </div>
      </dialog>
    </>
  );
}
