// 카카오(다음) 우편번호 서비스: API 키 없이 브라우저에서 바로 쓸 수 있어 정적 사이트(GitHub Pages)에서도 동작함
// 스크립트는 '주소 검색' 버튼을 처음 누를 때 한 번만 불러옴

const SRC = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

export type PostcodeResult = {
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
  sido: string;
  sigungu: string;
};

type PostcodeCtor = new (opts: { oncomplete: (data: PostcodeResult) => void }) => { open: () => void };

declare global {
  interface Window {
    daum?: { Postcode: PostcodeCtor };
  }
}

let loading: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (window.daum?.Postcode) return Promise.resolve();
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        loading = null; // 실패하면 다음에 다시 시도
        reject(new Error("주소 검색 스크립트를 불러오지 못했습니다."));
      };
      document.head.appendChild(s);
    });
  }
  return loading;
}

/** 주소 검색 팝업을 열고, 주소를 고르면 onPick 으로 결과를 넘김 */
export async function openPostcode(onPick: (data: PostcodeResult) => void) {
  await loadScript();
  new window.daum!.Postcode({ oncomplete: onPick }).open();
}
