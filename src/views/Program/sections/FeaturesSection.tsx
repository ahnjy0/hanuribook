import type { ReactNode } from "react";
import SectionLabel from "@/components/common/SectionLabel";

type Feature = { title: string; desc: ReactNode; icon: string };

const FEATURES: Feature[] = [
  {
    title: "학년별 교과 연계",
    desc: (
      <>
        학년별 교과 주제를 이해하여
        <br />
        학습 역량을 향상시킬 수 있습니다.
      </>
    ),
    icon: "https://cdn.hanuribook.com/img/icon/textbook.png",
  },
  {
    title: "최신 평가 유형 반영",
    desc: (
      <>
        최신 서술형 및 수행평가 유형을 반영하여
        <br />
        빠르게 대비할 수 있습니다.
      </>
    ),
    icon: "https://cdn.hanuribook.com/img/icon/test.png",
  },
  {
    title: "매달 새로운 교재",
    desc: (
      <>
        매달 새롭게 개정되는 교재로
        <br />
        다양한 독서를 할 수 있습니다.
      </>
    ),
    icon: "https://cdn.hanuribook.com/img/icon/books.png",
  },
];

/**
 * 프로그램 소개 페이지 첫 섹션(히어로).
 * 연한 살구색 배경, 아래쪽 둥근 모서리, 흰 카드(그림자 없음).
 * 라벨·제목·설명 글자는 유아정규 '학습 효과' 섹션과 같은 스타일(흰 라운드 박스 라벨, 24/30px 제목, 14px 설명).
 */
export default function FeaturesSection() {
  return (
    <section
      className="relative overflow-hidden rounded-t-none rounded-b-[32px] bg-[#FFEDE0] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20"
      aria-labelledby="feat"
    >
      <div className="relative mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 text-center lg:gap-5">
        {/* 라벨·제목·설명: 유아정규 '학습 효과'(Kinder/sections/EffectsSection) 타이틀 영역과 같은 스타일 */}
        <div className="mb-2 text-center">
          <SectionLabel color="#C2410C" bg="#FFFFFF">
            프로그램 특징
          </SectionLabel>
          <h1 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[30px]" id="feat">
            읽기·독서·토론·논술로
            <br />
            문해력을 탄탄하게!
          </h1>
          <p className="m-0 text-[14px] leading-[1.6] text-[#333333]">
            5력 1체 독서 교육 원리와 소그룹 협동 학습으로 키우는 한우리독서토론논술 프로그램
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 lg:gap-5">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="relative isolate flex flex-col justify-center overflow-hidden rounded-[24px] bg-white py-5 pr-[108px] pl-6 text-left md:min-h-[190px] md:justify-start md:rounded-[28px] md:p-7 lg:min-h-[200px] lg:p-8"
            >
              <img
                className="pointer-events-none absolute top-1/2 right-1 -z-10 block h-[100px] w-[100px] -translate-y-1/2 object-contain md:top-auto md:right-1 md:-bottom-3 md:h-[140px] md:w-[140px] md:translate-y-0 md:object-bottom lg:right-2 lg:h-[170px] lg:w-[170px]"
                src={f.icon}
                width={1024}
                height={1024}
                alt=""
                loading="lazy"
              />
              <div>
                <h2 className="mx-0 mt-0 mb-1.5 text-[19px] font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:mb-3 md:text-[22px] lg:text-[24px]">
                  {f.title}
                </h2>
                <p className="m-0 text-[14px] leading-[1.6] text-[#222222] md:text-[15px] md:leading-[1.7] lg:text-[16px]">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        <a
          className="mt-1 flex h-13 w-full items-center justify-center rounded-[14px] border-[1.5px] border-[#F26522] bg-white text-[15px] font-bold text-[#C2410C] no-underline lg:w-[360px]"
          href="#how"
        >
          프로그램 한눈에 보기 ⌄
        </a>
      </div>
    </section>
  );
}
