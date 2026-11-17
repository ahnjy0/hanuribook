import TitleIcon from "./TitleIcon";
import CheckIcon from "@/components/common/CheckIcon";

export default function ResultsSection() {
  return (
    <section className="mt-14 bg-[#FFF7F1] px-0 pt-10 pb-12 lg:mt-24 lg:pt-16 lg:pb-20" aria-labelledby="res-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4.5 px-5 lg:gap-7">
        <div className="flex flex-col gap-3.5 lg:gap-5">
          <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="res-h">
            <TitleIcon kind="results" />
            한우리를 하면 어떤 점이 좋아지나요?
          </h2>
          <p className="m-0 text-[14px] leading-[1.7] text-[#333333]">
            한우리 효과, 이미 경험한 학부모님들이 말합니다.
          </p>
        </div>
        {/* 수업 사진(1200×762): 모바일은 원본 비율 그대로, 데스크톱은 너무 높지 않게 가로로 넓게 잘라(가운데 기준) 표시 */}
        <img
          className="block aspect-[1200/762] w-full rounded-[20px] object-cover lg:aspect-auto lg:h-[420px] lg:rounded-[24px]"
          src="https://cdn.hanuribook.com/img/hanuribook/class_01.jpg"
          width={1200}
          height={762}
          alt="선생님과 함께 웃으며 글을 쓰는 아이"
          loading="lazy"
        />
        <dl className="m-0 grid grid-cols-2 gap-2.5 md:grid-cols-5">
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="flex items-center justify-center gap-1.5 text-[13px] font-bold text-[#333333]">
              <CheckIcon color="#C2410C" inline />
              독서 습관 형성
            </dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">97.6%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="flex items-center justify-center gap-1.5 text-[13px] font-bold text-[#333333]">
              <CheckIcon color="#C2410C" inline />
              학부모 만족도
            </dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">98.8%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="flex items-center justify-center gap-1.5 text-[13px] font-bold text-[#333333]">
              <CheckIcon color="#C2410C" inline />
              문해력 향상
            </dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">99.3%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="flex items-center justify-center gap-1.5 text-[13px] font-bold text-[#333333]">
              <CheckIcon color="#C2410C" inline />
              학교 공부 자신감
            </dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">98.8%</dd>
          </div>
          <div className="rounded-[16px] bg-white p-4 text-center">
            <dt className="flex items-center justify-center gap-1.5 text-[13px] font-bold text-[#333333]">
              <CheckIcon color="#C2410C" inline />
              글쓰기 능력 향상
            </dt>
            <dd className="mx-0 mt-1 mb-0 text-[26px] font-extrabold text-[#C2410C]">99.3%</dd>
          </div>
        </dl>
        <p className="m-0 text-center text-[12px] text-[#555555]">
          * 한우리 학부모 만족도 설문 결과 [조사 연도·표본 수 기재]
        </p>
      </div>
    </section>
  );
}
