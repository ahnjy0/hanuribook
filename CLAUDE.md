# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트

한우리독서토론논술(독서·토론·논술 교육 브랜드) 홈페이지의 실제 반응형 리뉴얼 사이트입니다(프로토타입 아님). 처음에 하나의 정적 `index.html` 프로토타입으로 만든 것을 Next.js App Router + React + Tailwind CSS v4로 옮겨 개발 중입니다. 루트의 `index.html`은 그 옛 프로토타입으로, 참고용으로만 남아 있고 배포되지 않습니다. 약 500KB라서 전체를 읽지 말고 Grep으로 검색하세요. 화면 문구와 코드 주석은 한국어이므로 새 주석도 한국어로 작성합니다.

**Next.js 16은 이전 버전과 호환되지 않는 변경이 있습니다**(`AGENTS.md` 참고). Next.js 관련 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 해당 가이드를 읽고, 사용 중단(deprecation) 안내를 따르세요. `AGENTS.md`는 `next dev`가 다시 생성합니다.

## 명령어

- `npm run dev` — 개발 서버(Turbopack). 한 프로젝트 폴더에서 `next dev`는 하나만 실행할 수 있습니다. 이미 실행 중이면 새 서버는 종료되고, 기존 서버의 주소·포트를 출력합니다(로그: `.next/dev/logs/next-development.log`).
- `npm run build` / `npm run start` — 프로덕션 빌드 / 실행.
- `npm run typecheck` — `tsc --noEmit`. 유일한 자동 검사입니다. 린터와 테스트는 없습니다.

## 배포 (GitHub Pages)

- `next.config.ts`가 `output: "export"`로 설정되어 있어, `npm run build` 결과가 `out/`에 정적 파일로 생성됩니다. 따라서 서버 기능(Route Handler, Server Action, 쿠키·헤더 읽기, 동적 라우트의 런타임 렌더링, `next/image` 최적화)은 쓸 수 없습니다.
- `.github/workflows/deploy.yml`이 `main` 브랜치 push 시 빌드해서 GitHub Pages에 배포합니다. 저장소 Settings → Pages → Source가 "GitHub Actions"여야 합니다.
- Pages 사이트는 `/<저장소이름>/` 하위 경로에서 열리므로, 워크플로가 `PAGES_BASE_PATH`로 `basePath`/`assetPrefix`를 넣어 줍니다(로컬은 빈 값). 내부 링크는 반드시 `next/link`(또는 `SmartLink`)로, 로컬 이미지는 `import`로 불러와야 이 경로가 자동으로 붙습니다. `<a href="/...">`나 `"/assets/..."` 같은 절대 경로를 직접 쓰면 배포 사이트에서 깨집니다.

## 구조

- **`src/app/<route>/page.tsx`는 얇은 래퍼입니다.** `metadata`(제목 끝에 `SITE_TITLE`)를 정하고 view나 template을 렌더링만 합니다. 라우트 경로는 `src/routes.ts`의 `PATHS`에 모여 있으니, 내부 링크는 경로를 직접 쓰지 말고 이것을 사용하세요.
- **`src/views/<Page>/`** 에 페이지별 코드가 있습니다.
  - `<Page>.tsx`가 `Header` → `<main>` 안의 `sections/*Section.tsx` → `Footer` → 하단 고정 `BottomNav` 순서로 화면을 조립합니다.
  - 페이지 전용 상태·데이터는 `use<Page>.ts` 훅에 있습니다. 이 훅의 반환 타입을 export하고(예: `MainVals`), 각 섹션은 그중 필요한 값만 `Pick<...>`으로 받습니다.
- **`src/components/templates/`** 에는 여러 라우트가 함께 쓰는 데이터 기반 페이지 템플릿이 있습니다.
  - `CourseHub`: 초등정규·초등심화·중고등정규 과정 목록
  - `ProgramDetail`: 모든 `detail-*` 라우트. `program` prop으로 프로그램을 고릅니다.
  - 내용을 바꿀 때는 개별 라우트가 아니라 템플릿의 `use*.ts` 데이터를 수정합니다.
- **`src/components/common/`**:
  - `Header`는 `active`, `sub`, `crumbs`를 받습니다. `crumbs`는 `"프로그램 > 유아정규"` 형식의 문자열이고 `>`로 나뉩니다. 로케이션(현재 위치) 영역은 데스크톱에서만 보입니다.
  - `AppShell`(루트 레이아웃에 있음)이 페이지 안 링크를 처리합니다. `href="#"`는 아무 동작도 하지 않는 자리표시 링크이고, `href="#id"`는 해당 요소로 부드럽게 스크롤합니다. 페이지 간 이동은 `next/link`를 쓰고, 데이터로 받은 링크는 `SmartLink`가 `Link`와 `<a>` 중 맞는 것을 고릅니다.
- 일부 라우트(`/header`, `/footer`, `/bottom-nav`, `/style-guide`, `/desktop`, `/tablet-centers`)는 원본 프로토타입의 컴포넌트·미리보기 화면입니다. 실제 사이트 페이지가 아닙니다.

## 스타일 규칙

- Tailwind v4는 `src/styles/globals.css`에서 **Preflight(리셋) 없이** 설정되어 있습니다. 브라우저 기본 스타일이 그대로 적용되므로, 요소마다 `m-0`, `border-0`, `list-none` 등을 직접 붙입니다. 커스텀 테마 값, 키프레임, `reveal` 유틸리티(`src/hooks/useScrollReveal.ts`와 함께 사용)도 이 파일에 있습니다.
- 스타일은 거의 모두 JSX 안의 임의값 유틸리티(`text-[14px]`, `bg-[#E6450F]`, `[background-image:...]`)로 작성합니다. `text-sm` 같은 토큰 클래스는 쓰지 않습니다.
- 브레이크포인트는 모바일 우선입니다. `md` = 태블릿, `lg`(1024px) = 데스크톱.
- `globals.css`에는 레이어 밖 규칙이 하나 있습니다. 데스크톱에서 `<main>` 안의 `text-[13px]`~`text-[16px]` 글자를 키우는 규칙입니다. 단, 요소에 이미 `md:/lg:/xl:text-[..]` 크기가 있으면 적용하지 않습니다. 데스크톱 글자 크기가 예상과 다르면 이 규칙을 의심하고, 직접 `lg:text-[..]`를 붙여 덮어쓰세요.
- 이미지는 `next/image`가 아니라 일반 `<img>`로 `https://cdn.hanuribook.com/...`에서 불러옵니다. `width`/`height`와 `loading="lazy"`를 넣고, 장식용 이미지는 `alt=""`와 `aria-hidden`을 붙입니다. 로컬 에셋(Pretendard 폰트, CSS에서 참조하는 일부 배경 등)은 `src/assets/`에 있습니다.
- 상태나 effect를 쓰는 컴포넌트에는 `"use client"`가 필요합니다. 대부분의 섹션은 서버 컴포넌트입니다.
