"use client";

import { Fragment } from "react";
import Link from "next/link";
import logoImg from "@/assets/images/logo.webp";
import SmartLink from "@/components/common/SmartLink";
import { PATHS } from "@/routes";
import { useHeader, type HeaderProps } from "./useHeader";

export default function Header(props: HeaderProps) {
  const {
    accent,
    accentFill,
    accentText,
    hasSubs,
    hasThirds,
    thirds,
    menuClosed,
    menuExp,
    menuGroups,
    menuLabel,
    menuOpen,
    subs,
    tabs,
    toggleMenu,
    closeMenu,
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
        // 전체 메뉴: 화면 위에 덮는 창(어두운 배경 클릭 · Esc · X 로 닫힘, 열린 동안 뒤 페이지 스크롤 잠금)
        // 모바일 · 태블릿: 오른쪽에서 들어오는 서랍 / 데스크톱: 위에서 내려오는 4열 패널
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="전체 메뉴">
          <button
            type="button"
            className="absolute inset-0 cursor-default border-0 bg-black/45 p-0"
            aria-label="전체 메뉴 닫기"
            onClick={closeMenu}
          />
          <nav
            className="absolute top-0 right-0 flex h-full w-[86%] max-w-[400px] animate-menu-in flex-col overflow-y-auto overscroll-contain bg-white shadow-[-12px_0_32px_rgba(0,0,0,0.15)] motion-reduce:animate-none lg:right-0 lg:left-0 lg:h-auto lg:max-h-[85dvh] lg:w-full lg:max-w-none lg:animate-menu-down lg:rounded-b-[28px] lg:shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
            aria-label="전체 메뉴"
          >
            {/* 머리: 로고 · 닫기 */}
            <div className="mx-auto box-border flex h-15 w-full max-w-[1200px] flex-none items-center justify-between border-0 border-b border-solid border-[#F1F1F1] px-5">
              <Link className="flex items-center no-underline" href="/" onClick={closeMenu}>
                <img className="block h-7 w-auto" src={logoImg.src} alt="한우리독서토론논술 홈" />
              </Link>
              <button
                type="button"
                className="-mr-2.5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent hover:bg-[#F5F5F5]"
                aria-label="전체 메뉴 닫기"
                onClick={closeMenu}
              >
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            {/* 메뉴 묶음: 모바일 위아래 / 데스크톱 4열 */}
            <div className="mx-auto box-border grid w-full max-w-[1200px] flex-auto grid-cols-1 content-start gap-0 px-5 py-3 lg:grid-cols-4 lg:gap-8 lg:py-8">
              {menuGroups.map((g, i) => (
                <div key={i} className="flex flex-col gap-2 border-0 border-b border-solid border-[#F3F3F3] py-4 last:border-b-0 lg:border-b-0 lg:py-0">
                  <SmartLink
                    className="flex items-center justify-between text-[18px] font-extrabold text-[#1F1F1F] no-underline lg:border-0 lg:border-b-2 lg:border-solid lg:pb-3 lg:text-[20px]"
                    style={{ borderColor: accent }}
                    href={g.href}
                    onClick={closeMenu}
                  >
                    {g.label}
                    <svg className="lg:hidden" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </SmartLink>
                  {g.hasItems && (
                    <ul className="m-0 grid list-none grid-cols-2 gap-x-2 gap-y-1 p-0 lg:mt-1 lg:grid-cols-1 lg:gap-y-2">
                      {g.items.map((it, j) => (
                        <li key={j} className="flex flex-col">
                          <SmartLink
                            className="flex min-h-10 items-center rounded-[10px] px-2 text-[15px] font-semibold text-[#333333] no-underline hover:bg-[#FFF4EC] lg:min-h-0 lg:px-0 lg:py-1 lg:text-[16px] lg:hover:bg-transparent lg:hover:text-[#D94E0F]"
                            href={it.href}
                            onClick={closeMenu}
                          >
                            {it.label}
                          </SmartLink>
                          {/* 3뎁스: 데스크톱에서만 작게 */}
                          {it.thirds.length > 0 && (
                            <ul className="m-0 hidden list-none flex-col gap-1 p-0 pb-1 pl-3 lg:flex">
                              {it.thirds.map((t, k) => (
                                <li key={k}>
                                  <SmartLink
                                    className="text-[13px] text-[#8A8A8A] no-underline hover:text-[#1F1F1F]"
                                    href={t.href}
                                    onClick={closeMenu}
                                  >
                                    · {t.label}
                                  </SmartLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {/* 아래 바로가기: 수업상담 신청 · 센터찾기 */}
            <div className="mx-auto box-border grid w-full max-w-[1200px] flex-none grid-cols-2 gap-2 px-5 pt-2 pb-6 lg:max-w-[560px] lg:pb-8">
              <SmartLink
                className="flex h-12 items-center justify-center rounded-[12px] border-[1.5px] border-solid bg-white text-[15px] font-bold no-underline"
                style={{ borderColor: accent, color: accentText }}
                href={PATHS.Centers}
                onClick={closeMenu}
              >
                센터찾기
              </SmartLink>
              <SmartLink
                className="flex h-12 items-center justify-center rounded-[12px] text-[15px] font-bold text-white no-underline"
                style={{ background: accentFill }}
                href={PATHS.Consult}
                onClick={closeMenu}
              >
                수업상담 신청하기
              </SmartLink>
            </div>
          </nav>
        </div>
      )}
      <nav className="border-t border-t-[#F3F3F3]" aria-label="주 메뉴">
        <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-4 px-2 py-0">
          {tabs.map((t, i) => (
            <Fragment key={i}>
              {t.on && (
                <SmartLink
                  className="flex h-12 items-center justify-center text-[15px] font-bold whitespace-nowrap no-underline lg:h-14 lg:text-[17px] lg:font-extrabold"
                  style={{ color: accentText, borderBottom: `2px solid ${accent}` }}
                  href={t.href}
                  aria-current="page"
                >
                  {t.label}
                </SmartLink>
              )}
              {t.off && (
                <SmartLink
                  className="flex h-12 items-center justify-center border-b-2 border-b-transparent text-[15px] font-medium whitespace-nowrap text-[#222222] no-underline lg:h-14 lg:text-[17px] lg:font-bold"
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
          {/* 모바일·태블릿: 3열 격자 / 데스크톱: 메뉴 수와 상관없이 한 줄에 같은 너비로 나열 */}
          <div className="mx-auto my-0 box-border grid max-w-[1200px] grid-cols-3 gap-2 px-4 py-3 lg:flex lg:px-5 lg:*:flex-1">
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
                    className="box-border flex min-h-10 min-w-0 items-center justify-center rounded-[10px] border border-[#ECE4DE] bg-white px-1.5 py-1 text-center text-[14px] leading-[1.3] font-medium break-keep text-[#222222] no-underline"
                    href={s.href}
                  >
                    {s.label}
                  </SmartLink>
                )}
              </Fragment>
            ))}
          </div>
          {hasThirds && (
            // 3뎁스 메뉴: 2뎁스(박스 버튼)와 구분되도록 박스 없이 글자 메뉴로 가볍게.
            // 데스크톱은 왼쪽에 상위 메뉴명(예: 초등정규 ›)을 붙여 위계를 보여 주고, 메뉴 사이는 세로 구분선
            <nav
              className="mx-auto my-0 box-border max-w-[1200px] px-4 lg:px-5"
              aria-label={`${props.sub ?? ""} 하위 메뉴`}
            >
              <div className="flex items-center pb-1.5 lg:gap-4 lg:pb-2">
                <span
                  className="hidden flex-none items-center gap-1.5 text-[14px] font-bold whitespace-nowrap text-[#8A7E76] lg:flex"
                  aria-hidden="true"
                >
                  {props.sub}
                  <span className="text-[#C9BDB4]">›</span>
                </span>
                {/* 모바일: 글자 길이만큼 차지하고 메뉴 사이 간격을 똑같이(양 끝 맞춤) — 메뉴명 길이가 달라도 간격이 고르게
                    데스크톱: 글자 길이만큼 나열 + 세로 구분선 */}
                <ul className="m-0 flex flex-auto list-none justify-between px-1 py-0 lg:flex-none lg:items-center lg:justify-start lg:px-0">
                  {thirds.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-center lg:before:mx-1 lg:before:h-3 lg:before:w-px lg:before:bg-[#DDD2CA] lg:first:before:hidden"
                    >
                      <SmartLink
                        className={`flex h-9 w-auto items-center justify-center gap-1.5 px-1 text-[14px] whitespace-nowrap no-underline lg:w-auto lg:px-4 lg:text-[15px] ${
                          t.on ? "font-extrabold" : "font-semibold text-[#666666] hover:text-[#1F1F1F]"
                        }`}
                        style={t.on ? { color: accentText } : undefined}
                        href={t.href}
                        aria-current={t.on ? "page" : undefined}
                      >
                        {t.on && (
                          <span className="h-1.5 w-1.5 flex-none rounded-full" style={{ background: accent }} aria-hidden="true" />
                        )}
                        {t.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}
        </div>
      )}
      {/* 로케이션(현재 위치) 영역은 표시하지 않음. 브레드크럼(crumbs) 값은 3뎁스 현재 메뉴 판별에만 사용 */}
    </header>
  );
}
