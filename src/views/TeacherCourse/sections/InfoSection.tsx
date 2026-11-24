import type { ReactNode } from "react";
import TitleIcon, { type TitleIconKind } from "@/views/Program/sections/TitleIcon";

/** 과정 안내 — 내용 안 \n 은 줄바꿈, note: 카드 아래 ※ 안내 */
const GUIDE: { k: string; v: string; note?: string; icon: ReactNode }[] = [
  {
    k: "수강 형태",
    v: "온라인 + 줌 화상 수업 혼합",
    // 모니터 + 화상 카메라
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
        <path d="m10 8 4 2-4 2z" />
      </>
    ),
  },
  {
    k: "교육비",
    v: "없음",
    // 지갑
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M16 14.5h2" />
      </>
    ),
  },
  {
    k: "지원 자격",
    // 자격증(배지)
    icon: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
      </>
    ),
    v: "한우리 독서지도사 · 논술지도사 양성과정 수료자 또는 자격시험 합격자\n관련 학과졸업(예정)및 동등학력 소지자 또는 그에 준하는 교사 경력자",
    note: "한우리 지도교사로 활동하다가 그만둔 지 2년 이상 경과하였을 시 입문과정을 재이수해야 합니다.",
  },
  {
    k: "교육 내용",
    v: "규정, 한우리 교재 프로그램 구성, 선배교사의 수업 노하우 등\n한우리 지도교사로 활동하기 위한 기본교육",
    // 펼친 책
    icon: <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />,
  },
];

/** 진행 절차 */
const FLOW = ["입문과정 신청", "지역센터 배정·면담", "입문과정 수강", "한우리 지도교사 활동"];

/** 교육 일정 [구분, 신청 기간, 교육 일정] */
const SCHEDULE: [string, string, string][] = [
  ["1월", "25년 12월 17일 ~\n26년 01월 23일", "1월 2일 ~ 1월 25일"],
  ["2월", "1월 28일 ~ 2월 25일", "2월 2일 ~ 2월 25일"],
  ["3월", "3월 3일 ~ 3월 25일", "3월 3일 ~ 3월 25일"],
  ["4월", "3월 30일 ~ 4월 24일", "4월 1일 ~ 4월 25일"],
  ["5월", "4월 28일 ~ 5월 22일", "5월 4일 ~ 5월 25일"],
  ["6월", "5월 28일 ~ 6월 25일", "6월 1일 ~ 6월 25일"],
  ["7월", "6월 29일 ~ 7월 24일", "7월 1일 ~ 7월 25일"],
  ["8월", "7월 28일 ~ 8월 25일", "8월 3일 ~ 8월 25일"],
  ["9월", "8월 28일 ~ 9월 23일", "9월 1일 ~ 9월 25일"],
  ["10월", "9월 29일 ~ 10월 23일", "10월 1일 ~ 10월 25일"],
  ["11월", "10월 28일 ~ 11월 25일", "11월 1일 ~ 11월 25일"],
  ["12월", "11월 30일 ~ 12월 24일", "12월 1일 ~ 12월 25일"],
];

/** 섹션 제목: 프로그램 소개 페이지와 같은 왼쪽 정렬 + 주황 타일 아이콘 */
function Title({ id, icon, children }: { id: string; icon: TitleIconKind; children: ReactNode }) {
  return (
    <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id={id}>
      <TitleIcon kind={icon} />
      {children}
    </h2>
  );
}

