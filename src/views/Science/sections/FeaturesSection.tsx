import SectionLabel from "@/components/common/SectionLabel";
import { ACCENT, SOFT, FEATURES } from "../scienceData";

/** 특징별 아이콘(강조색 선): 배경지식 확장=책 + 반짝임, 비주얼씽킹=생각 지도(마인드맵), 주제 탐구=돋보기 */
const ICONS = [
  // 과학 기초 배경지식 확장
  <svg key="book" viewBox="0 0 24 24">
    <path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z" />
    <path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" />
    <path d="M18 1.5v3M16.5 3h3" />
  </svg>,
  // 비주얼씽킹을 통한 과학 핵심 개념 및 어휘 이해
  <svg key="map" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <circle cx="4.5" cy="5" r="2" />
    <circle cx="19.5" cy="5" r="2" />
    <circle cx="4.5" cy="19" r="2" />
    <circle cx="19.5" cy="19" r="2" />
    <path d="M6 6.4 9.8 9.9M18 6.4l-3.8 3.5M6 17.6l3.8-3.5M18 17.6l-3.8-3.5" />
  </svg>,
  // 교과 단원별 주제 탐구
  <svg key="search" viewBox="0 0 24 24">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5.5 5.5" />
    <path d="M8 10.5h5M10.5 8v5" />
  </svg>,
];

/**
 * 프로그램 특징: 특징 3개를 카드로 나눠 각각 아이콘과 함께 표시.
 * 카드 = 연한 초록 배경 + 흰 동그라미 안 아이콘 + 번호 + 특징 문구(가운데 정렬)
 */
export default function FeaturesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="s-feat"
    >
      <div className="text-center">
        <SectionLabel color={ACCENT} bg={SOFT}>
          프로그램 특징
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[34px]" id="s-feat">
          {/* 모바일·태블릿: 두 줄 / 데스크톱: 한 줄 */}
          과학 탐구 역량 키워주는
          <br className="lg:hidden" /> 과학 독서 프로그램
        </h2>
      </div>
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3 lg:gap-5">
        {FEATURES.map((f, i) => (
          <li
            key={f}
            className="flex animate-card-rise flex-row items-center gap-4 rounded-[20px] px-5 py-5 motion-reduce:animate-none md:flex-col md:gap-4 md:px-6 md:py-8 md:text-center lg:rounded-[24px] lg:py-10"
            style={{ background: SOFT, animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
          >
            <span
              className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white [&_svg]:h-8 [&_svg]:w-8 lg:h-24 lg:w-24 lg:[&_svg]:h-11 lg:[&_svg]:w-11"
              style={{
                boxShadow: "0 8px 18px rgba(31,122,76,0.14)",
                stroke: ACCENT,
                fill: "none",
                strokeWidth: 1.8,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
              aria-hidden="true"
            >
              {ICONS[i % ICONS.length]}
            </span>
            <div className="flex flex-col gap-1 md:items-center lg:gap-2">
              <span className="text-[13px] font-extrabold tracking-[0.04em] lg:text-[15px]" style={{ color: ACCENT }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <strong className="text-[17px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">
                {f}
              </strong>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
