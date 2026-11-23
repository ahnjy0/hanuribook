import SectionTitle from "@/views/Socrates/sections/SectionTitle";
import { LIT } from "../theme";

/**
 * 고등 문학 프로그램 특징: 흰 바탕(배경 띠 없음) + 옅은 테두리 흰 카드 + 연한 동그라미 아이콘 + 번호
 * 문장이 길어 카드 안은 왼쪽 정렬, 아이콘 왼쪽 · 글 오른쪽(가로). 모바일 1열, 태블릿 이상 2열
 */
const ITEMS: { text: string; icon: React.ReactNode }[] = [
  {
    text: "2022년 개정 교육과정, 수능 및 평가원, 전국연합 기출 데이터를 바탕으로 문학 갈래별 핵심 개념을 학습합니다.",
    // 펼친 책(개념 학습)
    icon: (
      <>
        <path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z" />
        <path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    text: "2022 개정 교육과정 국어과에서 제시한 다양한 문학적 요소를 다루며, 수능과 내신에서 자주 출제되는 문학 작품과 다양한 분야의 비문학 제시문을 통해 추론적 · 비판적 · 창의적 문학 이해력을 높입니다.",
    // 생각 지도(여러 갈래의 사고력)
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="4.5" cy="5" r="2" />
        <circle cx="19.5" cy="5" r="2" />
        <circle cx="4.5" cy="19" r="2" />
        <circle cx="19.5" cy="19" r="2" />
        <path d="M6 6.4 9.8 9.9M18 6.4l-3.8 3.5M6 17.6l3.8-3.5M18 17.6l-3.8-3.5" />
      </>
    ),
  },
  {
    text: "대입 논 · 구술고사에 자주 나오는 주제를 배경지식으로 쌓고, 주요 대학의 기출문제를 해결함으로써 통합적 사고력을 키웁니다.",
    // 말풍선(논 · 구술)
    icon: (
      <>
        <path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.4A8 8 0 1 1 21 12z" />
        <path d="M8.5 10.5h7M8.5 13.5h4.5" />
      </>
    ),
  },
  {
    text: "다양한 문학 작품을 접하고 분석함으로써 국어 문학의 고교 내신, 대입 수능, 논 · 구술고사를 대비합니다.",
    // 과녁(목표 대비)
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    // 배경 띠 없이 흰 바탕: 다른 본문 섹션(수업 내용)과 같은 위 간격
    <section className="px-0 pt-13 lg:pt-24" aria-labelledby="l-feat">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 lg:gap-5">
        <SectionTitle
          id="l-feat"
          color={LIT.accent}
          icon={<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />}
        >
          프로그램 특징
        </SectionTitle>
        <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 lg:gap-5">
          {ITEMS.map((it, i) => (
            <li
              key={i}
              // 흰 바탕 위라 옅은 테두리로 카드 경계를 보이게
              className="flex items-start gap-4 rounded-[20px] border border-solid border-[#E6EAF1] bg-white px-5 py-5 shadow-[0_6px_16px_rgba(30,45,80,0.06)] lg:gap-5 lg:rounded-[24px] lg:px-7 lg:py-7"
            >
              <span
                className="flex h-14 w-14 flex-none items-center justify-center rounded-full lg:h-18 lg:w-18"
                style={{ background: LIT.soft }}
                aria-hidden="true"
              >
                <svg
                  className="h-7 w-7 lg:h-9 lg:w-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={LIT.accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {it.icon}
                </svg>
              </span>
              <div className="flex min-w-0 flex-col gap-1 lg:gap-1.5">
                <span className="text-[13px] font-extrabold tracking-[0.04em] lg:text-[15px]" style={{ color: LIT.accent }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="m-0 text-[15px] leading-[1.6] font-semibold break-keep text-[#1F1F1F] lg:text-[17px]">{it.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
