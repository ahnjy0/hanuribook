export default function IntroSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-2 px-5 pt-7 lg:gap-3 lg:pt-16"
      aria-labelledby="a-h"
    >
      <h1 className="m-0 text-[24px] leading-[1.35] font-extrabold lg:text-[30px]" id="a-h">
        정규 수업에 더하는
        <br />
        교과 배경지식 심화 과정
      </h1>
      <p className="m-0 text-[14px] leading-[1.7] text-[#4A4A4A]">
        과학·역사·지리 분야의 책을 깊이 읽고 탐구하며, 교과서 너머의 배경지식과 융합적 사고력을 키웁니다.
      </p>
    </section>
  );
}
