import styled from 'styled-components'
import flower from '../../lib/img/flower.png'
import CardTitleText from '../common/CardTitleText'
import SwiperSlider from '../../containers/appView/SwiperSlider'

const PhotoGalleryBlock = styled.div`
  padding: 10vw 0;
  text-align: center;
`
const TitleBoxWithImg = styled.div`
  img {
    width: 50px;
  }
`
const PhotoZone = styled.div`
  margin: 4vw 2vw;
`

const PhotoGallery = () => {
  return (
    <PhotoGalleryBlock>
      <TitleBoxWithImg>
        <img src={flower} alt="flower"></img>
        <CardTitleText text="갤러리" />
      </TitleBoxWithImg>
      <PhotoZone>
        <SwiperSlider />
      </PhotoZone>
    </PhotoGalleryBlock>
  )
}

export default PhotoGallery
