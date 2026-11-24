import Title, { CARD, Section } from "@/views/TeacherSpecial/sections/Title";

/** 실제 학부모 후기 — 마지막 후기는 원래부터 뒷부분이 자리표시 */
const REVIEWS = [
  "한우리 선생님은 최고의 선생님이라 말하고 싶어요.\n수업은 물론이고, 아이들 하나 하나의 감정까지 세심히 살피는 분이시거든요.",
  "한우리 선생님을 만나고 아이가 책도 많이 읽고 학교 도서관에서 책을 빌려서 읽어볼 정도로 재미있어 해요!",
  "한우리 선생님 덕분에 글쓰기에 자신감이 생기고 [후기 나머지 내용]",
];

/** 실제 한우리 학부모님 후기: 큰따옴표 카드(데스크톱 3열) */
export default function ReviewsSection() {
  return (
    <Section id="t-rev">
      <Title id="t-rev" icon="results">
        실제 한우리 학부모님 후기
      </Title>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-3 lg:gap-4">
        {REVIEWS.map((r) => (
          <li key={r} className={`${CARD} flex flex-col gap-2 px-5 py-5 lg:px-6 lg:py-6`}>
            <span className="text-[30px] leading-none font-extrabold text-[#F26522]" aria-hidden="true">
              “
            </span>
            <p className="m-0 text-[14px] leading-[1.7] break-keep whitespace-pre-line text-[#333333] lg:text-[16px]">{r}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
