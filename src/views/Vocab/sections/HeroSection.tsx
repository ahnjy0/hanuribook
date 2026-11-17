import SectionLabel from "@/components/common/SectionLabel";
import { ACCENT, BOOKS, SOFT } from "../vocabData";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-t-none rounded-b-[32px] bg-[linear-gradient(180deg,#FBB040_0%,#F59A0B_100%)] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20"
      aria-labelledby="v-hero"
    >
      {/* 배경 장식 이미지: 바둑판처럼 반복(투명도 40%), 위쪽 가운데 기준
          - 모바일·태블릿: 한 장 너비 = 화면 너비
          - 데스크톱: 한 장 너비 700px */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url(https://cdn.hanuribook.com/img/hanuribook/ele_hero.png)] bg-top bg-repeat [background-size:100%_auto] opacity-40 select-none lg:[background-size:700px_auto]"
        aria-hidden="true"
      />
      <div className="relative mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 text-center lg:gap-5">
        {/* 섹션 라벨: 아래 섹션들(학습 목표 등)과 같은 공통 라벨, 흰 배경 */}
        <SectionLabel color={ACCENT} bg={SOFT}>
          초등 정규 프로그램
        </SectionLabel>
        <h1 className="m-0 flex flex-col items-center gap-1 leading-[1.15] font-extrabold text-white" id="v-hero">
          {/* '생각하는 나무' 로고 (237×61) */}
          <img
            className="block h-8 w-auto lg:h-12"
            src="https://cdn.hanuribook.com/img/hanuribook/ele_logo.png"
            width={237}
            height={61}
            alt="생각하는 나무"
          />
          <span className="text-[44px] tracking-[-0.04em] lg:text-[72px]">어휘리더</span>
        </h1>
        {/* 설명글: 박스 없이 진한 글자(로고와 같은 검정 계열) — 주황 배경 위에서 흰 글자보다 잘 읽힘.
            보조 문구 + 핵심 문구(크고 굵게) */}
        <p className="mx-0 mt-1 mb-2 flex flex-col items-center gap-0.5 break-keep lg:gap-1">
          <span className="text-[15px] leading-[1.4] font-semibold text-[#3D2500] lg:text-[18px]">
            듣기 · 말하기 · 읽기 · 쓰기의 기초는 어휘력
          </span>
          <span className="text-[20px] leading-[1.3] font-extrabold tracking-[-0.02em] text-[#1F1F1F] lg:text-[26px]">
            풍부한 어휘력 기르기
          </span>
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
              className="flex w-full flex-col rounded-[24px] bg-white p-2.5 shadow-[0_12px_30px_rgba(150,80,0,0.2)] lg:rounded-[28px] lg:p-3.5"
            >
              {/* 표지 진열 영역 */}
              <div
                className="relative flex flex-col items-center rounded-[18px] px-3 py-4 lg:rounded-[22px] lg:px-6 lg:py-7"
                style={{ background: SOFT }}
              >
                <img
                  className="block h-28 w-auto max-w-full rounded-[3px] outline outline-1 -outline-offset-1 outline-black/10 sm:h-48 lg:h-64"
                  src={b.src}
                  width={b.w}
                  height={b.h}
                  alt={`${b.title} 교재 표지`}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-0.5 pt-4 pb-2 lg:px-3 lg:pt-5 lg:pb-3">
                <strong className="text-[17px] text-[#1F1F1F] lg:text-[22px]">{b.title}</strong>
                <span className="mt-0.5 text-[14px] font-bold lg:text-[18px]" style={{ color: ACCENT }}>
                  {b.grade}
                </span>
                <span className="my-3 h-px w-full bg-[#EEEEEE] lg:my-4" aria-hidden="true" />
                <span className="block text-[13px] leading-[1.55] break-keep text-[#333333] lg:text-[17px]">
                  {b.goal}
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
