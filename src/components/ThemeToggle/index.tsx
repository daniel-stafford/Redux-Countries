import React, { useContext } from 'react'
import { IconButton } from '@material-ui/core'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'

import { ThemeContext } from 'themes'

const ToggleTheme = () => {
  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <IconButton onClick={switchTheme}>
      {theme.palette.type === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

ToggleTheme.displayName = 'ToggleTheme'

export default ToggleTheme
