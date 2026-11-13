export default function HeroSection() {
  return (
    <section className="rounded-t-none rounded-b-[32px] bg-[#1E3A5F] text-white" aria-labelledby="ts-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 py-9">
        <span className="self-start rounded-full bg-[#F26522] px-3 py-1.5 text-[13px] font-bold">
          교육 경력자 전용 집중 과정
        </span>
        <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[40px]" id="ts-h">
          가르쳐 본 경험이 있다면,
          <br />
          <span className="text-[#FFB089]">더 빠르게</span>
          {" 한우리 선생님으로"}
        </h1>
        <p className="m-0 text-[14px] leading-[1.7] text-[#D3DEEC]">
          교사·강사 경력을 인정받아 단기간에 독서지도사 자격을 취득하고 바로 활동을 시작하는 특별 양성
          과정입니다.
        </p>
        <div className="grid grid-cols-3 gap-2 pt-1.5">
          <div className="rounded-[14px] bg-[rgba(255,255,255,0.1)] px-1.5 py-3 text-center">
            <span className="text-[12px] text-[#B9CBE4]">교육 기간</span>
            <strong className="mt-0.5 block text-[17px]">[0]주</strong>
          </div>
          <div className="rounded-[14px] bg-[rgba(255,255,255,0.1)] px-1.5 py-3 text-center">
            <span className="text-[12px] text-[#B9CBE4]">수업 방식</span>
            <strong className="mt-0.5 block text-[17px]">온·오프</strong>
          </div>
          <div className="rounded-[14px] bg-[rgba(255,255,255,0.1)] px-1.5 py-3 text-center">
            <span className="text-[12px] text-[#B9CBE4]">모집 인원</span>
            <strong className="mt-0.5 block text-[17px]">[00]명</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
