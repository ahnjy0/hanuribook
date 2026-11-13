export default function CoursesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11 lg:gap-5 lg:pt-24"
      aria-labelledby="m-course"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="m-course">
        과정 안내
      </h2>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        <article className="flex flex-col gap-3 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
          <span className="self-start rounded-[6px] bg-[#FFF1E7] px-2 py-1 text-[12px] font-bold text-[#C2410C]">
            중1 ~ 중3
          </span>
          <h3 className="m-0 text-[21px] font-extrabold">중등정규</h3>
          <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
            교과서 문학·비문학을 깊이 읽고, 서술형과 수행평가에 강한 글쓰기 실력을 기릅니다.
          </p>
          <ul className="m-0 flex list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] text-[#333333]">
            <li>· 교과서 수록 작품 깊이 읽기</li>
            <li>· 비문학 구조 독해 훈련</li>
            <li>· 서술형·수행평가 실전 쓰기</li>
          </ul>
        </article>
        <article className="flex flex-col gap-3 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
          <span className="self-start rounded-[6px] bg-[#EAF2FF] px-2 py-1 text-[12px] font-bold text-[#2F5AA8]">
            고1 ~ 고2
          </span>
          <h3 className="m-0 text-[21px] font-extrabold">고등정규</h3>
          <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
            수능 독서 영역과 통합 교과 주제를 바탕으로 논리적 사고와 논술·면접 역량을 완성합니다.
          </p>
          <ul className="m-0 flex list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] text-[#333333]">
            <li>· 수능 독서 지문 분석</li>
            <li>· 통합 교과 주제 토론</li>
            <li>· 대입 논술·면접 기초</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
