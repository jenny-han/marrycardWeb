import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

const CHButton = (props) => {
  const { variant, color, text, onClick, disabled, fullWidth } = props
  // TODO : color setting은 좀더 편하게 불러올 수 있도록 해도 좋을 듯
  // 어떤 기능에 어떤 색상을 줄건지 생각해보기
  // fullWidth true => style width 100%

  const [disable, setDisable] = useState(false)

  useEffect(() => {
    // 특정 요청을 했을때 버튼을 disabled 처리
    if (text === 'SAVE') setDisable(true)
    else setDisable(disabled)
  })

  return (
    <Button
      variant={variant}
      color={color}
      disabled={disable}
      onClick={onClick}
      style={{ width: fullWidth ? '100%' : 'unset' }}
    >
      {text}
    </Button>
  )
}

export default CHButton
