import Link from "next/link";
import TitleIcon from "./TitleIcon";

export default function StartSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24"
      aria-labelledby="start-h"
    >
      <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="start-h">
        <TitleIcon kind="start" />
        한우리 수업, 어떻게 시작하나요?
      </h2>
      <p className="m-0 text-[14px] leading-[1.7] text-[#4A4A4A]">
        한우리 수업을 시작하고 싶다면 고민하지 말고 상담 받아 보세요. 한우리 선생님이 친절하게 상담해 드립니다.
      </p>
      <ol className="m-0 grid list-none grid-cols-3 gap-2 p-0 md:gap-4">
        <li className="flex flex-col items-center gap-1.5 rounded-[16px] border border-[#EFEFEF] bg-white px-2 py-4 text-center">
          <img
            className="block h-20 w-20 object-contain lg:h-28 lg:w-28"
            src="https://cdn.hanuribook.com/img/icon/tel.png"
            width={1024}
            height={1024}
            alt=""
            loading="lazy"
          />
          <span className="block text-[12px] font-bold text-[#C2410C]">STEP 01</span>
          <strong className="text-[16px]">상담 신청</strong>
          
        </li>
        <li className="flex flex-col items-center gap-1.5 rounded-[16px] border border-[#EFEFEF] bg-white px-2 py-4 text-center">
          <img
            className="block h-20 w-20 object-contain lg:h-28 lg:w-28"
            src="https://cdn.hanuribook.com/img/icon/teacher.png"
            width={1024}
            height={1024}
            alt=""
            loading="lazy"
          />
          <span className="block text-[12px] font-bold text-[#C2410C]">STEP 02</span>
          <strong className="text-[16px]">선생님 배정</strong>
          
        </li>
        <li className="flex flex-col items-center gap-1.5 rounded-[16px] border border-[#EFEFEF] bg-white px-2 py-4 text-center">
          <img
            className="block h-20 w-20 object-contain lg:h-28 lg:w-28"
            src="https://cdn.hanuribook.com/img/icon/study.png"
            width={1024}
            height={1024}
            alt=""
            loading="lazy"
          />
          <span className="block text-[12px] font-bold text-[#C2410C]">STEP 03</span>
          <strong className="text-[16px]">수업 진행</strong>
          
        </li>
      </ol>
      <p className="m-0 rounded-[12px] bg-[#FFF7F1] p-3 text-center text-[13px] font-semibold text-[#C2410C]">
        ★ 한우리 수업은 독서력을 진단한 후 진행됩니다.
      </p>
      <Link
        className="flex h-14 items-center justify-center rounded-[14px] lg:w-[360px] lg:self-center bg-[#F26522] text-[17px] font-bold text-white no-underline"
        href="/consult"
      >
        상담 신청
      </Link>
    </section>
  );
}
