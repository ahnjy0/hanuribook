import Link from "next/link";

export default function InquirySection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-9 pb-12" aria-label="문의">
      <div className="flex flex-col gap-3 rounded-[24px] bg-[#1E3A5F] px-5 py-6 text-white">
        <h2 className="m-0 text-[20px] font-extrabold">입문과정이 궁금하다면</h2>
        <p className="m-0 text-[14px] leading-[1.6] text-[#D3DEEC]">
          온라인 설명회에서 과정 구성과 활동 방식, 수익 구조까지 자세히 안내해 드립니다.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link
            className="flex h-12.5 items-center justify-center rounded-[12px] bg-[#F26522] text-[15px] font-bold text-white no-underline"
            href="/seminar"
          >
            설명회 신청
          </Link>
          <a
            className="flex h-12.5 items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.12)] text-[15px] font-semibold text-white no-underline"
            href="tel:15771909"
          >
            1577-1909
          </a>
        </div>
      </div>
    </section>
  );
}
