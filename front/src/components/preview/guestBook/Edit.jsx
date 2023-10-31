import styled from 'styled-components'

const EditBlock = styled.div`
  text-align: center;
`

const NewMemo = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #ece1d5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  padding: 10px;
  border: #ece1d5;
  border-radius: 10px;
  font-size: 1.2em;
  margin: 20px 0;
`

const FormBlock = styled.div`
  margin: 10px;
  width: 90%;
  height: 260px;
  font-size: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  outline: 0;
`

const InputWrap = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`

const MyInput = styled.input`
  width: 45%;
  padding: 10px;
  margin-left: 10px;
  font-size: 1em;
  border: 0;
`

const TextArea = styled.textarea`
  height: 110px;
  border: none;
  box-sizing: border-box;
  font-size: 1.4em;
  width: 100%;
  color: #222;
  font-weight: 400;
  padding: 20px 25px 0;
  resize: none;
`

const SubmitButton = styled.button`
  width: 40%;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 1em;
  color: #fff;
  background-color: #725442;
  border: 1px solid #725442;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
`

export const Edit = ({
  isEdit,
  inputs,
  onEditClick,
  onChangeAuthor,
  onChangePassword,
  onChangeContents,
  handleSubmit,
}) => {
  return (
    <EditBlock>
      <NewMemo onClick={onEditClick}>
        {isEdit ? '축하메세지 작성 취소' : '축하메세지 작성하기'}
      </NewMemo>
      {isEdit && (
        <FormBlock>
          <form onSubmit={handleSubmit}>
            <InputWrap>
              <MyInput
                style={{ borderBottom: '1px solid #ddd' }}
                type="text"
                name="author"
                placeholder="이름(10자 이내)"
                maxLength={10}
                value={inputs.name}
                onChange={onChangeAuthor}
              />
              <MyInput
                style={{ borderBottom: '1px solid #ddd' }}
                type="password"
                name="password"
                placeholder="비밀번호(15자 이내)"
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
            <SubmitButton type="submit">메세지 남기기</SubmitButton>
          </form>
        </FormBlock>
      )}
    </EditBlock>
  )
}
