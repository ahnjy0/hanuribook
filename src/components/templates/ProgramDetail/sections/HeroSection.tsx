import SmartLink from "@/components/common/SmartLink";
import SectionLabel from "@/components/common/SectionLabel";
import type { ProgramDetailVals } from "../useProgramDetail";

type Props = Pick<ProgramDetailVals, "p">;

export default function HeroSection({ p }: Props) {
  // 초등심화 상세: 전체 과정 이동 버튼 없음, 학년 라벨은 공통 섹션 라벨(유아정규 라벨과 같은 알약 모양)
  const adv = p.group === "advanced";
  // 수업 정보(대상·학습 기간 등): 데이터에 info가 있을 때만, 항목마다 알약 모양 흰 박스.
  // 화면 크기에 따라 놓이는 자리가 달라 두 곳에 그리고 하나만 보이게 함
  const infoBox = (cls: string, divider = false) =>
    p.info && (
      <dl
        className={`m-0 flex-wrap gap-2.5 ${cls}`}
        // 데스크톱: 위 소개 글과 구분되도록 위쪽에 옅은 구분선
        style={divider ? { borderTop: "1px solid rgba(0,0,0,0.08)" } : undefined}
      >
        {p.info.map(([k, v]) => (
          <div key={k} className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 lg:px-6 lg:py-3">
            <dt className="text-[14px] font-semibold text-[#6B6B6B]">{k}</dt>
            <dd className="m-0 text-[15px] font-extrabold text-[#1F1F1F]">{v}</dd>
          </div>
        ))}
      </dl>
    );
  return (
    <section style={{ background: p.tint }} aria-labelledby="d-h">
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4.5 px-5 pt-5 pb-8">
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
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="flex flex-col gap-3">
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
            <div className={`flex flex-col ${p.info ? "gap-1.5 lg:gap-2" : "gap-3"}`}>
              <h1 className="m-0 text-[32px] font-extrabold tracking-[-0.04em] lg:text-[42px]" id="d-h">
                {p.title}
              </h1>
              <p className="m-0 text-[18px] leading-[1.45] font-bold text-[#D94E0F]">{p.slogan}</p>
            </div>
            <div className={p.info ? "mt-2 lg:mt-3" : ""}>
              <div className={`flex min-w-0 flex-col ${p.info ? "gap-2" : "gap-3"}`}>
                <p className="m-0 text-[15px] leading-[1.7] text-[#222222]">{p.long}</p>
                {/* 태그: "  "(공백 두 칸)으로 나눠 각각 따로 표시 — 띄어쓰기가 있는 태그(예: #탐구 역량)도 구분되게 */}
                <ul className="m-0 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 text-[13px] font-semibold text-[#333333]">
                  {p.tags.split(/\s{2,}/).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* 수업 정보 — 데스크톱: 왼쪽 글 영역 아래, 구분선 아래 */}
            {infoBox("hidden lg:mt-4 lg:flex lg:pt-6", true)}
          </div>
          {p.src ? (
            // 실제 이미지가 있으면 자리표시 박스 대신 이미지(세로형)를 영역 가운데에 표시
            <div className="box-border flex h-52 items-center justify-center lg:h-[352px] lg:py-8">
              {/* 데스크톱: 영역 높이는 늘리고 위아래 안쪽 여백(32px)을 줘서 표지 크기(288px)는 그대로, 위아래 여백만 넓게 */}
              <img className="block h-full w-auto max-w-full rounded-[10px] object-contain shadow-[0_14px_30px_rgba(0,0,0,0.18)]" src={p.src} alt={`${p.title} 교재 표지`} />
            </div>
          ) : (
            <div className="flex h-50 items-center justify-center rounded-[24px] border border-dashed border-[#D9C9BC] bg-white text-center text-[13px] text-[#6B5A4C] lg:h-80">{`[이미지] ${p.img}`}</div>
          )}
          {/* 수업 정보 — 모바일·태블릿: 교재 표지 아래 */}
          {infoBox("flex justify-center lg:hidden")}
        </div>
      </div>
    </section>
  );
}
