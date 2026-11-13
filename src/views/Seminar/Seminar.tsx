"use client";

import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import ApplySection from "./sections/ApplySection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useSeminar } from "./useSeminar";

export default function Seminar() {
  const { done, selLabel, sessions, submit } = useSeminar();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="온라인설명회" crumbs={"한우리선생님 > 온라인설명회"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <ApplySection done={done} selLabel={selLabel} sessions={sessions} submit={submit} />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="온라인 설명회 신청하기" ctaHref="/seminar" showCenter={false} />
      </div>
    </div>
  );
}
