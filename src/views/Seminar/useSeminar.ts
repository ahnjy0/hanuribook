import { useState } from "react";

const SESSION_DEFS = [
  { date: "[MM.DD] (화)", time: "오전 10:30 - 11:10", status: "마감", full: true },
  { date: "[MM.DD] (목)", time: "오전 10:30 - 11:10", status: "신청 가능", full: false },
  { date: "[MM.DD] (토)", time: "오후 8:00 - 8:40", status: "마감 임박", full: false },
];

export function useSeminar() {
  const [sel, setSel] = useState(1);
  const [done, setDone] = useState(false);

  const sessions = SESSION_DEFS.map((d, i) => {
    const on = i === sel;
    return {
      ...d,
      sel: on,
      bg: d.full ? "#F4F4F5" : on ? "#FFF4EC" : "#FFFFFF",
      border: on ? "2px solid #F26522" : "1px solid #E4E4E4",
      chipBg: d.full ? "#E4E4E4" : d.status === "마감 임박" ? "#FDECEC" : "#E8F5EE",
      chipFg: d.full ? "#4A4A4A" : d.status === "마감 임박" ? "#B42318" : "#1F7A4C",
      pick: () => {
        if (!d.full) setSel(i);
      },
    };
  });

  return { sessions, selLabel: SESSION_DEFS[sel].date, done, submit: () => setDone(true) };
}

export type SeminarVals = ReturnType<typeof useSeminar>;
