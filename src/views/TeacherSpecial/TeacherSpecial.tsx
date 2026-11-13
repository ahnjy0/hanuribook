import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import RecommendSection from "./sections/RecommendSection";
import BenefitsSection from "./sections/BenefitsSection";
import CurriculumSection from "./sections/CurriculumSection";
import ApplySection from "./sections/ApplySection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

export default function TeacherSpecial() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="교사특별반" crumbs={"한우리선생님 > 교사특별반"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <RecommendSection />
        <BenefitsSection />
        <CurriculumSection />
        <ApplySection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="교사특별반 지원하기" ctaHref="/seminar" showCenter={false} />
      </div>
    </div>
  );
}
