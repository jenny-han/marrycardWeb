import styled from 'styled-components';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MoreBtnBlock = styled.div`
  display: inline-flex;
  alignItems: center;
  justifyContent: center;
  margin: 2vw 4vw;
  background: #eee;
  padding: 3vw;
  fontSize: 3.5vw;
  width: 90%;
  textAlign: center;
`

export const MoreBtn = ({
  message,
  isMore,
  onClick
}) => {
    return (
        <MoreBtnBlock
          onClick={onClick}>
          {message}
          {
            isMore ?
            <ExpandMoreIcon /> :
            <ExpandLessIcon />
          }
        </MoreBtnBlock>
    );
}