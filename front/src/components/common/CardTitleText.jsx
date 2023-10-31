import React from 'react'
import styled from 'styled-components'

const InviteMsg = styled.div`
  font-size: 1.5em;
  font-weight: 800;
  padding: 20px 0;
  letter-spacing: 3px;
  text-align: center;
  font-family: 'JeonjuCraftGoR';
`

const CardTitleText = (props) => {
  const { text, color } = props
  return <InviteMsg style={{ color: color ? color : '#555' }}>{text}</InviteMsg>
}

export default CardTitleText
