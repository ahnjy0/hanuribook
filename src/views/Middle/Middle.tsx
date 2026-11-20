import Header from "@/components/common/Header/Header";
import ProgramsSection, { type ProgCard } from "@/views/Elementary/sections/ProgramsSection";
import IntroSection from "./sections/IntroSection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { PATHS } from "@/routes";

/**
 * 과정 카드: 중등(소크라테스) · 고등(고등 문학)
 * 색 — 중등: 부드러운 퍼플 / 고등: 차분한 남색
 */
const PROGS: ProgCard[] = [
  {
    id: "socrates",
    grade: "중등",
    brand: "",
    short: "소크라테스",
    desc: "중등 내신 대비 단계별 독해 훈련",
    href: PATHS.DetailSocrates,
    // 부드러운 퍼플(중등 소크라테스 페이지 주요 색과 같음): 연보라 카드 + 보라 라벨·버튼, 아이콘 네모·장식 원은 밝은 보라
    soft: "#F3F0FA",
    line: "#E1D9F1",
    accent: "#7A62B8",
    iconFg: "#FFFFFF",
    ink: "#5B4596",
  },
  {
    id: "literature",
    grade: "고등",
    brand: "",
    short: "소클 고등 문학",
    desc: "심층 독서와 통합 논·구술로 내신 · 입시 대비",
    href: PATHS.DetailLiterature,
    soft: "#EEF1F6",
    line: "#D5DCE8",
    accent: "#5B6B8C",
    iconFg: "#FFFFFF",
    ink: "#2B3A5C",
  },
];

/** 중고등정규 전체: 초등정규 전체 페이지와 같은 레이아웃(타이틀 → 과정 카드, 특징 섹션·상담 배너는 없음) */
export default function Middle() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="program" sub="중고등정규" crumbs={"프로그램 > 중고등정규"} />
      {/* 아래 여백: 상담 배너가 있던 자리만큼(초등정규 전체 페이지 끝 여백과 같게) */}
      <main className="flex-[1_0_auto] pb-12 lg:pb-24">
        <IntroSection />
        <ProgramsSection progs={PROGS} cols={2} />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="중고등 무료 상담 신청하기" ctaHref="/consult" />
      </div>
    </div>
  );
}
