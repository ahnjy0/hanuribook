export default function FeaturesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24"
      aria-labelledby="e-feat"
    >
      <h2 className="m-0 flex items-center gap-2 text-[20px] font-extrabold lg:text-[30px]" id="e-feat">
        <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
        프로그램의 특징
      </h2>
      <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 lg:grid-cols-3">
        <li className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-4.5">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-[#F26522] text-[14px] font-extrabold text-white">
            1
          </span>
          <div>
            <strong className="text-[15px]">문해력 향상 훈련</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              다양한 어휘, 문법, 요약하기, 속담, 한자성어 등 필수 국어 지식 익히기와 미시적 독해 전략 활용
              활동을 합니다.
            </p>
          </div>
        </li>
        <li className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-4.5">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-[#F26522] text-[14px] font-extrabold text-white">
            2
          </span>
          <div>
            <strong className="text-[15px]">필독서를 통한 사고력 확장</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              읽은 책을 바탕으로 사고를 확장하여 글을 쓰고 토의·토론을 하며 주제에 대하여 더 깊이 생각해 보는
              나선형 활동을 합니다.
            </p>
          </div>
        </li>
        <li className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-4.5">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-[#F26522] text-[14px] font-extrabold text-white">
            3
          </span>
          <div>
            <strong className="text-[15px]">사고력 발달을 위한 독서 토의·토론</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              독서한 내용에 대해 여러 차원에서 생각하고 느낌, 의견을 나눔으로써 더욱 수준 높은 독서가 되도록
              능동적으로 소통합니다.
            </p>
          </div>
        </li>
        <li className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-4.5">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-[#F26522] text-[14px] font-extrabold text-white">
            4
          </span>
          <div>
            <strong className="text-[15px]">문제 해결력을 기르는 자기주도학습</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              어린이 스스로 문제의식을 갖고 책을 읽고 문제를 해결할 수 있도록 자기주도적 활동을 체계적으로
              훈련합니다.
            </p>
          </div>
        </li>
        <li className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-4.5">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-[#F26522] text-[14px] font-extrabold text-white">
            5
          </span>
          <div>
            <strong className="text-[15px]">멀티미디어 활용</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              QR 코드 등의 멀티미디어를 활용하여 흥미진진하고 입체적인 독서 토의·토론 탐구 활동을 진행합니다.
            </p>
          </div>
        </li>
        <li className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-4.5">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-[#F26522] text-[14px] font-extrabold text-white">
            6
          </span>
          <div>
            <strong className="text-[15px]">온라인 연계 활동</strong>
            <p className="mx-0 mt-1 mb-0 text-[13px] leading-[1.6] text-[#4A4A4A]">
              어린이들이 읽는 필독서와 연계하여 책의 내용을 확인하고 이해도를 점검할 수 있는 독서 퀴즈를 매월
              제공합니다.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
