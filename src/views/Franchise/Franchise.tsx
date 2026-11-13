"use client";

import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import WhySection from "./sections/WhySection";
import TypesSection from "./sections/TypesSection";
import ProcessSection from "./sections/ProcessSection";
import InquirySection from "./sections/InquirySection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useFranchise } from "./useFranchise";

export default function Franchise() {
  const { done, submit } = useFranchise();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="센터모집" crumbs={"한우리선생님 > 센터모집"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <WhySection />
        <TypesSection />
        <ProcessSection />
        <InquirySection done={done} submit={submit} />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="센터 개설 문의하기" ctaHref="#f-form" showCenter={false} />
      </div>
    </div>
  );
}
