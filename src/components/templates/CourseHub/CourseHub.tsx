import { type CSSProperties } from "react";
import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import RoadmapSection from "./sections/RoadmapSection";
import FeaturesSection from "./sections/FeaturesSection";
import SelfCheckSection from "./sections/SelfCheckSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useCourseHub, type CourseHubProps } from "./useCourseHub";

export default function CourseHub(props: CourseHubProps) {
  const { c, feats, g, n, steps } = useCourseHub(props);
  return (
    <div
      className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]"
      style={{ "--ac": c.ac, "--ac-text": c.text, "--ac-soft": c.soft, "--ac-line": c.line } as CSSProperties}
    >
      <Header active="program" sub={g.sub} crumbs={g.crumbs} />
      <main className="flex-[1_0_auto]">
        <HeroSection g={g} />
        <RoadmapSection g={g} n={n} steps={steps} />
        <FeaturesSection feats={feats} />
        <SelfCheckSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav ctaHref="/consult" />
      </div>
    </div>
  );
}
