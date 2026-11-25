import Title, { CARD, Section } from "@/views/TeacherSpecial/sections/Title";

/** 선생님 종류 — 프로그램 소개 '한우리 수업, 어떤 선생님이 가르치나요?'와 같은 내용 */
const ROLES: { name: string; desc: string; img: string; scale?: string }[] = [
  {
    name: "독서지도사",
    desc: "아이들의 발달 단계와 수준에 맞는 교재와 교수법으로 독서를 지도합니다.",
    img: "https://cdn.hanuribook.com/img/icon/teacher.png",
  },
  {
    name: "토론논술교사",
    desc: "토의·토론·논술 수업을 통해 스스로 사고하고 표현하는 능력을 키워줍니다.",
    img: "https://cdn.hanuribook.com/img/icon/master.png",
    // master.png는 그림 안 여백이 넓어 같은 크기로 두면 작아 보임 → 살짝 키움(프로그램 소개와 같은 보정)
    scale: "scale-[1.13]",
  },
];

/** 선생님 설명: 소개 문구 + 선생님 종류 카드 2개(그림 + 이름 + 설명), 데스크톱 1:1 */
export default function RolesSection() {
  return (
    <Section id="t-role">
      <Title id="t-role" icon="who">
        한우리 선생님의 전문 분야
      </Title>
      <p className="m-0 text-[14px] leading-[1.7] break-keep text-[#333333] lg:text-[17px]">
        전문적인 교육을 받고 자격증을 취득한 한우리 선생님이 가르칩니다. 한우리 선생님은 독서토론논술 전문가입니다.
      </p>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 lg:grid-cols-2 lg:gap-4">
        {ROLES.map((r) => (
          <li key={r.name} className={`${CARD} flex items-center gap-4 p-4.5 lg:p-6`}>
            <span className="flex h-24 w-24 flex-none items-center justify-center rounded-[22px] bg-white lg:h-28 lg:w-28 lg:rounded-[24px]">
              <img
                className={`block h-[88px] w-[88px] object-contain lg:h-[104px] lg:w-[104px] ${r.scale ?? ""}`}
                src={r.img}
                width={1024}
                height={1024}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </span>
            <div className="flex flex-col gap-1.5">
              <strong className="text-[17px] font-extrabold text-[#C2410C] lg:text-[20px]">{r.name}</strong>
              <p className="m-0 text-[14px] leading-[1.6] break-keep text-[#333333] lg:text-[16px]">{r.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
