import SectionLabel from "@/components/common/SectionLabel";
import type { AdvancedCourse } from "../advancedData";
import DescLines from "./DescLines";

/** 학습 효과: 연한 과정색 띠 + 알약 모양 효과 카드 */
export default function EffectsSection({ d }: { d: AdvancedCourse }) {
  return (
    <section className="relative mt-13 px-0 py-10 lg:mt-24 lg:pt-16 lg:pb-20" style={{ background: d.soft }} aria-labelledby="s-eff">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 lg:gap-7">
        <div className="text-center">
          <SectionLabel color={d.accent} bg="#FFFFFF">
            학습 효과
          </SectionLabel>
          <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="s-eff">
            {d.effTitle}
          </h2>
          <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
            {/* 배열로 묶은 줄은 데스크톱에서 한 줄로(예: 똑똑 한국사) */}
            <DescLines lines={d.effDesc} />
          </p>
        </div>
        {/* 효과 카드 3개: 알약 모양(양끝 둥근) 카드 + 왼쪽 동그라미 번호(01~03) + 오른쪽 설명. 한 줄에 하나씩 */}
        <ol className="mx-auto my-0 flex w-full max-w-[900px] list-none flex-col gap-2.5 p-0 lg:gap-3.5">
          {d.effects.map((lines, i) => (
            <li key={lines[0]} className="flex items-center gap-3.5 rounded-full bg-white py-3 pr-6 pl-3 lg:gap-6 lg:py-3.5 lg:pr-10 lg:pl-3.5">
              <span
                className="flex h-[60px] w-[60px] flex-none items-center justify-center rounded-full text-[22px] font-extrabold text-white lg:h-[72px] lg:w-[72px] lg:text-[28px]"
                style={{ background: d.accent }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* 모바일: 두 줄 / 데스크톱: 한 줄로 이어서 */}
              <p className="m-0 text-[14px] leading-[1.55] font-bold break-keep text-[#1F1F1F] lg:text-[18px]">
                {lines.map((l, j) => (
                  <span key={l} className="block lg:inline">
                    {j > 0 && <span className="hidden lg:inline"> </span>}
                    {l}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
