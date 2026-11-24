"use client";

import Header from "@/components/common/Header/Header";
import SearchSection from "./sections/SearchSection";
import ResultsSection from "./sections/ResultsSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useCenters } from "./useCenters";

export default function Centers() {
  const { centers, count } = useCenters();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="center" sub="" crumbs="센터찾기" />
      <main className="flex-[1_0_auto]">
        <SearchSection count={count} />
        <ResultsSection centers={centers} />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta={"무료 수업 & 상담 신청하기"} ctaHref="/consult" centerActive={true} />
      </div>
    </div>
  );
}
