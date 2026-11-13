import type { TeacherVals } from "../useTeacher";

type Props = Pick<TeacherVals, "next" | "prev" | "total" | "work">;

export default function WorksSection({ next, prev, total, work }: Props) {
  return (
    <section className="bg-[#FFE9DE] px-5 pt-13 pb-12" aria-labelledby="t-work">
      <div className="mx-auto my-0 flex max-w-[520px] flex-col items-center gap-5.5 text-center">
        <h2 className="m-0 text-[20px] leading-[1.55] font-semibold lg:text-[24px]" id="t-work">
          같은 책을 읽어도
          <br />
          <span className="font-extrabold text-[#E8590C]">아이마다 생각의 모양이 다르기에</span>
          <br />
          <span className="mt-3 inline-block">각자의 보석 같은 생각이 자라고</span>
          <br />
          <span className="font-extrabold text-[#E8590C]">스스로의 생각을 표현할 수 있도록</span>
        </h2>
        <span className="rounded-full bg-[#E8590C] px-4.5 py-2 text-[14px] font-bold text-white">
          실제 한우리 회원들의 학습 과제물
        </span>
        <div className="flex w-full items-center gap-1.5">
          <button
            className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center border-0 bg-transparent"
            aria-label="이전 과제물"
            onClick={prev}
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B6B6B"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <figure className="m-0 flex-auto overflow-hidden rounded-[16px] border border-[#F1D98A] bg-[#FFF6C8]">
            <div className="bg-[#FFF1A8] px-3.5 py-2.5 text-left text-[14px] font-extrabold text-[#3A3A3A]">
              {work.title}
            </div>
            <div className="flex h-80 items-center justify-center px-4 py-0 text-[13px] leading-[1.6] text-[#6B5A28]">{`[과제물 이미지] ${work.desc}`}</div>
            <figcaption className="p-2 text-[12px] text-[#6B5A28]">{`${work.n} / ${total}`}</figcaption>
          </figure>
          <button
            className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center border-0 bg-transparent"
            aria-label="다음 과제물"
            onClick={next}
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B6B6B"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
