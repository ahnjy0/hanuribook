export default function EffectsSection() {
  return (
    <section className="relative mt-13 bg-[#FDEEF4] px-0 py-10 lg:mt-24 lg:pt-16 lg:pb-20" aria-labelledby="k-eff">
      {/* 장식 캐릭터: 섹션 오른쪽 아래(본문 너비 오른쪽 끝 기준).
          섹션 아래 여백 + 다음(영상) 섹션 위 여백에 걸쳐 놓여 카드·글과 겹치지 않음 */}
      <img
        className="pointer-events-none absolute right-[max(20px,calc((100%_-_1200px)/2_+_20px))] -bottom-12 z-10 block h-20 w-auto select-none lg:-bottom-24 lg:h-44"
        src="https://cdn.hanuribook.com/img/hanuribook/kinder_cha_03.png"
        width={539}
        height={657}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-4 px-5 lg:gap-7">
        <div className="text-center">
          <p className="m-0 text-[13px] font-bold text-[#B8326A]">| 학습 효과 |</p>
          <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[30px]" id="k-eff">
            독서 습관, 초등 학업 준비
          </h2>
          <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
            듣기와 말하기, 읽기와 쓰기, 생각하기 능력을 통합하여
            <br />
            아이의 첫 학업 습관을 단단히 완성합니다.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 md:grid-cols-2">
          <li className="flex items-center gap-3.5 rounded-full bg-white px-4 py-3.5">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[50%] bg-[#D63F7C] text-[14px] font-extrabold text-white">
              독서
            </span>
            <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">
              {"매달 문학·정보 그림책, 옛이야기를 읽으며 "}
              <strong className="text-[#1F1F1F]">다양한 책에 관심과 흥미</strong>를 키웁니다.
            </span>
          </li>
          <li className="flex items-center gap-3.5 rounded-full bg-white px-4 py-3.5">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[50%] bg-[#D63F7C] text-[14px] font-extrabold text-white">
              습관
            </span>
            <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">
              {"옛이야기를 읽으며 "}
              <strong className="text-[#1F1F1F]">바른 독서 습관과 가치관</strong>을 형성합니다.
            </span>
          </li>
          <li className="flex items-center gap-3.5 rounded-full bg-white px-4 py-3.5">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[50%] bg-[#D63F7C] text-[14px] font-extrabold text-white">
              언어
            </span>
            <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">
              {"듣기, 읽기, 쓰기, 말하기 활동을 통해 "}
              <strong className="text-[#1F1F1F]">균형 잡힌 언어 발달</strong>을 돕습니다.
            </span>
          </li>
          <li className="flex items-center gap-3.5 rounded-full bg-white px-4 py-3.5">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[50%] bg-[#D63F7C] text-[14px] font-extrabold text-white">
              교과
            </span>
            <span className="text-[13px] leading-[1.5] text-[#4A4A4A]">
              {"누리과정 연계, 초등 교과 연계 활동으로 "}
              <strong className="text-[#1F1F1F]">초등 교육 과정</strong>을 준비합니다.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
