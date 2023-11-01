import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { AttendanceDialog } from '../../components/preview/attendance/AttendanceDialog'
import axiosInstance from '../../lib/api/request'

const AttendanceBlock = styled.div`
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

const CheckAttendance = () => {
  const [open, setOpen] = useState(false)
  const [inputs, setInputs] = useState({name:'', addPeople:0, pos:''})

  const submit = ()=>{
    console.log('test');
    setOpen(false)
  }

  return (
    <AttendanceBlock>
      <NewMemo onClick={()=>setOpen(prev=>!prev)}>
        참석 여부 전달
      </NewMemo>
      <AttendanceDialog
        open={open}
        onClose={()=>setOpen(prev=>!prev)}
        inputs={inputs}
        optionNumber={6}
        onChangeAuthor={(e) => 
                setInputs(prev=>{return {...prev, name : e.target.value}})}
        onChangeAddPeople={(e) => 
                setInputs(prev=>{return {...prev, addPeople : e.target.value}})}
        onClickGroom={(e) => 
                setInputs(prev=>{return {...prev, pos : 'G'}})}
        onClickBride={(e) => 
                setInputs(prev=>{return {...prev, pos : 'B'}})}
        handleSubmit={submit}
        />
    </AttendanceBlock>
  )
}

export default CheckAttendance
