/** 타이틀 영역: 수업상담 페이지처럼 흰 띠(본문은 연한 살구색 바탕) — 왼쪽 정렬 큰 제목 + 설명글 */
export default function HeroSection() {
  return (
    <section className="bg-white" aria-labelledby="se-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-8 pb-6 lg:pt-12 lg:pb-8">
        <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[36px]" id="se-h">
          한우리 지도교사의 <span className="text-[#D94E0F]">모든 것!</span>
        </h1>
        <p className="m-0 text-[15px] leading-[1.6] break-keep text-[#333333]">온라인 설명회에서 알려드리겠습니다!</p>
      </div>
    </section>
  );
}
