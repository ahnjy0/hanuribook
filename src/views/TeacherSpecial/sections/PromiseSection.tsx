/** 약속 문구: 흰 바탕 위 옅은 초록 · 주황 번짐(장식) + '30년 독서교육의 노하우를 담아' */
export default function PromiseSection() {
  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-16 text-center lg:py-24"
      aria-labelledby="ts-promise"
    >
      <span className="absolute top-[18%] left-[8%] h-64 w-64 rounded-full bg-[#BFEBD3] opacity-60 blur-[60px] lg:left-[22%]" aria-hidden="true" />
      <span className="absolute right-[6%] bottom-[10%] h-64 w-64 rounded-full bg-[#FFB48A] opacity-60 blur-[60px] lg:right-[22%]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-[720px] flex-col items-center gap-8 lg:gap-10">
        <p className="m-0 text-[16px] leading-[1.7] break-keep text-[#444444] lg:text-[20px]">
          한우리의 교육 과정은
          <br />
          결코 쉬운 과정은 아니지만,
        </p>
        <h2 className="m-0 text-[30px] leading-[1.35] font-extrabold break-keep text-[#4A3A2E] lg:text-[44px]" id="ts-promise">
          30년 독서교육의
          <br />
          <span className="text-[#F26522]">노하우를 담아</span>
        </h2>
        <p className="m-0 text-[16px] leading-[1.7] break-keep text-[#444444] lg:text-[20px]">
          모든 수강생이 독서교육자로서
          <br />
          제대로, 오래 활동하실 수 있게 만들어 드리겠습니다.
        </p>
      </div>
    </section>
  );
}
