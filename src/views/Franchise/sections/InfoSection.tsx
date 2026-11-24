import type { ReactNode } from "react";
import TitleIcon, { type TitleIconKind } from "@/views/Program/sections/TitleIcon";
import CostTables from "./CostTables";

/** 개설 절차 [단계명, 세부 항목들] — 항목 안 \n 은 줄바꿈 */
const PROCESS: [string, string[]][] = [
  ["개설문의", ["본사 또는 지역센터", "개설관련 정보 제공\n(조건 & 서류 등)"]],
  ["개설준비", ["개설 희망 지역 확인 및\n지역센터장 면담", "이력서 & 자기소개서 제출"]],
  ["개설지역 확인 · 면담", ["본사 점검 및 면담\n(서류 / 개설희망지역)", "본사 승인 절차 진행"]],
  ["계약 절차 진행", ["임대차 계약", "가맹 계약서 작성", "가맹비 & 보증금 예치"]],
  ["개설 실무 준비", ["인테리어(점포시공) 진행", "교습소 신고 및\n사업자등록"]],
  ["운영 시작", ["개원식", "센터운영 시작", "지속적 사후관리"]],
];

/** 비용 용어 설명 */
const COST_TERMS: [string, string][] = [
  ["가맹비", "상표 이용 권리 포함 등을 가맹사업자에게 부여하는 대가로 받는 각종 금액"],
  ["계약 보증금", "상품 등의 대금과 관련한 채무액 또는 손해배상액의 지급을 담보하기 위한 것"],
];

/** 개설 비용 안내사항 */
const COST_NOTES = [
  "위의 사항들은 부가세 별도이며, 점포 임대차 관련 비용은 제외된 금액입니다.",
  "인테리어, 사무용집기 및 설비 등은 본사에서 관여하지 않으며, 업체 및 점포 상황에 따라 비용이 상이할 수 있습니다. (인테리어 비용은 평당 약 80~100만 원 지출 예상)",
  "인구수에 따라 가맹비 및 계약보증금은 변동될 수 있습니다.",
  "가맹비는 소멸성 금액이며, 계약 종료 시 계약 보증금은 절차에 따라 반환됩니다.",
];

/** 교육 과정 [시간, 주제들] — 같은 시간끼리 한 칸으로 묶음 */
const EDU: [string, string[]][] = [
  [
    "5H",
    [
      "한우리 지도교사의 비전과 목표 함양",
      "지도교사 모집을 위한 멘토링 운영 방법",
      "마인드 교육과 오리엔테이션 운영",
      "전문교사 이미지로 거듭나기",
      "상담 관리 노하우",
      "수업 지도 역량을 위한 스터디 운영",
      "교사관리방법_사례",
    ],
  ],
  ["3H", ["지역센터 제 규정 이해", "에듀넷 및 한우리 사이트 활용", "E-러닝센터 활용 및 본사 교육체계"]],
  ["2H", ["상권 분석을 통한 전략 수립", "지도교사가 할 수 있는 홍보 전략"]],
];

/** 섹션 제목: 왼쪽 정렬 + 주황 타일 아이콘(온라인 설명회와 같은 모양) */
function Title({ id, icon, children }: { id: string; icon: TitleIconKind; children: ReactNode }) {
  return (
    <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id={id}>
      <TitleIcon kind={icon} />
      {children}
    </h2>
  );
}

const CARD = "rounded-[24px] border border-solid border-[#EEEEEE] bg-white p-5 lg:p-7";

/**
 * 센터 개설 안내(Franchise 에서 데스크톱은 문의서 왼쪽) — 개설 절차 · 개설 비용 · 교육 과정 안내를 흰 카드로
 */
