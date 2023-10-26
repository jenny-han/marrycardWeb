import styled from 'styled-components'
import CardTitleText from '../common/CardTitleText'
import ContactCoupleBox from '../../containers/appView/ContactCoupleBox'
import ContactFamilyBox from '../../containers/appView/ContactFamilyBox'
const GreetingBlock = styled.div`
  background-color: rgb(77 63 56);
  text-align: center;
  padding: 5vw 0;
`

const CoupleBoxGroup = styled.div`
  font-size: 0;
  max-width: 250vw;
  margin-top: 5vw;
  transition: 2s all;
  transition-delay: 500ms;
`
const FamilyBoxGroup = styled.div``

const SubTitle = styled.p`
  margin-top: 10vw;
  margin-bottom: 7vw;
  color: white;
  font-size: 4vw;
  line-height: 1.4;
  letter-spacing: -0.05em;
`
const Greeting = () => {
  return (
    <GreetingBlock>
      <CardTitleText text="전화로 축하를 전해보세요." color="#eee" />
      <CoupleBoxGroup>
        <ContactCoupleBox type="groom" />
        <ContactCoupleBox type="bride" />
      </CoupleBoxGroup>
      <SubTitle>혼주에게 연락하기</SubTitle>
      <FamilyBoxGroup>
        <ContactFamilyBox type="groom" />
        <ContactFamilyBox type="bride" />
      </FamilyBoxGroup>
    </GreetingBlock>
  )
}

export default Greeting
