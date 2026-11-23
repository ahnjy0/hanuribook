import { inkOf, onAccentOf, type SpecialProgram } from "../specialData";

/**
 * 단기특강 상세 히어로(가운데 정렬): 대상 태그 → 상단 문구 → 제목(+ 작은 문구) → 핵심 문구 → 뱃지 → 수업 정보 박스
 * 배경은 과정의 연한 색, 아래 좌우 모서리 둥글게(다른 상세 히어로와 같은 모양)
 */
export default function HeroSection({ p }: { p: SpecialProgram }) {
  const t = p.theme;
  return (
    <section className="rounded-t-none rounded-b-[32px] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20" style={{ background: t.soft }} aria-labelledby="sp-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-3 px-5 text-center lg:gap-4">
        {/* 대상 태그: 강조색 바탕 + 강조색 위 글자색 */}
        <span
          className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] leading-[1.5] font-extrabold lg:px-4.5 lg:py-2 lg:text-[16px]"
          style={{ background: t.accent, color: onAccentOf(t) }}
        >
          {p.tag}
        </span>
        {p.eyebrow && <p className="m-0 text-[15px] leading-[1.5] font-bold break-keep text-[#333333] lg:text-[19px]">{p.eyebrow}</p>}
        {/* 제목: 로고 이미지가 있으면 로고(대체 글 = 과정명), 없으면 글자. 모션: 통통 튀듯 나타남(pop-in) */}
        <h1
          className="m-0 animate-pop-in text-[36px] leading-[1.15] font-extrabold tracking-[-0.04em] break-keep motion-reduce:animate-none lg:text-[60px]"
          style={{ color: t.dark }}
          id="sp-h"
        >
          {p.logo ? (
            <img
              className="mx-auto block h-24 w-auto max-w-full lg:h-36"
              src={p.logo.src}
              width={p.logo.w}
              height={p.logo.h}
              alt={p.title}
            />
          ) : (
            p.title
          )}
        </h1>
        {p.titleSub && <p className="m-0 -mt-1 text-[14px] font-semibold break-keep text-[#555555] lg:text-[17px]">{p.titleSub}</p>}
        {/* 핵심 문구: 굵은 진한 글자(밑줄 없음) */}
        <p className="m-0 text-[18px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[26px]">{p.slogan}</p>
        {p.badges && (
          <ul className="m-0 mt-1 flex list-none flex-wrap justify-center gap-1.5 p-0 lg:gap-2">
            {p.badges.map((b) => (
              <li
                key={b}
                className="rounded-full border-[1.5px] border-solid bg-white px-3 py-1 text-[12px] font-bold lg:px-4 lg:py-1.5 lg:text-[14px]"
                style={{ borderColor: t.accent, color: inkOf(t) }}
              >
                ★ {b}
              </li>
            ))}
          </ul>
        )}
        {/* 수업 정보: 흰 박스 안에 줄마다 왼쪽 알약 라벨 · 오른쪽 내용(다른 상세 히어로 정보 박스와 같은 모양) */}
        <dl className="mx-0 mt-3 mb-0 box-border grid w-full max-w-[600px] grid-cols-1 gap-2.5 rounded-[18px] bg-white px-4 py-4 shadow-[0_6px_16px_rgba(0,0,0,0.05)] lg:mt-4 lg:gap-3 lg:rounded-[20px] lg:px-6 lg:py-5">
          {p.info.map(([k, v]) => (
            <div key={k} className="box-border flex items-center gap-3 text-left lg:gap-4">
              <dt
                className="box-border inline-flex w-[84px] flex-none items-center justify-center rounded-full py-1 text-[13px] leading-[1.5] font-bold lg:w-[96px] lg:text-[14px]"
                style={{ color: inkOf(t), background: `${t.accent}26` }}
              >
                {k}
              </dt>
              <dd className="m-0 flex min-w-0 flex-col text-[14px] leading-[1.5] font-medium break-keep text-[#333333] lg:text-[15px]">
                {v.split("\n").map((line, i) => (
                  <span key={i} className={i > 0 ? "text-[12px] text-[#6B6B6B] lg:text-[13px]" : undefined}>
                    {line}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
