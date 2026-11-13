import Link from "next/link";

export default function HangulBannerSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-7 lg:pt-12" aria-labelledby="k-ban">
      <div className="flex flex-col items-center gap-3 rounded-[24px] bg-[#1F1F1F] px-5 py-6 text-center text-white">
        <p className="m-0 text-[13px] text-[#D6D6D6]">아이 발달 수준에 맞춘</p>
        <h2 className="m-0 text-[20px] font-extrabold" id="k-ban">
          맞춤형 한글 학습을 시작하세요
        </h2>
        <Link
          className="inline-flex h-12 items-center rounded-full bg-[#D63F7C] px-5.5 py-0 text-[15px] font-bold text-white no-underline"
          href="/special"
        >
          유아 특강 바로가기 →
        </Link>
      </div>
    </section>
  );
}
