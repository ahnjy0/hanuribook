import SectionTitle from "./SectionTitle";

/**
 * 중등(소크라테스) 프로그램 특징: 영역별 4가지 — 문학 · IB 탐구 · 비문학 · 사회
 * 카드 = 흰 바탕 + 위: 연보라 사각 아이콘 · 영역 알약 / 가운데: 키우는 사고력(보라 굵은 제목) / 아래: 설명
 * 모바일 1열, 데스크톱 2열(2×2). 설명이 길어 왼쪽 정렬
 * ※ 영역(area) · 제목(title)은 각 설명 문구 안의 말(문학 독해, IB, 비문학 독해, 사회 현상 / ○○적 사고력)에서 뽑음
 */
const ACCENT = "#6A54A6";
const SOFT = "#F3F0FA";

const ITEMS: { area: string; title: string; text: string; icon: React.ReactNode }[] = [
  {
    area: "문학",
    title: "추론적 사고력",
    text: "문학 독해의 기본 원리부터 심화, 융합까지 체계적으로 익힙니다. 이를 토대로 중학생 필독 단편소설을 분석 · 감상하며 추론적 사고력을 키웁니다. 어떤 문학 지문에도 자신 있는 탄탄한 독해력을 키웁니다.",
    // 펼친 책
    icon: (
      <>
        <path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z" />
        <path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    area: "IB 탐구 · 논술",
    title: "대안적 사고력",
    text: "IB(국제 바칼로레아) 교육 방향을 ‘독서-토론-논술’의 기본 교육법을 기반으로 하는 한우리 중등 프로그램에 접목하여 깊이 있는 지식 탐구 활동을 합니다. 교과서와 관련된 배경지식을 확장하고 체계적인 탐구 과정을 거쳐, 탐구 질문에 대한 나만의 해결 방안을 도출하며, 논술 실력과 대안적 사고력을 키웁니다.",
    // 지구본(국제 바칼로레아)
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
      </>
    ),
  },
  {
    area: "비문학",
    title: "비판적 사고력",
    text: "비문학 독해의 기본 원리부터 심화, 융합까지 체계적으로 익힙니다. 인문 · 사회 · 과학 등 다양한 계열의 독서를 통해 습득한 지식과 정보를 탐구 질문 해결에 활용하며 비판적 사고력을 기릅니다. 서 · 논술형 글쓰기, 수행평가 활동을 하며 학교 평가에도 대비합니다.",
    // 돋보기(지식 · 정보를 따져 읽기)
    icon: <path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM15.5 15.5L20 20" />,
  },
  {
    area: "사회",
    title: "통합적 사고력",
    text: "사회의 복잡한 사회 현상을 다양한 자료를 토대로 파악하고, 다각적으로 이해하며 통합적 사고력을 기릅니다. 토의 · 토론, 논 · 구술을 통해 지속가능한 해결책을 마련합니다.",
    // 생각 지도(가운데에서 네 갈래 — 여러 관점을 하나로)
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
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-2 lg:gap-5">
          {ITEMS.map((it) => (
            <li
              key={it.title}
              className="flex flex-col gap-3 rounded-[20px] bg-white px-5 py-6 shadow-[0_6px_16px_rgba(75,46,131,0.06)] lg:gap-4 lg:rounded-[24px] lg:px-8 lg:py-8"
            >
              {/* 머리: 아이콘 타일 + 영역 알약 */}
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] lg:h-14 lg:w-14 lg:rounded-[16px]"
                  style={{ background: SOFT }}
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6 lg:h-7 lg:w-7"
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
                <div className="flex min-w-0 flex-col gap-1">
                  <span
                    className="self-start rounded-full px-2.5 py-0.5 text-[12px] leading-[1.5] font-bold lg:text-[13px]"
                    style={{ background: SOFT, color: ACCENT }}
                  >
                    {it.area}
                  </span>
                  <strong className="text-[18px] leading-[1.35] font-extrabold break-keep lg:text-[22px]" style={{ color: ACCENT }}>
                    {it.title}
                  </strong>
                </div>
              </div>
              <p className="m-0 text-[14px] leading-[1.7] break-keep text-[#444444] lg:text-[16px]">{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
