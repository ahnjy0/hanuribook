import wayReadImg from "@/assets/images/way-read.webp";
import wayWriteImg from "@/assets/images/way-write.webp";
import waySpeakImg from "@/assets/images/way-speak.webp";

export default function WaysSection() {
  return (
    <div className="pt-10" aria-label="한우리의 읽기·쓰기·말하기">
      <section className="bg-white px-0 py-12 lg:py-12" aria-labelledby="w-read">
        <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-center gap-6 px-5 lg:max-w-[1240px] lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10">
          <div className="reveal flex h-60 items-center justify-center rounded-[28px] text-center text-[13px] text-[#8A5A3C] lg:order-2 lg:h-90">
            <img
              className="h-[92%] w-auto max-w-[92%] animate-way-float-a mask-x-from-92% mask-y-from-92% object-contain mix-blend-multiply will-change-transform motion-reduce:animate-none lg:h-full lg:max-w-full"
              src={wayReadImg.src}
              alt="펼쳐진 책 일러스트"
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <h2
              className="reveal m-0 flex items-center gap-2.5 text-[21px] font-extrabold tracking-[-0.01em] text-[#D94E0F] before:h-1 before:w-6 before:flex-none before:rounded-[2px] before:bg-[#F26522] before:content-[''] lg:gap-3 lg:text-[28px] lg:before:w-8"
              id="w-read"
            >
              한우리의 읽기
            </h2>
            {/* 모바일에서도 한 줄: 화면 폭(좌우 여백 40px 제외)에 맞춰 글자 크기를 최대 23px까지 줄임 */}
            <p className="reveal m-0 text-[length:min(23px,calc((100vw_-_40px)/16.4))] leading-[1.4] font-extrabold tracking-[-0.045em] whitespace-nowrap text-[#1F1F1F] underline decoration-[#FFD9C2] decoration-[12px] underline-offset-[-6px] [text-decoration-skip-ink:none] lg:text-[30px] lg:leading-[1.35] lg:decoration-[16px] lg:underline-offset-[-8px]">
              무작정 많이 읽는 것은 진짜 읽기가 아닙니다.
            </p>
            <ul className="m-0 mt-1 flex list-none flex-col gap-2 p-0 pt-3 lg:gap-2.5 lg:pt-4">
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  스스로 읽고
                </strong>
                수업 전, 스스로 책을 읽으며 자발적인 읽기 습관을 기릅니다.
              </li>
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  선생님과 함께 읽고
                </strong>
                선생님의 지도하에 제대로 정독하는 법을 배웁니다.
              </li>
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  깊이 읽습니다
                </strong>
                한우리 교재로 내용을 정리하며 깊이 이해합니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF7F1] px-0 py-12 lg:py-12" aria-labelledby="w-write">
        <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-center gap-6 px-5 lg:max-w-[1240px] lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-10">
          <div className="reveal flex h-60 items-center justify-center rounded-[28px] text-center text-[13px] text-[#8A5A3C] lg:order-0 lg:h-90">
            <img
              className="h-[92%] w-auto max-w-[92%] animate-way-float-b mask-x-from-92% mask-y-from-92% object-contain mix-blend-multiply will-change-transform motion-reduce:animate-none lg:h-full lg:max-w-full"
              src={wayWriteImg.src}
              alt="노트와 연필, 전구 일러스트"
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <h2
              className="reveal m-0 flex items-center gap-2.5 text-[21px] font-extrabold tracking-[-0.01em] text-[#D94E0F] before:h-1 before:w-6 before:flex-none before:rounded-[2px] before:bg-[#F26522] before:content-[''] lg:gap-3 lg:text-[28px] lg:before:w-8"
              id="w-write"
            >
              한우리의 쓰기
            </h2>
            <p className="reveal m-0 text-[23px] leading-[1.4] font-extrabold tracking-[-0.045em] text-[#1F1F1F] underline decoration-[#FFD9C2] decoration-[12px] underline-offset-[-6px] [text-decoration-skip-ink:none] lg:text-[30px] lg:leading-[1.35] lg:decoration-[16px] lg:underline-offset-[-8px] xl:whitespace-nowrap">
              연결성을 갖춘 긴 글 쓰기만이 <br className="lg:hidden" />사고력을 확장합니다.
            </p>
            <ul className="m-0 mt-1 flex list-none flex-col gap-2 p-0 pt-3 lg:gap-2.5 lg:pt-4">
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  매 수업 쓰고
                </strong>
                일주일에 1번, 한달에 4번 매 수업마다 글쓰기를 합니다.
              </li>
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  다양하게 쓰고
                </strong>
                 논설문, 감상문, 설명문 등 다양한 갈래별로 씁니다.
              </li>
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  논리적으로 씁니다
                </strong>
                선생님의 지도 하에 논리를 갖춘 짜임새 있는 글을 완성해 냅니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white px-0 py-12 lg:py-12" aria-labelledby="w-speak">
        <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 items-center gap-6 px-5 lg:max-w-[1240px] lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10">
          <div className="reveal flex h-60 items-center justify-center rounded-[28px] text-center text-[13px] text-[#8A5A3C] lg:order-2 lg:h-90">
            <img
              className="h-[92%] w-auto max-w-[92%] animate-way-float-c mask-x-from-92% mask-y-from-92% object-contain mix-blend-multiply will-change-transform motion-reduce:animate-none lg:h-full lg:max-w-full"
              src={waySpeakImg.src}
              alt="물음표와 느낌표 말풍선 일러스트"
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <h2
              className="reveal m-0 flex items-center gap-2.5 text-[21px] font-extrabold tracking-[-0.01em] text-[#D94E0F] before:h-1 before:w-6 before:flex-none before:rounded-[2px] before:bg-[#F26522] before:content-[''] lg:gap-3 lg:text-[28px] lg:before:w-8"
              id="w-speak"
            >
              한우리의 말하기
            </h2>
            <p className="reveal m-0 text-[23px] leading-[1.4] font-extrabold tracking-[-0.045em] text-[#1F1F1F] underline decoration-[#FFD9C2] decoration-[12px] underline-offset-[-6px] [text-decoration-skip-ink:none] lg:text-[30px] lg:leading-[1.35] lg:decoration-[16px] lg:underline-offset-[-8px] whitespace-nowrap">
              한우리에는 틀린 답이 없습니다.
            </p>
            <ul className="m-0 mt-1 flex list-none flex-col gap-2 p-0 pt-3 lg:gap-2.5 lg:pt-4">
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  좋은 질문에 답하고
                </strong>
                전문 연구원이 작성한 사고를 넓히는 질문에 답합니다.
              </li>
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  자신 있게 말하고
                </strong>
                어떤 대답도 '해답'이 될 수 있기에 자신있게 말합니다.
              </li>
              <li className="reveal flex flex-col gap-1 rounded-[14px] border border-[#F1E4DA] bg-white px-4 py-3 text-[14px] leading-[1.5] text-[#4A4A4A] break-keep lg:flex-row lg:items-center lg:gap-4 lg:rounded-[16px] lg:px-5 lg:py-3.5 lg:text-[17px] xl:whitespace-nowrap">
                <strong className="flex-none text-[15px] font-extrabold text-[#D94E0F] lg:min-w-42.5 lg:text-[18px]">
                  함께 의견을 나눕니다
                </strong>
                선생님 그리고 또래 친구들과 의견을 나누며 생각을 넓힙니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
