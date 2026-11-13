export default function FormCardSection() {
  return (
    <section className="grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-4.5">
        <h2 className="m-0 text-[22px] font-extrabold">05 Input · Select · Checkbox</h2>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#333333]" htmlFor="sg-name">
            보호자 성함
          </label>
          <input
            className="h-13 rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[15px] text-[#1F1F1F]"
            id="sg-name"
            placeholder="예: 김민서"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#333333]" htmlFor="sg-phone">
            휴대폰 번호 · Focus
          </label>
          <input
            className="h-13 rounded-[12px] border-[1.5px] border-[#F26522] bg-white px-4 py-0 font-[family-name:inherit] text-[15px] text-[#1F1F1F]"
            id="sg-phone"
            defaultValue="010-1234-5678"
          />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-[#333333]">
            시/도
            <select className="h-13 rounded-[12px] border border-[#E4E4E4] bg-white px-3.5 py-0 font-[family-name:inherit] text-[15px]">
              <option>서울특별시</option>
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-[#333333]">
            구/군
            <select className="h-13 rounded-[12px] border border-[#E4E4E4] bg-white px-3.5 py-0 font-[family-name:inherit] text-[15px]">
              <option>서초구</option>
            </select>
          </label>
        </div>
        <label className="flex items-center gap-2.5 text-[14px]">
          <input className="m-0 h-5.5 w-5.5 accent-[#F26522]" type="checkbox" defaultChecked />
          [필수] 개인정보 수집 및 이용 동의
        </label>
      </div>
      <div className="flex flex-col gap-4.5">
        <h2 className="m-0 text-[22px] font-extrabold">06 Card</h2>
        <article className="flex flex-col gap-3 rounded-[20px] border border-[#EEEEEE] bg-white p-5">
          <div className="flex justify-between">
            <span className="rounded-[6px] bg-[#FFF1E7] px-2 py-1 text-[12px] font-bold text-[#C2410C]">
              우수 센터
            </span>
            <strong className="text-[18px] text-[#C2410C]">850m</strong>
          </div>
          <h3 className="m-0 text-[20px] font-extrabold">서초지부</h3>
          <div className="rounded-[14px] bg-[#F7F7F8] p-3.5 text-[14px] leading-[1.6] text-[#4A4A4A]">
            서울 서초구 신반포로 194 본관 4층
            <br />
            화~토 10:00 - 19:30
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="flex h-12 items-center justify-center rounded-[12px] bg-[#EEEEEF] font-semibold">
              전화 문의
            </span>
            <span className="flex h-12 items-center justify-center rounded-[12px] bg-[#F26522] font-bold text-white">
              상담 예약하기
            </span>
          </div>
        </article>
        <div className="grid grid-cols-3 gap-3 text-[12px] text-[#6B6B6B]">
          <div className="rounded-[20px] border border-[#EEEEEE] bg-white p-3.5">
            Radius 20 · Card
            <br />
            Border 1px #EEEEEE · No shadow
          </div>
          <div className="rounded-[14px] bg-[#F7F7F8] p-3.5">
            Radius 14 · Info box
            <br />
            No shadow
          </div>
          <div className="rounded-[28px] bg-[#FFF4EC] p-3.5">
            Radius 28 · Section
            <br />
            Primary 50
          </div>
        </div>
      </div>
    </section>
  );
}
