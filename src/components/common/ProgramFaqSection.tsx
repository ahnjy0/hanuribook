import SectionLabel from "@/components/common/SectionLabel";

export type FaqItem = { q: string; a: string };

// 프로그램 공통 FAQ (기존 수업상담·교재 구성 안내 문구를 바탕으로 작성). 페이지별 질문이 필요하면 items 로 넘김
export const PROGRAM_FAQS: FaqItem[] = [
  {
    q: "우리 아이에게 맞는 과정은 어떻게 알 수 있나요?",
    a: "무료 상담을 신청하시면 한우리 선생님이 아이의 독서력 수준을 진단하고, 학년과 목표에 딱 맞는 과정을 안내해 드립니다.",
  },
  {
    q: "수업은 어디에서 진행되나요?",
    a: "사는 곳에 따라 그 지역에 소속된 선생님이 학생의 집으로 방문하기도 하고, 학생이 선생님 댁으로 가서 수업하기도 합니다. 거주 지역이 한우리 소속 센터와 가깝다면 학원 형태의 독서교실에서 수업을 받을 수도 있습니다.",
  },
  {
    q: "교재와 필독서는 어떻게 구성되나요?",
    a: "교과 연계와 최신 평가 유형 반영을 위해 매월 새로운 교재와 엄선된 필독서로 수업합니다. 과정별 자세한 구성은 각 프로그램의 '교재 구성'에서 확인하실 수 있습니다.",
  },
  {
    q: "일대일 수업도 가능한가요?",
    a: "일대일 수업도 가능합니다. 다만 또래 친구들과 같은 주제로 생각을 나누고 상대를 설득하는 토론, 그 생각을 글로 옮기는 논술은 그룹 활동일 때 가장 효과적입니다.",
  },
  {
    q: "첫 수업은 어떻게 진행되나요?",
    a: "한우리독서토론논술 프로그램의 특징과 수업 계획, 과제 등 학습 전반에 대한 오리엔테이션을 한 뒤 첫 수업을 진행합니다. 그룹 아이들의 역량과 선생님의 재량에 따라 조금씩 다를 수 있습니다.",
  },
  {
    q: "상담 신청하면 바로 결제되나요?",
    a: "아닙니다. 전화 상담과 방문 진단은 무료이며, 실제 수업 진행 여부는 상담 후 자녀와 편안하게 상의하여 결정하실 수 있습니다.",
  },
];

type Props = {
  items?: FaqItem[];
  /** 라벨 글자색·배경색 (페이지 강조색에 맞춤) */
  labelColor?: string;
  labelBg?: string;
  /** 아이콘·열린 질문 강조색 */
  accent?: string;
  /** 페이지 맨 끝(푸터 바로 위)에 올 때 아래 여백 추가 */
  last?: boolean;
  /** 바로 위 섹션도 배경색 띠일 때 위 여백 없이 붙임 */
  flush?: boolean;
};

/**
 * 프로그램 FAQ: 질문을 누르면 답변이 펼쳐지는 아코디언.
 * 브라우저 기본 <details>/<summary>를 써서 JS 없이 열고 닫히며, 키보드·화면낭독기로도 조작 가능
 */
export default function ProgramFaqSection({
  items = PROGRAM_FAQS,
  labelColor = "#C2410C",
  labelBg = "#FFF1E7",
  accent = "#C2410C",
  last = false,
  flush = false,
}: Props) {
  return (
    // 옅은 회색 배경을 화면 너비 전체로 깔고, 안쪽 내용만 본문 너비(1200px)로 맞춤
    <section
      className={`bg-[#F5F5F7] px-0 py-12 lg:py-20 ${flush ? "mt-0" : "mt-13 lg:mt-24"} ${last ? "" : "mb-0"}`}
      aria-labelledby="prog-faq"
    >
      <div className="mx-auto my-0 box-border flex max-w-[1200px] flex-col gap-3.5 px-5 lg:gap-5">
      <div className="text-center">
        <SectionLabel color={labelColor} bg={labelBg}>
          FAQ
        </SectionLabel>
        <h2 className="mx-0 my-1.5 text-[24px] font-extrabold lg:text-[34px]" id="prog-faq">
          자주 묻는 질문
        </h2>
      </div>
      <div className="mx-auto mt-1.5 flex w-full max-w-[900px] flex-col gap-2.5">
        {items.map((f, i) => (
          <details key={i} className="group rounded-[16px] border border-[#EEEEEE] bg-white">
            <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 px-4.5 py-3.5 text-[15px] font-bold text-[#1F1F1F] lg:px-6 lg:text-[18px] [&::-webkit-details-marker]:hidden">
              <span className="flex-none font-extrabold" style={{ color: accent }} aria-hidden="true">
                Q.
              </span>
              <span className="min-w-0 flex-1 break-keep">{f.q}</span>
              {/* + 아이콘: 열리면 45도 돌아 × 모양 */}
              <svg
                className="flex-none transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accent}
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <div className="flex gap-3 px-4.5 pt-0 pb-4.5 text-[14px] leading-[1.7] break-keep text-[#333333] lg:px-6 lg:pb-5.5 lg:text-[17px]">
              <span className="flex-none font-extrabold text-[#8A8A8A]" aria-hidden="true">
                A.
              </span>
              {/* 답변 안의 줄바꿈(\n)은 문단으로 나눠 보여 줌 */}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                {f.a.split("\n").map((para, j) => (
                  <p key={j} className="m-0">
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
