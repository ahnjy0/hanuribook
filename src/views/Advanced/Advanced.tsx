"use client";

import Header from "@/components/common/Header/Header";
import IntroSection from "./sections/IntroSection";
import CourseExplorerSection from "./sections/CourseExplorerSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useAdvanced } from "./useAdvanced";

export default function Advanced() {
  const { tabs } = useAdvanced();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="초등심화" crumbs={"프로그램 > 초등심화"} />
      <main className="flex-[1_0_auto]">
        <IntroSection />
        <CourseExplorerSection tabs={tabs} />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="초등심화 무료체험·상담신청" ctaHref="/consult" />
      </div>
    </div>
  );
}
