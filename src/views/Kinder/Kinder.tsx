import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import KitSection from "./sections/KitSection";
import ClassSection from "./sections/ClassSection";
import EffectsSection from "./sections/EffectsSection";
import VideoSection from "./sections/VideoSection";
import HangulBannerSection from "./sections/HangulBannerSection";
import ReviewsSection from "./sections/ReviewsSection";import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

export default function Kinder() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="유아정규" crumbs={"프로그램 > 유아정규"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <KitSection />
        <ClassSection />
        <EffectsSection />
        <VideoSection />
        <HangulBannerSection />
        <ReviewsSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="유아정규 무료체험·상담신청" ctaHref="/consult" />
      </div>
    </div>
  );
}
