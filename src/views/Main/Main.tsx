"use client";

import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import WaysSection from "./sections/WaysSection";
import HistorySection from "./sections/HistorySection";
import ProgramsSection from "./sections/ProgramsSection";
import ServicesSection from "./sections/ServicesSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMain } from "./useMain";

export default function Main() {
  const { progTabs, progs } = useMain();
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);
  return (
    <div ref={rootRef} className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="home" sub="" crumbs="" />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <WaysSection />
        <HistorySection />
        <ProgramsSection progTabs={progTabs} progs={progs} />
        <ServicesSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta={"무료 수업 & 상담 신청하기"} ctaHref="/consult" />
      </div>
    </div>
  );
}
