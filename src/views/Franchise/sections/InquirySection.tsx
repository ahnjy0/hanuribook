import type { FranchiseVals } from "../useFranchise";

type Props = Pick<FranchiseVals, "done" | "submit">;

export default function InquirySection({ done, submit }: Props) {
  return (
    <section className="mx-auto my-0 box-border max-w-[1200px] px-5 pt-11 pb-12" aria-labelledby="f-form">
      <form
        className="mx-auto my-0 flex max-w-[720px] flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5"
        aria-labelledby="f-form"
      >
        <h2 className="m-0 text-[20px] font-extrabold" id="f-form">
          센터 개설 문의
        </h2>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#333333]" htmlFor="f-name">
              이름
            </label>
            <input
              className="box-border h-13 w-full rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-3.5 py-0 font-[family-name:inherit] text-[16px] placeholder:text-[#8A8A8A]"
              id="f-name"
              type="text"
              placeholder="홍길동"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#333333]" htmlFor="f-tel">
              연락처
            </label>
            <input
              className="box-border h-13 w-full rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-3.5 py-0 font-[family-name:inherit] text-[16px] placeholder:text-[#8A8A8A]"
              id="f-tel"
              type="tel"
              placeholder="010-0000-0000"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#333333]" htmlFor="f-area">
            희망 지역
          </label>
          <input
            className="box-border h-13 w-full rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-3.5 py-0 font-[family-name:inherit] text-[16px] placeholder:text-[#8A8A8A]"
            id="f-area"
            type="text"
            placeholder="예: 경기 성남시 분당구"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#333333]" htmlFor="f-msg">
            문의 내용
          </label>
          <textarea
            className="box-border w-full resize-y rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] p-3.5 font-[family-name:inherit] text-[16px] placeholder:text-[#8A8A8A]"
            id="f-msg"
            rows={4}
            placeholder="교육 경력, 희망 개설 유형 등을 자유롭게 적어주세요."
          />
        </div>
        <label className="flex items-center gap-2.5 text-[14px]">
          <input className="m-0 h-5.5 w-5.5 accent-[#F26522] placeholder:text-[#8A8A8A]" type="checkbox" />
          [필수] 개인정보 수집 및 이용 동의
        </label>
        <button
          className="h-14 cursor-pointer rounded-[14px] border-0 bg-[#F26522] font-[family-name:inherit] text-[17px] font-bold text-white"
          type="button"
          onClick={submit}
        >
          개설 문의 보내기
        </button>
        {done && (
          <p
            className="m-0 rounded-[14px] bg-[#E8F5EE] px-4 py-3.5 text-[14px] leading-[1.5] font-semibold text-[#1F5F3C]"
            aria-live="polite"
          >
            ✓ 개설 문의가 접수되었습니다. 담당자가 3영업일 이내에 연락드립니다.
          </p>
        )}
        <p className="m-0 text-center text-[13px] text-[#6B6B6B]">
          {"사업 문의 전화 "}
          <a className="font-bold text-[#C2410C] hover:text-[#9A3412]" href="tel:15771909">
            1577-1909
          </a>
        </p>
      </form>
    </section>
  );
}
