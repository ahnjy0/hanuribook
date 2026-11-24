export default function HeroSection() {
  return (
    <section className="bg-white" aria-labelledby="c-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-8 pb-6">
        <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[36px]" id="c-h">
          {"우리 아이 "}
          <span className="text-[#D94E0F]">문해력</span>
          <br />
          한우리와 상담하세요!
        </h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#333333]">
          30년 독서 전문 교육 노하우로 아이의 독서력 수준을 진단하고 딱 맞는 커리큘럼을 안내해 드립니다.
        </p>
      </div>
    </section>
  );
}
