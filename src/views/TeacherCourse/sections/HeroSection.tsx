import SectionLabel from "@/components/common/SectionLabel";

/**
 * 히어로: 프로그램 소개 페이지 첫 섹션과 같은 모양
 * 연한 살구색 배경 + 아래 둥근 모서리, 흰 라운드 라벨 → 제목(안내 문구는 본문 '과정 안내' 제목 아래)
 */
export default function HeroSection() {
  return (
    <section className="rounded-t-none rounded-b-[32px] bg-[#FFEDE0] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20" aria-labelledby="tc-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-2 px-5 text-center lg:gap-3">
        <SectionLabel color="#C2410C" bg="#FFFFFF">
          한우리 지도교사가 되기 위한 필수 코스
        </SectionLabel>
        <h1 className="m-0 text-[28px] font-extrabold text-[#1F1F1F] lg:text-[40px]" id="tc-h">
          지도교사 입문과정
        </h1>
      </div>
    </section>
  );
}
