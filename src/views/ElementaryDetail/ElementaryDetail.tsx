import Header from "@/components/common/Header/Header";
import ProgramFaqSection from "@/components/common/ProgramFaqSection";
import HeroSection from "./sections/HeroSection";
import LevelsSection from "./sections/LevelsSection";
import KitSection from "./sections/KitSection";
import ClassSection from "./sections/ClassSection";
import EffectsSection from "./sections/EffectsSection";
import VideoSection from "./sections/VideoSection";
import BookBannerSection from "./sections/BookBannerSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { ELEMENTARY, type ElementaryId } from "./elementaryData";

/** 초등정규 상세(어휘리더 · 독서리더 · 논리리더): 같은 레이아웃에 과정별 데이터만 바꿔 씀 */
export default function ElementaryDetail({ program }: { program: ElementaryId }) {
  const d = ELEMENTARY[program];
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="초등정규" crumbs={`프로그램 > 초등정규 > ${d.name}`} />
      <main className="flex-[1_0_auto]">
        <HeroSection d={d} />
        <LevelsSection d={d} />
        <KitSection d={d} />
        <ClassSection d={d} />
        <EffectsSection d={d} />
        {d.videos && <VideoSection d={d} videos={d.videos} />}
        {/* 영상이 없으면 바로 위 학습 효과(배경색 띠)에 붙임 */}
        <ProgramFaqSection items={d.faqs} labelColor={d.accent} labelBg={d.soft} accent={d.accent} flush={!d.videos} />
        <BookBannerSection d={d} />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav ctaHref="/consult" />
      </div>
    </div>
  );
}
