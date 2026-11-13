import SmartLink from "@/components/common/SmartLink";
import type { ElementaryVals } from "../useElementary";

type Props = Pick<ElementaryVals, "progs">;

export default function ProgramsSection({ progs }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-7 lg:gap-5 lg:pt-16"
      aria-labelledby="e-h"
    >
      <h1 className="m-0 text-[24px] font-extrabold lg:text-[30px]" id="e-h">
        학년별 프로그램
      </h1>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3">
        {progs.map((p, i) => (
          <li key={i} className="flex">
            <article
              className="flex flex-auto flex-col overflow-hidden rounded-[22px] bg-white text-[#1F1F1F]"
              style={{ border: `1.5px solid ${p.line}` }}
            >
              <div
                className="relative flex flex-col gap-2.5 overflow-hidden px-5 pt-5 pb-4.5"
                style={{ background: p.soft }}
              >
                <span
                  className="absolute -top-4.5 -right-4.5 h-24 w-24 rounded-[50%] opacity-22"
                  style={{ background: p.accent }}
                  aria-hidden="true"
                />
                <span
                  className="absolute top-4.5 right-4.5 flex h-11 w-11 items-center justify-center rounded-[14px]"
                  style={{ background: p.accent }}
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={p.iconFg}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
                    <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
                  </svg>
                </span>
                <span
                  className="self-start rounded-full bg-white px-2.5 py-1 text-[12px] font-extrabold"
                  style={{ color: p.ink }}
                >
                  {p.grade}
                </span>
                <h3 className="m-0 text-[23px] font-extrabold tracking-[-0.03em] text-[#1F1F1F]">
                  {p.short}
                </h3>
                <span className="text-[13px] font-bold" style={{ color: p.ink }}>
                  {p.focus}
                </span>
              </div>
              <div className="flex flex-auto flex-col gap-3 px-5 pt-4.5 pb-5">
                <p className="m-0 text-[15px] leading-[1.55] text-[#333333]">{p.desc}</p>
                <span className="text-[12px] font-bold" style={{ color: p.ink }}>
                  {p.tags}
                </span>
                <SmartLink
                  className="mt-auto flex h-12 items-center justify-center gap-1 rounded-[12px] text-[15px] font-extrabold text-[#C2410C] no-underline hover:text-[#9A3412]"
                  style={{ background: p.btnBg, color: p.btnFg }}
                  href={p.href}
                >{`${p.short} 상세보기 ›`}</SmartLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
