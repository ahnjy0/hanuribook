import SectionTitle from "./SectionTitle";

/**
 * 소크라테스 학습 효과: 보라 배경 띠 + 연보라 카드 4개(흰 동그라미 아이콘 + 진한 설명 두 줄 + 진한 보라 효과 문구)
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
        {/* 제목: 과정 안내와 같은 모양(왼쪽 정렬 + 타일 아이콘 — 올라가는 그래프). 보라 띠 위라 흰 타일 + 흰 글자 */}
        <SectionTitle
          id="m-eff"
          onDark
          icon={
            <>
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M15 7h6v6" />
            </>
          }
        >
          학습 효과
        </SectionTitle>
        <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 lg:grid-cols-4 lg:gap-4">
          {EFFECTS.map((e) => (
            <li
              key={e.strong}
              // 연보라 카드 + 은은한 그림자: 보라 띠 위에서 또렷하게. 아이콘은 흰 동그라미 안에
              className="flex flex-col items-center gap-3 rounded-[20px] bg-[#F3F0FA] px-3 py-6 text-center shadow-[0_8px_20px_rgba(30,15,70,0.18)] lg:gap-4 lg:rounded-[24px] lg:py-9"
            >
              <span
                className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white lg:h-20 lg:w-20"
                aria-hidden="true"
              >
                <svg
                  className="h-8 w-8 lg:h-10 lg:w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A54A6"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {e.icon}
                </svg>
              </span>
              {/* 설명 두 줄(진한 글자) → 효과(진한 보라, 크게 굵게) */}
              <p className="m-0 flex flex-col items-center text-[14px] leading-[1.45] font-semibold break-keep text-[#1F1F1F] lg:text-[16px]">
                <span>{e.lines[0]}</span>
                <span>{e.lines[1]}</span>
                <strong className="mt-1.5 text-[16px] font-extrabold text-[#45366F] lg:mt-2 lg:text-[19px]">{e.strong}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
