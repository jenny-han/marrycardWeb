import React from 'react'
import styled from 'styled-components'
import { copyDoc } from '../../modules/copy.js'

const ToggleBlock = styled.div`
  padding: 20px 13px;
  border-bottom: 1px dashed;
`
const AccountInfo = styled.div`
  position: relative;
  color: #000;
  font-weight: 500;
  margin-bottom: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: calc(10px + 0.7vmin);
  em {
    font-weight: 400;
    font-style: normal;
    font-size: calc(10px + 0.6vmin);
    white-space: nowrap;
    position: relative;
    margin-left: 7px;
    letter-spacing: -0.02em;
  }
`
const AccountName = styled.div`
  // font-weight: 300;
  color: #000;
  font-size: calc(9px + 0.6vmin);
  em {
    font-size: calc(11px + 0.6vmin);
    font-style: normal;
  }
`
const AccountBtn = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`
const BankCopyBtn = styled.button`
  width: 50%;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  background: #fff;
  font-size: 14px;
  padding: 10px;
  color: #222;
  font-weight: 500;
  border: none;
`

const AccountToggle = (props) => {
  let type = props.togdata.type
  const number = props.togdata.number
  const bank = props.togdata.bank
  let data = props.togdata

  const doCopyAccount = () => {
    let copytxt = bank + ' ' + number
    copyDoc('계좌', copytxt)
  }
  return (
    <ToggleBlock
      style={
        type === 'groom'
          ? { background: '#eff0eb', borderBottomColor: '#dbddcf' }
          : { background: '#f6f3ef', borderBottomColor: '#ddd6cd' }
      }
    >
      <AccountInfo>
        <div>
          <span>{data.bank}</span>
          <em>{data.number}</em>
        </div>

        <AccountName>
          <p>
            {data.type === 'groom' ? '신랑' : '신부'}{' '}
            {data.member ? (data.member === 'mom' ? '어머니' : '아버지') : ''}
            <em>{data.name}</em>
          </p>
        </AccountName>
      </AccountInfo>
      <AccountBtn>
        <BankCopyBtn text={'은행'} onClick={doCopyAccount}>
          계좌번호 복사하기
        </BankCopyBtn>
      </AccountBtn>
    </ToggleBlock>
  )
}

export default AccountToggle
