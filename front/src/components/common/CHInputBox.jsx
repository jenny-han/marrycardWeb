import { TextField } from '@mui/material'

import React from 'react'

const CHInputBox = (props) => {
  const { label, variant, autoComplete } = props
  return (
    <>
      <TextField label={label} variant={variant} autoComplete={autoComplete} />
    </>
  )
}

export default CHInputBox
