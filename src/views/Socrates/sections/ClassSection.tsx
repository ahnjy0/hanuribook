import SectionLabel from "@/components/common/SectionLabel";

/**
 * 소크라테스 수업 내용: 월 4차시
 * 카드 = 왼쪽 위 보라 숫자 박스(N차시) + 차시명 · 핵심 문구 · 설명. 모바일 1열, 데스크톱 2열
 */
const ACCENT = "#6A54A6";

// head = 차시 핵심 문구(강조 한 줄), desc = 상세 설명
const LESSONS: { title: string; head: string; desc: string; note?: string }[] = [
  {
    title: "단편소설 독해",
    head: "독해 원리 이해부터 수능 지문까지, 문학 독해 정복!",
    desc: "국내외 대표 단편소설을 읽고, 문학 독해의 원리부터 심화 - 융합까지 체계적으로 익힙니다. 작품을 분석하며 추론적 사고를 키우고 독서 감상문을 작성합니다.",
  },
  {
    title: "IB 독서",
    head: "IB식 지식 탐구와 글쓰기로, 논 · 구술형 평가 훈련!",
    desc: "IB(국제 바칼로레아)를 독서에 접목해 깊이 있는 탐구 학습을 합니다. 탐구 질문에 대한 해답을 찾으며 대안적 사고(문제해결력)를 키우고 논술 실력을 향상합니다.",
  },
  {
    title: "계열 독서",
    head: "다양한 영역의 지식 쌓기로, 비문학 독해와 수행평가 대비!",
    desc: "인문 · 사회 · 과학 영역 도서를 읽고, 비문학 독해의 원리부터 심화 - 융합까지 체계적으로 익힙니다. 책에 담긴 지식 · 정보를 통해 비판적 사고를 키우고 수행평가에 대비합니다.",
  },
  {
    title: "통합사회 토론",
    head: "사회 현상에 대한 통합적 이해로, 발표 · 구술 · 면접 준비!",
    desc: "시사이슈와 관련된 개념과 배경지식을 쌓고 토의 · 토론합니다. 논제(안건)와 쟁점을 통합적 관점으로 해석하는 능력과 논리적 의사소통 능력을 키웁니다.",
    note: "*[3단계 특별 구성] 대입 논 · 구술 선택(7~12월)",
  },
];

export default function ClassSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="m-class"
    >
      <div className="text-center">
        <SectionLabel color="#5B4596" bg="#F3F0FA">
          수업 내용
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="m-class">
          독해 원리, 독해 심화, 독해 융합
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
          교과서 읽기에 필요한 기본 독해부터
          <br />
          심화, 수능형 융합 독해까지 체계적으로 익힙니다.
        </p>
      </div>
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-1 gap-2.5 p-0 lg:grid-cols-2 lg:gap-4">
        {LESSONS.map((l, i) => (
          <li key={l.title} className="flex gap-3 rounded-[18px] bg-[#F5F5F7] p-5 lg:gap-4 lg:rounded-[22px] lg:p-8">
            {/* 왼쪽: 차시 번호 박스(초등정규 '프로그램의 특징' 숫자 박스와 같은 모양) */}
            <span
              className="flex h-8 w-8 flex-none items-center justify-center rounded-[9px] text-[15px] font-extrabold text-white lg:h-10 lg:w-10 lg:rounded-[11px] lg:text-[18px]"
              style={{ background: ACCENT }}
              aria-label={`${i + 1}차시`}
            >
              {i + 1}
            </span>
            {/* 오른쪽: 차시명 + 핵심 문구 + 설명(+ 보충 안내) */}
            <div className="flex min-w-0 flex-col gap-1">
              <strong className="text-[17px] font-extrabold text-[#1F1F1F] lg:text-[20px]">{l.title}</strong>
              <p className="m-0 text-[14px] leading-[1.5] font-bold break-keep lg:text-[17px]" style={{ color: ACCENT }}>
                {l.head}
              </p>
              <p className="m-0 text-[14px] leading-[1.55] break-keep text-[#333333] lg:text-[16px]">{l.desc}</p>
              {l.note && <p className="m-0 text-[12px] text-[#6B6B6B] lg:text-[13px]">{l.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
