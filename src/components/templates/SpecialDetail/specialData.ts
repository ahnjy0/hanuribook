/**
 * 단기특강 상세 페이지 데이터(전단 내용을 옮긴 것)
 * - 과정(SpecialProgram)마다: 색 · 히어로(태그 · 상단 문구 · 제목 · 핵심 문구 · 뱃지 · 수업 정보) · 본문 블록
 * - 본문 블록 종류: points(특징 카드) / steps(단계 카드) / flow(수업 흐름) / tables(표)
 * - 페이지(SPECIAL_PAGES)마다 과정 1개, 또는 여러 개(위쪽 탭으로 전환 — 예: 별별문학독해 | 교과문학탐독)
 * ※ 전단의 교재 표지 · 지면 이미지는 아직 CDN 주소가 없어 넣지 않음
 */

/**
 * 색: accent 강조(라벨 · 태그 · 번호 바탕) / dark 진한 띠 · 표 머리 / soft 연한 바탕 / hi 형광펜 강조
 * - onAccent: accent 바탕 위 글자색(기본 흰색 — 노랑처럼 밝은 강조색이면 진한 색)
 * - ink: 흰 바탕 위에 쓰는 강조 글자색(기본 accent — 밝은 강조색이면 같은 계열의 진한 색)
 */
export type SpecialTheme = { accent: string; dark: string; soft: string; hi: string; onAccent?: string; ink?: string };

/** 테마 기본값을 채운 글자색 */
export const onAccentOf = (t: SpecialTheme) => t.onAccent ?? "#FFFFFF";
export const inkOf = (t: SpecialTheme) => t.ink ?? t.accent;

/** 이미지(CDN 주소 · 원본 크기) */
export type SpecialImage = { src: string; w: number; h: number };

export type SpecialBlock =
  | {
      kind: "points";
      title: string;
      sub?: string;
      // label: 'Point.1' 같은 작은 라벨 / title: 굵은 제목 / desc: 설명 / descEm: 설명 안에서 강조할 부분 / em: 강조 문장(설명 뒤)
      items: { label: string; title?: string; desc?: string; descEm?: string; em?: string }[];
    }
  | { kind: "steps"; title: string; sub?: string; items: { title: string; desc?: string }[] }
  | { kind: "flow"; title: string; sub?: string; groups: { label: string; note?: string; items: string[] }[] }
  // 고민 말풍선: 가운데 제목(\n 줄바꿈) + 채팅처럼 좌우 번갈아 놓는 말풍선(icon: 말하는 사람 아이콘)
  // em: 제목 속 강조할 부분(강조 글자색 + 형광펜 밑줄)
  // answer: 고민 말풍선 아래 선생님 답변 말풍선(em 부분은 강조)
  | {
      kind: "bubbles";
      title: string;
      em?: string;
      items: { text: string; icon?: SpecialImage }[];
      answer?: { text: string; em?: string; icon?: SpecialImage };
    }
  // 학습 효과 띠: 진한 배경 띠 + 가운데 라벨 · 노란 제목 · 설명 + 노란 카드(카드 문장 속 em 부분을 굵게)
  | { kind: "effects"; label: string; title: string; desc: string; items: { text: string; em: string }[] }
  // 과정 카드: 가운데 라벨 + 3열 카드(과정 로고 → 회색 대상 설명(\n 줄바꿈) → 구분선 → 굵은 과정명)
  | { kind: "courses"; label: string; items: { name: string; logo: SpecialImage; desc: string; title: string }[] }
  // 단계 카드: 왼쪽 진한 칸(작은 문구 + 'N단계') + 오른쪽 제목 · 설명
  | { kind: "stages"; label: string; items: { pre: string; step: string; title: string; desc: string }[] }
  // 수업 흐름 박스(초등심화 '…수업은 이렇게 진행돼요'와 같은 모양): 제목(em 부분 강조색) + 호(단계)별 열 → 차시별 활동명 · 설명
  | {
      kind: "lessons";
      title: string;
      em?: string;
      cols: { head: string; sub?: string; items: { session: string; title: string; desc: string }[] }[];
    }
  | {
      kind: "tables";
      title: string;
      sub?: string;
      // caption: 표 위 작은 제목 / head: 머리줄(비우면 머리줄 없음, 첫 칸은 줄 이름 칸) / rows: 줄 이름 + 칸들. 칸 안 \n 은 줄바꿈
      tables: { caption?: string; head: string[]; rows: { label: string; cells: string[] }[] }[];
    };

