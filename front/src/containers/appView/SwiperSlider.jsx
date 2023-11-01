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

const ThumbImage = styled.img`
  max-height: 500px;
`

const MySwiperSlider = {
  textAlign: 'center',
  fontSize: '5px',
  marginBottom: '20px',
  display: '-webkit-box',
  display: '-ms-flexbox',
  display: '-webkit-flex',
  display: 'flex',
  WebkitBoxPack: 'center',
  MsFlexPack: 'center',
  WebkitJustifyContent: 'center',
  justifyContent: 'center',
  WebkitBoxAlign: 'center',
  MsFlexAlign: 'center',
  WebkitAlignItems: 'center',
  alignItems: 'center',
  height: 'auto',
}

const MyThumbSlider = {
  alignItems: 'center',
  display: 'flex',
  fontSize: '5em',
  justifyContent: 'center',
  marginBottom: '40px',
  textAlign: 'center',
  height: 'auto',
}

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
      <Swiper
        style={{
          '--swiper-navigation-color': '#808080',
          '--swiper-navigation-size': '20px',
        }}
        {...swiperParams}
        ref={setSwiper}
      >
        {GallaryImage.map((slide, index) => {
          return (
            <SwiperSlide style={MySwiperSlider} key={index}>
              <ThumbImage src={slide.image} alt="gallary" />
            </SwiperSlide>
            // <MySwiperSlider key={index}>
            //   <ThumbImage src={slide.image} alt="gallary" />
            // </MySwiperSlider>
          )
        })}
      </Swiper>
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
            <SwiperSlide style={MyThumbSlider} key={'_' + index}>
              <img
                src={slide.image}
                alt="gallary"
                style={{ margin: '30px 0' }}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default SwiperSlider
