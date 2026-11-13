export default function HeroSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-8"
      aria-labelledby="tc-h"
    >
      <p className="m-0 text-[13px] font-bold text-[#C2410C]">한우리 독서지도사 양성 과정</p>
      <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[40px]" id="tc-h">
        처음이어도 괜찮아요
        <br />
        {"독서지도사 "}
        <span className="text-[#D94E0F]">입문과정</span>
      </h1>
      <p className="m-0 text-[15px] leading-[1.7] text-[#4A4A4A]">
        독서교육 경험이 없어도 체계적인 커리큘럼과 실습으로 아이들을 가르치는 전문 독서지도사가 될 수
        있습니다.
      </p>
      <div className="flex h-47.5 items-center justify-center rounded-[24px] bg-[#FFF4EC] text-center text-[13px] text-[#8A5A3C]">
        [이미지] 연수 강의실에서 수업을 듣는 예비 선생님들
      </div>
    </section>
  );
}
