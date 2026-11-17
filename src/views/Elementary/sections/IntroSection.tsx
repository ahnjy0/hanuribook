// 초등정규 타이틀 영역: 초등심화(Advanced/sections/IntroSection)와 같은 스타일(두 줄 제목 + 한 줄 설명)
// 문구는 기존 초등정규 과정 소개(CourseHub elementary) 문구 사용
export default function IntroSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-2 px-5 pt-7 lg:gap-3 lg:pt-16"
      aria-labelledby="e-h"
    >
      <h1 className="m-0 text-[24px] leading-[1.35] font-extrabold lg:text-[30px]" id="e-h">
        학년별로 차근차근,
        <br />
        교과 연계 초등 정규 과정
      </h1>
      <p className="m-0 text-[14px] leading-[1.7] text-[#333333]">
        생각하는 나무 어휘리더부터 논리리더까지, 학년별 발달 단계에 맞춘 필독서와 교재로 어휘력부터 논리적
        사고력까지 단계적으로 키웁니다.
      </p>
    </section>
  );
}
