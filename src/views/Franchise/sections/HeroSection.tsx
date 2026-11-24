/** 타이틀 영역: 온라인 설명회 · 수업상담처럼 흰 띠(본문은 연한 살구색 바탕) — 왼쪽 정렬 큰 제목 + 설명글 */
export default function HeroSection() {
  return (
    <section className="bg-white" aria-labelledby="f-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-8 pb-6 lg:pt-12 lg:pb-8">
        <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[36px]" id="f-h">
          독서로 삶을 가꾸어가는 <span className="text-[#D94E0F]">아름다운 동행</span>
        </h1>
        <p className="m-0 text-[15px] leading-[1.6] break-keep text-[#333333]">한우리는 항상 최고를 지향합니다</p>
      </div>
    </section>
  );
}
