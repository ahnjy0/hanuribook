export default function ReviewsSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-10 pb-12 lg:gap-5 lg:pt-24 lg:pb-24"
      aria-labelledby="k-rev"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="m-0 text-[18px] font-extrabold" id="k-rev">
          학부모님의 생생 후기
        </h2>
        <span className="text-[13px] text-[#6B6B6B]">만족도 [00]%</span>
      </div>
      <article className="flex flex-col gap-2 rounded-[20px] border border-[#EEEEEE] bg-white p-4.5">
        <span className="text-[13px] font-bold text-[#B8326A]">
          {"★★★★★ "}
          <span className="font-medium text-[#6B6B6B]">[작성자] 학부모님 (7세 회원)</span>
        </span>
        <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
          [실제 학부모 후기 본문이 들어가는 영역입니다. 승인된 후기만 노출합니다.]
        </p>
      </article>
    </section>
  );
}
