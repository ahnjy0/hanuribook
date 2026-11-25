import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import ReasonsSection from "./sections/ReasonsSection";
import StepsSection from "./sections/StepsSection";
import PromiseSection from "./sections/PromiseSection";
import ApplySection from "./sections/ApplySection";
import ProgramFaqSection from "@/components/common/ProgramFaqSection";
import { TEACHER_FAQS } from "@/views/TeacherCourse/teacherFaqs";
import Footer from "@/components/common/Footer/Footer";

/**
 * 교사특별반: 히어로(한우리 지도교사 소개 + 사진) → 한우리에서 시작해야 하는 이유 7가지 → 되는 방법(단계) → 약속 → 상담 신청서 → FAQ
 */
export default function TeacherSpecial() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="교사특별반" crumbs={"한우리선생님 > 교사특별반"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <ReasonsSection />
        <StepsSection />
        <PromiseSection />
        <ApplySection />
        <ProgramFaqSection items={TEACHER_FAQS} last />
      </main>
      <Footer />
    </div>
  );
}
