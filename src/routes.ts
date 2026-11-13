// 화면 이름 → Next.js 라우트 경로
export const PATHS = {
  StyleGuide: "/style-guide",
  Header: "/header",
  BottomNav: "/bottom-nav",
  Footer: "/footer",
  CourseHub: "/course-hub",
  ProgramDetail: "/program-detail",
  Main: "/",
  Program: "/program",
  Kinder: "/kinder",
  Elementary: "/elementary",
  Advanced: "/advanced",
  Middle: "/middle",
  Special: "/special",
  Consult: "/consult",
  Centers: "/centers",
  Teacher: "/teacher",
  TeacherSpecial: "/teacher-special",
  TeacherCourse: "/teacher-course",
  Seminar: "/seminar",
  Franchise: "/franchise",
  Desktop: "/desktop",
  TabletCenters: "/tablet-centers",
  DetailVocab: "/detail-vocab",
  DetailReading: "/detail-reading",
  DetailLogic: "/detail-logic",
  DetailScience: "/detail-science",
  DetailHistory: "/detail-history",
  DetailGeo: "/detail-geo",
  DetailWorld: "/detail-world",
  DetailSocrates: "/detail-socrates",
  DetailLiterature: "/detail-literature",
} as const;

export type PageName = keyof typeof PATHS;

export const SITE_TITLE = "한우리독서토론논술 프로토타입";
