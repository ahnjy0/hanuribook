// 초등심화 '프로그램 특징': 초등정규 '프로그램의 특징' 카드와 같은 디자인(번호 + 제목 + 설명), 2열
const FEATURES = [
  {
    title: "과학 독서를 통한 과학 교과 배경지식 확장 및 과학 탐구력 향상",
    desc: "과학 기초 개념을 단단하게 쌓으며 과학 교과 대비는 물론 고학년 과학 정보책 읽기 능력도 기릅니다. 나아가 미래 사회를 살아가는 데 꼭 필요한 과학적 사고 습관과 과학적 문제 해결력을 기를 수 있습니다.",
  },
  {
    title: "역사 독서를 통한 올바른 가치관과 세계관 함양",
    desc: "한국사와 세계사에서 중요한 인물이나 문학, 문화, 사회, 지리 등에 대해 체계적으로 독서 토론을 하면서 올바른 가치관과 세계관을 정립할 수 있습니다.",
  },
  {
    title: "주제별 독서를 통한 사고력 확장",
    desc: "과학, 역사, 지리 · 문화 등 선정된 주제의 책을 12개월 동안 꾸준히 읽으며 해당 주제에 대한 전반적인 지식의 폭을 넓히고, 이를 바탕으로 다른 분야와 연관 지어 생각하는 능력을 길러 줍니다.",
  },
  {
    title: "교과 연계 수업으로 배경지식 확장",
    desc: "초등 과학, 초등 사회 교과와 중학교 사회 및 역사 교과에 나오는 주제와 관련된 책 읽기를 통해 배경지식을 확장하여 수업 흥미를 높여 줍니다. 또 교육과정의 변화에 맞춘 다양한 유형의 활동을 통해 문제 해결력을 길러 줍니다.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-10 pb-12 lg:gap-5 lg:pt-12 lg:pb-24"
      aria-labelledby="a-feat"
    >
      <h2 className="m-0 flex items-center gap-2 text-[20px] font-extrabold lg:text-[30px]" id="a-feat">
        <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
        프로그램 특징
      </h2>
      <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 lg:gap-5">
        {FEATURES.map((f, i) => (
          <li
            key={f.title}
            className="flex gap-3 rounded-[18px] border border-[#EFEFEF] bg-white p-5 lg:gap-4 lg:rounded-[24px] lg:p-8"
          >
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[9px] bg-[#F26522] text-[15px] font-extrabold text-white lg:h-10 lg:w-10 lg:rounded-[11px] lg:text-[18px]">
              {i + 1}
            </span>
            <div>
              <strong className="block text-[16px] leading-[1.4] break-keep lg:text-[19px]">{f.title}</strong>
              <p className="mx-0 mt-1.5 mb-0 text-[14px] leading-[1.65] break-keep text-[#333333] lg:mt-2.5 lg:text-[16px]">
                {f.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
