# EXTAY 전체 지점 랜딩페이지

리틀리 형태의 최대 480px 중앙 세로 화면, 2열 사진 카드를 사용하는 모바일 퍼스트 정적 페이지입니다. 별도 설치나 빌드가 필요 없습니다.

## 콘텐츠

- 익스테이 관련 6개 공간, 다른 브랜드 5개 공간, 오픈 예정 2개 지점을 구분합니다.
- 사용자 제공 4개 기존 안내·예약 링크를 유지했습니다. 아고다 URL의 과거 날짜·인원·검색 세션은 제거했습니다.
- 공간로드 프로젝트 10개를 모두 반영했습니다. 기존 3개와 중복되므로 새로 추가한 공간은 7개입니다. 기존 해방촌을 포함해 사진 카드 11개가 표시됩니다.
- 프로젝트 소개 페이지는 ‘공간 보기’로 연결합니다. 현재 예약 가능 여부를 의미하지 않습니다. 청량리·서면은 사용자 제공 오픈 예정 상태를 유지합니다.
- 설명은 제공된 안내와 공개 사진에서 확인할 수 있는 공간 특징을 요약했습니다. 요금, 객실 수, 운영 상태 등 미확인 정보는 추가하지 않았습니다.
- 기존 사진은 사용자 프로젝트 자료·공식 가이드·사용자 제공 아고다 페이지, 추가 7개 사진은 https://spaceroad.co.kr/project 의 해당 프로젝트 대표 이미지입니다.
- 공유 이미지는 사진 없는 검정 배경의 EXTAY 로고와 한글 안내로 구성합니다. assets/extay-share-v4.png를 OG/Twitter에 연결했습니다.
- Apple SD Gothic Neo를 우선 사용하며, 설치되지 않은 기기에는 자체 호스팅한 Pretendard Variable 1.3.9를 표시합니다. 원본과 SIL OFL은 https://github.com/orioncactus/pretendard 에서 가져왔으며 라이선스는 assets/fonts/LICENSE.txt에 보관합니다.

## 관리

branches.js의 배열 순서대로 표시됩니다. id, name, region, description, image, imageAlt를 입력합니다. guideUrl, bookingUrl, mapUrl은 HTTPS 주소만 연결합니다. projectUrl은 프로젝트 소개 링크입니다. sourceUrl은 콘텐츠 참고 출처입니다.

group: collection은 ‘또 다른 머무름’에 표시됩니다. status: coming-soon은 사진과 링크 없이 ‘곧 만나요’에 표시됩니다. visible: false는 숨김 처리합니다. 실제 확인된 공간만 추가하세요.

## 배포

Vercel checkin-director/mobileguide-extayallbranch의 GitHub main 연동으로 정적 배포합니다.

- 저장소: https://github.com/checkindirector/mobileguide_extayallbranch
- 공개 페이지: https://mobileguide-extayallbranch.vercel.app/
- 레이아웃 참고: https://litt.ly/loop.seoul
