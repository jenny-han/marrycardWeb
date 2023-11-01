import styled from 'styled-components'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { copyDoc } from '../../modules/copy'
import { Divider } from '@mui/material'

import MapLocation from '../../containers/appView/MapLocation'
import MapTransport from '../common/MapTransport'
import CardTitleText from '../common/CardTitleText'

import traffic from '../../lib/img/traffic.png'
import CardMemoBox from '../common/CardMemoBox'

const MapPlaceBlock = styled.div`
  font-family: 'JeonjuCraftGoR';
  text-align: center;
  padding: 80px 0 50px 0;
  background-color: #f7f6f4;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const MapInfoBox = styled.div``
const LocationInfo = styled.div`
  padding: 20px 0;
`
const LocationTitle = styled.div`
  padding: 10px 0;
  font-size: calc(12px + 1.4vmin);
  letter-spacing: -1px;
  font-weight: 600;
`
const LocationAddr = styled.div`
  font-size: calc(8px + 1.4vmin);
  color: #555;
  line-height: 1.7;
  text-align: center;
  span {
    font-size: calc(7px + 1.4vmin);
  }
`
const CopyImg = styled(ContentCopyIcon)`
  position: absolute;
  margin-left: 8px;
  width: 0.8em;
`
const ImgIcon = styled.img`
  width: 100px;
`
const MapTitle = styled.div`
  margin: 10px;
  // font-family: 'Nanum Myeongjo', serif;
  font-weight: 700;
  font-size: 20px;
`
const SubwayBtn = styled.span`
  padding: 5px;
  border-radius: 60px;
  background-color: #fff;
  color: rgb(241, 201, 64);
  font-size: 14px;
  font-weight: 700;
  border: 2px solid;
`

const MapPlace = () => {
  // lat, lng, name placeId 를 어디에서 넘겨줄지 ..?
  const lat = 37.4115009
  const lng = 127.1297925
  const name = '라온제나분당'
  const addr = '경기도 성남시 분당구 성남대로 916번길 5'
  const placeId = 342952142

  const doCopyAddr = () => {
    copyDoc('주소', addr)
  }
  return (
    <MapPlaceBlock>
      <MapInfoBox>
        <ImgIcon src={traffic} alt="icon" />
        <CardTitleText text="오시는 길" />
        <LocationInfo>
          <LocationTitle>라온제나 분당 8층 플로렌스홀</LocationTitle>
          <LocationAddr>
            {addr}
            <CopyImg onClick={doCopyAddr} />
            <br />
            <span>(야탑동 366-1) / (판교역 5분, 판교 IC 7분)</span>
          </LocationAddr>
        </LocationInfo>
      </MapInfoBox>
      <MapLocation
        lat={lat}
        lng={lng}
        name={name}
        placeId={placeId}
      ></MapLocation>
      {/* <Divider variant="middle" /> */}
      <CardMemoBox title=" 대절버스안내 ">
        <div
          style={{
            padding: '40px 0 10px 0',
            fontSize: '14px',
            wordBreak: 'keep-all',
          }}
        >
          🚍 오전 11시30분 출발 <br />
          삼성동 119안전센터 ( 구 대전 중부소방서 ) <br />
          |
          <br />
          🚍 오후 12시(정오) 출발 <br />
          유성차량등록사업소 앞<br />
          |
          <br />
          💒 웨딩홀 도착 <br />
          라온제나 분당
          <br />
        </div>
      </CardMemoBox>
      {/* <Divider variant="middle" /> */}
      <MapTransport>
        <MapTitle>주차안내</MapTitle>
        <p>
          라온제나분당 (관보빌딩) 주차장 <br />
          지하 2, 3, 4층 <br />
          <br />
          <b>외부주차장</b>
          <br />
          야탑역 환승주차장 <br />
          or <br />
          라온제나분당 건물 뒷면 공영주차장 <br />
          (각 1시간 30분 무료 주차)
          <br />
        </p>
      </MapTransport>
      <Divider variant="middle" />
      <MapTransport>
        <MapTitle>지하철</MapTitle>
        <p>
          <SubwayBtn>수인분당선</SubwayBtn> <b>야탑역</b> 하차 후, <br />
          <b>2번출구</b>에서 도보 3분 거리
        </p>
      </MapTransport>
      <Divider variant="middle" />

      <MapTransport>
        <MapTitle>버스</MapTitle>
        <p>
          <b>야탑역</b> 하차 후, 도보 3분 <br />
          <br />
          51, 55, 57, 200, 60, 76 <br />
          103, 119, 250, 300, 340 330.350, 380, <br />
          1005, 3330, 8109, 9300, 9408
        </p>
      </MapTransport>
    </MapPlaceBlock>
  )
}

export default MapPlace
