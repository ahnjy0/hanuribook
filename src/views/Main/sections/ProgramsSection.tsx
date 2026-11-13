import SmartLink from "@/components/common/SmartLink";
import Link from "next/link";
import type { MainVals, Stage } from "../useMain";

type Props = Pick<MainVals, "progTabs" | "progs">;

/** 대상 연령대별 아이콘 (유아: 새싹, 초등: 책, 중등: 말풍선, 고등: 펜) */
function StageIcon({ stage }: { stage: Stage }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (stage) {
    case "kinder":
      return (
        <svg {...common}>
          <path d="M12 21v-9" />
          <path d="M12 12c0-4 2.5-6.5 7-6.5 0 4.5-2.5 7-7 6.5Z" />
          <path d="M12 14.5C12 11 10 9 6 9c0 3.5 2 5.5 6 5.5Z" />
        </svg>
      );
    case "elementary":
      return (
        <svg {...common}>
          <path d="M12 6.5C10.3 5.2 8 4.5 4 4.5v13c4 0 6.3.7 8 2 1.7-1.3 4-2 8-2v-13c-4 0-6.3.7-8 2Z" />
          <path d="M12 6.5v13" />
        </svg>
      );
    case "middle":
      return (
        <svg {...common}>
          <path d="M4 5.5h11a2 2 0 0 1 2 2V13a2 2 0 0 1-2 2H9l-4 3.5V15H4a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2Z" />
          <path d="M19 9h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-.5V21L16 18h-3" />
        </svg>
      );
    case "high":
      return (
        <svg {...common}>
          <path d="M15.5 4.5 19.5 8.5 9 19H5v-4L15.5 4.5Z" />
          <path d="M13.5 6.5l4 4" />
          <path d="M5 21h14" />
        </svg>
      );
  }
}

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
                className="group box-border flex h-full items-center gap-4 rounded-[20px] bg-white p-4.5 text-[#1F1F1F] no-underline shadow-[0_4px_16px_rgba(230,69,15,0.06)] ring-1 ring-[#F6E1D3] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(230,69,15,0.16)] lg:p-5"
                href={p.href}
              >
                <span
                  className="flex size-14 flex-none items-center justify-center rounded-[16px] lg:size-16"
                  style={{ background: p.tone.soft, color: p.tone.ink }}
                >
                  <StageIcon stage={p.stage} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span
                    className="self-start rounded-full px-2.5 py-0.5 text-[12px] font-bold"
                    style={{ background: p.tone.soft, color: p.tone.ink }}
                  >
                    {p.age}
                  </span>
                  <span className="text-[17px] leading-[1.35] font-extrabold lg:text-[18px]">{p.title}</span>
                  <span className="line-clamp-2 text-[13px] leading-[1.5] break-keep text-[#6B6B6B]">{p.desc}</span>
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
            className="inline-flex h-12 items-center gap-1.5 rounded-full bg-[#E6450F] px-6 py-0 text-[15px] font-bold text-white no-underline shadow-[0_8px_20px_rgba(230,69,15,0.25)] transition-colors duration-300 hover:bg-[#C93A0B]"
            href="/program"
          >
            전체 커리큘럼 자세히 보기 ›
          </Link>
        </div>
      </div>
    </section>
  );
}
