import type { ReactNode } from "react";
import Title, { Section } from "./Title";

/** 넷째: 본사 지원 · 혜택 [작은 설명, 굵은 내용] */
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

/** 이유 카드: 연한 주황 머리(번호 + 제목) + 흰 본문 — 센터모집 '개설 절차' 카드와 같은 모양 */
function Reason({ no, title, sub, wide = false, children }: { no: number; title: ReactNode; sub?: string; wide?: boolean; children: ReactNode }) {
  return (
    <li className={`flex flex-col overflow-hidden rounded-[18px] border border-solid border-[#FBE7DA] bg-white ${wide ? "lg:col-span-2" : ""}`}>
      <div className="flex flex-col gap-1 bg-[#FFF1E7] px-5 py-4 lg:px-6">
        <h3 className="m-0 flex items-start gap-2 text-[17px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[20px]">
          <span className="flex-none text-[#F26522]">{String(no).padStart(2, "0")}</span>
          <span>{title}</span>
        </h3>
        {sub && <p className="m-0 pl-8 text-[13px] leading-[1.5] break-keep text-[#555555] lg:pl-9 lg:text-[15px]">{sub}</p>}
      </div>
      <div className="flex flex-1 flex-col gap-4 px-5 py-5 lg:px-6 lg:py-6">{children}</div>
    </li>
  );
}

