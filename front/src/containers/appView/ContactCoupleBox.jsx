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
  padding: 0 25px;
  box-sizing: border-box;
`

const CircleImgBox = styled.div`
  margin-bottom: 20px;
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
  font-size: calc(11px + 1.4vmin);
  color: #fff;
  font-weight: 400;
  display: block;
  margin-bottom: 30px;
`

const ContactName = styled.div`
  a {
    height: 45px;
    box-sizing: border-box;
    border: 1px solid #796453;
    border-radius: 10px;
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
    font-size: calc(8px + 1.5vmin);
    padding-left: 10px;
  }
`
const ContactImgBox = styled.div`
  //   background-repeat: no-repeat;
  background-size: cover;
  width: 1em;
  height: 1em;
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
