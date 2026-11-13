import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개발 모드 좌측 하단 Next.js 표시를 숨겨 원본 프로토타입의 "화면 목록" 버튼과 겹치지 않게 합니다.
  devIndicators: false,
};

export default nextConfig;
