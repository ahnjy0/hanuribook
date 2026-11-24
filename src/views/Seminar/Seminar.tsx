import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import { InfoSection } from "./sections/ProgramSection";
import ApplySection from "./sections/ApplySection";
import Footer from "@/components/common/Footer/Footer";

/** 온라인 설명회: 타이틀 → 설명회 안내(정보 · 진행 순서 · 참가자 혜택 · 유의사항) + 신청서(데스크톱 가로) */
export default function Seminar() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="teacher" sub="온라인설명회" crumbs={"한우리선생님 > 온라인설명회"} />
      {/* 본문 바탕: 수업상담과 같은 연한 살구색(타이틀 영역은 흰 띠) */}
      <main className="flex-[1_0_auto] bg-[#FFFAF7]">
        <HeroSection />
        {/* 설명회 안내 · 신청서: 모바일은 위아래, 데스크톱은 가로로 나란히(위 맞춤) */}
        <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 px-5 pb-16 lg:grid-cols-2 lg:items-start lg:gap-8 lg:pb-24">
          <InfoSection />
          <ApplySection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
