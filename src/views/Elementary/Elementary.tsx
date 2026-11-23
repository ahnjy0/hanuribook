"use client";

import Header from "@/components/common/Header/Header";
import IntroSection from "./sections/IntroSection";
import ProgramsSection from "./sections/ProgramsSection";
import FeaturesSection from "./sections/FeaturesSection";
import SelfCheckSection from "./sections/SelfCheckSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useElementary } from "./useElementary";

export default function Elementary() {
  const { progs } = useElementary();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="초등정규" crumbs={"프로그램 > 초등정규"} />
      <main className="flex-[1_0_auto]">
        <IntroSection />
        {/* 카드 오른쪽 위: '생각하는 나무' 로고 이미지(239×167) */}
        <ProgramsSection
          progs={progs}
          iconImg={{ src: "https://cdn.hanuribook.com/img/hanuribook/ele_logo2.png", width: 239, height: 167 }}
        />
        <FeaturesSection />
        <SelfCheckSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="초등정규 무료체험·상담신청" ctaHref="/consult" />
      </div>
    </div>
  );
}
