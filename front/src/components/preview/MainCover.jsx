import styled from 'styled-components'
import mainImg from '../../lib/img/main_img.jpeg'
import FullImageBox from '../common/FullImageBox'

const MainCoverBlock = styled.div``
const InfoBox = styled.div`
  width: 100%;
  font-family: 'UhBeeHyeki';
  text-align: center;
  color: black;
  top: 30vw;
  position: absolute;
  background-color: #dddddd60;
`
const MainCover = () => {
  return (
    <MainCoverBlock>
      <FullImageBox imgUrl={mainImg} alt="main_img" />
      <InfoBox>
        <div>김준연 ♥︎ 양혜수</div>
        <div>2023년 12월 09일 (토) 오후 03시 30분</div>
        <div>더리버사이드호텔 7층 콘서트홀</div>
      </InfoBox>
    </MainCoverBlock>
  )
}

export default MainCover
