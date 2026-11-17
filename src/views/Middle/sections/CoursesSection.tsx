/**
 * 과정 안내: 소크라테스 4단계 과정(진로 독서 → 1 독해 원리 → 2 독해 심화 → 3 독해 융합)
 * 카드 디자인은 기존 과정 안내 카드 스타일(학년 라벨 → 과정명·부제 → 목표 → 설명/학습 내용 회색 박스)
 */
type Course = {
  name: string;
  sub: string;
  grade: string;
  goal: string;
  desc?: string;
  points?: string[];
};

const COURSES: Course[] = [
  {
    name: "소크라테스 진로 독서",
    sub: "진로 독서 1, 2 (특강)",
    grade: "예비 중학생",
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

/** 학년 라벨 색: 기존 카드처럼 주황 / 파랑을 번갈아 */
const CHIPS = [
  { bg: "#FFF1E7", fg: "#C2410C" },
  { bg: "#EAF2FF", fg: "#2F5AA8" },
];

export default function CoursesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11 lg:gap-5 lg:pt-24"
      aria-labelledby="m-course"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="m-course">
        과정 안내
      </h2>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {COURSES.map((c, i) => {
          const chip = CHIPS[i % CHIPS.length];
          return (
            <article key={c.name} className="flex flex-col gap-3 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
              <span
                className="self-start rounded-[6px] px-2 py-1 text-[12px] font-bold"
                style={{ background: chip.bg, color: chip.fg }}
              >
                {c.grade}
              </span>
              <h3 className="m-0 flex flex-wrap items-baseline gap-x-2 text-[21px] font-extrabold">
                {c.name}
                <span className="text-[15px] font-bold text-[#555555]">{c.sub}</span>
              </h3>
              <p className="m-0 text-[14px] leading-[1.6] text-[#333333]">{c.goal}</p>
              {c.desc && (
                <p className="m-0 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] leading-[1.6] break-keep text-[#222222]">
                  {c.desc}
                </p>
              )}
              {c.points && (
                <ul className="m-0 flex list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] text-[#222222]">
                  {c.points.map((pt) => (
                    <li key={pt}>· {pt}</li>
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