import SmartLink from "@/components/common/SmartLink";
import SectionLabel from "@/components/common/SectionLabel";
import type { ProgramDetailVals } from "../useProgramDetail";

type Props = Pick<ProgramDetailVals, "p"> & {
  /** 히어로에 표지 대신 교재 구성 이미지 + 구성 상세 목록을 보여 줄 때(예: 과학탐탐) */
  kit?: {
    items: { name: string; sub?: string }[];
    img: { src: string; w: number; h: number };
    accent: string;
    /** 과정 강조색의 진한 톤(히어로 핵심 문구용) */
    strong?: string;
  };
};

export default function HeroSection({ p, kit }: Props) {
  // 초등심화 상세: 전체 과정 이동 버튼 없음, 학년 라벨은 공통 섹션 라벨(유아정규 라벨과 같은 알약 모양)
  const adv = p.group === "advanced";
  // 유아정규식 타이틀(보조 문구가 있는 페이지, 예: 과학탐탐): 유아정규 히어로처럼 한 단 가운데 정렬
  // (라벨 → 제목 → 보조·핵심 문구 → 교재 이미지 → 수업 정보 카드)
  const center = p.sloganSub !== undefined; // 빈 문자열("")이어도 유아정규식(보조 문구만 생략)
  // 수업 정보(대상 · 학습 기간 · 교재 구성): 흰 박스 안에 항목을 위에서 아래로 한 줄씩(세로 정렬)
  // - 줄마다 왼쪽: 항목명(과정 강조색 보통 굵기) / 오른쪽: 내용, 줄 사이 옅은 구분선
  const rows: [string, React.ReactNode][] = [
    ...(p.info ?? []),
    ...(kit
      ? [
          [
            "교재 구성",
            // 교재 구성 내용: 문장처럼 가로로 이어서 나열, 항목 사이는 쉼표(,)로 구분.
            // 좁은 휴대폰에서도 항목마다 줄이 나뉘어 세로 목록처럼 보이지 않도록, 항목 안에서도 단어 단위로 자연스럽게 줄바꿈(inline + break-keep)
            <ul key="kit" className="m-0 list-none p-0 break-keep">
              {kit.items.map((it, j) => (
                <li key={it.name} className="inline">
                  {j > 0 && " "}
                  {it.name}
                  {it.sub && <span className="ml-1 text-[12px] font-normal text-[#6B6B6B] lg:text-[13px]">({it.sub})</span>}
                  {j < kit.items.length - 1 && ","}
                </li>
              ))}
            </ul>,
          ] as [string, React.ReactNode],
        ]
      : []),
  ];
  const infoBox = (cls: string) =>
    rows.length > 0 && (
      // box-border: 리셋(Preflight)이 없어 기본이 content-box → 폭 넘침 방지
      <dl
        // 스타일: 흰 박스 안에 줄을 위에서 아래로(세로 정렬), 구분선 없이 줄 간격으로 구분.
        // 항목명은 강조색 연한 바탕의 알약 라벨(같은 너비) → 내용과 한눈에 구분
        className={`m-0 box-border grid-cols-1 gap-2.5 rounded-[18px] bg-white px-4 py-4 shadow-[0_6px_16px_rgba(0,0,0,0.05)] lg:gap-3 lg:rounded-[20px] lg:px-6 lg:py-5 ${cls}`}
      >
        {rows.map(([k, v]) => (
          <div key={k} className="box-border flex items-center gap-3 text-left lg:gap-4">
            {/* 항목명(대상 · 학습 기간 · 교재 구성): 알약 라벨 — 강조색 글자 + 강조색 10% 바탕(과정 라벨과 같은 톤), 굵게, 고정 너비 가운데 */}
            <dt
              className="box-border inline-flex w-[78px] flex-none items-center justify-center rounded-full py-1 text-[13px] leading-[1.5] font-bold lg:w-[88px] lg:text-[14px]"
              style={{ color: kit?.accent ?? "#6B6B6B", background: `${kit?.accent ?? "#6B6B6B"}1A` }}
            >
              {k}
            </dt>
            {/* 내용(초등 3학년 · 12개월 · 교재 구성): 강조 없이 보통 굵기 — 세 줄 모두 같은 글자 모양 */}
            <dd className="m-0 min-w-0 text-[14px] leading-[1.5] font-medium break-keep text-[#333333] lg:text-[15px]">{v}</dd>
          </div>
        ))}
      </dl>
    );
  return (
    <section
      // 초등심화 상세: 유아정규 히어로처럼 아래 좌우 모서리 둥글게
      className={adv ? "overflow-hidden rounded-b-[32px]" : undefined}
      style={{ background: p.tint }}
      aria-labelledby="d-h"
    >
      <div className={`mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4.5 px-5 ${center ? "pt-9 pb-10 lg:pt-16 lg:pb-20" : "pt-5 pb-8"}`}>
        {!adv && (
        <SmartLink
          className="inline-flex min-h-11 items-center gap-1.5 self-start text-[14px] font-semibold text-[#333333] no-underline"
          href={p.back}
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4A4A4A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          {`${p.sub} 전체 과정`}
        </SmartLink>
        )}
        <div className={center ? "flex flex-col items-center gap-6 text-center lg:gap-8" : "grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12"}>
          <div className={`flex flex-col gap-3 ${center ? "items-center" : ""}`}>
            {/* 학년 라벨 줄: 수업 정보 박스(info)가 있는 페이지는 대상 학년이 박스에 나오므로 숨김(예: 과학탐탐) */}
            {!p.info && (
            <div className="flex flex-wrap items-center gap-1.5">
              {adv ? (
                <SectionLabel color="#C2410C" bg="#FFFFFF">
                  {p.grade}
                </SectionLabel>
              ) : (
                <span className="rounded-[6px] bg-white px-2.5 py-1 text-[13px] font-bold text-[#C2410C]">
                  {p.grade}
                </span>
              )}
              {/* 분야 문구(focus): 비어 있으면 표시하지 않음(예: 과학탐탐) */}
              {p.focus && (
                <span className={`text-[13px] font-semibold text-[#333333] ${adv ? "lg:mb-2.5" : ""}`}>{p.focus}</span>
              )}
            </div>
            )}
            {/* 정보 묶음 구분(수업 정보가 있는 페이지, 예: 과학탐탐):
                ① 제목 + 슬로건 ② 설명 + 태그 ③ (구분선) 대상·학습 기간 — 묶음 안은 촘촘히, 묶음 사이는 넓게 */}
            <div className={`flex flex-col ${center ? "items-center" : ""} ${p.info ? "gap-1.5 lg:gap-2" : "gap-3"}`}>
              {/* 프로그램 구분 라벨(예: 과학 독서 프로그램): 유아정규·어휘리더 히어로 라벨과 같은 공통 섹션 라벨, 색은 과학탐탐 강조색(초록 글자 + 강조색을 옅게(10%) 깐 반투명 바탕 — 어휘리더 라벨처럼 강조색의 연한 톤), 왼쪽 정렬 */}
              {p.label && (
                <div className="mb-1">
                  <SectionLabel color={kit?.accent ?? "#1F7A4C"} bg={`${kit?.accent ?? "#1F7A4C"}1A`}>
                    {p.label}
                  </SectionLabel>
                </div>
              )}
              {center ? (
                // 유아정규 히어로와 같은 타이틀 스타일: 큰 제목(36/56px) → 보조 문구(작고 중간 굵기) + 핵심 문구(크고 굵게)
                <>
                  <h1 className="mx-0 mt-1 mb-1 animate-pop-in text-[36px] leading-[1.2] font-extrabold tracking-[-0.03em] motion-reduce:animate-none lg:mt-2 lg:mb-2 lg:text-[56px]" id="d-h">
                    {p.title}
                  </h1>
                  <p className="m-0 flex flex-col items-center gap-0.5 break-keep lg:gap-1">
                    {p.sloganSub && <span className="text-[15px] leading-[1.4] font-semibold text-[#4A4A4A] lg:text-[18px]">{p.sloganSub}</span>}
                    {/* 설명글(핵심 문구): 과정 강조색의 진한 톤(과학탐탐 #14532D · 한국사 #7C2D12 · 지리 #1E3A70 · 세계사 #44287F) */}
                    {/* 스타일: 장식 없이 진한 강조색 굵은 글자만 */}
                    <span
                      className="text-[20px] leading-[1.3] font-extrabold tracking-[-0.02em] lg:text-[26px]"
                      style={{ color: kit?.strong ?? kit?.accent ?? "#1F1F1F" }}
                    >
                      {p.slogan}
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h1 className="m-0 animate-pop-in text-[32px] font-extrabold tracking-[-0.04em] motion-reduce:animate-none lg:text-[42px]" id="d-h">
                    {p.title}
                  </h1>
                  <p className="m-0 text-[18px] leading-[1.45] font-bold text-[#D94E0F]">{p.slogan}</p>
                </>
              )}
            </div>
            {/* 설명 + 태그 묶음: 둘 다 비어 있으면 그리지 않음(예: 과학탐탐) */}
            {(p.long || p.tags) && (
            <div className={p.info ? "mt-2 lg:mt-3" : ""}>
              <div className={`flex min-w-0 flex-col ${p.info ? "gap-2" : "gap-3"}`}>
                {p.long && <p className="m-0 text-[15px] leading-[1.7] text-[#222222]">{p.long}</p>}
                {/* 태그: "  "(공백 두 칸)으로 나눠 각각 따로 표시 — 띄어쓰기가 있는 태그(예: #탐구 역량)도 구분되게. 비어 있으면 표시 안 함 */}
                {p.tags && (
                <ul className="m-0 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 text-[13px] font-semibold text-[#333333]">
                  {p.tags.split(/\s{2,}/).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                )}
              </div>
            </div>
            )}
            {/* 수업 정보 — 데스크톱: 왼쪽 글 영역 아래 */}
            {!center && infoBox("hidden lg:mt-4 lg:grid")}
          </div>
          {kit ? (
            // 교재 구성 세트 이미지(구성 상세는 대상·학습 기간과 같은 정보 카드에 표시). 모션은 표지와 같은 card-rise
            <div className="w-full max-w-[720px] animate-card-rise motion-reduce:animate-none" style={{ animationDelay: "300ms" }}>
              <img
                className="block h-auto w-full"
                src={kit.img.src}
                width={kit.img.w}
                height={kit.img.h}
                alt={`${p.title} 교재 구성: ${kit.items.map((k) => k.name).join(", ")}`}
              />
            </div>
          ) : p.src ? (
            // 실제 이미지가 있으면 자리표시 박스 대신 이미지(세로형)를 영역 가운데에 표시
            <div className="box-border flex h-52 items-center justify-center lg:h-[352px] lg:py-8">
              {/* 데스크톱: 영역 높이는 늘리고 위아래 안쪽 여백(32px)을 줘서 표지 크기(288px)는 그대로, 위아래 여백만 넓게 */}
              {/* 모션: 유아정규 히어로 교재 카드와 같게 — 페이지가 열릴 때 아래에서 떠오르며 나타남(card-rise, 0.15초 뒤). 동작 줄이기 설정 시 없음 */}
              <div className="h-full animate-card-rise motion-reduce:animate-none" style={{ animationDelay: "300ms" }}>
                <img
                  className="block h-full w-auto max-w-full rounded-[10px] object-contain shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
                  src={p.src}
                  alt={`${p.title} 교재 표지`}
                />
              </div>
            </div>
          ) : (
            <div className="flex h-50 items-center justify-center rounded-[24px] border border-dashed border-[#D9C9BC] bg-white text-center text-[13px] text-[#6B5A4C] lg:h-80">{`[이미지] ${p.img}`}</div>
          )}
          {/* 수업 정보 — 모바일·태블릿: 교재 이미지 아래
              가운데 정렬(과학탐탐): 교재 이미지처럼 아래에서 떠오르며 나타남(card-rise) — 이미지(0.15초) 다음 0.3초 뒤 차례로. 동작 줄이기 설정 시 없음 */}
          {center
            ? infoBox("grid w-full max-w-[640px] animate-card-rise [animation-delay:300ms] motion-reduce:animate-none")
            : infoBox("grid lg:hidden")}
        </div>
      </div>
    </section>
  );
}
