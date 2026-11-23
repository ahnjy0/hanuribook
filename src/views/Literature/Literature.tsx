import Header from "@/components/common/Header/Header";
import ProgramFaqSection, { type FaqItem } from "@/components/common/ProgramFaqSection";
import { LIT } from "./theme";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import ClassSection from "./sections/ClassSection";
import EffectsSection from "./sections/EffectsSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { PATHS } from "@/routes";

// 고등학생 대상 FAQ (히어로 수업 정보 · 프로그램 특징 · 수업 내용을 바탕으로 작성)
const LITERATURE_FAQS: FaqItem[] = [
  {
    q: "중학교 3학년도 수업을 들을 수 있나요?",
    a: "네. 소클 고등 문학은 중학교 3학년부터 고등학생까지를 대상으로 합니다. 고등학교 입학 전에 고등 국어 문학의 핵심 개념과 작품 감상법을 미리 익힐 수 있습니다.",
  },
  {
    q: "학교 국어 내신 시험과 수행평가에 도움이 되나요?",
    a: "교과서 수록 작품과 학교 권장도서를 깊이 있게 분석하고, 고등학교 지필고사 수준의 수능형 문제로 학습 효과를 확인합니다. 교재 내 별지의 수행평가 활동지로 논 · 서술형 수행평가도 함께 대비합니다.",
  },
  {
    q: "수능 국어 문학 대비도 되나요?",
    a: "2022 개정 교육과정과 수능 · 평가원 · 전국연합 기출 데이터를 바탕으로 문학 갈래별 핵심 개념을 학습합니다. 수능 기출 작품을 감상하고 수능 기출 유형의 문제를 풀며 개념을 실전에 적용하는 힘을 기릅니다.",
  },
  {
    q: "대입 논술 · 면접(논 · 구술) 준비도 할 수 있나요?",
    a: "매달 4차시에 대입 논 · 구술 수업을 합니다. 논 · 구술고사에 자주 나오는 주제의 배경지식과 독해력을 쌓고, 주요 대학의 기출문제를 직접 해결하며 논 · 구술 실력을 키웁니다.",
  },
];

/**
 * 고등 문학(소클 고등 문학) 페이지(중고등정규 > 고등)
 * 중등 소크라테스 페이지와 같은 스타일(과정 안내 섹션 없음), 색은 차분한 남색(theme.ts)
 */
export default function Literature() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="중고등정규" crumbs={"프로그램 > 중고등정규 > 소클 고등 문학"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <FeaturesSection />
        <ClassSection />
        <EffectsSection />
        {/* FAQ: 라벨·강조 색을 고등 페이지 남색으로. 학습 효과 남색 띠 바로 아래에 붙임(flush) */}
        <ProgramFaqSection
          items={LITERATURE_FAQS}
          last
          flush
          labelColor={LIT.dark}
          labelBg={LIT.soft}
          accent={LIT.accent}
        />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="중고등 무료 상담 신청하기" ctaHref={PATHS.Consult} />
      </div>
    </div>
  );
}
