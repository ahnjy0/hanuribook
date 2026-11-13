export default function HeroSection() {
  return (
    <section className="rounded-t-none rounded-b-[32px] bg-[#1F1F1F] text-white" aria-labelledby="m-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 py-9 lg:pt-16 lg:pb-20">
        <span className="self-start rounded-full bg-[#F26522] px-3 py-1.5 text-[13px] font-bold">
          중학생 · 고등학생
        </span>
        <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[40px]" id="m-h">
          중등부터 수능까지,
          <br />
          <span className="text-[#FF8A4F]">읽고 쓰는 힘</span>이 성적이 됩니다
        </h1>
        <p className="m-0 text-[14px] leading-[1.7] text-[#D6D6D6]">
          교과서 수록 작품과 비문학 독해, 서술형·수행평가와 논술까지. 학년별 교과 과정에 맞춘 한우리 중고등
          커리큘럼입니다.
        </p>
        <div className="flex h-42.5 items-center justify-center rounded-[20px] border border-dashed border-[#555555] bg-[#2B2B2B] text-[13px] text-[#BDBDBD]">
          [이미지] 토론 수업 중인 중학생들
        </div>
      </div>
    </section>
  );
}
