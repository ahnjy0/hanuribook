import { useEffect, useState } from "react";
import { openPostcode } from "./postcode";

/** 상담 희망 시간 */
const HOPE_TIMES = ["오전 (9~12시)", "오후 (12~17시)", "저녁 (17시 이후)", "관계 없음"];

/** 인증번호 유효 시간(초) */
const CODE_TTL = 180;

/** 숫자만 남기고 010-1234-5678 형식으로 하이픈 넣기 */
function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`;
}

const GRADE_LIST = ["6세", "7세", "초1", "초2", "초3", "초4", "초5", "초6", "중1", "중2", "중3", "고1", "고2"];


export function useConsult() {
  const [selGrades, setSelGrades] = useState<string[]>(["초1"]);
  // 중복 선택 가능. 필수 항목이므로 마지막 하나는 해제되지 않음
  const toggleGrade = (label: string) =>
    setSelGrades((prev) => {
      if (!prev.includes(label)) return GRADE_LIST.filter((g) => g === label || prev.includes(g));
      return prev.length > 1 ? prev.filter((g) => g !== label) : prev;
    });
  const grade = selGrades.join(", ");

  // ── 휴대폰 인증 ──
  // ※ 실제 문자 발송·인증번호 확인은 서버(SMS 인증 API)가 필요함. 정적 사이트라 지금은 화면 흐름만 동작:
  //    '인증번호 받기' → 3분 타이머 → 6자리 입력 후 '확인' 하면 인증 완료로 표시.
  //    API가 준비되면 sendCode / confirmCode 안에서 호출하도록 연결할 것.
  const [phone, setPhone] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [left, setLeft] = useState(0);
  const [phoneMsg, setPhoneMsg] = useState("");

  useEffect(() => {
    if (!codeSent || verified || left <= 0) return;
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [codeSent, verified, left]);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneAuth = {
    phone,
    code,
    codeSent,
    verified,
    msg: phoneMsg,
    timer: `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`,
    expired: codeSent && !verified && left <= 0,
    changePhone: (v: string) => {
      setPhone(formatPhone(v));
      // 번호를 바꾸면 인증을 처음부터 다시
      setCodeSent(false);
      setVerified(false);
      setCode("");
      setPhoneMsg("");
    },
    changeCode: (v: string) => setCode(v.replace(/\D/g, "").slice(0, 6)),
    sendCode: () => {
      if (!/^01\d{8,9}$/.test(phoneDigits)) {
        setPhoneMsg("휴대폰 번호를 정확히 입력해 주세요.");
        return;
      }
      setCodeSent(true);
      setVerified(false);
      setCode("");
      setLeft(CODE_TTL);
      setPhoneMsg("인증번호를 보냈습니다. 3분 안에 입력해 주세요.");
    },
    confirmCode: () => {
      if (left <= 0) {
        setPhoneMsg("입력 시간이 지났습니다. 인증번호를 다시 받아 주세요.");
        return;
      }
      if (code.length !== 6) {
        setPhoneMsg("인증번호 6자리를 입력해 주세요.");
        return;
      }
      setVerified(true);
      setPhoneMsg("휴대폰 인증이 완료되었습니다.");
    },
  };

  // ── 거주 지역: 주소 검색 ──
  const [addr, setAddr] = useState({ zonecode: "", address: "" });
  const [addrDetail, setAddrDetail] = useState("");
  const [addrErr, setAddrErr] = useState("");
  const address = {
    ...addr,
    detail: addrDetail,
    err: addrErr,
    changeDetail: setAddrDetail,
    search: () => {
      setAddrErr("");
      openPostcode((d) => {
        setAddr({ zonecode: d.zonecode, address: d.roadAddress || d.jibunAddress });
        setAddrDetail("");
      }).catch(() => setAddrErr("주소 검색을 열 수 없습니다. 잠시 후 다시 시도해 주세요."));
    },
  };

  // ── 상담 희망 시간 (단일 선택) ──
  const [hopeTime, setHopeTime] = useState<string | null>(null);
  const hopeTimes = HOPE_TIMES.map((label) => ({
    label,
    sel: label === hopeTime,
    pick: () => setHopeTime(label),
  }));

  const [agree, setAgree] = useState(true);
  // 개인정보 제3자 제공 동의
  const [agreeThird, setAgreeThird] = useState(true);
  const [done, setDone] = useState(false);

  const grades = GRADE_LIST.map((label) => {
    const on = selGrades.includes(label);
    return {
      label,
      sel: on,
      bg: on ? "#F26522" : "#F4F4F5",
      fg: on ? "#FFFFFF" : "#333333",
      border: on ? "2px solid #F26522" : "2px solid transparent",
      weight: on ? 700 : 500,
      pick: () => toggleGrade(label),
    };
  });

  return {
    done,
    notDone: !done,
    grade,
    submit: () => setDone(true),
    grades,
    phoneAuth,
    address,
    hopeTimes,
    agree,
    toggleAgree: () => setAgree((v) => !v),
    agreeThird,
    toggleAgreeThird: () => setAgreeThird((v) => !v),
  };
}

export type ConsultVals = ReturnType<typeof useConsult>;
