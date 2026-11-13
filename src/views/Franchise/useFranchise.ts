import { useState } from "react";

export function useFranchise() {
  // 문의 접수 버튼을 누르면 완료 메시지를 보여줍니다.
  const [done, setDone] = useState(false);
  return { done, submit: () => setDone(true) };
}

export type FranchiseVals = ReturnType<typeof useFranchise>;
