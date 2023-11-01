import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'

const ItemBlock = styled.div`
  background-color: #fff;
  border: #000;
  transition: height 0.3s;
  margin: 10px 25px;
  padding: 20px 25px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.1em;
  box-shadow: 2px 2px 5px 0 rgb(0 0 0 / 20%);
`

const ContTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TitleRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

const Content = styled.p`
  margin-top: 12px;
  color: #000;
  font-weight: 300;
  line-height: 1.3;
  text-align: left;
  overflow-y: scroll;
  max-height: 50px;
  font-size: 1.1em;
  word-wrap: break-word;
}
`
const PwConfirm = styled.div`
  margin-top: 10px;
  transition: opacity 2s ease-out;
  padding: 1em;
`

const MyInput = styled.input`
  width: 100%;
  background: #f4f3f1;
  border: 0;
  padding: 10px;
  text-align: center;
  font-size: 1em;
`

const ConfirmPWBtn = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 1em;
  text-align: center;
  background: #887d77;
  border-radius: 10px;
  border: 1px solid #887d77;
  color: #fff;
  cursor: pointer;
`

export const Item = ({
  data,
  password,
  isDelete,
  onChangePassword,
  confirmPassword,
  onClose,
}) => {
  const { name, createDate, contents } = data

  const dateFormat = (dt) => {
    const date = new Date(dt)
    return (
      date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate()
    )
  }
  return (
    <ItemBlock style={{ height: !isDelete ? '130px' : '250px' }}>
      <ContTitle>
        <div>{name}</div>
        <TitleRight>
          <div>{dateFormat(createDate)}</div>
          <CloseIcon
            onClick={onClose}
            style={{ marginLeft: '10px', width: '20px' }}
          />
        </TitleRight>
      </ContTitle>
      <Content>{contents}</Content>
      {isDelete && (
        <PwConfirm style={{ opacity: isDelete ? 1 : 0 }}>
          <MyInput
            type="password"
            name="pass"
            placeholder="비밀번호를 입력하세요"
            value={password}
            maxLength={15}
            onChange={onChangePassword}
          />
          <ConfirmPWBtn onClick={confirmPassword}>확인</ConfirmPWBtn>
        </PwConfirm>
      )}
    </ItemBlock>
  )
}
