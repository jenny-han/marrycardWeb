import React, { Children, useEffect } from 'react'

import kakaomap from '../../lib/img/kakaomap.webp'
import navermap from '../../lib/img/navermap.webp'
import KakaoMapScript, {
  getMapURL,
  getLocationURL,
  panTo,
} from '../../modules/KaKaoMapScript'
import styled from 'styled-components'
import ReplayIcon from '@mui/icons-material/Replay'
const Map = styled.div`
  width: 100%;
  height: 70vw;
`
const SetCenterBtn = styled.div`
  width: 6vw;
  height: 6vw;
  background-color: #fff;
  padding: 1vw;
  border-radius: 50vw;
  border: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  //   top: ;
  //   left: 2vw;
  z-index: 10;
  img {
    width: 3vw;
  }
`
const MapDetailLink = styled.div`
  font-size: 3.8vw;
  padding: 4vw 0;
  background-color: #ece1d5;
  font-family: 'JeonjuCraftGoR';
`
const MapBtnBox = styled.div`
  margin-top: 2vw;
  padding: 5vw 2vw 2vw;
`
const NaviBtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  padding: 2vw;
  background-color: #fff;
  border: #faf6f2;
  border-radius: 2vw;
  margin: 2vw;
  //   font-family: 'Noto Sans KR', sans-serif;
  font-size: 4vw;
  img {
    border-radius: 1vw;
    border: 1px solid #fff;
    width: 5vw;
    margin-right: 2vw;
  }
`
const HowtoGoH3 = styled.h3`
  margin-bottom: 3vw;
  //   font-family: 'Nanum Myeongjo', serif;
  font-weight: 700;
  font-size: 4.5vw;
`
const MapLocation = (props) => {
  const { lat, lng, name, placeId } = props

  let kakaolink = getLocationURL(placeId)
  let naverlink =
    'http://map.naver.com/index.nhn?elng=' +
    lng +
    '&elat=' +
    lat +
    '&pathType=0&showMap=true&etext=' +
    name +
    '&menu=route'

  useEffect(() => {
    KakaoMapScript(lat, lng)
  }, [])

  const moveCenter = () => {
    panTo(lat, lng)
  }
  return (
    <div id="mapWrapDiv">
      <Map id="map" />
      {/* <SetCenterBtn id="center" onClick={moveCenter}>
        <ReplayIcon />
      </SetCenterBtn> */}
      <a href={getMapURL(placeId)} target="blank">
        <MapDetailLink>지도 자세히 보기</MapDetailLink>
      </a>

      <MapBtnBox>
        <HowtoGoH3>길찾기</HowtoGoH3>

        <a href={kakaolink} target="blank">
          <NaviBtnBox>
            <img src={kakaomap} alt="카카오맵" />
            카카오맵
          </NaviBtnBox>
        </a>
        <a href={naverlink} target="blank">
          <NaviBtnBox>
            <img src={navermap} alt="네이버지도" />
            네이버지도
          </NaviBtnBox>
        </a>
      </MapBtnBox>
    </div>
  )
}

export default MapLocation
