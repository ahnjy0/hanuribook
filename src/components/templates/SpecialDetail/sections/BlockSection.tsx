import { useEffect, useRef, useState, type ReactNode } from "react";
import SectionTitle from "@/views/Socrates/sections/SectionTitle";
import SectionLabel from "@/components/common/SectionLabel";
import CheckIcon from "@/components/common/CheckIcon";
import { inkOf, onAccentOf, type PointIcon, type SpecialBlock, type SpecialTheme } from "../specialData";

/** 주요 특징 짧은 문구 카드 아이콘(24×24 선) */
const POINT_ICONS: Record<PointIcon, ReactNode> = {
  // 펼친 책
  book: <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />,
  // 겹친 층(갈래 · 주제별)
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
  // 고리(연계)
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
  // 연필(서술 · 논술)
  pen: <path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" />,
  // 전구(어휘 · 배경지식)
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />,
  // 돋보기(탐독)
  search: <path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM15.5 15.5L20 20" />,
  // 과녁(실전 대비)
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" />
    </>
  ),
};

/** 블록 종류별 제목 아이콘(24×24 선) — 왼쪽 정렬 섹션 제목을 쓰는 블록만 */
const ICONS: Record<"points" | "steps" | "flow" | "tables", ReactNode> = {
  // 별(특징)
  points: <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />,
  // 계단(단계)
  steps: (
    <>
      <path d="M3 20h4v-4h4v-4h4V8h4V4" />
      <path d="M3 20h18" />
    </>
  ),
  // 오가는 화살표(흐름)
  flow: (
    <>
      <path d="M4 7h14l-3-3M18 7l-3 3" />
      <path d="M20 17H6l3-3M6 17l3 3" />
    </>
  ),
  // 표
  tables: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M3 15h18M9 4v16" />
    </>
  ),
};

/** 칸 안 \n 을 줄로 나눠 보여 줌 */
const lines = (s: string) =>
  s.split("\n").map((l, i) => (
    <span key={i} className="block">
      {l}
    </span>
  ));

/**
 * 단기특강 상세 본문 블록: 소크라테스 본문과 같은 섹션 제목(왼쪽 정렬 + 강조색 타일 아이콘) + 블록 내용
 * - points: 특징 카드(라벨 → 제목 → 설명 → 형광펜 강조 문장)
 * - steps: 번호가 붙은 단계 카드
 * - flow: 묶음(예: 1~3차시)마다 단계가 › 로 이어지는 흐름
 * - tables: 표(좁은 화면에서는 표만 가로 스크롤)
 */
/** 학습 효과 카드 아이콘(선 아이콘): 책 · 전구 · 연필 · 체크 목록(4번째 카드가 있을 때) */
const EFFECT_ICONS: ReactNode[] = [
  <path key="book" d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />,
  <path key="bulb" d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />,
  <path key="pencil" d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" />,
  <path key="check" d="M6 3h12v18H6zM9 9l1.5 1.5L13 8M9 15l1.5 1.5L13 14" />,
];

/**
 * 고민 슬라이드: 한 번에 하나씩 크게 보여 주고, 1초 동안 옆으로 밀려 넘어간 뒤 1초 멈춤(마지막 다음은 처음으로)
 * - 화면에 보일 때만 자동으로 넘어가고, 마우스를 올리거나 키보드 포커스가 있으면 멈춤
 * - 아래 점(●)을 눌러 원하는 장으로 이동. '동작 줄이기' 설정이면 자동 넘김 · 밀림 모션 없음
 */
function WorrySlider({ slides, dot }: { slides: { key: string; node: ReactNode }[]; dot: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!visible || paused || reduce) return;
    // 넘김 모션 1초 + 멈춤 1초 = 2초마다 다음 장
    const id = window.setTimeout(() => setCur((c) => (c + 1) % slides.length), 2000);
    return () => window.clearTimeout(id);
  }, [cur, visible, paused, reduce, slides.length]);
  return (
    <div
      ref={ref}
      className="flex w-full max-w-[840px] flex-col items-center gap-4 lg:gap-6"
      role="region"
      aria-roledescription="carousel"
      aria-label="엄마들의 고민"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="w-full overflow-hidden pb-1">
        <ul
          className={`m-0 flex list-none p-0 ${reduce ? "" : "transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {slides.map((s, i) => (
            <li
              key={s.key}
              className="flex w-full flex-none justify-center"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}`}
              aria-hidden={i !== cur}
            >
              {s.node}
            </li>
          ))}
        </ul>
      </div>
      {/* 장 표시 점: 현재 장은 길쭉한 강조색 */}
      <div className="flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            className="h-2.5 cursor-pointer rounded-full border-0 p-0 transition-[width,background-color] duration-300"
            style={{ width: i === cur ? 28 : 10, background: i === cur ? dot : "#D9D9D9" }}
            aria-label={`${i + 1}번째 고민 보기`}
            aria-current={i === cur}
            onClick={() => setCur(i)}
          />
        ))}
      </div>
    </div>
  );
}

/** 학습 효과 왼쪽 정렬 제목 아이콘: 위로 오르는 그래프(성장) */
const EFFECT_TITLE_ICON = <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />;

/** 문장 속 em 부분만 굵게 + 지정한 글자색 */
function emText(text: string, em: string | undefined, color: string) {
  const i = em ? text.indexOf(em) : -1;
  if (!em || i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-extrabold" style={{ color }}>
        {em}
      </strong>
      {text.slice(i + em.length)}
    </>
  );
}

/** 문장 속 em 부분만 굵고 크게 */
function withEm(text: string, em: string) {
  const i = text.indexOf(em);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong className="text-[16px] font-extrabold text-[#1F1F1F] lg:text-[19px]">{em}</strong>
      {text.slice(i + em.length)}
    </>
  );
}

/**
 * 섹션 라벨은 초등정규 상세 페이지와 같은 공통 SectionLabel(가운데 둥근 알약, 강조 글자색 + 연한 바탕)
 * centered: 일반 블록(points · steps · flow · tables) 제목도 가운데 라벨로(아니면 왼쪽 정렬 타일 아이콘 제목)
 */
