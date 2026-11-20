import CheckIcon from "@/components/common/CheckIcon";

/**
 * 과정 안내: 소크라테스 4단계 과정(진로 독서 → 1 독해 원리 → 2 독해 심화 → 3 독해 융합)
 * 카드 디자인은 기존 과정 안내 카드 스타일(학년 라벨 → 과정명·부제 → 목표 → 설명/학습 내용 회색 박스)
 */
type Course = {
  name: string;
  sub?: string; // 과정명 옆 부제(없으면 표시 안 함)
  grade: string;
  period?: string; // 학습 기간 뱃지(학년 라벨 옆, 없으면 표시 안 함)
  goal: string;
  desc?: string;
  points?: string[];
};

const COURSES: Course[] = [
  {
    name: "소크라테스 진로 독서",
    grade: "예비 중학생",
    period: "학습 기간 2개월",
    goal: "중학 교과와 연계해 진로 탐색하기",
    desc: "중학교 《기술 · 가정》과 《진로와 직업》 교과의 진로 활동 내용을 접목하고, 홀랜드 6개 직업 흥미 유형을 기준으로 진로 탐색 활동을 합니다.",
  },
  {
    name: "소크라테스 1",
    sub: "독해 원리",
    grade: "중등 1학년",
    goal: "읽기 능력과 표현력 키우기",
    points: ["문학/비문학 독해의 기본 원리 학습", "다양한 분야의 독서로 읽기 능력 향상", "시사이슈 토론으로 표현력 UP!"],
  },
  {
    name: "소크라테스 2",
    sub: "독해 심화",
    grade: "중등 2학년",
    goal: "분석 능력과 논리력 키우기",
    points: ["문학/비문학 독해의 원리 적용 학습", "다양한 분야의 독서로 분석 능력 향상", "시사이슈 토론으로 논리력 UP!"],
  },
  {
    name: "소크라테스 3",
    sub: "독해 융합",
    grade: "중등 3학년",
    goal: "통합 사고력 키우기",
    points: ["문학/비문학 독해의 영역 융합 훈련", "다양한 분야의 독서로 문제해결력 향상", "시사이슈 토론으로 통합적 사고력 UP!"],
  },
];

/**
 * 학년 라벨 색: 중등 페이지 주요 색(부드러운 퍼플)으로 예비 중학생 → 중등 3학년까지 점점 진하게(과정 순서와 같음)
 * 밝은 두 단계는 보라 글자, 진한 두 단계는 흰 글자(글자가 잘 읽히는 대비)
 */
const CHIPS = [
  { bg: "#F3F0FA", fg: "#5B4596" }, // 예비 중학생
  { bg: "#DCD2F0", fg: "#45366F" }, // 중등 1학년
  { bg: "#7A62B8", fg: "#FFFFFF" }, // 중등 2학년
  { bg: "#45366F", fg: "#FFFFFF" }, // 중등 3학년
];

export default function CoursesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11 lg:gap-5 lg:pt-24"
      aria-labelledby="m-course"
    >
      <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="m-course">
        {/* 제목 앞 아이콘: 프로그램 소개 페이지 섹션 제목 아이콘과 같은 타일 모양, 색은 중등 보라.
            그림은 한 단계씩 올라가는 계단(예비 중학생 → 중3 단계별 과정) */}
        <span
          className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-[12px] bg-[#6A54A6] lg:h-11 lg:w-11 lg:rounded-[14px]"
          aria-hidden="true"
        >
          <svg
            className="h-5 w-5 lg:h-6 lg:w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 20h4v-4h4v-4h4V8h4V4" />
            <path d="M3 20h18" />
          </svg>
        </span>
        과정 안내
      </h2>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {COURSES.map((c, i) => {
          const chip = CHIPS[i % CHIPS.length];
          return (
            <article key={c.name} className="flex flex-col gap-3 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
              {/* 학년 라벨 + (있으면) 학습 기간 뱃지: 학년 라벨과 구분되게 흰 바탕 + 보라 테두리 */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span
                  className="rounded-[6px] px-2 py-1 text-[12px] font-bold"
                  style={{ background: chip.bg, color: chip.fg }}
                >
                  {c.grade}
                </span>
                {c.period && (
                  <span className="rounded-[6px] border border-solid border-[#B9A9E0] bg-white px-2 py-[3px] text-[12px] font-bold text-[#5B4596]">
                    {c.period}
                  </span>
                )}
              </div>
              <h3 className="m-0 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[21px] font-extrabold">
                {c.name}
                {/* 부제(독해 원리·심화·융합): 박스 없이 글자에만 보라색 */}
                {c.sub && <span className="text-[15px] font-bold text-[#6A54A6]">{c.sub}</span>}
              </h3>
              {/* 설명글(과정 목표): 진한 글자 + 굵게 강조 */}
              <p className="m-0 text-[15px] leading-[1.55] font-bold text-[#1F1F1F] lg:text-[17px]">{c.goal}</p>
              {c.desc && (
                <p className="m-0 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] leading-[1.6] break-keep text-[#222222]">
                  {c.desc}
                </p>
              )}
              {c.points && (
                // 정보 박스 항목: 앞에 체크 아이콘(중등 페이지 보라)
                <ul className="m-0 flex list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] text-[#222222]">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 leading-[1.5]">
                      <CheckIcon color="#6A54A6" />
                      <span className="min-w-0 break-keep">{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}