export default function InfoSection() {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-10 pb-12 lg:pt-24 lg:pb-24" aria-labelledby="s-info">
      <div className="flex flex-col gap-2.5 rounded-[20px] bg-[#F7F7F8] p-5">
        <h2 className="m-0 text-[17px] font-bold" id="s-info">
          특강 신청 안내
        </h2>
        <ul className="m-0 pl-4.5 text-[14px] leading-[1.8] text-[#4A4A4A]">
          <li>특강은 센터별로 개설 일정과 정원이 다릅니다.</li>
          <li>정규 회원은 특강 수강료 할인 혜택이 있습니다. [할인율]</li>
          <li>신청 후 담당 센터에서 개강 일정을 안내해 드립니다.</li>
        </ul>
      </div>
    </section>
  );
}
