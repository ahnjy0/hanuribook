/** 개설 유형별 비용(큰 유형부터) [항목, 금액(만 원) — 없으면 "-"] */
const PLANS: { name: string; basis: string; total: string; costs: [string, string][] }[] = [
  {
    name: "지부(학원형)",
    basis: "100㎡ (30평) · 인구 40만 명 이하 기준",
    total: "7,000",
    costs: [
      ["가맹비", "1,500"],
      ["간판", "600"],
      ["계약보증금", "2,000"],
      ["PC · Fax", "200"],
      ["인테리어", "2,400"],
      ["책상 · 의자", "300"],
    ],
  },
  {
    name: "독서문화원(학원형)",
    basis: "50㎡ (15평) · 인구 5만 명 이하 기준",
    total: "2,500",
    costs: [
      ["가맹비", "200"],
      ["간판", "550"],
      ["계약보증금", "300"],
      ["PC · Fax", "100"],
      ["인테리어", "1,200"],
      ["책상 · 의자", "150"],
    ],
  },
  {
    name: "독서교실(교습소)",
    basis: "33㎡ (10평) 기준",
    total: "1,200",
    costs: [
      ["가맹비", "100"],
      ["간판", "200"],
      ["계약보증금", "100"],
      ["PC · Fax", "-"],
      ["인테리어", "800"],
      ["책상 · 의자", "-"],
    ],
  },
];

/**
 * 개설 비용: 유형 3가지(지부 · 독서문화원 · 독서교실)를 한 번에 위아래로 나열
 * 유형마다: 표 밖 위 유형명 · 기준 → 항목 2열 표(비용만) → 표 밖 아래 총 합계(단위: 만 원)
 */
export default function CostTables() {
  return (
    <ul className="m-0 flex list-none flex-col gap-6 p-0" aria-label="개설 유형별 비용">
      {PLANS.map((p) => (
        <li key={p.name} className="flex flex-col gap-2">
          {/* 표 밖 위: 유형명(굵게) + 기준(작은 회색 글) */}
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h3 className="m-0 text-[17px] font-extrabold text-[#1F1F1F] lg:text-[19px]">· {p.name}</h3>
            <span className="text-[12px] text-[#666666] lg:text-[13px]">{p.basis}</span>
          </div>
          {/* 표: 비용 항목만(2열) */}
          <dl className="m-0 grid grid-cols-2 overflow-hidden rounded-[14px] border border-solid border-[#EEEEEE]">
            {p.costs.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border-solid border-[#EEEEEE] ${i % 2 === 0 ? "border-0 border-r" : "border-0"} ${
                  i < p.costs.length - 2 ? "border-b" : ""
                }`}
              >
                <dt className="flex items-center justify-center bg-[#F7F7F8] px-1 py-3 text-center text-[13px] font-bold break-keep text-[#333333] lg:text-[14px]">{k}</dt>
                <dd className="m-0 flex items-center justify-center py-3 text-[15px] font-semibold text-[#1F1F1F] lg:text-[16px]">{v}</dd>
              </div>
            ))}
          </dl>
          {/* 표 밖 아래(오른쪽): 총 합계 */}
          <p className="m-0 flex items-baseline justify-end gap-2 text-[14px] font-extrabold text-[#1F1F1F] lg:text-[16px]">
            총 합계 <span className="text-[17px] text-[#C2410C] lg:text-[19px]">{p.total}</span>
            <span className="text-[12px] font-normal text-[#666666] lg:text-[13px]">(단위 : 만 원)</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
