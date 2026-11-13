import Header from "@/components/common/Header/Header";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import Footer from "@/components/common/Footer/Footer";

export default function CommonComponentsSection() {
  return (
    <section className="flex flex-col gap-4.5">
      <h2 className="m-0 text-[22px] font-extrabold">08 공통 컴포넌트 (실제 인스턴스)</h2>
      <div className="grid grid-cols-3 items-start gap-6">
        <div className="overflow-hidden rounded-[16px] border border-[#ECECEC]">
          <Header active="program" sub="초등정규" crumbs={"프로그램 > 초등정규"} />
        </div>
        <div className="overflow-hidden rounded-[16px] border border-[#ECECEC]">
          <BottomNav cta={"무료 수업 & 상담 신청하기"} ctaHref="/consult" />
        </div>
        <div className="overflow-hidden rounded-[16px] border border-[#ECECEC]">
          <Footer />
        </div>
      </div>
    </section>
  );
}
