import SmartLink from "@/components/common/SmartLink";
import Link from "next/link";
import { CourseIcon } from "@/views/Advanced/sections/CourseExplorerSection";
import type { MainVals, ProgIcon } from "../useMain";

type Props = Pick<MainVals, "progTabs" | "progs">;

/** 정규 심화 탭 연령 박스 아이콘: 초등심화 페이지 과정 카드와 같은 아이콘(CourseIcon)을 씀 — 메인 키 → 초등심화 과정 id */
const ADVANCED_ICON_ID: Record<ProgIcon, string> = { science: "sci", history: "kh", geo: "geo", world: "wh" };

export default function ProgramsSection({ progTabs, progs }: Props) {
  return (
    <section
      className="relative mt-14 overflow-hidden bg-[linear-gradient(180deg,#FFF8F3_0%,#FFEBDD_100%)] py-14 lg:mt-20 lg:py-20"
      aria-labelledby="prog-title"
    >
      {/* 배경 장식 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-[#FFD9C2] opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-28 size-80 rounded-full bg-[#FFC9A8] opacity-40 blur-3xl"
      />

      <div className="relative mx-auto box-border max-w-[1200px] px-5">
        <div className="reveal mb-7 flex flex-col items-center gap-2 text-center lg:mb-10">
          
          <h2 className="m-0 text-[28px] font-extrabold text-[#1F1F1F] lg:text-[38px]" id="prog-title">
            한우리 프로그램
          </h2>
          <p className="m-0 text-[15px] leading-[1.6] break-keep text-[#6B5A4E] lg:text-[17px]">
            아이의 나이와 목표에 맞는 과정을 찾아보세요
          </p>
        </div>

        <div
          className="reveal mx-auto mt-0 mb-8 box-border grid w-full max-w-[520px] grid-cols-3 gap-1 rounded-full bg-white p-1.5 shadow-[0_6px_20px_rgba(230,69,15,0.10)] lg:mb-10"
          role="tablist"
          aria-label="프로그램 분류"
        >
          {progTabs.map((t, i) => (
            <button
              key={i}
              className="flex h-13.5 cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 px-2.5 py-0 font-[family-name:inherit] text-[17px] tracking-[-0.02em] whitespace-nowrap transition-colors duration-300"
              style={{ background: t.bg, color: t.fg, fontWeight: t.weight }}
              role="tab"
              aria-selected={t.sel}
              onClick={t.pick}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {progs.map((p, i) => (
            // reveal(등장 모션)은 바깥 래퍼에, hover 모션은 카드에 분리해 transition 이 충돌하지 않게 함
            <div key={i} className="reveal">
              <SmartLink
                className="group box-border flex h-full items-center gap-4 rounded-[20px] bg-white p-4.5 text-[#1F1F1F] no-underline shadow-[0_4px_16px_rgba(230,69,15,0.06)] ring-1 ring-[#F6E1D3] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.10)] lg:p-5"
                href={p.href}
              >
                {/* 대상 연령 박스: '초등 1·2학년' → 초등 / 1·2학년 처럼 첫 단어와 나머지를 두 줄로.
                    띄어쓰기 없이 긴 연령('예비중·중등')은 가운뎃점 뒤에서 나눔 → 예비중· / 중등 */}
                <span
                  className="flex size-16 flex-none flex-col items-center justify-center rounded-[16px] text-center text-[13px] leading-[1.25] font-extrabold tracking-[-0.03em] lg:size-18 lg:text-[14px]"
                  style={{ background: p.tone.soft, color: p.tone.fg ?? p.tone.ink }}
                  aria-hidden={p.icon ? true : undefined}
                >
                  {/* 아이콘이 있으면(정규 심화) 아이콘만, 분야가 있으면(특강) 분야 글자만 — 둘 다 학년은 제목 위 글자로 */}
                  {p.icon ? (
                    <span className="flex [&_svg]:size-8 lg:[&_svg]:size-9">
                      <CourseIcon id={ADVANCED_ICON_ID[p.icon]} color={p.tone.ink} />
                    </span>
                  ) : p.field ? (
                    <span className="px-1 text-[14px] leading-[1.2] break-keep lg:text-[15px]">{p.field}</span>
                  ) : (() => {
                    const dot = p.age.indexOf("·");
                    const [first, ...rest] =
                      !p.age.includes(" ") && p.age.length > 4 && dot > 0
                        ? [p.age.slice(0, dot + 1), p.age.slice(dot + 1)]
                        : p.age.split(" ");
                    return (
                      <>
                        <span>{first}</span>
                        {rest.length > 0 && <span className="whitespace-nowrap">{rest.join(" ")}</span>}
                      </>
                    );
                  })()}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  {/* 제목 위 작은 글자(연령 박스와 같은 색): 정규 심화 · 특강 탭은 학년(박스에는 아이콘 · 분야) */}
                  {(p.field || p.icon) && (
                    <span className="text-[13px] leading-[1.3] font-bold lg:text-[14px]" style={{ color: p.tone.ink }}>
                      {p.age}
                    </span>
                  )}
                  <span className="text-[17px] leading-[1.35] font-extrabold lg:text-[18px]">{p.title}</span>
                  {p.sub && (
                    <span className="text-[13px] leading-[1.45] break-keep text-[#555555] lg:text-[14px]">{p.sub}</span>
                  )}
                </span>
                <span className="flex size-9 flex-none items-center justify-center rounded-full bg-[#FFF1E7] text-[#C2410C] transition-colors duration-300 group-hover:bg-[#E6450F] group-hover:text-white">
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </span>
              </SmartLink>
            </div>
          ))}
        </div>

        <div className="reveal flex justify-center pt-8">
          <Link
            className="inline-flex h-12 items-center gap-1.5 rounded-full bg-[#E6450F] px-6 py-0 text-[15px] font-bold text-white no-underline transition-colors duration-300 hover:bg-[#C93A0B]"
            href="/program"
          >
            전체 커리큘럼 자세히 보기 ›
          </Link>
        </div>
      </div>
    </section>
  );
}
