import ColorTypeSection from "./sections/ColorTypeSection";
import ButtonChipSection from "./sections/ButtonChipSection";
import FormCardSection from "./sections/FormCardSection";
import SpacingSection from "./sections/SpacingSection";
import CommonComponentsSection from "./sections/CommonComponentsSection";

export default function StyleGuide() {
  return (
    <div className="box-border flex min-h-[1900px] w-[1280px] flex-col gap-12 bg-white p-16 font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <header className="flex items-end justify-between border-b-2 border-b-[#1F1F1F] pb-6">
        <div>
          <p className="m-0 text-[14px] font-bold text-[#C2410C]">HANURI DESIGN SYSTEM v1.0</p>
          <h1 className="mx-0 mt-1.5 mb-0 text-[44px] font-extrabold tracking-[-0.04em]">
            한우리독서토론논술 스타일가이드
          </h1>
        </div>
        <p className="m-0 text-right text-[14px] leading-[1.6] text-[#6B6B6B]">
          Mobile first 390 → Tablet 768 → Desktop 1024+
          <br />
          콘텐츠 최대폭 1200px · 좌우 여백 20px
        </p>
      </header>
      <ColorTypeSection />
      <ButtonChipSection />
      <FormCardSection />
      <SpacingSection />
      <CommonComponentsSection />
    </div>
  );
}
