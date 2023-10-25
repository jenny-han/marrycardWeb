import styled from 'styled-components'
import FullImageBox from '../common/FullImageBox'
import inviteMsg from '../../lib/img/invitationMessage.png'

const InvitationBlock = styled.div``

const Invitation = () => {
  return (
    <InvitationBlock>
      <FullImageBox imgUrl={inviteMsg} alt="invite" />
    </InvitationBlock>
  )
}

export default Invitation
