import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const ItemBlock = styled.div`
  background-color: #fff;
  border:#000;
  transition: height .3s;
  margin: 2vw 5vw;
  padding:4vw 5vw;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 3.8vw;
  box-shadow: 2px 2px 5px 0 rgb(0 0 0 / 20%);
`

const ContTitle = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

const TitleRight = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

const Content = styled.p`
  margin-top: 2.5vw;
  color: #000;
  font-weight: 300;
  line-height: 1.26;
  text-align: left;
  overflow-y: scroll;
  max-height: 10vw;
  font-size: 4vw;
`
const PwConfirm = styled.div`
  margin-top: 2vw;
  transition: opacity 2s ease-out;
  padding: 2vw;
`

const MyInput = styled.input`
  width: 100%;
  background: #f4f3f1;
  border: 0;
  padding: 2vw;
  text-align: center;
  font-size: 4vw;
`

const ConfirmPWBtn = styled.button`
  width: 100%;
  padding: 2vw;
  margin: 2vw 0;
  font-size: 3.5vw;
  text-align: center;
  background: #887d77;
  border-radius: 2vw;
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
            <MyInput
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