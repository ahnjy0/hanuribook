import type { CentersVals } from "../useCenters";

type Props = Pick<CentersVals, "count">;

// 선택 칸: 기본 화살표를 없애고(appearance-none) 오른쪽에서 14px 안쪽에 아래 화살표를 직접 그림
const SELECT =
  "h-12 w-full cursor-pointer appearance-none rounded-[12px] border border-[#E4E4E4] bg-white bg-[length:16px_16px] bg-[position:right_14px_center] bg-no-repeat py-0 pr-10 pl-3.5 font-[family-name:inherit] text-[15px] text-[#1F1F1F]";
const SELECT_ARROW = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234A4A4A' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
};

export default function SearchSection({ count }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-8"
      aria-labelledby="ct-h"
    >
      <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[36px]" id="ct-h">
        전국 한우리 센터 찾기
      </h1>
      <p className="mx-0 mt-0 mb-2 text-[15px] leading-[1.6] text-[#333333]">
        {"전국 "}
        <strong className="text-[#C2410C]">600개</strong>
        {" 센터에서 "}
        <strong className="text-[#C2410C]">4,500명</strong>의 한우리 선생님이 우리 아이를 기다리고 있습니다.
        가까운 센터를 찾아 무료 상담을 받아보세요.
      </p>
      {/* 검색창 + 시/도 · 구/군: 모바일은 위아래, 데스크톱은 한 줄(검색창 420px + 선택 2개 각 150px) */}
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-2">
      <div className="relative lg:w-[420px] lg:flex-none">
        <label className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]" htmlFor="ct-q">
          센터 검색
        </label>{" "}
        <svg
          className="absolute top-4 left-4 lg:top-3.5"
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B6B6B"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>{" "}
        <input
          // 데스크톱: 옆 선택 칸과 같은 높이(48px)
          className="box-border h-13 w-full rounded-[14px] lg:h-12 lg:rounded-[12px] border border-[#E4E4E4] bg-white py-0 pr-4 pl-11.5 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]"
          id="ct-q"
          type="search"
          placeholder="센터명, 지역명으로 검색"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 lg:w-[308px] lg:flex-none">
        <label className="block">
          <span className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]">시/도</span>
          <select className={SELECT} style={SELECT_ARROW}>
            <option>서울특별시</option>
            <option>경기도</option>
          </select>
        </label>
        <label className="block">
          <span className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]">구/군</span>
          <select className={SELECT} style={SELECT_ARROW}>
            <option>서초구</option>
            <option>강남구</option>
            <option>마포구</option>
          </select>
        </label>
      </div>
      </div>
      <div className="flex items-center justify-between pt-1">
        <p className="m-0 text-[14px] text-[#333333]" aria-live="polite">
          {"인근 탐색 결과 "}
          <strong className="text-[#C2410C]">{`${count}곳`}</strong>
        </p>
      </div>
    </section>
  );
}
