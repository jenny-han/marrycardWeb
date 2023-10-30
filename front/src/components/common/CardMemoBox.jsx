import styled from 'styled-components'

const CardMemoBoxBlock = styled.div`
  text-align: center;
  padding: 5vw 0;
  line-height: 2;
  border: 1px solid green;
  margin: 4vw;
  border-radius: 2vw;
  position: relative;
`
const MemoTitle = styled.div`
  span {
    background: #e2f0d9;
    display: inline-block;
    border-radius: 2vw;
    font-size: 4vw;
    margin: 0 auto;
    padding: 0 24px;
  }
  position: absolute;
  top: -1rem;
  width: 100%;
`

const CardMemoBox = (props) => {
  console.log(props)
  return (
    <CardMemoBoxBlock>
      <MemoTitle>
        <span>{props.title}</span>
      </MemoTitle>
      {props.children}
    </CardMemoBoxBlock>
  )
}

export default CardMemoBox
