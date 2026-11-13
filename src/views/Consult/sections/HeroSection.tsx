import type { ConsultVals } from "../useConsult";

type Props = Pick<ConsultVals, "steps">;

export default function HeroSection({ steps }: Props) {
  return (
    <section className="bg-white" aria-labelledby="c-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-8 pb-6">
        <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[36px]" id="c-h">
          {"우리 아이 "}
          <span className="text-[#D94E0F]">문해력</span>
          <br />
          한우리와 상담하세요!
        </h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#4A4A4A]">
          30년 독서 전문 교육 노하우로 아이의 독서력 수준을 진단하고 딱 맞는 커리큘럼을 안내해 드립니다.
        </p>
        <ol
          className="mx-0 mt-2 mb-0 flex list-none items-center gap-2 rounded-[16px] bg-[#F7F7F8] px-3.5 py-3 text-[14px]"
          aria-label="신청 단계"
        >
          {steps.map((s, i) => (
            <li key={i} className="flex items-center gap-1.5" style={{ flex: s.flex }}>
              <span
                className="flex h-6 w-6 flex-none items-center justify-center rounded-[50%] text-[12px] font-bold"
                style={{ background: s.bg, color: s.fg }}
              >
                {s.n}
              </span>
              <span className="whitespace-nowrap" style={{ fontWeight: s.weight, color: s.color }}>
                {s.label}
              </span>
              {s.line && <span className="h-0.5 min-w-3 flex-auto bg-[#E0E0E0]" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
