import SectionLabel from "@/components/common/SectionLabel";
import { ACCENT, SOFT } from "../vocabData";

const LESSONS = [
  { title: "읽기 · 쓰기", desc: "단편 도서의 특징에 따라 전략적으로 글을 읽고, 생각을 글로 표현합니다." },
  { title: "문학 독서", desc: "문학 작품을 읽으며 감상을 나누고, 느낀 점을 표현합니다." },
  { title: "비문학 독서", desc: "비문학 도서를 읽으며 새롭게 알게 된 정보를 정리해 봅니다." },
  { title: "발표하기", desc: "새롭게 알게 된 정보를 바탕으로 배경지식을 확장하고 자기 생각을 표현해 봅니다." },
];

export default function ClassSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="v-class"
    >
      <div className="text-center">
        <SectionLabel color={ACCENT} bg={SOFT}>
          수업 내용
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[30px]" id="v-class">
          읽기와 쓰기, 경험과 이해
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] text-[#333333]">
          읽기·말하기·듣기·쓰기·생각하기 영역을
          <br />
          고르게 활용하는 다양한 활동으로 구성됩니다.
        </p>
      </div>
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
        {LESSONS.map((l, i) => (
          <li
            key={l.title}
            className="flex flex-col gap-1.5 rounded-[18px] bg-[#C2410C] px-3 py-4.5 text-center text-white"
          >
            <span className="text-[12px] font-semibold opacity-90">{i + 1}차시</span>
            <strong className="text-[16px]">{l.title}</strong>
            <span className="text-[12px] leading-[1.5] break-keep text-[#FFE9D6]">{l.desc}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
