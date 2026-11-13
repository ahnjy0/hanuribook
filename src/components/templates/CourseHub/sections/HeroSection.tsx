import type { CourseHubVals } from "../useCourseHub";

type Props = Pick<CourseHubVals, "g">;

export default function HeroSection({ g }: Props) {
  return (
    <section className="border-b border-b-(color:--ac-line) bg-(color:--ac-soft)" aria-labelledby="hub-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-2.5 px-5 py-8">
        <span className="self-start rounded-full border border-(color:--ac-line) bg-white px-3 py-1.25 text-[13px] font-bold text-(color:--ac-text)">
          {g.eyebrow}
        </span>
        <h1
          className="m-0 text-[26px] leading-[1.35] font-extrabold tracking-[-0.04em] whitespace-pre-line lg:text-[38px]"
          id="hub-h"
        >
          {g.title}
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.7] text-[#4A4A4A]">{g.desc}</p>
      </div>
    </section>
  );
}
