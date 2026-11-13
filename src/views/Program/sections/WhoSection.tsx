import Link from "next/link";
import TitleIcon from "./TitleIcon";
import Illust3D from "./Illust3D";

export default function WhoSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24"
      aria-labelledby="who-h"
    >
      <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="who-h">
        <TitleIcon kind="who" />
        한우리 수업, 어떤 선생님이 가르치나요?
      </h2>
      <p className="m-0 text-[14px] leading-[1.7] text-[#4A4A4A]">
        전문적인 교육을 받고 자격증을 취득한 한우리 선생님이 가르칩니다. 한우리 선생님은 독서토론논술
        전문가입니다.
      </p>
      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center gap-4 rounded-[18px] border border-[#FBE7DA] bg-[#FFF7F1] p-4.5">
          <span className="flex h-20 w-20 flex-none items-center justify-center rounded-[20px] bg-white">
            <Illust3D kind="reader" size={68} />
          </span>
          <div>
            <strong className="text-[16px] text-[#C2410C]">[독서지도사]</strong>
            <p className="mx-0 mt-1.5 mb-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
              아이들의 발달 단계와 수준에 맞는 교재와 교수법으로 독서를 지도합니다.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-[18px] border border-[#FBE7DA] bg-[#FFF7F1] p-4.5">
          <span className="flex h-20 w-20 flex-none items-center justify-center rounded-[20px] bg-white">
            <Illust3D kind="debater" size={68} />
          </span>
          <div>
            <strong className="text-[16px] text-[#C2410C]">[토론논술교사]</strong>
            <p className="mx-0 mt-1.5 mb-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
              토의·토론·논술 수업을 통해 스스로 사고하고 표현하는 능력을 키워줍니다.
            </p>
          </div>
        </div>
      </div>
      <Link
        className="flex h-13 items-center justify-center gap-1.5 rounded-[14px] border-[1.5px] border-[#F26522] bg-white text-[15px] font-bold text-[#C2410C] no-underline hover:bg-[#FFF1E7] lg:w-[360px] lg:self-center"
        href="/teacher"
      >
        한우리 선생님 더 알아보기
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 6 6 6-6 6" />
        </svg>
      </Link>
    </section>
  );
}
