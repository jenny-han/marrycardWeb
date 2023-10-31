import styled from 'styled-components'
import ImageBox from '../common/ImageBox'
import CalendarDday from '../../containers/appView/CalendarDday'
import calenderImg from '../../lib/img/calendar_img.jpeg'
import { Divider } from '@mui/material'
import CardTitleText from '../common/CardTitleText'

const CalendarBlock = styled.div`
  background: #fff;
  font-family: 'JeonjuCraftGoR';
  font-size: 1.2em;
  line-height: 1.5;
  text-align: center;
  padding-top: 35px;
`
const CalendarImgBox = styled(ImageBox)`
  padding-bottom: 30px;
`

const Calendar = () => {
  return (
    <CalendarBlock>
      {/* <CardTitleText text="어느 겨울날❄️, 결혼합니다 ❤️" /> */}
      {/* <div>김준연 ♥ 양혜수</div> */}
      <div>2023. 12. 09 (토) 오후 03시 30분</div>
      <div>라온제나 분당 8층 플로렌스홀 </div>
      <Divider variant="middle" style={{ margin: '35px 40px' }} />
      <CalendarImgBox imgUrl={calenderImg} alt="calendar" width="50%" />

      <CalendarDday wd_date="202312091530" />
    </CalendarBlock>
  )
}

export default Calendar
