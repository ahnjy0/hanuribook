import SmartLink from "@/components/common/SmartLink";
import type { SpecialVals } from "../useSpecial";

type Props = Pick<SpecialVals, "items">;

/**
 * 단기특강 카드: 초등심화 전체 페이지 과정 카드와 같은 디자인(아이콘 없음)
 * 위(연한 특강색 배경): 분야 라벨(맨 앞, 진한 특강색 알약) + 대상 라벨 + 특강명
 * 아래: 한 줄 설명 + 상세보기 버튼 / 마우스오버 시 살짝 위로 뜨며 그림자. 모바일 1열, 태블릿 이상 2열
 */
export default function CourseListSection({ items }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 pt-5 pb-12 lg:gap-6 lg:pt-10 lg:pb-24"
      aria-label="특강 목록"
    >
      {/* 모바일 1열 · 태블릿 2열 · 데스크톱 3열 */}
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {items.map((c) => (
          <li key={c.id} className="flex">
            <article
              className="flex flex-auto flex-col overflow-hidden rounded-[22px] text-[#1F1F1F] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.10)] motion-reduce:transition-none lg:rounded-[28px]"
              style={{ border: `1.5px solid ${c.line}`, background: c.tint }}
            >
              <div className="flex flex-col gap-2.5 px-5 pt-5 pb-4.5 lg:gap-3.5 lg:px-7 lg:pt-7 lg:pb-6">
                {/* 라벨: 분야(맨 앞, 진한 특강색으로 채운 알약 + 흰 굵은 글자) → 대상(흰 알약 + 특강색 글자) */}
                <div className="flex flex-wrap items-center gap-1.5 lg:gap-2">
                  <span
                    className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] leading-[1.5] font-extrabold lg:px-4.5 lg:py-2 lg:text-[16px]"
                    style={{ background: c.fieldBg ?? c.badge, color: c.fieldFg ?? c.badgeFg }}
                  >
                    {c.field}
                  </span>
                  <span
                    className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[13px] leading-[1.5] font-bold lg:px-4.5 lg:py-2 lg:text-[16px]"
                    style={{ color: c.ink }}
                  >
                    {c.age}
                  </span>
                </div>
                {/* 데스크톱 3열이라 카드 폭이 좁아 제목은 26px(초등심화 2열 카드는 32px) */}
                <h2 className="m-0 text-[23px] leading-[1.25] font-extrabold tracking-[-0.03em] break-keep text-[#1F1F1F] lg:text-[26px]">
                  {c.title}
                </h2>
              </div>
              {/* 아래쪽: 한 줄 설명(왼쪽) + 상세보기 버튼(오른쪽). 좁은 화면에서 넘치면 버튼이 다음 줄 오른쪽으로.
                  데스크톱 3열은 카드가 좁아 설명을 한 줄 전체로, 버튼은 그 아래 오른쪽 */}
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 px-5 pt-1 pb-5 lg:px-7 lg:pb-7">
                <p className="m-0 min-w-0 flex-1 text-[15px] leading-[1.55] font-normal break-keep text-[#222222] lg:basis-full lg:text-[17px]">
                  {c.desc}
                </p>
                {/* 상세 페이지로 이동(데이터 href — 상세 페이지가 생기기 전까지는 자리표시 "#").
                    버튼 색은 카드마다 다르지 않게 진한 베이지(마우스오버 시 더 진하게)로 통일, 버튼명은 '프로그램명 상세보기' */}
                <SmartLink
                  className="ml-auto inline-flex h-10 flex-none items-center justify-center gap-1 rounded-full bg-[#8C6E4A] px-5 text-[14px] font-bold text-white no-underline transition-colors duration-300 hover:bg-[#6E5436] lg:h-11 lg:px-6 lg:text-[15px]"
                  href={c.href}
                >
                  {c.cta ?? c.title} 상세보기 ›
                </SmartLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
