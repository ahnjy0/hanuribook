import SmartLink from "@/components/common/SmartLink";
import type { ProgramDetailVals } from "../useProgramDetail";

type Props = Pick<ProgramDetailVals, "p">;

export default function HeroSection({ p }: Props) {
  return (
    <section style={{ background: p.tint }} aria-labelledby="d-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4.5 px-5 pt-5 pb-8">
        <SmartLink
          className="inline-flex min-h-11 items-center gap-1.5 self-start text-[14px] font-semibold text-[#4A4A4A] no-underline"
          href={p.back}
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4A4A4A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          {`${p.sub} 전체 과정`}
        </SmartLink>
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded-[6px] bg-white px-2.5 py-1 text-[13px] font-bold text-[#C2410C]">
                {p.grade}
              </span>
              <span className="text-[13px] font-semibold text-[#4A4A4A]">{p.focus}</span>
            </div>
            <h1 className="m-0 text-[32px] font-extrabold tracking-[-0.04em] lg:text-[42px]" id="d-h">
              {p.title}
            </h1>
            <p className="m-0 text-[18px] leading-[1.45] font-bold text-[#D94E0F]">{p.slogan}</p>
            <p className="m-0 text-[15px] leading-[1.7] text-[#333333]">{p.long}</p>
            <p className="m-0 text-[13px] font-semibold text-[#4A4A4A]">{p.tags}</p>
          </div>
          <div className="flex h-50 items-center justify-center rounded-[24px] border border-dashed border-[#D9C9BC] bg-white text-center text-[13px] text-[#6B5A4C] lg:h-80">{`[이미지] ${p.img}`}</div>
        </div>
      </div>
    </section>
  );
}
