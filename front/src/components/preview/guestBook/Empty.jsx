import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';

const EmptyBlock = styled.div`
  margin-top: 2vw;
  font-family: "Noto Sans KR", sans-serif;
  padding: 10vw 5vw;
`
const EmptyP = styled.p`
  background-color: #fefefe;
  border:#000;
  box-shadow: 2px 2px 5px 0 rgb(0 0 0 / 20%);
  font-size: 4vw;
  padding: 5vw;
  margin: 2vw 8vw;
  line-height: 2;
`

export const Empty = () => {
    return (
        <EmptyBlock>
          <EmptyP>
            <TelegramIcon style={{'width':'10vw', 'margin':'5vw 0vw'}}/>
            <br />
            첫번째로 축하메세지를 남겨보세요!
          </EmptyP>
        </EmptyBlock>
    );
}