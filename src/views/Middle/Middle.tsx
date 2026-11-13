import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import CoursesSection from "./sections/CoursesSection";
import FeaturesSection from "./sections/FeaturesSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

export default function Middle() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="중고등정규" crumbs={"프로그램 > 중고등정규"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <CoursesSection />
        <FeaturesSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="중고등 무료 상담 신청하기" ctaHref="/consult" />
      </div>
    </div>
  );
}
