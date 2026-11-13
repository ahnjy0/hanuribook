import type { AdvancedVals } from "../useAdvanced";

type Props = Pick<AdvancedVals, "tabs">;

export default function CourseExplorerSection({ tabs }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 pt-5 pb-12 lg:gap-6 lg:pt-10 lg:pb-24"
      aria-label="초등심화 과정"
    >
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        {tabs.map((c, i) => (
          <li key={i} className="flex">
            <article className="flex-auto overflow-hidden rounded-[20px] border border-[#EEEEEE] bg-white">
              <div
                className="relative flex h-30 items-center justify-center text-center text-[12px] text-[#5A4A3C]"
                style={{ background: c.tint }}
              >
                {`[이미지] ${c.img}`}
                <span
                  className="absolute top-3 left-3 inline-flex h-8 items-center rounded-full px-3.5 py-0 text-[15px] font-extrabold tracking-[-0.02em] text-white"
                  style={{ background: c.badge }}
                >
                  {c.grade}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 p-4">
                <h2 className="m-0 text-[19px] font-extrabold">{c.label}</h2>
                <p className="m-0 text-[14px] font-semibold text-[#333333]">{c.slogan}</p>
                <p className="m-0 text-[13px] leading-[1.6] text-[#4A4A4A]">{c.desc}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
