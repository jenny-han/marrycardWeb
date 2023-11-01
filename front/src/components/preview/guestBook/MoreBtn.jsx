import styled from 'styled-components'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const MoreBtnBlock = styled.div`
  display: inline-flex;
  alignitems: center;
  justify-content: center;
  margin: 10px 20px;
  background: #eee;
  padding: 15px;
  font-size: 1.1em;
  width: 90%;
  text-align: center;
  cursor: pointer;
`

export const MoreBtn = ({ message, isMore, onClick }) => {
  return (
    <MoreBtnBlock onClick={onClick}>
      {message}
      {isMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
    </MoreBtnBlock>
  )
}
