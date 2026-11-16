export default function BookBannerSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-7 pb-12 lg:pt-12 lg:pb-24" aria-labelledby="v-ban">
      <div className="flex flex-col items-center gap-3 rounded-[24px] bg-[#F59A0B] px-5 py-6 text-center text-[#1F1F1F]">
        <p className="m-0 text-[14px] font-medium">좋은책으로 자녀에게</p>
        <h2 className="m-0 text-[20px] font-extrabold" id="v-ban">
          다양한 세상을 선물해주세요
        </h2>
        <a
          className="inline-flex h-12 items-center rounded-full bg-[#FFE14D] px-5.5 py-0 text-[15px] font-bold text-[#1F1F1F] no-underline"
          href="https://www.hanuribook.com/pickbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          한우리가 선정한 좋은책 →
        </a>
      </div>
    </section>
  );
}
