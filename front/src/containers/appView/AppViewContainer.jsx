import React from 'react'
import MainCover from '../../components/preview/MainCover'
import Invitation from '../../components/preview/Invitation'
import Calendar from '../../components/preview/Calendar'
import Greeting from '../../components/preview/Greeting'
import PhotoGallery from '../../components/preview/PhotoGallery'
import Account from '../../components/preview/Account'
import MapPlace from '../../components/preview/MapPlace'
import GuestBook from '../../components/preview/GuestBook'
import ShareLink from '../../components/preview/ShareLink'

import ImageBox from '../../components/common/ImageBox'
import weddingImg from '../../lib/img/weddingImage.jpg'

const AppViewContainer = () => {
  return (
    <>
      {/* 웰컴이미지 */}
      <MainCover />

      {/* 청첩문구 */}
      <Invitation />
      {/* 중간 이미지 */}
      <ImageBox imgUrl={weddingImg} alt="jyhsImg" width="100%" />

      {/* 캘린더 및 디데이 */}
      <Calendar />
      {/* 신랑 신부 감사인사.  */}
      <Greeting />

      {/* 갤러리 */}
      <PhotoGallery />
      {/* 계좌 안내 */}
      <Account />
      {/* 오시는 길 지도  */}
      <MapPlace />

      {/* 참석여부 전달 */}
      {/* <CheckAttendance /> */}

      {/* 방명록. */}
      <GuestBook />
      {/* 공유하기, */}
      <ShareLink />
    </>
  )
}

export default AppViewContainer
