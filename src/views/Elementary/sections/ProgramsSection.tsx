import SmartLink from "@/components/common/SmartLink";

/** 과정 카드 한 장에 필요한 값(초등정규 · 중고등정규 전체 페이지 공통) */
export type ProgCard = {
  id: string;
  grade: string; // 학년 라벨
  brand: string; // 제목 위 브랜드명
  short: string; // 과정명(제목)
  desc: string; // "보조 문구, 핵심 문구" — 쉼표 뒤는 굵게
  href: string;
  soft: string; // 카드 배경
  line: string; // 카드 테두리
  accent: string; // 아이콘 네모·장식 원
  iconFg: string; // 아이콘 선 색
  ink: string; // 학년 라벨·브랜드명·버튼 색
};

/**
 * cols: 데스크톱·태블릿 열 수(기본 3 — 초등정규 3과정, 중고등정규는 2)
 * iconImg: 카드 오른쪽 위에 아이콘 네모 대신 넣을 이미지(주소·크기). 없으면 기본 아이콘 네모(펼친 책)
 *          초등정규는 '생각하는 나무' 로고 이미지
 */
type Props = {
  progs: ProgCard[];
  cols?: 2 | 3;
  iconImg?: { src: string; width: number; height: number };
};

/**
 * 카드별 강조색(학년 라벨·브랜드명 글자, 상세보기 버튼)
 * - 어휘리더: 어휘리더 페이지 강조색(진한 주황)
 * - 독서리더·논리리더: 카드 색과 어울리는 진한 색(진한 초록 / 진한 파랑, 흰 글자와 대비 충분)
 */
const ACCENT_OF: Record<string, string> = { vocab: "#C2410C" };

export default function ProgramsSection({ progs, cols = 3, iconImg }: Props) {
  return (
    <section
      // 위 타이틀 영역(IntroSection) 바로 아래 카드 목록 — 초등심화 과정 카드 영역과 같은 위 간격
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-5 lg:gap-5 lg:pt-10"
      aria-label="학년별 프로그램"
    >
      {/* 데스크톱: 카드 안쪽 여백·글자·아이콘·버튼을 키워 크게 보이게 */}
      <ul className={`m-0 grid list-none grid-cols-1 gap-3 p-0 lg:gap-5 ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {progs.map((p, i) => {
          const ACCENT = ACCENT_OF[p.id] ?? p.ink;
          return (
          <li key={i} className="flex">
            <article
              // 마우스오버: 메인홈 '한우리 프로그램' 카드와 같은 효과(살짝 위로 뜨며 옅은 회색 그림자)
              className="flex flex-auto flex-col overflow-hidden rounded-[22px] text-[#1F1F1F] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.10)] motion-reduce:transition-none lg:rounded-[28px]"
              // 카드 전체에 학년별 연한 색(초등심화 과정 카드와 같은 방식)
              style={{ border: `1.5px solid ${p.line}`, background: p.soft }}
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
                {/* 오른쪽 위: iconImg가 있으면 그 이미지(장식용), 없으면 아이콘 네모(펼친 책) */}
                {iconImg ? (
                  <img
                    className="absolute top-4.5 right-4.5 h-auto w-16 lg:top-7 lg:right-7 lg:w-[88px]"
                    src={iconImg.src}
                    width={iconImg.width}
                    height={iconImg.height}
                    loading="lazy"
                    alt=""
                    aria-hidden="true"
                  />
                ) : (
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
                )}
                {/* 학년 라벨: 공통 섹션 라벨(SectionLabel)과 같은 크기·여백(모바일 13px·데스크톱 16px), 카드 왼쪽 정렬 */}
                <span
                  className="inline-flex items-center self-start rounded-full bg-white px-3.5 py-1.5 text-[13px] leading-[1.5] font-bold lg:px-4.5 lg:py-2 lg:text-[16px]"
                  style={{ color: ACCENT }}
                >
                  {p.grade}
                </span>
                {/* 제목: '생각하는 나무' + 프로그램명 */}
                <h3 className="m-0 flex flex-col text-[#1F1F1F]">
                  {/* 브랜드명: 비어 있으면 표시하지 않음(예: 중고등정규 전체) */}
                  {p.brand && (
                    <span className="text-[14px] font-bold lg:text-[17px]" style={{ color: ACCENT }}>
                      {p.brand}
                    </span>
                  )}
                  <span className="text-[23px] leading-[1.25] font-extrabold tracking-[-0.03em] lg:text-[32px]">{p.short}</span>
                </h3>
              </div>
              {/* 아래쪽: 설명 + 상세보기 버튼(오른쪽 정렬). 3열 카드라 폭이 좁아 설명은 한 줄 전체, 버튼은 그 아래 오른쪽 */}
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 px-5 pt-1 pb-5 lg:px-8 lg:pb-8">
                {/* 설명: 쉼표 앞(보조 문구)과 뒤(핵심 문구)를 두 줄로 나누고 핵심 문구는 굵게 */}
                <p className="m-0 flex min-w-0 basis-full flex-col text-[15px] leading-[1.55] break-keep text-[#222222] lg:text-[18px]">
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
                {/* 상세보기 버튼: 초등심화와 같은 작은 알약 버튼(페이지 강조색 + 흰 글자) */}
                <SmartLink
                  className="ml-auto inline-flex h-10 flex-none items-center justify-center gap-1 rounded-full px-5 text-[14px] font-bold text-white no-underline lg:h-11 lg:px-6 lg:text-[15px]"
                  style={{ background: ACCENT }}
                  href={p.href}
                >{`${p.short} 상세보기 ›`}</SmartLink>
              </div>
            </article>
          </li>
          );
        })}
      </ul>
    </section>
  );
}
