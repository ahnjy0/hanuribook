import type { ReactNode } from "react";

/** 이유 제목 상자: 위 왼쪽 · 아래 오른쪽 큰따옴표 + 테두리 상자, '첫째,' 다음 강조 부분은 주황 */
function Quote({ no, em, sub }: { no: string; em: ReactNode; sub?: string }) {
  return (
    <div className="relative mx-auto box-border w-full max-w-[640px] border border-solid border-[#D9D2C9] px-5 py-6 text-center lg:px-10 lg:py-8">
      <span className="absolute -top-4 left-3 bg-white px-1 text-[44px] leading-none font-extrabold text-[#8A7B6C]" aria-hidden="true">
        “
      </span>
      <span className="absolute right-3 -bottom-7 bg-white px-1 text-[44px] leading-none font-extrabold text-[#8A7B6C]" aria-hidden="true">
        ”
      </span>
      <h3 className="m-0 text-[20px] leading-[1.45] font-extrabold break-keep text-[#2B2B2B] lg:text-[28px]">
        {no}, <span className="text-[#F26522]">{em}</span>
      </h3>
      {sub && <p className="m-0 mt-2 text-[14px] leading-[1.6] break-keep whitespace-pre-line text-[#555555] lg:text-[17px]">{sub}</p>}
    </div>
  );
}

