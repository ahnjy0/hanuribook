import Title, { CARD, Section } from "@/views/TeacherSpecial/sections/Title";

/** 실제 학부모 후기(\n 은 줄바꿈) */
const REVIEWS = [
  "한우리 선생님은 최고의 선생님이라 말하고 싶어요.\n수업은 물론이고, 아이들 하나 하나의 감정까지 세심히 살피는 분이시거든요.",
  "한우리 선생님을 만나고 아이가 책도 많이 읽고 학교 도서관에서 책을 빌려서 읽어볼 정도로 재미있어 해요!",
  "한우리 선생님 덕분에 글쓰기에 자신감이 생기고\n이제 스스로의 생각대로 주저없이 글을 써 내려가요 😊",
  "만화책만 읽던 아이가\n한우리 선생님을 만나고 긴 글 책도 읽어요~",
  "한우리 다니고부터 엄마, 아빠와도\n논리적으로 대화하는 아이가 되었어요.",
  "딸이 선생님이랑 있을 때면\n자꾸 수다쟁이가 되고 말하고 싶어진대요!",
  "아이가 한우리 선생님과 함께 독서를 시작하더니\n처음으로 상장을 받아왔어요.",
  "소심했던 아들이 한우리 선생님을 만나고\n반장까지 하게 됐어요!",
];

/** 후기 카드 하나(큰따옴표 + 글) — 흐르는 줄에서 폭 고정 */
function Card({ text }: { text: string }) {
  return (
    <div className={`${CARD} flex w-[260px] flex-none flex-col gap-2 px-5 py-5 lg:w-[320px] lg:px-6 lg:py-6`}>
      <span className="text-[30px] leading-none font-extrabold text-[#F26522]" aria-hidden="true">
        “
      </span>
      <p className="m-0 text-[14px] leading-[1.7] break-keep whitespace-pre-line text-[#333333] lg:text-[16px]">{text}</p>
    </div>
  );
}

/**
 * 실제 한우리 학부모님 후기: 카드 줄이 왼쪽으로 천천히 끝없이 흘러감(마우스를 올리면 멈춤)
 * - 같은 목록을 두 번 이어 붙여 -50% 이동 → 이음매 없이 반복. 두 번째 목록은 화면 읽기 프로그램에서 숨김
 * - '동작 줄이기' 설정이면 움직이지 않고 가로 스크롤 목록으로
 */
export default function ReviewsSection() {
  return (
    <Section id="t-rev">
      <Title id="t-rev" icon="results">
        실제 한우리 학부모님 후기
      </Title>
      {/* 양 끝을 흰색으로 흐리게(가장자리 페이드) */}
      <div className="group relative -mx-5 overflow-hidden px-0 py-1 motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] lg:mx-0">
        <div className="flex w-max animate-marquee items-stretch gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none lg:gap-4">
          <ul className="m-0 flex list-none items-stretch gap-3 p-0 lg:gap-4">
            {REVIEWS.map((r) => (
              <li key={r} className="flex">
                <Card text={r} />
              </li>
            ))}
          </ul>
          <ul className="m-0 flex list-none items-stretch gap-3 p-0 motion-reduce:hidden lg:gap-4" aria-hidden="true">
            {REVIEWS.map((r) => (
              <li key={`dup-${r}`} className="flex">
                <Card text={r} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
