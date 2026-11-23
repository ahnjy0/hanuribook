import SectionTitle from "./SectionTitle";

/**
 * 중등(소크라테스) 프로그램의 특징: 3가지를 아이콘 카드로
 * 카드 = 흰 바탕 + 연보라 동그라미 안 아이콘(중등 보라 선) + 번호 + 특징 문구(굵게)
 * 모바일: 아이콘 왼쪽·글 오른쪽(가로) / 태블릿 이상: 3열, 가운데 정렬(세로)
 */
const ACCENT = "#6A54A6";
const SOFT = "#F3F0FA";

const ITEMS: { text: string; icon: React.ReactNode }[] = [
  {
    text: "문학 · 비문학 독해로 내신 및 수능 대비",
    // 펼친 책
    icon: (
      <>
        <path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z" />
        <path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    text: "추론적 · 대안적 · 비판적 · 통합적 사고력 향상",
    // 생각 지도(가운데 생각에서 네 갈래로 뻗음 — 네 가지 사고력)
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
    text: "서술 · 논술 · 구술, 수행평가 등 실전 연습",
    // 글 쓰는 연필 + 원고
    icon: (
      <>
        <path d="M4 20h7" />
        <path d="M14.5 4.5l5 5L10 19H5v-5z" />
        <path d="M12.5 6.5l5 5" />
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="mt-12 bg-[#F7F5FC] px-0 py-10 lg:mt-24 lg:pt-16 lg:pb-20" aria-labelledby="m-feat">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 lg:gap-7">
        {/* 제목: 과정 안내와 같은 모양(왼쪽 정렬 + 보라 타일 아이콘 — 별) */}
        <SectionTitle
          id="m-feat"
          icon={<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />}
        >
          프로그램 특징
        </SectionTitle>
        <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3 lg:gap-5">
          {ITEMS.map((it, i) => (
            <li
              key={it.text}
              className="flex flex-row items-center gap-4 rounded-[20px] bg-white px-5 py-5 shadow-[0_6px_16px_rgba(75,46,131,0.06)] md:flex-col md:gap-4 md:px-6 md:py-8 md:text-center lg:rounded-[24px] lg:py-10"
            >
              <span
                className="flex h-16 w-16 flex-none items-center justify-center rounded-full lg:h-24 lg:w-24"
                style={{ background: SOFT }}
                aria-hidden="true"
              >
                <svg
                  className="h-8 w-8 lg:h-11 lg:w-11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {it.icon}
                </svg>
              </span>
              <div className="flex flex-col gap-1 md:items-center lg:gap-2">
                <span className="text-[13px] font-extrabold tracking-[0.04em] lg:text-[15px]" style={{ color: ACCENT }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong className="text-[17px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">
                  {it.text}
                </strong>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
