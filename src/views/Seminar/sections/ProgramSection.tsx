import type { ReactNode } from "react";
import TitleIcon, { type TitleIconKind } from "@/views/Program/sections/TitleIcon";

/** 설명회 안내 카드 — hi: 주황 강조(일시) */
const INFO: { k: string; v: string; sub?: string; hi?: boolean; icon: ReactNode }[] = [
  {
    k: "일시",
    v: "26년 11월 25일(수) 오전 10시",
    sub: "(약 1시간)",
    hi: true,
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  },
  {
    k: "신청기간",
    v: "26년 10월 22일(목) ~ 11월 24일(화)",
    sub: "(17시 까지)",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    k: "장소",
    v: "온라인 실시간 진행(Zoom)",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
        <path d="m10 8 4 2-4 2z" />
      </>
    ),
  },
  {
    k: "대상",
    v: "한우리 교사 활동에 관심 있는 누구나",
    icon: (
      <>
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M5 20.5a7 7 0 0 1 14 0" />
      </>
    ),
  },
];

/** 진행순서 */
const ORDER = ["한우리 지도교사 활동 전 준비사항", "한우리 지도교사 활동 안내", "한우리 지도교사 활동 질의 응답", "경품 추첨"];

/** 이벤트 유의사항 [제목, 항목들] */
const NOTICES: { title: string; items: string[] }[] = [
  {
    title: "한우리 독서지도사 양성과정 무료 수강권 혜택",
    items: [
      "한우리 독서지도사 양성과정 무료 수강권은 '한우리 독서지도사 양성 과정' 온라인 전용 수강권으로 출석반은 적용이 불가합니다.",
      "무료 수강권은 온라인 라이브 설명회에 정상 참석하신 분에 한해 지급되며, 타인에게 양도 불가합니다.",
      "무료 수강권은 26년 12월 28일(월)까지 사용이 가능하며 사용기간 연장 또는 환불이 불가합니다. 또한 사용기간이 경과한 뒤에는 재발급이 불가합니다.",
    ],
  },
  {
    title: "스타벅스 아이스 아메리카노 tall 사이즈 기프티콘",
    items: [
      "한우리 지도교사 온라인 라이브 설명회에 정상 참석하신 분에 한해 신청한 휴대전화번호로 모바일 기프티콘 형태로 증정됩니다.",
      "기프티콘 사용 기한은 60일입니다. 유효기간 연장 또는 환불이 불가하며 유효기간이 경과한 뒤에는 재발급 및 재발송이 불가합니다.",
    ],
  },
  { title: "참여자가 최초 참여일로부터 6개월 이내에 동일 이벤트에 재참여하는 경우에는 무료 수강권 및 기프티콘 혜택이 중복 제공되지 않습니다.", items: [] },
  { title: "본 이벤트의 경품은 주최측 사정으로 변경되거나 제한될 수 있습니다.", items: [] },
];

/** 섹션 제목: 지도교사 입문과정 · 프로그램 소개와 같은 왼쪽 정렬 + 주황 타일 아이콘 */
function Title({ id, icon, children }: { id: string; icon: TitleIconKind; children: ReactNode }) {
  return (
    <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id={id}>
      <TitleIcon kind={icon} />
      {children}
    </h2>
  );
}


/** 혜택 카드 오른쪽 위 초록 동그라미 배지 */
function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -top-4 right-2 flex h-11 w-11 flex-col items-center justify-center rounded-full bg-[#22C55E] text-[10px] leading-[1.15] font-extrabold text-white lg:h-12 lg:w-12 lg:text-[11px]">
      {children}
    </span>
  );
}

/** 안내 안 작은 소제목(주황 막대 + 굵은 글) */
function SubTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3 className="m-0 flex items-center gap-2 text-[16px] font-extrabold text-[#1F1F1F] lg:text-[18px]" id={id}>
      <span className="h-4 w-1 rounded-full bg-[#F26522]" aria-hidden="true" />
      {children}
    </h3>
  );
}

/**
 * 설명회 안내(Seminar 에서 데스크톱은 신청서 왼쪽에 나란히)
 * - 정보: 한 상자 안 줄 목록(작은 아이콘 + 항목명 + 내용), 일시는 주황 굵게
 * - 진행 순서: 번호 + 글 2열 목록
 * - 참가자 혜택: 작은 카드 2개(배지 + 그림 + 이름)
 */
