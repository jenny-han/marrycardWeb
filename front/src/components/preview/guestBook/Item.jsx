import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const ItemBlock = styled.div`
  backgroundColor: #fff;
  border:#000;
  transition: height .3s;
  margin: 2vw 5vw;
  padding:4vw 5vw;
  fontFamily: "Noto Sans KR", sans-serif;
  fontSize: 3.8vw;
  boxShadow: 2px 2px 5px 0 rgb(0 0 0 / 20%);
`

const ContTitle = styled.div`
  display:flex;
  flexDirection: row;
  justify-content: space-between;
`

const TitleRight = styled.div`
  display:flex;
  flexDirection: row;
  justifyContent: space-between;
`

const Content = styled.p`
  marginTop: 2.5vw;
  color: #000;
  fontWeight: 300;
  lineHeight: 1.26;
  textAlign: left;
  overflow-y: scroll;
  maxHeight: 10vw;
  fontSize: 4vw;
`
const PwConfirm = styled.div`
  marginTop: 2vw;
  transition: opacity 2s ease-out;
  padding: 2vw;
  input {
    width: 100%;
    background: #f4f3f1;
    border: 0;
    padding: 2vw;
    textAlign: center;
    fontSize: 4vw;
  }
`

const ConfirmPWBtn = styled.button`
  width: 100%;
  padding: 2vw;
  margin: 2vw 0;
  fontSize: 3.5vw;
  textAlign: center;
  background: #887d77;
  borderRadius: 2vw;
  color: #fff;
`

export const Item = ({
  data,
  password,
  isDelete,
  onChangePassword,
  confirmPassword,
  onClose
}) => {
    const { name, createDate, contents } = data;
    return (
      <ItemBlock
        style={{'height' : !isDelete ? '25vw': '45vw'}}>
        <ContTitle>
          <div>{name}</div>
          <TitleRight>
            <div>{createDate}</div>
            <CloseIcon onClick={onClose} style={{'marginLeft':'2vw', 'width':'3vw'}}/>
          </TitleRight>
        </ContTitle>
        <Content>
          {contents}
        </Content>
        { isDelete &&
          <PwConfirm style={{'opacity' : isDelete ? 1 : 0}}>
            <input
              type="password"
              name="pass"
              placeholder='비밀번호를 입력하세요'
              value={password}
              maxLength={15}
              onChange={onChangePassword}
            />
            <ConfirmPWBtn onClick={confirmPassword}>
              확인
            </ConfirmPWBtn>
          </PwConfirm>
        }
      </ItemBlock>
    );
}