"use client";

import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { PATHS } from "@/routes";
import HeroSection from "./sections/HeroSection";
import BlockSection from "./sections/BlockSection";
import { useSpecialDetail, type SpecialDetailProps } from "./useSpecialDetail";
import { onAccentOf } from "./specialData";

/**
 * 단기특강 상세 템플릿(모든 /special-* 라우트): 히어로 → 본문 블록들
 * 과정이 여러 개인 페이지(별별문학독해 | 교과문학탐독)는 히어로 위에 과정 탭
 * 내용을 바꿀 때는 specialData.ts 를 수정
 */
export default function SpecialDetail(props: SpecialDetailProps) {
  const { crumbs, tabs, hasTabs, cur } = useSpecialDetail(props);
  const t = cur.theme;
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="단기특강" crumbs={crumbs} />
      {/* 마지막 블록이 전체 폭 색 띠(학습 효과)면 아래 여백 없이 푸터에 바로 붙임 */}
      <main className={`flex-[1_0_auto] ${cur.blocks[cur.blocks.length - 1]?.kind === "effects" ? "pb-0" : "pb-12 lg:pb-24"}`}>
        {hasTabs && (
          // 과정 탭: 고른 과정은 강조색 바탕 + 흰 글자
          <div className="mx-auto box-border flex max-w-[1200px] justify-center px-5 pt-5 pb-4 lg:pt-8 lg:pb-6" role="tablist" aria-label="과정 선택">
            <div className="flex w-full max-w-[560px] gap-1 rounded-full bg-[#F3F3F4] p-1.5">
              {tabs.map((tb) => (
                <button
                  key={tb.id}
                  type="button"
                  role="tab"
                  aria-selected={tb.sel}
                  className="flex min-h-12 flex-1 cursor-pointer flex-col items-center justify-center rounded-full border-0 px-2 py-1.5 font-[family-name:inherit] leading-[1.25] transition-colors duration-200"
                  style={tb.sel ? { background: t.accent, color: onAccentOf(t) } : { background: "transparent", color: "#555555" }}
                  onClick={tb.pick}
                >
                  <span className="text-[15px] font-extrabold lg:text-[17px]">{tb.label}</span>
                  <span className="text-[11px] font-semibold opacity-85 lg:text-[12px]">{tb.tag}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        <HeroSection p={cur} />
        {cur.blocks.map((b, i) => (
          // 블록에 색(theme)이 있으면 그 색으로(문학 통합 페이지의 과정별 색)
          <BlockSection key={`${cur.name}-${i}`} b={b} t={b.theme ?? t} idx={i} centered={cur.centered} />
        ))}
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="단기특강 신청하기" ctaHref={PATHS.Consult} />
      </div>
    </div>
  );
}
