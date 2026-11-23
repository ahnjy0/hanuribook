import SectionTitle from "@/views/Socrates/sections/SectionTitle";
import { LIT } from "../theme";

/**
 * 고등 문학 수업 내용: 월 4차시(1차시 · 2~3차시 · 4차시)
 * 중등 소크라테스 '수업 내용'과 같은 카드(연회색 카드 + 왼쪽 위 차시 번호 박스 + 차시명 · 설명). 모바일 1열, 데스크톱 3열
 * n: 번호 박스 숫자 — 박스에는 'N차시'로 표시(글자 길이에 맞춰 박스가 가로로 늘어남)
 */
const LESSONS: { n: string; title: string; desc: string }[] = [
  {
    n: "1",
    title: "문학의 교과 개념",
    desc: "문학 갈래별 구성을 바탕으로 국어 문학의 필수 교과 개념을 체계적으로 익힙니다. 문학의 교과 개념을 다양한 문학 작품에 대입해 보고, 대입 수능 기출 유형의 문제를 통해 개념을 습득합니다.",
  },
  {
    n: "2~3",
    title: "문학과의 대화 1, 2",
    desc: "교과서 수록 작품, 수능 기출 작품, 학교 권장도서 등 필독 문학 도서를 감상합니다. 내용 확인, 주제 파악, 주제 확장과 심화 활동을 통해 작품을 심도 있게 분석하고, 수행평가 활동과 고등학교 지필고사 수준의 수능형 문제로 학습 효과를 확인합니다.",
  },
  {
    n: "4",
    title: "대입 논 · 구술",
    desc: "대입 논 · 구술 빈출 주제와 다양한 텍스트 자료를 통해 주제별 필수 배경지식과 독해력을 쌓습니다. 주요 대학들의 기출문제를 해결하며, 논 · 구술 실력을 향상합니다.",
  },
];

export default function ClassSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="l-class"
    >
      <SectionTitle
        id="l-class"
        color={LIT.accent}
        icon={
          <>
            <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
            <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
          </>
        }
      >
        수업 내용
      </SectionTitle>
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-1 gap-2.5 p-0 lg:grid-cols-3 lg:gap-4">
        {LESSONS.map((l) => (
          <li key={l.title} className="flex flex-col gap-3 rounded-[18px] bg-[#F5F5F7] p-5 lg:gap-4 lg:rounded-[22px] lg:p-8">
            {/* 차시 번호 박스 + 차시명 */}
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 flex-none items-center justify-center rounded-[9px] px-2.5 text-[14px] font-extrabold whitespace-nowrap text-white lg:h-10 lg:rounded-[11px] lg:px-3 lg:text-[16px]"
                style={{ background: LIT.accent }}
              >
                {l.n}차시
              </span>
              <strong className="text-[17px] font-extrabold text-[#1F1F1F] lg:text-[20px]">{l.title}</strong>
            </div>
            <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[16px]">{l.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
