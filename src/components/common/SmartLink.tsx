import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & { href: string };

/**
 * 데이터로 전달되는 링크용.
 * 내부 라우트("/...")는 next/link 로 클라이언트 이동, 그 외("#id", "#")는 일반 <a> 로 렌더링합니다.
 */
export default function SmartLink({ href, ...rest }: Props) {
  if (href.startsWith("/")) return <Link href={href} {...rest} />;
  return <a href={href} {...rest} />;
}
