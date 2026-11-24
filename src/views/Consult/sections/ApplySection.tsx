import Link from "next/link";
import type { ConsultVals } from "../useConsult";
import PrivacyModal, { PRIVACY_DOC, THIRD_PARTY_DOC } from "./PrivacyModal";

type Props = Pick<
  ConsultVals,
  | "agree"
  | "done"
  | "grade"
  | "grades"
  | "notDone"
  | "submit"
  | "toggleAgree"
  | "agreeThird"
  | "toggleAgreeThird"
  | "phoneAuth"
  | "address"
  | "hopeTimes"
>;

const INPUT =
  "box-border h-13 w-full min-w-0 rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]";
// 입력칸 오른쪽 보조 버튼(인증번호 받기·확인·주소 검색): 모두 같은 너비(88px)로 고정해
// 휴대폰 번호·인증번호·주소 입력칸의 너비도 서로 같아지게 함. 좌우 여백을 줄이려고 글자 13px
const SIDE_BTN =
  // 색: 테두리 없이 옅은 주황 바탕 + 진한 주황 글자(누를 수 없을 때는 회색 바탕)
  "h-13 w-[88px] flex-none cursor-pointer rounded-[12px] border-0 bg-[#FFDCC7] px-0 font-[family-name:inherit] text-[13px] font-bold whitespace-nowrap text-[#C2410C] disabled:cursor-default disabled:bg-[#E4E4E4] disabled:text-[#8A8A8A]";

export default function ApplySection({
  agree,
  done,
  grade,
  grades,
  notDone,
  submit,
  toggleAgree,
  agreeThird,
  toggleAgreeThird,
  phoneAuth: pa,
  address,
  hopeTimes,
}: Props) {
  return (
    // 자주 묻는 질문 영역을 없애 신청 양식만 한 열로
    <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-1 gap-4 px-5 pt-5 pb-10">
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
        // 데스크톱: 자녀 학년 선택(왼쪽) · 보호자 연락처 정보(오른쪽) 가로 배치, 위쪽 맞춤
        <form
          className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-5"
          aria-label="무료 상담 신청서"
        >
          <fieldset className="m-0 flex flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
            <legend className="float-left flex w-full items-center justify-between p-0">
              <span className="flex items-center gap-2 text-[20px] font-extrabold">
                <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
                자녀 학년 선택<span className="text-[13px] font-semibold text-[#C2410C]">(필수)</span>
                <span className="text-[13px] font-medium text-[#555555]">중복 선택 가능</span>
              </span>
            </legend>
            {/* 데스크톱: 왼쪽 열이라 4열 유지, 버튼은 작게(높이 44px) */}
            <div
              className="grid grid-cols-4 gap-2 lg:gap-1.5"
              role="group"
              aria-label="자녀 학년 (중복 선택 가능)"
            >
              {grades.map((g, i) => (
                <button
                  key={i}
                  className="h-13 cursor-pointer rounded-[14px] font-[family-name:inherit] text-[15px] lg:h-11 lg:rounded-[10px] lg:text-[14px]"
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
              보호자 정보<span className="text-[13px] font-semibold text-[#C2410C]">(필수)</span>
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
              {/* 인증 안내: 작은 회색 글자, 줄마다 · */}
              <ul className="m-0 mt-0.5 flex list-none flex-col gap-0.5 p-0 text-[12px] leading-[1.55] break-keep text-[#6B6B6B] lg:text-[13px]">
                <li>· 인증번호는 기재하신 휴대폰에 문자로 전송됩니다.</li>
                <li>· 본인 휴대폰번호가 아닐 경우, 인증에 제약이 있을 수 있습니다.</li>
                <li>
                  · 인증번호가 정상 수신되지 않을 때에는 스팸 문자함을 확인해주시고, 계속해서 안 될 경우 02-6276-2656 (평일
                  9시~18시)으로 전화 주시기 바랍니다.
                </li>
              </ul>
            </div>
            {/* 거주 지역: 주소 검색으로 입력 */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-[#222222]">거주 지역</span>
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
                    // 좁은 화면 2열에서도 한 줄로: 모바일 글자 13px · 줄바꿈 없음 · 여백 축소, 데스크톱은 15px
                    className={`flex h-12 cursor-pointer items-center gap-2 rounded-[12px] border px-3 text-[13px] whitespace-nowrap lg:gap-2.5 lg:px-3.5 lg:text-[15px] ${
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
            {/* 동의 체크 + '자세히보기'(안내 내용은 모달로) — 버튼은 label 밖이라 눌러도 체크가 바뀌지 않음
                한 회색 박스 안에 두 동의(수집·이용 / 제3자 제공)를 줄로 나눠 표시 */}
            <div className="flex flex-col gap-3 rounded-[14px] bg-[#F7F7F8] p-4">
              {[
                {
                  key: "collect",
                  checked: agree,
                  toggle: toggleAgree,
                  text: "[필수] 개인정보 수집 및 상담 안내를 위한 연락에 동의합니다.",
                  doc: PRIVACY_DOC,
                },
                {
                  key: "third",
                  checked: agreeThird,
                  toggle: toggleAgreeThird,
                  text: "[필수] 개인정보 제3자 제공에 동의합니다.",
                  doc: THIRD_PARTY_DOC,
                },
              ].map((a) => (
                <div key={a.key} className="flex items-center gap-3">
                  <label className="flex min-w-0 flex-1 cursor-pointer items-start gap-3">
                    <input
                      className="mx-0 mt-0.25 mb-0 h-5.5 w-5.5 flex-none accent-[#F26522]"
                      type="checkbox"
                      checked={a.checked}
                      onChange={a.toggle}
                    />
                    <span className="text-[14px] leading-[1.5] font-semibold">{a.text}</span>
                  </label>
                  <PrivacyModal id={`privacy-${a.key}`} doc={a.doc} checked={a.checked} toggle={a.toggle} />
                </div>
              ))}
            </div>
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
    </div>
  );
}
