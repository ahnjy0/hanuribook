import { type CSSProperties } from "react";
import SmartLink from "@/components/common/SmartLink";
import type { CourseHubVals } from "../useCourseHub";

type Props = Pick<CourseHubVals, "g" | "n" | "steps">;

export default function RoadmapSection({ g, n, steps }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4.5 px-5 pt-10"
      aria-labelledby="hub-road"
    >
      <h2 className="m-0 flex items-center gap-2 text-[22px] font-extrabold lg:text-[28px]" id="hub-road">
        <span className="h-2 w-2 rounded-[50%] bg-(color:--ac)" aria-hidden="true" />
        단계별 커리큘럼
      </h2>
      <ol
        className="m-0 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-[repeat(var(--n),minmax(0,1fr))] lg:items-stretch lg:gap-0"
        style={{ "--n": n } as CSSProperties}
      >
        {steps.map((s, i) => (
          <li
            key={i}
            className="group/step relative flex flex-col rounded-[20px] border border-(color:--ac-line) bg-(color:--ac-soft) p-5 lg:rounded-none lg:border-0 lg:border-none lg:border-current lg:bg-transparent lg:px-0 lg:pt-[calc(var(--i)_*_64px)] lg:pb-0"
            style={{ "--i": s.lift } as CSSProperties}
          >
            <span className="mb-2 self-start rounded-full bg-(color:--ac) px-2.25 py-0.75 text-[11px] font-extrabold tracking-[0.04em] text-white lg:hidden">{`STEP ${s.no}`}</span>
            <p className="m-0 text-[13px] font-bold text-(color:--ac-text)">{s.eyebrow}</p>
            <h3 className="mx-0 mt-0.5 mb-0 text-[24px] font-extrabold tracking-[-0.04em] text-(color:--ac-text)">
              {s.title}
            </h3>
            <div
              className="hidden lg:relative lg:mx-0 lg:mt-3.5 lg:mb-0 lg:block lg:h-0.5 lg:bg-[#BDBDBD] lg:group-not-first/step:before:absolute lg:group-not-first/step:before:top-0 lg:group-not-first/step:before:left-0 lg:group-not-first/step:before:h-16.5 lg:group-not-first/step:before:w-0.5 lg:group-not-first/step:before:bg-[#BDBDBD] lg:group-not-first/step:before:content-[''] lg:group-last/step:after:absolute lg:group-last/step:after:-top-1.25 lg:group-last/step:after:-right-0.5 lg:group-last/step:after:border-y-6 lg:group-last/step:after:border-l-11 lg:group-last/step:after:border-y-transparent lg:group-last/step:after:border-l-[#BDBDBD] lg:group-last/step:after:content-['']"
              aria-hidden="true"
            />
            <div className="mt-2.5 flex flex-auto flex-col gap-2.5 lg:[border-left-width:1px] lg:[border-left-style:dashed] lg:[border-left-color:#D6D6D6] lg:pt-4 lg:pr-5 lg:pb-1 lg:pl-4.5 lg:group-first/step:[border-left-color:transparent] lg:group-first/step:pl-0">
              <p className="m-0 text-[15px] leading-[1.5] font-extrabold whitespace-pre-line text-(color:--ac-text)">
                {s.head}
              </p>
              <ul className="mx-0 mt-0 mb-1.5 flex list-none flex-col gap-1.5 p-0">
                {s.items.map((it, j) => (
                  <li key={j} className="flex gap-2 text-[14px] leading-[1.55] break-keep text-[#4A4A4A]">
                    <span
                      className="mt-2.25 h-1 w-1 flex-none rounded-[50%] bg-[#8A8A8A]"
                      aria-hidden="true"
                    />
                    {it}
                  </li>
                ))}
              </ul>
              <SmartLink
                className="mt-auto flex min-h-11.5 items-center justify-center gap-1.5 self-stretch rounded-[12px] bg-(color:--ac) px-4 py-0 text-[15px] font-extrabold text-white no-underline"
                href={s.href}
                aria-label={`${s.title} 상세보기`}
              >
                바로가기
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </SmartLink>
            </div>
          </li>
        ))}
      </ol>
      <p className="mx-0 mt-1.5 mb-0 flex h-12 items-center justify-center rounded-full bg-(color:--ac) text-[17px] font-extrabold tracking-[-0.02em] text-white">
        {g.bar}
      </p>
    </section>
  );
}
