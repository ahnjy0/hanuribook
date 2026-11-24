import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import IssueSection from "./sections/IssueSection";
import RoleSection from "./sections/RoleSection";
import ReasonsSection from "./sections/ReasonsSection";
import StepsSection from "./sections/StepsSection";
import PromiseSection from "./sections/PromiseSection";
import ApplySection from "./sections/ApplySection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

/**
 * 교사특별반: 왜 한우리 선생님? → 문해력 저하 · 논술 중요성 → 한우리 선생님 소개 · 후기
 * → 한우리에서 시작해야 하는 이유 5가지 → 되는 방법(단계) → 약속 → 상담 신청서
 */
export default function TeacherSpecial() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="교사특별반" crumbs={"한우리선생님 > 교사특별반"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <IssueSection />
        <RoleSection />
        <ReasonsSection />
        <StepsSection />
        <PromiseSection />
        <ApplySection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="교사특별반 상담 신청하기" ctaHref="#ts-apply" showCenter={false} />
      </div>
    </div>
  );
}
