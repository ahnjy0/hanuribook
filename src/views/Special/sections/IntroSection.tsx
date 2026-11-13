export default function IntroSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-2.5 px-5 pt-7 lg:gap-3 lg:pt-16"
      aria-labelledby="s-h"
    >
      <h1 className="m-0 text-[24px] leading-[1.35] font-extrabold lg:text-[30px]" id="s-h">
        짧고 굵게,
        <br />
        {"필요한 역량만 "}
        <span className="text-[#D94E0F]">단기특강</span>
      </h1>
      <p className="m-0 text-[14px] leading-[1.7] text-[#4A4A4A]">
        방학·학기 중 4~8주 과정으로 한글, 어휘, 독해, 역사, 문학, 통합사회를 집중적으로 완성합니다.
      </p>
    </section>
  );
}
