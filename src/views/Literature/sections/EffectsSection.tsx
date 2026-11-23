import SectionTitle from "@/views/Socrates/sections/SectionTitle";
import { LIT } from "../theme";

/**
 * 고등 문학 학습 효과: 남색 배경 띠 + 카드 4개
 * 카드(참고 시안): 진한 번호 박스(01~04) + 노란 제목 + 흰 설명. 모바일 1열, 태블릿 2열, 데스크톱 4열
 * ※ 시안 카드 아래의 교재 지면 이미지는 아직 없어 넣지 않음
 */
const EFFECTS: { title: string; desc: string }[] = [
  { title: "핵심을 잡아주는 개념학습", desc: "핵심을 잡아주는 개념 학습으로 문학 이해의 기초를 다집니다." },
  { title: "필독서 읽기로 사고력 향상", desc: "작품을 비판적으로 분석 · 감상하며 종합적 사고력을 기릅니다." },
  { title: "논 · 서술 수행평가 대비", desc: "다른 문학 작품과 사회 현실에 적용하여 문제 해결력을 기릅니다." },
  { title: "대입 논 · 구술고사 대비", desc: "대입 기출 논 · 구술 출제 경향을 분석하여 전략적으로 대비합니다." },
];

export default function EffectsSection() {
  return (
    <section className="relative mt-13 px-0 py-10 text-white lg:mt-24 lg:pt-16 lg:pb-20" style={{ background: LIT.dark }} aria-labelledby="l-eff">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 lg:gap-7">
        <SectionTitle
          id="l-eff"
          onDark
          color={LIT.accent}
          icon={
            <>
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M15 7h6v6" />
            </>
          }
        >
          학습 효과
        </SectionTitle>
        <ol className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {EFFECTS.map((e, i) => (
            <li
              key={e.title}
              className="flex items-start gap-3.5 rounded-[20px] bg-white/8 p-5 ring-1 ring-white/10 lg:flex-col lg:gap-4 lg:rounded-[24px] lg:p-7"
            >
              <span
                className="flex h-11 w-11 flex-none items-center justify-center rounded-[12px] bg-[#1C2742] text-[17px] font-extrabold text-white lg:h-13 lg:w-13 lg:rounded-[14px] lg:text-[20px]"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-col gap-1.5">
                <strong className="text-[17px] leading-[1.35] font-extrabold break-keep text-[#FFD66B] lg:text-[19px]">{e.title}</strong>
                <p className="m-0 text-[14px] leading-[1.6] break-keep text-white/85 lg:text-[16px]">{e.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
