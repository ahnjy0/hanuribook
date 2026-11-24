/** 아이의 마음에 귀 기울이는 선생님: 연한 살구색 띠 카드(교사특별반 약속 문구와 같은 모양) */
export default function ListeningSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-12 lg:pt-24" aria-labelledby="t-ear">
      <div className="flex flex-col items-center gap-3 rounded-[24px] bg-[#FFEDE0] px-5 py-9 text-center lg:gap-4 lg:py-12">
        <span className="text-[40px] leading-none font-extrabold text-[#F26522]" aria-hidden="true">
          “
        </span>
        <h2 className="m-0 text-[21px] leading-[1.55] font-bold break-keep text-[#1F1F1F] lg:text-[30px]" id="t-ear">
          한우리 선생님은 <span className="font-extrabold text-[#D94E0F]">아이 눈과 마음에 귀 기울이며</span>
          <br />
          답을 채워 나갑니다.
        </h2>
      </div>
    </section>
  );
}
