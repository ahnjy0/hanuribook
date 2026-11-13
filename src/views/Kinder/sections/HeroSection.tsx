import type { ReactNode } from "react";

type Book = {
  title: string;
  age: string;
  desc: ReactNode;
  src: string;
  w: number;
  h: number;
  /** 카드별 강조색: 칩·권장 연령 글자 / 표지 진열 영역 배경 */
  accent: string;
  stage: string;
};

const BOOKS: Book[] = [
  {
    title: "꿈꾸는 새싹 1",
    age: "6세",
    accent: "#E8508A",
    stage: "#FDF0F5",
    desc: (
      <>
        생각하는 힘의 기초는 상상력,
        <br />
        풍부한 상상력 기르기
      </>
    ),
    src: "https://cdn.hanuribook.com/img/hanuribook/level1_01.png",
    w: 274,
    h: 371,
  },
  {
    title: "꿈꾸는 새싹 2",
    age: "7세",
    accent: "#7C5CE6",
    stage: "#F3F0FE",
    desc: (
      <>
        듣기와 말하기, 읽기와 쓰기,
        <br />
        생각하기의 기본 다지기
      </>
    ),
    src: "https://cdn.hanuribook.com/img/hanuribook/level1_02.png",
    w: 262,
    h: 346,
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-t-none rounded-b-[32px] bg-[linear-gradient(180deg,#F27BAA_0%,#E9578F_100%)] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20"
      aria-labelledby="k-hero"
    >
      {/* 장식: 떠다니는 한글 자모·획 */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <span className="absolute top-2 left-[3%] rotate-[-14deg] text-[34px] leading-none font-black text-[#7FE0DA] lg:top-8 lg:left-[12%] lg:text-[52px]">
          ㅎ
        </span>
        <span className="absolute top-[14%] right-[4%] rotate-[10deg] text-[34px] leading-none font-black text-[#FFD43B] lg:right-[13%] lg:text-[52px]">
          ㅋ
        </span>
        <span className="absolute top-[24%] left-[13%] h-6 w-1.5 rotate-[22deg] rounded-full bg-[#C9B8FF] lg:left-[20%] lg:h-9 lg:w-2" />
        <span className="absolute top-[24%] right-[14%] h-1.5 w-6 rotate-[28deg] rounded-full bg-[#FF9B4A] lg:right-[22%] lg:h-2 lg:w-9" />
      </div>
      <div className="relative mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 text-center lg:gap-5">
        <span className="flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-[14px] font-bold text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFD43B]" aria-hidden="true" />
          유아 6, 7세 창의독서
        </span>
        <h1 className="m-0" id="k-hero">
          <img
            className="mx-auto block h-24 w-auto max-w-full lg:h-44"
            src="https://cdn.hanuribook.com/img/hanuribook/level1_logo.png"
            width={256}
            height={169}
            alt="꿈꾸는 새싹"
          />
        </h1>
        <p className="mx-0 -mt-2 mb-2 text-[15px] leading-[1.6] font-medium text-white/90 lg:text-[17px]">
          상상력과 언어 감각을 깨우는 한우리 유아 정규 프로그램
        </p>
        <div className="grid w-full max-w-[720px] grid-cols-2 gap-3 lg:gap-5">
          {BOOKS.map((b) => (
            <article
              key={b.title}
              className="flex flex-col rounded-[24px] bg-white p-2.5 shadow-[0_12px_30px_rgba(120,20,60,0.2)] lg:rounded-[28px] lg:p-3.5"
            >
              {/* 표지 진열 영역 (카드별 연한 강조색) */}
              <div
                className="relative flex flex-col items-center rounded-[18px] px-3 pt-8 pb-5 lg:rounded-[22px] lg:px-6 lg:pt-10 lg:pb-7"
                style={{ background: b.stage }}
              >
                <span
                  className="absolute top-2.5 left-2.5 rounded-full px-2.5 py-0.5 text-[12px] font-bold text-white lg:top-3.5 lg:left-3.5 lg:px-3 lg:py-1 lg:text-[13px]"
                  style={{ background: b.accent }}
                >
                  {b.age}
                </span>
                <div className="relative">
                  <img
                    className="block h-36 w-auto max-w-full rounded-[3px] outline outline-1 -outline-offset-1 outline-black/10 sm:h-48 lg:h-64"
                    src={b.src}
                    width={b.w}
                    height={b.h}
                    alt={`${b.title} 교재 표지`}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center px-1.5 pt-4 pb-2 lg:px-3 lg:pt-5 lg:pb-3">
                <strong className="text-[17px] text-[#1F1F1F] lg:text-[20px]">{b.title}</strong>
                <span className="mt-0.5 text-[14px] font-bold lg:text-[16px]" style={{ color: b.accent }}>
                  {`${b.age} 권장`}
                </span>
                <span className="my-3 h-px w-full bg-[#EEEEEE] lg:my-4" aria-hidden="true" />
                <span className="text-[13px] leading-[1.55] text-[#4A4A4A] lg:text-[15px]">{b.desc}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
