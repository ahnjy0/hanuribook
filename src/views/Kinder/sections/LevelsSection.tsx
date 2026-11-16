import SectionLabel from "@/components/common/SectionLabel";

type Level = {
  title: string;
  accent: string;
  soft: string;
  points: string[];
  /** 카드 안 오른쪽에 둘 장식 캐릭터 */
  character?: { src: string; w: number; h: number };
};

// 단계별 세부 학습 내용 (색상은 히어로 섹션 교재 카드의 강조색과 맞춤)
const LEVELS: Level[] = [
  {
    title: "꿈꾸는 새싹 1",
    accent: "#E8508A",
    soft: "#FDF0F5",
    points: ["필독서를 통해 창의적 표현 활동하기", "다양한 어휘를 익히고, 활용하기"],
    character: { src: "https://cdn.hanuribook.com/img/hanuribook/kinder_cha_06.png", w: 678, h: 662 },
  },
  {
    title: "꿈꾸는 새싹 2",
    accent: "#7C5CE6",
    soft: "#F3F0FE",
    points: [
      "초등 교과 연계 활동을 통해 초등 과정 대비하기",
      "주제별 다양한 어휘를 익히며 기초 독해력 기르기",
      "우리나라와 세계의 옛이야기를 읽고 교과 학습의 기초 다지기",
    ],
  },
];

/** 학습 목표: 꿈꾸는 새싹 1·2 누리과정·초등교과 연계 학습 내용 */
export default function LevelsSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="k-levels"
    >
      <div className="text-center">
        <SectionLabel>학습 목표</SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[30px]" id="k-levels">
          누리과정·초등교과 연계 학습
        </h2>
      </div>
      <div className="mt-1.5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-5">
        {LEVELS.map((lv) => (
          <article
            key={lv.title}
            // 캐릭터가 있는 카드는 오른쪽 여백을 넓혀 글과 캐릭터가 겹치지 않게 함
            className={`relative flex flex-col gap-3.5 rounded-[20px] p-5 lg:gap-4 lg:rounded-[24px] lg:p-7 ${
              lv.character ? "pr-[100px] lg:pr-[170px]" : ""
            }`}
            style={{ background: lv.soft }}
          >
            {lv.character && (
              <img
                className="pointer-events-none absolute top-1/2 right-4 block h-20 w-auto -translate-y-1/2 select-none lg:right-7 lg:h-32"
                src={lv.character.src}
                width={lv.character.w}
                height={lv.character.h}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            )}
            <h3 className="m-0 text-[18px] font-extrabold text-[#1F1F1F] lg:text-[22px]">{lv.title}</h3>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 lg:gap-2.5">
              {lv.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-[15px] leading-[1.55] break-keep text-[#333333]">
                  <span
                    className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: lv.accent }}
                    aria-hidden="true"
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
