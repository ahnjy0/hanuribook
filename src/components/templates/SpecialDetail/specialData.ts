/**
 * 단기특강 상세 페이지 데이터(전단 내용을 옮긴 것)
 * - 과정(SpecialProgram)마다: 색 · 히어로(태그 · 상단 문구 · 제목 · 핵심 문구 · 뱃지 · 수업 정보) · 본문 블록
 * - 본문 블록 종류: points(특징 카드) / steps(단계 카드) / flow(수업 흐름) / tables(표)
 * - 페이지(SPECIAL_PAGES)마다 과정 1개, 또는 여러 개(위쪽 탭으로 전환 — 예: 별별문학독해 | 교과문학탐독)
 * ※ 전단의 교재 표지 · 지면 이미지는 아직 CDN 주소가 없어 넣지 않음(다다어휘 수업 내용 지면은 로컬 에셋)
 */

import type { StaticImageData } from "next/image";
import vocabStep1 from "@/assets/images/special/vocab_step1.png";
import vocabStep2 from "@/assets/images/special/vocab_step2.png";
import vocabStep3 from "@/assets/images/special/vocab_step3.png";

/** 로컬 이미지(import) → SpecialImage. import 한 이미지 주소에는 배포 경로(basePath)가 자동으로 붙음 */
function localImg(img: StaticImageData): SpecialImage {
  return { src: img.src, w: img.width, h: img.height };
}

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

/** 본문 블록 공통: theme 가 있으면 이 블록만 그 색으로(한 페이지에 과정이 여러 개일 때 과정별 색) */
export type SpecialBlock = SpecialBlockBody & { theme?: SpecialTheme };