export default function InfoSection() {
  return (
    <div className="flex flex-col">
      {/* 개설 절차: 단계 카드 2열(번호 + 단계명 머리 · 세부 항목) */}
      <section className="flex flex-col gap-3.5 pt-8 lg:gap-5 lg:pt-14" aria-labelledby="f-proc">
        <Title id="f-proc" icon="how">
          개설 절차
        </Title>
        {/* 모바일도 한 줄에 2개 */}
        <ol className="m-0 grid list-none grid-cols-2 gap-2 p-0 lg:gap-3">
          {PROCESS.map(([t, items], i) => (
            <li key={t} className="flex flex-col overflow-hidden rounded-[18px] border border-solid border-[#EEEEEE] bg-white">
              <strong className="flex items-center gap-1.5 bg-[#FFF1E7] px-3 py-2.5 text-[14px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:gap-2 lg:px-4 lg:py-3 lg:text-[17px]">
                <span className="text-[#F26522]">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </strong>
              <ol className="m-0 flex list-none flex-col gap-1.5 px-3 py-3 text-[12px] leading-[1.5] break-keep text-[#333333] lg:px-4 lg:py-3.5 lg:text-[14px]">
                {items.map((it, j) => (
                  <li key={it} className="flex gap-1.5">
                    <span className="flex-none text-[#C2410C]">{j + 1})</span>
                    <span className="whitespace-pre-line">{it}</span>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </section>

      {/* 개설 비용: 유형 3가지 표(모두 나열) + 용어 설명 + 안내사항 */}
      <section className="flex flex-col gap-3.5 pt-12 lg:gap-5 lg:pt-16" aria-labelledby="f-cost">
        <Title id="f-cost" icon="results">
          개설 비용
        </Title>
        <div className={`${CARD} flex flex-col gap-4`}>
          <CostTables />
          <ul className="m-0 flex list-none flex-col gap-1 p-0 text-[13px] leading-[1.6] break-keep text-[#333333] lg:text-[14px]">
            {COST_TERMS.map(([k, v]) => (
              <li key={k}>
                · <strong className="font-bold">{k}</strong> : {v}
              </li>
            ))}
          </ul>
          <div className="rounded-[14px] bg-[#F7F7F8] p-4 text-[12px] leading-[1.65] break-keep text-[#555555] lg:text-[13px]">
            <strong className="text-[#1F1F1F]">※ 개설 비용에 대한 안내사항</strong>
            <ol className="m-0 mt-1.5 flex list-none flex-col gap-1 p-0">
              {COST_NOTES.map((n, i) => (
                <li key={n}>
                  {i + 1}. {n}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 교육 과정 안내: 주제 · 시간 표(같은 시간끼리 시간 칸을 합침) */}
      <section className="flex flex-col gap-3.5 pt-12 lg:gap-5 lg:pt-16" aria-labelledby="f-edu">
        <Title id="f-edu" icon="guide">
          교육 과정 안내
        </Title>
        <div className="overflow-hidden rounded-[18px] border border-solid border-[#EEEEEE] bg-white">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-[#FFF1E7]">
                <th scope="col" className="px-2 py-3 text-[14px] font-extrabold text-[#C2410C] lg:text-[15px]">
                  주제
                </th>
                <th scope="col" className="w-[72px] border-0 border-l border-solid border-[#F3E2D6] px-2 py-3 text-[14px] font-extrabold text-[#C2410C] lg:w-[96px] lg:text-[15px]">
                  시간
                </th>
              </tr>
            </thead>
            <tbody>
              {EDU.flatMap(([h, topics]) =>
                topics.map((t, i) => (
                  <tr key={t} className="border-0 border-t border-solid border-[#F0F0F0]">
                    <td className="px-3 py-2.5 text-[13px] break-keep text-[#333333] lg:text-[14px]">{t}</td>
                    {i === 0 && (
                      <td rowSpan={topics.length} className="border-0 border-l border-solid border-[#F0F0F0] text-[15px] font-extrabold text-[#1F1F1F] lg:text-[16px]">
                        {h}
                      </td>
                    )}
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
