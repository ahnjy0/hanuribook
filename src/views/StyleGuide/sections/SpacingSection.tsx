export default function SpacingSection() {
  return (
    <section className="flex flex-col gap-4.5">
      <h2 className="m-0 text-[22px] font-extrabold">07 Spacing · Grid · Breakpoint</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 rounded-[20px] bg-[#F7F7F8] p-5">
          <strong className="text-[16px]">Mobile · ~767px</strong>
          <span className="text-[14px] leading-[1.6] text-[#4A4A4A]">
            1단 카드 · 좌우 20px · 섹션 간격 56px
            <br />
            하단 고정 CTA 바 · 서브메뉴 3열 칩
          </span>
        </div>
        <div className="flex flex-col gap-2 rounded-[20px] bg-[#F7F7F8] p-5">
          <strong className="text-[16px]">Tablet · 768–1023px</strong>
          <span className="text-[14px] leading-[1.6] text-[#4A4A4A]">
            2단 카드 그리드 · 목록+지도 병렬 시작
            <br />
            CTA 바 최대폭 720px 중앙 정렬
          </span>
        </div>
        <div className="flex flex-col gap-2 rounded-[20px] bg-[#F7F7F8] p-5">
          <strong className="text-[16px]">Desktop · 1024px~</strong>
          <span className="text-[14px] leading-[1.6] text-[#4A4A4A]">
            3–4단 그리드 · 최대폭 1200px
            <br />
            히어로 좌우 분할 · 제목 크기 확대
          </span>
        </div>
      </div>
      <div className="flex items-end gap-2.5">
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-1 w-1 bg-[#F26522]" />4
        </div>
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-2 w-2 bg-[#F26522]" />8
        </div>
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-3 w-3 bg-[#F26522]" />
          12
        </div>
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-4 w-4 bg-[#F26522]" />
          16
        </div>
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-5 w-5 bg-[#F26522]" />
          20
        </div>
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-6 w-6 bg-[#F26522]" />
          24
        </div>
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-8 w-8 bg-[#F26522]" />
          32
        </div>
        <div className="flex flex-col items-center gap-1.5 text-[12px] text-[#6B6B6B]">
          <span className="h-14 w-14 bg-[#F26522]" />
          56
        </div>
      </div>
    </section>
  );
}
