import SectionLabel from "@/components/common/SectionLabel";
import type { ElementaryCourse } from "../elementaryData";

export default function ClassSection({ d }: { d: ElementaryCourse }) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="v-class"
    >
      <div className="text-center">
        <SectionLabel color={d.accent} bg={d.soft}>
          수업 내용
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="v-class">
          {d.classTitle}
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
          {d.classDesc[0]}
          <br />
          {d.classDesc[1]}
        </p>
      </div>
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
        {d.lessons.map((l, i) => (
          <li
            key={l.title}
            className="flex flex-col gap-1.5 rounded-[18px] px-3 py-4.5 text-center text-white"
            style={{ background: d.accent }}
          >
            <span className="text-[14px] font-semibold opacity-90 lg:text-[15px]">{i + 1}차시</span>
            <strong className="text-[17px] lg:text-[19px]">{l.title}</strong>
            {/* 설명: 진한 강조색 위 흰 글자(약간 투명) */}
            <span className="text-[14px] leading-[1.5] break-keep text-white/85 lg:text-[15px]">{l.desc}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
