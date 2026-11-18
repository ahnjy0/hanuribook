/**
 * 섹션 소개 문구 줄바꿈 공통 처리.
 * - 문자열 한 개 = 한 줄 (줄 사이는 항상 줄바꿈)
 * - 배열로 묶은 줄 = 모바일·태블릿에서만 나눠 쓰고, 데스크톱(lg)에서는 띄어쓰기로 이어 한 줄로
 */
export type DescLine = string | string[];

export default function DescLines({ lines }: { lines: DescLine[] }) {
  return (
    <>
      {lines.map((line, j) => (
        <span key={j}>
          {j > 0 && <br />}
          {typeof line === "string"
            ? line
            : line.map((part, k) => (
                <span key={part}>
                  {k > 0 && (
                    <>
                      <br className="lg:hidden" />
                      <span className="hidden lg:inline"> </span>
                    </>
                  )}
                  {part}
                </span>
              ))}
        </span>
      ))}
    </>
  );
}
