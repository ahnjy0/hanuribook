const ITEMS = [
  { age: "유아", period: "8주", title: "참깨한글", tint: "#FFF1E0", img: "한글 자모 카드 놀이", desc: "그림책과 놀이로 자음·모음을 익히고 읽기 독립을 준비하는 유아 맞춤 한글 과정." },
  { age: "초등", period: "4주", title: "다다어휘", tint: "#E8F1FB", img: "어휘 카드와 노트", desc: "교과서 필수 어휘와 한자어를 집중적으로 익혀 독해의 기초 체력을 다집니다." },
  { age: "초등", period: "4주", title: "똑독해", tint: "#E6F4EA", img: "밑줄 그은 지문", desc: "문단 구조와 핵심어 찾기로 비문학 지문을 정확하게 읽는 독해 전략 특강." },
  { age: "초등", period: "6주", title: "한국사봄 | 한국사람", tint: "#FFF6DA", img: "역사 연표 활동지", desc: "시대 흐름과 인물 중심으로 한국사를 정리하고 탐구 활동으로 기억에 남깁니다." },
  { age: "중·고등", period: "6주", title: "별별문학독해 | 교과문학탐독", tint: "#F1ECFA", img: "교과서 문학 작품", desc: "교과서 수록 문학 작품을 갈래별로 깊이 읽고 내신 서술형까지 대비합니다." },
  { age: "고등", period: "6주", title: "고등 통합사회", tint: "#FDECEC", img: "사회 이슈 신문 스크랩", desc: "통합사회 핵심 개념을 시사 이슈와 연결해 읽고 토론·논술로 정리합니다." },
];

export function useSpecial() {
  return { items: ITEMS };
}

export type SpecialVals = ReturnType<typeof useSpecial>;
