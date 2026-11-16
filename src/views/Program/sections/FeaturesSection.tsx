import SectionLabel from "@/components/common/SectionLabel";

export default function FeaturesSection() {
  return (
    <section className="bg-[#FFEDE0] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20" aria-labelledby="feat">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-5 px-5 lg:gap-8">
        <div className="flex flex-col items-center gap-2">
          <SectionLabel color="#C2410C" bg="#FFFFFF">
            프로그램 특징
          </SectionLabel>
          <h2 className="m-0 text-center text-[24px] leading-[1.35] font-extrabold lg:text-[30px]" id="feat">
            읽기·독서·토론·논술로
            {/* 모바일에서는 두 줄로 나눔 */}
            <br className="md:hidden" /> 문해력을 탄탄하게!
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          <article className="relative isolate flex flex-col justify-center overflow-hidden rounded-[24px] bg-[#fff] py-5 pr-[116px] pl-6 text-left md:min-h-[190px] md:justify-start md:rounded-[32px] md:p-7 lg:min-h-[200px] lg:p-8">
            <img
              className="pointer-events-none absolute top-1/2 right-3 -z-10 block h-[100px] w-[100px] -translate-y-1/2 object-contain md:top-auto md:right-4 md:-bottom-3 md:h-[140px] md:w-[140px] md:translate-y-0 md:object-bottom lg:right-5 lg:h-[170px] lg:w-[170px]"
              src="https://cdn.hanuribook.com/img/icon/textbook.png"
              width={1024}
              height={1024}
              alt=""
              loading="lazy"
            />
            <div>
              <h3 className="mx-0 mt-0 mb-1.5 text-[19px] font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:mb-3 md:text-[22px] lg:text-[24px]">학년별 교과 연계</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-[#222222] md:text-[15px] md:leading-[1.7] lg:text-[16px]">
                학년별 교과 주제를 이해하여
                <br />
                학습 역량을 향상시킬 수 있습니다.
              </p>
            </div>
          </article>
          <article className="relative isolate flex flex-col justify-center overflow-hidden rounded-[24px] bg-[#fff] py-5 pr-[116px] pl-6 text-left md:min-h-[190px] md:justify-start md:rounded-[32px] md:p-7 lg:min-h-[200px] lg:p-8">
            <img
              className="pointer-events-none absolute top-1/2 right-3 -z-10 block h-[100px] w-[100px] -translate-y-1/2 object-contain md:top-auto md:right-4 md:-bottom-3 md:h-[140px] md:w-[140px] md:translate-y-0 md:object-bottom lg:right-5 lg:h-[170px] lg:w-[170px]"
              src="https://cdn.hanuribook.com/img/icon/test.png"
              width={1024}
              height={1024}
              alt=""
              loading="lazy"
            />
            <div>
              <h3 className="mx-0 mt-0 mb-1.5 text-[19px] font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:mb-3 md:text-[22px] lg:text-[24px]">최신 평가 유형 반영</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-[#222222] md:text-[15px] md:leading-[1.7] lg:text-[16px]">
                최신 서술형 및 수행평가 유형을 반영하여
                <br />
                빠르게 대비할 수 있습니다.
              </p>
            </div>
          </article>
          <article className="relative isolate flex flex-col justify-center overflow-hidden rounded-[24px] bg-[#fff] py-5 pr-[116px] pl-6 text-left md:min-h-[190px] md:justify-start md:rounded-[32px] md:p-7 lg:min-h-[200px] lg:p-8">
            <img
              className="pointer-events-none absolute top-1/2 right-3 -z-10 block h-[100px] w-[100px] -translate-y-1/2 object-contain md:top-auto md:right-4 md:-bottom-3 md:h-[140px] md:w-[140px] md:translate-y-0 md:object-bottom lg:right-5 lg:h-[170px] lg:w-[170px]"
              src="https://cdn.hanuribook.com/img/icon/books.png"
              width={1024}
              height={1024}
              alt=""
              loading="lazy"
            />
            <div>
              <h3 className="mx-0 mt-0 mb-1.5 text-[19px] font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:mb-3 md:text-[22px] lg:text-[24px]">매달 새로운 교재</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-[#222222] md:text-[15px] md:leading-[1.7] lg:text-[16px]">
                매달 새롭게 개정되는 교재로
                <br />
                다양한 독서를 할 수 있습니다.
              </p>
            </div>
          </article>
        </div>
        <a
          className="flex h-13 items-center justify-center rounded-[14px] lg:w-[360px] lg:self-center border-[1.5px] border-[#F26522] bg-white text-[15px] font-bold text-[#C2410C] no-underline"
          href="#how"
        >
          프로그램 한눈에 보기 ⌄
        </a>
      </div>
    </section>
  );
}
