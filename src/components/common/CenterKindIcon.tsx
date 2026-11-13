/** 센터 유형: branch = 지부(학원형), room = 독서교실(소규모) */
export type CenterKind = "branch" | "room";

/** 센터 유형별 라벨·색상 (센터찾기, 프로그램 소개에서 공통 사용) */
export const CENTER_KIND_STYLE: Record<CenterKind, { label: string; bg: string; fg: string }> = {
  branch: { label: "지부", bg: "#FFF1E7", fg: "#D94E0F" },
  room: { label: "독서교실", bg: "#EAF2FF", fg: "#2F5AA8" },
};

/** 센터 유형 아이콘: 지부 = 깃발 달린 학원 건물, 독서교실 = 작은 건물 + 펼친 책 */
export default function CenterKindIcon({
  kind,
  size,
  color = CENTER_KIND_STYLE[kind].fg,
}: {
  kind: CenterKind;
  size: number;
  color?: string;
}) {
  const svgProps = {
    "aria-hidden": true,
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinejoin: "round" as const,
  };
  if (kind === "branch")
    return (
      <svg {...svgProps}>
        <path d="M16 3v5" strokeLinecap="round" />
        <path d="M16 3h5l-1 1.5 1 1.5h-5" fill={color} />
        <path d="M5 29V13l11-5 11 5v16" />
        <path d="M3 29h26" strokeLinecap="round" />
        <path d="M9.5 15h3M14.5 15h3M19.5 15h3M9.5 20h3M19.5 20h3" strokeLinecap="round" />
        <path d="M14 29v-6h4v6" />
      </svg>
    );
  return (
    <svg {...svgProps}>
      <path d="M5 14 16 6l11 8" strokeLinecap="round" />
      <path d="M8 12v15h16V12" />
      <path d="M4 27h24" strokeLinecap="round" />
      <path d="M16 18.5c-1.6-1-3.4-1.3-5-1v6c1.6-.3 3.4 0 5 1 1.6-1 3.4-1.3 5-1v-6c-1.6-.3-3.4 0-5 1Z" />
      <path d="M16 18.5v6" />
    </svg>
  );
}
