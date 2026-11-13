export default function CardSection() {
  return (
    <section className="bg-[#E8590C] px-5 py-8" aria-labelledby="t-card">
      <div className="mx-auto my-0 flex max-w-[520px] flex-col overflow-hidden rounded-[28px] bg-[#FAF8F5]">
        <div className="flex flex-col items-center gap-3.5 px-5 pt-8 pb-5 text-center">
          <h2 className="m-0 text-[21px] leading-[1.45] font-bold text-[#1F1F1F] lg:text-[24px]" id="t-card">
            이해를 여는 질문과
            <br />
            따뜻한 격려로
            <br />
            <span className="font-extrabold text-[#E8590C]">진심을 다해 지도하는</span>
          </h2>
          <p className="m-0 px-1.5 pt-0 pb-0.5 text-[15px] font-bold underline decoration-[#FFD84D] decoration-[6px] underline-offset-[-2px] [text-decoration-skip-ink:none]">
            {"한우리 "}
            <span className="text-[#E8590C]">김수라</span>
            {" 선생님"}
          </p>
        </div>
        <div className="flex h-75 items-center justify-center bg-[#EFE9E1] text-center text-[13px] leading-[1.6] text-[#6B5A48]">
          [사진] 교재를 펼쳐 설명하는
          <br />
          한우리 선생님 수업 모습
        </div>
      </div>
    </section>
  );
}