export default function BlockSection({
  b,
  t,
  idx,
  centered = false,
  nested = false,
}: {
  b: SpecialBlock;
  t: SpecialTheme;
  idx: number;
  centered?: boolean;
  nested?: boolean; // true 면 과정 소개 박스 안에 들어간 블록(바깥 여백 · 최대 폭 없이, 위 간격 좁게)
}) {
  const id = `sp-b${idx}`;
  const onA = onAccentOf(t); // 강조색 바탕 위 글자색
  const ink = inkOf(t); // 흰 바탕 위 강조 글자색

  // 고민 말풍선: 가운데 제목 + 채팅처럼 한 줄씩 좌우 번갈아(아이콘 · 말풍선 / 말풍선 · 아이콘)
  // 말풍선 색: 노랑 · 살구 핑크를 아주 연하게 번갈아 + 진한 글자, 꼬리는 아이콘 쪽
  if (b.kind === "bubbles") {
    return (
      <section className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-6 px-5 pt-13 lg:gap-10 lg:pt-24" aria-labelledby={id}>
        <h2 className="m-0 text-center text-[22px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[32px]" id={id}>
          {/* 줄마다 나누고, em 부분은 강조 글자색(밑줄 없음) */}
          {b.title.split("\n").map((l, li) => {
            const at = b.em ? l.indexOf(b.em) : -1;
            return (
              <span key={li} className="block">
                {at < 0 || !b.em ? (
                  l
                ) : (
                  <>
                    {l.slice(0, at)}
                    <span style={{ color: ink }}>{b.em}</span>
                    {l.slice(at + b.em.length)}
                  </>
                )}
              </span>
            );
          })}
        </h2>
        {/* 제목 아래 작은 문구(있을 때): subEm 부분은 강조 글자색 */}
        {b.sub && (
          <p className="m-0 -mt-3 text-center text-[15px] leading-[1.5] font-semibold break-keep text-[#333333] lg:-mt-5 lg:text-[19px]">
            {b.subEm && b.sub.includes(b.subEm) ? (
              <>
                {b.sub.slice(0, b.sub.indexOf(b.subEm))}
                <strong className="font-extrabold whitespace-nowrap" style={{ color: b.emColor ?? ink }}>
                  {/* 경고 아이콘(삼각형 + 느낌표): 글자와 같은 색, 글자 높이에 맞춤 */}
                  {b.subAlert && (
                    <svg className="mr-1 inline-block h-[1.15em] w-[1.15em] -translate-y-[0.12em] align-middle" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.5 1.5 21h21z" fill="currentColor" strokeLinejoin="round" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 9.5v5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                      <circle cx="12" cy="17.6" r="1.3" fill="#FFFFFF" />
                    </svg>
                  )}
                  {b.subEm}
                </strong>
                {b.sub.slice(b.sub.indexOf(b.subEm) + b.subEm.length)}
              </>
            ) : (
              b.sub
            )}
          </p>
        )}
        {b.figures ? (
          // 슬라이드(figures 있을 때, 예: 다다어휘): 질문 하나씩 크게(말풍선 → 그 아래 고민하는 엄마), 자동으로 옆으로 넘어감
          <WorrySlider
            slides={b.items.map((q, i) => {
              const bg = b.bubbleBg ? b.bubbleBg[i % 2] : i % 2 ? `${t.dark}1F` : `${t.accent}40`;
              const f = b.figures?.[i];
              return {
                key: q.text,
                node: (
                  <div className="box-border flex w-full flex-col items-center gap-5 px-1 lg:gap-7">
                    <p
                      className="relative m-0 box-border w-full max-w-[640px] rounded-[24px] px-6 py-6 text-center text-[18px] leading-[1.5] font-semibold break-keep text-[#1F1F1F] lg:rounded-[32px] lg:px-12 lg:py-9 lg:text-[28px]"
                      style={{ background: bg }}
                    >
                      “{emText(q.text, q.em, b.emColor ?? ink)}”
                      {/* 꼬리: 아래 엄마 쪽을 향한 삼각형(가운데 아래) */}
                      <span
                        className="absolute -bottom-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 lg:-bottom-3 lg:h-6 lg:w-6"
                        style={{ background: bg }}
                        aria-hidden="true"
                      />
                    </p>
                    {f && (
                      // 엄마: 틀 없이 이미지 전체(잘라 내지 않음). 그림 둘레 투명 여백만큼 위아래 음수 여백으로 간격을 줄임
                      <img
                        className="-my-6 block h-48 w-48 flex-none lg:-my-8 lg:h-64 lg:w-64"
                        src={f.src}
                        width={f.w}
                        height={f.h}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                    )}
                  </div>
                ),
              };
            })}
            dot={ink}
          />
        ) : (
        <ul className="m-0 flex w-full max-w-[840px] list-none flex-col gap-4 p-0 lg:gap-6">
          {b.items.map((q, i) => {
            const right = i % 2 === 1; // 오른쪽 줄: 아이콘이 오른쪽
            const bg = b.bubbleBg ? b.bubbleBg[right ? 1 : 0] : right ? `${t.dark}1F` : `${t.accent}40`;
            return (
              <li key={q.text} className={`flex items-end gap-3 lg:gap-4 ${right ? "flex-row-reverse" : ""}`}>
                {q.icon && (
                  // 아이콘: 동그라미 틀(테두리 없음). 인물이 가운데 작게 있어 확대(scale)해서 틀을 채움
                  <span
                    className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-full bg-white lg:h-24 lg:w-24"
                    aria-hidden="true"
                  >
                    <img className="block h-full w-full scale-[1.55] object-cover" src={q.icon.src} width={q.icon.w} height={q.icon.h} alt="" loading="lazy" />
                  </span>
                )}
                <p
                  className={`relative m-0 mb-2 rounded-[22px] px-6 py-5 text-[16px] leading-[1.5] font-semibold break-keep text-[#1F1F1F] lg:mb-3 lg:rounded-[28px] lg:px-10 lg:py-7 lg:text-[22px] ${
                    right ? "rounded-br-[6px] lg:rounded-br-[8px]" : "rounded-bl-[6px] lg:rounded-bl-[8px]"
                  }`}
                  style={{ background: bg }}
                >
                  {/* em 부분(있을 때)은 굵게 + 강조 글자색 */}“
                  {q.em && q.text.includes(q.em) ? (
                    <>
                      {q.text.slice(0, q.text.indexOf(q.em))}
                      <strong className="font-extrabold" style={{ color: b.emColor ?? ink }}>
                        {q.em}
                      </strong>
                      {q.text.slice(q.text.indexOf(q.em) + q.em.length)}
                    </>
                  ) : (
                    q.text
                  )}
                  ”
                </p>
              </li>
            );
          })}
        </ul>
        )}
        {/* 선생님 답변: 진한 살구 핑크 말풍선 안에 선생님 아이콘 + 흰 굵은 글자로 눈에 띄게. em 부분은 노랑 강조 */}
        {b.answer && (
          // 말풍선 하나 안에 왼쪽 선생님 아이콘(흰 동그라미) + 오른쪽 답변 글
          <div
            className="mt-2 box-border flex w-full max-w-[840px] items-center gap-4 rounded-[22px] px-5 py-5 lg:mt-4 lg:gap-6 lg:rounded-[28px] lg:px-8 lg:py-7"
            style={{ background: t.dark }}
          >
            {b.answer.icon && (
              <span
                className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-full bg-white lg:h-24 lg:w-24"
                aria-hidden="true"
              >
                <img
                  className="block h-full w-full scale-[1.55] object-cover"
                  src={b.answer.icon.src}
                  width={b.answer.icon.w}
                  height={b.answer.icon.h}
                  alt=""
                  loading="lazy"
                />
              </span>
            )}
            <div className="min-w-0">
              <p className="m-0 text-[16px] leading-[1.55] font-bold break-keep text-white lg:text-[22px]">
                {b.answer.em && b.answer.text.includes(b.answer.em) ? (
                  <>
                    {b.answer.text.slice(0, b.answer.text.indexOf(b.answer.em))}
                    <strong className="font-extrabold" style={{ color: t.hi }}>
                      {b.answer.em}
                    </strong>
                    {b.answer.text.slice(b.answer.text.indexOf(b.answer.em) + b.answer.em.length)}
                  </>
                ) : (
                  b.answer.text
                )}
              </p>
            </div>
          </div>
        )}
      </section>
    );
  }

  // 학습 효과 띠: 진한 배경 전체 폭 + 가운데 라벨(흰 바탕) · 흰 제목 · 흰 설명 + 3열 아이콘 카드(굵은 강조)
  if (b.kind === "effects") {
    return (
      // 왼쪽 정렬 제목 페이지(centered 아님, 예: 문학 특강): 배경 띠 없이 수업 흐름처럼 왼쪽 정렬 타일 아이콘 제목 + 카드
      <section
        className={centered ? "mt-13 px-0 py-10 lg:mt-24 lg:py-20" : "px-0 pt-13 lg:pt-24"}
        style={centered ? { background: t.dark } : undefined}
        aria-labelledby={id}
      >
        {!centered && (
          <div className="mx-auto my-0 box-border max-w-[1200px] px-5">
            <SectionTitle id={id} color={ink} icon={EFFECT_TITLE_ICON}>
              <span className="break-keep">{b.label}</span>
            </SectionTitle>
          </div>
        )}
        {centered && (
        <div className="mx-auto my-0 box-border flex max-w-[860px] flex-col items-center gap-3 px-5 text-center lg:gap-4">
          <SectionLabel color={ink} bg="#FFFFFF">
            {b.label}
          </SectionLabel>
          {b.eyebrow && <p className="m-0 -mb-2 text-[15px] font-bold break-keep text-white/90 lg:-mb-3 lg:text-[19px]">{b.eyebrow}</p>}
          {b.title ? (
            <h2 className="m-0 text-[26px] font-extrabold break-keep text-white lg:text-[38px]" id={id}>
              {b.title}
            </h2>
          ) : (
            // 제목이 없으면 화면 읽기 프로그램용 제목만(라벨 글자)
            <h2 className="sr-only" id={id}>
              {b.label}
            </h2>
          )}
          {b.desc && <p className="m-0 text-[14px] leading-[1.6] break-keep text-white/90 lg:text-[18px]">{lines(b.desc)}</p>}
        </div>
        )}
        {/* 카드: 초등심화 과학탐탐 '프로그램 특징' 카드와 같은 모양
            연한 바탕 카드 + 흰 동그라미 안 선 아이콘(옅은 강조색 그림자) + 번호 + 문구
            모바일: 아이콘 왼쪽 · 글 오른쪽 / 태블릿 이상: 3열, 세로 가운데 정렬. 아래에서 차례로 떠오름 */}
        <ol
          className={`mx-auto mb-0 box-border grid max-w-[1200px] list-none grid-cols-1 gap-3 px-5 lg:gap-5 ${centered ? "mt-6 lg:mt-10" : "mt-5 lg:mt-7"} ${
            b.items.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
          }`}
        >
          {b.items.map((it, i) =>
            !centered || b.numbered ? (
              // 번호 강조 카드(왼쪽 정렬 페이지 · numbered): 아이콘 없이 번호 + 설명 중심
              // 흰 카드 + 연한 테두리, 위 왼쪽 큰 번호 → 짧은 구분선 → 설명
              // 번호 색: 왼쪽 정렬 페이지는 강조색, 진한 띠 위(참깨한글)는 띠 색(dark)
              <li
                key={it.text}
                className="flex animate-card-rise flex-col items-start gap-3 rounded-[20px] border-[1.5px] border-solid bg-white px-5 py-6 motion-reduce:animate-none lg:gap-4 lg:rounded-[24px] lg:px-7 lg:py-8"
                style={{ borderColor: `${t.accent}33`, animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
              >
                <span
                  className="text-[30px] leading-none font-extrabold tracking-[-0.02em] lg:text-[44px]"
                  style={{ color: centered ? t.dark : t.accent }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-[3px] w-8 rounded-full lg:w-10" style={{ background: centered ? t.dark : t.accent }} aria-hidden="true" />
                {it.title && (
                  <strong className="text-[17px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">{it.title}</strong>
                )}
                <p className="m-0 text-[15px] leading-[1.6] font-semibold break-keep text-[#1F1F1F] lg:text-[18px]">
                  {it.em ? withEm(it.text, it.em) : it.text}
                </p>
              </li>
            ) : (
            <li
              key={it.text}
              className="flex animate-card-rise flex-row items-center gap-4 rounded-[20px] px-5 py-5 motion-reduce:animate-none md:flex-col md:gap-4 md:px-6 md:py-8 md:text-center lg:rounded-[24px] lg:py-10"
              style={{ background: t.soft, animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
            >
              {/* 아이콘(순서대로 책 · 전구 · 연필, 넘치면 반복) */}
              <span
                className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white lg:h-24 lg:w-24"
                style={{ boxShadow: `0 8px 18px ${t.dark}24` }}
                aria-hidden="true"
              >
                <svg
                  className="h-8 w-8 lg:h-11 lg:w-11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={t.dark}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {EFFECT_ICONS[i % EFFECT_ICONS.length]}
                </svg>
              </span>
              <div className="flex flex-col gap-1 md:items-center lg:gap-2">
                <span className="text-[13px] font-extrabold tracking-[0.04em] lg:text-[15px]" style={{ color: ink }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {it.title && (
                  <strong className="text-[17px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">{it.title}</strong>
                )}
                <p className="m-0 text-[15px] leading-[1.55] font-semibold break-keep text-[#333333] lg:text-[17px]">
                  {it.em ? withEm(it.text, it.em) : it.text}
                </p>
              </div>
            </li>
            ),
          )}
        </ol>
      </section>
    );
  }

  // 학습 과정(과정 카드): 가운데 라벨 + 3열 카드(흰 카드: 과정 로고 → 대상 설명 → 구분선 → 굵은 과정명)
  // 과정 안내 카드: 중고등정규 중등(소크라테스) '과정 안내'와 같은 모양 — 왼쪽 정렬 타일 아이콘 제목 + 2열 카드
  if (b.kind === "courseCards") {
    return (
      <section className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11 lg:gap-5 lg:pt-24" aria-labelledby={id}>
        {/* 제목 아이콘: 한 단계씩 올라가는 계단(과정 단계) */}
        <SectionTitle
          id={id}
          color={ink}
          icon={
            <>
              <path d="M3 20h4v-4h4v-4h4V8h4V4" />
              <path d="M3 20h18" />
            </>
          }
        >
          {b.label}
        </SectionTitle>
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {b.items.map((c) => (
            <article
              key={c.name}
              id={c.id}
              className="flex scroll-mt-24 flex-col gap-3 rounded-[24px] border border-solid border-[#EEEEEE] bg-white px-5 py-5.5 lg:px-6 lg:py-6"
            >
              {/* 학년 라벨 + 학습 기간 뱃지(흰 바탕 + 과정색 테두리) */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-[6px] px-2 py-1 text-[12px] font-bold lg:text-[13px]" style={{ background: c.chip.bg, color: c.chip.fg }}>
                  {c.grade}
                </span>
                {c.period && (
                  <span
                    className="rounded-[6px] border border-solid bg-white px-2 py-[3px] text-[12px] font-bold lg:text-[13px]"
                    style={{ borderColor: `${c.color}80`, color: c.color }}
                  >
                    {c.period}
                  </span>
                )}
              </div>
              <h3 className="m-0 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[21px] font-extrabold lg:text-[24px]">
                {c.name}
                {c.sub && (
                  <span className="text-[15px] font-bold" style={{ color: c.color }}>
                    {c.sub}
                  </span>
                )}
              </h3>
              {/* 목표: 진한 글자 + 굵게 */}
              <p className="m-0 text-[15px] leading-[1.55] font-bold break-keep text-[#1F1F1F] lg:text-[17px]">{c.goal}</p>
              {c.points && (
                // 체크 목록(과정색 체크)
                <ul className="m-0 flex list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] text-[#222222] lg:text-[15px]">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 leading-[1.5]">
                      <CheckIcon color={c.color} />
                      <span className="min-w-0 break-keep">{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
              {c.info && (
                // 구성 정보: 항목명(과정색) + 내용(\n 둘째 줄부터 작은 회색)
                <dl className="m-0 flex flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5">
                  {c.info.map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <dt className="w-[72px] flex-none text-[13px] leading-[1.5] font-bold lg:w-[80px] lg:text-[14px]" style={{ color: c.color }}>
                        {k}
                      </dt>
                      <dd className="m-0 flex min-w-0 flex-col text-[13px] leading-[1.5] break-keep text-[#222222] lg:text-[14px]">
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
            </article>
          ))}
        </div>
      </section>
    );
  }

  // 과정 소개 띠(한 페이지에 과정이 여러 개일 때 과정 사이 구분): 연한 과정색 띠(전체 폭, 위아래 둥근 모서리) 위 가운데
  // 대상 태그 → 상단 문구 → 과정명(크게, 강조 글자색) → 보조 문구 → 핵심 문구 → 뱃지 → 수업 정보(흰 박스, 줄마다 알약 라벨 + 내용)
  if (b.kind === "intro") {
    return (
      // 배경색 있는 섹션: 연한 과정색 띠(전체 폭) 위에 가운데 내용(최대 1200px)
      <section
        id={b.id}
        className="mt-13 box-border scroll-mt-24 px-0 py-11 lg:mt-24 lg:py-20"
        style={{ background: t.soft }}
        aria-labelledby={id}
      >
        <div className="mx-auto box-border flex max-w-[1200px] flex-col items-center gap-3 px-5 text-center lg:gap-4">
          {b.eyebrow && <p className="m-0 text-[14px] leading-[1.5] font-bold break-keep text-[#333333] lg:text-[18px]">{b.eyebrow}</p>}
          {/* 대상(연령) 박스 + 과정명 한 줄: 박스가 과정명 왼쪽. 과정명은 로고 이미지가 있으면 로고(대체 글 = 과정명), 없으면 글자 */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:gap-x-4">
            {/* 연령 박스: 과정색 네모(오른쪽 아래 모서리만 각지게, 나머지 둥글게) 안 흰 굵은 연령(+ 아래 작은 보충, 예: (중2~3)) */}
            <span
              // 높이: 과정명 글자 높이에 맞춤(줄 하나짜리 연령도 과정명만큼 — 최소 높이 + 같은 줄에서 위아래로 늘어남)
              className="my-1 flex min-h-[34px] flex-none flex-col items-center justify-center self-stretch rounded-[10px] rounded-br-none px-2.5 py-1 leading-[1.15] lg:my-1.5 lg:min-h-[54px] lg:rounded-[14px] lg:rounded-br-none lg:px-4 lg:py-1.5"
              style={{ background: t.accent, color: onA }}
            >
              <span className="text-[15px] font-extrabold lg:text-[22px]">{b.tag}</span>
              {b.tagSub && <span className="text-[11px] font-semibold opacity-90 lg:text-[15px]">{b.tagSub}</span>}
            </span>
            <h2 className="m-0 text-[32px] leading-[1.2] font-extrabold tracking-[-0.04em] break-keep lg:text-[52px]" style={{ color: ink }} id={id}>
              {b.logo ? (
                <img
                  className={`block w-auto max-w-full ${b.logoCls ?? "h-20 lg:h-28"}`}
                  src={b.logo.src}
                  width={b.logo.w}
                  height={b.logo.h}
                  alt={b.name}
                  loading="lazy"
                />
              ) : (
                b.name
              )}
            </h2>
          </div>
          {b.titleSub && <p className="m-0 -mt-1 text-[14px] font-semibold break-keep text-[#555555] lg:text-[17px]">{b.titleSub}</p>}
          <p className="m-0 text-[17px] leading-[1.45] font-extrabold break-keep text-[#1F1F1F] lg:text-[24px]">{b.slogan}</p>
          {/* 소개글(있을 때): 핵심 문구 아래 보통 굵기 */}
          {b.desc && (
            <p className="m-0 max-w-[720px] text-center text-[14px] leading-[1.65] break-keep text-[#444444] lg:text-[17px]">{b.desc}</p>
          )}
          {b.badges && (
            // 뱃지: 크게 강조 — 강조색으로 채운 알약 + 흰 굵은 글자
            <ul className="m-0 mt-2 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-3 lg:gap-3">
              {b.badges.map((bd) => (
                <li
                  key={bd}
                  className="rounded-full px-4.5 py-2 text-[15px] leading-[1.4] font-extrabold break-keep lg:px-7 lg:py-3 lg:text-[19px]"
                  style={{ background: t.accent, color: onA }}
                >
                  ★ {bd}
                </li>
              ))}
            </ul>
          )}
          {/* 수업 정보: 히어로 정보 박스와 같은 모양 */}
          <dl className="mx-0 mt-3 mb-0 box-border grid w-full max-w-[600px] grid-cols-1 gap-2.5 rounded-[18px] bg-white px-4 py-4 lg:mt-4 lg:gap-3 lg:rounded-[20px] lg:px-6 lg:py-5">
            {b.info.map(([k, v]) => (
              <div key={k} className="box-border flex items-center gap-3 text-left lg:gap-4">
                <dt
                  className="box-border inline-flex w-[84px] flex-none items-center justify-center rounded-full py-1 text-[13px] leading-[1.5] font-bold lg:w-[96px] lg:text-[14px]"
                  style={{ color: ink, background: `${t.accent}26` }}
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
          {/* 박스 안 블록들(children): 연한 띠 위라 라벨 · 카드 바탕(soft)을 흰색으로 바꿔서 그림
              제목은 페이지 방식을 따름(가운데 라벨 페이지면 가운데 라벨, 아니면 수업 내용처럼 왼쪽 정렬 타일 아이콘 제목) */}
          {b.children?.map((c, i) => (
            <BlockSection key={i} b={c} t={{ ...t, soft: "#FFFFFF" }} idx={idx * 100 + i + 1} centered={centered} nested />
          ))}
        </div>
      </section>
    );
  }

  if (b.kind === "courses") {
    return (
      // 배경: 연한 색 띠(전체 폭) — 그 위 라벨은 흰 바탕, 카드는 흰 카드 + 연한 테두리(그림자 없음)
      <section className="mt-13 px-0 py-10 lg:mt-24 lg:py-16" style={{ background: t.soft }} aria-label={b.label}>
        <div className="mx-auto my-0 box-border flex max-w-[960px] flex-col items-center gap-4 px-5 lg:gap-5">
        <SectionLabel color={ink} bg="#FFFFFF">
          {b.label}
        </SectionLabel>
        {/* 카드 3개면 3열, 2개면 2열 */}
        <ul className={`m-0 grid w-full list-none gap-2 p-0 lg:gap-5 ${b.items.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {b.items.map((c) => {
            const color = c.color ?? ink;
            const body = (
              <>
                {/* 과정 로고(비율이 달라 높이를 맞춤), 없으면 과정명 글자 */}
                {c.logo ? (
                  <img
                    className="block h-14 w-auto max-w-full lg:h-24"
                    src={c.logo.src}
                    width={c.logo.w}
                    height={c.logo.h}
                    alt={c.name}
                    loading="lazy"
                  />
                ) : (
                  <strong className="text-[19px] leading-[1.3] font-extrabold break-keep lg:text-[30px]" style={{ color }}>
                    {c.name}
                  </strong>
                )}
                {/* 대상 설명 영역: 남는 높이를 채우고 글은 세로 가운데 — 카드마다 구분선 · 강조글 위치가 같아짐 */}
                <div className="flex w-full flex-1 items-center justify-center">
                  <p className="m-0 text-[12px] leading-[1.5] font-bold break-keep text-[#333333] lg:text-[16px]">{lines(c.desc)}</p>
                </div>
                <span className="h-px w-full bg-[#EFE6D6]" aria-hidden="true" />
                {/* 강조글 영역: 최소 높이를 맞춰 두 줄이 되어도 카드끼리 균일 */}
                <strong className="flex min-h-[2.7em] items-center justify-center text-[13px] leading-[1.35] font-extrabold break-keep lg:min-h-[1.35em] lg:text-[18px]" style={{ color }}>
                  {c.title}
                </strong>
                {/* 같은 페이지 안 과정 소개로 이동(href 있을 때) */}
                {c.href && (
                  <span className="mt-1 text-[12px] font-bold text-[#555555] lg:text-[14px]" aria-hidden="true">
                    자세히 보기 ↓
                  </span>
                )}
              </>
            );
            const cls =
              // 높이: li(flex)가 늘려 줌 — h-full 을 쓰면 카드가 띠 아래 여백 쪽으로 넘쳐 위아래 여백이 달라 보임
              "flex flex-col items-center gap-2 rounded-[16px] border border-solid px-2 py-5 text-center lg:gap-3 lg:rounded-[22px] lg:px-5 lg:py-8";
            return (
              <li key={c.name} className="flex">
                {c.href ? (
                  // 페이지 안 이동 링크(#id — AppShell 이 부드럽게 스크롤)
                  <a
                    className={`${cls} w-full text-inherit no-underline transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.08)]`}
                    style={{ borderColor: "#EFE6D6", background: "#FFFFFF" }}
                    href={c.href}
                    aria-label={`${c.name} 자세히 보기`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={`${cls} w-full`} style={{ borderColor: "#EFE6D6", background: "#FFFFFF" }}>
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        </div>
      </section>
    );
  }

  // 수업 내용(단계 카드): 가운데 라벨 + 카드(왼쪽 진한 칸: 작은 문구 + 'N단계' / 오른쪽: 제목 · 설명)
  // 지면 이미지가 있으면 3열 이미지 카드(폭 1200px)
  if (b.kind === "stages") {
    const withImg = b.items.some((s) => s.image);
    return (
      <section
        className={`mx-auto my-0 box-border flex flex-col items-center gap-4 px-5 pt-13 lg:gap-5 lg:pt-24 ${withImg ? "max-w-[1200px]" : "max-w-[960px]"}`}
        aria-label={b.label}
      >
        <SectionLabel color={ink} bg={t.soft}>
          {b.label}
        </SectionLabel>
        {/* 라벨 아래 큰 제목(있을 때): 줄마다 나눔, 첫 줄은 강조 글자색 */}
        {b.heading && (
          <h2 className="m-0 text-center text-[22px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[32px]">
            {b.heading.split("\n").map((l, li) => (
              <span key={li} className="block" style={li === 0 && b.heading!.includes("\n") ? { color: ink } : undefined}>
                {l}
              </span>
            ))}
          </h2>
        )}
        {withImg ? (
          // 지면 이미지가 있는 단계(예: 다다어휘): 카드 3열(모바일 1열) — 위 진한 띠(흰 동그라미 번호 + 단계명) + 아래 지면 이미지
          <ol className="m-0 mt-1 grid w-full list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 lg:gap-5">
            {b.items.map((s) => (
              <li
                key={s.step}
                className="flex flex-col overflow-hidden rounded-[18px] border border-solid bg-white lg:rounded-[22px]"
                style={{ borderColor: `${b.imageBg ?? t.dark}33` }}
              >
                {/* 번호 · 단계명 띠: 이미지 영역 바탕색(imageBg)이 있으면 같은 색으로 카드 전체를 한 색으로 */}
                <div
                  className="flex min-h-[68px] items-center gap-3 px-4 py-3 text-white lg:min-h-[84px] lg:px-5"
                  style={{ background: b.imageBg ?? t.dark }}
                >
                  <span
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-[18px] font-extrabold lg:h-11 lg:w-11 lg:text-[22px]"
                    style={{ color: b.imageBg ?? t.dark }}
                  >
                    {s.step}
                  </span>
                  <strong className="text-[16px] leading-[1.35] font-extrabold break-keep lg:text-[19px]">{s.title}</strong>
                </div>
                {s.desc && <p className="m-0 px-4 pt-3 text-[13px] leading-[1.6] break-keep text-[#444444] lg:px-5 lg:text-[16px]">{s.desc}</p>}
                {s.image && (
                  // 지면 이미지: 바탕(imageBg, 없으면 위 띠와 같은 진한 색) 위에 둥근 모서리로
                  <div className="flex flex-auto items-center p-3 lg:p-4" style={{ background: b.imageBg ?? t.dark }}>
                    <img
                      className="block h-auto w-full rounded-[10px]"
                      src={s.image.src}
                      width={s.image.w}
                      height={s.image.h}
                      alt={`${s.step}단계 ${s.title} 교재 지면`}
                      loading="lazy"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        ) : (
        <ol className="m-0 flex w-full list-none flex-col gap-3 p-0 lg:gap-4">
          {b.items.map((s) => (
            <li
              key={s.step}
              className="flex overflow-hidden rounded-[16px] border border-solid lg:rounded-[20px]"
              style={{ borderColor: `${t.dark}33` }}
            >
              <div
                className="flex w-[104px] flex-none flex-col items-center justify-center gap-1 px-2 py-4 text-center text-white lg:w-[200px] lg:py-6"
                style={{ background: t.dark }}
              >
                {s.pre && <span className="text-[11px] leading-[1.35] break-keep text-white/85 lg:text-[14px]">{s.pre}</span>}
                <strong className="text-[24px] leading-none font-extrabold lg:text-[34px]">{s.step}</strong>
              </div>
              <div className="flex min-w-0 flex-col justify-center gap-1.5 bg-white px-4 py-4 lg:px-7 lg:py-6">
                <strong className="text-[16px] font-extrabold break-keep lg:text-[21px]" style={{ color: ink }}>
                  {s.title}
                </strong>
                {s.desc && <p className="m-0 text-[13px] leading-[1.6] break-keep text-[#444444] lg:text-[16px]">{s.desc}</p>}
              </div>
            </li>
          ))}
        </ol>
        )}
      </section>
    );
  }

  // 교재 구성: 중고등정규(소크라테스) 교재 구성과 같은 모양 — 가운데 라벨 + 연한 박스 안 이미지(가운데) → 아래 구성 목록 가로 한 줄
  if (b.kind === "kit") {
    return (
      <section className="mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 pt-13 lg:gap-5 lg:pt-24" aria-label={b.label}>
        <SectionLabel color={ink} bg={t.soft}>
          {b.label}
        </SectionLabel>
        <div
          className="box-border flex w-full flex-col items-center gap-4 rounded-[20px] px-4 py-6 lg:gap-6 lg:rounded-[24px] lg:px-8 lg:py-10"
          style={{ background: t.soft }}
        >
          {b.image && (
            <img
              className="block h-auto w-full max-w-[560px]"
              src={b.image.src}
              width={b.image.w}
              height={b.image.h}
              alt={`${b.label}: ${b.items.join(", ")}`}
              loading="lazy"
            />
          )}
          {/* 구성 목록: 좁은 화면에서는 다음 줄로 넘어감 */}
          <ul className="m-0 flex list-none flex-wrap justify-center gap-x-4 gap-y-2 p-0 lg:gap-x-7">
            {b.items.map((it) => (
              <li key={it} className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="h-1.5 w-1.5 flex-none rounded-[50%]" style={{ background: t.dark }} aria-hidden="true" />
                <strong className="text-[14px] text-[#1F1F1F] lg:text-[16px]">{it}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // 수업 흐름 박스: 초등심화 상세 '…수업은 이렇게 진행돼요' 박스와 같은 모양
  // 연한 바탕 둥근 박스 + 가운데 제목(em 부분 강조색) + 호(단계)별 흰 칸(위 색 띠: 호 · 단계명 / 아래: 차시별 활동명 · 설명)
  // 모바일: 칸이 위아래로 쌓이고 사이에 아래 화살표 / 데스크톱: 3칸 가로 + 사이에 오른쪽 화살표
  if (b.kind === "lessons") {
    const at = b.em && b.title ? b.title.indexOf(b.em) : -1;
    return (
      <section
        className={
          nested
            ? "m-0 box-border flex w-full flex-col items-center gap-4 px-0 pt-9 text-left lg:gap-5 lg:pt-14"
            : "mx-auto my-0 box-border flex max-w-[1200px] flex-col items-center gap-4 px-5 pt-13 lg:gap-5 lg:pt-24"
        }
        aria-labelledby={b.title ? id : undefined}
        aria-label={b.title ? undefined : b.label}
      >
        {/* 박스 위 라벨(있을 때): 가운데 라벨 페이지면 가운데 둥근 라벨, 아니면 왼쪽 정렬 타일 아이콘 제목(표 아이콘) */}
        {b.label &&
          (centered || nested ? (
            <SectionLabel color={ink} bg={t.soft}>
              {b.label}
            </SectionLabel>
          ) : (
            <div className="w-full">
              <SectionTitle id={`${id}-t`} color={ink} icon={ICONS.tables}>
                <span className="break-keep">{b.label}</span>
              </SectionTitle>
            </div>
          ))}
        {/* 박스: 소개 박스 안(nested)이면 바탕 · 안쪽 여백 없이 칸만 */}
        <div
          className={`box-border flex w-full flex-col gap-3.5 lg:gap-5 ${nested ? "p-0" : "rounded-[20px] p-5 lg:rounded-[24px] lg:p-8"}`}
          style={nested ? undefined : { background: t.soft }}
        >
          {b.title && (
            <h2 className="m-0 text-center text-[18px] font-extrabold break-keep lg:text-[24px]" id={id}>
              {at < 0 || !b.em ? (
                b.title
              ) : (
                <>
                  {b.title.slice(0, at)}
                  <span style={{ color: ink }}>{b.em}</span>
                  {b.title.slice(at + b.em.length)}
                </>
              )}
            </h2>
          )}
          <ol className="m-0 flex list-none flex-col gap-2 p-0 lg:flex-row lg:gap-0">
            {b.cols.map((c, i) => (
              <li key={c.head} className="flex flex-col items-stretch lg:flex-1 lg:flex-row">
                <div className="flex flex-auto flex-col overflow-hidden rounded-[16px] bg-white lg:rounded-[18px]">
                  {/* 색 띠: 진한 살구 핑크와 밝은 살구 핑크를 번갈아 */}
                  <div
                    className="flex flex-col items-center justify-center px-2 py-3 text-center leading-[1.35] break-keep text-white"
                    style={{ background: i % 2 === 0 ? ink : t.dark }}
                  >
                    <span className="text-[16px] font-extrabold lg:text-[18px]">{c.head}</span>
                    {c.sub && <span className="text-[12px] font-semibold opacity-90 lg:text-[13px]">{c.sub}</span>}
                  </div>
                  <ul className="m-0 flex flex-auto list-none flex-col p-0">
                    {c.items.map((it, j) => (
                      <li
                        key={it.session}
                        className={`flex gap-3 px-4 py-3.5 lg:px-5 lg:py-4 ${j > 0 ? "border-0 border-t border-solid border-[#EFE6D6]" : ""}`}
                      >
                        <span
                          className="mt-0.5 inline-flex h-fit flex-none items-center rounded-full px-2 py-0.5 text-[11px] font-extrabold lg:text-[12px]"
                          style={{ background: `${t.accent}40`, color: ink }}
                        >
                          {it.session}
                        </span>
                        <div className="flex min-w-0 flex-col gap-0.5">
                          <strong className="text-[14px] leading-[1.45] font-extrabold break-keep lg:text-[16px]" style={{ color: ink }}>
                            {it.title}
                          </strong>
                          {it.desc && <span className="text-[13px] leading-[1.55] break-keep text-[#333333] lg:text-[15px]">{it.desc}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {i < b.cols.length - 1 && (
                  <span className="flex flex-none items-center justify-center pt-2 lg:px-1.5 lg:pt-0" aria-hidden="true">
                    <svg className="rotate-90 lg:rotate-0" width="14" height="14" viewBox="0 0 24 24" fill={t.dark} opacity="0.55">
                      <path d="M7 3l12 9-12 9z" />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  // 배경 띠(points.band): 연한 색 전체 폭 띠 위에 — 라벨 · 카드는 흰 바탕
  const band = b.kind === "points" && !!b.band;
  const body = (
    <section
      className={
        nested
          ? "m-0 box-border flex w-full flex-col gap-3.5 px-0 pt-9 text-left lg:gap-5 lg:pt-14"
          : `mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 lg:gap-5 ${band ? "" : "pt-13 lg:pt-24"}`
      }
      aria-labelledby={centered ? undefined : id}
      aria-label={centered ? b.title : undefined}
    >
      {centered ? (
        // 가운데 라벨(초등정규 상세와 같은 SectionLabel) + 보조 문구
        <div className="flex flex-col items-center gap-1.5 text-center lg:gap-2">
          <SectionLabel color={ink} bg={band ? "#FFFFFF" : t.soft}>
            {b.title}
          </SectionLabel>
          {/* 라벨 아래 큰 제목(points.heading): 첫 줄은 작은 검은 글자, 마지막 줄은 크고 강조 글자색 */}
          {b.kind === "points" && b.heading && (
            <h2 className="m-0 mt-1 flex flex-col items-center font-extrabold break-keep">
              {b.heading.split("\n").map((l, li, arr) =>
                li === arr.length - 1 && arr.length > 1 ? (
                  <span key={li} className="text-[24px] leading-[1.35] lg:text-[36px]" style={{ color: ink }}>
                    {l}
                  </span>
                ) : (
                  <span key={li} className="text-[17px] leading-[1.45] text-[#1F1F1F] lg:text-[24px]">
                    {l}
                  </span>
                )
              )}
            </h2>
          )}
          {b.sub && <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#555555] lg:text-[17px]">{b.sub}</p>}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5 lg:gap-2">
          {/* 제목 타일은 흰 아이콘이 얹히므로 진한 강조 글자색(ink) */}
          <SectionTitle id={id} color={ink} icon={ICONS[b.kind]}>
            <span className="break-keep">{b.title}</span>
          </SectionTitle>
          {b.sub && <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#555555] lg:text-[17px]">{b.sub}</p>}
          {/* 제목 아래 큰 문구(points.heading, 왼쪽 정렬): 첫 줄 검은 글자, 마지막 줄 강조 글자색 */}
          {b.kind === "points" && b.heading && (
            <p className="m-0 mt-1 flex flex-col font-extrabold break-keep">
              {b.heading.split("\n").map((l, li, arr) => (
                <span
                  key={li}
                  className="text-[18px] leading-[1.45] lg:text-[24px]"
                  style={li === arr.length - 1 && arr.length > 1 ? { color: ink } : { color: "#1F1F1F" }}
                >
                  {l}
                </span>
              ))}
            </p>
          )}
        </div>
      )}

      {b.kind === "points" && nested && (
        // 주요 정보 띠 안(문학 특강): 짧은 문구 카드 — 모바일 2열 · 데스크톱 한 줄, 아이콘(연한 과정색 동그라미) + 굵은 문구(가운데)
        <ul className="m-0 mt-1.5 grid list-none grid-cols-2 gap-2.5 p-0 lg:grid-cols-4 lg:gap-4">
          {b.items.map((it) => (
            <li
              key={it.label}
              className="flex flex-col items-center justify-center gap-2.5 rounded-[18px] border-[1.5px] border-solid bg-white px-3 py-5 text-center lg:gap-3.5 lg:rounded-[22px] lg:px-5 lg:py-8"
              style={{ borderColor: `${t.accent}40` }}
            >
              {it.icon && (
                <span
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-full lg:h-16 lg:w-16"
                  style={{ background: `${t.accent}1A`, color: t.accent }}
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6 lg:h-8 lg:w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {POINT_ICONS[it.icon]}
                  </svg>
                </span>
              )}
              <strong className="text-[15px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[20px]">{it.title ?? it.desc}</strong>
            </li>
          ))}
        </ul>
      )}

      {b.kind === "points" && !nested && (
        <ul
          className={`m-0 mt-1.5 grid list-none grid-cols-1 gap-3 p-0 lg:gap-4 ${b.items.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
        >
          {b.items.map((it) => (
            <li
              key={it.label}
              // b.center: 카드 안 글 가운데 정렬(다다어휘)
              className={`flex flex-col gap-2 rounded-[20px] border border-solid p-5 lg:gap-2.5 lg:rounded-[24px] lg:p-7 ${b.center ? "items-center text-center" : "items-start"}`}
              // 카드 바탕: 가운데 라벨 페이지(참깨한글)는 연한 색, 그 외는 흰색
              style={{ borderColor: `${t.accent}33`, background: centered && !band ? t.soft : "#FFFFFF" }}
            >
              {/* 아이콘(있을 때): 진한 포인트색 선 아이콘 — 카드 가운데
                  b.iconBg(다다어휘 · 참깨한글)면 아이콘색을 옅게 깐 동그라미(그림자 없음), 아니면 흰 동그라미 + 그림자 */}
              {it.icon && (
                <span
                  className="mb-1 flex h-14 w-14 flex-none items-center justify-center self-center rounded-full lg:mb-1.5 lg:h-[72px] lg:w-[72px]"
                  style={
                    b.iconBg
                      ? { background: `${t.dark}1F`, color: t.dark }
                      : { background: "#FFFFFF", boxShadow: `0 6px 14px ${t.dark}1F`, color: t.dark }
                  }
                  aria-hidden="true"
                >
                  <svg
                    className="h-7 w-7 lg:h-9 lg:w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {POINT_ICONS[it.icon]}
                  </svg>
                </span>
              )}
              {/* 'Point.1' 라벨: 아이콘 카드(참깨한글)에서는 아이콘이 대신하므로 생략 */}
              {!it.icon && (
                <span
                  className="rounded-[6px] px-2 py-0.5 text-[12px] font-extrabold tracking-[0.02em] text-white lg:text-[13px]"
                  style={{ background: t.dark }}
                >
                  {it.label}
                </span>
              )}
              {it.title && (
                <strong className="text-[17px] leading-[1.4] font-extrabold break-keep lg:text-[21px]" style={{ color: ink }}>
                  {it.title}
                </strong>
              )}
              {/* 설명: descEm 부분은 더 굵게(b.accentEm 이면 강조 글자색, 아니면 같은 진한 글자) */}
              {it.desc && (
                <p className="m-0 text-[15px] leading-[1.6] font-semibold break-keep text-[#1F1F1F] lg:text-[17px]">
                  {it.descEm && it.desc.includes(it.descEm) ? (
                    <>
                      {it.desc.slice(0, it.desc.indexOf(it.descEm))}
                      <strong className="font-extrabold" style={b.accentEm ? { color: ink } : undefined}>
                        {it.descEm}
                      </strong>
                      {it.desc.slice(it.desc.indexOf(it.descEm) + it.descEm.length)}
                    </>
                  ) : (
                    it.desc
                  )}
                </p>
              )}
              {it.em && (
                <p className="m-0 text-[15px] leading-[1.6] font-extrabold break-keep text-[#1F1F1F] lg:text-[18px]">
                  {it.em}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      {b.kind === "steps" && (
        <ol
          className={`m-0 mt-1.5 grid list-none grid-cols-1 gap-2.5 p-0 lg:gap-4 ${
            b.items.length > 4 ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-3"
          }`}
        >
          {b.items.map((it, i) => (
            // 강조 단계(it.em): 강조색 바탕 + 흰 글자, 번호 칸은 반대로(흰 바탕 + 강조색 글자)
            <li
              key={it.title}
              className="flex flex-col items-start gap-2 rounded-[18px] p-5 lg:rounded-[22px] lg:p-6"
              style={{ background: it.em ? t.accent : t.soft }}
            >
              <span
                className="flex h-8 w-8 flex-none items-center justify-center rounded-[9px] text-[15px] font-extrabold lg:h-10 lg:w-10 lg:rounded-[11px] lg:text-[18px]"
                style={it.em ? { background: "#FFFFFF", color: t.accent } : { background: t.accent, color: onA }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <strong
                className="text-[16px] leading-[1.4] font-extrabold break-keep lg:text-[19px]"
                style={{ color: it.em ? onA : "#1F1F1F" }}
              >
                {it.title}
              </strong>
              {it.desc && (
                <p className="m-0 text-[14px] leading-[1.55] break-keep lg:text-[16px]" style={{ color: it.em ? onA : "#444444" }}>
                  {it.desc}
                </p>
              )}
            </li>
          ))}
        </ol>
      )}

      {b.kind === "flow" && b.boxed && (
        // 순서별 박스: 묶음(차시)마다 위 알약 라벨(+ 보충) → 아래 단계 박스들(번호 동그라미 + 단계명, 2열 → 데스크톱 한 줄)
        <div className="mt-1.5 flex flex-col gap-5 lg:gap-7">
          {b.groups.map((g) => (
            <div key={g.label} className="flex flex-col gap-2.5 lg:gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full px-3.5 py-1 text-[14px] font-extrabold lg:text-[16px]" style={{ background: t.accent, color: onA }}>
                  {g.label}
                </span>
                {g.note && <span className="text-[12px] text-[#6B6B6B] lg:text-[13px]">{g.note}</span>}
              </div>
              <ol
                className={`m-0 grid list-none grid-cols-2 gap-2 p-0 lg:gap-3 ${g.items.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}
              >
                {g.items.map((s, i) => (
                  // 글 중심: 번호는 작고 흐리게(연한 강조색 바탕 + 강조색 글자), 단계명은 크고 굵게. 테두리도 옅게
                  <li
                    key={s}
                    className="flex items-center gap-2.5 rounded-[14px] border border-solid bg-white px-3 py-3.5 lg:flex-col lg:items-start lg:gap-2.5 lg:rounded-[16px] lg:px-5 lg:py-5"
                    style={{ borderColor: `${t.accent}26` }}
                  >
                    <span
                      className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-[12px] font-bold lg:h-7 lg:w-7 lg:text-[13px]"
                      style={{ background: `${t.accent}14`, color: `${t.accent}B3` }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="text-[15px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[18px]">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {b.kind === "flow" && !b.boxed && (
        <div className="mt-1.5 flex flex-col gap-3 lg:gap-4">
          {b.groups.map((g) => (
            <div key={g.label} className="flex flex-col gap-3 rounded-[18px] p-5 lg:flex-row lg:items-center lg:gap-6 lg:rounded-[22px] lg:p-7" style={{ background: t.soft }}>
              <div className="flex flex-none items-center gap-2 lg:w-[130px] lg:flex-col lg:items-start lg:gap-1">
                <span
                  className="rounded-full px-3.5 py-1 text-[14px] font-extrabold lg:text-[16px]"
                  style={{ background: t.accent, color: onA }}
                >
                  {g.label}
                </span>
                {g.note && <span className="text-[12px] text-[#6B6B6B] lg:text-[13px]">{g.note}</span>}
              </div>
              <ol className="m-0 flex list-none flex-wrap items-center gap-x-1.5 gap-y-2 p-0">
                {g.items.map((s, i) => (
                  <li key={s} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <span className="text-[16px] font-bold lg:text-[18px]" style={{ color: ink }} aria-hidden="true">
                        ›
                      </span>
                    )}
                    <span className="rounded-[10px] bg-white px-3 py-2 text-[14px] font-semibold break-keep text-[#1F1F1F] lg:text-[16px]">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {b.kind === "tables" && (
        <div className="mt-1.5 flex flex-col gap-5 lg:gap-7">
          {b.tables.map((tb, ti) => (
            <div key={ti} className="flex flex-col gap-2.5">
              {tb.caption && <h3 className="m-0 text-[16px] font-extrabold break-keep lg:text-[19px]" style={{ color: t.dark }}>{tb.caption}</h3>}
              {/* 좁은 화면: 표만 가로 스크롤 */}
              <div className="overflow-x-auto rounded-[14px] border border-solid border-[#E5E5E5]">
                <table className="w-full min-w-[560px] border-collapse text-center text-[13px] leading-[1.45] break-keep lg:text-[15px]">
                  {tb.head.length > 0 && (
                    <thead>
                      <tr style={{ background: t.dark }}>
                        <th className="w-[96px] px-2 py-2.5 font-bold text-white lg:w-[120px]" scope="col">
                          <span className="sr-only">구분</span>
                        </th>
                        {tb.head.map((h) => (
                          <th key={h} className="px-2 py-2.5 font-bold text-white" scope="col">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {tb.rows.map((r) => (
                      <tr key={r.label} className="border-0 border-t border-solid border-[#E5E5E5] first:border-t-0">
                        <th className="w-[96px] px-2 py-3 font-extrabold lg:w-[120px]" style={{ background: t.soft, color: t.dark }} scope="row">
                          {r.label}
                        </th>
                        {r.cells.map((c, ci) => (
                          <td key={ci} className="border-0 border-l border-solid border-[#EEEEEE] bg-white px-2 py-3 text-[#333333]">
                            {lines(c)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
  return band ? (
    <div className="mt-13 px-0 py-10 lg:mt-24 lg:py-16" style={{ background: t.soft }}>
      {body}
    </div>
  ) : (
    body
  );
}
