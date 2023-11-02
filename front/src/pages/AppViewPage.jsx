import React from 'react'

import { useParams } from 'react-router-dom'
import MetaTag from '../layout/SEOMetaTag'

import AppViewContainer from '../containers/appView/AppViewContainer'
import { Helmet } from 'react-helmet-async'

function AppViewPage(props) {
  const { url } = useParams()

  return (
    <div>
      {url === 'jyhs1209' ? (
        <>
          {/* <Helmet>
            <title>준연♥혜수 결혼합니다!</title>
          </Helmet> */}
          <MetaTag
            title="준연♥혜수 결혼합니다!"
            url="jyhs1209"
            imgsrc="https://k.kakaocdn.net/dn/mt6L0/btszy41yBft/lkDGomdCChdRGUQRYyPvq0/kakaolink40_original.jpg"
            description="2023. 12. 09 (토) 오후 03시 30분, 야탑역 라온제나 분당 8층 플로렌스홀"
          />
          <AppViewContainer />
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>잘못된 접근입니다!</p>
      )}
    </div>
  )
}

export default AppViewPage
