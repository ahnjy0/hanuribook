export default function RecommendSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11"
      aria-labelledby="ts-who"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="ts-who">
        이런 분께 추천해요
      </h2>
      <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
        <li className="flex flex-col gap-2 rounded-[18px] bg-[#F7F7F8] px-3.5 py-4.5">
          <span className="text-[22px] font-extrabold text-[#F26522]">01</span>
          <strong className="text-[15px] leading-[1.4]">
            전·현직
            <br />
            초중등 교사
          </strong>
        </li>
        <li className="flex flex-col gap-2 rounded-[18px] bg-[#F7F7F8] px-3.5 py-4.5">
          <span className="text-[22px] font-extrabold text-[#F26522]">02</span>
          <strong className="text-[15px] leading-[1.4]">
            학원·공부방
            <br />
            강사 경력자
          </strong>
        </li>
        <li className="flex flex-col gap-2 rounded-[18px] bg-[#F7F7F8] px-3.5 py-4.5">
          <span className="text-[22px] font-extrabold text-[#F26522]">03</span>
          <strong className="text-[15px] leading-[1.4]">
            국어·문예창작
            <br />
            관련 전공자
          </strong>
        </li>
        <li className="flex flex-col gap-2 rounded-[18px] bg-[#F7F7F8] px-3.5 py-4.5">
          <span className="text-[22px] font-extrabold text-[#F26522]">04</span>
          <strong className="text-[15px] leading-[1.4]">
            경력 단절 후<br />
            재도전하는 분
          </strong>
        </li>
      </ul>
    </section>
  );
}
