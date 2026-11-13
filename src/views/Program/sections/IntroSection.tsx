// 페이지 타이틀 영역 — 상담신청 페이지(Consult/sections/HeroSection)와 같은 형식
// 모바일·태블릿: 글 → 이미지 순서로 세로 배치 / 데스크톱(lg): 왼쪽 글, 오른쪽 이미지
export default function IntroSection() {
  return (
    <section className="bg-white" aria-labelledby="program-h">
      <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-center gap-6 px-5 pt-8 pb-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-12 lg:py-12">
        <div className="flex flex-col gap-3">
          <h1 className="m-0 text-[28px] leading-[1.35] font-extrabold lg:text-[36px]" id="program-h">
            <span className="text-[#D94E0F]">읽기·독서·토론·논술로</span>
            <br />
            문해력을 탄탄하게!
          </h1>
          <p className="m-0 text-[15px] leading-[1.6] text-[#4A4A4A]">
            한우리독서토론논술 프로그램은
            <br />
            5력 1체 독서 교육 원리와 소그룹 협동 학습을 기반으로
            <br />
            학습자의 발달단계와 독서능력을 고려하여 창의성, 인성, 감성이 조화롭게 형성되도록 프로그램을 구성합니다.
          </p>
        </div>
        <img
          className="mx-auto block h-auto w-full max-w-[440px]"
          src="https://cdn.hanuribook.com/img/hanuribook/program_all.png"
          width={900}
          height={450}
          alt="한우리 프로그램 교재 — 꿈꾸는 새싹, 어휘리더, 독서리더, 논리리더, 소크라테스, 고등 문학"
        />
      </div>
    </section>
  );
}
