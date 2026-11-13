export default function CurriculumSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11"
      aria-labelledby="tc-cur"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="tc-cur">
        주요 커리큘럼
      </h2>
      <div className="overflow-x-auto rounded-[16px] border border-[#EFEFEF]">
        <table className="w-full min-w-85 border-collapse text-[14px]">
          <thead>
            <tr className="bg-[#F7F7F8]">
              <th className="w-22.5 p-3 text-left" scope="col">
                영역
              </th>
              <th className="p-3 text-left" scope="col">
                내용
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-t-[#EFEFEF]">
              <th className="p-3 text-left text-[#C2410C]" scope="row">
                독서 이론
              </th>
              <td className="p-3 text-[#4A4A4A]">아동 발달과 독서 단계, 독서 교육의 이해</td>
            </tr>
            <tr className="border-t border-t-[#EFEFEF]">
              <th className="p-3 text-left text-[#C2410C]" scope="row">
                수업 설계
              </th>
              <td className="p-3 text-[#4A4A4A]">필독서 분석, 발문 설계, 4차시 수업안 작성</td>
            </tr>
            <tr className="border-t border-t-[#EFEFEF]">
              <th className="p-3 text-left text-[#C2410C]" scope="row">
                토론·논술
              </th>
              <td className="p-3 text-[#4A4A4A]">토의·토론 진행법, 갈래별 글쓰기 지도</td>
            </tr>
            <tr className="border-t border-t-[#EFEFEF]">
              <th className="p-3 text-left text-[#C2410C]" scope="row">
                실무
              </th>
              <td className="p-3 text-[#4A4A4A]">학부모 상담, 첨삭 실습, 수업 시연</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
