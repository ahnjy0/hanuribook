import type { ReactNode } from "react";
import Title, { Section } from "./Title";

/** 넷째: 본사 · 지역센터 마케팅 수단 */
const MARKETING = ["배너", "온·오프라인 이벤트", "판촉물", "TV광고", "설명회"];

/** 여섯째: 지도교사 활동 시 혜택 */
const BENEFITS = [
  "독서지도사 수강료 50% 환급",
  "신입교사 초도물품 지원",
  "한우리복지몰 한포인트 제공",
  "상조 물품 제공",
  "자녀 교재비 할인",
  "한우리 평생교육원 교육과정 할인",
  "교사정착 지원금",
];

/** 일곱째: 교사 지원(본사 · 지역센터) */
const EDU_SUPPORTS = ["교사 역량 강화를 위한 온라인 및 화상교육", "수업자료, 노하우 공유 지식의 샘", "현장 활용도 높은 교재 해제 강의"];

/** 일곱째: 본사 교육 체계도 — 연차별 교육 과정 [과정명, 기간] */
const TRACKS: { title: string; steps: [string, string][] }[] = [
  {
    title: "1년차 과정",
    steps: [
      ["입문과정", "1개월"],
      ["실무1과정", "2~4개월"],
      ["실무2과정", "5~7개월"],
      ["실무3과정", "8~10개월"],
      ["향상과정", "11~12개월"],
    ],
  },
  {
    title: "2년차 과정",
    steps: [
      ["성장1과정", "13~16개월"],
      ["성장2과정", "18~22개월"],
      ["전문과정", "22~24개월"],
    ],
  },
];

/**
 * 이유 한 줄: 흰 카드 안 — 왼쪽 글(큰 번호 · 제목 · 설명 · 강조 문장) / 오른쪽 연한 살구색 그림 판
 * 모바일: 글 → 그림 판 위아래 / 데스크톱: 1:1 가로, 세로 가운데 맞춤
 */
function Reason({
  no,
  title,
  desc,
  point,
  left,
  children,
}: {
  no: number;
  title: ReactNode;
  desc?: string;
  point?: string;
  /** 왼쪽 글 영역 맨 아래에 덧붙일 내용 */
  left?: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="grid grid-cols-1 items-center gap-5 rounded-[24px] border border-solid border-[#FBE7DA] bg-white p-5 lg:grid-cols-2 lg:gap-8 lg:p-8">
      <div className="flex flex-col gap-2 lg:gap-3">
        <span className="text-[32px] leading-none font-black tracking-[-0.02em] text-[#F26522] lg:text-[44px]" aria-hidden="true">
          {String(no).padStart(2, "0")}
        </span>
        <h3 className="m-0 text-[19px] leading-[1.4] font-extrabold break-keep text-[#1F1F1F] lg:text-[26px]">{title}</h3>
        {desc && <p className="m-0 text-[14px] leading-[1.65] break-keep whitespace-pre-line text-[#555555] lg:text-[16px]">{desc}</p>}
        {point && (
          <p className="m-0 mt-1 self-start rounded-[10px] bg-[#FFF1E7] px-3 py-2 text-[13px] leading-[1.5] font-bold break-keep text-[#C2410C] lg:text-[15px]">
            {point}
          </p>
        )}
        {left}
      </div>
      <div className="flex flex-col justify-center gap-3 rounded-[18px] bg-[#FFF7F1] p-4 lg:p-6">{children}</div>
    </li>
  );
}

/** 큰 숫자 칸(흰 바탕) */
function Stat({ cap, value }: { cap: string; value: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[14px] bg-white px-2 py-5 text-center lg:py-7">
      <span className="text-[12px] leading-[1.4] break-keep text-[#8A5A3C] lg:text-[14px]">{cap}</span>
      <strong className="text-[26px] leading-none font-black text-[#C2410C] lg:text-[34px]">{value}</strong>
    </div>
  );
}

