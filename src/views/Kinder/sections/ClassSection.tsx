import CharacterDeco from "./CharacterDeco";

export default function ClassSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="k-class"
    >
      <div className="relative pt-16 text-center lg:py-6">
        <CharacterDeco n={2} side="left" />
        <p className="m-0 text-[13px] font-bold text-[#B8326A]">| 수업 내용 |</p>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[30px]" id="k-class">
          듣기와 표현, 놀이와 상상
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
          그림책 깊이 읽기, 언어 활동, 인성 교육 활동, 듣기 활동,
          <br />
          주제 통합 활동을 체계적으로 진행합니다.
        </p>
      </div>
      <ol className="mx-0 mt-1.5 mb-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-4">
        <li className="flex flex-col gap-1.5 rounded-[18px] bg-[#D63F7C] px-3 py-4.5 text-center text-white">
          <span className="text-[12px] font-semibold opacity-90">1차시</span>
          <strong className="text-[16px]">말과 글 자람터</strong>
          <span className="text-[12px] leading-[1.5] text-[#FDE7F0]">상황별·주제별 어휘 익히기</span>
        </li>
        <li className="flex flex-col gap-1.5 rounded-[18px] bg-[#D63F7C] px-3 py-4.5 text-center text-white">
          <span className="text-[12px] font-semibold opacity-90">2차시</span>
          <strong className="text-[16px]">문학 그림책 읽기</strong>
          <span className="text-[12px] leading-[1.5] text-[#FDE7F0]">표현력과 감수성 키우기</span>
        </li>
        <li className="flex flex-col gap-1.5 rounded-[18px] bg-[#D63F7C] px-3 py-4.5 text-center text-white">
          <span className="text-[12px] font-semibold opacity-90">3차시</span>
          <strong className="text-[16px]">정보 그림책 읽기</strong>
          <span className="text-[12px] leading-[1.5] text-[#FDE7F0]">배경지식 키우기</span>
        </li>
        <li className="flex flex-col gap-1.5 rounded-[18px] bg-[#D63F7C] px-3 py-4.5 text-center text-white">
          <span className="text-[12px] font-semibold opacity-90">4차시</span>
          <strong className="text-[16px]">옛이야기 읽기</strong>
          <span className="text-[12px] leading-[1.5] text-[#FDE7F0]">사회와 문화 이해하기</span>
        </li>
      </ol>
    </section>
  );
}
