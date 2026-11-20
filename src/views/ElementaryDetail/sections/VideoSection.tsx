"use client";

import { useState } from "react";
import type { ElementaryCourse } from "../elementaryData";

type Video = { key: string; label: string; id: string };

/** 영상 탭 + 재생. 과정별 영상 목록(videos)과 강조색(d.accent) 사용 */
export default function VideoSection({ d, videos }: { d: ElementaryCourse; videos: Video[] }) {
  const [active, setActive] = useState(0);
  // 재생 버튼을 누르기 전에는 안내 화면을 보여 주고, 누르면 선택한 영상을 바로 재생
  const [playing, setPlaying] = useState(false);
  const cur = videos[active];

  const pickTab = (i: number) => {
    setActive(i);
    setPlaying(false); // 탭을 바꾸면 다시 안내 화면부터
  };

  return (
    <section
      className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 pt-12 lg:gap-5 lg:pt-24"
      aria-labelledby="v-vid"
    >
      <h2 className="m-0 text-center text-[18px] font-extrabold" id="v-vid">
        {d.name}를 영상으로 만나 보세요
      </h2>
      <div className="mx-auto my-0 w-full max-w-[760px] overflow-hidden rounded-[20px] border border-[#EFEFEF]">
        <div className="grid grid-cols-3" role="tablist" aria-label="영상 분류">
          {videos.map((v, i) => {
            const on = i === active;
            return (
              <button
                key={v.key}
                type="button"
                id={`v-vid-tab-${v.key}`}
                className={`h-11.5 cursor-pointer border-0 font-[family-name:inherit] text-[14px] ${
                  on ? "font-bold text-white" : "bg-[#F7F7F8] font-semibold text-[#333333]"
                }`}
                style={on ? { background: d.accent } : undefined}
                role="tab"
                aria-selected={on}
                aria-controls="v-vid-panel"
                onClick={() => pickTab(i)}
              >
                {v.label}
              </button>
            );
          })}
        </div>
        <div id="v-vid-panel" role="tabpanel" aria-labelledby={`v-vid-tab-${cur.key}`} className="aspect-video">
          {playing ? (
            // 탭을 바꾸면 iframe이 사라져, 보던 영상은 멈춤
            <iframe
              key={cur.id}
              className="block h-full w-full border-0 bg-black"
              src={`https://www.youtube.com/embed/${cur.id}?autoplay=1`}
              title={`${d.name} ${cur.label} 영상`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3" style={{ background: d.soft }}>
              <span className="text-center text-[22px] leading-[1.35] font-extrabold">
                <span style={{ color: d.accent }}>글쓰기와 토론</span>까지 한 번에!
              </span>
              {/* 영상 ID가 아직 없으면(빈 값) 재생 버튼 대신 '준비 중' 안내 */}
              {cur.id ? (
                <button
                  type="button"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[50%] border-0 bg-[#D93025]"
                  aria-label={`${cur.label} 영상 재생`}
                  onClick={() => setPlaying(true)}
                >
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              ) : (
                <span className="rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#6B6B6B] lg:text-[15px]">
                  영상 준비 중입니다
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
