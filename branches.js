// 지점을 추가하려면 아래 배열에 같은 형식으로 정보를 추가하세요.
// visible: false인 항목은 화면에 나타나지 않습니다. 확인한 실제 정보만 등록하세요.
window.EXTAY_BRANCHES = [
  {
    id: "haebangchon",
    visible: true,
    name: "익스테이 맨션 해방촌",
    englishName: "EXTAY MANSION HAEBANGCHON",
    region: "서울 · 해방촌",
    description: "해방촌에서 만나는 익스테이의 공간. 방문 전 오시는 길과 체크인, 숙소 이용 안내를 확인해 보세요.",
    address: "서울시 용산구 신흥로 59, 2층",
    image: "assets/haebangchon-room.jpg",
    imageAlt: "익스테이 맨션 해방촌의 실내",
    guideUrl: "https://extay-release.vercel.app/guide-extay",
    bookingUrl: "",
    bookingLabel: "예약하기"
  },
  {
    id: "chungmuro", visible: true, name: "익스테이 맨션 충무로",
    englishName: "EXTAY MANSION CHUNGMURO", region: "서울 · 충무로", monogram: "CM",
    description: "아고다에서 객실과 예약 가능 일정을 확인하고, 네이버 지도에서 위치를 찾아보세요.",
    bookingUrl: "https://www.agoda.com/ko-kr/extay-chungmuro/hotel/seoul-kr.html?cid=1439847&currencyCode=KRW",
    bookingLabel: "아고다 예약", mapUrl: "https://map.naver.com/p/entry/place/2040373750"
  },
  {
    id: "dongdaemun", visible: true, name: "익스테이 동대문",
    englishName: "EXTAY DONGDAEMUN", region: "서울 · 동대문", monogram: "DD",
    description: "객실과 예약 가능 일정은 아고다에서, 지점 위치는 네이버 지도에서 확인하세요.",
    bookingUrl: "https://www.agoda.com/ko-kr/a-extay-30-4-2-ddp/hotel/seoul-kr.html?cid=1439847&currencyCode=KRW",
    bookingLabel: "아고다 예약", mapUrl: "https://naver.me/5K6Tdfxh"
  },
  {
    id: "anotherhouse", visible: true, name: "익스테이 어나더하우스",
    englishName: "EXTAY ANOTHER HOUSE", region: "어나더하우스", monogram: "AH",
    description: "어나더하우스의 공간과 머무는 동안 필요한 정보를 모바일 가이드에서 확인하세요.",
    guideUrl: "https://anotherhouse-guide.vercel.app/"
  },
  {
    id: "cheongnyangni", visible: true, name: "익스테이 청량리",
    englishName: "EXTAY CHEONGNYANGNI", region: "서울 · 청량리", status: "coming-soon",
    description: "새로운 익스테이를 준비하고 있습니다. 오픈 소식과 이용 안내는 추후 공개됩니다."
  },
  {
    id: "seomyeon", visible: true, name: "익스테이 서면",
    englishName: "EXTAY SEOMYEON", region: "부산 · 서면", status: "coming-soon",
    description: "부산에서 만날 익스테이를 준비하고 있습니다. 오픈 소식과 이용 안내는 추후 공개됩니다."
  }
];
