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
  height: 300px;
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
  font-size: 1.2em;
  padding: 15px 0;
  background-color: #ecebdb;
`
const MapBtnBox = styled.div`
  margin-top: 10px;
  padding: 30px 5px 5px;
`
const NaviBtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  padding: 10px;
  background-color: #fff;
  border: #faf6f2;
  border-radius: 10px;
  margin: 10px;
  //   font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2em;
  img {
    border-radius: 5px;
    border: 1px solid #fff;
    width: 26px;
    margin-right: 15px;
  }
`
const HowtoGoH3 = styled.h3`
  margin-bottom: 20px;
  //   font-family: 'Nanum Myeongjo', serif;
  font-weight: 700;
  font-size: 1.5em;
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
