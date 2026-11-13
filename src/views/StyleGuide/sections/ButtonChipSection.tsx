export default function ButtonChipSection() {
  return (
    <section className="grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-4.5">
        <h2 className="m-0 text-[22px] font-extrabold">03 Button</h2>
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <button className="h-14 rounded-[14px] border-0 bg-[#F26522] px-7 py-0 font-[family-name:inherit] text-[17px] font-bold text-white">
              Primary · L 56
            </button>
            <button className="h-12 rounded-[12px] border-0 bg-[#F26522] px-5.5 py-0 font-[family-name:inherit] text-[15px] font-bold text-white">
              Primary · M 48
            </button>
            <button className="h-12 rounded-[12px] border-0 bg-[#D94E0F] px-5.5 py-0 font-[family-name:inherit] text-[15px] font-bold text-white">
              Pressed
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-12 rounded-[12px] border-0 bg-[#EEEEEF] px-5.5 py-0 font-[family-name:inherit] text-[15px] font-semibold text-[#333333]">
              Secondary · 전화 문의
            </button>
            <button className="h-12 rounded-[12px] border-[1.5px] border-[#F26522] bg-white px-5.5 py-0 font-[family-name:inherit] text-[15px] font-bold text-[#C2410C]">
              Outline
            </button>
            <button className="h-12 rounded-[12px] border-0 bg-[#1E3A5F] px-5.5 py-0 font-[family-name:inherit] text-[15px] font-bold text-white">
              Navy
            </button>
            <button
              className="h-12 rounded-[12px] border-0 bg-[#E4E4E4] px-5.5 py-0 font-[family-name:inherit] text-[15px] font-semibold text-[#8A8A8A]"
              disabled
            >
              Disabled
            </button>
          </div>
          <p className="m-0 text-[13px] text-[#6B6B6B]">
            모든 버튼 높이 44px 이상 · 모서리 12–14px · 주 CTA는 화면당 1개
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4.5">
        <h2 className="m-0 text-[22px] font-extrabold">04 Chip · Badge · Tab</h2>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex h-9 items-center rounded-full bg-[#F26522] px-3.5 py-0 text-[14px] font-bold text-white">
            필터 · 선택
          </span>
          <span className="inline-flex h-9 items-center rounded-full border border-[#E4E4E4] bg-white px-3.5 py-0 text-[14px] font-medium text-[#333333]">
            필터 · 기본
          </span>
          <span className="inline-flex h-10 items-center rounded-[10px] bg-[#F26522] px-4 py-0 text-[14px] font-bold text-white">
            서브메뉴 · 선택
          </span>
          <span className="inline-flex h-10 items-center rounded-[10px] border border-[#ECE4DE] bg-white px-4 py-0 text-[14px] text-[#333333]">
            서브메뉴 · 기본
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-[6px] bg-[#FFF1E7] px-2 py-1 text-[12px] font-bold text-[#C2410C]">
            우수 센터
          </span>
          <span className="rounded-[6px] bg-[#EAF2FF] px-2 py-1 text-[12px] font-bold text-[#2F5AA8]">
            전문 지도교사 8명
          </span>
          <span className="rounded-[6px] bg-[#F1F1F2] px-2 py-1 text-[12px] font-bold text-[#4A4A4A]">
            소그룹 / 1:1
          </span>
          <span className="rounded-[6px] bg-[#E8F5EE] px-2 py-1 text-[12px] font-bold text-[#1F7A4C]">
            체험수업 가능
          </span>
        </div>
        <div className="grid grid-cols-4 border-b border-b-[#EFEFEF]">
          <span className="flex h-11 items-center justify-center border-b-2 border-b-[#F26522] text-[15px] font-bold text-[#D94E0F]">
            프로그램
          </span>
          <span className="flex h-11 items-center justify-center text-[15px] text-[#333333]">수업상담</span>
          <span className="flex h-11 items-center justify-center text-[15px] text-[#333333]">센터찾기</span>
          <span className="flex h-11 items-center justify-center text-[15px] text-[#333333]">
            한우리선생님
          </span>
        </div>
      </div>
    </section>
  );
}
