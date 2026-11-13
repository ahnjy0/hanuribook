export default function ColorTypeSection() {
  return (
    <section className="grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-4.5">
        <h2 className="m-0 text-[22px] font-extrabold">01 Color</h2>
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] bg-[#F26522]" />
            <strong className="text-[13px]">Primary 500</strong>
            <span className="text-[12px] text-[#6B6B6B]">#F26522 · CTA, 활성 탭</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] bg-[#D94E0F]" />
            <strong className="text-[13px]">Primary 600</strong>
            <span className="text-[12px] text-[#6B6B6B]">#D94E0F · 눌림, 강조 제목</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] bg-[#C2410C]" />
            <strong className="text-[13px]">Primary Text</strong>
            <span className="text-[12px] text-[#6B6B6B]">#C2410C · 흰 배경 위 작은 글씨</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] border border-[#FBE7DA] bg-[#FFF4EC]" />
            <strong className="text-[13px]">Primary 50</strong>
            <span className="text-[12px] text-[#6B6B6B]">#FFF4EC · 섹션 배경, 칩</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] bg-[#1F1F1F]" />
            <strong className="text-[13px]">Ink</strong>
            <span className="text-[12px] text-[#6B6B6B]">#1F1F1F · 제목</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] bg-[#4A4A4A]" />
            <strong className="text-[13px]">Body</strong>
            <span className="text-[12px] text-[#6B6B6B]">#4A4A4A · 본문</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] border border-[#ECECEC] bg-[#F7F7F8]" />
            <strong className="text-[13px]">Surface</strong>
            <span className="text-[12px] text-[#6B6B6B]">#F7F7F8 · 정보 박스</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-22 rounded-[16px] bg-[#1E3A5F]" />
            <strong className="text-[13px]">Navy</strong>
            <span className="text-[12px] text-[#6B6B6B]">#1E3A5F · 교사 채용 섹션</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4.5">
        <h2 className="m-0 text-[22px] font-extrabold">02 Typography · Pretendard</h2>
        <div className="flex flex-col gap-3.5 rounded-[20px] bg-[#F7F7F8] p-6">
          <div className="flex items-baseline gap-5">
            <span className="w-30 text-[12px] text-[#6B6B6B]">Display 32/42 · 800</span>
            <span className="text-[32px] font-extrabold tracking-[-0.04em]">우리 아이 문해력</span>
          </div>
          <div className="flex items-baseline gap-5">
            <span className="w-30 text-[12px] text-[#6B6B6B]">H1 26/36 · 800</span>
            <span className="text-[26px] font-extrabold">한우리 프로그램</span>
          </div>
          <div className="flex items-baseline gap-5">
            <span className="w-30 text-[12px] text-[#6B6B6B]">H2 20/28 · 700</span>
            <span className="text-[20px] font-bold">자녀 학년 선택</span>
          </div>
          <div className="flex items-baseline gap-5">
            <span className="w-30 text-[12px] text-[#6B6B6B]">H3 17/24 · 700</span>
            <span className="text-[17px] font-bold">서초지부 · 상담 예약하기</span>
          </div>
          <div className="flex items-baseline gap-5">
            <span className="w-30 text-[12px] text-[#6B6B6B]">Body 15/24 · 400</span>
            <span className="text-[15px] text-[#4A4A4A]">
              30년 독서 전문 교육 노하우로 아이의 독서력을 진단합니다.
            </span>
          </div>
          <div className="flex items-baseline gap-5">
            <span className="w-30 text-[12px] text-[#6B6B6B]">Caption 13/20 · 500</span>
            <span className="text-[13px] font-medium text-[#6B6B6B]">
              도보 12분 · 고속터미널역 8-1번 출구
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
