import styled from 'styled-components'
// import mainImg from '../../lib/img/main_img2.jpeg'
import mainImg from '../../lib/img/main_img3.jpeg'

import ImageBox from '../common/ImageBox'
// import mainText from '../../lib/img/maintext.png'
// import mainText from '../../lib/img/title_img.png'
const MainCoverBlock = styled.div`
  margin: 0;
  padding: 5vw 0;
`
const InfoBox = styled.div`
  width: 100%;
  font-size: 1.4em;
  text-align: center;
  // text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
  top: 15vw;
  // background-color: #ffffff;
  // position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const MainInfo = styled.div``
const MainText = styled.div`
  font-size: 1em;
  font-family: 'KyoboHand';
  color: #999;
  margin-top: 2px;
  padding: 2px 30px;
`

const ImageCard = styled.img`
  margin: 5vw 0;
  width: 70%;
  background: #fff;
  border: 20px solid #fff;
  box-shadow: 0.1px 0.1px 0.2px hsl(0deg 0% 72%/0),
    0.3px 0.3px 0.6px hsl(0deg 0% 72%/0.1),
    0.6px 0.6px 1.3px hsl(0deg 0% 72%/0.2), 1px 0.9px 2px hsl(0deg 0% 72%/0.3),
    1.7px 1.6px 3.5px hsl(0deg 0% 72%/0.4),
    -0.1px -0.1px 0.2px hsl(0deg 0% 92%/0),
    -0.3px -0.4px 0.8px hsl(0deg 0% 92%/0.06),
    -0.5px -0.6px 1.2px hsl(0deg 0% 92%/0.12),
    -0.8px -1px 1.9px hsl(0deg 0% 92%/0.18),
    -1.4px -1.7px 3.3px hsl(0deg 0% 92%/0.23);
`

const MainCover = () => {
  return (
    <MainCoverBlock>
      <InfoBox>
        {/* <ImageBox imgUrl={mainText} alt="main_text" width="100%" /> */}

        <MainText> 어느 겨울날❄️, 결혼합니다 ❤️ </MainText>
        <MainInfo>
          김준연 <span style={{ fontSize: '.7em' }}>그리고</span> 양혜수
        </MainInfo>
        {/* <div>2023. 12. 09 (토) 오후 03시 30분</div>
        <div>라온제나 분당 8층 플로렌스홀 </div> */}
        <ImageCard src={mainImg} alt="main_img" />
      </InfoBox>
    </MainCoverBlock>
  )
}

export default MainCover
