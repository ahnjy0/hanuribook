import SectionLabel from "@/components/common/SectionLabel";

/**
 * 히어로: 교사특별반 히어로와 같은 모양
 * 연한 살구색 배경 + 아래 둥근 모서리, 글(라벨 → 제목 → 설명) · 수업 사진
 * 모바일: 글(가운데) → 사진 위아래 / 데스크톱: 글(왼쪽 정렬) · 사진(오른쪽) 1:1, 세로 가운데 맞춤
 */
export default function GreetingSection() {
  return (
    <section className="rounded-t-none rounded-b-[32px] bg-[#FFEDE0] px-0 pt-9 pb-10 lg:pt-14 lg:pb-16" aria-labelledby="t-hi">
      <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-center gap-7 px-5 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:gap-4 lg:text-left">
          <span className="lg:[&>p]:self-start">
            <SectionLabel color="#C2410C" bg="#FFFFFF">
              한우리 선생님
            </SectionLabel>
          </span>
          <h1 className="m-0 text-[26px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[38px]" id="t-hi">
            저는 <span className="text-[#D94E0F]">아이와 마음</span>을 나누는
            <br />
            <span className="text-[#D94E0F]">한우리 선생님</span>입니다.
          </h1>
          <p className="m-0 text-[14px] leading-[1.8] break-keep text-[#333333] lg:text-[17px]">
            책 속에 담긴 생각과 지식에 아이 스스로 다다를 수 있도록 한우리 선생님은 충분한 교감 속 아이가 자기 생각을 꺼낼 수 있게 기다려주고 이끌어줍니다.
          </p>
          {/* 강조 문구: 교사특별반 히어로 도전 문구와 같은 굵은 글, '진심을 다해 지도합니다.'는 주황 */}
          <p className="m-0 text-[16px] leading-[1.6] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">
            한우리 선생님은 이해를 여는 질문과 따뜻한 격려로
            <br />
            <span className="text-[#D94E0F]">진심을 다해 지도합니다.</span>
          </p>
        </div>
        <img
          className="block h-auto w-full rounded-[20px] lg:rounded-[24px]"
          src="https://cdn.hanuribook.com/img/hanuribook/teacher_02.jpg"
          width={1200}
          height={800}
          alt="한우리 선생님이 아이 옆에서 글쓰기를 지도하는 모습"
        />
      </div>
    </section>
  );
}
