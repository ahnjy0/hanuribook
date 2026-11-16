// 외부 사이트로 가는 링크는 새 창으로 열기
const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

// 모바일(2열)·태블릿(4열)은 카드가 좁아(약 160px) 아이콘·여백을 줄여 글자가 한 줄에 들어가게 함
const CARD =
  "reveal flex min-h-16 items-center gap-2 rounded-[16px] bg-[#F7F7F8] px-3 py-3 text-[#1F1F1F] no-underline lg:gap-2.5 lg:px-3.5";
// 아이콘 칸: 4개 모두 같은 크기 — 모바일·태블릿 32×32, 데스크톱 48×40(가로로 넓은 로고가 잘 보이게)
const ICON_BOX = "flex h-8 w-8 flex-none items-center justify-center rounded-[8px] lg:h-10 lg:w-12 lg:rounded-[10px]";
// 제목·설명 줄바꿈 금지
const NAME = "text-[14px] whitespace-nowrap";
const SUB = "text-[12px] tracking-[-0.02em] whitespace-nowrap text-[#555555]";

export default function ServicesSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-14 pb-12" aria-labelledby="svc-title">
      <h2 className="reveal mx-0 mt-0 mb-3.5 text-[18px] font-extrabold" id="svc-title">
        서비스 바로가기
      </h2>
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
        <a className={CARD} href="https://md.hanuribook.com/main" {...EXTERNAL}>
          <span className={`${ICON_BOX} bg-white p-0.5 lg:p-1`}>
            <img
              className="block max-h-full max-w-full object-contain"
              src="https://cdn.hanuribook.com/img/md/header_logo.png"
              width={131}
              height={101}
              alt=""
              loading="lazy"
            />
          </span>
          <span className="flex flex-col">
            <span className={SUB}>선생님과 같이 읽는</span>
            <strong className={NAME}>한우리 몰입독서</strong>
          </span>
        </a>
        <a className={CARD} href="https://www.hanuribook.com/pickbook" {...EXTERNAL}>
          <span className={`${ICON_BOX} bg-white p-0.5 lg:p-1`}>
            <img
              className="block max-h-full max-w-full object-contain"
              src="https://www.hanuribook.com/resources/img/pickbook/logo.png"
              width={200}
              height={83}
              alt=""
              loading="lazy"
            />
          </span>
          <span className="flex flex-col">
            <span className={SUB}>꼭 읽어야 할 좋은책</span>
            <strong className={NAME}>한우리 추천도서</strong>
          </span>
        </a>
        <a className={CARD} href="https://www.youtube.com/channel/UCgUOi_ufB-23B-bmrb5vMAA" {...EXTERNAL}>
          <span className={`${ICON_BOX} bg-[#FDE2E2]`}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="#C62828">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="flex flex-col">
            <span className={SUB}>공식 채널</span>
            <strong className={NAME}>YouTube</strong>
          </span>
        </a>
        <a className={CARD} href="https://www.instagram.com/hanuribook.official" {...EXTERNAL}>
          <span className={`${ICON_BOX} bg-[#F3E5F5]`}>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7B1FA2"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </span>
          <span className="flex flex-col">
            <span className={SUB}>hanuribook.official</span>
            <strong className={NAME}>Instagram</strong>
          </span>
        </a>
      </div>
    </section>
  );
}
