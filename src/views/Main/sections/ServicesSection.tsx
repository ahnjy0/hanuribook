export default function ServicesSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-14 pb-12" aria-labelledby="svc-title">
      <h2 className="reveal mx-0 mt-0 mb-3.5 text-[18px] font-extrabold" id="svc-title">
        서비스 바로가기
      </h2>
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
        <a
          className="reveal flex min-h-16 items-center gap-2.5 rounded-[16px] bg-[#F7F7F8] px-3.5 py-3 text-[#1F1F1F] no-underline"
          href="#"
        >
          <span className="h-9 w-9 flex-none rounded-[10px] bg-[#FFE6D5]" />
          <span className="flex flex-col">
            <strong className="text-[14px]">한우리 몰입독서</strong>
            <span className="text-[12px] text-[rgb(107,107,107)]">선생님과 같이 읽는</span>
          </span>
        </a>
        <a
          className="reveal flex min-h-16 items-center gap-2.5 rounded-[16px] bg-[#F7F7F8] px-3.5 py-3 text-[#1F1F1F] no-underline"
          href="#"
        >
          <span className="h-9 w-9 flex-none rounded-[10px] bg-[#FFE6D5]" />
          <span className="flex flex-col">
            <strong className="text-[14px]">한우리 추천도서</strong>
            <span className="text-[12px] text-[#6B6B6B]">학년별 필독서</span>
          </span>
        </a>
        <a
          className="reveal flex min-h-16 items-center gap-2.5 rounded-[16px] bg-[#F7F7F8] px-3.5 py-3 text-[#1F1F1F] no-underline"
          href="#"
        >
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-[#FDE2E2]">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#C62828">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="flex flex-col">
            <strong className="text-[14px]">YouTube</strong>
            <span className="text-[12px] text-[#6B6B6B]">공식 채널</span>
          </span>
        </a>
        <a
          className="reveal flex min-h-16 items-center gap-2.5 rounded-[16px] bg-[#F7F7F8] px-3.5 py-3 text-[#1F1F1F] no-underline"
          href="#"
        >
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-[#F3E5F5]">
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7B1FA2"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </span>
          <span className="flex flex-col">
            <strong className="text-[14px]">Instagram</strong>
            <span className="text-[12px] text-[#6B6B6B]">@hanuribook</span>
          </span>
        </a>
      </div>
    </section>
  );
}
