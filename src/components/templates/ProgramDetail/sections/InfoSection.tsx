import Link from "next/link";
import type { ProgramDetailVals } from "../useProgramDetail";

type Props = Pick<ProgramDetailVals, "p">;

export default function InfoSection({ p }: Props) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3 px-5 pt-8"
      aria-labelledby="d-info"
    >
      <h2 className="m-0 text-[19px] font-extrabold" id="d-info">
        수업 정보
      </h2>
      <dl className="m-0 grid grid-cols-2 gap-2 md:grid-cols-4">
        <div className="rounded-[14px] border border-[#EEEEEE] p-3.5">
          <dt className="text-[12px] text-[#6B6B6B]">대상</dt>
          <dd className="mx-0 mt-1 mb-0 text-[15px] font-bold">{p.grade}</dd>
        </div>
        <div className="rounded-[14px] border border-[#EEEEEE] p-3.5">
          <dt className="text-[12px] text-[#6B6B6B]">수업 시간</dt>
          <dd className="mx-0 mt-1 mb-0 text-[15px] font-bold">주 1회 · [00]분</dd>
        </div>
        <div className="rounded-[14px] border border-[#EEEEEE] p-3.5">
          <dt className="text-[12px] text-[#6B6B6B]">월 교재</dt>
          <dd className="mx-0 mt-1 mb-0 text-[15px] font-bold">필독서 + 활동 교재</dd>
        </div>
        <div className="rounded-[14px] border border-[#EEEEEE] p-3.5">
          <dt className="text-[12px] text-[#6B6B6B]">수업 형태</dt>
          <dd className="mx-0 mt-1 mb-0 text-[15px] font-bold">방문·홈클럽·학원</dd>
        </div>
      </dl>
      <Link
        className="mt-2 flex h-14 items-center justify-center rounded-[14px] bg-[#F26522] text-[17px] font-bold text-white no-underline"
        href="/consult"
      >{`${p.title} 무료 체험·상담 신청`}</Link>
    </section>
  );
}
