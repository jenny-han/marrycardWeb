import styled from 'styled-components'

const CardMemoBoxBlock = styled.div`
  text-align: center;
  padding: 10px 0;
  line-height: 2;
  border: 1px solid #c6cac6;
  margin: 50px 30px 0;
  border-radius: 20px;
  position: relative;
`
const MemoTitle = styled.div`
  span {
    background: #dce5dc;
    display: inline-block;
    border-radius: 20px;
    font-size: 1.3em;
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
