import styled from 'styled-components'
import ImageBox from '../common/ImageBox'
import inviteMsgImg from '../../lib/img/invitationMessage.png'
import CardTitleText from '../common/CardTitleText'

const InvitationBlock = styled.div`
  // background-color: rgb(155 157 132 / 23%);
  padding: 60px 0;
`

const Invitation = () => {
  return (
    <InvitationBlock>
      <CardTitleText text="초대합니다" />
      <ImageBox imgUrl={inviteMsgImg} alt="invite" width="100%" />
    </InvitationBlock>
  )
}

export default Invitation
