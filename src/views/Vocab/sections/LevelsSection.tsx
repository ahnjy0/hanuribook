import SectionLabel from "@/components/common/SectionLabel";
import CheckIcon from "@/components/common/CheckIcon";
import { ACCENT, SOFT } from "../vocabData";

const GOALS = [
  "여러 주제의 글을 읽고 다양한 독후 활동하기",
  "다양한 문학 작품을 감상하고 주제에 대해 자기 생각 표현하기",
  "교과 관련 도서를 읽고 배경지식 확장하기",
  "통합 주제를 탐색하고 자기 생각 발표하기",
];

/** 학습 목표: 어휘리더 1·2 공통 목표 */
export default function LevelsSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="v-levels"
    >
      <div className="text-center">
        <SectionLabel color={ACCENT} bg={SOFT}>
          학습 목표
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[34px]" id="v-levels">
          교과 학습 대비 필수 어휘 익히기
        </h2>
      </div>
      <div className="relative mx-auto mt-1.5 w-full max-w-[900px]">
      {/* 장식 캐릭터: 박스 오른쪽 아래 모서리에 걸쳐, 절반 정도는 다음(교재 구성) 섹션 위 여백으로 내려옴.
          박스 아래쪽 안 여백(pb)을 캐릭터가 박스 안으로 들어오는 높이보다 크게 둬서 글과 겹치지 않게 함 */}
      <img
        className="pointer-events-none absolute right-4 -bottom-10 z-10 block h-20 w-auto select-none lg:right-6 lg:-bottom-20 lg:h-32"
        src="https://cdn.hanuribook.com/img/hanuribook/ele_cha_01.png"
        width={763}
        height={713}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <ul
        className="m-0 box-border grid w-full list-none grid-cols-1 gap-2.5 rounded-[20px] p-5 pb-14 md:grid-cols-2 md:gap-x-6 lg:gap-y-3.5 lg:rounded-[24px] lg:p-7 lg:pb-16"
        style={{ background: SOFT }}
      >
        {GOALS.map((g) => (
          <li key={g} className="flex gap-2.5 text-[15px] leading-[1.55] lg:text-[18px] break-keep text-[#333333]">
            <CheckIcon color={ACCENT} />
            {g}
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
