import TitleIcon from "./TitleIcon";

export default function ResultsSection() {
  return (
    <section className="mt-14 bg-[#FFF7F1] px-0 pt-10 pb-12 lg:mt-24 lg:pt-16 lg:pb-20" aria-labelledby="res-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4.5 px-5 lg:gap-7">
        <div className="flex flex-col gap-3.5 lg:gap-5">
          <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="res-h">
            <TitleIcon kind="results" />
            한우리를 하면 어떤 점이 좋아지나요?
          </h2>
          <p className="m-0 text-[14px] leading-[1.7] text-[#4A4A4A]">
            한우리 효과, 이미 경험한 학부모님들이 말합니다.
          </p>
        </div>
        <div className="flex h-45 items-center justify-center rounded-[20px] bg-[#FFE6D5] text-center text-[13px] text-[#8A5A3C]">
          [이미지] 책상에서 글을 쓰는 아이
        </div>
        <dl className="m-0 grid grid-cols-2 gap-2.5 md:grid-cols-5">
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="text-[13px] text-[#4A4A4A]">독서 습관 형성</dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">97.6%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="text-[13px] text-[#4A4A4A]">학부모 만족도</dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">98.8%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="text-[13px] text-[#4A4A4A]">문해력 향상</dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">99.3%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="text-[13px] text-[#4A4A4A]">학교 공부 자신감</dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">98.8%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="text-[13px] text-[#4A4A4A]">글쓰기 능력 향상</dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">99.3%</dd>
          </div>
        </dl>
        <p className="m-0 text-center text-[12px] text-[#6B6B6B]">
          * 한우리 학부모 만족도 설문 결과 [조사 연도·표본 수 기재]
        </p>
      </div>
    </section>
  );
}
