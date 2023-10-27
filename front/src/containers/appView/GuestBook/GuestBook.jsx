import React, { useEffect, useState } from 'react';

import {Empty, MoreBtn} from '../../../components/preview/guestBook'
import GuestBookEdit from './GuestBookEdit.jsx';
import GuestBookItem from './GuestBookItem.jsx';
import axiosInstance from '../../../lib/api/request';

const GuestBook = () => {
    const [guestBookList, setGuestBookList] = useState([]);
    // const [maxLength, setMaxLength] = useState(0);
    const [lastId, setlastId] = useState(0);
    const [isMore, setIsMore] = useState(false);

    const cardId = 1;
    const PAGE_SIZE = 3;

    const loadGuestBookList = (lastId) => {
        let apiAddr = '';
        let params = {};
        if(lastId === 0) {
            apiAddr = `api/sample/guestbooks/page`;
            params = { cardId, pageNumber: 0, pageSize: PAGE_SIZE};
        } else {
            apiAddr = `api/sample/guestbooks/page/lastId`;
            params = { cardId, lastId, pageSize: PAGE_SIZE};
        }

        axiosInstance.get(apiAddr, {params})
        .then(res => {
            if(Array.isArray(res.data)) {
                const list = res.data;
                setIsMore(list.length === PAGE_SIZE);
                setlastId(list[list.length-1].id);
                if(lastId === 0) {
                    setGuestBookList(list);
                } else {
                    setGuestBookList([...guestBookList, ... list]);
                }
                
            } else
                setGuestBookList([]);
        })
        .catch(err=>console.log(err));
    }

    const onClickMoreItem = () => {
        if(isMore) {
            console.log(lastId)
            loadGuestBookList(lastId);
        } else {
            loadGuestBookList(0);
        }
    }

    useEffect(()=>{
        loadGuestBookList(0);
    },[]);

    // useEffect(()=>{
    //     loadGuestBookList();
    // },[lastId]);

    return (
        <>
            { guestBookList.length === 0 && <Empty />}

            <GuestBookEdit loadList={()=>loadGuestBookList(0)}/>

            {
                guestBookList.map((item) => {
                    return (
                        <GuestBookItem 
                            key={item.id}
                            data={item}
                            loadList={()=>loadGuestBookList(0)} />
                    );
                })
            }

            <MoreBtn 
                message={isMore ? '더보기' : '축하메세지 접기'}
                isMore={isMore}
                onClick={onClickMoreItem}/>
        </>
    );
}

export default GuestBook;