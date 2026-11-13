export default function BenefitsSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11"
      aria-labelledby="ts-ben"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="ts-ben">
        특별반만의 혜택
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="flex gap-3.5 rounded-[20px] border border-[#EEEEEE] bg-white p-5">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-[#FFF1E7]">
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D94E0F"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </span>
          <div>
            <strong className="text-[16px]">교육 기간 단축</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              경력 인정으로 일반 과정 대비 짧은 기간에 자격을 취득합니다.
            </p>
          </div>
        </div>
        <div className="flex gap-3.5 rounded-[20px] border border-[#EEEEEE] bg-white p-5">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-[#EAF2FF]">
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2F5AA8"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <div>
            <strong className="text-[16px]">우선 센터 배정</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              수료 즉시 희망 지역 센터와 연결해 활동을 시작합니다.
            </p>
          </div>
        </div>
        <div className="flex gap-3.5 rounded-[20px] border border-[#EEEEEE] bg-white p-5">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-[#FFF6DA]">
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B45309"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5z" />
            </svg>
          </span>
          <div>
            <strong className="text-[16px]">수강료 지원</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              특별반 수강생 대상 수강료 지원 혜택을 제공합니다. [지원 조건]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
