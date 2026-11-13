export default function HeroSection() {
  return (
    <section className="bg-[#FFF4EC]" aria-labelledby="se-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 py-8">
        <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-[#C2410C]">
          <span className="h-2 w-2 rounded-[50%] bg-[#E53935]" aria-hidden="true" />
          LIVE · Zoom 실시간
        </span>
        <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[40px]" id="se-h">
          집에서 편하게 듣는
          <br />
          {"한우리 선생님 "}
          <span className="text-[#D94E0F]">온라인 설명회</span>
        </h1>
        <p className="m-0 text-[15px] leading-[1.7] text-[#4A4A4A]">
          독서지도사의 하루, 자격 취득 과정, 활동 방식까지 40분 안에 모두 알려드립니다.
        </p>
      </div>
    </section>
  );
}
