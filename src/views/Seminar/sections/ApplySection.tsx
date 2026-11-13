import type { SeminarVals } from "../useSeminar";

type Props = Pick<SeminarVals, "done" | "selLabel" | "sessions" | "submit">;

export default function ApplySection({ done, selLabel, sessions, submit }: Props) {
  return (
    <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 gap-4 px-5 pt-6 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-7">
      <section
        className="flex flex-col gap-3 rounded-[24px] bg-[#F7F7F8] px-5 py-5.5"
        aria-labelledby="se-ag"
      >
        <h2 className="m-0 text-[18px] font-extrabold" id="se-ag">
          설명회에서 다루는 내용
        </h2>
        <ol className="m-0 flex list-none flex-col gap-2.5 p-0">
          <li className="flex items-center gap-3 rounded-[14px] bg-white p-3">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-[#FFF1E7] text-[13px] font-extrabold text-[#C2410C]">
              01
            </span>
            <span className="text-[14px]">한우리 독서지도사는 어떤 일을 하나요?</span>
          </li>
          <li className="flex items-center gap-3 rounded-[14px] bg-white p-3">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-[#FFF1E7] text-[13px] font-extrabold text-[#C2410C]">
              02
            </span>
            <span className="text-[14px]">입문과정 · 교사특별반 커리큘럼</span>
          </li>
          <li className="flex items-center gap-3 rounded-[14px] bg-white p-3">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-[#FFF1E7] text-[13px] font-extrabold text-[#C2410C]">
              03
            </span>
            <span className="text-[14px]">수업 형태와 활동 방식 (방문·홈클럽·학원)</span>
          </li>
          <li className="flex items-center gap-3 rounded-[14px] bg-white p-3">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-[#FFF1E7] text-[13px] font-extrabold text-[#C2410C]">
              04
            </span>
            <span className="text-[14px]">{"현직 선생님 Q&A"}</span>
          </li>
        </ol>
        <div className="flex h-37.5 items-center justify-center rounded-[16px] bg-[#FFE6D5] text-center text-[13px] text-[#8A5A3C]">
          [이미지] 화상 설명회 화면 캡처
        </div>
      </section>
      <form
        className="flex flex-col gap-4 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5"
        aria-labelledby="se-form"
      >
        <h2 className="m-0 flex items-center gap-2 text-[20px] font-extrabold" id="se-form">
          <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
          설명회 일정 선택
        </h2>
        <div className="flex flex-col gap-2" role="radiogroup" aria-label="설명회 회차">
          {sessions.map((s, i) => (
            <button
              key={i}
              className="flex min-h-15 cursor-pointer items-center justify-between gap-2.5 rounded-[14px] px-4 py-3 text-left font-[family-name:inherit]"
              style={{ border: s.border, background: s.bg }}
              type="button"
              role="radio"
              aria-checked={s.sel}
              onClick={s.pick}
            >
              <span className="flex flex-col gap-0.5">
                <strong className="text-[15px] text-[#1F1F1F]">{s.date}</strong>
                <span className="text-[13px] text-[#6B6B6B]">{s.time}</span>
              </span>
              <span
                className="rounded-[6px] px-2 py-0.75 text-[12px] font-bold"
                style={{ background: s.chipBg, color: s.chipFg }}
              >
                {s.status}
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#333333]" htmlFor="se-name">
            이름
          </label>
          <input
            className="box-border h-13 w-full rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] placeholder:text-[#8A8A8A]"
            id="se-name"
            type="text"
            autoComplete="name"
            placeholder="이름을 입력해 주세요"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#333333]" htmlFor="se-phone">
            휴대폰 번호 (접속 링크 발송)
          </label>
          <input
            className="box-border h-13 w-full rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] placeholder:text-[#8A8A8A]"
            id="se-phone"
            type="tel"
            autoComplete="tel"
            placeholder="010-0000-0000"
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
        >{`${selLabel} 설명회 신청하기`}</button>
        {done && (
          <p
            className="m-0 rounded-[14px] bg-[#E8F5EE] px-4 py-3.5 text-[14px] leading-[1.5] font-semibold text-[#1F5F3C]"
            aria-live="polite"
          >{`✓ ${selLabel} 설명회 신청이 완료되었습니다. 접속 링크를 문자로 보내드립니다.`}</p>
        )}
      </form>
    </div>
  );
}
