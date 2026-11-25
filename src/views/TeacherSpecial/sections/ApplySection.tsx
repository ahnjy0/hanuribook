"use client";

import { useState } from "react";
import { openPostcode } from "@/views/Consult/postcode";
import Title, { Section } from "./Title";

// 입력칸: 수업상담 · 온라인 설명회 신청서와 같은 회색 바탕 칸
const INPUT =
  "box-border h-13 w-full min-w-0 rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]";

/**
 * 교사특별반 상담 신청: 지도교사 입문과정과 같은 왼쪽 정렬 타일 아이콘 제목 + 수업상담 신청서와 같은 양식
 * 데스크톱: 왼쪽 신청자 정보 카드 · 오른쪽 동의 · 안내 · 신청 버튼(1:1)
 * ※ 정적 사이트라 실제 접수(서버 전송)는 아직 없음 — 필수 항목 확인 후 완료 카드만 보여 줌
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
    <div>
      <Section id="ts-apply-h">
        <div id="ts-apply" className="scroll-mt-4" />
        <Title id="ts-apply-h" icon="start">
          교사특별반 상담 신청
        </Title>
        {done ? (
          <div className="flex flex-col items-center gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-6 py-9 text-center" role="status">
            <span className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FFF1E7]" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
            </span>
            <strong className="text-[22px] font-extrabold">상담 신청이 완료되었습니다</strong>
            <p className="m-0 text-[15px] leading-[1.6] text-[#333333]">최대 3일 이내(주말 및 휴일 제외)에 연락 드립니다.</p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-5"
            aria-label="한우리 교사특별반 상담신청서"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className="m-0 flex flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
              <legend className="float-left flex w-full items-center gap-2 p-0 text-[20px] font-extrabold">
                <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
                신청자 정보<span className="text-[13px] font-semibold text-[#C2410C]">(필수)</span>
              </legend>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#222222]" htmlFor="ts-name">
                  성명
                </label>
                <input className={INPUT} id="ts-name" type="text" autoComplete="name" placeholder="성명을 입력해 주세요." value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#222222]" htmlFor="ts-phone">
                  휴대전화번호
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
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#222222]" htmlFor="ts-addr">
                  주소
                </label>
                <input className={`${INPUT} cursor-pointer`} id="ts-addr" type="text" readOnly placeholder="주소검색(클릭하세요)" value={addr} onClick={search} />
                {addrErr && <p className="m-0 text-[13px] text-[#C2410C]">{addrErr}</p>}
              </div>
            </fieldset>
            <div className="flex flex-col gap-4">
              {/* 필수 동의 2개: 수업상담과 같은 회색 상자 */}
              <div className="flex flex-col gap-3 rounded-[14px] bg-[#F7F7F8] p-4">
                {[
                  { key: "c", label: "[필수] 개인정보 수집 · 이용 동의", on: agree, set: setAgree },
                  { key: "t", label: "[필수] 개인정보 제3자 제공 동의", on: agreeThird, set: setAgreeThird },
                ].map((a) => (
                  <label key={a.key} className="flex cursor-pointer items-start gap-3">
                    <input className="mx-0 mt-0.25 mb-0 h-5.5 w-5.5 flex-none accent-[#F26522]" type="checkbox" checked={a.on} onChange={() => a.set(!a.on)} />
                    <span className="text-[14px] leading-[1.5] font-semibold">{a.label}</span>
                  </label>
                ))}
              </div>
              {/* 안내: 수업상담과 같은 파란 상자 */}
              <p className="m-0 flex items-center gap-2.5 rounded-[14px] bg-[#EAF2FF] px-4 py-3.5 text-[13px] leading-[1.5] break-keep text-[#2A4A80]">
                <svg className="flex-none" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="#2F5AA8">
                  <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5z" />
                  <path d="m9 12 2 2 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                </svg>
                상담 신청 후 최대 3일 이내(주말 및 휴일 제외)에 기재하신 휴대폰 번호로 연락 드립니다.
              </p>
              {msg && (
                <p className="m-0 text-center text-[13px] text-[#C2410C]" role="alert">
                  {msg}
                </p>
              )}
              <button
                className="h-14 cursor-pointer rounded-[14px] border-0 bg-[#F26522] font-[family-name:inherit] text-[17px] font-bold text-white"
                type="button"
                onClick={submit}
              >
                교사특별반 상담 신청하기 →
              </button>
            </div>
          </form>
        )}
      </Section>
    </div>
  );
}
