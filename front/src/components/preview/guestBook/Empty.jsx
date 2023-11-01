import styled from 'styled-components'
import TelegramIcon from '@mui/icons-material/Telegram'

const EmptyBlock = styled.div`
  margin-top: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 10px 10px;
  word-break: keep-all;
`
const EmptyP = styled.p`
  background-color: #fefefe;
  border: #000;
  box-shadow: 2px 2px 5px 0 rgb(0 0 0 / 20%);
  font-size: 1.2em;
  padding: 30px;
  margin: 10px 40px;
  line-height: 2;
`

export const Empty = () => {
  return (
    <EmptyBlock>
      <EmptyP>
        <TelegramIcon style={{ width: '50px', margin: '20px 0' }} />
        <br />
        첫번째로 축하메세지를 남겨보세요!
      </EmptyP>
    </EmptyBlock>
  )
}
