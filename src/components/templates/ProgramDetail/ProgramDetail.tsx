import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import BodySection from "./sections/BodySection";
import InfoSection from "./sections/InfoSection";
import SiblingsSection from "./sections/SiblingsSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useProgramDetail, type ProgramDetailProps } from "./useProgramDetail";

export default function ProgramDetail(props: ProgramDetailProps) {
  const { p, sibs, steps } = useProgramDetail(props);
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub={p.sub} crumbs={p.crumbs} />
      <main className="flex-[1_0_auto]">
        <HeroSection p={p} />
        <BodySection p={p} steps={steps} />
        <InfoSection p={p} />
        <SiblingsSection p={p} sibs={sibs} />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav ctaHref="/consult" />
      </div>
    </div>
  );
}
