# EXTAY 전체 지점 랜딩페이지

리틀리 형태의 최대 480px 중앙 세로 화면, 2열 사진 카드를 사용하는 모바일 퍼스트 정적 페이지입니다. 별도 설치나 빌드가 필요 없습니다.

## 콘텐츠

- 익스테이 섹션에는 기존 6개 공간과 오픈 예정 2개 지점을 함께 표시하며, 다른 브랜드 5개 공간은 별도 컬렉션으로 구분합니다.
- 숙소별 버튼을 ‘예약하기’로 통일했습니다. 모바일에서는 하단 선택창, 큰 화면에서는 중앙 선택창에서 확인된 예약 사이트로 이동합니다. 이용 안내·지도·프로젝트 버튼은 제거했습니다.
- 공간로드 프로젝트 10개를 모두 반영했습니다. 기존 3개와 중복되므로 새로 추가한 공간은 7개입니다. 기존 해방촌을 포함해 사진 카드 11개가 표시됩니다.
- 사용자가 제공한 일정에 따라 서면은 2026년 10월, 청량리는 2026년 11월 오픈 예정으로 표시합니다.
- 설명은 제공된 안내와 공개 사진에서 확인할 수 있는 공간 특징을 요약했습니다. 요금, 객실 수, 운영 상태 등 미확인 정보는 추가하지 않았습니다.
- 기존 사진은 사용자 프로젝트 자료·공식 가이드·사용자 제공 아고다 페이지, 추가 7개 사진은 https://spaceroad.co.kr/project 의 해당 프로젝트 대표 이미지입니다.
- 공유 이미지는 사진 없는 검정 배경의 EXTAY 로고와 한글 안내로 구성합니다. assets/extay-share-v5.png를 OG/Twitter에 연결했습니다.
- Apple SD Gothic Neo를 우선 사용하며, 설치되지 않은 기기에는 자체 호스팅한 Pretendard Variable 1.3.9를 표시합니다. 원본과 SIL OFL은 https://github.com/orioncactus/pretendard 에서 가져왔으며 라이선스는 assets/fonts/LICENSE.txt에 보관합니다.

## 관리

branches.js의 배열 순서대로 표시됩니다. id, name, region, description, image, imageAlt를 입력합니다. sourceUrl은 콘텐츠 참고 출처입니다.

예약 링크는 bookingLinks: [{provider: "booking", url: "https://..."}] 형식으로 추가합니다. provider는 booking, agoda, trip, airbnb를 지원합니다. 해당 플랫폼의 HTTPS 주소만 표시하며, 날짜·인원·검색 세션이 없는 숙소 상세 주소를 사용합니다. 배열이 비어 있으면 비활성 예약 버튼과 ‘예약 링크 준비 중’을 표시합니다. 링크를 추가하면 자동으로 활성화됩니다. 날짜별 객실 재고 및 요금은 해당 예약 사이트에서 확인합니다.

## 예약 링크 확인 기록 (2026-09-22)

9개 숙소에 23개 예약 링크를 연결했습니다. 각 원본 주소는 branches.js에 기록되어 있습니다. 부킹닷컴은 동일 숙소의 한국어 경로를 사용합니다.

| 숙소 | 확인된 예약처 | 숙소 식별 근거 |
| --- | --- | --- |
| 익스테이 맨션 충무로 | 부킹닷컴, 아고다, 트립닷컴 | EXTAY Chungmuro, 퇴계로 238 / 충무로5가 77-2, 라운지·계단 사진 |
| 익스테이 동대문 | 부킹닷컴, 아고다, 트립닷컴 | EXTAY Dongdaemun, 종로 294 4층, 사용자 제공 아고다 |
| 익스테이 어나더하우스 | 부킹닷컴, 트립닷컴 | Another House, 종로 294 5층, 여성 전용 숙소 |
| 더 익스테이 라운지 종로 | 부킹닷컴, 아고다, 트립닷컴 | The EXTAY Lounge Jongno, 수표로 91, 오렌지 라운지 |
| 익스테이 맨션 연남 | 부킹닷컴, 아고다, 트립닷컴 | 성미산로23길 20, EXTAY Mansion Yeonnam 소개, 3BR·2Bath |
| 스테이멜로우 제기 | 부킹닷컴, 트립닷컴 | Stay Mellow Dongdaemun, 왕산로 88 6층 |
| 니어블루 삼성 | 부킹닷컴, 트립닷컴 | Near Blue, 삼성로92길 28 6–7층 |
| 스테이네모 을지로 | 부킹닷컴, 트립닷컴 | STAY NEMO Seoul Myeongdong, 을지로3가 291-37 3층 |
| 스테이사이 종로5가 | 부킹닷컴, 아고다, 트립닷컴 | Stay Sai, 종로31길 12-5 |

해방촌은 사용자가 에어비앤비 운영을 확인했지만 정확한 공유 링크를 확보하지 못했습니다. 스테이나루 제기도 정확한 예약 페이지를 특정하지 못했습니다. 사용자 지시에 따라 확인된 링크만 배포하며, 두 숙소에는 임의의 검색 결과나 타지역 동명 숙소를 연결하지 않습니다. 어나더하우스는 아고다 목록에서 이름이 검색되지만 직접 상세 주소를 확보하지 못해 추가하지 않았습니다.

group: collection은 ‘또 다른 머무름’에 표시됩니다. status: coming-soon은 익스테이 카드 목록에 COMING SOON과 openingLabel을 표시합니다. openingMonth는 YYYY-MM 형식이며 예약 링크는 표시하지 않습니다. visible: false는 숨김 처리합니다. 실제 확인된 공간만 추가하세요.

## 배포

Vercel checkin-director/mobileguide-extayallbranch의 GitHub main 연동으로 정적 배포합니다.

- 저장소: https://github.com/checkindirector/mobileguide_extayallbranch
- 공개 페이지: https://mobileguide-extayallbranch.vercel.app/
- 레이아웃 참고: https://litt.ly/loop.seoul
