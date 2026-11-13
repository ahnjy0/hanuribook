import Link from "next/link";
import KindIcon, { CENTER_KIND_STYLE as KIND_STYLE, type CenterKind } from "@/components/common/CenterKindIcon";
import type { CentersVals } from "../useCenters";

type Props = Pick<CentersVals, "centers" | "isMap" | "showMap">;

/** 지도 마커: 유형 아이콘 + 센터명. active면 강조 */
function MapMarker({
  name,
  kind,
  pos,
  active = false,
}: {
  name: string;
  kind: CenterKind;
  pos: string;
  active?: boolean;
}) {
  const s = KIND_STYLE[kind];
  return (
    <span
      className={`absolute flex items-center gap-1.5 rounded-[10px] py-1 pr-2.5 pl-1 text-[12px] font-bold whitespace-nowrap shadow-[0_2px_6px_rgba(0,0,0,0.12)] ${pos} ${
        active ? "bg-[#D94E0F] text-white" : "border border-[#E4E4E4] bg-white text-[#1F1F1F]"
      }`}
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-[7px]"
        style={{ background: active ? "#FFFFFF" : s.bg }}
      >
        <KindIcon kind={kind} size={16} color={s.fg} />
      </span>
      {name}
      <span className="sr-only">{` (${s.label})`}</span>
    </span>
  );
}

function CenterKindBadge({ kind }: { kind: CenterKind }) {
  const s = KIND_STYLE[kind];
  return (
    <div className="flex flex-none flex-col items-center gap-1">
      <span
        className="flex h-14 w-14 items-center justify-center rounded-[16px]"
        style={{ background: s.bg }}
      >
        <KindIcon kind={kind} size={32} color={s.fg} />
      </span>
      <span className="text-[12px] font-bold" style={{ color: s.fg }}>
        {s.label}
      </span>
    </div>
  );
}

export default function ResultsSection({ centers, isMap, showMap }: Props) {
  return (
    <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 gap-4 px-5 pt-3.5 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-6">
      {isMap && (
        <div
          className="relative h-65 overflow-hidden rounded-[20px] border border-[#E6E6E6] bg-[#F1F3F0] md:h-85 lg:h-[620px]"
          id="ct-map"
          role="img"
          aria-label="서울 주요 한우리 센터 위치 지도"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M-10 150 C60 120 110 170 170 140 S280 90 330 120 S400 110 420 100 L420 130 C380 140 340 150 300 145 S200 175 160 172 S60 160 -10 180Z"
              fill="#CFE3F5"
            />
            <path
              d="M0 60 L400 80 M0 230 L400 210 M80 0 L110 300 M220 0 L200 300 M320 0 L340 300"
              stroke="#FFFFFF"
              strokeWidth="6"
            />
            <path
              d="M0 60 L400 80 M0 230 L400 210 M80 0 L110 300 M220 0 L200 300 M320 0 L340 300"
              stroke="#E2E2E2"
              strokeWidth="1"
            />
            <rect x="240" y="190" width="60" height="40" rx="6" fill="#DDEED8" />
            <rect x="30" y="20" width="50" height="30" rx="6" fill="#DDEED8" />
          </svg>{" "}
          <span className="absolute top-2.5 left-1/2 -translate-x-1/2 rounded-full border border-[#E4E4E4] bg-white px-3 py-1.5 text-[12px] font-bold text-[#C2410C]">
            ↻ 이 지역 재검색
          </span>{" "}
          <MapMarker name="서초북지부" kind="branch" pos="top-[42%] left-[28%]" active />
          <MapMarker name="서초남지부" kind="branch" pos="top-[26%] left-[52%]" />
          <MapMarker name="서초2동독서교실" kind="room" pos="top-[60%] left-[4%]" />
          <MapMarker name="서초중앙독서교실" kind="room" pos="top-[76%] left-[42%]" />
          <button
            className="absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center rounded-[50%] border border-[#E4E4E4] bg-white"
            aria-label="현재 위치로 이동"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D94E0F"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            </svg>
          </button>
          <span className="absolute bottom-3 left-3 text-[11px] text-[#6B6B6B]">[지도 API 영역]</span>
        </div>
      )}
      <ul className="m-0 grid list-none grid-cols-1 gap-3.5 p-0 md:grid-cols-2 lg:grid-cols-1">
        {centers.map((c, i) => (
          <li key={i}>
            <article className="flex flex-col gap-3 rounded-[22px] border border-[#EEEEEE] bg-white p-5">
              <div className="flex justify-between gap-2.5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {c.badges.map((b, j) => (
                      <span
                        key={j}
                        className="rounded-[6px] px-2 py-0.75 text-[12px] font-bold"
                        style={{ background: b.bg, color: b.fg }}
                      >
                        {b.t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mx-0 mt-0.5 mb-0 text-[20px] font-extrabold">{c.name}</h2>
                </div>
                <CenterKindBadge kind={c.kind} />
              </div>
              <ul className="m-0 flex list-none flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] leading-[1.5] text-[#333333]">
                <li className="flex gap-2">
                  <svg
                    className="mt-0.25 flex-none"
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A4A4A"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="min-w-0 flex-auto">{c.addr}</span>
                  <a
                    className="inline-flex h-7.5 flex-none items-center gap-0.75 self-start rounded-full border border-[#F26522] bg-white px-2.5 py-0 text-[12px] font-bold whitespace-nowrap text-[#C2410C] no-underline"
                    href="#ct-map"
                    onClick={showMap}
                  >
                    <svg
                      aria-hidden="true"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M3 11 22 2l-9 19-2-8-8-2z" />
                    </svg>
                    위치보기
                  </a>
                </li>
                <li className="flex gap-2">
                  <svg
                    className="mt-0.25 flex-none"
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A4A4A"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  {c.hours}
                </li>
                <li className="flex gap-2">
                  <svg
                    className="mt-0.25 flex-none"
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A4A4A"
                    strokeWidth="2"
                  >
                    <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
                  </svg>
                  {c.extra}
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-2">
                <a
                  className="flex h-12.5 items-center justify-center gap-1.5 rounded-[12px] bg-[#EEEEEF] text-[15px] font-semibold text-[#333333] no-underline"
                  href="tel:0262762666"
                >
                  전화 문의
                </a>
                <Link
                  className="flex h-12.5 items-center justify-center gap-1.5 rounded-[12px] bg-[#F26522] text-[15px] font-bold text-white no-underline"
                  href="/consult"
                >
                  상담 예약하기
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
