import SmartLink from "@/components/common/SmartLink";
import type { SpecialVals } from "../useSpecial";

type Props = Pick<SpecialVals, "items">;

export default function CourseListSection({ items }: Props) {
  return (
    // 페이지 마지막 섹션(신청 안내 · FAQ 삭제)이라 아래 여백을 둠
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-5 pb-12 lg:pt-10 lg:pb-24" aria-label="특강 목록">
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article
            key={i}
            className="flex flex-col overflow-hidden rounded-[22px] border border-[#EEEEEE] bg-white"
          >
            <div
              className="flex h-32 items-center justify-center text-[12px] text-[#5A4A3C]"
              style={{ background: it.tint }}
            >{`[이미지] ${it.img}`}</div>
            <div className="flex flex-auto flex-col gap-2 p-4.5">
              {/* 라벨: 대상(주황) + 분야(회색) */}
              <div className="flex gap-1.5">
                <span className="rounded-[6px] bg-[#FFF1E7] px-2 py-0.75 text-[12px] font-bold text-[#C2410C]">
                  {it.age}
                </span>
                <span className="rounded-[6px] bg-[#F1F1F2] px-2 py-0.75 text-[12px] font-bold text-[#333333]">
                  {it.field}
                </span>
              </div>
              <h2 className="m-0 text-[19px] font-extrabold">{it.title}</h2>
              <p className="m-0 flex-auto text-[14px] leading-[1.6] text-[#333333]">{it.desc}</p>
              {/* 상세 페이지로 이동(데이터 href — 상세 페이지가 생기기 전까지는 자리표시 "#") */}
              <SmartLink
                className="mt-1.5 flex h-11.5 items-center justify-center rounded-[12px] border-[1.5px] border-solid border-[#F26522] text-[15px] font-bold text-[#C2410C] no-underline"
                href={it.href}
                aria-label={`${it.title} 상세보기`}
              >
                상세보기 ›
              </SmartLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
