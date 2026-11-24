"use client";

import Header from "@/components/common/Header/Header";
import HeroSection from "./sections/HeroSection";
import ApplySection from "./sections/ApplySection";
import Footer from "@/components/common/Footer/Footer";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import { useConsult } from "./useConsult";

export default function Consult() {
  const { agree, agreeThird, done, grade, grades, notDone, submit, toggleAgree, toggleAgreeThird, phoneAuth, address, hopeTimes } =
    useConsult();
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-pretendard tracking-[-0.02em] text-[#1F1F1F]">
      <Header active="consult" sub="" crumbs="수업상담" />
      <main className="flex-[1_0_auto] bg-[#FFFAF7]">
        <HeroSection />
        <ApplySection
          agree={agree}
          done={done}
          grade={grade}
          grades={grades}
          notDone={notDone}
          submit={submit}
          toggleAgree={toggleAgree}
          agreeThird={agreeThird}
          toggleAgreeThird={toggleAgreeThird}
          phoneAuth={phoneAuth}
          address={address}
          hopeTimes={hopeTimes}
        />
      </main>
      <Footer />
      <div className="sticky bottom-0 z-20">
        <BottomNav cta="무료 상담 신청 완료하기" ctaHref="/consult" showCenter={false} />
      </div>
    </div>
  );
}
