export default function StepsSection() {
  return (
    <section className="mt-12 bg-[#FFF7F1] px-0 py-10" aria-labelledby="tc-step">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5">
        <h2 className="m-0 text-center text-[22px] font-extrabold lg:text-[30px]" id="tc-step">
          수강부터 활동까지
        </h2>
        <ol className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
          <li className="flex flex-col gap-1.5 rounded-[18px] bg-white px-3 py-4.5 text-center">
            <span className="text-[12px] font-bold text-[#C2410C]">STEP 01</span>
            <strong className="text-[15px]">설명회 참석</strong>
            <span className="text-[12px] text-[#6B6B6B]">온라인 설명회</span>
          </li>
          <li className="flex flex-col gap-1.5 rounded-[18px] bg-white px-3 py-4.5 text-center">
            <span className="text-[12px] font-bold text-[#C2410C]">STEP 02</span>
            <strong className="text-[15px]">입문과정 수강</strong>
            <span className="text-[12px] text-[#6B6B6B]">이론 + 실습</span>
          </li>
          <li className="flex flex-col gap-1.5 rounded-[18px] bg-white px-3 py-4.5 text-center">
            <span className="text-[12px] font-bold text-[#C2410C]">STEP 03</span>
            <strong className="text-[15px]">자격 취득</strong>
            <span className="text-[12px] text-[#6B6B6B]">필기·시연 평가</span>
          </li>
          <li className="flex flex-col gap-1.5 rounded-[18px] bg-white px-3 py-4.5 text-center">
            <span className="text-[12px] font-bold text-[#C2410C]">STEP 04</span>
            <strong className="text-[15px]">센터 활동</strong>
            <span className="text-[12px] text-[#6B6B6B]">전국 네트워크</span>
          </li>
        </ol>
      </div>
    </section>
  );
}
