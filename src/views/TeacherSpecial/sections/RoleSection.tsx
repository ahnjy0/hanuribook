/** 학부모 후기 말풍선(왼쪽 · 오른쪽 번갈아 꼬리) */
const REVIEWS = [
  "만화책만 읽던 아이가\n한우리 선생님을 만나고 긴 글 책도 읽어요~",
  "한우리 다니고부터 엄마, 아빠와도\n논리적으로 대화하는 아이가 되었어요.",
  "딸이 선생님이랑 있을 때면\n자꾸 수다쟁이가 되고 말하고 싶어진대요!",
  "아이가 한우리 선생님과 함께 독서를 시작하더니\n처음으로 상장을 받아왔어요.",
];

/** 한우리 선생님 소개 + 학부모 후기 + '한우리 선생님에 도전해보세요!' */
export default function RoleSection() {
  return (
    <section className="bg-[#F7EFE3]" aria-labelledby="ts-role">
      {/* 소개 카드(흰 바탕 띠) */}
      <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
        <p
          className="mx-auto my-0 box-border max-w-[960px] px-5 py-10 text-center text-[17px] leading-[1.7] break-keep text-[#333333] lg:py-14 lg:text-[22px]"
          id="ts-role"
        >
          <strong className="font-extrabold text-[#1F1F1F]">한우리 선생님</strong>은
          <br />
          이러한 환경 속에서
          <br />
          한우리 필독서와 교재를 통해
          <br />
          아이들에게 올바른 가치관을 심어주는
          <br />
          전문 독서지도사 입니다.
        </p>
      </div>
      <div className="mx-auto my-0 box-border flex max-w-[960px] flex-col gap-10 px-5 py-12 lg:gap-14 lg:py-20">
        {/* 후기 말풍선: 모바일 1열 · 데스크톱 2열 */}
        <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8">
          {REVIEWS.map((r, i) => (
            <li
              key={r}
              className={`relative rounded-[16px] bg-white px-5 py-5 text-center text-[15px] leading-[1.6] break-keep text-[#333333] shadow-[0_4px_12px_rgba(0,0,0,0.06)] lg:text-[17px] ${
                i % 2 ? "after:right-8" : "after:left-8"
              } after:absolute after:-bottom-2.5 after:h-5 after:w-5 after:rotate-45 after:bg-white after:content-['']`}
            >
              {r.split("\n").map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </li>
          ))}
        </ul>
        {/* 도전 문구: '한우리 선생님'은 주황 + 형광펜 밑줄 */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="m-0 text-[16px] break-keep text-[#444444] lg:text-[20px]">아이들의 실력을 넘어 미래를 바꿔주는 직업,</p>
          <p className="m-0 text-[24px] font-extrabold break-keep text-[#2B2B2B] lg:text-[36px]">
            <span className="bg-[linear-gradient(transparent_60%,#FFE27A_60%)] text-[#F26522]">한우리 선생님</span>에 도전해보세요!
          </p>
        </div>
      </div>
    </section>
  );
}
