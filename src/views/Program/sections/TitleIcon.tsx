/** 프로그램 소개 페이지 섹션 타이틀 앞에 붙는 아이콘 타일 */
export type TitleIconKind = "features" | "how" | "who" | "where" | "start" | "results";

const PATHS: Record<TitleIconKind, React.ReactNode> = {
  // 특징: 반짝이는 별
  features: <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />,
  // 진행 방식: 단계가 이어지는 흐름
  how: (
    <>
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <circle cx="19" cy="6" r="2.2" />
      <path d="M6.3 7.8 10.7 16M13.3 16l4.4-8.2" />
    </>
  ),
  // 선생님
  who: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 20.5a7 7 0 0 1 14 0" />
    </>
  ),
  // 장소
  where: (
    <>
      <path d="M19 10c0 5.5-7 11-7 11s-7-5.5-7-11a7 7 0 0 1 14 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  // 시작: 깃발
  start: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 3.5 2 3.5H5" />
    </>
  ),
  // 성과: 상승 그래프
  results: (
    <>
      <path d="M3 20h18" />
      <path d="m4 15 5-5 4 3 7-7" />
      <path d="M15 6h5v5" />
    </>
  ),
};

export default function TitleIcon({ kind }: { kind: TitleIconKind }) {
  return (
    <span
      className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-[12px] bg-[#F26522] lg:h-11 lg:w-11 lg:rounded-[14px]"
      aria-hidden="true"
    >
      <svg
        className="h-5 w-5 lg:h-6 lg:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PATHS[kind]}
      </svg>
    </span>
  );
}
