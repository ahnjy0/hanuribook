"use client";

import { Fragment } from "react";
import Link from "next/link";
import logoImg from "@/assets/images/logo.webp";
import SmartLink from "@/components/common/SmartLink";
import { useHeader, type HeaderProps } from "./useHeader";

export default function Header(props: HeaderProps) {
  const {
    accent,
    accentFill,
    accentText,
    crumbs,
    hasCrumbs,
    hasSubs,
    menuClosed,
    menuExp,
    menuGroups,
    menuLabel,
    menuOpen,
    subs,
    tabs,
    toggleMenu,
  } = useHeader(props);
  return (
    <header className="w-full border-b border-b-[#EFEFEF] bg-white font-pretendard text-[#1F1F1F]">
      <div className="mx-auto my-0 box-border flex h-15 max-w-[1200px] items-center justify-between px-5 py-0">
        <Link className="flex items-center no-underline" href="/">
          <img className="block h-7.5 w-auto" src={logoImg.src} alt="한우리독서토론논술 홈" />
        </Link>
        <button
          className="-mr-2.5 flex h-11 w-11 cursor-pointer items-center justify-center border-0 bg-transparent"
          aria-label={menuLabel}
          aria-expanded={menuExp}
          onClick={toggleMenu}
        >
          {menuClosed && (
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1F1F1F"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
          {menuOpen && (
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1F1F1F"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-t-[#F3F3F3] bg-white" aria-label="전체 메뉴">
          <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col px-5 pt-2 pb-5">
            <Link
              className="flex min-h-13 items-center border-b border-b-[#F1F1F1] text-[17px] font-extrabold text-[#1F1F1F] no-underline"
              href="/"
            >
              메인 홈
            </Link>
            {menuGroups.map((g, i) => (
              <div key={i} className="flex flex-col gap-2 border-b border-b-[#F1F1F1] px-0 py-3">
                <SmartLink
                  className="flex min-h-8 items-center text-[17px] font-extrabold text-[#1F1F1F] no-underline"
                  href={g.href}
                >
                  {g.label}
                </SmartLink>
                {g.hasItems && (
                  <div className="grid grid-cols-2 gap-1.5">
                    {g.items.map((it, j) => (
                      <SmartLink
                        key={j}
                        className="flex min-h-11 items-center rounded-[10px] bg-[#F7F7F8] px-3 py-0 text-[14px] font-medium text-[#333333] no-underline"
                        href={it.href}
                      >
                        {it.label}
                      </SmartLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
      <nav className="border-t border-t-[#F3F3F3]" aria-label="주 메뉴">
        <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-4 px-2 py-0">
          {tabs.map((t, i) => (
            <Fragment key={i}>
              {t.on && (
                <SmartLink
                  className="flex h-12 items-center justify-center text-[15px] font-bold whitespace-nowrap no-underline"
                  style={{ color: accentText, borderBottom: `2px solid ${accent}` }}
                  href={t.href}
                  aria-current="page"
                >
                  {t.label}
                </SmartLink>
              )}
              {t.off && (
                <SmartLink
                  className="flex h-12 items-center justify-center border-b-2 border-b-transparent text-[15px] font-medium whitespace-nowrap text-[#333333] no-underline"
                  href={t.href}
                >
                  {t.label}
                </SmartLink>
              )}
            </Fragment>
          ))}
        </div>
      </nav>
      {hasSubs && (
        <div className="border-t border-t-[#FBE7DA] bg-[#FCF9F8]">
          <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-3 gap-2 px-4 py-3">
            {subs.map((s, i) => (
              <Fragment key={i}>
                {s.on && (
                  <SmartLink
                    className="box-border flex min-h-10 min-w-0 items-center justify-center rounded-[10px] px-1.5 py-1 text-center text-[14px] leading-[1.3] font-bold break-keep text-white no-underline"
                    style={{ background: accentFill }}
                    href={s.href}
                    aria-current="page"
                  >
                    {s.label}
                  </SmartLink>
                )}
                {s.off && (
                  <SmartLink
                    className="box-border flex min-h-10 min-w-0 items-center justify-center rounded-[10px] border border-[#ECE4DE] bg-white px-1.5 py-1 text-center text-[14px] leading-[1.3] font-medium break-keep text-[#333333] no-underline"
                    href={s.href}
                  >
                    {s.label}
                  </SmartLink>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}
      {hasCrumbs && (
        // 로케이션(현재 위치) 영역: 데스크톱(lg, 1024px 이상)에서만 노출
        <nav className="hidden border-t border-t-[#EFEFEF] bg-[#F7F7F8] lg:block" aria-label="현재 위치">
          <ol className="mx-auto my-0 box-border flex max-w-[1200px] list-none items-center gap-1.5 px-5 py-2.5 text-[13px] text-[#6B6B6B]">
            <li className="flex items-center">
              <svg role="img" aria-label="홈" width="15" height="15" viewBox="0 0 24 24" fill="#8A8A8A">
                <path d="M12 3 3 10.5V21h6v-6h6v6h6V10.5z" />
              </svg>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span aria-hidden="true">›</span>
                <span style={{ fontWeight: c.weight, color: c.color }}>{c.label}</span>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
}
