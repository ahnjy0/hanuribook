import Link from "next/link";
import { PATHS } from "@/routes";

/**
 * 마지막 배너: 교사특별반 신청 유도 배너와 같은 주황 그라데이션 카드 + 흰 글자, 오른쪽 '수업상담 신청하기' 버튼
 * 모바일: 글 → 버튼 위아래(왼쪽 정렬) / 데스크톱: 글(왼쪽) · 버튼(오른쪽) 한 줄
 */
export default function MeetSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-12 lg:pt-24" aria-labelledby="t-meet">
      <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#F68B3C_0%,#F26522_55%,#E8541E_100%)] px-6 py-8 text-white lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-11">
        <span className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/10 lg:h-64 lg:w-64" aria-hidden="true" />
        <span className="pointer-events-none absolute -bottom-20 left-[35%] h-40 w-40 rounded-full bg-white/10" aria-hidden="true" />
        <div className="relative flex flex-col gap-1.5 lg:gap-2">
          <p className="m-0 text-[15px] font-bold break-keep text-white/85 lg:text-[18px]">수많은 학부모님들의 선택, 한우리독서토론논술의 핵심</p>
          <h2 className="m-0 text-[23px] leading-[1.4] font-extrabold break-keep lg:text-[32px]" id="t-meet">
            우리 동네 한우리 선생님을
            <br className="lg:hidden" /> 만나고 싶다면?
          </h2>
        </div>
        <Link
          className="relative flex h-13 flex-none items-center justify-center gap-1.5 rounded-full bg-white px-7 text-[16px] font-extrabold text-[#C2410C] no-underline shadow-[0_6px_16px_rgba(0,0,0,0.12)] lg:h-14 lg:px-9 lg:text-[17px]"
          href={PATHS.Consult}
        >
          수업상담 신청하기
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
