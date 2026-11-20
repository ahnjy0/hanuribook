import SectionLabel from "@/components/common/SectionLabel";

/**
 * 소크라테스 학습 효과: 보라 배경 띠 + 반투명 흰 타일 4개(아이콘 + 설명 + 굵은 효과)
 * 모바일 2열, 데스크톱 4열
 */
const EFFECTS: { lines: [string, string]; strong: string; icon: React.ReactNode }[] = [
  {
    lines: ["단계별", "독해 훈련으로"],
    strong: "독해력 완성",
    // 올라가는 막대그래프
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M6 21v-5M10 21v-8M14 21v-10M18 21V6" />
        <path d="m4 11 5-4 4 2 7-6" />
      </>
    ),
  },
  {
    lines: ["진로 · 계열", "탐색 독서로"],
    strong: "고교학점제 대비",
    // 노트(바인더)
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3v18" />
        <path d="M13 8h3" />
      </>
    ),
  },
  {
    lines: ["시사 이슈", "토론으로"],
    strong: "구술평가 대비",
    // 학사모
    icon: (
      <>
        <path d="M2 9l10-5 10 5-10 5z" />
        <path d="M6 11v5c3 2 9 2 12 0v-5" />
        <path d="M22 9v6" />
      </>
    ),
  },
  {
    lines: ["IB식 글쓰기로", "서술형"],
    strong: "수행평가 대비",
    // 줄 노트 + 스프링
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
        <path d="M3 7h3M3 12h3M3 17h3" />
      </>
    ),
  },
];

export default function EffectsSection() {
  return (
    <section className="relative mt-13 bg-[#5B4596] px-0 py-10 text-white lg:mt-24 lg:pt-16 lg:pb-20" aria-labelledby="m-eff">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 lg:gap-7">
        <div className="text-center">
          <SectionLabel color="#5B4596" bg="#FFFFFF">
            학습 효과
          </SectionLabel>
          <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="m-eff">
            독해력 완성, 내신 · 입시 대비
          </h2>
          <p className="m-0 text-[14px] leading-[1.6] break-keep text-white/85 lg:text-[18px]">
            중학생에게 필요한 필수 독해력과 국어 교과 지식,
            <br />
            평가와 입시 대비 능력을 키웁니다.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 lg:grid-cols-4 lg:gap-4">
          {EFFECTS.map((e) => (
            <li
              key={e.strong}
              className="flex flex-col items-center gap-3 rounded-[20px] bg-white/12 px-3 py-6 text-center lg:gap-4 lg:rounded-[24px] lg:py-9"
            >
              <svg
                className="h-10 w-10 lg:h-12 lg:w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {e.icon}
              </svg>
              <p className="m-0 flex flex-col text-[15px] leading-[1.45] break-keep lg:text-[17px]">
                <span className="text-white/90">{e.lines[0]}</span>
                <span className="text-white/90">{e.lines[1]}</span>
                <strong className="font-extrabold text-white">{e.strong}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
