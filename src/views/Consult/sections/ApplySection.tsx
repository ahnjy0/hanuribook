import Link from "next/link";
import type { ConsultVals } from "../useConsult";

type Props = Pick<
  ConsultVals,
  | "agree"
  | "done"
  | "faqs"
  | "grade"
  | "grades"
  | "notDone"
  | "submit"
  | "toggleAgree"
  | "phoneAuth"
  | "address"
  | "hopeTimes"
>;

const INPUT =
  "box-border h-13 w-full min-w-0 rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]";
// 입력칸 오른쪽 보조 버튼(인증번호 받기·확인·주소 검색): 모두 같은 너비(88px)로 고정해
// 휴대폰 번호·인증번호·주소 입력칸의 너비도 서로 같아지게 함. 좌우 여백을 줄이려고 글자 13px
const SIDE_BTN =
  "h-13 w-[88px] flex-none cursor-pointer rounded-[12px] border border-[#F26522] bg-white px-0 font-[family-name:inherit] text-[13px] font-bold whitespace-nowrap text-[#C2410C] disabled:cursor-default disabled:border-[#E4E4E4] disabled:text-[#8A8A8A]";

export default function ApplySection({
  agree,
  done,
  faqs,
  grade,
  grades,
  notDone,
  submit,
  toggleAgree,
  phoneAuth: pa,
  address,
  hopeTimes,
}: Props) {
  return (
    <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 gap-4 px-5 pt-5 pb-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start lg:gap-7">
      {done && (
        <section
          className="flex flex-col items-center gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-6 py-9 text-center"
          aria-live="polite"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FFF1E7]">
            <svg
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F26522"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 5 5L20 7" />
            </svg>
          </span>
          <h2 className="m-0 text-[22px] font-extrabold">무료 상담 신청이 완료되었습니다</h2>
          <p className="m-0 text-[15px] leading-[1.6] text-[#333333]">
            {`${grade} 맞춤 상담을 위해`}
            <br />
            2~3일 이내에 한우리 선생님이 상담전화를 드립니다.
          </p>
          <div className="grid w-full grid-cols-2 gap-2 pt-1.5">
            <Link
              className="flex h-13 items-center justify-center rounded-[12px] bg-[#EEEEEF] text-[15px] font-bold text-[#222222] no-underline"
              href="/"
            >
              홈으로
            </Link>
            <Link
              className="flex h-13 items-center justify-center rounded-[12px] bg-[#F26522] text-[15px] font-bold text-white no-underline"
              href="/centers"
            >
              가까운 센터 보기
            </Link>
          </div>
        </section>
      )}
      {notDone && (
        <form className="flex flex-col gap-4" aria-label="무료 상담 신청서">
          <fieldset className="m-0 flex flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
            <legend className="float-left flex w-full items-center justify-between p-0">
              <span className="flex items-center gap-2 text-[20px] font-extrabold">
                <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
                자녀 학년 선택<span className="text-[13px] font-semibold text-[#C2410C]">(필수)</span>
                <span className="text-[13px] font-medium text-[#555555]">중복 선택 가능</span>
              </span>
            </legend>
            <div className="grid grid-cols-4 gap-2" role="group" aria-label="자녀 학년 (중복 선택 가능)">
              {grades.map((g, i) => (
                <button
                  key={i}
                  className="h-13 cursor-pointer rounded-[14px] font-[family-name:inherit] text-[15px]"
                  style={{ border: g.border, background: g.bg, color: g.fg, fontWeight: g.weight }}
                  type="button"
                  aria-pressed={g.sel}
                  onClick={g.pick}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="m-0 flex flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
            <legend className="float-left flex w-full items-center gap-2 p-0 text-[20px] font-extrabold">
              <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
              보호자 연락처 정보<span className="text-[13px] font-semibold text-[#C2410C]">(필수)</span>
            </legend>
            <p className="m-0 text-[14px] text-[#333333]">
              가까운 지역 센터 또는 전담 지도교사가 배정됩니다.
            </p>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#222222]" htmlFor="c-name">
                보호자 성함
              </label>
              <input
                className="box-border h-13 w-full rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]"
                id="c-name"
                type="text"
                autoComplete="name"
                placeholder="예: 김민서"
              />
            </div>
            {/* 휴대폰 번호 + 인증 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#222222]" htmlFor="c-phone">
                휴대폰 번호
              </label>
              <div className="flex gap-2">
                <input
                  className={INPUT}
                  id="c-phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  placeholder="010-1234-5678"
                  value={pa.phone}
                  onChange={(e) => pa.changePhone(e.target.value)}
                  readOnly={pa.verified}
                />
                <button className={SIDE_BTN} type="button" onClick={pa.sendCode} disabled={pa.verified}>
                  {pa.codeSent ? "재전송" : "인증번호 받기"}
                </button>
              </div>
              {pa.codeSent && !pa.verified && (
                <div className="flex gap-2">
                  <span className="relative block min-w-0 flex-1">
                    <label className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]" htmlFor="c-code">
                      인증번호
                    </label>
                    <input
                      className={`${INPUT} pr-16`}
                      id="c-code"
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      placeholder="인증번호 6자리"
                      value={pa.code}
                      onChange={(e) => pa.changeCode(e.target.value)}
                    />
                    {/* 남은 시간 */}
                    <span
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-[14px] font-semibold text-[#D93025]"
                      aria-live="off"
                    >
                      {pa.timer}
                    </span>
                  </span>
                  <button className={SIDE_BTN} type="button" onClick={pa.confirmCode}>
                    확인
                  </button>
                </div>
              )}
              {pa.msg && (
                <p
                  className={`m-0 text-[13px] ${pa.verified ? "font-semibold text-[#15803D]" : "text-[#C2410C]"}`}
                  role="status"
                >
                  {pa.verified ? "✓ " : ""}
                  {pa.expired ? "입력 시간이 지났습니다. 인증번호를 다시 받아 주세요." : pa.msg}
                </p>
              )}
            </div>
            {/* 거주 지역: 주소 검색으로 입력 */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-[#222222]">거주 지역 (가까운 지점 연결)</span>
              <div className="flex gap-2">
                <label className="block min-w-0 flex-1">
                  <span className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]">주소</span>
                  <input
                    className={`${INPUT} cursor-pointer`}
                    type="text"
                    readOnly
                    placeholder="주소 검색을 눌러 주세요"
                    value={address.address ? `(${address.zonecode}) ${address.address}` : ""}
                    onClick={address.search}
                  />
                </label>
                <button className={SIDE_BTN} type="button" onClick={address.search}>
                  주소 검색
                </button>
              </div>
              {address.address && (
                <label className="block">
                  <span className="absolute h-0.25 w-0.25 overflow-hidden [clip:rect(0_0_0_0)]">상세 주소</span>
                  <input
                    className={INPUT}
                    type="text"
                    autoComplete="address-line2"
                    placeholder="상세 주소 (선택)"
                    value={address.detail}
                    onChange={(e) => address.changeDetail(e.target.value)}
                  />
                </label>
              )}
              {address.err && <p className="m-0 text-[13px] text-[#C2410C]">{address.err}</p>}
            </div>
            {/* 상담 희망 시간 (단일 선택) */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-semibold text-[#222222]" id="c-time">
                상담 희망 시간
              </span>
              <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-labelledby="c-time">
                {hopeTimes.map((t) => (
                  <label
                    key={t.label}
                    className={`flex h-12 cursor-pointer items-center gap-2.5 rounded-[12px] border px-3.5 text-[15px] ${
                      t.sel ? "border-[#F26522] bg-[#FFF1E8] font-bold text-[#C2410C]" : "border-[#E4E4E4] bg-white text-[#1F1F1F]"
                    }`}
                  >
                    <input
                      className="m-0 h-5 w-5 flex-none accent-[#F26522]"
                      type="radio"
                      name="hope-time"
                      checked={t.sel}
                      onChange={t.pick}
                    />
                    {t.label}
                  </label>
                ))}
              </div>
              <p className="m-0 text-[12px] leading-[1.5] text-[#555555]">
                ※ 담당교사가 수업 중이거나 최초 연락 시 연결되지 않은 경우, 희망 시간 외에 연락드릴 수 있습니다.
              </p>
            </div>
            <label className="flex cursor-pointer items-start gap-3 rounded-[14px] bg-[#F7F7F8] p-4">
              <input
                className="mx-0 mt-0.25 mb-0 h-5.5 w-5.5 flex-none accent-[#F26522] placeholder:text-[#8A8A8A]"
                type="checkbox"
                checked={agree}
                onChange={toggleAgree}
              />
              <span className="flex flex-col gap-1.5">
                <span className="text-[14px] leading-[1.5] font-semibold">
                  [필수] 개인정보 수집 및 상담 안내를 위한 연락에 동의합니다.
                </span>
                <span className="flex flex-col gap-0.5 text-[12px] leading-[1.5] text-[#555555]">
                  <span>
                    개인정보 수집·이용목적: 한우리독서토론논술 교육서비스 상담 및 무료체험 안내, 경품제공,
                    수강등록여부 확인, 무료체험 신청이력 관리
                  </span>
                  <span>수집하려는 개인정보의 항목: 보호자성명, 보호자휴대전화번호, 자녀학년, 거주지역</span>
                  <span>개인정보의 보유 및 이용 기간: 상담 신청일로부터 1년</span>
                </span>
              </span>
            </label>
            <p className="m-0 flex items-center gap-2.5 rounded-[14px] bg-[#EAF2FF] px-4 py-3.5 text-[13px] leading-[1.5] text-[#2A4A80]">
              <svg
                className="flex-none"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#2F5AA8"
              >
                <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5z" />
                <path d="m9 12 2 2 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              </svg>
              신청 완료 후 한우리 선생님에게 상담전화를 받기까지 2~3일 소요됩니다.
            </p>
            <button
              className="h-14 cursor-pointer rounded-[14px] border-0 bg-[#F26522] font-[family-name:inherit] text-[17px] font-bold text-white"
              type="button"
              onClick={submit}
            >
              무료 상담 신청 완료하기 →
            </button>
          </fieldset>
        </form>
      )}
      <aside
        className="flex flex-col gap-3 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5"
        aria-labelledby="faq-h"
      >
        <h2 className="m-0 flex items-center gap-2 text-[18px] font-extrabold" id="faq-h">
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D94E0F"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
          </svg>
          신청 전 자주 묻는 질문
        </h2>
        {faqs.map((f, i) => (
          <div key={i} className="rounded-[16px] bg-[#F7F7F8]">
            <button
              className="flex min-h-13 w-full cursor-pointer items-center justify-between gap-2.5 border-0 bg-transparent px-4 py-3.5 text-left font-[family-name:inherit] text-[15px] font-bold text-[#1F1F1F]"
              type="button"
              aria-expanded={f.exp}
              onClick={f.toggle}
            >
              {`Q. ${f.q}`}
              <span className="text-[#555555]" aria-hidden="true">
                {f.icon}
              </span>
            </button>
            {f.open && <p className="m-0 px-4 pt-0 pb-4 text-[14px] leading-[1.7] text-[#333333]">{f.a}</p>}
          </div>
        ))}
      </aside>
    </div>
  );
}
