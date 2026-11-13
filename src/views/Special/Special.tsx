import Header from "@/components/common/Header/Header";
import IntroSection from "./sections/IntroSection";
import CourseListSection from "./sections/CourseListSection";
import InfoSection from "./sections/InfoSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useSpecial } from "./useSpecial";

export default function Special() {
  const { items } = useSpecial();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="단기특강" crumbs={"프로그램 > 단기특강"} />
      <main className="flex-[1_0_auto]">
        <IntroSection />
        <CourseListSection items={items} />
        <InfoSection />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="단기특강 신청하기" ctaHref="/consult" />
      </div>
    </div>
  );
}
