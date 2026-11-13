export default function FeaturesSection() {
  return (
    <section className="mt-12 bg-[#FFF7F1] px-0 py-10 lg:mt-24 lg:pt-16 lg:pb-20" aria-labelledby="m-feat">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 lg:gap-7">
        <h2 className="m-0 text-center text-[22px] font-extrabold lg:text-[30px]" id="m-feat">
          중고등 수업의 특징
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-[20px] bg-white p-5">
            <span className="text-[28px] font-extrabold text-[#F26522]">01</span>
            <strong className="text-[16px]">교과 연계 필독서</strong>
            <p className="m-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              학년별 국어·사회·과학 교과와 연계된 도서를 매월 선정합니다.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-[20px] bg-white p-5">
            <span className="text-[28px] font-extrabold text-[#F26522]">02</span>
            <strong className="text-[16px]">내신 서술형 대비</strong>
            <p className="m-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              최신 서술형·수행평가 유형으로 근거 있는 답안 쓰기를 훈련합니다.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-[20px] bg-white p-5">
            <span className="text-[28px] font-extrabold text-[#F26522]">03</span>
            <strong className="text-[16px]">1:1 첨삭 피드백</strong>
            <p className="m-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              매 차시 쓴 글을 선생님이 꼼꼼히 첨삭하여 돌려드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
