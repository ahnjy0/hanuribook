import { PATHS } from "@/routes";

export type BottomNavProps = {
  /** 상담 버튼 링크 (라우트 경로 또는 "#id") */
  ctaHref?: string;
  /** 센터찾기 버튼 강조 여부 */
  centerActive?: boolean;
  theme?: "orange" | "pink";
  /** 원본 프로토타입에서 전달되지만 화면에는 쓰이지 않는 값 (호환용) */
  cta?: string;
  showCenter?: boolean;
};

export function useBottomNav(props: BottomNavProps) {
  const on = props.centerActive ?? false;
  const pink = (props.theme ?? "orange") === "pink";
  const fill = pink ? "#D63F7C" : "#E6450F";
  const text = pink ? "#B8326A" : "#C2410C";
  const tint = pink ? "#FDECF3" : "#FFF1E8";
  const tintBorder = pink ? "#F8C9DC" : "#FFD3B8";
  return {
    accentFill: fill,
    ctaHref: props.ctaHref ?? PATHS.Consult,
    centerBg: on ? "#FFFFFF" : tint,
    centerFg: text,
    centerBorder: on ? "1.5px solid " + fill : "1.5px solid " + tintBorder,
  };
}