/** 회색 원 두 개를 + 로 잇는 수치 */
function TwoCircles({ items }: { items: { cap?: string; label: string; value: string }[] }) {
  return (
    <div className="flex items-end justify-center gap-0">
      {items.map((it, i) => (
        <div key={it.label} className="flex items-center">
          {i > 0 && (
            <span
              className="relative z-10 -mx-2.5 mb-[52px] flex h-7 w-7 flex-none items-center justify-center self-end rounded-full bg-[#5A4636] text-[18px] leading-none font-bold text-white lg:mb-[64px] lg:h-8 lg:w-8"
              aria-hidden="true"
            >
              +
            </span>
          )}
          <div className="flex flex-col items-center gap-2">
            {it.cap && <span className="text-center text-[12px] leading-[1.4] whitespace-pre-line text-[#555555] lg:text-[14px]">{it.cap}</span>}
            <span className="flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full bg-[#E6DED4] text-center lg:h-40 lg:w-40">
              <span className="text-[14px] text-[#5A4636] lg:text-[16px]">{it.label}</span>
              <strong className="text-[24px] font-extrabold text-[#3B2E24] lg:text-[30px]">{it.value}</strong>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** 넷째: 본사 지원 · 혜택 상자 [작은 설명, 굵은 내용] */
const SUPPORTS: [string, string][] = [
  ["교사 정착지원금", "최대 40만원 지급"],
  ["교사 등록 시", "축하금 5만원 지급"],
  ["신입 교사", "초도 물품 지원"],
  ["한우리 복지몰", "한포인트 제공"],
  ["교사자녀", "교재비 할인"],
  ["상조 서비스", "상조 물품 지원"],
  ["한우리 평생교육원", "교육과정 할인"],
  ["회원 모집을 돕는 한우리 본사의", "적극적인 마케팅 활동"],
];

/** 다섯째: 연차별 교육 과정 [과정명, 기간] */
const TRACKS: { title: string; steps: [string, string][] }[] = [
  {
    title: "1년차 과정",
    steps: [
      ["입문과정", "1개월"],
      ["실무1과정", "2~4개월"],
      ["실무2과정", "5~7개월"],
      ["실무3과정", "8~10개월"],
      ["향상과정", "11~12개월"],
    ],
  },
  {
    title: "2년차 과정",
    steps: [
      ["성장1과정", "13~16개월"],
      ["성장2과정", "18~22개월"],
      ["전문과정", "22~24개월"],
    ],
  },
];

/** 가운데 갈색 알약 소제목(• 내용 •) */
function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="self-center rounded-full bg-[#5A4636] px-4 py-1.5 text-[14px] font-bold text-white lg:text-[16px]">• {children} •</span>
  );
}

/** 선 아이콘 동그라미 */
function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[#E6DED4] lg:h-16 lg:w-16" aria-hidden="true">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#5A4636" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

/** '한우리에서 시작해야 하는 이유!' 주황 띠 + 다섯 가지 이유 */
export default function ReasonsSection() {
  return (
    <section aria-labelledby="ts-why">
      {/* 주황 띠 + 아래 뾰족한 꼬리 */}
      <div className="relative bg-[linear-gradient(180deg,#F68B3C_0%,#F26522_100%)] px-5 py-10 text-center text-white lg:py-14">
        <p className="m-0 text-[16px] break-keep lg:text-[21px]">독서교육 전문가로서의 첫 걸음,</p>
        <h2 className="m-0 mt-1 text-[24px] font-extrabold break-keep lg:text-[36px]" id="ts-why">
          한우리에서 시작해야 하는 이유!
        </h2>
        <span
          className="absolute -bottom-4 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[18px] border-t-[18px] border-b-0 border-solid border-x-transparent border-t-[#F26522]"
          aria-hidden="true"
        />
      </div>
      <div className="bg-[#F7F4F0] px-0 py-10 lg:py-16">
        <div className="mx-auto my-0 box-border flex max-w-[960px] flex-col gap-0 bg-white px-5 py-12 lg:px-16 lg:py-16">
          {/* 첫째 */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <Quote no="첫째" em={<>회원 모집 걱정 없는<br />탄탄한 브랜드니까!</>} />
            <TwoCircles
              items={[
                { cap: "독서교육 업계\n최다 교사 수", label: "전국", value: "4,600명" },
                { cap: "독서교육 업계\n최다 회원 수", label: "회원 수", value: "10만 명" },
              ]}
            />
            <p className="-mt-4 m-0 text-center text-[12px] text-[#777777] lg:text-[13px]">*2026년 통계 기준</p>
            <p className="m-0 text-center text-[16px] leading-[1.6] font-bold break-keep text-[#3B2E24] underline decoration-[#C9B9A6] underline-offset-4 lg:text-[19px]">
              30년 이상의 노하우를 가진
              <br />
              독서교육 대표 브랜드 한우리!
              <br />
              모두가 인정하는 곳에서 시작하세요.
            </p>
          </div>
          <hr className="mx-0 my-12 border-0 border-t border-solid border-[#EEE8E1] lg:my-16" />
          {/* 둘째 */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <Quote no="둘째" em="가맹비, 수수료 0원!" sub={"부담없이 시작하고, 일한 만큼\n그대로 수입이 되니까!"} />
            <TwoCircles
              items={[
                { label: "가맹비", value: "0원" },
                { label: "수수료", value: "0원" },
              ]}
            />
            <p className="m-0 text-center text-[16px] leading-[1.6] font-bold break-keep text-[#3B2E24] underline decoration-[#C9B9A6] underline-offset-4 lg:text-[19px]">
              교재비를 제외한 수업료 전체가
              <br />
              모두 선생님의 수익이 됩니다.
            </p>
          </div>
          <hr className="mx-0 my-12 border-0 border-t border-solid border-[#EEE8E1] lg:my-16" />
          {/* 셋째 */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <Quote no="셋째" em={<>프리랜서 형태로 자유롭게<br />업무 시간을 조정할 수 있으니까!</>} />
            <div className="flex flex-col gap-4">
              <Pill>수업 형태 선택 가능</Pill>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                {[
                  ["방문수업", "학생 집으로 방문", <path key="h" d="M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6" />],
                  ["홈클럽 수업", "선생님 집에서 수업", <path key="c" d="M3 10 12 4l9 6M5 9v11h14V9M8 20v-5h3v5M13 13h4v3h-4z" />],
                ].map(([t, d, icon]) => (
                  <div key={t as string} className="flex items-center gap-3">
                    <IconCircle>{icon}</IconCircle>
                    <div className="flex flex-col text-left">
                      <strong className="text-[16px] font-extrabold text-[#2B2B2B] lg:text-[18px]">{t}</strong>
                      <span className="text-[13px] text-[#666666] lg:text-[15px]">{d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Pill>수업 시간 선택 가능</Pill>
              <div className="flex items-center justify-center gap-3">
                <IconCircle>
                  <rect x="5" y="4" width="14" height="17" rx="2" />
                  <path d="M9 4V3h6v1M8 10h5M8 14h3" />
                  <circle cx="16" cy="16" r="3.2" />
                  <path d="M16 14.6V16l1 .8" />
                </IconCircle>
                <p className="m-0 text-left text-[15px] leading-[1.5] break-keep text-[#444444] lg:text-[17px]">
                  직접 수업 시간을 조절하여
                  <br />
                  <strong className="font-extrabold text-[#2B2B2B]">원하는 시간에만 수업 가능</strong>
                </p>
              </div>
            </div>
          </div>
          <hr className="mx-0 my-12 border-0 border-t border-solid border-[#EEE8E1] lg:my-16" />
          {/* 넷째 */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <Quote no="넷째" em={<>본사의 아낌없는<br />지원과 혜택이 있으니까!</>} />
            <div className="flex flex-col gap-2">
              <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 lg:grid-cols-4 lg:gap-3">
                {SUPPORTS.map(([s, b]) => (
                  <li
                    key={b}
                    className="flex flex-col items-center justify-center gap-1 border border-solid border-[#D9D2C9] bg-white px-2 py-3.5 text-center lg:py-5"
                  >
                    <span className="text-[12px] leading-[1.35] break-keep text-[#666666] lg:text-[14px]">{s}</span>
                    <strong className="text-[15px] leading-[1.35] font-extrabold break-keep text-[#2B2B2B] lg:text-[18px]">{b}</strong>
                  </li>
                ))}
              </ul>
              <p className="m-0 text-right text-[12px] text-[#777777] lg:text-[13px]">*항목별 조건 충족 시 제공</p>
            </div>
          </div>
          <hr className="mx-0 my-12 border-0 border-t border-solid border-[#EEE8E1] lg:my-16" />
          {/* 다섯째 */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <Quote no="다섯째" em={<>교사가 된 이후에도<br />지속적으로 책임지니까!</>} />
            <p className="m-0 text-center text-[15px] leading-[1.6] break-keep text-[#444444] lg:text-[18px]">
              한우리는 교재 교수, 글쓰기 지도법, 토의토론 등
              <br />
              <strong className="font-extrabold text-[#2B2B2B]">여러 영역에 대한 전문적인 교육을 제공합니다.</strong>
            </p>
            {/* 연차별 과정: 주황 머리 + 점으로 이은 단계(과정명 위 · 기간 아래) */}
            <div className="flex flex-col gap-5">
              {TRACKS.map((tr) => (
                <div key={tr.title} className="overflow-hidden rounded-[12px] border border-solid border-[#F2C7AE] bg-white">
                  <h4 className="m-0 bg-[#F26522] py-2.5 text-center text-[16px] font-extrabold text-white lg:text-[18px]">{tr.title}</h4>
                  <ol
                    className="relative m-0 grid list-none gap-0 px-2 pt-4 pb-4 lg:px-6"
                    style={{ gridTemplateColumns: `repeat(${tr.steps.length}, minmax(0, 1fr))` }}
                  >
                    {/* 가운데 이음선 */}
                    <span className="absolute top-[46px] right-6 left-6 h-[3px] bg-[#F26522] lg:top-[50px]" aria-hidden="true" />
                    {tr.steps.map(([n, p]) => (
                      <li key={n} className="relative flex flex-col items-center gap-2 text-center">
                        <span className="text-[12px] font-bold break-keep text-[#2B2B2B] lg:text-[15px]">{n}</span>
                        <span className="z-10 h-3.5 w-3.5 rounded-full border-[3px] border-solid border-[#F26522] bg-white" aria-hidden="true" />
                        <span className="text-[11px] break-keep text-[#666666] lg:text-[14px]">{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
