import type { ReactNode } from "react";
import Title, { CARD, Section } from "@/views/TeacherSpecial/sections/Title";

/**
 * 한우리 선생님의 특징 — 문구는 사이트의 기존 내용(프로그램 소개 '어떤 선생님이 가르치나요?',
 * 이 페이지의 이전 섹션들, 교사특별반 '교사가 된 이후에도 지속적으로 책임지니까!')을 바탕으로 정리
 */
const FEATURES: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "전문 교육과 자격을 갖춘 선생님",
    desc: "전문적인 교육을 받고 자격증을 취득한 독서토론논술 전문가가 아이들을 가르칩니다.",
    icon: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
      </>
    ),
  },
  {
    title: "질문과 격려로 이끄는 수업",
    desc: "이해를 여는 질문과 따뜻한 격려로, 아이가 자기 생각을 꺼낼 수 있게 기다려주고 이끌어줍니다.",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM9.5 8.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5M12 14.5h.01" />,
  },
  {
    title: "아이마다 다른 생각을 존중",
    desc: "같은 책을 읽어도 아이마다 생각의 모양이 다르기에, 각자의 생각을 스스로 표현할 수 있도록 지도합니다.",
    icon: <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />,
  },
  {
    title: "꾸준히 성장하는 선생님",
    desc: "활동을 시작한 뒤에도 교재 교수, 글쓰기 지도법, 토의토론 등 한우리의 전문 교육으로 수업 역량을 키워 갑니다.",
    icon: (
      <>
        <path d="M3 20h18" />
        <path d="m4 15 5-5 4 3 7-7" />
        <path d="M15 6h5v5" />
      </>
    ),
  },
];

/** 한우리 선생님의 특징: 아이콘 카드(모바일 1열 · 데스크톱 2열) */
export default function FeaturesSection() {
  return (
    <Section id="t-feat" first>
      <Title id="t-feat" icon="features">
        한우리 선생님의 특징
      </Title>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-2 lg:gap-4">
        {FEATURES.map((f) => (
          <li key={f.title} className={`${CARD} flex items-start gap-4 p-5 lg:p-6`}>
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                {f.icon}
              </svg>
            </span>
            <div className="flex flex-col gap-1.5">
              <strong className="text-[16px] font-extrabold break-keep text-[#1F1F1F] lg:text-[19px]">{f.title}</strong>
              <p className="m-0 text-[14px] leading-[1.65] break-keep text-[#444444] lg:text-[16px]">{f.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
