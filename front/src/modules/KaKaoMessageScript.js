
/* global Kakao */

export const sendMessage = () => {
    // init 체크
    if (!Kakao.isInitialized()) {
        Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
    
    Kakao.Share.sendDefault({
        objectType: 'location',
        address: '경기도 성남시 분당구 성남대로 916번길 5 8층',
        addressTitle: '라온제나 분당',
        content: {
          title: '준연♥혜수 결혼합니다',
          description: '2023. 12. 09 (토) 오후 03시 30분, 야탑역 라온제나 분당 8층 플로렌스홀',
          imageUrl:'https://k.kakaocdn.net/dn/mt6L0/btszy41yBft/lkDGomdCChdRGUQRYyPvq0/kakaolink40_original.jpg',
          link: { 
            mobileWebUrl: 'http://ch-wedding.kr/card/jyhs1209',
             webUrl: 'http://ch-wedding.kr/card/jyhs1209',
          },
        },
        buttons: [
          {
            title: '자세히 보기',
              link: { 
            mobileWebUrl: 'http://ch-wedding.kr/card/jyhs1209',
             webUrl: 'http://ch-wedding.kr/card/jyhs1209',
          },
          },
          {
            title : '위치 보기',
            link : {
                mobileWebUrl : 'https://kko.to/gkV20gCSBB',
                webUrl : 'https://kko.to/gkV20gCSBB'
            }

          }
        ],
      });
    }