/** 연한 살구색 원 두 개를 + 로 잇는 수치 */
function TwoCircles({ items }: { items: { cap?: string; label: string; value: string }[] }) {
  return (
    <div className="flex items-end justify-center">
      {items.map((it, i) => (
        <div key={it.label} className="flex items-center">
          {i > 0 && (
            <span className="relative z-10 -mx-2 mb-[46px] flex h-6 w-6 flex-none items-center justify-center self-end rounded-full bg-[#F26522] text-[15px] leading-none font-bold text-white" aria-hidden="true">
              +
            </span>
          )}
          <div className="flex flex-col items-center gap-1.5">
            {it.cap && <span className="text-center text-[12px] leading-[1.4] whitespace-pre-line text-[#555555] lg:text-[13px]">{it.cap}</span>}
            <span className="flex h-[116px] w-[116px] flex-col items-center justify-center rounded-full bg-[#FFF1E7] text-center lg:h-[128px] lg:w-[128px]">
              <span className="text-[13px] text-[#8A5A3C] lg:text-[14px]">{it.label}</span>
              <strong className="text-[21px] font-extrabold text-[#C2410C] lg:text-[24px]">{it.value}</strong>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** 굵은 밑줄 강조 문장(가운데) */
function Point({ children }: { children: ReactNode }) {
  return <p className="m-0 text-center text-[14px] leading-[1.6] font-bold break-keep text-[#1F1F1F] lg:text-[16px]">{children}</p>;
}

/** 선 아이콘 동그라미(연한 주황) */
function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#FFF1E7]" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

/** '한우리에서 시작해야 하는 이유!' — 이유 다섯 가지 카드(데스크톱 2열, 다섯째는 전체 폭) */
export default function ReasonsSection() {
  return (
    <Section id="ts-why" first>
      <Title id="ts-why" icon="features">
        한우리에서 시작해야 하는 이유
      </Title>
      <p className="m-0 text-[14px] leading-[1.7] break-keep text-[#333333] lg:text-[17px]">독서교육 전문가로서의 첫 걸음, 한우리에서 시작하세요.</p>
      <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-2 lg:gap-4">
        <Reason no={1} title="회원 모집 걱정 없는 탄탄한 브랜드니까!">
          <TwoCircles
            items={[
              { cap: "독서교육 업계\n최다 교사 수", label: "전국", value: "4,600명" },
              { cap: "독서교육 업계\n최다 회원 수", label: "회원 수", value: "10만 명" },
            ]}
          />
          <p className="-mt-2 m-0 text-center text-[11px] text-[#777777] lg:text-[12px]">*2026년 통계 기준</p>
          <Point>30년 이상의 노하우를 가진 독서교육 대표 브랜드 한우리! 모두가 인정하는 곳에서 시작하세요.</Point>
        </Reason>
        <Reason no={2} title="가맹비, 수수료 0원!" sub="부담없이 시작하고, 일한 만큼 그대로 수입이 되니까!">
          <TwoCircles
            items={[
              { label: "가맹비", value: "0원" },
              { label: "수수료", value: "0원" },
            ]}
          />
          <Point>교재비를 제외한 수업료 전체가 모두 선생님의 수익이 됩니다.</Point>
        </Reason>
        <Reason no={3} title="프리랜서 형태로 자유롭게 업무 시간을 조정할 수 있으니까!">
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] font-bold text-[#C2410C] lg:text-[14px]">• 수업 형태 선택 가능</span>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["방문수업", "학생 집으로 방문", <path key="h" d="M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6" />],
                ["홈클럽 수업", "선생님 집에서 수업", <path key="c" d="M3 10 12 4l9 6M5 9v11h14V9M8 20v-5h3v5M13 13h4v3h-4z" />],
              ].map(([t, d, icon]) => (
                <div key={t as string} className="flex items-center gap-2.5">
                  <IconCircle>{icon}</IconCircle>
                  <div className="flex min-w-0 flex-col">
                    <strong className="text-[14px] font-extrabold text-[#1F1F1F] lg:text-[16px]">{t}</strong>
                    <span className="text-[12px] break-keep text-[#666666] lg:text-[13px]">{d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] font-bold text-[#C2410C] lg:text-[14px]">• 수업 시간 선택 가능</span>
            <div className="flex items-center gap-2.5">
              <IconCircle>
                <rect x="5" y="4" width="14" height="17" rx="2" />
                <path d="M9 4V3h6v1M8 10h5M8 14h3" />
                <circle cx="16" cy="16" r="3.2" />
                <path d="M16 14.6V16l1 .8" />
              </IconCircle>
              <p className="m-0 text-[13px] leading-[1.5] break-keep text-[#444444] lg:text-[15px]">
                직접 수업 시간을 조절하여 <strong className="font-extrabold text-[#1F1F1F]">원하는 시간에만 수업 가능</strong>
              </p>
            </div>
          </div>
        </Reason>
        <Reason no={4} title="본사의 아낌없는 지원과 혜택이 있으니까!">
          <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0">
            {SUPPORTS.map(([s, b]) => (
              <li key={b} className="flex flex-col items-center justify-center gap-0.5 rounded-[12px] bg-[#FFF7F1] px-2 py-3 text-center">
                <span className="text-[11px] leading-[1.35] break-keep text-[#666666] lg:text-[12px]">{s}</span>
                <strong className="text-[13px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[15px]">{b}</strong>
              </li>
            ))}
          </ul>
          <p className="-mt-2 m-0 text-right text-[11px] text-[#777777] lg:text-[12px]">*항목별 조건 충족 시 제공</p>
        </Reason>
        {/* 다섯째: 타임라인이 넓어 데스크톱은 전체 폭(wide) */}
          <Reason no={5} wide title="교사가 된 이후에도 지속적으로 책임지니까!" sub="한우리는 교재 교수, 글쓰기 지도법, 토의토론 등 여러 영역에 대한 전문적인 교육을 제공합니다.">
            <div className="flex flex-col gap-3">
              {TRACKS.map((tr) => (
                <div key={tr.title} className="overflow-hidden rounded-[12px] border border-solid border-[#FBE7DA]">
                  <h4 className="m-0 bg-[#FFF7F1] py-2 text-center text-[14px] font-extrabold text-[#C2410C] lg:text-[16px]">{tr.title}</h4>
                  <ol className="relative m-0 grid list-none gap-0 px-2 pt-3 pb-3 lg:px-6" style={{ gridTemplateColumns: `repeat(${tr.steps.length}, minmax(0, 1fr))` }}>
                    {/* 가운데 이음선 */}
                    <span className="absolute top-[38px] right-6 left-6 h-[2px] bg-[#F26522] lg:top-[42px]" aria-hidden="true" />
                    {tr.steps.map(([n, p]) => (
                      <li key={n} className="relative flex flex-col items-center gap-1.5 text-center">
                        <span className="text-[11px] font-bold break-keep text-[#1F1F1F] lg:text-[14px]">{n}</span>
                        <span className="z-10 h-3 w-3 rounded-full border-[3px] border-solid border-[#F26522] bg-white" aria-hidden="true" />
                        <span className="text-[10px] break-keep text-[#666666] lg:text-[13px]">{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </Reason>
      </ol>
    </Section>
  );
}
