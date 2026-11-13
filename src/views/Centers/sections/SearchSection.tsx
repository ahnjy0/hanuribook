import type { CentersVals } from "../useCenters";

type Props = Pick<CentersVals, "count" | "listBg" | "listSel" | "mapBg" | "mapSel" | "showList" | "showMap">;

export default function SearchSection({ count, listBg, listSel, mapBg, mapSel, showList, showMap }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-8"
      aria-labelledby="ct-h"
    >
      <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[36px]" id="ct-h">
        전국 한우리 센터 찾기
      </h1>
      <p className="mx-0 mt-0 mb-2 text-[15px] leading-[1.6] text-[#4A4A4A]">
        {"전국 "}
        <strong className="text-[#C2410C]">600개</strong>
        {" 센터에서 "}
        <strong className="text-[#C2410C]">4,500명</strong>의 한우리 선생님이 우리 아이를 기다리고 있습니다.
        가까운 센터를 찾아 무료 상담을 받아보세요.
      </p>
      <div className="relative">
        <label className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]" htmlFor="ct-q">
          센터 검색
        </label>{" "}
        <svg
          className="absolute top-4 left-4"
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
          className="box-border h-13 w-full rounded-[14px] border border-[#E4E4E4] bg-white py-0 pr-4 pl-11.5 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]"
          id="ct-q"
          type="search"
          placeholder="지점명, 지역명, 지하철역으로 검색"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="block">
          <span className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]">시/도</span>
          <select className="h-12 w-full rounded-[12px] border border-[#E4E4E4] bg-white px-3.5 py-0 font-[family-name:inherit] text-[15px] text-[#1F1F1F]">
            <option>서울특별시</option>
            <option>경기도</option>
          </select>
        </label>
        <label className="block">
          <span className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]">구/군</span>
          <select className="h-12 w-full rounded-[12px] border border-[#E4E4E4] bg-white px-3.5 py-0 font-[family-name:inherit] text-[15px] text-[#1F1F1F]">
            <option>서초구</option>
            <option>강남구</option>
            <option>마포구</option>
          </select>
        </label>
      </div>
      <div className="flex items-center justify-between pt-1">
        <p className="m-0 text-[14px] text-[#4A4A4A]" aria-live="polite">
          {"인근 탐색 결과 "}
          <strong className="text-[#C2410C]">{`${count}곳`}</strong>
        </p>
        <div className="flex rounded-[10px] bg-[#F1F1F2] p-0.75" role="group" aria-label="보기 방식">
          <button
            className="h-9 cursor-pointer rounded-[8px] border-0 px-3 py-0 font-[family-name:inherit] text-[13px] font-bold text-[#1F1F1F]"
            style={{ background: mapBg }}
            aria-pressed={mapSel}
            onClick={showMap}
          >
            지도
          </button>
          <button
            className="h-9 cursor-pointer rounded-[8px] border-0 px-3 py-0 font-[family-name:inherit] text-[13px] font-bold text-[#1F1F1F]"
            style={{ background: listBg }}
            aria-pressed={listSel}
            onClick={showList}
          >
            목록
          </button>
        </div>
      </div>
    </section>
  );
}
