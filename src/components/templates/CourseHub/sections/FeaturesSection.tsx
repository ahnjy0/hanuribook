import type { CourseHubVals } from "../useCourseHub";

type Props = Pick<CourseHubVals, "feats">;

export default function FeaturesSection({ feats }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12"
      aria-labelledby="hub-feat"
    >
      <h2 className="m-0 flex items-center gap-2 text-[22px] font-extrabold lg:text-[28px]" id="hub-feat">
        <span className="h-2 w-2 rounded-[50%] bg-(color:--ac)" aria-hidden="true" />
        프로그램의 특징
      </h2>
      <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 lg:grid-cols-3">
        {feats.map((f, i) => (
          <li key={i} className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-4.5">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-(color:--ac) text-[14px] font-extrabold text-white">
              {f.n}
            </span>
            <div>
              <strong className="text-[15px] break-keep">{f.t}</strong>
              <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] break-keep text-[#4A4A4A]">{f.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