export function InfoSection() {
  return (
    <section className="flex flex-col gap-3.5 pt-8 lg:gap-5 lg:pt-14" aria-labelledby="se-info">
      <Title id="se-info" icon="calendar">
        설명회 안내
      </Title>
      {/* 연한 살구색 본문 바탕 위 흰 카드(수업상담 신청서 카드와 같은 모양) */}
      <div className="flex flex-col gap-6 rounded-[24px] border border-solid border-[#EEEEEE] bg-white p-5 lg:gap-7 lg:p-7">
        {/* 정보 줄 목록 */}
        <dl className="m-0 flex flex-col gap-3">
          {INFO.map((it) => (
            <div key={it.k} className="flex items-start gap-2.5">
              <dt className="flex w-[92px] flex-none items-center gap-1.5 text-[14px] font-bold text-[#C2410C] lg:w-[104px] lg:text-[15px]">
                <svg className="h-[18px] w-[18px] flex-none" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {it.icon}
                </svg>
                {it.k}
              </dt>
              <dd className={`m-0 text-[14px] leading-[1.5] break-keep lg:text-[15px] ${it.hi ? "font-extrabold text-[#1F1F1F]" : "text-[#333333]"}`}>
                {it.v}
                {it.sub && <span className="ml-0.5 text-[12px] font-normal text-[#777777] lg:text-[13px]">{it.sub}</span>}
              </dd>
            </div>
          ))}
        </dl>
        {/* 진행 순서 */}
        <div className="flex flex-col gap-3 border-0 border-t border-solid border-[#EEEEEE] pt-5 lg:pt-6">
          <SubTitle id="se-order">진행 순서</SubTitle>
          <ol className="m-0 grid list-none grid-cols-1 gap-2 p-0" aria-labelledby="se-order">
            {ORDER.map((s, i) => (
              <li key={s} className="flex items-center gap-2 text-[14px] font-semibold break-keep text-[#1F1F1F] lg:text-[15px]">
                <span className="flex h-5.5 w-5.5 flex-none items-center justify-center rounded-full bg-[#F26522] text-[11px] font-extrabold text-white" aria-hidden="true">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
        {/* 참가자 혜택 */}
        <div className="flex flex-col gap-3 border-0 border-t border-solid border-[#EEEEEE] pt-5 lg:pt-6">
          <SubTitle id="se-benefit">설명회 참가자 혜택</SubTitle>
          <div className="mt-3 flex items-stretch gap-2" aria-labelledby="se-benefit">
            <div className="relative flex flex-1 flex-col items-center gap-2 rounded-[14px] bg-[#FFF7F1] px-2 pt-6 pb-4 text-center">
              <Badge>
                3명
                <br />
                추첨
              </Badge>
              <span
                className="flex h-10 w-20 items-center justify-center rounded-[6px] bg-[#FFC72C] text-[18px] font-black tracking-[0.04em] text-[#5A4636] shadow-[inset_0_0_0_2px_#F2B705]"
                aria-hidden="true"
              >
                FREE
              </span>
              <strong className="text-[13px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[14px]">
                독서지도사 양성과정
                <br />
                무료 수강권
              </strong>
              <span className="text-[11px] text-[#777777] lg:text-[12px]">26년 12월 28일(월)까지 사용가능</span>
            </div>
            <span
              className="flex h-7 w-7 flex-none items-center justify-center self-center rounded-full bg-[#F26522] text-[18px] leading-none font-extrabold text-white"
              aria-hidden="true"
            >
              +
            </span>
            <div className="relative flex flex-1 flex-col items-center gap-2 rounded-[14px] bg-[#FFF7F1] px-2 pt-6 pb-4 text-center">
              <Badge>
                100%
                <br />
                증정
              </Badge>
              <svg className="h-10 w-10" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M12 14h24l-3 28H15z" fill="#5A3A22" />
                <path d="M10 10h28v4H10z" fill="#3B2E24" />
                <path d="M14 18h20l-.6 6H14.6z" fill="#7A4B2A" />
                <circle cx="24" cy="31" r="5" fill="#00704A" />
                <path d="M27 4l-2 6" stroke="#3B2E24" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <strong className="text-[13px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[14px]">
                스타벅스 커피
                <br />
                기프티콘
              </strong>
              <span className="text-[11px] text-[#777777] lg:text-[12px]">아이스 아메리카노 tall</span>
            </div>
          </div>
        </div>
        {/* 이벤트 유의사항: 작은 회색 글 */}
        <div className="flex flex-col gap-3 border-0 border-t border-solid border-[#EEEEEE] pt-5 lg:pt-6">
          <SubTitle id="se-notice">이벤트 유의사항</SubTitle>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[12px] leading-[1.6] break-keep text-[#666666] lg:text-[13px]" aria-labelledby="se-notice">
            {NOTICES.map((n) => (
              <li key={n.title}>
                <strong className="font-bold text-[#333333]">* {n.title}</strong>
                {n.items.length > 0 && (
                  <ul className="m-0 mt-1 flex list-none flex-col gap-0.5 p-0 pl-2">
                    {n.items.map((it) => (
                      <li key={it}>- {it}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="font-bold text-[#333333]">문의: 02-6276-2511~5</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

