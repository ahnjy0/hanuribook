import Header from "@/components/common/Header/Header";
import ProgramFaqSection, { type FaqItem } from "@/components/common/ProgramFaqSection";
import HeroSection from "./sections/HeroSection";
import CoursesSection from "./sections/CoursesSection";
import FeaturesSection from "./sections/FeaturesSection";
import ClassSection from "./sections/ClassSection";
import EffectsSection from "./sections/EffectsSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";

// 중등 1~3학년 학부모 대상 FAQ (페이지의 과정 안내·수업 내용·학습 효과를 바탕으로 작성)
const SOCRATES_FAQS: FaqItem[] = [
  {
    q: "중학생이 되어서 독서 수업을 시작해도 늦지 않을까요?",
    a: "늦지 않습니다. 소크라테스는 중등 1학년 독해 원리, 2학년 독해 심화, 3학년 독해 융합으로 학년별 단계가 나뉘어 있습니다. 상담 때 아이의 독서력 수준을 진단해 지금 단계에 맞는 과정으로 시작합니다.",
  },
  {
    q: "중학교 내신과 수행평가에 실제로 도움이 되나요?",
    a: "문학 · 비문학 독해 원리를 익혀 국어 지문 이해력을 높이고, 매달 감상문 · 논술 쓰기와 토의 · 토론으로 서술 · 논술 · 구술형 평가와 수행평가를 실전처럼 연습합니다.",
  },
  {
    q: "한 달 수업은 어떻게 구성되나요?",
    a: "월 4차시로 단편소설 독해, IB 독서, 계열 독서, 통합사회 토론을 차례로 진행합니다. 문학과 비문학, 탐구 글쓰기와 토론을 한 달 안에 고루 경험합니다.\n소크라테스 3단계(중등 3학년)는 7~12월에 대입 논 · 구술을 선택해 수업할 수 있습니다.",
  },
  {
    q: "고교학점제와 수능 준비에도 연결되나요?",
    a: "인문 · 사회 · 과학 영역의 계열 독서로 관심 분야와 진로를 미리 탐색해 고교학점제 과목 선택에 대비합니다. 또한 3학년 과정에서는 문학 · 비문학 영역을 넘나드는 융합 독해로 수능형 지문에 익숙해지도록 훈련합니다.",
  },
];

/** 중등 소크라테스 페이지(중고등정규 > 중등). 기존 중고등정규 대표 페이지를 옮겨 온 것 */
export default function Socrates() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="중고등정규" crumbs={"프로그램 > 중고등정규 > 소크라테스"} />
      <main className="flex-[1_0_auto]">
        <HeroSection />
        <CoursesSection />
        <FeaturesSection />
        <ClassSection />
        <EffectsSection />
        {/* FAQ: 라벨·강조 색을 중등 페이지 주요 색(부드러운 퍼플)으로. 학습 효과 보라 띠 바로 아래에 붙임(flush) */}
        <ProgramFaqSection
          items={SOCRATES_FAQS}
          last
          flush
          labelColor="#5B4596"
          labelBg="#F3F0FA"
          accent="#6A54A6"
        />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="중고등 무료 상담 신청하기" ctaHref="/consult" />
      </div>
    </div>
  );
}
