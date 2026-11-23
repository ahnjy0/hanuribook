import SectionTitle from "./SectionTitle";

/**
 * 소크라테스 교재 구성: 회색 박스 안에 교재 이미지(가운데) + 그 아래 구성 목록 가로 한 줄
 * 제목은 과정 안내와 같은 모양(왼쪽 정렬 + 보라 타일 아이콘 — 책)
 */
const ACCENT = "#6A54A6";

const KIT_IMG = { src: "https://cdn.hanuribook.com/img/program/middle_set.png", w: 762, h: 290 };

const KIT: { name: string; sub?: string }[] = [
  { name: "워크북 1권" },
  { name: "필독서 2권" },
  { name: "보조 필독서", sub: "별매" },
  { name: "포트폴리오" },
];

export default function KitSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="m-kit"
    >
      <SectionTitle
        id="m-kit"
        icon={
          <>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </>
        }
      >
        교재 구성
      </SectionTitle>
      {/* 회색 박스 하나 안에: 이미지(가운데, 최대 560px) → 아래 구성 목록 가로 한 줄(좁은 화면에서는 다음 줄로 넘어감) */}
      <div className="mt-1.5 flex flex-col items-center gap-4 rounded-[20px] bg-[#F7F7F8] px-4 py-6 lg:gap-6 lg:rounded-[24px] lg:px-8 lg:py-10">
        <img
          className="block h-auto w-full max-w-[560px]"
          src={KIT_IMG.src}
          width={KIT_IMG.w}
          height={KIT_IMG.h}
          alt={`소크라테스 교재 구성: ${KIT.map((k) => (k.sub ? `${k.name}(${k.sub})` : k.name)).join(", ")}`}
          loading="lazy"
        />
        <ul className="m-0 flex list-none flex-wrap justify-center gap-x-4 gap-y-2 p-0 lg:gap-x-7">
          {KIT.map((it) => (
            <li key={it.name} className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="h-1.5 w-1.5 flex-none rounded-[50%]" style={{ background: ACCENT }} aria-hidden="true" />
              <strong className="text-[13px] lg:text-[15px]">{it.name}</strong>
              {/* 보충 표시(별매 등): 이름 옆 작은 회색 글자 */}
              {it.sub && <span className="text-[12px] text-[#555555] lg:text-[13px]">({it.sub})</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
