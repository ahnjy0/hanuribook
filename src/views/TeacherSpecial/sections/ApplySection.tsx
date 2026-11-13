import Link from "next/link";

export default function ApplySection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-9 pb-12" aria-label="신청">
      <div className="flex flex-col items-center gap-3 rounded-[24px] bg-[#FFF4EC] px-5 py-6 text-center">
        <h2 className="m-0 text-[20px] font-extrabold">[0]기 교사특별반 모집 중</h2>
        <p className="m-0 text-[14px] text-[#4A4A4A]">접수 기간 [YYYY.MM.DD] ~ [YYYY.MM.DD]</p>
        <Link
          className="flex h-13 w-full max-w-[420px] items-center justify-center rounded-[14px] bg-[#F26522] text-[16px] font-bold text-white no-underline"
          href="/seminar"
        >
          설명회 듣고 지원하기
        </Link>
      </div>
    </section>
  );
}
