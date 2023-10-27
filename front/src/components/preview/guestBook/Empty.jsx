import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';

const EmptyBlock = styled.div`
  marginTop: 2vw;
  fontFamily: "Noto Sans KR", sans-serif;
  padding: 10vw 5vw;

  p {
    backgroundColor: #fefefe;
    border:#000;
    boxShadow: 2px 2px 5px 0 rgb(0 0 0 / 20%);
    fontSize: 4vw;
    padding: 5vw;
    margin: 2vw 8vw;
    lineHeight: 2;
  }
`

export const Empty = () => {
    return (
        <EmptyBlock>
          <p>
            <TelegramIcon style={{'width':'10vw', 'margin':'5vw 0vw'}}/>
            <br />
            첫번째로 축하메세지를 남겨보세요!
          </p>
        </EmptyBlock>
    );
}