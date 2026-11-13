export default function TypesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11"
      aria-labelledby="f-type"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="f-type">
        개설 유형
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <article className="flex flex-col gap-2 rounded-[20px] border border-[#EFEFEF] p-5">
          <span className="self-start rounded-[6px] bg-[#FFF1E7] px-2 py-0.75 text-[12px] font-bold text-[#C2410C]">
            학원형
          </span>
          <h3 className="m-0 text-[18px] font-extrabold">러닝센터</h3>
          <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
            독립 교실을 갖춘 학원형 센터. 소그룹 수업과 진단실 운영.
          </p>
          <span className="text-[13px] text-[#6B6B6B]">권장 면적 [00]㎡ 이상</span>
        </article>
        <article className="flex flex-col gap-2 rounded-[20px] border border-[#EFEFEF] p-5">
          <span className="self-start rounded-[6px] bg-[#EAF2FF] px-2 py-0.75 text-[12px] font-bold text-[#2F5AA8]">
            지역 거점형
          </span>
          <h3 className="m-0 text-[18px] font-extrabold">지부</h3>
          <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
            지역 교사를 관리하며 방문·홈클럽 수업을 운영하는 거점.
          </p>
          <span className="text-[13px] text-[#6B6B6B]">관할 지역 협의</span>
        </article>
        <article className="flex flex-col gap-2 rounded-[20px] border border-[#EFEFEF] p-5">
          <span className="self-start rounded-[6px] bg-[#E8F5EE] px-2 py-0.75 text-[12px] font-bold text-[#1F7A4C]">
            소규모형
          </span>
          <h3 className="m-0 text-[18px] font-extrabold">홈클럽</h3>
          <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
            선생님 자택에서 소수 정예로 운영하는 소규모 공부방.
          </p>
          <span className="text-[13px] text-[#6B6B6B]">자격 취득 교사 대상</span>
        </article>
      </div>
    </section>
  );
}
