import Title, { CARD, Section } from "@/views/TeacherSpecial/sections/Title";

/** 질문으로 이끄는 수업: 설명 → 질문 말풍선 카드 2개 → 맺음 문구 */
export default function SelfLearningSection() {
  return (
    <Section id="t-self">
      <Title id="t-self" icon="how">
        아이 스스로 다다를 수 있도록
      </Title>
      <p className="m-0 text-[14px] leading-[1.7] break-keep text-[#333333] lg:text-[17px]">
        책 속에 담긴 생각과 지식에 <strong className="font-extrabold text-[#1F1F1F]">아이 스스로 다다를 수 있도록</strong>
      </p>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:gap-4">
        {["지율이가 주인공이라면\n어떻게 행동했을까?", "친구의 발표를 듣고\n어떤 생각이 떠올라?"].map((q) => (
          <li key={q} className={`${CARD} flex items-center gap-3 px-5 py-5 lg:px-6 lg:py-6`}>
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#F26522] text-[18px] font-extrabold text-white" aria-hidden="true">
              ?
            </span>
            <p className="m-0 text-[15px] leading-[1.6] break-keep whitespace-pre-line text-[#1F1F1F] lg:text-[17px]">{q}</p>
          </li>
        ))}
      </ul>
      <p className="m-0 text-center text-[16px] leading-[1.6] font-bold break-keep text-[#1F1F1F] lg:text-[20px]">
        한우리 선생님은 <span className="bg-[#F26522] px-1.5 text-white">충분한 교감 속</span> 아이가 자기 생각을 꺼낼 수 있게
        <br />
        <span className="text-[#D94E0F]">기다려주고 이끌어줍니다.</span>
      </p>
    </Section>
  );
}
