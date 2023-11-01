import styled from 'styled-components'
import { copyDoc } from '../../modules/copy'
import CardTitleText from '../common/CardTitleText'
import { sendMessage } from '../../modules/KaKaoMessageScript'
import LinkIcon from '@mui/icons-material/Link'

import kakao from '../../lib/img/kakao-talk-lightbrown.png'
import link from '../../lib/img/link-lightbrown.png'

const ShareLinkBlock = styled.div`
  text-align: center;
  padding: 40px 10px 80px;
`
const ShareBox = styled.div`
  margin-top: 30px;
  width: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`
const ShareBtn = styled.div`
  cursor: pointer;
  img {
    width: 50px;
  }
`

const ShareLink = () => {
  const doCopyLink = () => {
    const url = 'http://ch-wedding.kr/card/jyhs1209'
    copyDoc('청첩장 링크', url)
  }
  return (
    <ShareLinkBlock>
      <CardTitleText text="청첩장 공유하기" />
      <ShareBox>
        <ShareBtn onClick={sendMessage}>
          {/* 카카오톡공유 */}
          <img src={kakao} alt="kakao" title="카카오톡으로 공유하기" />
        </ShareBtn>
        <ShareBtn onClick={doCopyLink}>
          {/* 링크복사 */}
          <img src={link} alt="link" title="링크 복사하기" />
        </ShareBtn>
      </ShareBox>
    </ShareLinkBlock>
  )
}

export default ShareLink
