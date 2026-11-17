import SectionLabel from "@/components/common/SectionLabel";
import { ACCENT } from "../vocabData";

const EFFECTS = [
  { title: "어휘력 키우기", desc: "다양한 형식의 어휘 활용 활동을 하며 기초 어휘력을 기릅니다." },
  { title: "배경지식 쌓기", desc: "통합교과 주제를 확장·심화하며 배경지식을 쌓습니다." },
  { title: "창의적 표현하기", desc: "전략에 따른 읽기 방법을 익혀 창의적으로 표현하는 능력을 키웁니다." },
  { title: "발표력 키우기", desc: "논리적 완결성을 갖춘 발표 연습으로 발표에 자신감이 생깁니다." },
];

export default function EffectsSection() {
  return (
    <section className="relative mt-13 bg-[#FFF4D6] px-0 py-10 lg:mt-24 lg:pt-16 lg:pb-20" aria-labelledby="v-eff">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 lg:gap-7">
        <div className="text-center">
          <SectionLabel color={ACCENT} bg="#FFFFFF">
            학습 효과
          </SectionLabel>
          <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[34px]" id="v-eff">
            탄탄한 어휘력, 발표력 향상
          </h2>
          <p className="m-0 text-[14px] leading-[1.6] text-[#333333] lg:text-[18px]">
            다양한 어휘 활동, 말하기와 발표하기 수업을 하며
            <br />
            교과 학습 대비 필수 어휘를 익혀 국어 능력을 키웁니다.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 md:grid-cols-2">
          {EFFECTS.map((e) => (
            <li key={e.title} className="flex items-center gap-3.5 rounded-[20px] bg-white px-4 py-3.5">
              {/* 원 안에 항목명(두 줄): 예) 어휘력 / 키우기 */}
              <span className="flex h-[72px] w-[72px] flex-none lg:h-20 lg:w-20 items-center justify-center rounded-[14px] bg-[#C2410C] px-1.5 text-center text-[14px] leading-[1.25] lg:text-[16px] font-extrabold break-keep text-white">
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
