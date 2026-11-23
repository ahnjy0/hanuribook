import SectionLabel from "@/components/common/SectionLabel";
import { LIT } from "../theme";

/**
 * 고등 문학 히어로: 중등 소크라테스 히어로와 같은 구성(가운데 정렬, 라벨 → 로고 제목 → 핵심 문구 → 교재 표지)
 * + 맨 아래 수업 정보 박스(대상 · 교재 구성)
 * 로고 이미지(846×257)가 검정 글자 + 투명 배경이라, 진한 남색 대신 밝은 하늘빛 남색 배경에 진한 글자를 씀
 */
// 수업 정보: [항목명, 내용]
const INFO: [string, React.ReactNode][] = [
  ["대상", "(중3~) 고등학생"],
  [
    "교재 구성",
    <>
      교재 1권, 필독서 1권 + 교재 내 별지
      <span className="ml-1 text-[12px] font-normal text-[#6B6B6B] lg:text-[13px]">(수능형 문제 및 수행평가 활동지 등)</span>
    </>,
  ],
];

export default function HeroSection() {
  return (
    <section
      className="rounded-t-none rounded-b-[32px] bg-[linear-gradient(180deg,#EAF0FA_0%,#D7E2F3_100%)] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20"
      aria-labelledby="l-h"
    >
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 text-center lg:gap-5">
        <SectionLabel color={LIT.dark} bg="#FFFFFF">
          고등 정규 프로그램
        </SectionLabel>
        {/* 제목: 소클 고등 문학 로고 이미지 — 소크라테스처럼 h1 안에 로고, 대체 글로 과정명.
            모션: 페이지가 열릴 때 통통 튀듯 나타남(pop-in) */}
        <h1 className="m-0" id="l-h">
          <img
            className="mx-auto block h-14 w-auto max-w-full animate-pop-in motion-reduce:animate-none lg:h-[84px]"
            src="https://cdn.hanuribook.com/img/hanuribook/logo_level6_02.png"
            width={846}
            height={257}
            alt="소클 고등 문학"
          />
        </h1>
        <p className="mx-0 -mt-1 mb-2 break-keep">
          <span className="text-[20px] leading-[1.3] font-extrabold tracking-[-0.02em] text-[#1F1F1F] lg:text-[26px]">
            심층 독서 · 논구술로 <span style={{ color: LIT.accent }}>내신 · 입시 대비</span>
          </span>
        </p>
        {/* 교재 표지(325×432). 모션: 로고 다음에 아래에서 떠오르며 나타남(card-rise, 0.3초 뒤) */}
        <div className="w-full max-w-[200px] animate-card-rise motion-reduce:animate-none lg:max-w-[260px]" style={{ animationDelay: "300ms" }}>
          <img
            className="block h-auto w-full rounded-[6px] shadow-[0_14px_30px_rgba(30,45,80,0.25)]"
            src="https://cdn.hanuribook.com/img/hanuribook/level6_02.png"
            width={325}
            height={432}
            alt="소클 고등 문학 교재 표지"
          />
        </div>
        {/* 수업 정보(대상 · 교재 구성): 다른 상세 페이지 히어로 정보 박스와 같은 모양
            흰 박스 안에 줄마다 왼쪽 알약 라벨(남색 글자 + 남색 10% 바탕) · 오른쪽 내용 */}
        <dl className="mx-0 mt-2 mb-0 box-border grid w-full max-w-[560px] grid-cols-1 gap-2.5 rounded-[18px] bg-white px-4 py-4 shadow-[0_6px_16px_rgba(0,0,0,0.05)] lg:gap-3 lg:rounded-[20px] lg:px-6 lg:py-5">
          {INFO.map(([k, v]) => (
            <div key={k} className="box-border flex items-center gap-3 text-left lg:gap-4">
              <dt
                className="box-border inline-flex w-[78px] flex-none items-center justify-center rounded-full py-1 text-[13px] leading-[1.5] font-bold lg:w-[88px] lg:text-[14px]"
                style={{ color: LIT.accent, background: `${LIT.accent}1A` }}
              >
                {k}
              </dt>
              <dd className="m-0 min-w-0 text-[14px] leading-[1.5] font-medium break-keep text-[#333333] lg:text-[15px]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
