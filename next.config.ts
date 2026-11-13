import type { NextConfig } from "next";

// GitHub Pages 배포용 하위 경로(예: "/저장소이름").
// GitHub Actions(.github/workflows/deploy.yml)가 빌드할 때 넣어 주며, 로컬에서는 비어 있어 "/" 기준으로 동작합니다.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기: `npm run build` 결과가 out/ 폴더에 HTML·CSS·JS 파일로 생성됨 → GitHub Pages에 그대로 올림
  output: "export",
  // /program → /program/index.html 형태로 만들어 정적 호스팅에서 새로고침·직접 접속 시에도 페이지가 열리게 함
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // 개발 모드 좌측 하단 Next.js 표시를 숨김
  devIndicators: false,
};

export default nextConfig;
