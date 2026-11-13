export default function GreetingSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[760px] flex-col items-center gap-4.5 px-5 py-12 text-center"
      aria-labelledby="t-hi"
    >
      <span
        className="h-10 font-[family-name:Georgia,serif] text-[72px] leading-[0.6] font-black text-[#E8590C]"
        aria-hidden="true"
      >
        “
      </span>
      <span className="h-7 w-0.25 bg-[#F2A27A]" aria-hidden="true" />
      <h1 className="m-0 flex flex-col gap-2.5" id="t-hi">
        <span className="text-[17px] font-medium text-[#333333]">안녕하세요,</span>
        <span className="text-[19px] font-medium text-[#333333] lg:text-[24px]">
          {"저는 "}
          <strong className="font-extrabold text-[#E8590C]">아이와 마음</strong>을 나누는
        </span>
        <span className="text-[28px] font-extrabold text-[#1F1F1F] lg:text-[34px]">
          <span className="text-[#E8590C]">한우리 선생님</span>입니다.
        </span>
      </h1>
      <span className="h-7 w-0.25 bg-[#F2A27A]" aria-hidden="true" />
      <span
        className="h-10 font-[family-name:Georgia,serif] text-[72px] leading-[0.6] font-black text-[#E8590C]"
        aria-hidden="true"
      >
        ”
      </span>
    </section>
  );
}