/** 안내 문구(주황 스피커 아이콘 + 회색 글) */
function Note({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 flex items-start gap-2 text-[13px] leading-[1.6] break-keep text-[#555555] lg:text-[14px]">
      <span className="mt-0.25 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#F26522]" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M4 9h4l5-4v14l-5-4H4z" />
          <path d="M16 9a4 4 0 0 1 0 6" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </span>
      <span>{children}</span>
    </p>
  );
}

/**
 * 본문: 프로그램 소개 페이지와 같은 구성
 * - 섹션마다 왼쪽 정렬 타일 아이콘 제목 + 연한 살구색 카드(#FFF7F1 · 테두리 #FBE7DA)
 * - 과정 안내(항목 카드 2열) → 교육 일정 안내(표) → 입문과정 신청 버튼
 */
export default function InfoSection() {
  return (
    <>
      {/* 과정 안내: 항목마다 카드(모바일 1열 · 데스크톱 2열) */}
      {/* 첫 섹션: 바로 위 타이틀과 가깝게(위 여백 축소) */}
      <section className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-8 lg:gap-5 lg:pt-14" aria-labelledby="tc-guide">
        <Title id="tc-guide" icon="guide">
          과정 안내
        </Title>
        <dl className="m-0 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
          {GUIDE.map((g) => (
            <div key={g.k} className="flex flex-col gap-2 rounded-[18px] border border-solid border-[#FBE7DA] bg-[#FFF7F1] p-5 lg:p-6">
              {/* 항목명 앞 아이콘: 흰 동그라미 안 주황 선 아이콘 */}
              <dt className="flex items-center gap-2.5 text-[16px] font-extrabold text-[#C2410C] lg:text-[18px]">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white lg:h-10 lg:w-10" aria-hidden="true">
                  <svg className="h-5 w-5 lg:h-[22px] lg:w-[22px]" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {g.icon}
                  </svg>
                </span>
                {g.k}
              </dt>
              <dd className="m-0 flex flex-col gap-2">
                <span className="text-[14px] leading-[1.7] break-keep whitespace-pre-line text-[#333333] lg:text-[16px]">{g.v}</span>
                {g.note && <span className="text-[13px] leading-[1.6] break-keep text-[#C2410C] lg:text-[14px]">※ {g.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
        <Note>
          문의 02)6276-2512, 4~5
          <br />
          상황에 따라 교육 형태가 변경될 수 있습니다.
        </Note>
      </section>

      {/* 진행 절차: 번호 카드를 화살표로 이음(모바일 2열 · 데스크톱 한 줄), 마지막 단계는 주황 강조 */}
      <section className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24" aria-labelledby="tc-flow">
        <Title id="tc-flow" icon="how">
          진행 절차
        </Title>
        <ol className="m-0 grid list-none grid-cols-2 gap-3 p-0 lg:grid-cols-4 lg:gap-8">
          {FLOW.map((s, i) => {
            const last = i === FLOW.length - 1;
            return (
              <li
                key={s}
                className={`relative flex flex-col items-center justify-center gap-2 rounded-[18px] border border-solid px-3 py-5 text-center lg:py-7 ${
                  last ? "border-[#F26522] bg-[#F26522]" : "border-[#FBE7DA] bg-[#FFF7F1]"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-extrabold lg:h-9 lg:w-9 lg:text-[16px] ${
                    last ? "bg-white text-[#F26522]" : "bg-[#F26522] text-white"
                  }`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <strong className={`text-[15px] leading-[1.4] font-extrabold break-keep lg:text-[18px] ${last ? "text-white" : "text-[#1F1F1F]"}`}>
                  {s}
                </strong>
                {/* 다음 단계 화살표(데스크톱만, 카드 사이) */}
                {!last && (
                  <span className="absolute top-1/2 -right-6 hidden -translate-y-1/2 text-[18px] font-bold text-[#F26522] lg:block" aria-hidden="true">
                    ›
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* 교육 일정 안내: 연한 살구색 머리줄 표(둥근 테두리) */}
      <section className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24" aria-labelledby="tc-schedule">
        <Title id="tc-schedule" icon="calendar">
          교육 일정 안내
        </Title>
        <div className="overflow-hidden rounded-[18px] border border-solid border-[#FBE7DA]">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-[#FFF7F1]">
                {["구분", "신청 기간", "교육 일정"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border-0 border-l border-solid border-[#FBE7DA] px-2 py-3.5 text-[15px] font-extrabold text-[#C2410C] first:border-l-0 lg:py-4 lg:text-[17px]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map(([m, apply, edu]) => (
                <tr key={m} className="border-0 border-t border-solid border-[#F3EDE8]">
                  <th scope="row" className="w-[64px] px-1 py-3.5 text-[14px] font-bold text-[#1F1F1F] lg:w-[120px] lg:text-[16px]">
                    {m}
                  </th>
                  <td className="border-0 border-l border-solid border-[#F3EDE8] px-2 py-3.5 text-[13px] leading-[1.5] break-keep whitespace-pre-line text-[#333333] lg:text-[16px]">
                    {apply}
                  </td>
                  <td className="border-0 border-l border-solid border-[#F3EDE8] px-2 py-3.5 text-[13px] leading-[1.5] break-keep text-[#333333] lg:text-[16px]">
                    {edu}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>상기 일정은 내부 사정에 의해 변동될 수 있습니다.</Note>
      </section>

      {/* 입문과정 신청(한우리 교육 사이트 · 새 창) */}
      <section className="mx-auto my-0 box-border flex max-w-[1200px] flex-col px-5 pt-10 pb-0 lg:pt-14" aria-label="입문과정 신청">
        <a
          className="flex h-13 items-center justify-center gap-1.5 rounded-[14px] bg-[#F26522] text-[16px] font-bold text-white no-underline hover:bg-[#E0561A] lg:h-14 lg:w-[360px] lg:self-center lg:text-[17px]"
          href="https://edu.hanuribook.com/start/index.jsp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="입문과정 신청하기 (새 창)"
        >
          입문과정 신청하기
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </a>
      </section>
    </>
  );
}