export type SpecialProgram = {
  name: string; // 탭 · 브레드크럼에 쓰는 이름
  tag: string; // 히어로 대상 태그
  eyebrow?: string; // 제목 위 문구(없으면 표시 안 함)
  title: string;
  logo?: SpecialImage; // 있으면 히어로 제목 자리에 로고 이미지(대체 글 = title)
  titleSub?: string; // 제목 아래 작은 문구
  slogan: string; // 핵심 문구
  badges?: string[];
  info: [string, string][]; // 수업 정보 [항목, 내용] — 내용 안 \n 은 줄바꿈
  theme: SpecialTheme;
  // true 면 섹션 제목을 초등정규 상세 페이지처럼 가운데 둥근 라벨(SectionLabel)로 — 아니면 왼쪽 정렬 타일 아이콘 제목
  centered?: boolean;
  blocks: SpecialBlock[];
};

export type SpecialProgramId = "hangul" | "vocab" | "nonfiction" | "litMiddle" | "litHigh" | "society";

const SESSIONS = ["1차시", "2차시", "3차시", "4차시"];

export const SPECIAL_PROGRAMS: Record<SpecialProgramId, SpecialProgram> = {
  hangul: {
    name: "참깨한글",
    tag: "5~7세",
    title: "참깨 한글",
    logo: { src: "https://cdn.hanuribook.com/img/hanuribook/logo_ko.png", w: 572, h: 380 },
    slogan: "책을 읽으며 한글을 재미있게 깨치는 한글 프로그램",
    info: [
      ["대상", "5~7세"],
      ["학습 기간", "3개월"],
      ["구성", "필독서 각 2권, 워크북, 붙임딱지, 복습용 쓰기 공책"],
    ],
    // 주요 색: 학습 과정 카드의 베이지 바탕
    // 포인트 색: 노랑(accent — 위 글자는 진한 색) + 로고 '참깨'의 살구 핑크(dark — 진한 띠 · 단계 칸 · 말풍선, ink — 라벨 · 강조 글자)
    theme: { accent: "#FFC61A", onAccent: "#3A2A00", ink: "#C24E3B", dark: "#E0654F", soft: "#F7F1E6", hi: "#FFD84D" },
    centered: true,
    blocks: [
      {
        kind: "bubbles",
        title: "우리 아이 첫 한글 공부,\n어떻게 시작할지 고민이시죠?",
        em: "첫 한글",
        // 걱정하는 엄마 아이콘(1024×1024 투명 PNG, 인물이 가운데 작게 있어 동그란 틀 안에서 확대해 보여 줌)
        items: [
          { text: "아이가 재미있게 접할 수 있었으면 좋겠어요!", icon: { src: "https://cdn.hanuribook.com/img/icon/mom_01.png", w: 1024, h: 1024 } },
          { text: "책을 읽으면서 자연스럽게 익힐 수 있나요?", icon: { src: "https://cdn.hanuribook.com/img/icon/mom_02.png", w: 1024, h: 1024 } },
          { text: "스스로 읽고 쓰는 단계까지 갔으면 좋겠어요!", icon: { src: "https://cdn.hanuribook.com/img/icon/mom_03.png", w: 1024, h: 1024 } },
          { text: "선생님이 직접 밀착 지도하는 수업 없을까요?", icon: { src: "https://cdn.hanuribook.com/img/icon/mom_04.png", w: 1024, h: 1024 } },
        ],
        answer: {
          text: "참깨 한글은 한글을 처음 배우는 유아도 맥락 속에서 자연스럽게 익히며, 읽고 이해하는 힘의 기초를 다질 수 있어요.",
          em: "참깨 한글",
          icon: { src: "https://cdn.hanuribook.com/img/icon/teacher.png", w: 1024, h: 1024 },
        },
      },
      {
        kind: "points",
        title: "주요 특징",
        items: [
          { label: "Point.1", desc: "한글 떼는 것은 물론 글을 읽고 이해하는 기초 능력을 갖출 수 있어요.", descEm: "글을 읽고 이해하는 기초 능력" },
          {
            label: "Point.2",
            desc: "필독서를 읽고 주제별 수업을 통해 맥락 속에서 한글을 배우며 생각하는 힘을 키울 수 있어요.",
            descEm: "맥락 속에서 한글을 배우며 생각하는 힘",
          },
          {
            label: "Point.3",
            desc: "아이의 수준에 따라 단계를 선택해 배울 수 있고, 한우리 유치·초등 프로그램으로의 연결 학습이 가능해요.",
            descEm: "한우리 유치·초등 프로그램으로의 연결 학습",
          },
        ],
      },
      {
        kind: "courses",
        label: "학습 과정",
        items: [
          {
            name: "참깨 한글 1",
            logo: { src: "https://cdn.hanuribook.com/img/hanuribook/logo_ko_01.png", w: 501, h: 450 },
            desc: "한글을 처음 시작하는\n5세 2학기 ~ 6세",
            title: "한글 기초 다지기",
          },
          {
            name: "참깨 한글 2",
            logo: { src: "https://cdn.hanuribook.com/img/hanuribook/logo_ko_02.png", w: 572, h: 463 },
            desc: "복잡한 한글이 어려운\n6 ~ 7세",
            title: "한글 이해 높이기",
          },
          {
            name: "참깨 한글 3",
            logo: { src: "https://cdn.hanuribook.com/img/hanuribook/logo_ko_03.png", w: 423, h: 353 },
            desc: "초등 입학을 앞둔\n7세 후반 ~",
            title: "한글 자신감 기르기",
          },
        ],
      },
      {
        kind: "effects",
        label: "학습 효과",
        title: "한글 완전 정복",
        desc: "한글 기초부터 완전 학습까지,\n초등 입학 전 필요한 읽기 역량을 확실히 길러요.",
        items: [
          { text: "체계적인 한글 학습으로 문해력 기초를 다져요.", em: "문해력 기초" },
          { text: "필독서와 연계한 주제별 한글 해득 활동으로 복잡한 한글도 쉽게 이해해요.", em: "한글도 쉽게" },
          { text: "여러 가지 낱말을 익히고 문장 짓기를 통하여 바르게 읽고 쓰며 한글의 자신감을 길러요.", em: "한글의 자신감" },
        ],
      },
      {
        kind: "stages",
        label: "수업 내용",
        items: [
          {
            pre: "한글의 기초를 다지는",
            step: "1단계",
            title: "기본 자모음 알기",
            desc: "기본 모음부터 자음, 쌍자음까지 필독서와 연계한 한글 해득 활동을 통해 쉽게 이해해요.",
          },
          {
            pre: "한글의 이해를 높이는",
            step: "2단계",
            title: "글자의 짜임 알기",
            desc: "글자의 짜임부터 받침, 복잡한 모음, 겹받침까지 소리 구조를 이해하며 이해 기반의 한글 해득을 경험해요.",
          },
          {
            pre: "한글의 자신감을 기르는",
            step: "3단계",
            title: "유창하게 읽고 쓰기",
            desc: "여러 가지 낱말을 익히고, 배운 낱말로 문장을 만들어 보며 초등 입학 전 스스로 읽고 쓰는 기본기를 길러줍니다.",
          },
        ],
      },
      {
        kind: "lessons",
        title: "단계별 수업은 이렇게 진행돼요",
        em: "단계별",
        cols: [
          {
            head: "1호",
            sub: "기본 자모음 알기",
            items: [
              { session: "1차시", title: "《숨바꼭질 ㅏㅑㅓㅕ》", desc: "모음자를 알아 보아요." },
              { session: "2차시", title: "《랄랄라 ㄱㄴㄷ》", desc: "자음자를 알아 보아요." },
              { session: "3차시", title: "하마의 가방은 어디 있을까?", desc: "자음자와 모음자를 합쳐 보아요." },
              { session: "4차시", title: "꽃밭에서 까르륵", desc: "똑같은 자음자끼리 만난 자음자를 알아 보아요." },
            ],
          },
          {
            head: "2호",
            sub: "글자의 짜임 알기",
            items: [
              { session: "1차시", title: "《나랑 만나, ㅏ》", desc: "글자의 짜임을 알아 보아요." },
              { session: "2차시", title: "《주무르고 늘리고》", desc: "받침이 있는 글자를 알아 보아요." },
              { session: "3차시", title: "모음과 모음이 만나면", desc: "여러 가지 모음자를 알아 보아요." },
              { session: "4차시", title: "자음자끼리 만난 받침", desc: "자음자끼리 만난 받침을 알아 보아요." },
            ],
          },
          {
            head: "3호",
            sub: "유창하게 읽고 쓰기",
            items: [
              { session: "1차시", title: "《어서 오세요! ㄱㄴㄷ뷔페》", desc: "여러 낱말을 읽고 써 보아요." },
              { session: "2차시", title: "《구름 한 숟가락 ㄱㄴㄷ》", desc: "문장을 짓고 읽어 보아요." },
              { session: "3차시", title: "바르게 읽어요", desc: "낱말과 문장을 알맞게 읽어요." },
              { session: "4차시", title: "바르게 써요", desc: "낱말과 문장을 알맞게 써 보아요." },
            ],
          },
        ],
      },
    ],
  },

  vocab: {
    name: "다다어휘",
    tag: "초등 2~4학년",
    eyebrow: "교과서를 제대로 읽게 만드는",
    title: "다다어휘",
    slogan: "초등 2~4학년 교과 어휘 특강",
    info: [
      ["대상", "초등 2~4학년"],
      ["수업 기간", "2개월(8차시)"],
      ["구성", "각 호당 교재 1권, 필독서 2권"],
    ],
    // 베이지 + 노랑: 베이지 바탕, 노란 형광펜. 강조색은 흰 글자가 읽히도록 진한 황토색
    theme: { accent: "#A0670F", dark: "#5C4310", soft: "#F7EEDC", hi: "#FFD43B" },
    blocks: [
      {
        kind: "points",
        title: "프로그램 특징",
        items: [
          { label: "Point.1", desc: "교과서 이해에 꼭 필요한", em: "어휘 285개 수록" },
          { label: "Point.2", desc: "읽으면서 뜻이 잡히는", em: "맥락 중심 학습" },
          { label: "Point.3", desc: "평가에 바로 적용 가능한", em: "쓰기 / 말하기 훈련" },
        ],
      },
      {
        kind: "steps",
        title: "다다어휘 살펴보기",
        items: [{ title: "어휘를 문맥과 상황에 맞게 체득하기" }, { title: "필독서 어휘 익히기" }, { title: "어휘를 통합하여 표현하기" }],
      },
      {
        kind: "steps",
        title: "한우리와 함께 문해력을 더 탄탄하게!",
        sub: "어휘에서 시작해 읽고, 쓰고, 토론할 수 있기까지",
        items: [
          { title: "다다어휘", desc: "교과서 필수 어휘를 학습하고" },
          { title: "한우리 몰입독서", desc: "읽는 과정에 집중하며" },
          { title: "한우리 독서토론논술", desc: "글쓰기 · 토론으로 확장하는" },
        ],
      },
    ],
  },

  nonfiction: {
    name: "똑독해",
    tag: "초등 4~6학년",
    eyebrow: "사회부터 과학, 경제까지",
    title: "똑독해",
    slogan: "한우리 초등 비문학 특강",
    info: [
      ["대상", "초등 고학년(4~6학년)"],
      ["수업 기간", "3개월(12차시)"],
      ["각 호 구성", "필독서 1권, 교재 1권"],
    ],
    theme: { accent: "#1E5EFF", dark: "#12358F", soft: "#E8F5FD", hi: "#FFE14D" },
    blocks: [
      {
        kind: "points",
        title: "프로그램 특징",
        items: [
          { label: "Point.1", title: "11가지 비문학 독해 원리 수록", desc: "초등학생이 꼭 알아야 할 비문학 독해 원리를 호마다 차례로 익혀요." },
          {
            label: "Point.2",
            title: "진짜 독해력을 기르는 체계적인 구성",
            desc: "단순 문제풀이식 독해가 아닌, 원리를 이해하여 지문에 적용하는 깊이 있는 학습으로 글의 내용을 정확하게 읽고 분석하는 독해력을 길러요!",
            em: "개념 이해 → 적용 → 문제 풀이 → 서술형 쓰기",
          },
          {
            label: "Point.3",
            title: "필독서로 배경지식 UP, 독해력도 UP!",
            desc: "필독서 속 비문학(사회, 과학, 경제) 지문으로 배경지식을 쌓고 실전 독해 훈련을 해요!",
          },
          {
            label: "Point.4",
            title: "글쓰기 훈련으로 각종 학교 평가 대비",
            desc: "실제 교과서 지문에 독해 원리를 적용하여 서술형 평가를 대비한 글쓰기 활동으로 마무리해요!",
          },
        ],
      },
      {
        kind: "tables",
        title: "11가지 비문학 독해 원리",
        sub: "초등학생이 꼭 알아야 할 비문학 독해 원리를 사회 · 과학 · 경제 지문으로 익혀요.",
        tables: [
          {
            head: [],
            rows: [
              { label: "1호 사회", cells: ["중심 내용 찾기", "사실-의견 구별하기", "설명 방법 파악하기 1\n(정의 · 예시)", "글의 의도와\n관점 파악하기"] },
              { label: "2호 과학", cells: ["구조 파악하기", "추론하기", "설명 방법 파악하기 2\n(비교 · 대조 · 인과 · 분석)", "시각 자료 해석하기"] },
              { label: "3호 경제", cells: ["질문하기", "설명 방법 파악하기 3\n(과정 · 인용 · 구분 · 분류)", "비판하기", "11가지 독해 원리\n종합하기"] },
            ],
          },
        ],
      },
    ],
  },

  litMiddle: {
    name: "별별문학독해",
    tag: "예비 중1",
    eyebrow: "중등도 역시, 한우리입니다!",
    title: "별별 문학 독해",
    titleSub: "예비 중1을 위한 갈래별 주제별 문학 독해",
    slogan: "중학교 입학 전, 교과서 수록 문학 70여 편을 미리 만나자!",
    badges: ["2022 개정 교육과정 반영"],
    info: [
      ["대상", "예비 중1"],
      ["각 호 구성", "필독서 2권, 교재 1권"],
      ["수업 기간", "3개월"],
    ],
    theme: { accent: "#D9480F", dark: "#9A2F06", soft: "#FDF1E8", hi: "#FFE27A" },
    blocks: [
      {
        kind: "points",
        title: "프로그램 특징",
        items: [
          { label: "Point.1", desc: "갈래별(소설, 시, 수필, 고전 등) 문학 기본 개념 이해" },
          { label: "Point.2", desc: "중등 국어과 문학 성취 기준에 맞춘 감상 · 독해 훈련" },
          { label: "Point.3", desc: "비문학 제시문과 연계, 전반적인 독해력 향상" },
        ],
      },
      {
        kind: "flow",
        title: "수업 흐름",
        groups: [
          {
            label: "1~3차시",
            items: ["문학 기본 개념 파악", "줄거리 정리", "깊이 이해(내재적 관점)", "적용 / 확장(외재적 관점)", "배운 내용 글로 정리"],
          },
          { label: "4차시", note: "*1, 2호만 해당", items: ["갈래 비교", "비문학과 연결", "서술 · 논술", "배운 내용 글로 정리"] },
        ],
      },
      {
        kind: "tables",
        title: "학습 내용",
        tables: [
          {
            head: SESSIONS,
            rows: [
              { label: "1호", cells: ["소설 1", "시", "소설 2", "소설과 시"] },
              { label: "2호", cells: ["소설 1", "수필", "소설 2", "소설과 수필"] },
              { label: "3호", cells: ["소설 1", "고전", "소설 2", "소설과 고전"] },
            ],
          },
        ],
      },
    ],
  },

  litHigh: {
    name: "교과문학탐독",
    tag: "예비고 (중2~3)",
    eyebrow: "문해력 전문 브랜드 '한우리'가 만든 8주 문학 집중 프로그램",
    title: "교과 문학 탐독",
    slogan: "국어의 승부처는 문학",
    badges: ["26년 8월 신규 출시", "교과서, 수능 연계 작품 중심", "2022 개정 교육과정 성취기준 기반"],
    info: [
      ["대상", "예비 고등학생(*중학교 2~3학년)"],
      ["학습 기간", "2개월 / 총 8차시"],
      ["교재 구성", "교재, 필독서, 교재 내 별지 포함\n*수능 및 내신 대비 문항 별지 외 다수"],
      ["필독서", "우소탐 개정증보판 1~3권 +\n교과서로 시작하는 고등학교 소설 읽기 2 (해냄에듀)"],
    ],
    theme: { accent: "#2F8A1F", dark: "#1D5A12", soft: "#EFF6E9", hi: "#FFE08A" },
    blocks: [
      {
        kind: "points",
        title: "앞으로 내신에서 앞서가려면, 문학이 먼저입니다!",
        items: [
          {
            label: "Point.1",
            desc: "2022 개정 교육과정, 수행평가가 달라졌습니다.",
            em: "단순 암기가 아닌, 작품을 깊이 읽고 글로 써내는 표현력을 요구합니다.",
          },
          { label: "Point.2", desc: "수능 국어의 핵심 변별력은 결국 문학.", em: "작품을 끝까지 읽고 해석해 본 아이가 고등 국어에서 흔들리지 않습니다." },
          {
            label: "Point.3",
            desc: "숏폼과 짧은 글에 익숙한 아이일수록 긴 글 읽기에서 무너집니다.",
            em: "문해력, 예비고 시기가 마지막 골든타임입니다.",
          },
        ],
      },
      {
        kind: "steps",
        title: "6단계 문학 탐독 과정",
        items: [
          { title: "미리 보기", desc: "배경지식 활성화" },
          { title: "어휘 충전", desc: "작품 핵심 어휘 습득" },
          { title: "이해와 감상", desc: "인물 · 갈등 · 주제로 작품 종합 분석" },
          { title: "문학과 시대", desc: "시대 맥락 이해로 작품 입체 해석" },
          { title: "문학과 사회", desc: "현대 사회와의 연결" },
          { title: "수행평가", desc: "내신 · 평가 실전 대비" },
        ],
      },
    ],
  },

  society: {
    name: "소클 고등 통합사회",
    tag: "예비고 · 고1",
    eyebrow: "통합사회 1등급을 위한 첫걸음",
    title: "소클 고등 통합사회",
    slogan: "통합사회 교과 대비",
    badges: ["2022 개정 교육과정 적용", "2028 수능 <통합사회> 대비"],
    info: [
      ["대상", "예비고 · 고1"],
      ["각 호 구성", "교재 · 필독서 · 별책 각 1권, 교재 내 별지 포함\n(수능형 문제, 완독 문답, 원고지)"],
      ["수업 기간", "3개 호 구성(3개월 과정 · 총 12차시)"],
    ],
    theme: { accent: "#E8541E", dark: "#3A3D36", soft: "#F3F3EF", hi: "#FFD28A" },
    blocks: [
      {
        kind: "points",
        title: "프로그램 특징",
        items: [
          { label: "POINT 1", title: "탄탄한 개념 학습", desc: "교과 핵심 개념을 체계적으로 이해해요." },
          { label: "POINT 2", title: "내신 + 수능 동시 대비", desc: "지필 / 수행 / 수능형 문항을 미리 연습해요." },
          { label: "POINT 3", title: "고등 통합 사고력 향상", desc: "교과 연계 독서로 응용력과 문제 해결력을 키워요." },
        ],
      },
    ],
  },
};

/** 상세 페이지: 라우트마다 보여 줄 과정(여러 개면 위쪽 탭으로 전환) */
export type SpecialPageId = "hangul" | "vocab" | "nonfiction" | "literature" | "society";

export const SPECIAL_PAGES: Record<SpecialPageId, { crumb: string; programs: SpecialProgramId[] }> = {
  hangul: { crumb: "참깨한글", programs: ["hangul"] },
  vocab: { crumb: "다다어휘", programs: ["vocab"] },
  nonfiction: { crumb: "똑독해", programs: ["nonfiction"] },
  literature: { crumb: "별별문학독해 | 교과문학탐독", programs: ["litMiddle", "litHigh"] },
  society: { crumb: "소클 고등 통합사회", programs: ["society"] },
};
