import SectionLabel from "@/components/common/SectionLabel";
import { ACCENT, SOFT, EFFECTS } from "../scienceData";

/** 학습 효과: 어휘리더 '학습 효과'와 같은 디자인(연한 배경 띠 + 항목 카드 2열) */
export default function EffectsSection() {
  return (
    <section className="relative mt-13 px-0 py-10 lg:mt-24 lg:pt-16 lg:pb-20" style={{ background: SOFT }} aria-labelledby="s-eff">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 lg:gap-7">
        <div className="text-center">
          <SectionLabel color={ACCENT} bg="#FFFFFF">
            학습 효과
          </SectionLabel>
          <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[34px]" id="s-eff">
            과학 교과 지식 향상
          </h2>
          <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
            과학 기초 배경지식 확장하여 과학교과 대비하고
            <br />
            독서토론논술 실력도 함께 키웁니다.
          </p>
        </div>
        {/* 효과 카드 3개: 알약 모양(양끝 둥근) 카드 + 왼쪽 동그라미 번호(01~03) + 오른쪽 설명. 한 줄에 하나씩 */}
        <ol className="mx-auto my-0 flex w-full max-w-[900px] list-none flex-col gap-2.5 p-0 lg:gap-3.5">
          {EFFECTS.map((lines, i) => (
            <li key={lines[0]} className="flex items-center gap-3.5 rounded-full bg-white py-3 pr-6 pl-3 lg:gap-6 lg:py-3.5 lg:pr-10 lg:pl-3.5">
              <span
                className="flex h-[60px] w-[60px] flex-none items-center justify-center rounded-full text-[22px] font-extrabold text-white lg:h-[72px] lg:w-[72px] lg:text-[28px]"
                style={{ background: ACCENT }}
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
