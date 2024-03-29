import React from 'react'
import data from '../../lib/data/data.json'
import styled from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccountToggle from './AccountToggle'
import FavoriteIcon from '@mui/icons-material/Favorite'

const AccountBoxBlock = styled.div`
  border: 1px solid;
  margin-bottom: 20px;
  width: 80%;
  word-break: keep-all;
  font-family: 'Pretendard-Regular';
`
const BoxTitle = styled.div`
  padding: 0 0 5px 15px;
  position: relative;
  cursor: pointer;
  height: 50px;
  background: #e6e7dd;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  span {
    padding-left: 15px;
    line-height: 1.5;
    font-size: 17px;
    margin-top: 3px;
    font-weight: 700;
  }
`

const ToggleWrap = styled.div`
  :last-child {
    border-bottom: 0;
  }
`

const AccountBox = (props) => {
  const { type, member } = props
  let arrData = {}
  let typeKor
  let AccountData = []
  const [showAccountList, setShowAccountList] = React.useState(false)
  const onClick = () => setShowAccountList(!showAccountList)

  switch (type) {
    case 'groom':
      arrData = data.groom
      break
    case 'bride':
      arrData = data.bride
      break
    default:
      console.log('AccountBox props undefined')
      break
  }

  typeKor = arrData.type

  AccountData.push({
    type: type,
    name: arrData.name,
    bank: arrData.account.bank,
    number: arrData.account.number,
  })

  member.map((m) => {
    let memberData = arrData[m]
    return AccountData.push({
      type: type,
      member: m,
      name: memberData.name,
      bank: memberData.account.bank,
      number: memberData.account.number,
    })
  })

  return (
    <AccountBoxBlock
      style={
        type === 'groom'
          ? { borderColor: '#dbddcf' }
          : { borderColor: '#ddd6cd' }
      }
    >
      <BoxTitle
        style={type === 'groom' ? {} : { background: '#efeae2' }}
        onClick={onClick}
      >
        <FavoriteIcon
          sx={{ color: type === 'groom' ? '#595d3b' : '#856442' }}
        />
        <span
          style={type === 'groom' ? { color: '#595d3b' } : { color: '#856442' }}
        >
          {typeKor}측
          <ExpandMoreIcon
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              marginTop: '-0.5em',
              transform: showAccountList ? 'rotate(180deg)' : '',
            }}
          />
        </span>
      </BoxTitle>
      <ToggleWrap style={{ display: showAccountList ? 'block' : 'none' }}>
        {AccountData.map((d) => {
          return <AccountToggle togdata={d} key={d.name} />
        })}
      </ToggleWrap>
    </AccountBoxBlock>
  )
}

export default AccountBox
