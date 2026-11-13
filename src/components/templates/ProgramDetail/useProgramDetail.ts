import { PATHS } from "@/routes";

export type ProgramId =
  | "vocab" | "reading" | "logic"
  | "science" | "history" | "geo" | "world"
  | "socrates" | "literature";

export type ProgramDetailProps = {
  program?: ProgramId;
};

type GroupKey = "elementary" | "advanced" | "middle";

const GROUPS: Record<GroupKey, { sub: string; back: string }> = {
  elementary: { sub: "초등정규", back: PATHS.Elementary },
  advanced: { sub: "초등심화", back: PATHS.Advanced },
  middle: { sub: "중고등정규", back: PATHS.Middle },
};

const PROGRAMS: {
  id: ProgramId; group: GroupKey; href: string; title: string; grade: string; focus: string;
  tint: string; img: string; slogan: string; tags: string; long: string; points: string[]; steps: string[];
}[] = [
  { id: "vocab", group: "elementary", href: PATHS.DetailVocab, title: "어휘리더", grade: "초등 1·2학년", focus: "★ 어휘력·기초 문해력", tint: "#FFF4EC", img: "그림책을 읽으며 어휘 카드를 고르는 아이",
    slogan: "책 읽기의 즐거움과 교과 기초 어휘·표현력 다지기", tags: "#그림책  #교과기초어휘  #초등입학적응",
    long: "그림책과 저학년 문학을 깊이 읽으며 교과서에 나오는 기초 어휘와 표현을 익히고, 자기 생각을 짧은 글로 표현하는 습관을 만듭니다.",
    points: ["교과서 필수 어휘를 그림책 속 문맥으로 익혀요", "읽은 내용을 자기 말로 표현하는 습관이 생겨요", "초등 입학 후 국어 수업에 자신감이 붙어요"], steps: ["어휘 놀이터", "그림책 깊이 읽기", "교과 연계 읽기", "생각 표현 쓰기"] },
  { id: "reading", group: "elementary", href: PATHS.DetailReading, title: "독서리더", grade: "초등 3·4학년", focus: "교과 독서·생각의 확장", tint: "#EEF4FF", img: "교과 연계 도서를 읽고 토론하는 아이들",
    slogan: "과목별 심화 배경지식 확장 및 갈래별 글쓰기 기초 훈련", tags: "#교과연계  #갈래별글쓰기  #배경지식",
    long: "국어·사회·과학 교과와 연계된 도서로 배경지식을 넓히고, 설명문·감상문·논설문 등 갈래별 글쓰기의 기초를 단단히 다집니다.",
    points: ["교과 단원과 연결된 배경지식이 넓어져요", "설명문·감상문·논설문을 구분해 쓸 수 있어요", "토의·토론으로 생각을 말로 정리해요"], steps: ["읽기·쓰기", "교과 읽기", "토의·토론", "문학 읽기"] },
  { id: "logic", group: "elementary", href: PATHS.DetailLogic, title: "논리리더", grade: "초등 5·6학년", focus: "논리적 토론·중등 대비", tint: "#FFF8E1", img: "찬반 토론 수업 장면",
    slogan: "비판적 미디어 읽기, 실전 찬반토론 및 중등 서술형 완벽 대비", tags: "#찬반토론  #미디어리터러시  #중등논술대비",
    long: "비문학과 미디어 텍스트를 비판적으로 읽고, 근거를 갖춘 찬반 토론과 논술 쓰기로 중학교 서술형·수행평가를 준비합니다.",
    points: ["뉴스·광고 등 미디어를 비판적으로 읽어요", "근거를 들어 주장하는 찬반 토론에 익숙해져요", "중학교 서술형·수행평가를 미리 준비해요"], steps: ["비문학 독해", "미디어 읽기", "찬반 토론", "논술 쓰기"] },
  { id: "science", group: "advanced", href: PATHS.DetailScience, title: "과학탐탐", grade: "초등 3~6학년", focus: "과학 탐구", tint: "#E9F6EE", img: "실험 관찰 노트를 쓰는 아이",
    slogan: "궁금증을 탐구로, 탐구를 글로", tags: "#과학교과  #탐구보고서  #실험관찰",
    long: "과학 교과와 연계된 도서를 읽고 관찰·실험 활동을 통해 원리를 이해한 뒤, 탐구 보고서와 설명문으로 정리합니다.",
    points: ["교과서 핵심 과학 개념을 책으로 먼저 이해해요", "관찰·실험 과정을 논리적인 글로 표현해요", "과학 관련 시사 이슈를 토론해요"], steps: ["개념 도서 읽기", "탐구 활동", "실험 관찰 기록", "탐구 보고서 쓰기"] },
  { id: "history", group: "advanced", href: PATHS.DetailHistory, title: "똑똑한국사", grade: "초등 3~6학년", focus: "역사 이해", tint: "#FFF3E3", img: "역사책과 유물 사진 카드",
    slogan: "이야기로 읽고 흐름으로 이해하는 우리 역사", tags: "#시대흐름  #인물탐구  #역사논술",
    long: "선사 시대부터 근현대까지 시대별 역사 도서를 읽으며 인물과 사건을 이해하고, 역사적 사고력과 판단력을 기릅니다.",
    points: ["5·6학년 사회 역사 단원을 미리 이해해요", "인물과 사건을 시대 흐름으로 연결해요", "역사 인물 가상 인터뷰로 생각을 넓혀요"], steps: ["시대 개관 읽기", "인물 탐구", "사건 토론", "역사 논술 쓰기"] },
  { id: "geo", group: "advanced", href: PATHS.DetailGeo, title: "세계문화지리", grade: "초등 3~6학년", focus: "세계 이해", tint: "#EAF3FC", img: "세계 지도와 여러 나라 문화 카드",
    slogan: "지도를 펼치면 세계가 보여요", tags: "#지도활동  #문화비교  #세계시민",
    long: "대륙별 자연환경과 문화를 다룬 도서를 읽고, 지도 활동과 문화 비교를 통해 세계를 이해하는 넓은 시야를 키웁니다.",
    points: ["대륙·나라별 자연환경과 생활을 이해해요", "지도 읽기와 문화 비교 활동을 해요", "세계시민의 관점으로 토론해요"], steps: ["대륙 탐험 읽기", "지도 활동", "문화 비교", "여행기·소개문 쓰기"] },
  { id: "world", group: "advanced", href: PATHS.DetailWorld, title: "세계사", grade: "초등 5~6학년", focus: "역사 심화", tint: "#F2EEFA", img: "세계사 연표와 고대 문명 그림",
    slogan: "세계의 흐름 속에서 오늘을 읽다", tags: "#세계문명  #연표정리  #중등역사대비",
    long: "고대 문명부터 현대까지 세계사의 주요 장면을 책으로 읽고, 한국사와 연결하여 시대를 입체적으로 이해합니다.",
    points: ["중학교 역사 과목에 필요한 배경지식을 쌓아요", "한국사와 세계사를 연결해 이해해요", "역사적 쟁점에 대한 논술을 훈련해요"], steps: ["문명 읽기", "연표 정리", "쟁점 토론", "역사 논술 쓰기"] },
  { id: "socrates", group: "middle", href: PATHS.DetailSocrates, title: "중등 소크라테스", grade: "중1 ~ 중3", focus: "질문·토론·논증", tint: "#EEF1F6", img: "토론 수업 중인 중학생들",
    slogan: "질문하고 토론하며 논리를 세우는 중등 독서토론", tags: "#소크라테스대화법  #비문학독해  #서술형대비",
    long: "교과 연계 도서와 비문학 텍스트를 읽고 소크라테스식 질문과 토론으로 생각을 검증한 뒤, 근거를 갖춘 논증적 글쓰기로 완성합니다.",
    points: ["스스로 질문을 만들며 핵심을 파악해요", "근거를 들어 반론하고 설득하는 힘이 생겨요", "내신 서술형·수행평가 답안 쓰기에 강해져요"], steps: ["텍스트 분석", "쟁점 질문 만들기", "소크라테스식 토론", "논증 글쓰기"] },
  { id: "literature", group: "middle", href: PATHS.DetailLiterature, title: "고등 문학", grade: "고1 ~ 고2", focus: "문학 감상·수능 대비", tint: "#F6EFEA", img: "교과서 문학 작품을 분석하는 고등학생",
    slogan: "교과서·수능 문학 작품을 깊이 읽고 해석하는 힘", tags: "#교과서문학  #수능문학  #비평문쓰기",
    long: "현대시·현대소설·고전문학 등 교과서와 수능 빈출 작품을 갈래별로 깊이 읽고, 작품 해석 토론과 비평문 쓰기로 문학적 사고력을 완성합니다.",
    points: ["갈래별 작품 감상 방법을 체계적으로 익혀요", "수능형 문학 문제의 출제 원리를 이해해요", "비평문 쓰기로 논술·면접의 기초를 다져요"], steps: ["갈래별 작품 읽기", "작품 해석 토론", "수능형 문제 분석", "비평문 쓰기"] },
];

export function useProgramDetail(props: ProgramDetailProps) {
  const id = props.program ?? "vocab";
  const cur = PROGRAMS.find((x) => x.id === id) ?? PROGRAMS[0];
  const g = GROUPS[cur.group];
  const p = { ...cur, sub: g.sub, back: g.back, crumbs: "프로그램 > " + g.sub + " > " + cur.title };
  const sibs = PROGRAMS.filter((x) => x.group === cur.group).map((x) => ({
    title: x.title,
    href: x.href,
    on: x.id === cur.id,
    off: x.id !== cur.id,
  }));
  return { p, steps: cur.steps.map((t, i) => ({ n: i + 1, t })), sibs };
}

export type ProgramDetailVals = ReturnType<typeof useProgramDetail>;
