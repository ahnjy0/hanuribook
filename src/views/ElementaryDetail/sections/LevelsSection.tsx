import SectionLabel from "@/components/common/SectionLabel";
import CheckIcon from "@/components/common/CheckIcon";
import type { ElementaryCourse } from "../elementaryData";

/** 주요 특징(구 학습 목표): 과정(1·2단계) 공통 목표 */
export default function LevelsSection({ d }: { d: ElementaryCourse }) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="v-levels"
    >
      <div className="text-center">
        <SectionLabel color={d.accent} bg={d.soft}>
          주요 특징
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="v-levels">
          {typeof d.goalTitle === "string" ? (
            d.goalTitle
          ) : (
            <>
              {d.goalTitle[0]}
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              {d.goalTitle[1]}
            </>
          )}
        </h2>
      </div>
      <div className="relative mx-auto mt-1.5 w-full max-w-[900px]">
        {/* 장식 캐릭터: 박스 오른쪽 아래 모서리에 걸쳐, 절반 정도는 다음(교재 구성) 섹션 위 여백으로 내려옴.
            박스 아래쪽 안 여백(pb)을 캐릭터가 박스 안으로 들어오는 높이보다 크게 둬서 글과 겹치지 않게 함 */}
        <img
          className="pointer-events-none absolute right-4 -bottom-10 z-10 block h-20 w-auto select-none lg:right-6 lg:-bottom-20 lg:h-32"
          src={d.cha?.goal?.src ?? "https://cdn.hanuribook.com/img/hanuribook/ele_cha_01.png"}
          width={d.cha?.goal?.w ?? 763}
          height={d.cha?.goal?.h ?? 713}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <ul
          className="m-0 box-border grid w-full list-none grid-cols-1 gap-2.5 rounded-[20px] p-5 pb-14 md:grid-cols-2 md:gap-x-6 lg:gap-y-3.5 lg:rounded-[24px] lg:p-7 lg:pb-16"
          style={{ background: d.soft }}
        >
          {d.goals.map((g) => (
            <li key={g} className="flex gap-2.5 text-[15px] leading-[1.55] break-keep text-[#333333] lg:text-[18px]">
              <CheckIcon color={d.accent} />
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
