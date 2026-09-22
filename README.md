# EXTAY 전체 지점 랜딩페이지

리틀리 형태의 지점 연결 페이지입니다. 기존 익스테이 가이드의 로고, 사진, 따뜻한 색감을 사용했습니다. 별도 설치나 빌드 없이 정적 웹호스팅에 연결할 수 있습니다.

## 현재 상태

- 사용자가 제공한 6개 지점을 등록했습니다. 해방촌·충무로·동대문·어나더하우스는 안내 또는 예약 연결, 청량리·서면은 오픈 예정입니다.
- 아고다 링크는 숙소 경로와 cid, 통화만 유지했습니다. 과거 체크인 날짜, 인원, 검색 세션 및 추적 쿼리는 제거했습니다.
- 각 링크는 사용자가 직접 제공했습니다. 외부 사이트의 봇 차단 등으로 전체 목적지의 현재 정상 동작 여부는 자동 검증할 수 없었습니다.
- 지점 사진이 없는 곳은 지점별 영문 약자로 표시합니다. 다른 지점의 사진을 혼용하지 않았습니다.
- 주소와 지점 사진도 위 프로젝트의 사용자 제공 자료를 그대로 사용했습니다.
- 공개 배포 대상: Vercel `checkin-director/mobileguide-extayallbranch`. 원격 저장소의 main을 운영 브랜치로 사용합니다.

## 지점 추가

`branches.js`의 `window.EXTAY_BRANCHES` 배열에 객체를 추가합니다. 배열 순서대로 표시되며 개수 제한이 없습니다.

| 필드 | 내용 |
| --- | --- |
| id | 중복 없는 영문 지점 ID |
| visible | true이면 노출, false이면 숨김 |
| name / englishName | 한글 / 영문 지점명 |
| region | 지역·동네 |
| description | 짧은 소개 |
| address | 공개 가능한 주소 |
| image / imageAlt | assets 내 사진 경로 / 사진 설명 |
| guideUrl | 확인된 HTTPS 이용 안내 링크 |
| bookingUrl | 확인된 HTTPS 예약 링크. 비어 있으면 버튼 숨김 |
| bookingLabel | 예약 버튼 문구 |
| mapUrl | 확인된 HTTPS 지도 링크 |
| monogram | 사진이 없을 때 쓰는 지점 약자 |
| status | coming-soon이면 오픈 예정. 예약·안내 버튼 미표시 |

실제 지점명을 알기 전에는 빈 카드나 가상의 지역을 추가하지 마세요. 운영 전 지점은 공개 시점에 맞춰 visible을 변경하세요.

## 미리보기·배포

`index.html`을 브라우저에서 열거나, 이 폴더를 정적 HTTP 서버의 루트로 지정합니다. 의존성, API 키, 서버 기능이 필요하지 않습니다. 배포 시 이 폴더 전체를 문서 루트로 사용합니다.

원격 저장소: https://github.com/checkindirector/mobileguide_extayallbranch

콘텐츠 참조: https://litt.ly/loop.seoul
