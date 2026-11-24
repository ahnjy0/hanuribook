import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import InfoSection from "./sections/InfoSection";
import InquirySection from "./sections/InquirySection";
import Footer from "@/components/common/Footer/Footer";

/**
 * 센터모집: 온라인 설명회와 같은 레이아웃
 * 흰 타이틀 띠 → 연한 살구색 본문(왼쪽 개설 절차 · 개설 비용 · 교육 과정 안내 + 오른쪽 개설 문의, 데스크톱 가로)
 */
export default function Franchise() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="센터모집" crumbs={"한우리선생님 > 센터모집"} />
      <main className="flex-[1_0_auto] bg-[#FFFAF7]">
        <HeroSection />
        <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 px-5 pb-16 lg:grid-cols-2 lg:items-start lg:gap-8 lg:pb-24">
          <InfoSection />
          <InquirySection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
