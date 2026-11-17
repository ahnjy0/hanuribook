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
import { ACCENT, SCIENCE_FAQS, SOFT } from "./scienceData";

/**
 * 초등심화 과학탐탐 상세: 히어로는 공통 상세 템플릿 것을 그대로 쓰고,
 * 본문은 어휘리더 페이지와 같은 구성(프로그램 특징 / 교재 구성 / 수업 내용 / 학습 효과 / FAQ)
 */
export default function Science() {
  const { p } = useProgramDetail({ program: "science" });
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub={p.sub} crumbs={p.crumbs} />
      <main className="flex-[1_0_auto]">
        <HeroSection p={p} />
        <FeaturesSection />
        <KitSection />
        <ClassSection />
        <EffectsSection />
        <ProgramFaqSection items={SCIENCE_FAQS} labelColor={ACCENT} labelBg={SOFT} accent={ACCENT} flush />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav ctaHref="/consult" />
      </div>
    </div>
  );
}
