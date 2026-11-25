/**
 * 히어로: 교사특별반 히어로와 같은 모양
 * 연한 살구색 배경 + 아래 둥근 모서리, 글(제목 → 설명) · 사진
 * 모바일: 글(왼쪽 정렬, 설명은 줄바꿈 없이 이어서) → 사진 위아래 / 데스크톱: 글(왼쪽 정렬) · 사진(오른쪽) 1:1, 위 맞춤
 */
export default function HeroSection() {
  return (
    <section className="rounded-t-none rounded-b-[32px] bg-[#FFEDE0] px-0 pt-9 pb-10 lg:pt-14 lg:pb-16" aria-labelledby="tc-h">
      <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-start gap-5 px-5 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-3 text-left lg:gap-4">
          <h1 className="m-0 text-[26px] leading-[1.35] font-extrabold break-keep text-[#1F1F1F] lg:text-[38px]" id="tc-h">
            <span className="text-[#D94E0F]">한우리 지도교사</span>가 되기 위한
            <br />
            필수 코스
          </h1>
          <p className="m-0 text-[14px] leading-[1.8] break-keep text-[#333333] lg:text-[17px]">
            한우리 지도교사로 활동하기 위해 반드시 수강해야 하는 교육으로 교사활동을 시작하기 직전 신청하여 진행합니다. (1회 진행)
          </p>
          {/* 도전 문구: 교사특별반 히어로와 같은 굵은 글, '내 꿈을 위해 도전하세요!'는 주황 */}
          <p className="m-0 text-[16px] leading-[1.6] font-extrabold break-keep text-[#1F1F1F] lg:text-[21px]">
            국내 최고의 독서토론논술 전문가, 한우리 지도교사!
            <br />
            <span className="text-[#D94E0F]">내 꿈을 위해 도전하세요!</span>
          </p>
        </div>
        <img
          className="block h-auto w-full rounded-[20px] lg:rounded-[24px]"
          src="https://www.hanuribook.com/resources/img/center/teacher_img1.jpg"
          width={900}
          height={400}
          alt="강의실에서 수업을 듣고 있는 예비 지도교사"
        />
      </div>
    </section>
  );
}
