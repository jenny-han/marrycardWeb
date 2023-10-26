import React from 'react'
import styled from 'styled-components'

const CalendarDdayDiv = styled.div`
  font-size: 4vw;
  font-weight: 500;
  letter-spacing: -0.25vw;
  font-family: 'KyoboHand';
  background: #fcfaf2;
  margin-top: 4vw;
  padding: 3vw;
  //   width: 100%;
  color: black;
`

const CalendarDday = (props) => {
  const { wd_date } = props
  let todaydate = new Date()
  let year = wd_date.substring(0, 4)
  let month = wd_date.substring(4, 6)
  let day = wd_date.substring(6, 8)
  let hour = wd_date.substring(8, 10)
  let minute = wd_date.substring(10, 12)
  //   console.log(wd_date, year, month, day, hour, minute)
  let weddingdate = new Date(year, parseInt(month) - 1, day, hour, minute)
  //   console.log(weddingdate)
  let diffdate = weddingdate.getTime() - todaydate.getTime()
  let caldday = Math.round(diffdate / (1000 * 60 * 60 * 24))
  let ddaytext =
    Math.abs(caldday) + '일' + (caldday > 0 ? ' 남았습니다.' : ' 지났습니다.')

  return (
    <CalendarDdayDiv>
      준연, 혜수의 결혼식이 {caldday === 0 ? '오늘입니다 !' : ddaytext}
    </CalendarDdayDiv>
  )
}

export default CalendarDday
