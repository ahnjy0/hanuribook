import Header from "@/components/common/Header/Header";
import IntroSection from "./sections/IntroSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowSection from "./sections/HowSection";
import WhoSection from "./sections/WhoSection";
import WhereSection from "./sections/WhereSection";
import StartSection from "./sections/StartSection";
import ResultsSection from "./sections/ResultsSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

export default function Program() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="소개" crumbs={"프로그램 > 소개"} />
      <main className="flex-[1_0_auto]">
        <IntroSection />
        <FeaturesSection />
        <HowSection />
        <WhoSection />
        <WhereSection />
        <StartSection />
        <ResultsSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="상담 신청하기" ctaHref="/consult" />
      </div>
    </div>
  );
}
