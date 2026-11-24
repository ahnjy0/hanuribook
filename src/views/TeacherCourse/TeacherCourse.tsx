import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import InfoSection from "./sections/InfoSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

/** 지도교사 입문과정: 제목 · 안내 → 과정 안내 표 + 교육 일정 표 */
export default function TeacherCourse() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="지도교사 입문과정" crumbs={"한우리선생님 > 지도교사 입문과정"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <InfoSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="입문과정 수강 신청" ctaHref="/seminar" showCenter={false} />
      </div>
    </div>
  );
}
