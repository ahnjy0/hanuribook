import SectionLabel from "@/components/common/SectionLabel";
import { ACCENT, SOFT } from "../vocabData";

const ITEMS: { name: string; sub?: string }[] = [
  { name: "워크북 1권" },
  { name: "필독서 2권", sub: "문학 1권, 비문학 1권" },
  { name: "단편 도서 1권" },
  { name: "활동 자료", sub: "별지 / 붙임딱지" },
  { name: "포트폴리오" },
];

export default function KitSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="v-kit"
    >
      <div className="text-center">
        <SectionLabel color={ACCENT} bg={SOFT}>
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
          src="https://cdn.hanuribook.com/img/program/level2_set_3.png"
          width={900}
          height={354}
          alt="매월 교재 구성: 워크북, 필독서, 단편 도서, 활동 자료"
          loading="lazy"
        />
        <div className="relative rounded-[20px] bg-[#F7F7F8] p-5">
          {/* 장식 캐릭터: 카드 안 오른쪽 아래. 글자 뒤에 깔림 */}
          <img
            className="pointer-events-none absolute right-4 bottom-4 block h-20 w-auto select-none lg:right-6 lg:bottom-5 lg:h-32"
            src="https://cdn.hanuribook.com/img/hanuribook/ele_cha_02.png"
            width={683}
            height={650}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <ul className="relative m-0 flex list-none flex-col gap-3.5 p-0">
            {ITEMS.map((it) => (
              <li key={it.name} className="flex gap-2.5">
                <span
                  className="mt-1.75 h-2 w-2 flex-none rounded-[50%] bg-[#F59A0B]"
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
    </section>
  );
}
