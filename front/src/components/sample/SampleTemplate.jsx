import styled from 'styled-components'

const SampleTemplateBlock = styled.div`
  position: absoulte;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`

const EnterBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  width: 360px;
  padding: 2em;
  text-align: center;
`

const SampleTemplate = ({ children }) => {
  return (
    <SampleTemplateBlock>
      <EnterBox>{children}</EnterBox>
    </SampleTemplateBlock>
  )
}

export default SampleTemplate
