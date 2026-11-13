type Props = {
  /** kinder_cha_01 ~ 05 */
  n: 1 | 2 | 3 | 4 | 5;
  /** 타이틀 영역의 어느 쪽에 둘지 */
  side: "left" | "right";
  /** 데스크톱(lg)에서 세로 위치: 가운데(기본) 또는 아래쪽 */
  vAlign?: "center" | "bottom";
};

const SIZES: Record<Props["n"], [number, number]> = {
  1: [589, 610],
  2: [513, 574],
  3: [539, 657],
  4: [510, 665],
  5: [510, 574],
};

/**
 * 섹션 타이틀 영역 옆 장식 캐릭터. 부모(타이틀 영역)에 `relative`와 위아래 여백(pt-16 lg:py-6)이 있어야 합니다.
 * - 모바일·태블릿: 80px, 타이틀 영역 위쪽 여백(64px)의 모서리에 둠 → 가운데 정렬된 제목과 겹치지 않음
 * - 데스크톱(lg): 176px, 타이틀 영역 왼쪽/오른쪽 끝에 두고, 세로는 가운데(vAlign="center") 또는 아래쪽 끝(vAlign="bottom")
 * - 장식용이라 화면 낭독기에서는 숨깁니다.
 */
export default function CharacterDeco({ n, side, vAlign = "center" }: Props) {
  const [w, h] = SIZES[n];
  return (
    <img
      className={`pointer-events-none absolute top-0 block h-20 w-auto select-none lg:h-44 ${
        vAlign === "bottom" ? "lg:top-auto lg:bottom-0" : "lg:top-1/2 lg:-translate-y-1/2"
      } ${side === "left" ? "left-0 lg:left-[6%]" : "right-0 lg:right-[6%]"}`}
      src={`https://cdn.hanuribook.com/img/hanuribook/kinder_cha_0${n}.png`}
      width={w}
      height={h}
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  );
}
