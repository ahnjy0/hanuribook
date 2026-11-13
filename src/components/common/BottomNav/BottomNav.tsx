import Link from "next/link";
import SmartLink from "@/components/common/SmartLink";
import { useBottomNav, type BottomNavProps } from "./useBottomNav";

export default function BottomNav(props: BottomNavProps) {
  const { accentFill, centerBg, centerBorder, centerFg, ctaHref } = useBottomNav(props);
  return (
    <div className="box-border w-full border-t border-t-[#EFEFEF] bg-[rgba(255,255,255,0.96)] px-4 pt-3 pb-4 font-pretendard">
      <nav
        className="mx-auto my-0 grid max-w-[720px] grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-2"
        aria-label="빠른 메뉴"
      >
        <Link
          className="box-border flex h-14 items-center justify-center gap-1.5 rounded-[14px] text-[16px] font-bold tracking-[-0.02em] whitespace-nowrap no-underline"
          style={{ background: centerBg, border: centerBorder, color: centerFg }}
          href="/centers"
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          센터찾기
        </Link>
        <SmartLink
          className="flex h-14 items-center justify-center gap-2 rounded-[14px] text-[17px] font-bold tracking-[-0.02em] whitespace-nowrap text-white no-underline"
          style={{ background: accentFill }}
          href={ctaHref}
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h10M4 11h7M4 16h5" />
            <path d="m14 18 1-3.5 5.5-5.5a1.6 1.6 0 0 1 2.3 2.3L17.3 17l-3.3 1z" />
          </svg>
          상담 신청하기
        </SmartLink>
      </nav>
    </div>
  );
}
