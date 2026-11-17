import type { ReactNode } from "react";

type Book = {
  title: string;
  age: string;
  desc: ReactNode;
  src: string;
  w: number;
  h: number;
  /** 카드별 강조색: 권장 연령 글자 / 표지 진열 영역 배경 */
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
      {/* 배경 장식 이미지(투명 PNG 색종이·별 무늬): 분홍 그라데이션 위에 반복 없이 한 장, 투명도 40%
          - 모바일·태블릿: 화면 너비의 150%로 위쪽 가운데에 둠(세로로 긴 섹션에 cover를 쓰면 이미지가 너무 커져
            가운데 빈 부분만 보이므로, 너비 기준으로 맞춰 별·색종이가 보이게 함)
          - 데스크톱: 섹션 전체를 덮도록 가운데 맞춤(cover) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url(https://cdn.hanuribook.com/img/hanuribook/kinder_hero.png)] bg-top bg-no-repeat [background-size:150%_auto] opacity-40 select-none lg:bg-cover lg:bg-center"
        aria-hidden="true"
      />
      <div className="relative mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 text-center lg:gap-5">
        <span className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[14px] font-bold text-[#B8326A]">
          유아 정규 프로그램
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
          상상력과 언어 감각 키워주는 창의독서 프로그램
        </p>
        <div className="grid w-full max-w-[720px] grid-cols-2 gap-3 lg:gap-5">
          {BOOKS.map((b, i) => (
            // 모션: 페이지가 열릴 때 카드가 차례로 떠오르기
            <div
              key={b.title}
              className="flex animate-card-rise motion-reduce:animate-none"
              style={{ animationDelay: `${150 + i * 150}ms` }}
            >
            <article
              className="flex w-full flex-col rounded-[24px] bg-white p-2.5 shadow-[0_12px_30px_rgba(120,20,60,0.2)] lg:rounded-[28px] lg:p-3.5"
            >
              {/* 표지 진열 영역 (카드별 연한 강조색) */}
              <div
                className="relative flex flex-col items-center rounded-[18px] px-3 py-4 lg:rounded-[22px] lg:px-6 lg:py-7"
                style={{ background: b.stage }}
              >
                <div className="relative">
                  <img
                    className="block h-28 w-auto max-w-full rounded-[3px] outline outline-1 -outline-offset-1 outline-black/10 sm:h-48 lg:h-64"
                    src={b.src}
                    width={b.w}
                    height={b.h}
                    alt={`${b.title} 교재 표지`}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center px-0.5 pt-4 pb-2 lg:px-3 lg:pt-5 lg:pb-3">
                <strong className="text-[17px] text-[#1F1F1F] lg:text-[22px]">{b.title}</strong>
                <span className="mt-0.5 text-[14px] font-bold lg:text-[18px]" style={{ color: b.accent }}>
                  {`${b.age} 권장`}
                </span>
                <span className="my-3 h-px w-full bg-[#EEEEEE] lg:my-4" aria-hidden="true" />
                {/* 모바일: 좌우 여백을 줄이고(카드 안쪽 여백까지 활용) 자간을 살짝 좁혀 한 줄이 중간에 끊기지 않게 함.
                    그래도 좁은 화면에서 넘치면 단어 단위로만 줄바꿈(break-keep) */}
                <span className="-mx-1.5 block text-[13px] leading-[1.55] tracking-[-0.04em] break-keep text-[#333333] lg:mx-0 lg:text-[17px] lg:tracking-normal">
                  {b.desc}
                </span>
              </div>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
