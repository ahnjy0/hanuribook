export default function ReviewsSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[760px] flex-col gap-5.5 px-5 py-12"
      aria-labelledby="t-rev"
    >
      <h2
        className="mx-auto my-0 rounded-full bg-[#E8590C] px-5 py-2 text-[15px] font-bold text-white"
        id="t-rev"
      >
        실제 한우리 학부모님 후기
      </h2>
      <blockquote className="my-0 mr-8 ml-0 rounded-[22px] bg-[#F3F3F3] px-6 py-5.5 text-[16px] leading-[1.65] text-[#333333]">
        한우리 선생님은
        <br />
        최고의 선생님이라 말하고 싶어요.
        <br />
        <br />
        수업은 물론이고,
        <br />
        아이들 하나 하나의 감정까지
        <br />
        세심히 살피는 분이시거든요.
      </blockquote>
      <figure className="mx-auto my-0 w-55 -rotate-3 rounded-[6px] border border-[#E8E8E8] bg-white px-2.5 pt-2.5 pb-3.5">
        <div className="flex h-45 items-center justify-center bg-[#EDEDED] text-center text-[12px] text-[#6B6B6B]">
          [사진] 책상에서
          <br />
          과제하는 아이
        </div>
        <figcaption className="pt-2 text-center text-[12px] font-bold text-[#6B6B6B]">
          한우리 독서토론논술
        </figcaption>
      </figure>
      <blockquote className="my-0 mr-0 ml-8 rounded-[22px] bg-[#F3F3F3] px-6 py-5.5 text-[16px] leading-[1.65] text-[#333333]">
        한우리 선생님을 만나고 아이가
        <br />
        책도 많이 읽고 학교 도서관에서 책을
        <br />
        빌려서 읽어볼 정도로 재미있어 해요!
      </blockquote>
      <figure className="mx-auto my-0 w-55 rotate-2 rounded-[6px] border border-[#E8E8E8] bg-white px-2.5 pt-2.5 pb-3.5">
        <div className="flex h-45 items-center justify-center bg-[#EDEDED] text-center text-[12px] text-[#6B6B6B]">
          [사진] 교재로
          <br />
          공부하는 아이
        </div>
        <figcaption className="pt-2 text-center text-[12px] font-bold text-[#6B6B6B]">
          한우리 독서토론논술
        </figcaption>
      </figure>
      <blockquote className="my-0 mr-8 ml-0 rounded-[22px] bg-[#F3F3F3] px-6 py-5.5 text-[16px] leading-[1.65] text-[#333333]">
        한우리 선생님 덕분에 글쓰기에
        <br />
        자신감이 생기고 [후기 나머지 내용]
      </blockquote>
    </section>
  );
}
