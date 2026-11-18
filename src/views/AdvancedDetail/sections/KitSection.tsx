import SectionLabel from "@/components/common/SectionLabel";
import type { AdvancedCourse } from "../advancedData";

/** 교재 구성: 어휘리더 '교재 구성'과 같은 디자인(왼쪽 교재 이미지 + 오른쪽 구성 목록) */
export default function KitSection({ d }: { d: AdvancedCourse }) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="s-kit"
    >
      <div className="text-center">
        <SectionLabel color={d.accent} bg={d.soft}>
          교재 구성
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold break-keep lg:text-[34px]" id="s-kit">
          {d.kitTitle}
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[18px]">
          {d.kitDesc[0]}
          <br />
          {d.kitDesc[1]}
        </p>
      </div>
      <div className="mt-1.5 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
        <img
          className="block h-auto w-full"
          src={d.kitImg.src}
          width={d.kitImg.w}
          height={d.kitImg.h}
          alt={`매월 교재 구성: ${d.kit.map((k) => k.name).join(", ")}`}
          loading="lazy"
        />
        <div className="relative rounded-[20px] bg-[#F7F7F8] p-5 lg:p-7">
          {/* 장식 캐릭터: 카드 안 오른쪽 아래. 글자 뒤에 깔림 (어휘리더 교재 구성 카드와 같은 방식) */}
          <img
            className="pointer-events-none absolute right-4 bottom-4 block h-20 w-auto select-none lg:right-6 lg:bottom-5 lg:h-32"
            src="https://cdn.hanuribook.com/img/hanuribook/advance_cha_01.png"
            width={266}
            height={313}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <ul className="relative m-0 flex list-none flex-col gap-3.5 p-0">
            {d.kit.map((it) => (
              <li key={it.name} className="flex gap-2.5">
                <span className="mt-1.75 h-2 w-2 flex-none rounded-[50%]" style={{ background: d.accent }} aria-hidden="true" />
                <div>
                  <strong className="text-[15px] lg:text-[18px]">{it.name}</strong>
                  {it.sub && <p className="mx-0 mt-0.5 mb-0 text-[14px] text-[#555555] lg:text-[16px]">{it.sub}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
