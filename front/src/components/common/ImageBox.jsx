import React from 'react'
import styled from 'styled-components'

const MainImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainImage = styled.img``

const ImageBox = (props) => {
  const { imgUrl, alt, width } = props
  return (
    <MainImageBox>
      <MainImage src={imgUrl} alt={alt} style={{ width: width }} />
    </MainImageBox>
  )
}

export default ImageBox
