import Link from "next/link";

export default function ModesSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-11"
      aria-labelledby="tc-mode"
    >
      <h2 className="m-0 text-[22px] font-extrabold lg:text-[30px]" id="tc-mode">
        나에게 맞는 수강 방식
      </h2>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        <article className="flex flex-col gap-3 rounded-[22px] border-2 border-[#F26522] bg-white px-5 py-5.5">
          <div className="flex items-center justify-between">
            <h3 className="m-0 text-[19px] font-extrabold">온라인 과정</h3>
            <span className="rounded-[6px] bg-[#FFF1E7] px-2 py-0.75 text-[12px] font-bold text-[#C2410C]">
              추천
            </span>
          </div>
          <dl className="m-0 grid grid-cols-[80px_1fr] gap-2 text-[14px]">
            <dt className="text-[#6B6B6B]">기간</dt>
            <dd className="m-0">[0]주 · 자율 수강</dd>
            <dt className="text-[#6B6B6B]">방식</dt>
            <dd className="m-0">동영상 강의 + 실시간 실습</dd>
            <dt className="text-[#6B6B6B]">수강료</dt>
            <dd className="m-0">[수강료]</dd>
          </dl>
          <Link
            className="flex h-12 items-center justify-center rounded-[12px] bg-[#F26522] text-[15px] font-bold text-white no-underline"
            href="/seminar"
          >
            온라인 과정 신청
          </Link>
        </article>
        <article className="flex flex-col gap-3 rounded-[22px] border border-[#E4E4E4] bg-white px-5 py-5.5">
          <div className="flex items-center justify-between">
            <h3 className="m-0 text-[19px] font-extrabold">오프라인 과정</h3>
            <span className="rounded-[6px] bg-[#EAF2FF] px-2 py-0.75 text-[12px] font-bold text-[#2F5AA8]">
              지역 연수원
            </span>
          </div>
          <dl className="m-0 grid grid-cols-[80px_1fr] gap-2 text-[14px]">
            <dt className="text-[#6B6B6B]">기간</dt>
            <dd className="m-0">[0]주 · 주 [0]회</dd>
            <dt className="text-[#6B6B6B]">방식</dt>
            <dd className="m-0">대면 강의 + 현장 수업 참관</dd>
            <dt className="text-[#6B6B6B]">수강료</dt>
            <dd className="m-0">[수강료]</dd>
          </dl>
          <Link
            className="flex h-12 items-center justify-center rounded-[12px] border-[1.5px] border-[#F26522] text-[15px] font-bold text-[#C2410C] no-underline"
            href="/seminar"
          >
            오프라인 과정 신청
          </Link>
        </article>
      </div>
    </section>
  );
}
