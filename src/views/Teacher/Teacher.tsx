"use client";

import Header from "@/components/common/Header/Header";
import GreetingSection from "./sections/GreetingSection";
import CardSection from "./sections/CardSection";
import SelfLearningSection from "./sections/SelfLearningSection";
import WorksSection from "./sections/WorksSection";
import ListeningSection from "./sections/ListeningSection";
import ReviewsSection from "./sections/ReviewsSection";
import MeetSection from "./sections/MeetSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useTeacher } from "./useTeacher";

export default function Teacher() {
  const { next, prev, total, work } = useTeacher();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.03em] text-[#1F1F1F]">
      <Header active="teacher" sub="한우리선생님" crumbs={"한우리선생님 > 한우리선생님"} />
      <main className="flex-[1_0_auto]">
        <GreetingSection />
        <CardSection />
        <SelfLearningSection />
        <WorksSection next={next} prev={prev} total={total} work={work} />
        <ListeningSection />
        <ReviewsSection />
        <MeetSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav ctaHref="/consult" />
      </div>
    </div>
  );
}
