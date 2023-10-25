import React from 'react'
import styled from 'styled-components'

const MainImageBox = styled.div`
  z-index: -1;
`
const MainImage = styled.img`
  width: 100%;
`
const FullImageBox = (props) => {
  const { imgUrl, alt } = props
  return (
    <MainImageBox>
      <MainImage src={imgUrl} alt={alt} />
    </MainImageBox>
  )
}

export default FullImageBox
