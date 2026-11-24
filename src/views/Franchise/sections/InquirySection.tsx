"use client";

import { useState, type ReactNode } from "react";
import TitleIcon from "@/views/Program/sections/TitleIcon";
import PrivacyModal, { type PrivacyDoc } from "@/views/Consult/sections/PrivacyModal";

/**
 * 센터 개설 문의 개인정보 수집 · 이용 동의(수업상담과 같은 모달)
 * ※ 수집 항목은 이 문의서의 입력 항목 그대로. 이용목적 · 보유기간 · 머리글 문구는 아직 받지 못해 '확인 필요'로 둠 — 실제 문구로 바꿀 것
 */
const FRANCHISE_PRIVACY_DOC: PrivacyDoc = {
  title: "개인정보 수집 및 이용 동의",
  intro: "확인 필요",
  items: [
    { k: "개인정보의 수집·이용목적", v: "확인 필요", em: true },
    { k: "수집하려는 개인정보의 항목", v: "희망 수업 형태, 이름, 성별, 연령, 연락처, 개설 희망 지역, 독서지도사 자격증 유무, 상담 내용, 희망 상담일" },
    { k: "개인정보의 보유 및 이용기간", v: "확인 필요", em: true },
  ],
  note: "확인 필요",
};

// 입력칸: 수업상담 · 온라인 설명회 신청서와 같은 회색 바탕 칸
const INPUT =
  "box-border h-13 w-full min-w-0 rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] px-4 py-0 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]";

/** 권역별 센터 개설 전화 문의 */
const PHONES: [string, string][] = [
  ["수도권, 강원/충청권", "02-6276-2666"],
  ["경상권", "051-463-6296"],
  ["호남권", "062-369-9011"],
];

/** 선택 칸(수업상담 '상담 희망 시간'과 같은 테두리 칸) */
function Choice({ on, onPick, children }: { on: boolean; onPick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      className={`flex h-12 cursor-pointer items-center justify-center rounded-[12px] border border-solid px-3 font-[family-name:inherit] text-[14px] lg:text-[15px] ${
        on ? "border-[#F26522] bg-[#FFF1E8] font-bold text-[#C2410C]" : "border-[#E4E4E4] bg-white text-[#1F1F1F]"
      }`}
      aria-pressed={on}
      onClick={onPick}
    >
      {children}
    </button>
  );
}

/** 항목 이름(작은 굵은 글) */
function Label({ htmlFor, children }: { htmlFor?: string; children: ReactNode }) {
  return htmlFor ? (
    <label className="text-[13px] font-semibold text-[#222222]" htmlFor={htmlFor}>
      {children}
    </label>
  ) : (
    <span className="text-[13px] font-semibold text-[#222222]">{children}</span>
  );
}

/**
 * 센터 개설 문의: 권역별 전화 문의 표 → 온라인 문의서(수업상담 신청서와 같은 모양)
 * 수업 형태 · 이름 · 성별 · 연령 · 연락처 · 개설 희망 지역 · 독서지도사 자격증 유무 · 상담 내용(모두 필수) → 동의 → 보내기
 * ※ 정적 사이트라 실제 접수(서버 전송)는 아직 없음 — 필수 항목 확인 후 완료 카드만 보여 줌
 */
