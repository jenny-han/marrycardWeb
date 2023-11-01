import React from 'react'
import styled from 'styled-components'
import data from '../../lib/data/data.json'
import callIcon from '../../lib/img/call.png'

const SingleBox = styled.div`
display: inline-block;
vertical-align: top;
position: relative;
width: 50%;
padding: 0 10px;
box-sizing: border-box;
}`
const TitleSpan = styled.span`
  margin-bottom: 20px;
  display: block;
  font-size: calc(10px + 1.2vmin);
`
const FamilyBox = styled.div`
  text-align: center;
  padding: 6px;
  a {
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 10px;
    background: #554640;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
`
const FTitle = styled.div`
  color: #f7f0e8;
  font-size: calc(11px + 1vmin);
  word-break: keep-all;
  font-weight: normal;
`
const CallIcon = styled.img`
  margin-left: 10px;
  width: 1.4em;
`
const ContactFamilyBox = (props) => {
  const { type } = props
  let arrData = {}
  switch (props.type) {
    case 'groom':
      arrData = data.groom
      break
    case 'bride':
      arrData = data.bride
      break
    default:
      console.log('ContactFamilyBox props undefined')
      break
  }

  return (
    <SingleBox>
      <TitleSpan
        style={type === 'groom' ? { color: '#a6c0eb' } : { color: '#eba6cd' }}
      >
        {arrData.type}측 혼주
      </TitleSpan>

      <FamilyBox>
        <a href={`tel:${arrData.dad.tel}`}>
          <FTitle>아버지 {arrData.dad.name} </FTitle>
          <CallIcon src={callIcon} alt="call" />
        </a>
      </FamilyBox>

      <FamilyBox>
        <a href={`tel:${arrData.mom.tel}`}>
          <FTitle>어머니 {arrData.mom.name}</FTitle>
          <CallIcon src={callIcon} alt="call" />
        </a>
      </FamilyBox>
    </SingleBox>
  )
}

export default ContactFamilyBox
