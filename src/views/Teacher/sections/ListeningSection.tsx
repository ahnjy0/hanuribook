export default function ListeningSection() {
  return (
    <section className="bg-[#E8590C] px-5 py-12 text-center text-white" aria-labelledby="t-ear">
      <div className="mx-auto my-0 flex max-w-[520px] flex-col items-center gap-4">
        <span
          className="h-10 font-[family-name:Georgia,serif] text-[72px] leading-[0.6] font-black text-white"
          aria-hidden="true"
        >
          “
        </span>
        <span className="h-6 w-0.25 bg-[rgba(255,255,255,0.6)]" aria-hidden="true" />
        <h2 className="m-0 text-[21px] leading-[1.6] font-semibold lg:text-[24px]" id="t-ear">
          한우리 선생님은
          <br />
          <span className="font-extrabold text-[#FFE45C]">
            아이 눈과 마음에
            <br />귀 기울이며
          </span>
          <br />
          답을 채워 나갑니다.
        </h2>
        <span className="h-6 w-0.25 bg-[rgba(255,255,255,0.6)]" aria-hidden="true" />
        <span
          className="h-10 font-[family-name:Georgia,serif] text-[72px] leading-[0.6] font-black text-white"
          aria-hidden="true"
        >
          ”
        </span>
      </div>
    </section>
  );
}
