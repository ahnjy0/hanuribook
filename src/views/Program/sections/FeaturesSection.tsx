import type { ReactNode } from "react";
import SectionLabel from "@/components/common/SectionLabel";
import OverviewModal from "./OverviewModal";

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
        {/* 라벨·제목: 유아정규 '학습 효과'(Kinder/sections/EffectsSection) 타이틀 영역과 같은 스타일 */}
        <div className="mb-2 text-center">
          <SectionLabel color="#C2410C" bg="#FFFFFF">
            프로그램 특징
          </SectionLabel>
          <h1 className="mx-0 mt-1.5 mb-0 text-[24px] font-extrabold lg:text-[30px]" id="feat">
            읽기·독서·토론·논술로
            <br />
            문해력을 탄탄하게!
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 lg:gap-5">
          {FEATURES.map((f, i) => (
            // 모션: 페이지가 열릴 때 카드가 차례로 떠오르기(0.15초 간격)
            <div
              key={f.title}
              className="flex animate-card-rise motion-reduce:animate-none"
              style={{ animationDelay: `${150 + i * 150}ms` }}
            >
            <article
              className="relative isolate flex w-full flex-col justify-center overflow-hidden rounded-[24px] bg-white py-5 pr-[108px] pl-6 text-left md:min-h-[190px] md:justify-start md:rounded-[28px] md:p-7 lg:min-h-[200px] lg:p-8"
            >
              {/* 아이콘: 카드마다 박자를 달리해 천천히 둥실 떠다님 */}
              <img
                className="pointer-events-none absolute top-1/2 right-1 -z-10 block h-[100px] w-[100px] -translate-y-1/2 animate-icon-bob object-contain motion-reduce:animate-none md:top-auto md:right-1 md:-bottom-3 md:h-[140px] md:w-[140px] md:translate-y-0 md:object-bottom lg:right-2 lg:h-[170px] lg:w-[170px]"
                style={{ animationDelay: `${i * -1.3}s` }}
                src={f.icon}
                width={1024}
                height={1024}
                alt=""
                loading="lazy"
              />
              <div>
                <strong className="text-[16px] text-[#C2410C]">{f.title}</strong>
                <p className="m-0 text-[14px] leading-[1.6] text-[#222222] md:text-[15px] md:leading-[1.7] lg:text-[16px]">
                  {f.desc}
                </p>
              </div>
            </article>
            </div>
          ))}
        </div>
        {/* 누르면 전체 커리큘럼 이미지를 모달로 보여 줌 */}
        <OverviewModal />
      </div>
    </section>
  );
}
