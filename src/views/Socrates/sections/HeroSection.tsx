import SectionLabel from "@/components/common/SectionLabel";

/**
 * 중고등정규 히어로: 유아정규 히어로와 같은 정렬(가운데 정렬, 라벨 → 제목 → 보조 문구 + 핵심 문구 → 이미지)
 * 색: 중등 페이지 주요 색 부드러운 퍼플 — 배경은 차분한 보라(#45366F, 흰 글자가 잘 읽히는 밝기), 강조는 밝은 보라
 */
export default function HeroSection() {
  return (
    <section
      className="rounded-t-none rounded-b-[32px] bg-[#45366F] px-0 pt-9 pb-10 text-white lg:pt-16 lg:pb-20"
      aria-labelledby="m-h"
    >
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 text-center lg:gap-5">
        {/* 섹션 라벨: 공통 라벨(유아정규·어휘리더 히어로와 같은 모양) */}
        <SectionLabel color="#5B4596" bg="#F3F0FA">
          중등 정규 프로그램
        </SectionLabel>
        {/* 제목: 소크라테스 로고 이미지(흰 글자, 473×110) — 유아정규 히어로처럼 h1 안에 로고, 대체 글로 과정명 */}
        <h1 className="m-0" id="m-h">
          <img
            // 모션: 페이지가 열릴 때 로고가 통통 튀듯 나타남(pop-in)
            className="mx-auto block h-11 w-auto max-w-full animate-pop-in motion-reduce:animate-none lg:h-[68px]"
            src="https://cdn.hanuribook.com/img/hanuribook/middle_logo.png"
            width={473}
            height={110}
            alt="소크라테스"
          />
        </h1>
        {/* 설명글: 보조 문구 + 핵심 문구(크고 굵게) — 유아정규 히어로 설명과 같은 구성 */}
        <p className="mx-0 -mt-1 mb-2 flex flex-col items-center gap-0.5 break-keep lg:gap-1">

          <span className="text-[20px] leading-[1.3] font-extrabold tracking-[-0.02em] text-white lg:text-[26px]">
            중등 내신 대비 <span className="text-[#D6C8FA]">단계별 독해 훈련</span>
          </span>
        </p>
        {/* 교재 표지 이미지(소크라테스 교과독서·심화독서·통합독서, 584×343 투명 PNG)
            모션: 로고 다음에 아래에서 떠오르며 나타남(card-rise, 0.3초 뒤 — 다른 상세 히어로 교재와 같은 순서) */}
        <div className="w-full max-w-[584px] animate-card-rise motion-reduce:animate-none" style={{ animationDelay: "300ms" }}>
          <img
            className="block h-auto w-full"
            src="https://cdn.hanuribook.com/img/hanuribook/middle_book.png"
            width={584}
            height={343}
            alt="소크라테스 교재 표지: 중등 교과독서, 심화독서, 통합독서"
          />
        </div>
      </div>
    </section>
  );
}
