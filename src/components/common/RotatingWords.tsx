"use client";

import { useEffect, useState } from "react";

type Props = {
  /** 순서대로 돌아가며 보여줄 단어 */
  words: string[];
  /** 단어가 바뀌는 간격(ms) */
  interval?: number;
  className?: string;
};

/**
 * 단어를 순차적으로 교체하는 텍스트 모션.
 * - 모든 단어를 같은 그리드 칸에 겹쳐 두어, 가장 긴 단어 폭으로 자리가 고정됩니다(주변 글자 흔들림 없음).
 * - 현재 단어만 보이고, 이전 단어는 위로·다음 단어는 아래에서 페이드되며 이동합니다.
 * - 화면 낭독기에는 전체 단어를 한 번에 읽어 주고, 움직이는 단어는 숨깁니다.
 */
export default function RotatingWords({ words, interval = 2200, className = "" }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-grid justify-items-start ${className}`}>
      <span className="sr-only">{words.join(", ")}</span>
      {words.map((word, i) => {
        const offset = (i - index + words.length) % words.length; // 0: 현재, 1: 다음, 그 외: 이전
        const state =
          offset === 0
            ? "translate-y-0 opacity-100"
            : offset === 1
              ? "translate-y-[0.45em] opacity-0"
              : "-translate-y-[0.45em] opacity-0";
        return (
          <span
            key={word}
            aria-hidden="true"
            className={`[grid-area:1/1] transition-[translate,opacity] duration-500 ease-out motion-reduce:transition-none ${state}`}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
