import IsmsBadge from "./IsmsBadge";

export default function Footer() {
  return (
    <footer className="w-full bg-[#262626] font-pretendard text-[#C9C9C9]">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-5.5 px-5 pt-8 pb-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <nav className="flex flex-wrap [gap:6px_18px] text-[13px]" aria-label="하단 메뉴">
            <a className="text-[#E5E5E5] no-underline" href="#">
              회사소개
            </a>
            <a className="font-bold text-[#FF9A62] no-underline" href="#">
              개인정보처리방침
            </a>
            <a className="text-[#E5E5E5] no-underline" href="#">
              고객문의
            </a>
            <a className="font-bold text-white no-underline" href="#">
              제휴 문의
            </a>
          </nav>
          <IsmsBadge />
        </div>
        <div className="h-0.25 bg-[#3A3A3A]" />
        <div className="text-[12px] leading-[1.75] text-[#BDBDBD]">
          <p className="m-0">대표이사 : 김희선 · 사업자등록번호 498-85-01464</p>
          <p className="m-0">
            한우리열린교육 서울특별시 영등포구 당산로27길 16 한우리빌딩(당산동3가 397번지)
          </p>
          <p className="m-0">(주)디지털대성 서울특별시 서초구 방배로 181(방배동, 단우빌딩 6,7,8층)</p>
          <p className="mx-0 mt-2 mb-0 text-[14px] font-bold text-white">
            {"고객센터 02-6276-2666 "}
            <span className="text-[12px] font-normal text-[#BDBDBD]">(평일 오전 9시 ~ 오후 6시)</span>
          </p>
          <p className="mx-0 mt-2.5 mb-0 text-[#9A9A9A]">Copyright 한우리열린교육. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
