import SectionLabel from "@/components/common/SectionLabel";
import { inkOf, onAccentOf, type SpecialProgram } from "../specialData";

/**
 * 단기특강 상세 히어로(가운데 정렬): 대상 태그 → 상단 문구 → 제목(+ 작은 문구) → 핵심 문구 → 뱃지 → 수업 정보 박스
 * 배경은 과정의 연한 색, 아래 좌우 모서리 둥글게(다른 상세 히어로와 같은 모양)
 */
export default function HeroSection({ p }: { p: SpecialProgram }) {
  const t = p.theme;
  return (
    <section
      className="relative overflow-hidden rounded-t-none rounded-b-[32px] px-0 pt-9 pb-10 lg:pt-16 lg:pb-20"
      style={{ background: p.heroColor ?? t.soft }}
      aria-labelledby="sp-h"
    >
      {/* 배경 패턴(heroBg, 있을 때): 연한 바탕 위에 확대한 이미지를 옅게 깔기 — 장식이라 화면 읽기 프로그램에서 숨김 */}
      {p.heroBg &&
        (p.heroBg.rotate ? (
          // 회전 배경: 히어로보다 훨씬 큰 판을 가운데 두고 회전 → 모서리까지 빈틈없이 덮음
          // 판 안에는 같은 띠(가로 반복, 높이 band — 이미지 위쪽 글자 부분은 잘라 냄)를 여러 줄 쌓음
          // 불투명도: 모바일 opacity, 데스크톱 opacityLg(없으면 같은 값)
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-(--bg-o) lg:opacity-(--bg-o-lg)"
            style={{ ["--bg-o" as string]: p.heroBg.opacity, ["--bg-o-lg" as string]: p.heroBg.opacityLg ?? p.heroBg.opacity }}
            aria-hidden="true"
          >
            <div
              className="absolute top-1/2 left-1/2 flex w-[3000px] flex-col"
              style={{ transform: `translate(-50%, -50%) rotate(${p.heroBg.rotate}deg)` }}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="w-full flex-none"
                  style={{
                    height: p.heroBg!.band ?? 600,
                    backgroundImage: `url(${p.heroBg!.src})`,
                    backgroundSize: p.heroBg!.size,
                    backgroundPosition: p.heroBg!.position,
                    backgroundRepeat: p.heroBg!.repeat ?? "no-repeat",
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            className="pointer-events-none absolute inset-0 opacity-(--bg-o) lg:opacity-(--bg-o-lg)"
            style={{
              backgroundImage: `url(${p.heroBg.src})`,
              backgroundSize: p.heroBg.size,
              backgroundPosition: p.heroBg.position,
              backgroundRepeat: p.heroBg.repeat ?? "no-repeat",
              ["--bg-o" as string]: p.heroBg.opacity,
              ["--bg-o-lg" as string]: p.heroBg.opacityLg ?? p.heroBg.opacity,
            }}
            aria-hidden="true"
          />
        ))}
      <div className="relative mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-3 px-5 text-center lg:gap-4">
        {p.heroCards ? (
          // 과정 카드 히어로(어휘리더처럼): 태그 대신 공통 섹션 라벨(흰 바탕)
          <SectionLabel color={inkOf(t)} bg="#FFFFFF">
            {p.tag}
          </SectionLabel>
        ) : (
          // 대상 태그: 강조색 바탕 + 강조색 위 글자색
          <span
            className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] leading-[1.5] font-extrabold lg:px-4.5 lg:py-2 lg:text-[16px]"
            style={p.tagTone ? { background: p.tagTone.bg, color: p.tagTone.fg } : { background: t.accent, color: onAccentOf(t) }}
          >
            {p.tag}
          </span>
        )}
        {p.eyebrow && <p className="m-0 text-[15px] leading-[1.5] font-bold break-keep text-[#333333] lg:text-[19px]">{p.eyebrow}</p>}
        {/* 제목: 로고 이미지가 있으면 로고(대체 글 = 과정명), 없으면 글자. 모션: 통통 튀듯 나타남(pop-in) */}
        <h1
          className="m-0 animate-pop-in text-[36px] leading-[1.15] font-extrabold tracking-[-0.04em] break-keep motion-reduce:animate-none lg:text-[60px]"
          style={{ color: t.dark }}
          id="sp-h"
        >
          {p.logo ? (
            <img
              className={`mx-auto block w-auto max-w-full ${p.logoCls ?? "h-24 lg:h-36"}`}
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
        {/* 수업 정보가 2개 이하(예: 참깨한글 대상 · 학습 기간): 가로로 나란한 흰 타일
            타일마다 강조색 동그라미 아이콘(대상: 사람 / 기간: 달력) + 작은 라벨 + 큰 굵은 값 */}
        {p.heroCards ? (
          // 과정 카드(어휘리더 히어로의 교재 카드와 같은 모양): 2열, 페이지가 열릴 때 차례로 떠오름
          // 카드 = 흰 카드 안 연한 과정색 영역(표지) → 과정명 → 수업 정보 줄. 카드를 누르면 같은 페이지 안 과정 소개로 이동
          <div className="mt-2 grid w-full max-w-[720px] grid-cols-2 gap-3 lg:mt-3 lg:gap-5">
            {p.heroCards.map((c, i) => (
              <div
                key={c.name}
                className="flex animate-card-rise motion-reduce:animate-none"
                style={{ animationDelay: `${300 + i * 150}ms`, animationFillMode: "both" }}
              >
                <a
                  className="flex w-full flex-col rounded-[24px] bg-white p-2.5 text-inherit no-underline shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.10)] lg:rounded-[28px] lg:p-3.5"
                  href={c.href ?? "#"}
                  aria-label={`${c.name} 자세히 보기`}
                >
                  {/* 표지 진열 영역(연한 과정색): 표지 이미지(어휘리더와 같은 크기), 없으면 과정명 글자 */}
                  <div
                    className="flex min-h-[88px] items-center justify-center rounded-[18px] px-3 py-4 lg:min-h-[150px] lg:rounded-[22px] lg:px-6 lg:py-7"
                    style={{ background: c.soft }}
                  >
                    {c.cover ? (
                      <img
                        className="block h-28 w-auto max-w-full rounded-[3px] outline outline-1 -outline-offset-1 outline-black/10 sm:h-48 lg:h-64"
                        src={c.cover.src}
                        width={c.cover.w}
                        height={c.cover.h}
                        alt={`${c.name} 교재 표지`}
                        loading="lazy"
                      />
                    ) : (
                      <strong className="text-[20px] leading-[1.25] font-extrabold tracking-[-0.03em] break-keep lg:text-[34px]" style={{ color: c.color }}>
                        {c.name}
                      </strong>
                    )}
                  </div>
                  {/* 과정명(표지가 있을 때 표지 아래) */}
                  {c.cover && (
                    <strong className="mt-4 text-[17px] font-extrabold break-keep lg:mt-5 lg:text-[22px]" style={{ color: c.color }}>
                      {c.name}
                    </strong>
                  )}
                  <dl className="m-0 flex flex-col gap-1.5 px-1 pt-3 pb-3 lg:gap-2 lg:px-3 lg:pt-4 lg:pb-4">
                    {c.info.map(([k, v]) => (
                      <div key={k} className="flex flex-col items-center gap-0.5 lg:flex-row lg:justify-center lg:gap-2">
                        <dt className="text-[12px] font-bold lg:text-[15px]" style={{ color: c.color }}>
                          {k}
                        </dt>
                        <dd className="m-0 text-[15px] font-extrabold break-keep text-[#1F1F1F] lg:text-[18px]">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </a>
              </div>
            ))}
          </div>
        ) : p.info.length <= 2 ? (
          <dl className="mx-0 mt-3 mb-0 box-border grid w-full max-w-[520px] grid-cols-2 gap-2.5 lg:mt-5 lg:gap-4">
            {p.info.map(([k, v]) => (
              <div
                key={k}
                className="box-border flex items-center gap-3 rounded-[18px] bg-white px-4 py-3.5 text-left shadow-[0_6px_16px_rgba(0,0,0,0.05)] lg:gap-4 lg:rounded-[22px] lg:px-6 lg:py-5"
              >
                <span
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full lg:h-13 lg:w-13"
                  style={{ background: t.accent }}
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5 lg:h-6.5 lg:w-6.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={onAccentOf(t)}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {k.includes("기간") ? (
                      <>
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 10h18M8 3v4M16 3v4" />
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21a8 8 0 0 1 16 0" />
                      </>
                    )}
                  </svg>
                </span>
                <div className="flex min-w-0 flex-col">
                  <dt className="text-[12px] leading-[1.4] font-bold lg:text-[14px]" style={{ color: inkOf(t) }}>
                    {k}
                  </dt>
                  <dd className="m-0 text-[17px] leading-[1.3] font-extrabold break-keep text-[#1F1F1F] lg:text-[22px]">{v}</dd>
                </div>
              </div>
            ))}
          </dl>
        ) : (
        /* 수업 정보: 흰 박스 안에 줄마다 왼쪽 알약 라벨 · 오른쪽 내용(다른 상세 히어로 정보 박스와 같은 모양) */
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
        )}
      </div>
    </section>
  );
}
