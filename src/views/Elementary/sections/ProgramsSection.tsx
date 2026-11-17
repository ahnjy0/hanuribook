import SmartLink from "@/components/common/SmartLink";
import type { ElementaryVals } from "../useElementary";

type Props = Pick<ElementaryVals, "progs">;

export default function ProgramsSection({ progs }: Props) {
  return (
    <section
      // 위 타이틀 영역(IntroSection) 바로 아래 카드 목록 — 초등심화 과정 카드 영역과 같은 위 간격
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-5 lg:gap-5 lg:pt-10"
      aria-label="학년별 프로그램"
    >
      {/* 데스크톱: 카드 안쪽 여백·글자·아이콘·버튼을 키워 크게 보이게 */}
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3 lg:gap-5">
        {progs.map((p, i) => (
          <li key={i} className="flex">
            <article
              // 마우스오버: 메인홈 '한우리 프로그램' 카드와 같은 효과(살짝 위로 뜨며 주황빛 그림자)
              className="flex flex-auto flex-col overflow-hidden rounded-[22px] bg-white text-[#1F1F1F] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(230,69,15,0.16)] motion-reduce:transition-none lg:rounded-[28px]"
              style={{ border: `1.5px solid ${p.line}` }}
            >
              <div
                className="relative flex flex-col gap-2.5 overflow-hidden px-5 pt-5 pb-4.5 lg:gap-3.5 lg:px-8 lg:pt-8 lg:pb-7"
                style={{ background: p.soft }}
              >
                <span
                  className="absolute -top-4.5 -right-4.5 h-24 w-24 rounded-[50%] opacity-22 lg:-top-6 lg:-right-6 lg:h-32 lg:w-32"
                  style={{ background: p.accent }}
                  aria-hidden="true"
                />
                <span
                  className="absolute top-4.5 right-4.5 flex h-11 w-11 items-center justify-center rounded-[14px] lg:top-7 lg:right-7 lg:h-14 lg:w-14 lg:rounded-[16px] lg:[&_svg]:h-7 lg:[&_svg]:w-7"
                  style={{ background: p.accent }}
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={p.iconFg}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
                    <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
                  </svg>
                </span>
                {/* 학년 라벨: 공통 섹션 라벨(SectionLabel)과 같은 크기·여백(모바일 13px·데스크톱 16px), 카드 왼쪽 정렬 */}
                <span
                  className="inline-flex items-center self-start rounded-full bg-white px-3.5 py-1.5 text-[13px] leading-[1.5] font-bold lg:px-4.5 lg:py-2 lg:text-[16px]"
                  style={{ color: p.ink }}
                >
                  {p.grade}
                </span>
                {/* 제목: '생각하는 나무' + 프로그램명 */}
                <h3 className="m-0 flex flex-col text-[#1F1F1F]">
                  <span className="text-[14px] font-bold lg:text-[17px]" style={{ color: p.ink }}>
                    {p.brand}
                  </span>
                  <span className="text-[23px] leading-[1.25] font-extrabold tracking-[-0.03em] lg:text-[32px]">{p.short}</span>
                </h3>
              </div>
              <div className="flex flex-auto flex-col gap-3 px-5 pt-4.5 pb-5 lg:gap-5 lg:px-8 lg:pt-6 lg:pb-8">
                {/* 설명: 쉼표 앞(보조 문구)과 뒤(핵심 문구)를 두 줄로 나누고 핵심 문구는 굵게 */}
                <p className="m-0 flex flex-col text-[15px] leading-[1.55] break-keep text-[#222222] lg:text-[18px]">
                  {(() => {
                    const i = p.desc.indexOf(", ");
                    if (i < 0) return p.desc;
                    return (
                      <>
                        <span>{p.desc.slice(0, i + 1)}</span>
                        <strong className="font-extrabold">{p.desc.slice(i + 2)}</strong>
                      </>
                    );
                  })()}
                </p>
                <SmartLink
                  className="mt-auto flex h-12 items-center justify-center gap-1 rounded-[12px] text-[15px] font-extrabold lg:h-14 lg:rounded-[14px] lg:text-[17px] text-[#C2410C] no-underline hover:text-[#9A3412]"
                  style={{ background: p.btnBg, color: p.btnFg }}
                  href={p.href}
                >{`${p.short} 상세보기 ›`}</SmartLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
