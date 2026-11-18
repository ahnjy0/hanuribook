import Header from "@/components/common/Header/Header";
import ProgramFaqSection from "@/components/common/ProgramFaqSection";
import HeroSection from "@/components/templates/ProgramDetail/sections/HeroSection";
import { useProgramDetail } from "@/components/templates/ProgramDetail/useProgramDetail";
import FeaturesSection from "./sections/FeaturesSection";
import KitSection from "./sections/KitSection";
import ClassSection from "./sections/ClassSection";
import EffectsSection from "./sections/EffectsSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { ADVANCED, type AdvancedId } from "./advancedData";

/**
 * 초등심화 상세(과학탐탐 · 똑똑한국사 · 세계문화지리 · 세계사) 공통 페이지.
 * 히어로는 공통 상세 템플릿 것을 그대로 쓰고, 본문은 네 과정 모두 같은 구성
 * (프로그램 특징 / 교재 구성 / 수업 내용 / 학습 효과 / FAQ) — 과정별 색·문구는 advancedData
 */
export default function AdvancedDetail({ program }: { program: AdvancedId }) {
  const { p } = useProgramDetail({ program });
  const d = ADVANCED[program];
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub={p.sub} crumbs={p.crumbs} />
      <main className="flex-[1_0_auto]">
        <HeroSection p={p} kit={d.heroKit ? { items: d.kit, img: d.kitImg, accent: d.accent, strong: d.strong } : undefined} />
        <FeaturesSection d={d} />
        {/* 교재 구성 섹션: 히어로에 교재 구성을 보여 주는 과정(heroKit, 예: 과학탐탐)은 중복이라 생략 */}
        {!d.heroKit && <KitSection d={d} />}
        <ClassSection d={d} />
        <EffectsSection d={d} />
        <ProgramFaqSection items={d.faqs} labelColor={d.accent} labelBg={d.soft} accent={d.accent} flush />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav ctaHref="/consult" />
      </div>
    </div>
  );
}
