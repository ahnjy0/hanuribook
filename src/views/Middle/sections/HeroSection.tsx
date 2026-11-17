import SectionLabel from "@/components/common/SectionLabel";

/**
 * 중고등정규 히어로: 유아정규 히어로와 같은 정렬(가운데 정렬, 라벨 → 제목 → 보조 문구 + 핵심 문구 → 이미지)
 * 배경은 기존 어두운 색 유지
 */
export default function HeroSection() {
  return (
    <section
      className="rounded-t-none rounded-b-[32px] bg-[#1F1F1F] px-0 pt-9 pb-10 text-white lg:pt-16 lg:pb-20"
      aria-labelledby="m-h"
    >
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 text-center lg:gap-5">
        {/* 섹션 라벨: 공통 라벨(유아정규·어휘리더 히어로와 같은 모양) */}
        <SectionLabel color="#C2410C" bg="#FFF1E7">
          중등 정규 프로그램
        </SectionLabel>
        <h1 className="m-0 text-[36px] leading-[1.2] font-extrabold tracking-[-0.03em] lg:text-[56px]" id="m-h">
          소크라테스
        </h1>
        {/* 설명글: 보조 문구 + 핵심 문구(크고 굵게) — 유아정규 히어로 설명과 같은 구성 */}
        <p className="mx-0 -mt-1 mb-2 flex flex-col items-center gap-0.5 break-keep lg:gap-1">
          <span className="text-[15px] leading-[1.4] font-semibold text-[#D6D6D6] lg:text-[18px]">
            원리 이해부터 수능형 지문까지
          </span>
          <span className="text-[20px] leading-[1.3] font-extrabold tracking-[-0.02em] text-white lg:text-[26px]">
            단계별 중등 <span className="text-[#FF8A4F]">독해력 완성하기</span>
          </span>
        </p>
        <div className="flex h-42.5 w-full max-w-[720px] items-center justify-center rounded-[20px] border border-dashed border-[#555555] bg-[#2B2B2B] text-[13px] text-[#BDBDBD] lg:h-60">
          [이미지] 토론 수업 중인 중학생들
        </div>
      </div>
    </section>
  );
}
