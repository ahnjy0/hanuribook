import Header from "@/components/common/Header/Header";
import ProgramFaqSection from "@/components/common/ProgramFaqSection";
import HeroSection from "./sections/HeroSection";
import CoursesSection from "./sections/CoursesSection";
import FeaturesSection from "./sections/FeaturesSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

/** 중등 소크라테스 페이지(중고등정규 > 중등). 기존 중고등정규 대표 페이지를 옮겨 온 것 */
export default function Socrates() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="중고등정규" crumbs={"프로그램 > 중고등정규 > 소크라테스"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <CoursesSection />
        <FeaturesSection />
        {/* FAQ: 라벨·강조 색을 중등 페이지 주요 색(부드러운 퍼플)으로 */}
        <ProgramFaqSection last labelColor="#5B4596" labelBg="#F3F0FA" accent="#6A54A6" />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="중고등 무료 상담 신청하기" ctaHref="/consult" />
      </div>
    </div>
  );
}
