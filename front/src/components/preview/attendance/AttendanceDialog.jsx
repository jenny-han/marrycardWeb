import styled from 'styled-components'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

const AttendanceBlock = styled.div`
  text-align: center;
`

const FormBlock = styled.div`
  width: 95%;
  height: 420px;
  font-size: 3vw;
  display: inline-flex;
  position: relative;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  // border: 1px solid rgba(0, 0, 0, 0.2);
  // border-radius: 0.3rem;
  outline: 0;
`

const InputWrap = styled.div`
  width: 100%;
  margin-top: 2vw;
`

const MyLabel = styled.label`
  display: flex;
  font-size: 3.5vw;
  margin: 1vw 0 3vw 3vw;
`

const MyInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 1em;
  border: 0;
`

const SelctButtonWrap = styled.div`
  display: flex;
`

const SelectButton = styled.button`
  width: 40%;
  border-radius: 2vw;
  box-sizing: border-box;
  font-size: 3vw;
  color: #fff;
  background-color: #ddd;
  border: 1px solid #ddd;
  padding: 2vw 5vw;
  margin: 3vw 2vw;
  cursor: pointer;
`
const SelectButton2 = styled.button`
  width: 40%;
  border-radius: 2vw;
  box-sizing: border-box;
  font-size: 3vw;
  color: #fff;
  background-color: #ddd;
  border: 1px solid #ddd;
  padding: 2vw 2vw;
  margin: 3vw 2vw;
  cursor: pointer;
`

const SubmitButton = styled.button`
  width: 60%;
  border-radius: 2vw;
  box-sizing: border-box;
  font-size: 3vw;
  color: #fff;
  background-color: #725442;
  border: 1px solid #725442;
  padding: 3vw;
  margin-top: 5vw;
  // margin: 3vw 0;
  cursor: pointer;
`

const selectStyle = { 
                      'backgroundColor': '#725442',
                      'border': '1px solid #adb5bd'
                    }

export const AttendanceDialog = ({
  open,
  onClose,
  inputs,
  onChangeAuthor,
  onChangeAddPeople,
  selectSide,
  selectRepast,
  handleSubmit
}) => {
  return (
    <Dialog 
      fullWidth={true}
      maxWidth='sm'
      open={open}
      onClose={onClose}
      // disableBackdropClick={!backdropClick}
      aria-labelledby="form-dialog-title">
        <DialogTitle 
          style={{paddingBottom: '1vw'}}
          id="dialog-title">
          참석 여부
        </DialogTitle>
        <CloseIcon
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '3vw',
            top: '3vw',
            color: (theme) => theme.palette.grey[500],
          }}
        />
        <DialogContent
          style={{paddingTop: '1vw'}}>
          <AttendanceBlock>
            <FormBlock>
              <InputWrap>
                <MyLabel>구분</MyLabel>
                <SelctButtonWrap>
                  <SelectButton 
                    style={
                      inputs.side === 'G' ?
                      selectStyle : {}
                    }
                    type="button"
                    onClick={()=>selectSide('G')}>
                    신랑측
                  </SelectButton>
                  <SelectButton
                    style={
                      inputs.side === 'B' ?
                      selectStyle : {}
                    }
                    type="button"
                    onClick={()=>selectSide('B')}>
                    신부측
                  </SelectButton>
                </SelctButtonWrap>
                <MyLabel>성함</MyLabel>
                <MyInput
                  style={{ borderBottom: '1px solid #ddd' }}
                  type="text"
                  name="author"
                  placeholder="성함을 입력해 주세요."
                  maxLength={10}
                  value={inputs.name}
                  onChange={onChangeAuthor}
                />
                
                <MyLabel>참석인원</MyLabel>
                <MyInput
                  style={{ borderBottom: '1px solid #ddd' }}
                  type="number"
                  name="addPeople"
                  placeholder="본인 포함 총 참석인원을 입력해 주세요."
                  maxLength={10}
                  value={inputs.addPeople}
                  onChange={onChangeAddPeople}
                />
                <MyLabel>식사여부</MyLabel>
                <SelctButtonWrap>
                  <SelectButton2 
                    style={
                      inputs.repast === 'Y' ?
                      selectStyle : {}
                    }
                    type="button"
                    onClick={()=>selectRepast('Y')}>
                    예정
                  </SelectButton2>
                  <SelectButton2
                    style={
                      inputs.repast === 'N' ?
                      selectStyle : {}
                    }
                    type="button"
                    onClick={()=>selectRepast('N')}>
                    안함
                  </SelectButton2>
                  <SelectButton2
                    style={
                      inputs.repast === 'U' ?
                      selectStyle : {}
                    }
                    type="button"
                    onClick={()=>selectRepast('U')}>
                    미정
                  </SelectButton2>
                </SelctButtonWrap>
                <SubmitButton 
                  type="button" 
                  onClick={handleSubmit}>
                  참석 의사 전달하기
                </SubmitButton>
              </InputWrap>
            </FormBlock>
          </AttendanceBlock>
        </DialogContent>
    </Dialog>
  )
}
