import SectionLabel from "@/components/common/SectionLabel";
import type { ElementaryCourse } from "../elementaryData";

export default function KitSection({ d }: { d: ElementaryCourse }) {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="v-kit"
    >
      <div className="text-center">
        <SectionLabel color={d.accent} bg={d.soft}>
          교재 구성
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[34px]" id="v-kit">
          매월 바뀌는 필독서와 교재
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] text-[#333333] lg:text-[18px]">
          교과 연계와 최신 평가 유형 반영을 위해
          <br />
          매월 새로운 교재와 엄선된 필독서로 수업합니다.
        </p>
      </div>
      <div className="mt-1.5 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
        <img
          className="block h-auto w-full"
          src={d.kitImg.src}
          width={d.kitImg.w}
          height={d.kitImg.h}
          alt="매월 교재 구성: 워크북, 필독서, 단편 도서, 활동 자료"
          loading="lazy"
        />
        <div className="relative rounded-[20px] bg-[#F7F7F8] p-5">
          {/* 장식 캐릭터: 카드 안 오른쪽 아래. 글자 뒤에 깔림 */}
          <img
            className="pointer-events-none absolute right-4 bottom-4 block h-20 w-auto select-none lg:right-6 lg:bottom-5 lg:h-32"
            src={d.cha?.kit?.src ?? "https://cdn.hanuribook.com/img/hanuribook/ele_cha_02.png"}
            width={d.cha?.kit?.w ?? 683}
            height={d.cha?.kit?.h ?? 650}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <ul className="relative m-0 flex list-none flex-col gap-3.5 p-0">
            {d.kit.map((it) => (
              <li key={it.name} className="flex gap-2.5">
                <span
                  className="mt-1.75 h-2 w-2 flex-none rounded-[50%]"
                  style={{ background: d.dot }}
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-[15px] lg:text-[18px]">{it.name}</strong>
                  {it.sub && <p className="mx-0 mt-0.5 mb-0 text-[14px] text-[#555555] lg:text-[16px]">{it.sub}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 교재 구성 안내 문구(있는 과정만, 예: 논리리더): 이미지·목록 아래 연한 과정색 띠 */}
      {d.kitNote && (
        <p
          className="m-0 flex items-start gap-2 rounded-[14px] px-4 py-3 text-[14px] leading-[1.6] font-semibold break-keep text-[#333333] lg:items-center lg:justify-center lg:px-6 lg:py-4 lg:text-[16px]"
          style={{ background: d.soft }}
        >
          <span className="flex-none font-extrabold" style={{ color: d.accent }} aria-hidden="true">
            ※
          </span>
          {d.kitNote}
        </p>
      )}
    </section>
  );
}
