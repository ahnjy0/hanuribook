// 중고등정규 타이틀 영역: 초등정규 전체(Elementary/sections/IntroSection)와 같은 스타일(두 줄 제목 + 한 줄 설명)
// ※ 문구는 초안 — 확정 문구가 오면 교체
export default function IntroSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-2 px-5 pt-7 lg:gap-3 lg:pt-16"
      aria-labelledby="mh-h"
    >
      <h1 className="m-0 text-[24px] leading-[1.35] font-extrabold lg:text-[30px]" id="mh-h">
        내신부터 수능까지,
        <br />
        중 · 고등 독서토론논술 프로그램
      </h1>
      <p className="m-0 text-[14px] leading-[1.7] text-[#333333]">
        중등 소크라테스부터 고등 문학까지, 원리 이해부터 수능형 지문까지 단계별로 독해력과 논리적 사고력을 완성합니다.
      </p>
    </section>
  );
}
