"use client";

import { useState } from "react";
import TitleIcon from "@/views/Program/sections/TitleIcon";

// 입력칸: 수업상담 신청서와 같은 회색 바탕 칸
const INPUT =
  "box-border h-13 w-full min-w-0 rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]";

/** 궁금한 점(복수 선택) — 마지막 '기타'는 주관식 칸과 함께 */
const TOPICS = ["교사 활동 시작 전 준비 사항", "교사 활동 형태(수업 시간 및 방식 등)", "교사 수익 구조", "회원 모집 방법", "기타_주관식 서술"];
const ETC = TOPICS[TOPICS.length - 1];
const ETC_MAX = 150;

/**
 * 한우리 지도교사 온라인 설명회 신청서: 성명 · 휴대전화번호 · 궁금한 점(복수 선택 + 기타 주관식 150자) · 개인정보 동의(필수)
 * ※ 정적 사이트라 실제 접수(서버 전송)는 아직 없음 — 필수 항목 확인 후 완료 문구만 보여 줌
 * ※ 개인정보 수집·이용 안내의 세부 항목(목적 · 항목 · 기간)은 받은 이미지에서 잘려 있어 머리글만 넣음 — 문구를 받으면 채울 것
 */
export default function ApplySection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [etc, setEtc] = useState("");
  const [agree, setAgree] = useState(false);
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);

  const toggle = (t: string) => setTopics((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));
  const etcOn = topics.includes(ETC);

  const submit = () => {
    if (!name.trim()) return setMsg("성명을 입력해 주세요.");
    if (!/^01\d{8,9}$/.test(phone)) return setMsg("휴대전화번호를 정확히 입력해 주세요.");
    if (etcOn && etc.trim().length < 10) return setMsg("기타 내용은 10자 이상 입력해 주세요.");
    if (!agree) return setMsg("개인정보 수집·이용에 동의해 주세요.");
    setMsg("");
    setDone(true);
  };

  return (
    // 왼쪽 정렬 타일 아이콘 제목 + 수업상담 신청서와 같은 양식(Seminar 에서 데스크톱은 설명회 안내 오른쪽에 나란히)
    <section className="flex scroll-mt-4 flex-col gap-3.5 pt-12 lg:gap-5 lg:pt-14" id="se-apply" aria-labelledby="se-form">
      <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="se-form">
        <TitleIcon kind="start" />
        온라인 설명회 신청
      </h2>
      {done ? (
        // 신청 완료: 수업상담 완료 카드와 같은 모양(주황 체크 동그라미 + 제목 + 안내)
        <div className="flex flex-col items-center gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-6 py-9 text-center" role="status">
          <span className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FFF1E7]" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 5 5L20 7" />
            </svg>
          </span>
          <strong className="text-[22px] font-extrabold">온라인 설명회 신청이 완료되었습니다</strong>
          <p className="m-0 text-[15px] leading-[1.6] text-[#333333]">신청하신 휴대전화번호로 안내드리겠습니다.</p>
        </div>
      ) : (
        // 수업상담 신청서와 같은 양식: 묶음마다 흰 카드(fieldset) + '• 제목 (필수)' 머리, 회색 입력칸, 회색 동의 상자, 주황 큰 버튼
        <form className="flex flex-col gap-4" aria-label="한우리 지도교사 온라인 설명회 신청" onSubmit={(e) => e.preventDefault()}>
          <fieldset className="m-0 flex flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
            <legend className="float-left flex w-full items-center gap-2 p-0 text-[20px] font-extrabold">
              <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
              신청자 정보<span className="text-[13px] font-semibold text-[#C2410C]">(필수)</span>
            </legend>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#222222]" htmlFor="se-name">
                성명
              </label>
              <input className={INPUT} id="se-name" type="text" autoComplete="name" placeholder="성명을 입력해 주세요." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#222222]" htmlFor="se-phone">
                휴대전화번호
              </label>
              <input
                className={INPUT}
                id="se-phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="- 없이 번호를 정확하게 입력해 주세요."
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
              />
            </div>
          </fieldset>
          {/* 궁금한 점: 수업상담 '상담 희망 시간'과 같은 테두리 선택 칸(복수 선택), 기타를 고르면 주관식 칸 사용 */}
          <fieldset className="m-0 flex flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
            <legend className="float-left flex w-full items-center gap-2 p-0 text-[20px] font-extrabold">
              <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
              궁금한 점<span className="text-[13px] font-medium text-[#555555]">복수 선택 가능</span>
            </legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {TOPICS.map((t) => {
                const on = topics.includes(t);
                return (
                  <label
                    key={t}
                    className={`flex min-h-12 cursor-pointer items-center gap-2 rounded-[12px] border px-3 py-2 text-[13px] lg:gap-2.5 lg:px-3.5 lg:text-[15px] ${
                      on ? "border-[#F26522] bg-[#FFF1E8] font-bold text-[#C2410C]" : "border-[#E4E4E4] bg-white text-[#1F1F1F]"
                    }`}
                  >
                    <input className="m-0 h-5 w-5 flex-none accent-[#F26522]" type="checkbox" checked={on} onChange={() => toggle(t)} />
                    {t}
                  </label>
                );
              })}
            </div>
            <div className="flex flex-col gap-1">
              <label className="sr-only" htmlFor="se-etc">
                기타 궁금한 점
              </label>
              <textarea
                className="box-border h-24 w-full resize-none rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] p-4 font-[family-name:inherit] text-[15px] text-[#1F1F1F] placeholder:text-[#8A8A8A] disabled:cursor-not-allowed disabled:opacity-60"
                id="se-etc"
                placeholder="기타를 선택하면 입력할 수 있어요. (최소 10자, 최대 150자)"
                maxLength={ETC_MAX}
                disabled={!etcOn}
                value={etc}
                onChange={(e) => setEtc(e.target.value)}
              />
              <span className="text-right text-[12px] text-[#777777]" aria-live="polite">
                {etc.length}/{ETC_MAX}
              </span>
            </div>
          </fieldset>
          {/* 개인정보 동의: 수업상담과 같은 회색 상자 + 체크(필수) */}
          <div className="flex flex-col gap-2 rounded-[14px] bg-[#F7F7F8] p-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input className="mx-0 mt-0.25 mb-0 h-5.5 w-5.5 flex-none accent-[#F26522]" type="checkbox" checked={agree} onChange={() => setAgree((v) => !v)} />
              <span className="text-[14px] leading-[1.5] font-semibold">[필수] 개인정보 수집·이용에 동의합니다.</span>
            </label>
            <p className="m-0 pl-8.5 text-[12px] leading-[1.6] break-keep text-[#555555]">
              한우리열린교육은 교사활동 화상안내 서비스를 위해 아래와 같이 개인정보를 수집이용합니다. 수집된 개인정보는 교사활동 상담 외 목적으로 사용하지 않습니다.
            </p>
          </div>
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
            온라인 설명회 신청 완료하기 →
          </button>
        </form>
      )}
    </section>
  );
}
