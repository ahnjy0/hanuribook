export default function HeroSection() {
  return (
    <section className="rounded-t-none rounded-b-[32px] bg-[#F26522] text-white" aria-labelledby="f-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 py-9">
        <span className="self-start rounded-full bg-[rgba(255,255,255,0.2)] px-3 py-1.5 text-[13px] font-bold">
          한우리 러닝센터 · 지부 모집
        </span>
        <h1 className="m-0 text-[30px] leading-[1.3] font-extrabold lg:text-[42px]" id="f-h">
          35년 독서교육 브랜드와
          <br />
          우리 동네 교육을 함께 만듭니다
        </h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#FFF3EA]">
          검증된 커리큘럼, 전국 교사 네트워크, 본사 운영 지원으로 안정적인 교육 사업을 시작하세요.
        </p>
        <dl className="mx-0 mt-1.5 mb-0 grid grid-cols-3 gap-2">
          <div className="rounded-[14px] bg-[rgba(255,255,255,0.16)] px-1.5 py-3.5 text-center">
            <dt className="text-[12px] text-[#FFE6D5]">전국 센터</dt>
            <dd className="mx-0 mt-1 mb-0 text-[20px] font-extrabold">600개+</dd>
          </div>
          <div className="rounded-[14px] bg-[rgba(255,255,255,0.16)] px-1.5 py-3.5 text-center">
            <dt className="text-[12px] text-[#FFE6D5]">전국 교사</dt>
            <dd className="mx-0 mt-1 mb-0 text-[20px] font-extrabold">4,500명+</dd>
          </div>
          <div className="rounded-[14px] bg-[rgba(255,255,255,0.16)] px-1.5 py-3.5 text-center">
            <dt className="text-[12px] text-[#FFE6D5]">교육 역사</dt>
            <dd className="mx-0 mt-1 mb-0 text-[20px] font-extrabold">35년</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