/** 선 아이콘 + 글 한 줄(흰 바탕) */
function IconRow({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-[12px] bg-white px-3 py-2.5">
      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#FFF1E7]" aria-hidden="true">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <div className="flex min-w-0 flex-col">
        <strong className="text-[13px] font-extrabold text-[#1F1F1F] lg:text-[15px]">{title}</strong>
        <span className="text-[11px] break-keep text-[#666666] lg:text-[13px]">{desc}</span>
      </div>
    </div>
  );
}

/** '한우리에서 시작해야 하는 이유' — 다섯 가지를 한 줄씩(글 · 그림 판) 쌓은 카드 목록 */
export default function ReasonsSection() {
  return (
    <Section id="ts-why" first>
      <Title id="ts-why" icon="features">
        독서교육 전문가로서의 첫 걸음, 한우리에서 시작해야 하는 이유
      </Title>
      <ol className="m-0 flex list-none flex-col gap-3 p-0 lg:gap-4">
        <Reason
          no={1}
          title="회원 모집 걱정 없는 탄탄한 브랜드니까!"
          desc="30년 이상의 노하우를 가진 독서교육 대표 브랜드 한우리! 모두가 인정하는 곳에서 시작하세요."
        >
          <div className="flex gap-2 lg:gap-3">
            <Stat cap="독서교육 업계 최다 교사 수" value="4,500명" />
            <Stat cap="독서교육 업계 최다 회원 수" value="10만 명" />
          </div>
          <p className="m-0 text-right text-[11px] text-[#8A8A8A] lg:text-[12px]">*2026년 통계 기준</p>
        </Reason>

        <Reason no={2} title="프리랜서 형태로 자유롭게 업무 시간을 조정할 수 있으니까!">
          {/* 수업 형태: 선택 및 병행 가능 */}
          <span className="text-[12px] font-bold text-[#C2410C] lg:text-[13px]">• 수업 형태 선택 및 병행 가능</span>
          <div className="grid grid-cols-2 gap-2">
            <IconRow icon={<path d="M3 10 12 4l9 6M5 9v11h14V9M8 20v-5h3v5M13 13h4v3h-4z" />} title="공부방 운영" desc="선생님 집에서 수업" />
            <IconRow icon={<path d="M3 11 12 4l9 7M5 10v10h14V10M9 20v-6h6v6" />} title="방문수업" desc="학생 집으로 방문" />
          </div>
          <p className="-mt-1 m-0 text-right text-[11px] text-[#8A8A8A] lg:text-[12px]">※일대일 혹은 그룹수업 가능</p>
          {/* 수업 시간: 선택 가능 */}
          <span className="text-[12px] font-bold text-[#C2410C] lg:text-[13px]">• 수업 시간 선택 가능</span>
          <IconRow
            icon={
              <>
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" />
              </>
            }
            title="원하는 시간에만"
            desc="직접 수업 시간을 조정하여 원하는 시간에만 수업 가능"
          />
        </Reason>

        <Reason no={3} title="가맹비, 수수료 0원!" desc="부담없이 시작하고, 일한 만큼 그대로 수입이 되니까!" point="교재비를 제외한 수업료 전체가 모두 선생님의 수익이 됩니다.">
          <div className="flex gap-2 lg:gap-3">
            <Stat cap="가맹비" value="0원" />
            <Stat cap="수수료" value="0원" />
          </div>
        </Reason>

        <Reason no={4} title="본사와 지역센터의 적극적인 광고와 홍보지원!" desc="본사와 지역센터에서 다양한 마케팅 수단을 활용하여 지원합니다.">
          {/* 마케팅 수단: 위 한우리 건물 아이콘 + 아래 다섯 가지 수단 알약 */}
          <div className="flex flex-col items-center gap-4 py-2">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white lg:h-20 lg:w-20" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="#F26522" strokeWidth="2" strokeLinejoin="round">
                <path d="M16 3v5" strokeLinecap="round" />
                <path d="M16 3h5l-1 1.5 1 1.5h-5" fill="#F26522" />
                <path d="M5 29V13l11-5 11 5v16" />
                <path d="M3 29h26" strokeLinecap="round" />
                <path d="M9.5 15h3M14.5 15h3M19.5 15h3M9.5 20h3M19.5 20h3" strokeLinecap="round" />
                <path d="M14 29v-6h4v6" />
              </svg>
            </span>
            <ul className="m-0 flex list-none flex-wrap justify-center gap-2 p-0" aria-label="마케팅 수단">
              {MARKETING.map((m) => (
                <li key={m} className="rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#C2410C] lg:text-[15px]">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reason>

        <Reason no={5} title="유아부터 중고등까지 연령별 맞춤 프로그램!" desc="엄선한 필독서와 매월 새로운 교재로 진행하는 한우리 독서 프로그램">
          {/* 수업 기준: 작은 알약 한 줄(주 1회 · 월 4회 · 수업 시간) */}
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0" aria-label="수업 기준">
            {["주 1회", "월 4회", "개인 60분 ~ 그룹 90분 내외"].map((t) => (
              <li key={t} className="rounded-full bg-white px-3 py-1.5 text-[12px] font-extrabold break-keep text-[#C2410C] lg:text-[14px]">
                {t}
              </li>
            ))}
          </ul>
          <ul className="m-0 flex list-none flex-col gap-1 p-0 text-[12px] leading-[1.55] break-keep text-[#555555] lg:text-[13px]">
            <li>· 한 달 4차시 수업으로 매월 새로운 필독서와 매달 바뀌는 교재로 수업합니다.</li>
            <li>· 수업은 읽기-말하기-듣기-쓰기-생각하기 영역을 고르게 활용하는 다양한 활동으로 구성됩니다.</li>
          </ul>
        </Reason>

        <Reason no={6} title="본사의 아낌없는 지원과 혜택이 있으니까!">
          {/* 지도교사 활동 시 혜택: 작은 알약 목록(05번과 같은 모양) */}
          <span className="text-[12px] font-bold text-[#C2410C] lg:text-[13px]">• 지도교사 활동 시 혜택</span>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {BENEFITS.map((b) => (
              <li key={b} className="rounded-full bg-white px-3 py-1.5 text-[12px] font-normal break-keep text-[#333333] lg:text-[14px]">
                {b}
              </li>
            ))}
          </ul>
        </Reason>

        <Reason
          no={7}
          title="체계적인 교육 시스템으로 교사 역량 향상!"
          desc={"본사에서는 입문과정 이후 시기별로 수업지도에 필요한 교육을 무상으로 제공합니다.\n지역센터에서는 수업연구 모임 및 스터디를 통해 수업준비를 지원합니다."}
          left={
            // 교사 지원 세 가지: 왼쪽 설명 아래 체크 목록
            <ul className="m-0 mt-1 flex list-none flex-col gap-1.5 p-0" aria-label="교사 지원">
              {EDU_SUPPORTS.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[14px] leading-[1.5] break-keep text-[#1F1F1F] lg:text-[16px]">
                  <span className="mt-0.5 flex-none font-extrabold text-[#F26522]" aria-hidden="true">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          }
        >
          <span className="text-[12px] font-bold text-[#C2410C] lg:text-[13px]">• 본사 교육 체계도</span>
          {TRACKS.map((tr) => (
            <div key={tr.title} className="flex flex-col gap-2 rounded-[14px] bg-white px-3 py-3 lg:px-4">
              <strong className="text-[13px] font-extrabold text-[#C2410C] lg:text-[15px]">{tr.title}</strong>
              <ol
                className="relative m-0 grid list-none gap-0 p-0"
                style={{ gridTemplateColumns: `repeat(${tr.steps.length}, minmax(0, 1fr))` }}
              >
                {/* 가운데 이음선 */}
                <span className="absolute top-[26px] right-[10%] left-[10%] h-[2px] bg-[#FBD3BC] lg:top-[30px]" aria-hidden="true" />
                {tr.steps.map(([n, p]) => (
                  <li key={n} className="relative flex flex-col items-center gap-1 text-center">
                    <span className="text-[10px] font-bold break-keep text-[#1F1F1F] lg:text-[13px]">{n}</span>
                    <span className="z-10 h-2.5 w-2.5 rounded-full bg-[#F26522]" aria-hidden="true" />
                    <span className="text-[9px] break-keep text-[#777777] lg:text-[12px]">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </Reason>
      </ol>
    </Section>
  );
}
