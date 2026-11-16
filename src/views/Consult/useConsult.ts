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

const STEP_DEFS = ["자녀 정보", "보호자 정보"];
const LAST = STEP_DEFS.length - 1;
const STEPS = STEP_DEFS.map((label, i) => ({
  n: i + 1,
  label,
  line: i < LAST,
  flex: i < LAST ? "1 1 auto" : "0 0 auto",
  bg: i === 0 ? "#F26522" : "#E4E4E4",
  fg: i === 0 ? "#FFFFFF" : "#4A4A4A",
  weight: i === 0 ? 700 : 500,
  color: i === 0 ? "#1F1F1F" : "#6B6B6B",
}));

const FAQ_DEFS = [
  { q: "상담 신청하면 바로 결제되나요?", a: "아닙니다! 전화 상담과 방문 진단은 무료이며, 실제 수업 진행 여부는 상담 후 자녀와 편안하게 상의하여 결정하실 수 있습니다." },
  { q: "첫 수업은 어떻게 진행되나요?", a: "각 그룹 아이들의 역량과 교사의 재량에 따라 달리 진행될 수 있습니다. 하지만 기본적으로 한우리독서토론논술 프로그램의 특징을 소개하고, 수업 계획과 과제 등 독서토론논술 학습 전반에 대해서 오리엔테이션을 합니다. 그리고 나서 첫 수업을 진행합니다." },
  { q: "우리 아이는 일대일로 수업을 받고 싶은데요?", a: "일대일 수업도 좋습니다. 하지만 또래의 아이들과 같은 주제를 가지고 생각을 이야기 하고 자신의 생각을 논리적으로 설명하고 상대방을 설득하는 것이 토론이고, 그 생각을 쓰기로 변환시키는 일이 논술이기 때문에 아이들의 독서토론논술 지도 방법은 그룹별 활동이 가장 효과적입니다." },
  { q: "선생님이 방문수업을 하나요? 아니면 아이들이 선생님 댁으로 가야 하나요?", a: "아이가 사는 곳이 어딘지에 따라 그 곳에 소속된 선생님이 학생의 집으로 방문하는 경우도 있고, 학생이 선생님 댁으로 가서 수업이 진행되는 경우도 있습니다. 거주 지역이 한우리 소속 센터와 가깝다면 학원형태의 독서교실에서 수업 받을 수도 있습니다." },
];

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
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true, 1: true });
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

  const faqs = FAQ_DEFS.map((f, i) => {
    const isOpen = !!open[i];
    return {
      ...f,
      open: isOpen,
      exp: isOpen,
      icon: isOpen ? "−" : "+",
      toggle: () => setOpen((prev) => ({ ...prev, [i]: !isOpen })),
    };
  });

  return {
    done,
    notDone: !done,
    grade,
    submit: () => setDone(true),
    grades,
    steps: STEPS,
    phoneAuth,
    address,
    hopeTimes,
    faqs,
    agree,
    toggleAgree: () => setAgree((v) => !v),
  };
}

export type ConsultVals = ReturnType<typeof useConsult>;
