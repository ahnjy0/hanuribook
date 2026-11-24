/** 히어로: '왜 다들 [한우리] 선생님으로 시작할까요?' — '한우리'는 주황 상자 강조 */
export default function HeroSection() {
  return (
    <section
      className="overflow-hidden rounded-t-none rounded-b-[32px] bg-[linear-gradient(160deg,#EAF7F1_0%,#FFFFFF_60%,#FFF4EC_100%)]"
      aria-labelledby="ts-h"
    >
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 pt-12 pb-14 text-center lg:pt-20 lg:pb-24">
        <span className="rounded-full bg-[#5A4636] px-3.5 py-1.5 text-[13px] font-bold text-white lg:text-[15px]">한우리 교사특별반</span>
        <h1 className="m-0 text-[34px] leading-[1.3] font-extrabold tracking-[-0.03em] text-[#2B2B2B] lg:text-[56px]" id="ts-h">
          왜 다들
          <br />
          <span className="mx-1 inline-block rounded-[8px] bg-[#F26522] px-2.5 py-0.5 text-white lg:rounded-[12px] lg:px-4">한우리</span>
          <br />
          선생님으로
          <br className="lg:hidden" /> 시작할까요?
        </h1>
      </div>
    </section>
  );
}