type SpecialBlockBody =
  // 과정 안내 카드(중고등정규 중등 '과정 안내'와 같은 모양): 왼쪽 정렬 아이콘 제목 + 2열 카드
  // 카드 = 학년 라벨(chip 색) + 학습 기간 뱃지 → 과정명(+ 부제) → 목표(굵게) → 회색 박스(체크 목록) → 회색 박스(구성 정보)
  // id: 같은 페이지 안 이동용(히어로 카드에서 #id 로 이동) / color: 과정 강조색(체크 · 부제 · 뱃지)
  | {
      kind: "courseCards";
      label: string;
      items: {
        id?: string;
        name: string;
        sub?: string;
        grade: string;
        chip: { bg: string; fg: string };
        period?: string;
        color: string;
        goal: string;
        points?: string[];
        info?: [string, string][];
      }[];
    }
  // 과정 소개(한 페이지에 과정이 여러 개일 때 과정 사이 구분): 연한 띠 위 가운데 — 대상 태그 · 상단 문구 · 과정명 · 보조 문구 · 핵심 문구 · 뱃지 · 수업 정보
  | {
      kind: "intro";
      id?: string; // 같은 페이지 안 이동용(#id)
      tag: string;
      tagSub?: string; // 연령 박스 안 아래 작은 보충(예: (중2~3))
      eyebrow?: string;
      name: string;
      logo?: SpecialImage; // 있으면 과정명 자리에 로고 이미지(대체 글 = name)
      logoCls?: string; // 로고 높이(비율이 달라 과정마다)
      children?: SpecialBlockBody[]; // 소개 박스 안에 이어서 보여 줄 블록들(주요 특징 · 수업 흐름 등 — 박스 안이라 흰 바탕으로)
      titleSub?: string;
      slogan: string;
      badges?: string[];
      info: [string, string][];
    }
  | {
      kind: "points";
      title: string;
      sub?: string;
      band?: boolean; // true 면 연한 색 배경 띠(전체 폭) 위에 — 라벨 · 카드는 흰 바탕
      heading?: string; // 라벨 아래 큰 제목(줄바꿈 시 마지막 줄은 강조 글자색)
      // label: 'Point.1' 같은 작은 라벨 / title: 굵은 제목 / desc: 설명 / descEm: 설명 안에서 강조할 부분 / em: 강조 문장(설명 뒤)
      items: { label: string; title?: string; desc?: string; descEm?: string; em?: string }[];
    }
  | { kind: "steps"; title: string; sub?: string; items: { title: string; desc?: string }[] }
  // boxed: true 면 단계를 › 로 잇는 대신 번호 붙은 박스로(순서별 박스)
  | { kind: "flow"; title: string; sub?: string; boxed?: boolean; groups: { label: string; note?: string; items: string[] }[] }
  // 고민 말풍선: 가운데 제목(\n 줄바꿈) + 채팅처럼 좌우 번갈아 놓는 말풍선(icon: 말하는 사람 아이콘)
  // em: 제목 속 강조할 부분(강조 글자색 + 형광펜 밑줄)
  // answer: 고민 말풍선 아래 선생님 답변 말풍선(em 부분은 강조)
  | {
      kind: "bubbles";
      title: string;
      em?: string;
      sub?: string; // 제목 아래 작은 문구(subEm 부분은 강조 글자색)
      subEm?: string;
      subAlert?: boolean; // true 면 subEm 앞에 경고 아이콘(삼각형 + 느낌표, emColor 색)
      emColor?: string; // 제목 아래 문구 · 말풍선 강조 글자색(없으면 강조 글자색 ink)
      bubbleBg?: [string, string]; // 말풍선 바탕(왼쪽 줄, 오른쪽 줄) — 없으면 강조색을 옅게
      figures?: SpecialImage[]; // 있으면 모아 보기: 2열 칸마다 말풍선 + 그 아래 고민하는 인물(figures[i])
      items: { text: string; em?: string; icon?: SpecialImage }[]; // em: 말풍선 안 강조 부분
      answer?: { text: string; em?: string; icon?: SpecialImage };
    }
  // 학습 효과 띠: 진한 배경 띠 + 가운데 라벨 · 노란 제목 · 설명 + 노란 카드(카드 문장 속 em 부분을 굵게)
  // items.title: 카드 굵은 제목(있으면 번호 아래 · 설명 위) / em: 설명 안 굵게 할 부분(빈 문자열이면 없음)
  // eyebrow: 제목 위 작은 문구(없으면 생략)
  // title · desc 는 없으면 생략(라벨 바로 아래 카드)
  | { kind: "effects"; label: string; eyebrow?: string; title?: string; desc?: string; items: { title?: string; text: string; em: string }[] }
  // 과정 카드: 가운데 라벨 + 3열(2개면 2열) 카드(과정 로고(없으면 과정명 글자) → 대상 설명(\n 줄바꿈) → 구분선 → 굵은 제목)
  // href: 카드를 누르면 이동할 같은 페이지 안 위치(#id, 없으면 링크 없음) / color: 과정명 글자색(없으면 강조 글자색)
  | {
      kind: "courses";
      label: string;
      items: { name: string; logo?: SpecialImage; desc: string; title: string; href?: string; color?: string }[];
    }
  // 단계 카드: 왼쪽 진한 칸(작은 문구 + 'N단계') + 오른쪽 제목 · 설명
  // heading: 라벨 아래 큰 제목(줄바꿈 시 첫 줄 강조색) / pre · desc 는 없으면 생략
  // image: 단계 지면 이미지(있으면 카드형 — 위 번호 · 제목 띠 + 아래 이미지)
  // imageBg: 이미지 카드 색(없으면 진한 색 dark)
  | {
      kind: "stages";
      label: string;
      heading?: string;
      imageBg?: string;
      items: { pre?: string; step: string; title: string; desc?: string; image?: SpecialImage }[];
    }
  // 교재 구성: 가운데 라벨 + 연한 박스 안 교재 이미지(없으면 생략) → 아래 구성 목록 가로 한 줄
  | { kind: "kit"; label: string; image?: SpecialImage; items: string[] }
  // 수업 흐름 박스(초등심화 '…수업은 이렇게 진행돼요'와 같은 모양): 제목(em 부분 강조색) + 호(단계)별 열 → 차시별 활동명 · 설명
  // label: 박스 위 가운데 라벨(없으면 생략) / items.desc: 없으면 생략
  | {
      kind: "lessons";
      label?: string;
      title?: string; // 박스 안 제목(없으면 생략)
      em?: string;
      cols: { head: string; sub?: string; items: { session: string; title: string; desc?: string }[] }[];
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
  logoCls?: string; // 로고 높이 조정(없으면 h-24 lg:h-36)
  // 히어로 배경 이미지(패턴): 히어로 전체를 덮도록 확대(size — CSS background-size), 위치(position), 투명도(opacity)
  // rotate: 회전 각도(있으면 띠(band 높이 px, 이미지 아래쪽만)를 여러 줄 쌓은 큰 판을 회전해 깔기)
  // opacityLg: 데스크톱 불투명도(없으면 opacity)
  heroBg?: { src: string; size: string; position: string; repeat?: string; opacity: number; opacityLg?: number; rotate?: number; band?: number };
  tagTone?: { bg: string; fg: string }; // 태그 색(없으면 강조색 바탕 + 강조색 위 글자색)
  eyebrow?: string; // 제목 위 문구(없으면 표시 안 함)
  title: string;
  logo?: SpecialImage; // 있으면 히어로 제목 자리에 로고 이미지(대체 글 = title)
  titleSub?: string; // 제목 아래 작은 문구
  slogan: string; // 핵심 문구
  badges?: string[];
  info: [string, string][]; // 수업 정보 [항목, 내용] — 내용 안 \n 은 줄바꿈
  // 히어로 과정 카드(있으면 초등정규 어휘리더 히어로처럼: 가운데 라벨(tag) → 제목 → 핵심 문구 → 2열 카드, 정보 박스 대신)
  // 카드: 위 연한 과정색 영역에 교재 표지(cover, 없으면 과정명 글자) → 과정명 → 수업 정보 줄들 → '자세히 보기'(href: 같은 페이지 안 #id)
  heroCards?: { name: string; cover?: SpecialImage; color: string; soft: string; info: [string, string][]; href?: string }[];
  theme: SpecialTheme;
  // true 면 섹션 제목을 초등정규 상세 페이지처럼 가운데 둥근 라벨(SectionLabel)로 — 아니면 왼쪽 정렬 타일 아이콘 제목
  centered?: boolean;
  blocks: SpecialBlock[];
};

