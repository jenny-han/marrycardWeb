import React from 'react'
import AppViewContainer from '../containers/appView/AppViewContainer'
import { useParams } from 'react-router-dom'

function AppViewPage(props) {
  const { url } = useParams()

  return (
    <div>
      {url === 'jyhs1209' ? (
        <AppViewContainer />
      ) : (
        <p style={{ textAlign: 'center' }}>잘못된 접근입니다!</p>
      )}
    </div>
  )
}

export default AppViewPage
