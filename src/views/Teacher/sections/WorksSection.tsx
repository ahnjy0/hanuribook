import Title, { CARD, Section } from "@/views/TeacherSpecial/sections/Title";
import type { TeacherVals } from "../useTeacher";

type Props = Pick<TeacherVals, "next" | "prev" | "total" | "work">;

/** 아이마다 다른 생각: 설명 → 실제 회원 과제물(좌우 화살표로 넘김, 이미지 준비 전 자리표시) */
export default function WorksSection({ next, prev, total, work }: Props) {
  return (
    <Section id="t-work">
      <Title id="t-work" icon="features">
        아이마다 다른 생각의 모양
      </Title>
      <p className="m-0 text-[14px] leading-[1.7] break-keep text-[#333333] lg:text-[17px]">
        같은 책을 읽어도 <strong className="font-extrabold text-[#1F1F1F]">아이마다 생각의 모양이 다르기에</strong> 각자의 보석 같은 생각이 자라고{" "}
        <strong className="font-extrabold text-[#1F1F1F]">스스로의 생각을 표현할 수 있도록</strong>
      </p>
      <div className={`${CARD} flex flex-col items-center gap-4 px-4 py-6 lg:py-8`}>
        <span className="rounded-full bg-[#F26522] px-4.5 py-2 text-[14px] font-bold text-white">실제 한우리 회원들의 학습 과제물</span>
        <div className="flex w-full max-w-[560px] items-center gap-1.5">
          <button className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full border-0 bg-white" aria-label="이전 과제물" onClick={prev}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <figure className="m-0 flex-auto overflow-hidden rounded-[16px] border border-solid border-[#FBE7DA] bg-white">
            <div className="bg-[#FFF1E7] px-3.5 py-2.5 text-left text-[14px] font-extrabold text-[#1F1F1F]">{work.title}</div>
            <div className="flex h-72 items-center justify-center px-4 py-0 text-[13px] leading-[1.6] text-[#8A5A3C]">{`[과제물 이미지] ${work.desc}`}</div>
            <figcaption className="p-2 text-center text-[12px] text-[#8A5A3C]">{`${work.n} / ${total}`}</figcaption>
          </figure>
          <button className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full border-0 bg-white" aria-label="다음 과제물" onClick={next}>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