export type SpecialProgramId = "hangul" | "vocab" | "nonfiction" | "literature" | "society";

const SESSIONS = ["1차시", "2차시", "3차시", "4차시"];

/**
 * 문학 통합 페이지의 과정별 색(교재 표지 색에서 뽑음)
 * - 별별문학독해: 복숭아빛 바탕 #FFEDDF(표지) + 포인트 색은 로고 '별별'의 짙은 갈색 #962F34(더 진한 띠 · 칸은 #6E2226)
 * - 교과문학탐독: 연한 하늘 바탕 + 제목의 파랑 #3769B2 + 남색 #413B6E
 */
const LIT_MIDDLE_THEME: SpecialTheme = { accent: "#962F34", onAccent: "#FFFFFF", ink: "#962F34", dark: "#6E2226", soft: "#FFEDDF", hi: "#FFE27A" };
const LIT_HIGH_THEME: SpecialTheme = { accent: "#3769B2", onAccent: "#FFFFFF", ink: "#3769B2", dark: "#413B6E", soft: "#E8F5FC", hi: "#FFE08A" };

/** 블록들에 같은 색(theme)을 붙임 — 한 페이지 안에서 과정별로 색을 나눌 때 */
function withTheme(theme: SpecialTheme, blocks: SpecialBlockBody[]): SpecialBlock[] {
  return blocks.map((b) => ({ ...b, theme }));
}

