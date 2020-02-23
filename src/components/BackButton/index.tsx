import React from 'react'
import { History } from 'history'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

type BackButtonProps = {
  history: History
}
const BackButton = ({ history }: BackButtonProps) => {
  const handleGoBack = () => {
    history.goBack()
  }
  return (
    <IconButton onClick={handleGoBack}>
      <ArrowBackIosIcon />
    </IconButton>
  )
}

BackButton.displayName = 'BackButton'

export default BackButton
