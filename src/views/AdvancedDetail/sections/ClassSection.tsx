import SectionLabel from "@/components/common/SectionLabel";
import type { AdvancedCourse } from "../advancedData";
import DescLines from "./DescLines";

/**
 * 수업 내용
 * - 월 4차시 카드: 위(강조색 띠) "N차시 + 차시명", 아래(연한 회색) 두 줄 설명
 * - 핵심 차시(1차시) 수업 흐름: 5단계. 데스크톱은 가로 + 화살표, 모바일은 세로
 */
export default function ClassSection({ d }: { d: AdvancedCourse }) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="s-class"
    >
      <div className="text-center">
        <SectionLabel color={d.accent} bg={d.soft}>
          수업 내용
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="s-class">
          {d.classTitle}
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
          {/* 소개 문구: 줄마다 줄바꿈. 배열로 묶은 줄은 모바일에서만 나누고 데스크톱에서는 한 줄로 이어 씀 */}
          <DescLines lines={d.classDesc} />
        </p>
      </div>

      {/* 월 4차시 */}
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4 lg:gap-4">
        {d.lessons.map((l, i) => {
          // 1차시(과정 핵심 독서): 강조 — 연한 과정색 내용 칸, 굵은 글자(테두리 없음)
          const hi = i === 0;
          return (
            <li
              key={l.title}
              className={`relative flex flex-col overflow-hidden rounded-[18px] lg:rounded-[22px] ${hi ? "" : "bg-[#F5F5F7]"}`}
              style={hi ? { background: d.soft } : undefined}
            >
              <div
                className="flex items-center justify-center gap-1.5 px-2 py-3 text-[15px] text-white lg:py-4 lg:text-[19px]"
                style={{ background: d.accent }}
              >
                <span className="font-medium opacity-90">{i + 1}차시</span>
                <strong className="font-extrabold">{l.title}</strong>
              </div>
              <p
                className={`m-0 flex flex-auto flex-col items-center justify-center px-2 py-4 text-center text-[14px] leading-[1.55] break-keep lg:py-6 lg:text-[16px] ${hi ? "font-bold" : "text-[#333333]"}`}
                style={hi ? { color: d.strong } : undefined}
              >
                {l.desc.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
            </li>
          );
        })}
      </ol>

      {/* 핵심 차시 수업 흐름 */}
      <div
        className="relative mt-12 flex flex-col gap-3.5 rounded-[20px] p-5 lg:mt-20 lg:gap-5 lg:rounded-[24px] lg:p-8"
        style={{ background: d.soft }}
      >
        {/* 장식 캐릭터: 박스 왼쪽 위 모서리에 걸쳐 위로 살짝 올라옴(제목은 가운데라 겹치지 않음) */}
        <img
          className={`pointer-events-none absolute left-3 z-10 block w-auto select-none lg:left-6 ${
            d.flowCha?.cls ?? "-top-[52px] h-16 lg:-top-[78px] lg:h-24"
          }`}
          // 과정별 캐릭터(flowCha), 없으면 기본 캐릭터
          src={d.flowCha?.src ?? "https://cdn.hanuribook.com/img/hanuribook/advance_cha_02.png"}
          width={d.flowCha?.w ?? 372}
          height={d.flowCha?.h ?? 314}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <h3 className="m-0 text-center text-[18px] font-extrabold lg:text-[24px]">
          <span style={{ color: d.accent }}>{d.flowName}</span> 수업{d.flowTag ?? ""}은 이렇게 진행돼요
        </h3>
        <ol className="m-0 flex list-none flex-col gap-2 p-0 lg:flex-row lg:gap-0">
          {d.flow.map((s, i) => (
            <li key={s.title} className="flex flex-col items-stretch lg:flex-1 lg:flex-row">
              {/* 모바일: 왼쪽 제목 칸 + 오른쪽 내용(좌우) / 데스크톱: 위 제목 띠 + 아래 내용(상하) */}
              <div className="flex flex-auto flex-row overflow-hidden rounded-[16px] bg-white lg:flex-col lg:rounded-[18px]">
                <div
                  className="flex w-[96px] flex-none items-center justify-center px-2 py-3 text-center text-[15px] leading-[1.35] font-extrabold break-keep text-white lg:w-auto lg:py-3 lg:text-[17px]"
                  // 단계 띠 색: 진한 강조색과 밝은 강조색을 번갈아
                  style={{ background: i % 2 === 0 ? d.accent : d.accent2 }}
                >
                  {s.title}
                </div>
                <ul className="m-0 flex flex-auto list-none flex-col justify-center gap-1.5 px-4 py-3.5 text-[14px] leading-[1.6] break-keep text-[#333333] lg:justify-start lg:px-4 lg:py-5 lg:text-[15px]">
                  {s.desc.map((t) => (
                    <li key={t} className="flex gap-1.5">
                      <span className="flex-none" style={{ color: d.accent }} aria-hidden="true">
                        ·
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 단계 사이 화살표: 모바일 아래쪽, 데스크톱 오른쪽 */}
              {i < d.flow.length - 1 && (
                <span className="flex flex-none items-center justify-center pt-2 lg:px-1.5 lg:pt-0" aria-hidden="true">
                  <svg className="rotate-90 lg:rotate-0" width="14" height="14" viewBox="0 0 24 24" fill={d.accent} opacity="0.55">
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
