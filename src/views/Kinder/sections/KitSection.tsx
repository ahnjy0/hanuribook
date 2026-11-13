export default function KitSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-13 lg:gap-5 lg:pt-24"
      aria-labelledby="k-kit"
    >
      <div className="text-center">
        <p className="m-0 text-[13px] font-bold text-[#B8326A]">
          | 교재 구성 |
        </p>
        <h2
          className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[30px]"
          id="k-kit"
        >
          매월 바뀌는 필독서와 교재
        </h2>
        <p className="m-0 text-[14px] leading-[1.6] text-[#4A4A4A]">
          교과 연계와 최신 평가 유형 반영을 위해
          <br />
          매월 새로운 교재와 엄선된 필독서로 수업합니다.
        </p>
      </div>
      <div className="mt-1.5 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
        <img
          className="block h-auto w-full"
          src="https://cdn.hanuribook.com/img/program/level1_sample_2.png"
          width={900}
          height={414}
          alt="매월 1세트 교재 구성: 워크북 1권, 필독서 3권, 활동 자료"
          loading="lazy"
        />
        <div className="relative rounded-[20px] bg-[#F7F7F8] p-5">
        {/* 장식 캐릭터: 카드 안 오른쪽 (모바일은 아래쪽, 데스크톱은 세로 가운데). 글자 뒤에 깔림 */}
        <img
          className="pointer-events-none absolute right-4 bottom-4 block h-20 w-auto select-none lg:top-1/2 lg:right-8 lg:bottom-auto lg:h-40 lg:-translate-y-1/2"
          src="https://cdn.hanuribook.com/img/hanuribook/kinder_cha_01.png"
          width={589}
          height={610}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <ul className="relative m-0 flex list-none flex-col gap-3.5 p-0">
          <li className="flex gap-2.5">
            <span
              className="mt-1.75 h-2 w-2 flex-none rounded-[50%] bg-[#EE6D9F]"
              aria-hidden="true"
            />
            <div>
              <strong className="text-[15px]">워크북 1권</strong>
            </div>
          </li>
          <li className="flex gap-2.5">
            <span
              className="mt-1.75 h-2 w-2 flex-none rounded-[50%] bg-[#EE6D9F]"
              aria-hidden="true"
            />
            <div>
              <strong className="text-[15px]">필독서 3권</strong>
              <p className="mx-0 mt-0.5 mb-0 text-[13px] text-[#6B6B6B]">
                옛이야기 1권, 누리과정 연계 그림책 2권
              </p>
            </div>
          </li>
          <li className="flex gap-2.5">
            <span
              className="mt-1.75 h-2 w-2 flex-none rounded-[50%] bg-[#EE6D9F]"
              aria-hidden="true"
            />
            <div>
              <strong className="text-[15px]">활동 자료</strong>
              <p className="mx-0 mt-0.5 mb-0 text-[13px] text-[#6B6B6B]">
                활동지 / 붙임 딱지 / 쓰기 부록
              </p>
            </div>
          </li>
          <li className="flex gap-2.5">
            <span
              className="mt-1.75 h-2 w-2 flex-none rounded-[50%] bg-[#EE6D9F]"
              aria-hidden="true"
            />
            <div>
              <strong className="text-[15px]">꿈꾸는 책장</strong>
              <p className="mx-0 mt-0.5 mb-0 text-[13px] text-[#6B6B6B]">
                스스로 스티커를 붙이는 독서 기록 보드
              </p>
            </div>
          </li>
          <li className="flex gap-2.5">
            <span
              className="mt-1.75 h-2 w-2 flex-none rounded-[50%] bg-[#EE6D9F]"
              aria-hidden="true"
            />
            <div>
              <strong className="text-[15px]">포트폴리오</strong>
              <p className="mx-0 mt-0.5 mb-0 text-[13px] text-[#6B6B6B]">
                아이의 소중한 학습 결과물 보관첩
              </p>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}
