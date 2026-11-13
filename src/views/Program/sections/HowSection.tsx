import TitleIcon from "./TitleIcon";

export default function HowSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24"
      id="how"
      aria-labelledby="how-h"
    >
      <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="how-h">
        <TitleIcon kind="how" />
        한우리 수업, 어떻게 진행되나요?
      </h2>
      <p className="m-0 text-[14px] leading-[1.7] text-[#4A4A4A]">
        한 달 4차시 수업에서 매달 새로운 필독서와 매달 바뀌는 교재로 수업합니다. 수업은
        읽기·말하기·듣기·쓰기·생각하기 영역을 고르게 활용하는 다양한 활동으로 구성됩니다.
      </p>
      <ol className="mx-0 mt-1 mb-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
        <li className="rounded-[16px] border border-[#FBE7DA] bg-[#FFF7F1] px-3 py-4.5 text-center">
          <span className="block text-[12px] font-bold text-[#C2410C]">1차시</span>
          <strong className="text-[16px]">읽기·쓰기</strong>
        </li>
        <li className="rounded-[16px] border border-[#FBE7DA] bg-[#FFF7F1] px-3 py-4.5 text-center">
          <span className="block text-[12px] font-bold text-[#C2410C]">2차시</span>
          <strong className="text-[16px]">교과 읽기</strong>
        </li>
        <li className="rounded-[16px] border border-[#FBE7DA] bg-[#FFF7F1] px-3 py-4.5 text-center">
          <span className="block text-[12px] font-bold text-[#C2410C]">3차시</span>
          <strong className="text-[16px]">토의·토론</strong>
        </li>
        <li className="rounded-[16px] border border-[#FBE7DA] bg-[#FFF7F1] px-3 py-4.5 text-center">
          <span className="block text-[12px] font-bold text-[#C2410C]">4차시</span>
          <strong className="text-[16px]">문학 읽기</strong>
        </li>
      </ol>
      <p className="m-0 text-right text-[12px] text-[#6B6B6B]">수업 예시 : 초등 4학년 프로그램 기준</p>
    </section>
  );
}
