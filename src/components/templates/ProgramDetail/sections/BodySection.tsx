import type { ProgramDetailVals } from "../useProgramDetail";

type Props = Pick<ProgramDetailVals, "p" | "steps">;

export default function BodySection({ p, steps }: Props) {
  return (
    <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 gap-4 px-5 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-6">
      <section className="flex flex-col gap-3 rounded-[22px] bg-[#F7F7F8] px-5 py-5.5" aria-labelledby="d-pt">
        <h2 className="m-0 text-[19px] font-extrabold" id="d-pt">
          이런 점이 달라져요
        </h2>
        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
          {p.points.map((pt, i) => (
            <li key={i} className="flex gap-2.5 text-[15px] leading-[1.5] text-[#333333]">
              <svg
                className="mt-0.25 flex-none"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F26522"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 5 5L20 7" />
              </svg>
              {pt}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-3" aria-labelledby="d-st">
        <h2 className="m-0 text-[19px] font-extrabold" id="d-st">
          월 4차시 수업 구성
        </h2>
        <ol className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={i}
              className="rounded-[16px] border border-[#FBE7DA] bg-[#FFF7F1] px-2.5 py-4 text-center"
            >
              <span className="block text-[12px] font-bold text-[#C2410C]">{`${s.n}차시`}</span>
              <strong className="text-[15px]">{s.t}</strong>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
