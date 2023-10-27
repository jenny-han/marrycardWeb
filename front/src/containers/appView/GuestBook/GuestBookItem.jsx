import React, { useState } from 'react';

import {Item} from '../../../components/preview/guestBook'
import axiosInstance from '../../../lib/api/request';

const GuestBookItem = ({
    data,
    loadList
}) => {
    const [password, setPassword] = useState('');
    const [isDelete, setIsDelete] = useState(false);

    const onClose = () => setIsDelete(!isDelete);

    const confirmPassword = () => {
        const deleteData = {...data};
        deleteData.password = password;
        if(password === '') {
            alert("비밀번호를 입력하세요.");
            return;
        }
        axiosInstance.delete(`api/sample/guestbook`, { data: deleteData })
        .then(res => {
            if(res.data === -1) {
                alert("비밀번호가 일치하지 않습니다. 다시 시도해주세요.");
            } else if(res.data === 1) {
                alert("작성글이 삭제되었습니다.");
                loadList();
                onClose();
            } else {
                alert("작성글을 찾을 수 없습니다.");
            }
        })
        .catch(err=>{
            console.log(err);
            alert("작성글 삭제 중 문제가 발생했습니다.");
        });
    }

    return (
        <Item 
            data={data}
            password={password}
            isDelete={isDelete}
            onChangePassword={(e)=>setPassword(e.target.value)}
            confirmPassword={()=>confirmPassword()}
            onClose={onClose} />
    );
}

export default GuestBookItem;