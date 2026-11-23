import type { ReactNode } from "react";
import SectionTitle from "@/views/Socrates/sections/SectionTitle";
import SectionLabel from "@/components/common/SectionLabel";
import { inkOf, onAccentOf, type SpecialBlock, type SpecialTheme } from "../specialData";

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
export default function BlockSection({ b, t, idx, centered = false }: { b: SpecialBlock; t: SpecialTheme; idx: number; centered?: boolean }) {
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
        <ul className="m-0 flex w-full max-w-[840px] list-none flex-col gap-4 p-0 lg:gap-6">
          {b.items.map((q, i) => {
            const right = i % 2 === 1; // 오른쪽 줄: 아이콘이 오른쪽
            const bg = right ? `${t.dark}1F` : `${t.accent}40`;
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
                  “{q.text}”
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  // 학습 효과 띠: 진한 배경 전체 폭 + 가운데 라벨(흰 바탕) · 흰 제목 · 흰 설명 + 노란 카드(굵은 강조)
  if (b.kind === "effects") {
    return (
      <section className="mt-13 px-0 py-10 lg:mt-24 lg:py-20" style={{ background: t.dark }} aria-labelledby={id}>
        <div className="mx-auto my-0 box-border flex max-w-[860px] flex-col items-center gap-3 px-5 text-center lg:gap-4">
          <SectionLabel color={ink} bg="#FFFFFF">
            {b.label}
          </SectionLabel>
          <h2 className="m-0 text-[26px] font-extrabold text-white lg:text-[38px]" id={id}>
            {b.title}
          </h2>
          <p className="m-0 text-[14px] leading-[1.6] break-keep text-white/90 lg:text-[18px]">{lines(b.desc)}</p>
          <ul className="m-0 mt-3 flex w-full list-none flex-col gap-3 p-0 lg:mt-5 lg:gap-4">
            {b.items.map((it) => (
              <li
                key={it.text}
                className="rounded-[16px] bg-[#FFF6A8] px-5 py-5 text-center text-[14px] leading-[1.6] break-keep text-[#333333] lg:rounded-[20px] lg:px-8 lg:py-6 lg:text-[17px]"
              >
                {withEm(it.text, it.em)}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // 학습 과정(과정 카드): 가운데 라벨 + 3열 카드(베이지 카드: 과정 로고 → 회색 대상 설명 → 구분선 → 굵은 과정명)
  if (b.kind === "courses") {
    return (
      // 배경: 과정 연한 색 띠(전체 폭) — 그 위 라벨은 흰 바탕, 카드는 흰 카드 + 은은한 그림자
      <section className="mt-13 px-0 py-10 lg:mt-24 lg:py-16" style={{ background: t.soft }} aria-label={b.label}>
        <div className="mx-auto my-0 box-border flex max-w-[960px] flex-col items-center gap-4 px-5 lg:gap-5">
        <SectionLabel color={ink} bg="#FFFFFF">
          {b.label}
        </SectionLabel>
        <ul className="m-0 grid w-full list-none grid-cols-3 gap-2 p-0 lg:gap-5">
          {b.items.map((c) => (
            <li
              key={c.name}
              className="flex flex-col items-center gap-2 rounded-[16px] bg-white px-2 pt-5 pb-4 text-center shadow-[0_6px_16px_rgba(120,80,40,0.08)] lg:gap-3 lg:rounded-[22px] lg:px-5 lg:pt-8 lg:pb-6"
            >
              {/* 과정 로고: 비율이 달라 높이를 맞춤 */}
              <img
                className="block h-14 w-auto max-w-full lg:h-24"
                src={c.logo.src}
                width={c.logo.w}
                height={c.logo.h}
                alt={c.name}
                loading="lazy"
              />
              {/* 대상 설명: 진한 글자 · 굵게(강조) */}
              <p className="m-0 mt-1 text-[12px] leading-[1.5] font-bold break-keep text-[#333333] lg:mt-2 lg:text-[16px]">{lines(c.desc)}</p>
              <span className="h-px w-full bg-[#EFE6D6]" aria-hidden="true" />
              <strong className="text-[13px] leading-[1.35] font-extrabold break-keep lg:text-[18px]" style={{ color: ink }}>
                {c.title}
              </strong>
            </li>
          ))}
        </ul>
        </div>
      </section>
    );
  }

  // 수업 내용(단계 카드): 가운데 라벨 + 카드(왼쪽 진한 칸: 작은 문구 + 'N단계' / 오른쪽: 제목 · 설명)
  if (b.kind === "stages") {
    return (
      <section className="mx-auto my-0 box-border flex max-w-[960px] flex-col items-center gap-4 px-5 pt-13 lg:gap-5 lg:pt-24" aria-label={b.label}>
        <SectionLabel color={ink} bg={t.soft}>
          {b.label}
        </SectionLabel>
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
                <span className="text-[11px] leading-[1.35] break-keep text-white/85 lg:text-[14px]">{s.pre}</span>
                <strong className="text-[24px] leading-none font-extrabold lg:text-[34px]">{s.step}</strong>
              </div>
              <div className="flex min-w-0 flex-col justify-center gap-1.5 bg-white px-4 py-4 lg:px-7 lg:py-6">
                <strong className="text-[16px] font-extrabold break-keep lg:text-[21px]" style={{ color: ink }}>
                  {s.title}
                </strong>
                <p className="m-0 text-[13px] leading-[1.6] break-keep text-[#444444] lg:text-[16px]">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby={centered ? undefined : id}
      aria-label={centered ? b.title : undefined}
    >
      {centered ? (
        // 가운데 라벨(초등정규 상세와 같은 SectionLabel) + 보조 문구
        <div className="flex flex-col items-center gap-1.5 text-center lg:gap-2">
          <SectionLabel color={ink} bg={t.soft}>
            {b.title}
          </SectionLabel>
          {b.sub && <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#555555] lg:text-[17px]">{b.sub}</p>}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5 lg:gap-2">
          {/* 제목 타일은 흰 아이콘이 얹히므로 진한 강조 글자색(ink) */}
          <SectionTitle id={id} color={ink} icon={ICONS[b.kind]}>
            <span className="break-keep">{b.title}</span>
          </SectionTitle>
          {b.sub && <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#555555] lg:text-[17px]">{b.sub}</p>}
        </div>
      )}

      {b.kind === "points" && (
        <ul
          className={`m-0 mt-1.5 grid list-none grid-cols-1 gap-3 p-0 lg:gap-4 ${b.items.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
        >
          {b.items.map((it) => (
            <li
              key={it.label}
              className="flex flex-col items-start gap-2 rounded-[20px] border border-solid bg-white p-5 lg:gap-2.5 lg:rounded-[24px] lg:p-7"
              style={{ borderColor: `${t.accent}33` }}
            >
              <span
                className="rounded-[6px] px-2 py-0.5 text-[12px] font-extrabold tracking-[0.02em] text-white lg:text-[13px]"
                style={{ background: t.dark }}
              >
                {it.label}
              </span>
              {it.title && (
                <strong className="text-[17px] leading-[1.4] font-extrabold break-keep lg:text-[21px]" style={{ color: ink }}>
                  {it.title}
                </strong>
              )}
              {it.desc && <p className="m-0 text-[15px] leading-[1.6] break-keep text-[#333333] lg:text-[17px]">{it.desc}</p>}
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
            <li key={it.title} className="flex flex-col items-start gap-2 rounded-[18px] p-5 lg:rounded-[22px] lg:p-6" style={{ background: t.soft }}>
              <span
                className="flex h-8 w-8 flex-none items-center justify-center rounded-[9px] text-[15px] font-extrabold lg:h-10 lg:w-10 lg:rounded-[11px] lg:text-[18px]"
                style={{ background: t.accent, color: onA }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <strong className="text-[16px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[19px]">{it.title}</strong>
              {it.desc && <p className="m-0 text-[14px] leading-[1.55] break-keep text-[#444444] lg:text-[16px]">{it.desc}</p>}
            </li>
          ))}
        </ol>
      )}

      {b.kind === "flow" && (
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
}
