import HistoryChart from "./HistoryChart";

export default function HistorySection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-14" aria-labelledby="hist-title">
      <div className="flex flex-col gap-6 rounded-[28px] bg-[#1E1E1E] px-6 py-9 text-white lg:p-14">
        <div className="reveal flex flex-col gap-2.5 text-center">
          <p className="m-0 text-[15px] leading-[1.6] text-[#D6D6D6]">
            다른 무엇도 아닌 우리 아이들의 교육이기에,
            <br />
            빠른 길이 아닌 바른 길을 가며
          </p>
          <h2 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[34px]" id="hist-title">
            <span className="text-[#FF8A4F]">35년간</span>
            <br />
            올곧은 교육 철학을 지켜왔습니다
          </h2>
        </div>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[340px_minmax(0,1fr)] lg:items-stretch">
          <dl className="m-0 grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-3">
            <div className="reveal rounded-[14px] bg-[#2B2B2B] px-1 py-3 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-start max-lg:text-center lg:rounded-[18px] lg:p-4.5">
              <dt className="text-[11px] text-[#C9C9C9] max-lg:flex max-lg:min-h-[2.7em] max-lg:items-center max-lg:justify-center max-lg:leading-[1.35] max-lg:break-keep lg:text-[13px]">
                전국 센터 수
              </dt>
              <dd className="mx-0 mt-1.5 mb-0 text-[17px] font-extrabold text-[#FF8A4F] max-lg:leading-[1.2] max-lg:tracking-[-0.03em] max-lg:whitespace-nowrap lg:mx-0 lg:mt-1.5 lg:mb-0 lg:text-[34px]">
                600개+
              </dd>
            </div>
            <div className="reveal rounded-[14px] bg-[#2B2B2B] px-1 py-3 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-start max-lg:text-center lg:rounded-[18px] lg:p-4.5">
              <dt className="text-[11px] text-[#C9C9C9] max-lg:flex max-lg:min-h-[2.7em] max-lg:items-center max-lg:justify-center max-lg:leading-[1.35] max-lg:break-keep lg:text-[13px]">
                전국 교사 수
              </dt>
              <dd className="mx-0 mt-1.5 mb-0 text-[17px] font-extrabold text-[#FF8A4F] max-lg:leading-[1.2] max-lg:tracking-[-0.03em] max-lg:whitespace-nowrap lg:mx-0 lg:mt-1.5 lg:mb-0 lg:text-[34px]">
                4,500명+
              </dd>
            </div>
            <div className="reveal rounded-[14px] bg-[#2B2B2B] px-1 py-3 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-start max-lg:text-center lg:rounded-[18px] lg:p-4.5">
              <dt className="text-[11px] text-[#C9C9C9] max-lg:flex max-lg:min-h-[2.7em] max-lg:items-center max-lg:justify-center max-lg:leading-[1.35] max-lg:break-keep lg:text-[13px]">
                한우리 회원 누적 회원 수
              </dt>
              <dd className="mx-0 mt-1.5 mb-0 text-[17px] font-extrabold text-[#FF8A4F] max-lg:leading-[1.2] max-lg:tracking-[-0.03em] max-lg:whitespace-nowrap lg:mx-0 lg:mt-1.5 lg:mb-0 lg:text-[34px]">
                2,000만+
              </dd>
            </div>
          </dl>
          <div className="reveal flex flex-col gap-2 rounded-[20px] bg-[#2B2B2B] px-4 pt-5 pb-3.5 max-lg:-order-1 lg:justify-center lg:p-7">
            <HistoryChart />
            <p className="m-0 text-right text-[12px] text-[#A3A3A3]">* 2024년 12월 기준</p>
          </div>
        </div>
        <p className="reveal mx-0 mt-2 mb-0 hidden text-center text-[28px] leading-[1.3] font-extrabold tracking-[-0.04em] text-white lg:block">
          <span className="mb-2 block text-[18px] font-medium tracking-[-0.02em] text-[#D6D6D6]">
            확고한 교육 철학으로 만든 따라올 수 없는 차이
          </span>
          {"이제 "}
          <span className="text-[#FF8A4F]">한우리</span>와 함께하세요
        </p>
      </div>
    </section>
  );
}
