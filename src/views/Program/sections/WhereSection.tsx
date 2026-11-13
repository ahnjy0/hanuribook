import Link from "next/link";
import TitleIcon from "./TitleIcon";
import CenterKindIcon, { CENTER_KIND_STYLE } from "@/components/common/CenterKindIcon";

export default function WhereSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24"
      aria-labelledby="where-h"
    >
      <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="where-h">
        <TitleIcon kind="where" />
        한우리 수업, 어디서 받을 수 있나요?
      </h2>
      <p className="m-0 text-[14px] leading-[1.7] text-[#4A4A4A]">
        가까운 지역의 한우리 센터를 통해 수업을 받을 수 있습니다. 아이의 성향이나 상황에 맞춰 자유롭게 수업
        유형을 선택할 수 있습니다.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="flex items-center gap-3.5 rounded-[18px] border border-[#EEEEEE] bg-white p-4.5">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-[#FFF6DA]">
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B45309"
              strokeWidth="2"
              strokeLinejoin="round"
            >
              <path d="M3 10.5 12 3l9 7.5V21H3z" />
              <path d="M9 21v-6h6v6" />
            </svg>
          </span>
          <div>
            <strong className="text-[16px]">방문 수업</strong>
            <p className="mx-0 mt-0.5 mb-0 text-[14px] text-[#4A4A4A]">
              선생님이 회원의 가정으로 방문하여 수업
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3.5 rounded-[18px] border border-[#EEEEEE] bg-white p-4.5">
          <span
            className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px]"
            style={{ background: CENTER_KIND_STYLE.room.bg }}
          >
            <CenterKindIcon kind="room" size={26} />
          </span>
          <div>
            <strong className="text-[16px]">홈클럽 수업</strong>
            <p className="mx-0 mt-0.5 mb-0 text-[14px] text-[#4A4A4A]">
              회원이 선생님의 가정으로 방문하여 수업
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3.5 rounded-[18px] border border-[#EEEEEE] bg-white p-4.5">
          <span
            className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px]"
            style={{ background: CENTER_KIND_STYLE.branch.bg }}
          >
            <CenterKindIcon kind="branch" size={26} />
          </span>
          <div>
            <strong className="text-[16px]">학원 수업</strong>
            <p className="mx-0 mt-0.5 mb-0 text-[14px] text-[#4A4A4A]">회원이 학원으로 방문하여 수업</p>
          </div>
        </div>
      </div>
      <Link
        className="flex h-13 items-center justify-center gap-2 rounded-[14px] lg:w-[360px] lg:self-center bg-[#475569] text-[15px] font-bold text-white no-underline"
        href="/centers"
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M3 11 22 2l-9 19-2-8-8-2z" />
        </svg>
        센터 찾기
      </Link>
    </section>
  );
}
