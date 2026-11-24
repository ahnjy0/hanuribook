import Title, { CARD, Section } from "./Title";

/** 되는 방법 단계 [단계 이름표, 제목, 설명들] */
const STEPS: { tag: string; title: string; desc?: string; note?: string }[] = [
  { tag: "STEP.0", title: "한우리 교사 활동 상담하기" },
  {
    tag: "STEP.1",
    title: "지역 센터 면담",
    desc: "한우리 교사가 되기 전, 지역 센터와 면담을 하고 교사 활동 지원서를 작성해요!",
    note: "지역센터에 따라 면담 시 지원서류가 필요할 수 있어요.",
  },
  { tag: "STEP.2", title: "한우리 교사특별반 과정 수료" },
  { tag: "START", title: "한우리 교사로 활동 시작!" },
];

/** '한우리 선생님이 되려면 어떻게 해야 하나요?' — 지도교사 입문과정 '진행 절차'와 같은 번호 카드 + 화살표 */
export default function StepsSection() {
  return (
    <Section id="ts-how">
      <Title id="ts-how" icon="how">
        한우리 선생님이 되려면 어떻게 해야 하나요?
      </Title>
      <p className="m-0 text-[14px] leading-[1.7] break-keep text-[#333333] lg:text-[17px]">
        <strong className="font-extrabold text-[#1F1F1F]">책과 아이들을 좋아한다면 누구나!</strong> 아래 과정을 거치면 한우리 교사로 활동할 수 있습니다.
      </p>
      <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STEPS.map((s, i) => {
          const last = i === STEPS.length - 1;
          return (
            <li
              key={s.tag}
              className={`relative flex flex-col items-center gap-2 px-4 py-5 text-center lg:py-7 ${
                last ? "rounded-[18px] border border-solid border-[#F26522] bg-[#F26522]" : CARD
              }`}
            >
              <span
                className={`rounded-full border border-solid px-3 py-0.5 text-[12px] font-bold lg:text-[13px] ${
                  last ? "border-white text-white" : "border-[#F26522] bg-white text-[#C2410C]"
                }`}
              >
                {s.tag}
              </span>
              <strong className={`text-[16px] leading-[1.4] font-extrabold break-keep lg:text-[18px] ${last ? "text-white" : "text-[#1F1F1F]"}`}>{s.title}</strong>
              {s.desc && <p className="m-0 text-[13px] leading-[1.55] break-keep text-[#444444] lg:text-[14px]">{s.desc}</p>}
              {s.note && <p className="m-0 text-[11px] leading-[1.5] break-keep text-[#777777] lg:text-[12px]">※ {s.note}</p>}
              {/* 다음 단계 화살표(데스크톱만, 카드 사이) */}
              {!last && (
                <span className="absolute top-1/2 -right-6 hidden -translate-y-1/2 text-[18px] font-bold text-[#F26522] lg:block" aria-hidden="true">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
