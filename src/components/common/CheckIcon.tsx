/**
 * 목록 앞 체크 아이콘: 강조색 동그라미 안에 흰 체크.
 * 기본은 글자 첫 줄 높이에 맞춰 위쪽 여백(0.2em)을 줌(여러 줄 목록용).
 * 한 줄 글자와 세로 가운데로 맞출 때는 inline 을 켜서 위쪽 여백을 없앰.
 */
export default function CheckIcon({ color, inline = false }: { color: string; inline?: boolean }) {
  return (
    <span
      className={`flex h-[1.15em] w-[1.15em] flex-none items-center justify-center rounded-full ${inline ? "" : "mt-[0.2em]"}`}
      style={{ background: color }}
      aria-hidden="true"
    >
      <svg width="62%" height="62%" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}
