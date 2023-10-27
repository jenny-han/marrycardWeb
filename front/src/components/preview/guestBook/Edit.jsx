import styled from 'styled-components'

const EditBlock = styled.div`
  margin : 2vw;
  width: 90%;
  height: 50vw;
  fontSize: 3vw;
  display: inline-flex;
  position: relative;
  pointerEvents: auto;
  background-color: #fff;
  backgroundClip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  borderRadius: 0.3rem;
  outline: 0;
`

const InputWrap = styled.div`
  display: inline-flex;
  justifyContent: space-around;
  width: 100%;
  marginTop: 2vw;  

  input {
    width:45%;
    padding: 2vw;
    marginLeft: 2vw;
    borderBottom: 1px solid #ddd;
    fontSize: 3.5vw;
  }
`
const TextArea = styled.textarea`
  height: 20vw;
  border: none;
  box-sizing: border-box;
  font-size: 3.5vw;
  width: 100%;
  color: #222;
  font-weight: 400;
  padding: 3vw 5vw 0;
`
const SubmitButton = styled.button`
  width:30%;
  border-radius: 2vw;
  box-sizing: border-box;
  font-size: 3vw;
  color: #fff;
  background-color: #725442;
  border: 1px solid #725442;
  padding:2vw;
  margin : 3vw 0;
  cursor: pointer;
`

export const Edit = ({
  inputs,
  onChangeAuthor,
  onChangePassword,
  onChangeContents,
  handleSubmit
}) => {

  return (
    <EditBlock>
      <form onSubmit={handleSubmit}>
        <InputWrap>
          <input
            type="text"
            name="author"
            placeholder='이름(10자 이내)'
            maxLength={10}
            value={inputs.name}
            onChange={onChangeAuthor}
          />
          <input
            type="password"
            name="password"
            placeholder='비밀번호(15자 이내)'
            value={inputs.password}
            maxLength={15}
            onChange={onChangePassword}
          />
        </InputWrap>
        <div>
          <TextArea
            type="text"
            name="content"
            placeholder="축하글을 작성해보세요! (최대 100자)"
            value={inputs.content}
            maxLength={100}
            onChange={onChangeContents}
          />
          <span>{inputs.contents.length} / 100</span>
        </div>
        <SubmitButton type="submit">
          메세지 남기기
        </SubmitButton>
      </form>
    </EditBlock>
  );
}
