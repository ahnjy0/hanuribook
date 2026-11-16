import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import LevelsSection from "./sections/LevelsSection";
import KitSection from "./sections/KitSection";
import ClassSection from "./sections/ClassSection";
import EffectsSection from "./sections/EffectsSection";
import VideoSection from "./sections/VideoSection";
import BookBannerSection from "./sections/BookBannerSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

/** 초등정규 어휘리더 상세 (유아정규 페이지와 같은 구성) */
export default function Vocab() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="초등정규" crumbs={"프로그램 > 초등정규 > 어휘리더"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <LevelsSection />
        <KitSection />
        <ClassSection />
        <EffectsSection />
        <VideoSection />
        <BookBannerSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav ctaHref="/consult" />
      </div>
    </div>
  );
}
