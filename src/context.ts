import { createMuiTheme } from '@material-ui/core/styles'
import React from 'react'

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

export default React.createContext({
  theme: darkTheme,
  switchTheme: () => {},
})
