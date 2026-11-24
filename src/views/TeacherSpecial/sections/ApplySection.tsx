"use client";

import { useState } from "react";
import { openPostcode } from "@/views/Consult/postcode";

const INPUT =
  "box-border h-13 w-full min-w-0 rounded-[10px] border border-solid border-[#E4E4E4] bg-white px-4 py-0 font-[family-name:inherit] text-[15px] text-[#1F1F1F] placeholder:text-[#9A9A9A] lg:text-[16px]";

/** 필수 표시 별(주황) */
function Star() {
  return (
    <span className="text-[#F26522]" aria-hidden="true">
      ★
    </span>
  );
}

/**
 * 상담 신청서: '망설이지 말고, 지금!' 문구 + 흰 카드 양식(성명 · 휴대전화번호 · 주소 · 동의 2개 · 신청하기)
 * ※ 정적 사이트라 실제 접수(서버 전송)는 아직 없음 — 필수 항목 확인 후 완료 문구만 보여 줌
 * ※ 동의 '자세히보기' 내용(교사 상담용 개인정보 문구)은 받으면 모달로 연결할 것
 */
export default function ApplySection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [addrErr, setAddrErr] = useState("");
  const [agree, setAgree] = useState(false);
  const [agreeThird, setAgreeThird] = useState(false);
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);

  const search = () => {
    setAddrErr("");
    openPostcode((d) => setAddr(`(${d.zonecode}) ${d.roadAddress || d.jibunAddress}`)).catch(() =>
      setAddrErr("주소 검색을 열 수 없습니다. 잠시 후 다시 시도해 주세요."),
    );
  };

  const submit = () => {
    if (!name.trim()) return setMsg("성명을 입력해 주세요.");
    if (!/^01\d{8,9}$/.test(phone)) return setMsg("휴대전화번호를 정확히 입력해 주세요.");
    if (!addr) return setMsg("주소를 검색해 주세요.");
    if (!agree || !agreeThird) return setMsg("필수 동의 항목에 모두 동의해 주세요.");
    setMsg("");
    setDone(true);
  };

  return (
    <section className="bg-[#F7EFE3] px-5 pt-14 pb-16 lg:pt-20 lg:pb-24" id="ts-apply" aria-labelledby="ts-apply-h">
      <div className="mx-auto flex max-w-[640px] flex-col gap-8 lg:gap-10">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="m-0 text-[16px] text-[#5A4636] lg:text-[20px]">망설이지 말고, 지금!</p>
          <h2 className="m-0 text-[24px] leading-[1.4] font-extrabold break-keep text-[#4A3A2E] lg:text-[34px]" id="ts-apply-h">
            한우리 선생님으로
            <br />
            넥스트 커리어를 시작하세요!
          </h2>
        </div>
        <div className="flex flex-col gap-5 rounded-[20px] bg-white px-5 py-7 shadow-[0_8px_24px_rgba(90,70,54,0.08)] lg:px-10 lg:py-10">
          <div className="flex flex-col gap-1">
            <h3 className="m-0 text-center text-[21px] font-extrabold text-[#1F1F1F] lg:text-[26px]">한우리 교사특별반 상담신청서</h3>
            <p className="m-0 text-right text-[12px] text-[#666666] lg:text-[13px]">
              <Star /> 표시는 필수 항목입니다.
            </p>
          </div>
          {done ? (
            <p className="m-0 rounded-[14px] bg-[#FFF4EC] px-5 py-8 text-center text-[16px] leading-[1.6] font-bold break-keep text-[#3B2E24] lg:text-[18px]" role="status">
              상담 신청이 완료되었습니다.
              <br />
              최대 3일 이내(주말 및 휴일 제외)에 연락 드립니다.
            </p>
          ) : (
            <form className="flex flex-col gap-5" aria-label="한우리 교사특별반 상담신청서" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-1.5 text-[15px] font-bold text-[#2B2B2B] lg:text-[16px]" htmlFor="ts-name">
                  <Star /> 성명
                </label>
                <input className={INPUT} id="ts-name" type="text" autoComplete="name" placeholder="성명을 입력해 주세요." value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-1.5 text-[15px] font-bold text-[#2B2B2B] lg:text-[16px]" htmlFor="ts-phone">
                  <Star /> 휴대전화번호
                </label>
                <input
                  className={INPUT}
                  id="ts-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="- 없이 번호를 정확하게 입력해 주세요."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-1.5 text-[15px] font-bold text-[#2B2B2B] lg:text-[16px]" htmlFor="ts-addr">
                  <Star /> 주소
                </label>
                <input className={`${INPUT} cursor-pointer`} id="ts-addr" type="text" readOnly placeholder="주소검색(클릭하세요)" value={addr} onClick={search} />
                {addrErr && <p className="m-0 text-[13px] text-[#C2410C]">{addrErr}</p>}
              </div>
              {/* 필수 동의 2개 */}
              <div className="flex flex-col gap-3 pt-1">
                {[
                  { key: "c", label: "개인정보 수집 · 이용 동의(필수)", on: agree, set: setAgree },
                  { key: "t", label: "개인정보 제3자 제공 동의(필수)", on: agreeThird, set: setAgreeThird },
                ].map((a) => (
                  <label key={a.key} className="flex cursor-pointer items-center gap-2.5 text-[14px] font-bold text-[#2B2B2B] lg:text-[15px]">
                    <input className="m-0 h-5 w-5 flex-none accent-[#F26522]" type="checkbox" checked={a.on} onChange={() => a.set(!a.on)} />
                    {a.label}
                  </label>
                ))}
              </div>
              {msg && (
                <p className="m-0 text-center text-[13px] text-[#C2410C] lg:text-[14px]" role="alert">
                  {msg}
                </p>
              )}
              <button
                type="button"
                className="mx-auto h-13 w-full max-w-[240px] cursor-pointer rounded-full border-0 bg-[#FF6B35] font-[family-name:inherit] text-[17px] font-bold text-white lg:text-[18px]"
                onClick={submit}
              >
                신청하기
              </button>
            </form>
          )}
          <p className="m-0 text-[12px] leading-[1.6] break-keep text-[#666666] lg:text-[13px]">
            ※ 상담 신청 후 최대 3일 이내(주말 및 휴일 제외)에 기재하신 휴대폰 번호로 연락 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
