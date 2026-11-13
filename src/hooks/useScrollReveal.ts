import { useEffect, type RefObject } from "react";

/**
 * 스크롤 리빌: root 안의 `.reveal` 요소가 화면에 들어올 때 아래에서 위로 떠오르며 나타나게 합니다.
 * - 처음 로드 시 이미 화면에 보이는 요소는 숨기지 않습니다(깜빡임 방지).
 * - 한 번에 여러 요소가 들어오면 위에서부터 순서대로 약간씩 늦게 나타납니다.
 * - "동작 줄이기" 설정 사용자에게는 적용하지 않습니다.
 * 스타일은 globals.css 의 `reveal` 유틸리티(data-reveal="hidden" 상태)에 정의되어 있습니다.
 */
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const STAGGER_MS = 90;
    const MAX_STEPS = 6;

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
          .forEach((e, i) => {
            const el = e.target as HTMLElement;
            el.style.setProperty("--reveal-delay", `${Math.min(i, MAX_STEPS) * STAGGER_MS}ms`);
            el.dataset.reveal = "shown";
            io.unobserve(el);
          });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const fold = window.innerHeight * 0.92;
    root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < fold) return; // 이미 보이는(또는 지나간) 요소는 그대로 둠
      el.dataset.reveal = "hidden";
      io.observe(el);
    });

    return () => io.disconnect();
  }, [rootRef]);
}
