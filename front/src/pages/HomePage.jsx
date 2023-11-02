import React from 'react'
import styled from 'styled-components'

import home_img from '../lib/img/homeimg.png'
import logo from '../lib/img/logo2.png'
import ogimg from '../lib/img/noname.png'

import MetaTag from '../layout/SEOMetaTag'

const HomeBlock = styled.div`
  margin-top: 100px;
  //   font-family: serif;
  font-size: 1.2em;
  text-align: center;
`
const HomePage = () => {
  return (
    <HomeBlock>
      <MetaTag
        title="CH.WEDDING"
        imgsrc={ogimg}
        description="당신만을 위한 청첩장, 채널 웨딩"
      />
      <img src={home_img} alt="contents " style={{ marginBottom: '30px' }} />
      <footer
        style={{ background: 'black', minHeight: '100px', padding: '20px' }}
      >
        <img
          src={logo}
          alt="ch.wedding"
          style={{ width: '100px', margin: '10px' }}
        />
        <p style={{ color: 'white', fontSize: '.8em' }}>
          채널웨딩
          <br /> dev.jennyhan@gmail.com
        </p>
      </footer>
    </HomeBlock>
  )
}

export default HomePage
