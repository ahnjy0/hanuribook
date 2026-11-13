/**
 * 프로그램 소개 페이지용 입체(클레이 3D 스타일) 일러스트.
 * 그라데이션·하이라이트·바닥 그림자로 입체감을 표현한 인라인 SVG입니다.
 * 실제 3D 이미지 파일이 준비되면 이 컴포넌트에서 <img>로 교체하면 됩니다.
 */
export type Illust3DKind = "reader" | "debater" | "consult" | "diagnose" | "lesson";

function Shadow({ id }: { id: string }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-sh`}>
          <stop offset="0" stopColor="#000" stopOpacity="0.22" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="48" cy="89" rx="30" ry="5" fill={`url(#${id}-sh)`} />
    </>
  );
}

/** 상반신 캐릭터 (머리·머리카락·몸통) */
function Bust({
  id,
  x = 0,
  body,
  hair,
}: {
  id: string;
  x?: number;
  body: [string, string];
  hair: "short" | "bob";
}) {
  return (
    <g transform={`translate(${x} 0)`}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={body[0]} />
          <stop offset="1" stopColor={body[1]} />
        </linearGradient>
        <radialGradient id={`${id}-skin`} cx="0.38" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#FFE9DA" />
          <stop offset="0.65" stopColor="#FBC9A6" />
          <stop offset="1" stopColor="#E9A57E" />
        </radialGradient>
        <radialGradient id={`${id}-hair`} cx="0.4" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#7A5444" />
          <stop offset="1" stopColor="#3A251C" />
        </radialGradient>
      </defs>
      {/* 몸통 */}
      <path d="M22 88c0-19 11-28 26-28s26 9 26 28z" fill={`url(#${id}-body)`} />
      <path d="M30 70c4-5 10-8 18-8" stroke="#fff" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* 목 */}
      <rect x="43" y="52" width="10" height="10" rx="4" fill="#E9A57E" />
      {/* 머리 */}
      <circle cx="48" cy="38" r="16" fill={`url(#${id}-skin)`} />
      {hair === "short" ? (
        <path d="M32 37c-1-12 7-20 16-20 10 0 17 7 16 20-3-6-9-10-17-10-7 0-12 4-15 10z" fill={`url(#${id}-hair)`} />
      ) : (
        <path
          d="M31 44c-3-16 5-27 17-27s20 11 17 27c-1-6-3-10-5-12-6 2-14 1-20-4-3 4-7 9-9 16z"
          fill={`url(#${id}-hair)`}
        />
      )}
      {/* 얼굴 */}
      <circle cx="42.5" cy="40" r="1.7" fill="#3A251C" />
      <circle cx="53.5" cy="40" r="1.7" fill="#3A251C" />
      <circle cx="39" cy="45" r="2.6" fill="#FF8FA3" opacity="0.45" />
      <circle cx="57" cy="45" r="2.6" fill="#FF8FA3" opacity="0.45" />
      <path d="M44.5 46.5c2 2 5 2 7 0" stroke="#B4553A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <ellipse cx="42" cy="29" rx="5" ry="2.5" fill="#fff" opacity="0.35" transform="rotate(-20 42 29)" />
    </g>
  );
}

