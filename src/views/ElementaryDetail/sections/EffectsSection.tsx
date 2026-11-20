import SectionLabel from "@/components/common/SectionLabel";
import type { ElementaryCourse } from "../elementaryData";

export default function EffectsSection({ d }: { d: ElementaryCourse }) {
  return (
    <section className="relative mt-13 px-0 py-10 lg:mt-24 lg:pt-16 lg:pb-20" style={{ background: d.soft }} aria-labelledby="v-eff">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 lg:gap-7">
        <div className="text-center">
          <SectionLabel color={d.accent} bg="#FFFFFF">
            학습 효과
          </SectionLabel>
          <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="v-eff">
            {typeof d.effTitle === "string" ? (
              d.effTitle
            ) : (
              <>
                {d.effTitle[0]}
                <br className="lg:hidden" />
                <span className="hidden lg:inline"> </span>
                {d.effTitle[1]}
              </>
            )}
          </h2>
          <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
            {d.effDesc[0]}
            <br />
            {d.effDesc[1]}
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 md:grid-cols-2">
          {d.effects.map((e) => (
            <li key={e.title} className="flex items-center gap-3.5 rounded-[20px] bg-white px-4 py-3.5">
              {/* 네모 안에 항목명(두 줄): 예) 어휘력 / 키우기 */}
              <span
                className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-[14px] px-1.5 text-center text-[14px] leading-[1.25] font-extrabold break-keep text-white lg:h-20 lg:w-20 lg:text-[16px]"
                style={{ background: d.accent }}
              >
                {e.title}
              </span>
              <span className="text-[14px] leading-[1.5] break-keep text-[#333333] lg:text-[16px]">{e.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