export const SPECIAL_PROGRAMS: Record<SpecialProgramId, SpecialProgram> = {
  hangul: {
    name: "참깨한글",
    tag: "유아 한글 프로그램",
    // 태그: 로고 '참깨'의 살구 핑크 바탕 + 흰 글자
    tagTone: { bg: "#E0654F", fg: "#FFFFFF" },
    // 히어로 배경 패턴: 45도 회전. 폭 500px(높이 약 666px) 이미지의 아래쪽 440px만 띠로 잘라 가로 반복 → 띠를 쌓아 회전
    // (위쪽 약 31%(≈207px)에 있는 '참깨 한글' 글자는 띠 밖으로 잘림), 글이 잘 읽히게 옅게(불투명도 5%)
    heroBg: {
      src: "https://cdn.hanuribook.com/img/hanuribook/ko_03.png",
      size: "500px auto",
      position: "left bottom",
      repeat: "repeat-x",
      opacity: 0.05,
      rotate: 45,
      band: 440,
    },
    title: "참깨 한글",
    logo: { src: "https://cdn.hanuribook.com/img/hanuribook/logo_ko.png", w: 572, h: 380 },
    slogan: "책을 읽으며 한글을 재미있게 깨치는 한글 프로그램",
    info: [
      ["대상", "5~7세"],
      ["학습 기간", "3개월"],
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
        kind: "kit",
        label: "교재 구성",
        image: { src: "https://www.hanuribook.com/resources/img/program/special5_img4.png", w: 900, h: 544 },
        items: ["워크북 3권", "필독서 6권", "쓰기 공책 3권", "붙임딱지"],
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
            head: "1단계",
            sub: "기본 자모음 알기",
            items: [
              { session: "1차시", title: "《숨바꼭질 ㅏㅑㅓㅕ》", desc: "모음자를 알아 보아요." },
              { session: "2차시", title: "《랄랄라 ㄱㄴㄷ》", desc: "자음자를 알아 보아요." },
              { session: "3차시", title: "하마의 가방은 어디 있을까?", desc: "자음자와 모음자를 합쳐 보아요." },
              { session: "4차시", title: "꽃밭에서 까르륵", desc: "똑같은 자음자끼리 만난 자음자를 알아 보아요." },
            ],
          },
          {
            head: "2단계",
            sub: "글자의 짜임 알기",
            items: [
              { session: "1차시", title: "《나랑 만나, ㅏ》", desc: "글자의 짜임을 알아 보아요." },
              { session: "2차시", title: "《주무르고 늘리고》", desc: "받침이 있는 글자를 알아 보아요." },
              { session: "3차시", title: "모음과 모음이 만나면", desc: "여러 가지 모음자를 알아 보아요." },
              { session: "4차시", title: "자음자끼리 만난 받침", desc: "자음자끼리 만난 받침을 알아 보아요." },
            ],
          },
          {
            head: "3단계",
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
    ],
  },

  vocab: {
    name: "다다어휘",
    // 참깨한글과 같은 구성: 프로그램 구분 태그 → 정보 타일 2개(대상 · 수업 기간) → 가운데 라벨 섹션들
    tag: "어휘력 향상 프로그램",
    title: "다다어휘",
    logo: { src: "https://cdn.hanuribook.com/img/hanuribook/logo_special6.png", w: 518, h: 183 },
    // 가로로 긴 로고라 기본보다 조금 작게
    logoCls: "h-20 lg:h-28",
    // 히어로 배경 패턴: 참깨한글과 같이 45도 회전. 다다어휘 표지(폭 500px, 높이 약 671px)를 통째로 띠(671px)로 가로 반복 → 띠를 쌓아 회전
    // 글이 잘 읽히게 옅게(불투명도 5%)
    heroBg: {
      src: "https://cdn.hanuribook.com/img/hanuribook/special6.png",
      size: "500px auto",
      position: "left top",
      repeat: "repeat-x",
      rotate: 45,
      band: 671,
      opacity: 0.05,
    },
    slogan: "교과서 필수 어휘 집중 학습",
    info: [
      ["대상", "초등 2~4학년"],
      ["수업 기간", "2개월(8차시)"],
    ],
    // 주요 색: 연한 크림 노랑(soft) / 포인트 색: 초록 #3AB26F(accent · dark — 위 글자는 흰색, 교재 지면 테두리와 같은 색)
    // 흰 바탕 위 강조 글자(ink)는 한 톤 진한 초록
    theme: { accent: "#3AB26F", onAccent: "#FFFFFF", ink: "#23864F", dark: "#3AB26F", soft: "#FFF8E1", hi: "#FFE066" },
    centered: true,
    blocks: [
      {
        kind: "bubbles",
        title: "글을 읽는데, 뜻을 모르는 아이?\n문제는 바로 '어휘력 부족'입니다.",
        em: "'어휘력 부족'",
        sub: "놓치면 안 되는 아이의 어휘력 '빨간불' 신호",
        subEm: "'빨간불'",
        subAlert: true,
        // '빨간불' 신호 · 고민 강조는 붉은색
        emColor: "#E03131",
        // 말풍선: 연한 노랑 두 톤을 번갈아
        bubbleBg: ["#FFF3C4", "#FFEBA6"],
        // 슬라이드: 질문마다 말풍선 + 그 아래 고민하는 엄마(질문 순서대로 mom_06 · 07 · 03 · 04)
        figures: [
          { src: "https://cdn.hanuribook.com/img/icon/mom_06.png", w: 1024, h: 1024 },
          { src: "https://cdn.hanuribook.com/img/icon/mom_07.png", w: 1024, h: 1024 },
          { src: "https://cdn.hanuribook.com/img/icon/mom_03.png", w: 1024, h: 1024 },
          { src: "https://cdn.hanuribook.com/img/icon/mom_04.png", w: 1024, h: 1024 },
        ],
        items: [
          { text: "교과서를 다 읽고도 단어 뜻을 자꾸 물어봐요", em: "단어 뜻을 자꾸 물어봐요" },
          { text: "단어 뜻은 아는데, 막상 문장으로는 못 써요", em: "막상 문장으로는 못 써요" },
          { text: "선생님이 그러는데, 수업 시간에 자꾸 멍하니 있대요", em: "수업 시간에 자꾸 멍하니" },
          { text: "모르는 단어가 많으니 아예 공부를 질려 해요", em: "공부를 질려 해요" },
        ],
        answer: {
          text: "암기식 단어장으로는 절대 해결할 수 없습니다. 문맥으로 이해하고 스스로 활용하는 진짜 어휘력, 지금, 한우리 다다어휘를 만나세요!",
          em: "지금, 한우리 다다어휘를 만나세요!",
          icon: { src: "https://cdn.hanuribook.com/img/icon/teacher.png", w: 1024, h: 1024 },
        },
      },
      {
        kind: "points",
        title: "주요 특징",
        band: true,
        heading: "교과서를 제대로 읽게 만드는\n어휘력 집중 향상 프로그램",
        items: [
          // 설명과 강조 문구를 한 줄로(강조 부분만 더 굵게)
          { label: "Point.1", desc: "교과서 이해에 꼭 필요한 어휘 285개 수록", descEm: "어휘 285개 수록" },
          { label: "Point.2", desc: "읽으면서 뜻이 잡히는 맥락 중심 학습", descEm: "맥락 중심 학습" },
          { label: "Point.3", desc: "평가에 바로 적용 가능한 쓰기 / 말하기 훈련", descEm: "쓰기 / 말하기 훈련" },
        ],
      },
      {
        kind: "kit",
        label: "교재 구성",
        image: { src: "https://cdn.hanuribook.com/img/program/special-vocab_set.png", w: 743, h: 368 },
        items: ["각 호당 교재 1권", "필독서 2권"],
      },
      {
        kind: "stages",
        label: "수업 내용",
        heading: "초등 필수 교과 어휘부터\n글쓰기 활용까지 탄탄하게!",
        // 단계마다 교재 지면 이미지(로컬 에셋). 카드 색은 포인트 색(초록 — 지면 테두리와 같은 색)
        items: [
          { step: "1", title: "어휘를 문맥과 상황에 맞게 체득하기", image: localImg(vocabStep1) },
          { step: "2", title: "필독서 어휘 익히기", image: localImg(vocabStep2) },
          { step: "3", title: "어휘를 통합하여 표현하기", image: localImg(vocabStep3) },
        ],
      },
      {
        kind: "effects",
        label: "학습 효과",
        title: "교과서 필수 어휘학습",
        desc: "어휘력이 자라면 독해력과\n교과 자신감이 함께 올라갑니다.",
        items: [
          { title: "학교 교과서가 쉬워져요", text: "교과 어휘를 미리 익혀 수업 내용을 쉽게 이해해요.", em: "" },
          { title: "독해력이 함께 자라나요", text: "문장을 읽고 파악하는 힘이 눈에 띄게 좋아져요.", em: "" },
          { title: "교실에서 바로 활용해요", text: "배운 단어를 학교 발표와 글쓰기에 표현해요.", em: "" },
        ],
      },
    ],
  },

  nonfiction: {
    name: "똑독해",
    // 다다어휘와 같은 구성: 프로그램 구분 태그 → 정보 타일 2개 → 고민 슬라이드 → 주요 특징(띠) → 교재 구성 → 수업 내용(표) → 학습 효과
    tag: "초등 비문학 특강 프로그램",
    title: "똑독해",
    logo: { src: "https://cdn.hanuribook.com/img/hanuribook/logo_special3_01.png", w: 582, h: 248 },
    // 로고: 기본보다 작게
    logoCls: "h-16 lg:h-24",
    // 히어로 배경 패턴: 다다어휘와 같이 45도 회전. 똑독해 표지(폭 500px, 높이 약 663px)를 통째로 띠(663px)로 가로 반복 → 띠를 쌓아 회전, 옅게(불투명도 5%)
    heroBg: {
      src: "https://cdn.hanuribook.com/img/hanuribook/special3_02.png",
      size: "500px auto",
      position: "left top",
      repeat: "repeat-x",
      rotate: 45,
      band: 663,
      opacity: 0.05,
    },
    slogan: "사회, 과학, 경제 11가지 비문학 독해 원리 학습",
    info: [
      ["대상", "초등 고학년(4~6학년)"],
      ["수업 기간", "3개월(12차시)"],
    ],
    // 주요 색: 로고의 주황 #F26532(accent · dark — 위 글자는 흰색) + 연한 주황 바탕(soft)
    // 흰 바탕 위 강조 글자(ink)는 한 톤 진한 주황
    theme: { accent: "#F26532", onAccent: "#FFFFFF", ink: "#D2471A", dark: "#F26532", soft: "#FFF1EA", hi: "#FFE14D" },
    centered: true,
    blocks: [
      {
        kind: "bubbles",
        title: "확! 어려워지는\n비문학 지문이 걱정이라면?",
        em: "비문학 지문",
        // 말풍선: 연한 주황 · 연한 노랑을 번갈아
        bubbleBg: ["#FFE6DA", "#FFF3C4"],
        // 질문 순서대로 mom_03 · 04 · 06 · 05
        figures: [
          { src: "https://cdn.hanuribook.com/img/icon/mom_03.png", w: 1024, h: 1024 },
          { src: "https://cdn.hanuribook.com/img/icon/mom_04.png", w: 1024, h: 1024 },
          { src: "https://cdn.hanuribook.com/img/icon/mom_06.png", w: 1024, h: 1024 },
          { src: "https://cdn.hanuribook.com/img/icon/mom_05.png", w: 1024, h: 1024 },
        ],
        items: [
          { text: "비문학 지문의 서술형평가에 약해요!" },
          { text: "문학은 좋아하는데 비문학은 싫어해요!" },
          { text: "사회, 과학, 경제 분야를 특히 더 어려워해요!" },
          { text: "고학년이 되며 어려워지는 평가가 걱정돼요!" },
        ],
        answer: {
          text: "초등학생이 꼭 알아야 할 11가지 비문학 독해 원리로 내신과 수능을 확실하게 대비합니다.",
          em: "11가지 비문학 독해 원리",
          icon: { src: "https://cdn.hanuribook.com/img/icon/teacher.png", w: 1024, h: 1024 },
        },
      },
      {
        kind: "points",
        title: "주요 특징",
        band: true,
        heading: "비문학 독해의 시작\n비문학 독해력 집중 향상 프로그램",
        items: [
          { label: "Point.1", title: "비문학 독해 원리 학습", desc: "초등 고학년이 알아야 할 11가지 비문학 독해 원리를 학습합니다." },
          { label: "Point.2", title: "서술형 평가 실전 연습", desc: "학교 평가에 대비해, 교과서 지문을 활용한 서술형 평가 실전 연습을 합니다." },
          { label: "Point.3", title: "수능 대비 배경지식 습득", desc: "필독서 지문으로 2028년 개편 수능(통합사회·과학) 대비 배경지식을 습득합니다." },
        ],
      },
      {
        kind: "kit",
        label: "교재 구성",
        items: ["각 호당 필독서 1권", "교재 1권"],
      },
      {
        // 표(가로 스크롤) 대신 호별 칸(모바일은 위아래로 쌓임) — 칸마다 1~4차시 독해 원리
        kind: "lessons",
        label: "수업 내용",
        title: "사회 · 과학 · 경제 지문으로 익히는 11가지 비문학 독해 원리",
        em: "11가지 비문학 독해 원리",
        cols: [
          {
            head: "1호",
            sub: "사회",
            items: [
              { session: "1차시", title: "중심 내용 찾기" },
              { session: "2차시", title: "사실-의견 구별하기" },
              { session: "3차시", title: "설명 방법 파악하기 1", desc: "(정의 · 예시)" },
              { session: "4차시", title: "글의 의도와 관점 파악하기" },
            ],
          },
          {
            head: "2호",
            sub: "과학",
            items: [
              { session: "1차시", title: "구조 파악하기" },
              { session: "2차시", title: "추론하기" },
              { session: "3차시", title: "설명 방법 파악하기 2", desc: "(비교 · 대조 · 인과 · 분석)" },
              { session: "4차시", title: "시각 자료 해석하기" },
            ],
          },
          {
            head: "3호",
            sub: "경제",
            items: [
              { session: "1차시", title: "질문하기" },
              { session: "2차시", title: "설명 방법 파악하기 3", desc: "(과정 · 인용 · 구분 · 분류)" },
              { session: "3차시", title: "비판하기" },
              { session: "4차시", title: "11가지 독해 원리 종합하기" },
            ],
          },
        ],
      },
      {
        kind: "effects",
        label: "학습 효과",
        eyebrow: "초등학생이 꼭 알아야 할",
        title: "11가지 비문학 독해 원리로",
        desc: "내신과 수능을 확실하게 대비합니다.",
        items: [
          { text: "초등 고학년이 알아야 할 11가지 비문학 독해 원리를 학습합니다.", em: "" },
          { text: "학교 평가에 대비해, 교과서 지문을 활용한 서술형 평가 실전 연습을 합니다.", em: "" },
          { text: "필독서 지문으로 2028년 개편 수능(통합사회·과학) 대비 배경지식을 습득합니다.", em: "" },
        ],
      },
    ],
  },

  // 문학 통합 페이지: 별별문학독해(예비 중1) + 교과문학탐독(예비고)을 탭 없이 한 페이지에(참깨한글과 같은 가운데 라벨 구성)
  // 공통 히어로 → 학습 과정(두 과정 카드) → 과정별 소개 띠 + 그 과정 섹션들(과정별 색 — 별별: 주황, 교과: 초록)
  literature: {
    name: "별별문학독해 | 교과문학탐독",
    tag: "문학 집중 프로그램",
    title: "문학 특강",
    slogan: "중등 교과 및 수능 연계 작품 분석",
    info: [],
    // 히어로: 초등정규 어휘리더처럼 두 과정 카드(누르면 아래 과정 소개로 이동)
    heroCards: [
      {
        name: "별별 문학 독해",
        cover: { src: "https://cdn.hanuribook.com/img/hanuribook/special2_01.png", w: 260, h: 341 },
        color: LIT_MIDDLE_THEME.ink!,
        soft: LIT_MIDDLE_THEME.soft,
        info: [
          ["대상", "예비 중학생"],
          ["학습 기간", "3개월"],
        ],
        href: "#lit-middle",
      },
      {
        name: "교과 문학 탐독",
        cover: { src: "https://cdn.hanuribook.com/img/hanuribook/special7.png", w: 800, h: 1071 },
        color: LIT_HIGH_THEME.ink!,
        soft: LIT_HIGH_THEME.soft,
        info: [
          ["대상", "예비 고등학생"],
          ["학습 기간", "2개월"],
        ],
        href: "#lit-high",
      },
    ],
    // 페이지 주요 색(히어로 배경 등): 연한 그레이 — 두 과정 색(복숭아 · 하늘)을 모두 받쳐 주는 중립색. 강조색은 별별(코랄)
    theme: { ...LIT_MIDDLE_THEME, soft: "#F3F3F4" },
    // 중고등정규 중등(소크라테스) 페이지와 같은 구성: 섹션 제목은 왼쪽 정렬 + 타일 아이콘
    centered: false,
    blocks: [
      // 별별 문학 독해(짙은 갈색)
      ...withTheme(LIT_MIDDLE_THEME, [
        {
          // 프로그램 주요 정보: 배경색 있는 띠(전체 폭) — 태그 · 로고 · 핵심 문구 · 구성 정보 + 주요 특징(박스 안)
          kind: "intro",
          id: "lit-middle",
          tag: "예비 중1",
          name: "별별 문학 독해",
          slogan: "중학교 입학 전, 교과서 수록 문학 70여 편을 미리 만나자!",
          info: [["각 호 구성", "필독서 2권, 교재 1권"]],
          children: [
            {
              kind: "points",
              title: "주요 특징",
              items: [
                { label: "Point.1", desc: "갈래별(소설, 시, 수필, 고전 등) 문학 기본 개념 이해" },
                { label: "Point.2", desc: "중등 국어과 문학 성취 기준에 맞춘 감상 · 독해 훈련" },
                { label: "Point.3", desc: "비문학 제시문과 연계, 전반적인 독해력 향상" },
              ],
            },
          ],
        },
        {
          // 표(가로 스크롤) 대신 호별 칸 — 모바일은 위아래로 쌓임
          kind: "lessons",
          label: "수업 내용",
          cols: [
            {
              head: "1호",
              items: [
                { session: "1차시", title: "소설 1" },
                { session: "2차시", title: "시" },
                { session: "3차시", title: "소설 2" },
                { session: "4차시", title: "소설과 시" },
              ],
            },
            {
              head: "2호",
              items: [
                { session: "1차시", title: "소설 1" },
                { session: "2차시", title: "수필" },
                { session: "3차시", title: "소설 2" },
                { session: "4차시", title: "소설과 수필" },
              ],
            },
            {
              head: "3호",
              items: [
                { session: "1차시", title: "소설 1" },
                { session: "2차시", title: "고전" },
                { session: "3차시", title: "소설 2" },
                { session: "4차시", title: "소설과 고전" },
              ],
            },
          ],
        },
        {
          kind: "flow",
          title: "수업 흐름",
          boxed: true,
          groups: [
            {
              label: "1~3차시",
              items: ["문학 기본 개념 파악", "줄거리 정리", "깊이 이해(내재적 관점)", "적용 / 확장(외재적 관점)", "배운 내용 글로 정리"],
            },
            { label: "4차시", note: "*1, 2호만 해당", items: ["갈래 비교", "비문학과 연결", "서술 · 논술", "배운 내용 글로 정리"] },
          ],
        },
        {
          kind: "effects",
          label: "학습 효과",
          items: [
            { text: "중학교 국어 교과서에 수록된 문학 70여 편을 읽어 중등 학습에 대비합니다.", em: "" },
            { text: "갈래별 문학의 기본 개념을 이해하고, 이를 적용하여 문학 작품을 분석 감상합니다.", em: "" },
            { text: "비문학 제시문과의 연계를 통해 독해력을 향상시키고, 서술형 · 논술형 평가에 대비합니다.", em: "" },
          ],
        },
      ]),
      // 교과 문학 탐독(파랑)
      ...withTheme(LIT_HIGH_THEME, [
        {
          // 프로그램 주요 정보: 배경색 있는 띠(전체 폭) — 태그 · 로고 · 핵심 문구 · 뱃지 · 구성 정보 + 주요 특징(박스 안)
          kind: "intro",
          id: "lit-high",
          tag: "예비고",
          tagSub: "(중2~3)",
          name: "교과 문학 탐독",
          slogan: "국어의 승부처는 문학",
          badges: ["26년 8월 신규 출시", "교과서, 수능 연계 작품 중심", "2022 개정 교육과정 성취기준 기반"],
          info: [
            ["교재 구성", "교재, 필독서, 교재 내 별지 포함\n*수능 및 내신 대비 문항 별지 외 다수"],
            ["필독서", "우소탐 개정증보판 1~3권 +\n교과서로 시작하는 고등학교 소설 읽기 2 (해냄에듀)"],
          ],
          children: [
            {
              kind: "points",
              title: "주요 특징",
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
          ],
        },
        {
          kind: "steps",
          title: "교과 문학 탐독 6단계 과정",
          items: [
            { title: "미리 보기", desc: "배경지식 활성화" },
            { title: "어휘 충전", desc: "작품 핵심 어휘 습득" },
            { title: "이해와 감상", desc: "인물 · 갈등 · 주제로 작품 종합 분석" },
            { title: "문학과 시대", desc: "시대 맥락 이해로 작품 입체 해석" },
            { title: "문학과 사회", desc: "현대 사회와의 연결" },
            { title: "수행평가", desc: "내신 · 평가 실전 대비" },
          ],
        },
        {
          kind: "effects",
          label: "학습 효과",
          items: [
            { text: "교과서 및 수능 연계 작품을 깊이 읽으며 독해력의 기초를 탄탄하게 다집니다.", em: "" },
            { text: "두 작품을 깊이 연결하고 비교하는 탐독 읽기로 분석력과 사고력을 키웁니다.", em: "" },
            { text: "중학교 내신을 넘어 수능 및 평가원 출제 유형을 반영한 문제풀이와 수행평가 글쓰기로 실전 평가에 대비합니다.", em: "" },
          ],
        },
      ]),
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
  literature: { crumb: "별별문학독해 | 교과문학탐독", programs: ["literature"] },
  society: { crumb: "소클 고등 통합사회", programs: ["society"] },
};
