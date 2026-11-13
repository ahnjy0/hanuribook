export default function SelfLearningSection() {
  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[760px] flex-col items-center gap-7 px-5 py-14 text-center"
      aria-labelledby="t-self"
    >
      <svg aria-hidden="true" width="44" height="34" viewBox="0 0 44 34" fill="none">
        <path d="M6 14h14l2 3 2-3h14v14H24l-2 3-2-3H6z" fill="#F7A23B" />
        <path d="M8 16h12v10H8zM24 16h12v10H24z" fill="#FFE29A" />
        <path d="M22 2v6M14 4l3 4M30 4l-3 4" stroke="#F7A23B" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <h2 className="mx-0 -mt-2.5 mb-0 text-[21px] leading-[1.5] font-semibold lg:text-[24px]" id="t-self">
        책 속에 담긴 생각과 지식에
        <br />
        <span className="font-extrabold text-[#E8590C]">아이 스스로 다다를 수 있도록</span>
      </h2>
      <div className="flex flex-col items-center">
        <p className="m-0 box-border flex h-55 w-55 items-center justify-center rounded-[50%] border-2 border-dashed border-[#F7C66B] bg-[#FFF9EC] p-6 text-[16px] leading-[1.6] text-[#333333]">
          지율이가 주인공이라면
          <br />
          어떻게 행동했을까?
        </p>
        <span className="h-14 w-0.25 bg-[#F7C66B]" aria-hidden="true" />
        <p className="m-0 box-border flex h-55 w-55 items-center justify-center rounded-[50%] border-2 border-dashed border-[#F7C66B] bg-[#FFF9EC] p-6 text-[16px] leading-[1.6] text-[#333333]">
          친구의 발표를 듣고
          <br />
          어떤 생각이 떠올라?
        </p>
      </div>
      <div className="flex flex-col items-center gap-2.5 pt-2">
        <p className="m-0 text-[19px] font-semibold">한우리 선생님은</p>
        <span className="bg-[#E8590C] px-3 py-1 text-[19px] font-extrabold text-white">충분한 교감 속</span>
        <p className="mx-0 mt-3.5 mb-0 text-[19px] leading-[1.55] font-semibold lg:text-[24px]">
          아이가 자기 생각을 꺼낼 수 있게
          <br />
          <span className="font-extrabold text-[#E8590C]">기다려주고 이끌어줍니다.</span>
        </p>
      </div>
    </section>
  );
}
