import Header from "@/components/common/Header/Header";
import GreetingSection from "./sections/GreetingSection";
import FeaturesSection from "./sections/FeaturesSection";
import RolesSection from "./sections/RolesSection";
import ReviewsSection from "./sections/ReviewsSection";
import MeetSection from "./sections/MeetSection";
import Footer from "@/components/common/Footer/Footer";

/** 한우리선생님: 히어로 → 한우리 선생님의 특징 → 한우리 선생님의 전문 분야 → 학부모 후기 → 우리 동네 선생님 배너(수업상담) */
export default function Teacher() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.03em] text-[#1F1F1F]">
      <Header active="teacher" sub="한우리선생님" crumbs={"한우리선생님 > 한우리선생님"} />
      <main className="flex-[1_0_auto] pb-16 lg:pb-24">
        <GreetingSection />
        <FeaturesSection />
        <RolesSection />
        <ReviewsSection />
        <MeetSection />
      </main>
      <Footer />
    </div>
  );
}
