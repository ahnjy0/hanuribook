import type { ReactNode } from "react";

/**
 * 소크라테스 본문 섹션 제목: 왼쪽 정렬 + 제목 앞 보라 타일 아이콘(프로그램 소개 페이지 섹션 제목 아이콘과 같은 모양)
 * 과정 안내 · 프로그램 특징 · 수업 내용 · 학습 효과가 함께 씀
 * - onDark: 보라 배경 띠 위(학습 효과)일 때 흰 타일 + 보라 아이콘, 흰 글자
 * - icon: 24×24 선 아이콘 path 들
 */
export default function SectionTitle({
  id,
  icon,
  children,
  onDark = false,
}: {
  id: string;
  icon: ReactNode;
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <h2
      className={`m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px] ${onDark ? "text-white" : "text-[#1F1F1F]"}`}
      id={id}
    >
      <span
        className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-[12px] lg:h-11 lg:w-11 lg:rounded-[14px] ${onDark ? "bg-white" : "bg-[#6A54A6]"}`}
        aria-hidden="true"
      >
        <svg
          className="h-5 w-5 lg:h-6 lg:w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke={onDark ? "#6A54A6" : "#FFFFFF"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </span>
      {children}
    </h2>
  );
}
