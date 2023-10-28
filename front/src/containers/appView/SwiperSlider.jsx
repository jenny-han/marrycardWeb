import React, { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules'

// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { GallaryImage } from './GalleryImageData'

const MySwiperMain = styled(Swiper)`
  //   background-color: rgb(250, 249, 249);
`
const ThumbImage = styled.img`
  max-height: 100vw;
`

const MySwiperSlider = styled(SwiperSlide)`
  text-align: center;
  font-size: 2vw;
  margin-bottom: 5vw;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: auto;
`

const MyThumbSlider = styled(SwiperSlide)`
  align-items: center;
  display: flex;
  font-size: 2vw;
  justify-content: center;
  margin-bottom: 5vw;
  text-align: center;
  height: auto;
`
const MySwiperSub = styled(Swiper)``
const SwiperSlider = () => {
  const [swiper, setSwiper] = useState(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const swiperParams = {
    loop: true,
    spaceBetween: 10,
    navigation: true,
    pagination: true,
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
    },
    modules: [FreeMode, Navigation, Thumbs],
  }

  return (
    <>
      <MySwiperMain
        style={{
          '--swiper-navigation-color': '#808080',
          '--swiper-navigation-size': '4vw',
        }}
        {...swiperParams}
        ref={setSwiper}
      >
        {GallaryImage.map((slide, index) => {
          return (
            <MySwiperSlider key={index}>
              <ThumbImage src={slide.image} alt="gallary" />
            </MySwiperSlider>
          )
        })}
      </MySwiperMain>
      <Swiper
        style={{ '--swiper-pagination-color': '#808080' }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        pagination={{ clickable: true, dynamicBullets: true }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
      >
        {GallaryImage.map((slide, index) => {
          return (
            <MyThumbSlider key={'_' + index}>
              <img
                src={slide.image}
                alt="gallary"
                style={{ margin: '5vw 0' }}
              />
            </MyThumbSlider>
          )
        })}
      </Swiper>
    </>
  )
}

export default SwiperSlider
