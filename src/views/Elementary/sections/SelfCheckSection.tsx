import Link from "next/link";

export default function SelfCheckSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-7 pb-12 lg:pt-12 lg:pb-24" aria-label="자가진단">
      <div className="flex items-center gap-3 rounded-[20px] bg-[#EAF2FF] p-4.5">
        <svg
          aria-hidden="true"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2F5AA8"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
        </svg>
        <div className="flex-auto">
          <strong className="text-[15px]">우리 아이 단계가 고민되시나요?</strong>
          <p className="mx-0 mt-0.5 mb-0 text-[13px] text-[#33496B]">무료 독서성향 검사 및 맞춤 상담 가능</p>
        </div>
        <Link
          className="inline-flex h-11 flex-none items-center rounded-[10px] bg-[#1E3A5F] px-4 py-0 text-[14px] font-bold text-white no-underline"
          href="/consult"
        >
          자가진단
        </Link>
      </div>
    </section>
  );
}
