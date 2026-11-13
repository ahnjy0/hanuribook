import RotatingWords from "@/components/common/RotatingWords";

export default function HeroSection() {
  return (
    <section
      // 배경: 선형 그라데이션 #E6450F → #FF521A → #FF6633 (왼쪽 위 → 오른쪽 아래 사선)
      className="relative isolate overflow-hidden rounded-t-none rounded-b-[32px] bg-[linear-gradient(to_bottom_right,#E6450F_0%,#FF521A_50%,#FF6633_100%)] text-white"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        // 이미지 층: 색을 덮어 흐리는 대신 마스크로 가장자리를 투명하게 → 아래 그라데이션 배경과 자연스럽게 이어짐
        // 모바일(~767px): 화면 너비 전체로 아래쪽에 깔고 (이미지 비율 1247:661 → 높이 53.01vw), 위쪽을 ease-out 곡선으로 투명하게
        // 태블릿(md): 높이 220px(너비 415px)로 오른쪽 아래에 두고, 마스크 없이 이미지 전체를 그대로 표시 (배경이 투명한 PNG라 흐림 불필요)
        // 데스크톱(lg): 섹션 높이 전체(최소 500px → 너비 약 943px)로 두되, 이미지 왼쪽 끝을 기준으로 배치
        //   넓은 화면: 오른쪽 끝에 맞춤 / 좁은 화면(1024px 등): 섹션 45% 지점에서 시작 → 왼쪽(여자아이)은 항상 보이고 오른쪽이 잘림
        //   이미지 왼쪽 끝 80px만 살짝 투명하게 해서 책·책상 경계가 딱 끊겨 보이지 않게 함
        className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat [background-image:url(https://cdn.hanuribook.com/img/hanuribook/kv_study.png)] [background-size:100%_auto] [background-position:center_bottom] [mask-repeat:no-repeat] [mask-composite:intersect] [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.05)_6%,rgba(0,0,0,0.15)_12%,rgba(0,0,0,0.32)_19%,rgba(0,0,0,0.52)_26%,rgba(0,0,0,0.7)_33%,rgba(0,0,0,0.85)_40%,rgba(0,0,0,0.95)_46%,black_52%)] [mask-size:100%_calc(53.01vw_+_2px)] [mask-position:center_bottom] md:[background-size:auto_220px] md:[background-position:right_bottom] md:[mask-image:none] lg:left-[max(45%,calc(100%_-_943px))] lg:[background-size:auto_100%] lg:[background-position:left_center] lg:[mask-image:linear-gradient(90deg,transparent_0px,black_80px)] lg:[mask-size:100%_100%] lg:[mask-position:0_0]"
      />
      <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-center gap-7 px-5 pt-10 pb-[calc(53vw_-_12px)] md:pb-44 lg:min-h-[500px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:py-14">
        <div className="flex flex-col gap-4.5">
          <h1
            className="m-0 text-[28px] leading-[1.3] font-extrabold tracking-[-0.04em] lg:text-[44px]"
            id="hero-title"
          >
            <RotatingWords
              words={["\uc77d\uae30", "\ub9d0\ud558\uae30", "\uc4f0\uae30"]}
              className="text-[38px] leading-[1.2] text-[#FFE6A8] lg:text-[60px]"
            />
            <br />
            능력은
            <br />
            우리 아이의 인생
            <br />
            모든 페이지에 함께하기에
          </h1>
          <p className="m-0 text-[16px] leading-[1.6] text-[#FFF3EA]">
            한우리는 누구보다 깊이 연구하고,
            <br />
            오래 고민하고, 성실히 가르칩니다.
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1.5" />
        </div>
      </div>
    </section>
  );
}
