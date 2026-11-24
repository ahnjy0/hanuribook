import Link from "next/link";
import Title, { Section } from "@/views/TeacherSpecial/sections/Title";

/** 우리 동네 한우리 선생님 만나기: 설명 + 버튼 3개(센터찾기 · 수업상담 · 몰입독서) */
export default function MeetSection() {
  return (
    <div className="pb-16 lg:pb-24">
      <Section id="t-meet">
        <Title id="t-meet" icon="where">
          우리 동네 한우리 선생님을 만나고 싶다면?
        </Title>
        <div className="grid grid-cols-3 gap-2 lg:max-w-[720px] lg:gap-3">
          <Link
            className="box-border flex h-13 items-center justify-center gap-1.5 rounded-[12px] border-[1.5px] border-solid border-[#F26522] bg-white text-[15px] font-bold whitespace-nowrap text-[#C2410C] no-underline"
            href="/centers"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            센터찾기
          </Link>
          <Link
            className="flex h-13 items-center justify-center gap-1.5 rounded-[12px] bg-[#F26522] text-[15px] font-bold whitespace-nowrap text-white no-underline"
            href="/consult"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            수업상담
          </Link>
          <Link
            className="flex h-13 items-center justify-center gap-1.5 rounded-[12px] bg-[#1E3A5F] text-[15px] font-bold whitespace-nowrap text-white no-underline"
            href="/consult"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
              <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
            </svg>
            몰입독서
          </Link>
        </div>
      </Section>
    </div>
  );
}
