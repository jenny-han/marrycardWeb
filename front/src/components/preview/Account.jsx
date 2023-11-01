import styled from 'styled-components'
import CardTitleText from '../common/CardTitleText'
import AccountBox from '../../containers/appView/AccountBox'

const AccountBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 80px 0;
`

const TitleBoxWithMsg = styled.div`
  font-family: 'JeonjuCraftGoR';
  margin-bottom: 40px;
`
const MsgBox = styled.div`
  font-size: calc(8px + 1.3vmin);
`

const Account = () => {
  return (
    <AccountBlock>
      <TitleBoxWithMsg>
        <CardTitleText text="마음 전하실 곳" />
        <MsgBox>" 두 사람을 축하하는 마음을 전해주세요 "</MsgBox>
      </TitleBoxWithMsg>
      <AccountBox type="groom" member={['dad']} />
      <AccountBox type="bride" member={['dad', 'mom']} />
    </AccountBlock>
  )
}

export default Account
