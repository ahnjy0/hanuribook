"use client";

import { useState } from "react";

const VIDEOS = [
  { key: "class", label: "수업 안내", id: "GiuYqgf9PIc" },
  { key: "lv1", label: "어휘리더 1", id: "y-iMSdUmuOA" },
  { key: "lv2", label: "어휘리더 2", id: "ZVBz02-40tU" },
] as const;

export default function VideoSection() {
  const [active, setActive] = useState(0);
  // 재생 버튼을 누르기 전에는 안내 화면을 보여 주고, 누르면 선택한 영상을 바로 재생
  const [playing, setPlaying] = useState(false);
  const cur = VIDEOS[active];

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
        어휘리더를 영상으로 만나 보세요
      </h2>
      <div className="mx-auto my-0 w-full max-w-[760px] overflow-hidden rounded-[20px] border border-[#EFEFEF]">
        <div className="grid grid-cols-3" role="tablist" aria-label="영상 분류">
          {VIDEOS.map((v, i) => {
            const on = i === active;
            return (
              <button
                key={v.key}
                type="button"
                id={`v-vid-tab-${v.key}`}
                className={`h-11.5 cursor-pointer border-0 font-[family-name:inherit] text-[14px] ${
                  on ? "bg-[#C2410C] font-bold text-white" : "bg-[#F7F7F8] font-semibold text-[#333333]"
                }`}
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
              title={`어휘리더 ${cur.label} 영상`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#FFF4D6]">
              <span className="text-center text-[22px] leading-[1.35] font-extrabold">
                <span className="text-[#C2410C]">글쓰기와 토론</span>까지 한 번에!
              </span>
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
