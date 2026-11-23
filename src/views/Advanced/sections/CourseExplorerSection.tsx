import SmartLink from "@/components/common/SmartLink";
import type { AdvancedVals } from "../useAdvanced";

type Props = Pick<AdvancedVals, "tabs">;

/**
 * 과정 분야별 아이콘(과정색 선): 과학=실험 플라스크, 한국사=전통 기와지붕, 지리=접힌 지도, 세계사=지구본
 * id: sci · kh · geo · wh(useAdvanced 과정 id). 메인 '한우리 프로그램' 정규 심화 탭에서도 같은 아이콘을 씀
 */
export function CourseIcon({ id, color }: { id: string; color: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (id) {
    case "sci":
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v6.5L4.6 18.4A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.6L14 9.5V3" />
          <path d="M7.5 15h9" />
        </svg>
      );
    case "kh":
      return (
        <svg {...common}>
          <path d="M2 10c3.5 0 6-2.2 10-6 4 3.8 6.5 6 10 6" />
          <path d="M5 10v11h14V10" />
          <path d="M3 21h18" />
          <path d="M10 21v-5h4v5" />
        </svg>
      );
    case "geo":
      return (
        <svg {...common}>
          <path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z" />
          <path d="M9 4v13.5" />
          <path d="M15 6.5V20" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
  }
}

/**
 * 초등심화 과정 카드: 초등정규 '학년별 프로그램' 카드와 같은 디자인.
 * 위(연한 과정색 배경): 학년 라벨 + 프로그램 구분 + 과정명, 오른쪽 위 분야 아이콘
 * 아래(흰 배경): 한 줄 설명 + 상세보기 버튼 / 마우스오버 시 살짝 위로 뜨며 그림자
 */
export default function CourseExplorerSection({ tabs }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 pt-5 pb-12 lg:gap-6 lg:pt-10 lg:pb-24"
      aria-label="초등심화 과정"
    >
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 lg:gap-5">
        {tabs.map((c) => (
          <li key={c.id} className="flex">
            <article
              className="flex flex-auto flex-col overflow-hidden rounded-[22px] text-[#1F1F1F] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.10)] motion-reduce:transition-none lg:rounded-[28px]"
              style={{ border: `1.5px solid ${c.line}`, background: c.tint }}
            >
              <div
                className="relative flex flex-col gap-2.5 overflow-hidden px-5 pt-5 pb-4.5 lg:gap-3.5 lg:px-8 lg:pt-8 lg:pb-7"
                style={{ background: c.tint }}
              >
                <span
                  // 분야 아이콘: 초등정규(색 채운 네모 + 흰 아이콘)와 구분되게 흰 동그라미 + 과정색 아이콘 + 과정색 테두리 링
                  className="absolute top-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white [&_svg]:h-[28px] [&_svg]:w-[28px] lg:top-6 lg:right-6 lg:h-[72px] lg:w-[72px] lg:[&_svg]:h-9 lg:[&_svg]:w-9"
                  style={{ boxShadow: `0 0 0 4px ${c.line}, 0 6px 14px rgba(0,0,0,0.08)` }}
                  aria-hidden="true"
                >
                  <CourseIcon id={c.id} color={c.badge} />
                </span>
                {/* 학년 라벨: 초등정규와 같은 크기·여백(모바일 13px·데스크톱 16px) */}
                <span
                  className="inline-flex items-center self-start rounded-full bg-white px-3.5 py-1.5 text-[13px] leading-[1.5] font-bold lg:px-4.5 lg:py-2 lg:text-[16px]"
                  style={{ color: c.badge }}
                >
                  {c.grade}
                </span>
                {/* 제목: 프로그램 구분 + 과정명 */}
                <h2 className="m-0 flex flex-col text-[#1F1F1F]">
                  <span className="text-[14px] font-bold lg:text-[17px]" style={{ color: c.badge }}>
                    {c.series}
                  </span>
                  <span className="text-[23px] leading-[1.25] font-extrabold tracking-[-0.03em] lg:text-[32px]">
                    {c.label}
                  </span>
                </h2>
              </div>
              {/* 아래쪽: 한 줄 설명(왼쪽) + 상세보기 버튼(오른쪽)을 한 줄에. 좁은 화면에서 넘치면 버튼이 다음 줄 오른쪽으로 */}
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 px-5 pt-1 pb-5 lg:px-8 lg:pb-8">
                <p className="m-0 min-w-0 flex-1 text-[15px] leading-[1.55] font-extrabold break-keep text-[#222222] lg:text-[18px]">
                  {c.slogan}
                </p>
                <SmartLink
                  className="ml-auto inline-flex h-10 flex-none items-center justify-center gap-1 rounded-full px-5 text-[14px] font-bold text-white no-underline lg:h-11 lg:px-6 lg:text-[15px]"
                  style={{ background: c.badge }}
                  href={c.href}
                >{`${c.label} 상세보기 ›`}</SmartLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
