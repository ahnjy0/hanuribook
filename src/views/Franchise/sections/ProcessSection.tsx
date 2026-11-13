export default function ProcessSection() {
  return (
    <section className="mt-12 bg-[#FFF7F1] px-0 py-10" aria-labelledby="f-proc">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5">
        <h2 className="m-0 text-center text-[22px] font-extrabold lg:text-[30px]" id="f-proc">
          개설 절차
        </h2>
        <ol className="m-0 grid list-none grid-cols-3 gap-2 p-0 md:grid-cols-6">
          <li className="rounded-[14px] bg-white px-1.5 py-3.5 text-center">
            <span className="block text-[12px] font-bold text-[#C2410C]">01</span>
            <strong className="text-[13px]">개설 문의</strong>
          </li>
          <li className="rounded-[14px] bg-white px-1.5 py-3.5 text-center">
            <span className="block text-[12px] font-bold text-[#C2410C]">02</span>
            <strong className="text-[13px]">사업 설명</strong>
          </li>
          <li className="rounded-[14px] bg-white px-1.5 py-3.5 text-center">
            <span className="block text-[12px] font-bold text-[#C2410C]">03</span>
            <strong className="text-[13px]">상권 분석</strong>
          </li>
          <li className="rounded-[14px] bg-white px-1.5 py-3.5 text-center">
            <span className="block text-[12px] font-bold text-[#C2410C]">04</span>
            <strong className="text-[13px]">계약</strong>
          </li>
          <li className="rounded-[14px] bg-white px-1.5 py-3.5 text-center">
            <span className="block text-[12px] font-bold text-[#C2410C]">05</span>
            <strong className="text-[13px]">교육·세팅</strong>
          </li>
          <li className="rounded-[14px] bg-[#F26522] px-1.5 py-3.5 text-center text-white">
            <span className="block text-[12px] font-bold text-[#FFE6D5]">06</span>
            <strong className="text-[13px]">오픈</strong>
          </li>
        </ol>
      </div>
    </section>
  );
}
