/**
 * 히어로: 프로그램 소개 첫 섹션과 같은 연한 살구색 배경 + 아래 둥근 모서리
 * 내용은 '한우리 지도교사' 소개(제목 → 설명 → 도전 문구) + 수업 사진
 * 모바일: 글(왼쪽 정렬, 설명은 줄바꿈 없이 이어서) → 사진 위아래 / 데스크톱: 글(왼쪽 정렬) · 사진(오른쪽) 1:1, 위 맞춤
 * 사진 오른쪽 위 'AI로 제작' 안내 문구가 이미지에 들어 있어 잘리지 않게 원본 비율 그대로 보여 줌
 */
export default function HeroSection() {
  return (
    <section className="rounded-t-none rounded-b-[32px] bg-[#FFEDE0] px-0 pt-9 pb-10 lg:pt-14 lg:pb-16" aria-labelledby="ts-h">
      <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-start gap-5 px-5 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-3 text-left lg:gap-4">
          <h1 className="m-0 text-[26px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[38px]" id="ts-h">
            <span className="text-[#D94E0F]">한우리 지도교사</span>는
            <br />
            독서토론논술 전문 교사입니다
          </h1>
          <p className="m-0 text-[14px] leading-[1.8] break-keep text-[#333333] lg:text-[17px]">
            아이들의 읽기, 쓰기, 듣기, 말하기, 생각하기 능력을 향상시키고
            {" "}<br className="hidden lg:block" />
            올바른 가치관 및 인성 형성을 돕는 전문 교사입니다.
            {" "}<br className="hidden lg:block" />
            한우리 필독서와 교재를 활용하여 연령별 수업을 진행합니다.
          </p>
          {/* 도전 문구: 굵게, '한우리 지도교사'는 주황 */}
          <p className="m-0 text-[16px] leading-[1.6] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">
            아이들의 실력을 넘어 미래를 바꿔주는 직업,
            <br />
            <span className="text-[#D94E0F]">한우리 지도교사에 도전해보세요!</span>
          </p>
        </div>
        <img
          className="block h-auto w-full rounded-[20px] lg:rounded-[24px]"
          src="https://cdn.hanuribook.com/img/hanuribook/teacher.jpg"
          width={1200}
          height={800}
          alt="한우리 지도교사가 두 아이와 함께 책을 펴 놓고 웃으며 수업하는 모습"
        />
      </div>
    </section>
  );
}
