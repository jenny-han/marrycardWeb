import React, { useState } from 'react';
import styled from 'styled-components'

import {Edit} from '../../../components/preview/guestBook'
import axiosInstance from '../../../lib/api/request';

const NewMemo = styled.div`
    background-color: #ece1d5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    padding: 3vw 3vw;
    border: #ece1d5;
    border-radius: 3vw;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 3.8vw;
    margin:2vw 0 ;
`

const GuestBookEdit = ({
    loadList
}) => {
    const [editValue, setEditValue] = useState({name: '', password: '', contents: ''});
    const [isEdit, setIsEdit] = useState(false);

    const validate = () => {
        if (!editValue.name) {
            alert("이름을 입력하세요.")
            return false
        }
        if (!editValue.password) {
            alert("비밀번호를 입력하세요.")
            return false;
        }
        if (!editValue.contents) {
            alert("내용을 입력하세요.")
            return false;
        }

        return true;
    };

    const memoEdit = ()=>setIsEdit(true);

    const onSubmit = (e)=>{
        e.preventDefault();
        if(validate()) {
            const data = {
                ...editValue,
                cardId: 1
            }
            axiosInstance.post(`api/sample/guestbook`, data)
            .then((res)=>{
                alert("축하메세지 작성이 완료되었습니다!");
                setIsEdit(false);
                setEditValue({name: '', password: '', contents: ''});
                loadList();
            })
            .catch(err=>console.log(err));
        }
    };

    return (
        <>
            <NewMemo onClick={memoEdit}>                
                { isEdit ? "축하메세지 작성 취소" : "축하메세지 작성하기" }
            </NewMemo>
            { 
                isEdit && 
                <Edit
                    inputs={editValue}
                    onChangeAuthor={(e) => 
                        setEditValue(prev=>{return {...prev, name : e.target.value}})}
                    onChangePassword={(e) => 
                        setEditValue(prev=>{return {...prev, password : e.target.value}})}
                    onChangeContents={(e) => 
                        setEditValue(prev=>{return {...prev, contents : e.target.value}})}
                    handleSubmit={onSubmit} /> 
            }
        </>
    );
}

export default GuestBookEdit;