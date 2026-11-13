export default function CurriculumSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11"
      aria-labelledby="ts-cur"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="ts-cur">
        교육 과정
      </h2>
      <ol className="m-0 flex list-none flex-col gap-0 p-0">
        <li className="flex gap-3.5 pb-4.5">
          <div className="flex flex-col items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#F26522] text-[14px] font-extrabold text-white">
              1
            </span>
            <span className="mt-1 w-0.5 flex-auto bg-[#FBE7DA]" aria-hidden="true" />
          </div>
          <div>
            <strong className="text-[16px]">독서교육 이론</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              아동 발달과 독서 단계, 한우리 교수법의 이해
            </p>
          </div>
        </li>
        <li className="flex gap-3.5 pb-4.5">
          <div className="flex flex-col items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#F26522] text-[14px] font-extrabold text-white">
              2
            </span>
            <span className="mt-1 w-0.5 flex-auto bg-[#FBE7DA]" aria-hidden="true" />
          </div>
          <div>
            <strong className="text-[16px]">발문·토론 실습</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              학년별 필독서로 발문 설계와 토론 진행 실습
            </p>
          </div>
        </li>
        <li className="flex gap-3.5 pb-4.5">
          <div className="flex flex-col items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#F26522] text-[14px] font-extrabold text-white">
              3
            </span>
            <span className="mt-1 w-0.5 flex-auto bg-[#FBE7DA]" aria-hidden="true" />
          </div>
          <div>
            <strong className="text-[16px]">글쓰기 첨삭 훈련</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              갈래별 글쓰기 평가 기준과 첨삭 실무
            </p>
          </div>
        </li>
        <li className="flex gap-3.5">
          <div className="flex flex-col items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#1E3A5F] text-[14px] font-extrabold text-white">
              4
            </span>
          </div>
          <div>
            <strong className="text-[16px]">시연 평가 · 자격 취득</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              실기 시연 평가 통과 후 독서지도사 자격 취득 및 센터 연계
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
