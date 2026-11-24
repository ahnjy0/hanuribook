import Title, { CARD, Section } from "@/views/TeacherSpecial/sections/Title";

/** 진심을 다해 지도하는 선생님: 소개 문구 카드 + 수업 사진 자리(사진 준비 전 자리표시) — 데스크톱 1:1 */
export default function CardSection() {
  return (
    <Section id="t-card" first>
      <Title id="t-card" icon="who">
        진심을 다해 지도하는 선생님
      </Title>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
        <div className={`${CARD} flex flex-col justify-center gap-3 px-6 py-7 lg:px-8`}>
          <p className="m-0 text-[19px] leading-[1.5] font-bold break-keep text-[#1F1F1F] lg:text-[24px]">
            이해를 여는 질문과 따뜻한 격려로
            <br />
            <span className="font-extrabold text-[#D94E0F]">진심을 다해 지도하는</span>
          </p>
          <p className="m-0 text-[15px] font-bold lg:text-[17px]">
            한우리 <span className="text-[#D94E0F]">김수라</span> 선생님
          </p>
        </div>
        <div className="flex min-h-[220px] items-center justify-center rounded-[18px] bg-[#EFE9E1] text-center text-[13px] leading-[1.6] text-[#6B5A48]">
          [사진] 교재를 펼쳐 설명하는
          <br />
          한우리 선생님 수업 모습
        </div>
      </div>
    </Section>
  );
}
