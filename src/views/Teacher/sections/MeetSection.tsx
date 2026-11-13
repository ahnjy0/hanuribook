import Link from "next/link";

export default function MeetSection() {
  return (
    <section className="pb-12" aria-labelledby="t-meet">
      <div className="relative flex h-75 flex-col items-center justify-center gap-4 bg-[#F08A4B] text-center text-white">
        <span className="absolute top-2.5 left-3 text-[11px] text-[rgba(255,255,255,0.85)]">
          [배경 사진] 활짝 웃는 아이들
        </span>
        <h2 className="m-0 text-[26px] leading-[1.45] font-extrabold lg:text-[34px]" id="t-meet">
          우리 동네
          <br />
          <span className="text-[#FFE45C]">한우리 선생님</span>을<br />
          만나고 싶다면?
        </h2>
        <svg
          aria-hidden="true"
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 4 7 6 7-6M4 11l7 6 7-6M4 18l7 6 7-6" />
        </svg>
      </div>
      <div className="mx-auto my-0 box-border grid max-w-[760px] grid-cols-3 gap-2 px-5 pt-7">
        <Link
          className="box-border flex h-13 items-center justify-center gap-1.5 rounded-[12px] border-[1.5px] border-[#F26522] bg-white text-[15px] font-bold whitespace-nowrap text-[#C2410C] no-underline"
          href="/centers"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          센터찾기
        </Link>
        <Link
          className="flex h-13 items-center justify-center gap-1.5 rounded-[12px] bg-[#F26522] text-[15px] font-bold whitespace-nowrap text-white no-underline"
          href="/consult"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          수업상담
        </Link>
        <Link
          className="flex h-13 items-center justify-center gap-1.5 rounded-[12px] bg-[#1E3A5F] text-[15px] font-bold whitespace-nowrap text-white no-underline"
          href="/consult"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
            <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
          </svg>
          몰입독서
        </Link>
      </div>
    </section>
  );
}