function Reader() {
  const id = "i3d-reader";
  return (
    <>
      <Shadow id={id} />
      <Bust id={id} body={["#FFA166", "#E5561B"]} hair="bob" />
      <defs>
        <linearGradient id={`${id}-page`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EDE6DF" />
        </linearGradient>
        <linearGradient id={`${id}-cover`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0532A" />
          <stop offset="1" stopColor="#A8320C" />
        </linearGradient>
      </defs>
      {/* 펼친 책 */}
      <path d="M48 73 25 68v19l23 5 23-5V68z" fill={`url(#${id}-cover)`} />
      <path d="M48 71 27 66v18l21 5z" fill={`url(#${id}-page)`} />
      <path d="M48 71 69 66v18l-21 5z" fill={`url(#${id}-page)`} />
      <path d="M31 71l12 2.5M31 75l12 2.5M31 79l12 2.5M53 73.5 65 71M53 77.5 65 75M53 81.5 65 79" stroke="#D9CFC6" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M48 71v18" stroke="#CDBFB3" strokeWidth="1.2" />
      {/* 손 */}
      <circle cx="26" cy="76" r="4" fill="#F6B892" />
      <circle cx="70" cy="76" r="4" fill="#F6B892" />
    </>
  );
}

function Debater() {
  const id = "i3d-debater";
  return (
    <>
      <Shadow id={id} />
      <Bust id={id} x={-8} body={["#7FAEF8", "#2F5AA8"]} hair="short" />
      <defs>
        <linearGradient id={`${id}-bub`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#D5E3FF" />
        </linearGradient>
        <linearGradient id={`${id}-bub2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFB27F" />
          <stop offset="1" stopColor="#F26522" />
        </linearGradient>
        <linearGradient id={`${id}-pen`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFD86B" />
          <stop offset="1" stopColor="#F2A900" />
        </linearGradient>
      </defs>
      {/* 말풍선 (파랑) */}
      <g filter="drop-shadow(0 2px 2px rgba(47,90,168,0.25))">
        <rect x="56" y="8" width="34" height="22" rx="11" fill={`url(#${id}-bub)`} />
        <path d="M62 28l-4 8 10-6z" fill="#D5E3FF" />
        <circle cx="66" cy="19" r="2.4" fill="#2F5AA8" />
        <circle cx="73" cy="19" r="2.4" fill="#2F5AA8" />
        <circle cx="80" cy="19" r="2.4" fill="#2F5AA8" />
      </g>
      {/* 말풍선 (주황, 작게) */}
      <g filter="drop-shadow(0 2px 2px rgba(194,65,12,0.25))">
        <rect x="64" y="36" width="24" height="16" rx="8" fill={`url(#${id}-bub2)`} />
        <path d="M82 50l4 6-9-4z" fill="#F26522" />
        <path d="M70 44h12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      {/* 연필 */}
      <g transform="rotate(35 74 72)">
        <rect x="70" y="58" width="8" height="24" rx="1.5" fill={`url(#${id}-pen)`} />
        <rect x="70" y="56" width="8" height="5" rx="1.5" fill="#FF8FA3" />
        <path d="M70 82h8l-4 8z" fill="#F6CFA9" />
        <path d="M72.7 87.4h2.6L74 90z" fill="#3A251C" />
      </g>
    </>
  );
}

function Consult() {
  const id = "i3d-consult";
  return (
    <>
      <Shadow id={id} />
      <defs>
        <linearGradient id={`${id}-back`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFE6D6" />
          <stop offset="1" stopColor="#FFC29C" />
        </linearGradient>
        <linearGradient id={`${id}-main`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#FFA56E" />
          <stop offset="1" stopColor="#E5501A" />
        </linearGradient>
      </defs>
      {/* 뒤 말풍선 */}
      <rect x="40" y="10" width="46" height="32" rx="16" fill={`url(#${id}-back)`} />
      <path d="M76 40l6 9-13-6z" fill="#FFC29C" />
      {/* 앞 말풍선 */}
      <g filter="drop-shadow(0 4px 4px rgba(194,65,12,0.3))">
        <rect x="10" y="28" width="58" height="42" rx="21" fill={`url(#${id}-main)`} />
        <path d="M22 66l-6 14 18-10z" fill="#E5501A" />
      </g>
      <ellipse cx="26" cy="36" rx="10" ry="4" fill="#fff" opacity="0.4" transform="rotate(-12 26 36)" />
      {/* 점 3개 */}
      <circle cx="27" cy="50" r="4.2" fill="#fff" />
      <circle cx="39" cy="50" r="4.2" fill="#fff" />
      <circle cx="51" cy="50" r="4.2" fill="#fff" />
    </>
  );
}

function Diagnose() {
  const id = "i3d-diagnose";
  return (
    <>
      <Shadow id={id} />
      <defs>
        <linearGradient id={`${id}-cover`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7FAEF8" />
          <stop offset="1" stopColor="#2F5AA8" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE08A" />
          <stop offset="1" stopColor="#E09A00" />
        </linearGradient>
        <radialGradient id={`${id}-glass`} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="1" stopColor="#BFE3FF" stopOpacity="0.55" />
        </radialGradient>
        <linearGradient id={`${id}-handle`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FF8A4C" />
          <stop offset="1" stopColor="#C2410C" />
        </linearGradient>
      </defs>
      {/* 책 */}
      <rect x="62" y="24" width="6" height="58" rx="2" fill="#EFEAE4" />
      <rect x="16" y="20" width="50" height="62" rx="5" fill={`url(#${id}-cover)`} />
      <rect x="16" y="20" width="9" height="62" rx="4" fill="#244A8E" />
      <rect x="32" y="32" width="26" height="5" rx="2.5" fill="#fff" opacity="0.9" />
      <rect x="32" y="41" width="18" height="4" rx="2" fill="#fff" opacity="0.6" />
      <path d="M30 24h30" stroke="#fff" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" />
      {/* 돋보기 */}
      <g filter="drop-shadow(0 3px 3px rgba(0,0,0,0.2))">
        <rect x="70" y="60" width="9" height="24" rx="4.5" fill={`url(#${id}-handle)`} transform="rotate(-40 74.5 72)" />
        <circle cx="62" cy="52" r="17" fill={`url(#${id}-glass)`} />
        <circle cx="62" cy="52" r="17" fill="none" stroke={`url(#${id}-rim)`} strokeWidth="6" />
      </g>
      <path d="M53 46a10 10 0 0 1 7-6" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* 체크 */}
      <path d="M56 53l4 4 8-8" stroke="#2F5AA8" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  );
}

function Lesson() {
  const id = "i3d-lesson";
  return (
    <>
      <Shadow id={id} />
      <defs>
        <linearGradient id={`${id}-cover`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF9A5C" />
          <stop offset="1" stopColor="#D94E0F" />
        </linearGradient>
        <linearGradient id={`${id}-pageL`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#EFE8E1" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id={`${id}-pageR`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EFE8E1" />
        </linearGradient>
        <linearGradient id={`${id}-pen`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8FD0A8" />
          <stop offset="1" stopColor="#2E9B5E" />
        </linearGradient>
      </defs>
      {/* 책 표지 */}
      <path d="M48 50C36 43 20 42 8 47v34c12-5 28-4 40 3 12-7 28-8 40-3V47c-12-5-28-4-40 3z" fill={`url(#${id}-cover)`} />
      {/* 페이지 */}
      <path d="M48 47c-11-7-25-8-36-4v34c11-4 25-3 36 4z" fill={`url(#${id}-pageL)`} />
      <path d="M48 47c11-7 25-8 36-4v34c-11-4-25-3-36 4z" fill={`url(#${id}-pageR)`} />
      <path d="M48 47v34" stroke="#D9CFC6" strokeWidth="1.4" />
      <path d="M18 52c8-2 16-1 24 2M18 59c8-2 16-1 24 2M18 66c8-2 16-1 24 2M54 54c8-3 16-4 24-2M54 61c8-3 16-4 24-2M54 68c8-3 16-4 24-2" stroke="#DCD2C8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* 연필 */}
      <g transform="rotate(40 70 24)" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.18))">
        <rect x="65" y="4" width="10" height="34" rx="2" fill={`url(#${id}-pen)`} />
        <rect x="65" y="1" width="10" height="6" rx="2" fill="#FF8FA3" />
        <path d="M65 38h10l-5 10z" fill="#F6CFA9" />
        <path d="M68.3 44.6h3.4L70 48z" fill="#3A251C" />
      </g>
      {/* 반짝이 */}
      <path d="M20 14l2.4 5.6L28 22l-5.6 2.4L20 30l-2.4-5.6L12 22l5.6-2.4z" fill="#FFC93C" />
      <path d="M36 6l1.2 2.8L40 10l-2.8 1.2L36 14l-1.2-2.8L32 10l2.8-1.2z" fill="#FFC93C" opacity="0.8" />
    </>
  );
}

const MAP: Record<Illust3DKind, () => React.JSX.Element> = {
  reader: Reader,
  debater: Debater,
  consult: Consult,
  diagnose: Diagnose,
  lesson: Lesson,
};

export default function Illust3D({ kind, size = 72 }: { kind: Illust3DKind; size?: number }) {
  const Art = MAP[kind];
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 96 96" className="block flex-none overflow-visible">
      <Art />
    </svg>
  );
}
