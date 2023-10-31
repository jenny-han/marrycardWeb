import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Empty, MoreBtn } from '../../../components/preview/guestBook'
import GuestBookEdit from './GuestBookEdit.jsx'
import GuestBookItem from './GuestBookItem.jsx'
import axiosInstance from '../../../lib/api/request'
import CardTitleText from '../../../components/common/CardTitleText'

import icon from '../../../lib/img/bells.png'

const GuestBookBlock = styled.div`
  text-align: center;
  padding: 50px 0;
`

const TitleBoxWithImg = styled.div`
  img {
    width: 50px;
  }
`

const GuestBook = () => {
  const [guestBookList, setGuestBookList] = useState([])
  const [count, setCount] = useState(0)
  const [lastId, setLastId] = useState(0)
  const [isMore, setIsMore] = useState(false)

  const cardId = 1
  const PAGE_SIZE = 3

  const onClickMoreItem = () => {
    if (isMore) {
      loadGuestBookList()
    } else {
      initGuestBookList()
    }
  }

  const initGuestBookList = useCallback(() => {
      axiosInstance
        .get(`api/sample/guestbooks/count`, { params: { cardId } })
        .then((resCnt) => {
          setCount(resCnt.data)
          axiosInstance
            .get(`api/sample/guestbooks/page`, { params: { cardId, pageNumber: 0, pageSize: PAGE_SIZE } })
            .then((res) => {
              if (Array.isArray(res.data)) {
                const list = res.data
                setGuestBookList(list)
                setLastId(list[list.length - 1].id)
              } else 
                setGuestBookList([])
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }, [])

  const loadGuestBookList = useCallback(() => {
      axiosInstance
        .get(`api/sample/guestbooks/page/lastId`, { params: { cardId, lastId, pageSize: PAGE_SIZE } })
        .then((res) => {
          if (Array.isArray(res.data)) {
            const list = res.data
            setGuestBookList((prev) => [...prev, ...list])
            setLastId(list[list.length - 1].id)
          } else 
            setGuestBookList([])
        })
        .catch((err) => console.log(err))
    }, [lastId]) 

  useEffect(() => {
    setIsMore(count > guestBookList.length)
  }, [count, guestBookList])

  useEffect(() => {
    initGuestBookList()
  }, [])

  return (
    <GuestBookBlock>
      <TitleBoxWithImg>
        <img src={icon} alt="flower"></img>
        <CardTitleText text="축하메세지" />
      </TitleBoxWithImg>

      <GuestBookEdit loadList={initGuestBookList} />

      {guestBookList.length === 0 && <Empty />}

      {guestBookList.map((item) => {
        return (
          <GuestBookItem
            key={item.id}
            data={item}
            loadList={initGuestBookList}
          />
        )
      })}

      {
        count > 3 &&
        <MoreBtn
          message={isMore ? '더보기' : '축하메세지 접기'}
          isMore={isMore}
          onClick={onClickMoreItem}
        />
      }
    </GuestBookBlock>
  )
}

export default GuestBook
