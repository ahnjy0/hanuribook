import SectionLabel from "@/components/common/SectionLabel";
import type { AdvancedCourse, FeatureIcon } from "../advancedData";

/** 특징 아이콘(강조색 선) */
const ICONS: Record<FeatureIcon, React.ReactNode> = {
  // 책 + 반짝임
  book: (
    <svg viewBox="0 0 24 24">
      <path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z" />
      <path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" />
      <path d="M18 1.5v3M16.5 3h3" />
    </svg>
  ),
  // 생각 지도(마인드맵)
  mindmap: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <circle cx="4.5" cy="5" r="2" />
      <circle cx="19.5" cy="5" r="2" />
      <circle cx="4.5" cy="19" r="2" />
      <circle cx="19.5" cy="19" r="2" />
      <path d="M6 6.4 9.8 9.9M18 6.4l-3.8 3.5M6 17.6l3.8-3.5M18 17.6l-3.8-3.5" />
    </svg>
  ),
  // 돋보기
  search: (
    <svg viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5.5 5.5" />
      <path d="M8 10.5h5M10.5 8v5" />
    </svg>
  ),
  // 연표(시간 흐름)
  timeline: (
    <svg viewBox="0 0 24 24">
      <path d="M2 12h20" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 10V5h4M12 14v5h4M18 10V5h-3" />
    </svg>
  ),
  // 말풍선(토론)
  chat: (
    <svg viewBox="0 0 24 24">
      <path d="M3 5h12v8H8l-3 3v-3H3z" />
      <path d="M15 9h6v8h-2v3l-3-3h-5v-4" />
    </svg>
  ),
  // 지구본
  globe: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
    </svg>
  ),
  // 접힌 지도 + 위치
  map: (
    <svg viewBox="0 0 24 24">
      <path d="M2 6l6-2 8 2 6-2v14l-6 2-8-2-6 2z" />
      <path d="M8 4v14M16 6v14" />
    </svg>
  ),
};

/**
 * 프로그램 특징: 특징 3개를 카드로 나눠 각각 아이콘과 함께 표시.
 * 카드 = 연한 과정색 배경 + 흰 동그라미 안 아이콘 + 번호 + 특징 문구(가운데 정렬)
 */
export default function FeaturesSection({ d }: { d: AdvancedCourse }) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="s-feat"
    >
      <div className="text-center">
        <SectionLabel color={d.accent} bg={d.soft}>
          프로그램 특징
        </SectionLabel>
        {d.featTitle ? (
          <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="s-feat">
            {/* 모바일·태블릿: 두 줄 / 데스크톱: 한 줄 */}
            {d.featTitle[0]}
            {d.featTitle[1] && (
              <>
                {/* 둘째 줄: 과정 주요 색 */}
                <br className="lg:hidden" /> <span style={{ color: d.accent }}>{d.featTitle[1]}</span>
              </>
            )}
          </h2>
        ) : (
          // 제목이 없는 과정(예: 과학탐탐): 화면에는 라벨만, 화면 읽기 프로그램용 제목은 숨겨서 유지
          <h2 className="sr-only" id="s-feat">
            프로그램 특징
          </h2>
        )}
      </div>
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3 lg:gap-5">
        {d.features.map((f, i) => (
          <li
            key={f.text}
            className="flex animate-card-rise flex-row items-center gap-4 rounded-[20px] px-5 py-5 motion-reduce:animate-none md:flex-col md:gap-4 md:px-6 md:py-8 md:text-center lg:rounded-[24px] lg:py-10"
            style={{ background: d.soft, animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
          >
            <span
              className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white [&_svg]:h-8 [&_svg]:w-8 lg:h-24 lg:w-24 lg:[&_svg]:h-11 lg:[&_svg]:w-11"
              style={{
                // 그림자: 과정 강조색을 옅게(약 14%)
                boxShadow: `0 8px 18px ${d.accent}24`,
                stroke: d.accent,
                fill: "none",
                strokeWidth: 1.8,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
              aria-hidden="true"
            >
              {ICONS[f.icon]}
            </span>
            <div className="flex flex-col gap-1 md:items-center lg:gap-2">
              <span className="text-[13px] font-extrabold tracking-[0.04em] lg:text-[15px]" style={{ color: d.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* 보조 문구(있을 때): 작고 보통 굵기의 회색 → 아래 핵심 문구를 강조 */}
              {f.sub && (
                <span className="text-[14px] leading-[1.45] font-medium break-keep text-[#555555] lg:text-[16px]">{f.sub}</span>
              )}
              <strong className="text-[17px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">
                {f.text}
              </strong>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
