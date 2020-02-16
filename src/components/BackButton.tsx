import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

type BackButtonProps = {
  history: any
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
