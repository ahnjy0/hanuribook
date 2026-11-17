import SectionLabel from "@/components/common/SectionLabel";
import { ACCENT, SOFT, LESSONS, FLOW } from "../scienceData";

/**
 * 수업 내용
 * - 월 4차시 카드: 위(강조색 띠) "N차시 + 차시명", 아래(연한 회색) 두 줄 설명
 * - 과학 독서 차시 수업 흐름: 5단계(활동 목표 → … → 과학 글쓰기). 데스크톱은 가로 + 화살표, 모바일은 세로
 */
export default function ClassSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="s-class"
    >
      <div className="text-center">
        <SectionLabel color={ACCENT} bg={SOFT}>
          수업 내용
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[34px]" id="s-class">
          과학공부와 독서토론논술을 함께!
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
          다양한 과학 도서를 읽으며 교과서 주요 개념을 쉽게 익히고
          <br />
          배경지식까지 쌓을 수 있는 통합적 독서 활동을 합니다.
        </p>
      </div>

      {/* 월 4차시 */}
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4 lg:gap-4">
        {LESSONS.map((l, i) => {
          // 1차시(과학 독서): 이 과정의 핵심 차시라 강조 — 강조색 테두리, 연한 초록 내용 칸, 굵은 글자
          const hi = i === 0;
          return (
          <li
            key={l.title}
            className={`relative flex flex-col overflow-hidden rounded-[18px] lg:rounded-[22px] ${hi ? "" : "bg-[#F5F5F7]"}`}
            style={hi ? { background: SOFT, border: `2px solid ${ACCENT}` } : undefined}
          >
            <div
              className="flex items-center justify-center gap-1.5 px-2 py-3 text-[15px] text-white lg:py-4 lg:text-[19px]"
              style={{ background: ACCENT }}
            >
              <span className="font-medium opacity-90">{i + 1}차시</span>
              <strong className="font-extrabold">{l.title}</strong>
            </div>
            <p
              className={`m-0 flex flex-auto flex-col items-center justify-center px-2 py-4 text-center text-[14px] leading-[1.55] break-keep lg:py-6 lg:text-[16px] ${hi ? "font-bold text-[#14532D]" : "text-[#333333]"}`}
            >
              {l.desc.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </p>
          </li>
          );
        })}
      </ol>

      {/* 과학 독서 차시 수업 흐름 */}
      <div className="relative mt-12 flex flex-col gap-3.5 rounded-[20px] p-5 lg:mt-20 lg:gap-5 lg:rounded-[24px] lg:p-8" style={{ background: SOFT }}>
        {/* 장식 캐릭터: 박스 왼쪽 위 모서리에 걸쳐 위로 살짝 올라옴(제목은 가운데라 겹치지 않음) */}
        <img
          className="pointer-events-none absolute -top-[52px] left-3 z-10 block h-16 w-auto select-none lg:-top-[78px] lg:left-6 lg:h-24"
          src="https://cdn.hanuribook.com/img/hanuribook/advance_cha_02.png"
          width={372}
          height={314}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <h3 className="m-0 text-center text-[18px] font-extrabold lg:text-[24px]">
          <span style={{ color: ACCENT }}>과학 독서</span> 수업은 이렇게 진행돼요
        </h3>
        <ol className="m-0 flex list-none flex-col gap-2 p-0 lg:flex-row lg:gap-0">
          {FLOW.map((s, i) => (
            <li key={s.title} className="flex flex-col items-stretch lg:flex-1 lg:flex-row">
              {/* 모바일: 왼쪽 제목 칸 + 오른쪽 내용(좌우) / 데스크톱: 위 제목 띠 + 아래 내용(상하) */}
              <div className="flex flex-auto flex-row overflow-hidden rounded-[16px] bg-white lg:flex-col lg:rounded-[18px]">
                <div
                  className="flex w-[96px] flex-none items-center justify-center px-2 py-3 text-center text-[15px] leading-[1.35] font-extrabold break-keep text-white lg:w-auto lg:py-3 lg:text-[17px]"
                  // 단계 띠 색: 진한 초록과 밝은 초록을 번갈아
                  style={{ background: i % 2 === 0 ? ACCENT : "#3C9D6B" }}
                >
                  {s.title}
                </div>
                <ul className="m-0 flex flex-auto list-none flex-col justify-center gap-1.5 px-4 py-3.5 text-[14px] leading-[1.6] break-keep text-[#333333] lg:px-4 lg:justify-start lg:py-5 lg:text-[15px]">
                  {s.desc.map((d) => (
                    <li key={d} className="flex gap-1.5">
                      <span className="flex-none" style={{ color: ACCENT }} aria-hidden="true">
                        ·
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 단계 사이 화살표: 모바일 아래쪽, 데스크톱 오른쪽 */}
              {i < FLOW.length - 1 && (
                <span className="flex flex-none items-center justify-center pt-2 lg:px-1.5 lg:pt-0" aria-hidden="true">
                  <svg className="rotate-90 lg:rotate-0" width="14" height="14" viewBox="0 0 24 24" fill={ACCENT} opacity="0.55">
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
