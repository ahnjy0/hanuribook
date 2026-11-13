"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "static" | "hidden" | "shown";

/**
 * 연도별 누적 회원 수 그래프.
 * 화면에 들어오면 그래프(면 + 선)가 바닥선에서 위로 솟아오르고, 끝점이 마지막에 톡 나타납니다.
 * - "동작 줄이기" 설정 사용자 / JS 미실행 시에는 완성된 그래프를 그대로 보여줍니다.
 */
export default function HistoryChart() {
  const ref = useRef<SVGSVGElement>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPhase("hidden");
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        // 숨김 상태가 먼저 화면에 그려진 뒤 전환이 시작되도록 두 프레임 뒤에 표시
        requestAnimationFrame(() => requestAnimationFrame(() => setPhase("shown")));
        io.disconnect();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = phase === "hidden";
  const animate = phase === "shown";

  return (
    <svg ref={ref} className="h-auto w-full" role="img" aria-label="연도별 누적 회원 수 증가 추이" viewBox="0 0 320 160">
      <path d="M0 40h320M0 80h320M0 120h320" stroke="#353535" strokeDasharray="3 4" />
      <path d="M0 150h320" stroke="#4A4A4A" />
      {/* 면 + 선: 바닥선(y=150)을 기준으로 아래에서 위로 상승 */}
      <g
        style={{
          transformBox: "fill-box",
          transformOrigin: "50% 100%",
          transform: hidden ? "scaleY(0)" : "scaleY(1)",
          transition: animate ? "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
        }}
      >
        <polygon
          points="8,150 8,138 48,134 88,130 128,126 168,116 208,100 248,78 280,52 308,16 308,150"
          fill="#FF8A4F"
          fillOpacity="0.14"
        />
        <polyline
          points="8,138 48,134 88,130 128,126 168,116 208,100 248,78 280,52 308,16"
          fill="none"
          stroke="#FF8A4F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
      {/* 끝점: 그래프가 다 오른 뒤 나타남 */}
      <circle
        cx="308"
        cy="16"
        r="6"
        fill="#FFFFFF"
        stroke="#FF8A4F"
        strokeWidth="3"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          transform: hidden ? "scale(0)" : "scale(1)",
          opacity: hidden ? 0 : 1,
          transition: animate
            ? "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 1.15s, opacity 0.2s ease 1.15s"
            : "none",
        }}
      />
    </svg>
  );
}
