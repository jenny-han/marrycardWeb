import { Button } from '@mui/material'

const CHButton = (props) => {
  const { variant, color, text, onClickListener, disabled, fullWidth } = props
  // TODO : color setting은 좀더 편하게 불러올수 있도록 수정 보완하면 좋을듯.
  // 어떤 기능에 어떤 컬러를 줄건지 생각해보기.
  //style width 100% 인 버튼 만들기?

  return (
    <Button
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClickListener}
      style={{ width: fullWidth ? '100%' : 'unset' }}
    >
      {text}
    </Button>
  )
}

export default CHButton
