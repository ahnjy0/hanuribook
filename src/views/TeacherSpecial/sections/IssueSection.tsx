/** 기사 제목 카드: [앞, 굵게, 뒤] — 굵은 부분만 진하게 */
const HEADLINES: [string, string, string][] = [
  ["", "'문해력' 저하", " 논란… 교육 현장 '위기감'"],
  ["활자보다 영상에 익숙한 MZ세대, ", "문해력", " 저하 심각"],
  ['"금일을 금요일로 잘못 이해… ', "문해력 저하", ' 심각"'],
];

/**
 * 문제 제기: 짧고 자극적인 콘텐츠 → 문해력 저하(기사 제목 카드 3개)
 * 그와 반대로 높아지는 논술·서술·구술 능력의 중요성(평가 확대 원 + 세 능력 삼각형)
 */
export default function IssueSection() {
  return (
    <section className="mt-10 bg-[linear-gradient(180deg,#FFF6D6_0%,#FFE7A8_100%)] lg:mt-16" aria-labelledby="ts-issue">
      <div className="mx-auto my-0 box-border flex max-w-[960px] flex-col items-center gap-8 px-5 py-12 lg:gap-12 lg:py-20">
        {/* 휴대폰 아이콘 + 제목 */}
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:gap-6 lg:text-left">
          <span
            className="flex h-20 w-20 flex-none items-center justify-center rounded-[24px] bg-white shadow-[0_8px_20px_rgba(242,101,34,0.18)] lg:h-24 lg:w-24"
            aria-hidden="true"
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
              <path d="M10.5 18.5h3" />
              <path d="m10 9 4 2.5-4 2.5z" fill="#F26522" />
            </svg>
          </span>
          <h2 className="m-0 text-[22px] leading-[1.45] font-extrabold break-keep text-[#2B2B2B] lg:text-[32px]" id="ts-issue">
            짧고 자극적인
            <br />
            콘텐츠에 노출되는 아이들과
            <br />
            지속되는 문해력 저하 현상
          </h2>
        </div>
        {/* 기사 제목 카드 */}
        <ul className="m-0 flex w-full list-none flex-col gap-2.5 p-0 lg:gap-3">
          {HEADLINES.map(([a, b, c]) => (
            <li
              key={b + c}
              className="rounded-[4px] bg-white/85 px-4 py-3.5 text-center text-[15px] break-keep text-[#333333] shadow-[0_2px_8px_rgba(0,0,0,0.05)] lg:py-4 lg:text-[19px]"
            >
              {a}
              <strong className="font-extrabold text-[#1F1F1F]">{b}</strong>
              {c}
            </li>
          ))}
        </ul>
        {/* 그와 반대로: 논술 · 서술 · 구술 */}
        <h3 className="m-0 mt-2 text-center text-[21px] leading-[1.45] font-extrabold break-keep text-[#2B2B2B] lg:text-[30px]">
          그와 반대로 높아지는
          <br />
          논술·서술·구술 능력의 중요성
        </h3>
        <div className="flex w-full flex-col items-center gap-8 rounded-[20px] bg-white px-5 py-8 sm:flex-row sm:justify-center sm:gap-12 lg:gap-20 lg:py-12">
          {/* 평가 확대 원 + 위 리본 */}
          <div className="relative flex flex-col items-center">
            <span className="relative z-10 -mb-3 rounded-[4px] bg-[#F26522] px-3 py-1 text-center text-[12px] leading-[1.35] font-bold text-white lg:text-[14px]">
              교육 과정
              <br />
              개편 이후
            </span>
            <span className="flex h-36 w-36 items-center justify-center rounded-full bg-[#5A4636] text-center text-[17px] leading-[1.4] font-extrabold text-white lg:h-44 lg:w-44 lg:text-[21px]">
              논·서술형
              <br />
              평가 확대
            </span>
          </div>
          {/* 세 능력 삼각형: 가운데 '중요도 UP' */}
          <div className="relative h-[170px] w-[230px] lg:h-[200px] lg:w-[270px]" aria-label="논술 · 서술 · 구술 중요도 UP" role="img">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 230 170" aria-hidden="true">
              <path d="M115 22 L42 148 L188 148 Z" fill="none" stroke="#5A4636" strokeWidth="2" />
              <path d="M115 52 L70 132 L160 132 Z" fill="#FFC72C" />
            </svg>
            <span className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[13px] leading-[1.2] font-extrabold text-[#5A4636] lg:text-[15px]">
              중요도
              <br />
              UP
            </span>
            {[
              ["논술", "top-0 left-1/2 -translate-x-1/2"],
              ["서술", "bottom-0 left-0"],
              ["구술", "right-0 bottom-0"],
            ].map(([t, pos]) => (
              <span
                key={t}
                className={`absolute rounded-[8px] border border-solid border-[#5A4636] bg-[#EFE6DC] px-3.5 py-1 text-[14px] font-bold text-[#3B2E24] lg:text-[16px] ${pos}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
