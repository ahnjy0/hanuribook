/** 아래 방향 표시(흰 동그라미 안 ▼) */
function Down() {
  return (
    <span className="flex h-7 w-7 items-center justify-center self-center rounded-full bg-white text-[11px] text-[#2B2B2B]" aria-hidden="true">
      ▼
    </span>
  );
}

/**
 * '한우리 선생님이 되려면 어떻게 해야 하나요?'
 * 갈색 머리 띠(아래 꼬리) → 노란 바탕: 안내 문구 → STEP.0 상담 → STEP.1 면담 · STEP.2 교사특별반 수료 → 활동 시작
 */
export default function StepsSection() {
  return (
    <section aria-labelledby="ts-how">
      <div className="relative bg-[#4A3A2E] px-5 py-10 text-center text-white lg:py-14">
        <p className="m-0 text-[16px] lg:text-[21px]">한우리 선생님이 되려면</p>
        <h2 className="m-0 mt-1 text-[26px] font-extrabold lg:text-[38px]" id="ts-how">
          어떻게 해야 하나요?
        </h2>
        <span
          className="absolute -bottom-4 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[18px] border-t-[18px] border-b-0 border-solid border-x-transparent border-t-[#4A3A2E]"
          aria-hidden="true"
        />
      </div>
      <div className="bg-[#FFC72C] px-5 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="mx-auto my-0 box-border flex max-w-[960px] flex-col gap-5 lg:gap-6">
          <p className="m-0 text-center text-[16px] leading-[1.7] font-bold break-keep text-[#3B2E24] underline decoration-[#3B2E24]/40 underline-offset-4 lg:text-[20px]">
            책과 아이들을 좋아한다면 누구나!
            <br />
            아래 과정을 거치면
            <br />
            한우리 교사로 활동할 수 있습니다.
          </p>
          {/* STEP.0 */}
          <div className="flex flex-col items-center gap-1 rounded-[16px] bg-white px-5 py-6 text-center">
            <span className="text-[15px] text-[#444444] lg:text-[17px]">STEP.0</span>
            <strong className="text-[21px] font-extrabold text-[#2B2B2B] lg:text-[26px]">한우리 교사 활동 상담하기</strong>
          </div>
          <Down />
          {/* STEP.1 · STEP.2: 모바일 위아래, 데스크톱 나란히 */}
          <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 lg:gap-4">
            <li className="flex flex-col items-center gap-3 rounded-[16px] bg-white px-5 py-7 text-center">
              <span className="rounded-full border border-solid border-[#2B2B2B] px-3 py-0.5 text-[13px] font-bold lg:text-[14px]">STEP.1</span>
              <strong className="text-[19px] font-extrabold text-[#2B2B2B] lg:text-[23px]">지역 센터 면담</strong>
              <p className="m-0 text-[15px] leading-[1.6] break-keep text-[#444444] lg:text-[17px]">
                한우리 교사가 되기 전,
                <br />
                <strong className="font-extrabold text-[#2B2B2B]">
                  지역 센터와 면담을 하고
                  <br />
                  교사 활동 지원서를 작성해요!
                </strong>
              </p>
              <p className="m-0 flex items-center gap-1.5 text-[12px] break-keep text-[#666666] lg:text-[14px]">
                <span className="text-[#F26522]" aria-hidden="true">
                  ☑
                </span>
                지역센터에 따라 면담 시 지원서류가 필요할 수 있어요.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-3 rounded-[16px] bg-white px-5 py-7 text-center">
              <span className="rounded-full border border-solid border-[#2B2B2B] px-3 py-0.5 text-[13px] font-bold lg:text-[14px]">STEP.2</span>
              <strong className="text-[19px] font-extrabold text-[#2B2B2B] lg:text-[23px]">한우리 교사특별반 과정 수료</strong>
            </li>
          </ol>
          <Down />
          <div className="flex flex-col items-center gap-1 rounded-[16px] bg-white px-5 py-6 text-center">
            <span className="text-[15px] text-[#444444] lg:text-[17px]">위 단계를 거치면</span>
            <strong className="text-[21px] font-extrabold text-[#2B2B2B] lg:text-[26px]">한우리 교사로 활동 시작!</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
