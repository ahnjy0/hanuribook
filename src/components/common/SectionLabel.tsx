import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 글자색 (기본: 유아정규 분홍) */
  color?: string;
  /** 라운드 박스 배경색 */
  bg?: string;
};

/**
 * 섹션 항목명 라벨 (예: 교재 구성, 수업 내용, 학습 효과, 특징).
 * 둥근 알약 모양 박스로 표시합니다. 가운데 정렬된 타이틀 영역(text-center) 안이나
 * flex 세로 배치(self-center) 안 모두에서 가운데에 놓입니다.
 */
export default function SectionLabel({ children, color = "#B8326A", bg = "#FDE7F0" }: Props) {
  return (
    <p
      className="m-0 inline-flex items-center self-center rounded-full px-3.5 py-1 text-[13px] leading-[1.5] font-bold lg:px-4 lg:text-[14px]"
      style={{ color, background: bg }}
    >
      {children}
    </p>
  );
}
