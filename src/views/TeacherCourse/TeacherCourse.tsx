import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import InfoSection from "./sections/InfoSection";
import ProgramFaqSection from "@/components/common/ProgramFaqSection";
import { TEACHER_FAQS } from "./teacherFaqs";
import Footer from "@/components/common/Footer/Footer";

/** 지도교사 입문과정: 타이틀 · 설명 → 과정 안내 · 진행 절차 · 교육 일정 · 신청 버튼 → FAQ */
export default function TeacherCourse() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="지도교사 입문과정" crumbs={"한우리선생님 > 지도교사 입문과정"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <InfoSection />
        <ProgramFaqSection items={TEACHER_FAQS} last />
      </main>
      <Footer />
    </div>
  );
}
