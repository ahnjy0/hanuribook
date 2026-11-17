import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 글자색 (기본: 유아정규 분홍) */
  color?: string;
  /** 라운드 박스 배경색 */
  bg?: string;
  /** 글자 크기: "md"(기본) 모바일 13px·데스크톱 16px / "lg" 모든 화면 16px(히어로 라벨용) */
  size?: "md" | "lg";
};

// lg 크기에도 lg:text-[16px]을 함께 붙여, 본문 글자를 데스크톱에서 키우는 공통 규칙(globals.css)이 18px로 바꾸지 않게 함
const SIZE = {
  md: "px-3.5 text-[13px] lg:text-[16px]",
  lg: "px-4 text-[16px] lg:text-[16px]",
};

/**
 * 섹션 항목명 라벨 (예: 교재 구성, 수업 내용, 학습 효과, 특징).
 * 둥근 알약 모양 박스로 표시합니다. 가운데 정렬된 타이틀 영역(text-center) 안이나
 * flex 세로 배치(self-center) 안 모두에서 가운데에 놓입니다.
 * 데스크톱에서는 아래 타이틀과의 간격을 넓히려고 아래 여백(10px)을 둡니다.
 */
export default function SectionLabel({ children, color = "#B8326A", bg = "#FDE7F0", size = "md" }: Props) {
  return (
    <p
      className={`m-0 inline-flex items-center self-center rounded-full py-1.5 leading-[1.5] font-bold lg:mb-2.5 lg:px-4.5 lg:py-2 ${SIZE[size]}`}
      style={{ color, background: bg }}
    >
      {children}
    </p>
  );
}
