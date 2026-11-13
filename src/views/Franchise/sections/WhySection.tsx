export default function WhySection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11"
      aria-labelledby="f-why"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="f-why">
        왜 한우리 센터인가요?
      </h2>
      <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
        <li className="flex flex-col gap-2 rounded-[18px] border border-[#EEEEEE] bg-white px-3.5 py-4.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#FFF1E7]">
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D94E0F"
              strokeWidth="2"
            >
              <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
              <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          <strong className="text-[15px]">검증된 커리큘럼</strong>
          <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">유아~고등 전 학년 매월 교재 제공</span>
        </li>
        <li className="flex flex-col gap-2 rounded-[18px] border border-[#EEEEEE] bg-white px-3.5 py-4.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EAF2FF]">
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2F5AA8"
              strokeWidth="2"
            >
              <circle cx="9" cy="8" r="4" />
              <path d="M2 21c0-4 3-6 7-6s7 2 7 6M17 11a3 3 0 1 0 0-6M22 21c0-3-2-5-5-5.5" />
            </svg>
          </span>
          <strong className="text-[15px]">교사 채용 지원</strong>
          <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">양성 과정 수료 교사 우선 연계</span>
        </li>
        <li className="flex flex-col gap-2 rounded-[18px] border border-[#EEEEEE] bg-white px-3.5 py-4.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#FFF6DA]">
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B45309"
              strokeWidth="2"
            >
              <path d="M3 3v18h18" />
              <path d="m7 15 4-4 3 3 5-6" />
            </svg>
          </span>
          <strong className="text-[15px]">마케팅 지원</strong>
          <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">온라인 상담 신청 지역 배정</span>
        </li>
        <li className="flex flex-col gap-2 rounded-[18px] border border-[#EEEEEE] bg-white px-3.5 py-4.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#E8F5EE]">
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1F7A4C"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M7 9h10M7 13h6" />
            </svg>
          </span>
          <strong className="text-[15px]">운영 시스템</strong>
          <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">회원·수업 관리 통합 플랫폼</span>
        </li>
      </ul>
    </section>
  );
}
