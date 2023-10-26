import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../../lib/data/data.json'
import circleg from '../../lib/img/groom.png'
import circleb from '../../lib/img/bride.png'
import telephone from '../../lib/img/telephone.png'

const SingleBox = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 50%;
  padding: 0 5vw;
  box-sizing: border-box;
`

const CircleImgBox = styled.div`
  margin-bottom: 4vw;
  position: relative;

  a {
    display: block;
    position: relative;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 50%;
    color: #000;
    text-decoration: none;
  }

  img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`
const NameStrong = styled.strong`
  font-size: 4vw;
  color: #fff;
  font-weight: 400;
  display: block;
  margin-bottom: 5vw;
`

const ContactName = styled.div`
  a {
    height: 9vw;
    box-sizing: border-box;
    border: 1px solid #796453;
    border-radius: 2vw;
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
  span {
    position: relative;
    font-weight: 500;
    color: #f7f0e8;
    font-size: 3.5vw;
    padding-left: 2vw;
  }
`
const ContactImgBox = styled.div`
  //   background-repeat: no-repeat;
  background-size: cover;
  width: 3vw;
  height: 3vw;
`

const ContactCoupleBox = (props) => {
  const { type } = props
  let arrData = {}
  let imgurl
  // console.log("SingleContactBox" , props.type);

  switch (type) {
    case 'groom':
      arrData = data.groom
      imgurl = circleg
      break
    case 'bride':
      arrData = data.bride
      imgurl = circleb
      break
    default:
      console.log('ContactCoupleBox props undefined')
      break
  }

  return (
    <SingleBox>
      <CircleImgBox>
        <a href={`tel:${arrData.tel}`}>
          <img alt="circleimg" src={imgurl}></img>
        </a>
      </CircleImgBox>
      <NameStrong>{arrData.name}</NameStrong>
      <ContactName>
        <a href={`tel:${arrData.tel}`}>
          <ContactImgBox
            alt=""
            style={{
              background: 'url(' + telephone + ') ',
              backgroundSize: 'cover',
            }}
          />
          <span>{arrData.type}에게</span>
        </a>
      </ContactName>
    </SingleBox>
  )
}

export default ContactCoupleBox