export default function InquirySection() {
  const [mode, setMode] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const [area, setArea] = useState("");
  const [license, setLicense] = useState<string | null>(null);
  const [memo, setMemo] = useState("");
  const [date, setDate] = useState("");
  // 희망 상담일 최소값: 오늘(YYYY-MM-DD, 사용자 기기 날짜 기준)
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const [agree, setAgree] = useState(false);
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);

  const submit = () => {
    if (!mode) return setMsg("희망 수업 형태를 선택해 주세요.");
    if (!name.trim()) return setMsg("이름을 입력해 주세요.");
    if (!gender) return setMsg("성별을 선택해 주세요.");
    if (!age.trim()) return setMsg("연령을 입력해 주세요.");
    if (!/^0\d{8,10}$/.test(tel)) return setMsg("연락처를 정확히 입력해 주세요.");
    if (!area.trim()) return setMsg("개설 희망 지역을 입력해 주세요.");
    if (!license) return setMsg("독서지도사 자격증 유무를 선택해 주세요.");
    if (!memo.trim()) return setMsg("상담 내용을 입력해 주세요.");
    if (!date) return setMsg("희망 상담일을 선택해 주세요.");
    if (!agree) return setMsg("개인정보 수집 및 이용에 동의해 주세요.");
    setMsg("");
    setDone(true);
  };

  return (
    // 데스크톱: 왼쪽 안내가 길어 스크롤해도 문의서가 화면에 붙어 있게(sticky)
    <section className="flex scroll-mt-4 flex-col gap-3.5 pt-12 lg:sticky lg:top-4 lg:gap-5 lg:pt-14" id="f-form" aria-labelledby="f-form-h">
      <h2 className="m-0 flex items-center gap-2.5 text-[22px] font-extrabold lg:gap-3 lg:text-[30px]" id="f-form-h">
        <TitleIcon kind="start" />
        센터 개설 문의
      </h2>
      {/* 전화 문의: 권역별 번호 */}
      <div className="overflow-hidden rounded-[18px] border border-solid border-[#EEEEEE] bg-white">
        <p className="m-0 bg-[#F26522] py-2.5 text-center text-[16px] font-extrabold text-white lg:text-[17px]">센터 개설 전화 문의</p>
        <dl className="m-0 grid grid-cols-3">
          {PHONES.map(([k, v], i) => (
            <div key={k} className={`flex flex-col items-center gap-1 px-1 py-3 text-center ${i > 0 ? "border-0 border-l border-solid border-[#EEEEEE]" : ""}`}>
              <dt className="text-[12px] font-bold break-keep text-[#333333] lg:text-[13px]">{k}</dt>
              <dd className="m-0">
                <a className="text-[13px] font-bold text-[#C2410C] no-underline lg:text-[15px]" href={`tel:${v.replace(/-/g, "")}`}>
                  {v}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {done ? (
        <div className="flex flex-col items-center gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-6 py-9 text-center" role="status">
          <span className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-[#FFF1E7]" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 5 5L20 7" />
            </svg>
          </span>
          <strong className="text-[22px] font-extrabold">개설 문의가 접수되었습니다</strong>
          <p className="m-0 text-[15px] leading-[1.6] text-[#333333]">담당자가 확인 후 연락드립니다.</p>
        </div>
      ) : (
        <form className="flex flex-col gap-4" aria-label="센터 개설 문의서" onSubmit={(e) => e.preventDefault()}>
          <fieldset className="m-0 flex flex-col gap-3.5 rounded-[24px] border border-[#EEEEEE] bg-white px-5 py-5.5">
            <legend className="float-left flex w-full items-center gap-2 p-0 text-[20px] font-extrabold">
              <span className="h-2 w-2 rounded-[50%] bg-[#F26522]" aria-hidden="true" />
              문의자 정보<span className="text-[13px] font-semibold text-[#C2410C]">(모두 필수)</span>
            </legend>
            <div className="flex flex-col gap-1.5">
              <Label>희망 수업 형태</Label>
              <div className="grid grid-cols-2 gap-2" role="group" aria-label="희망 수업 형태">
                {["학원(교습소) 수업", "홈스쿨 수업"].map((v) => (
                  <Choice key={v} on={mode === v} onPick={() => setMode(v)}>
                    {v}
                  </Choice>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-name">이름</Label>
              <input className={INPUT} id="f-name" type="text" autoComplete="name" placeholder="이름을 입력해 주세요." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1.5">
                <Label>성별</Label>
                <div className="grid grid-cols-2 gap-2" role="group" aria-label="성별">
                  {["여자", "남자"].map((v) => (
                    <Choice key={v} on={gender === v} onPick={() => setGender(v)}>
                      {v}
                    </Choice>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="f-age">연령</Label>
                <input
                  className={INPUT}
                  id="f-age"
                  type="text"
                  inputMode="numeric"
                  placeholder="나이를 입력해 주세요."
                  value={age}
                  onChange={(e) => setAge(e.target.value.replace(/\D/g, "").slice(0, 3))}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-tel">연락처</Label>
              <input
                className={INPUT}
                id="f-tel"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="- 없이 입력해 주세요."
                value={tel}
                onChange={(e) => setTel(e.target.value.replace(/\D/g, "").slice(0, 11))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-area">개설 희망 지역</Label>
              <input className={INPUT} id="f-area" type="text" placeholder="개설 희망 지역을 입력해 주세요." value={area} onChange={(e) => setArea(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>독서지도사 자격증 유무</Label>
              <div className="grid grid-cols-2 gap-2" role="group" aria-label="독서지도사 자격증 유무">
                {["있음", "없음"].map((v) => (
                  <Choice key={v} on={license === v} onPick={() => setLicense(v)}>
                    {v}
                  </Choice>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-msg">상담 내용</Label>
              <textarea
                className="box-border w-full resize-y rounded-[12px] border border-[#E4E4E4] bg-[#F7F7F8] p-4 font-[family-name:inherit] text-[16px] text-[#1F1F1F] placeholder:text-[#8A8A8A]"
                id="f-msg"
                rows={4}
                placeholder="상담 내용 입력해 주세요."
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </div>
            {/* 희망 상담일: 날짜 선택(오늘 이후만) */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-date">희망 상담일</Label>
              <input className={`${INPUT} cursor-pointer`} id="f-date" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </fieldset>
          {/* 개인정보 동의: 수업상담과 같은 회색 상자 + '자세히보기'(모달 — 버튼은 label 밖이라 눌러도 체크가 바뀌지 않음) */}
          <div className="flex items-center gap-3 rounded-[14px] bg-[#F7F7F8] p-4">
            <label className="flex min-w-0 flex-1 cursor-pointer items-start gap-3">
              <input className="mx-0 mt-0.25 mb-0 h-5.5 w-5.5 flex-none accent-[#F26522]" type="checkbox" checked={agree} onChange={() => setAgree((v) => !v)} />
              <span className="text-[14px] leading-[1.5] font-semibold">[필수] 개인정보 수집 및 이용에 동의합니다.</span>
            </label>
            <PrivacyModal id="f-privacy" doc={FRANCHISE_PRIVACY_DOC} checked={agree} toggle={() => setAgree((v) => !v)} />
          </div>
          {/* 안내: 수업상담 신청서와 같은 파란 상자 */}
          <p className="m-0 flex items-center gap-2.5 rounded-[14px] bg-[#EAF2FF] px-4 py-3.5 text-[13px] leading-[1.5] break-keep text-[#2A4A80]">
            <svg className="flex-none" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="#2F5AA8">
              <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5z" />
              <path d="m9 12 2 2 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            </svg>
            상담 신청 후, 담당자가 확인하여 유선 상담까지 최대 3일정도 소요될 수 있습니다.
          </p>
          {msg && (
            <p className="m-0 text-center text-[13px] text-[#C2410C]" role="alert">
              {msg}
            </p>
          )}
          <button className="h-14 cursor-pointer rounded-[14px] border-0 bg-[#F26522] font-[family-name:inherit] text-[17px] font-bold text-white" type="button" onClick={submit}>
            개설 문의 보내기 →
          </button>
        </form>
      )}
    </section>
  );
}
