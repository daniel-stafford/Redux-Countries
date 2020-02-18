import React, { useState } from 'react'
import { CssBaseline, createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import Routes from './Routes'
import { ThemeContext, themes } from 'themes'
import 'styles/index.css'

const App = () => {
  const [themeContext, setThemeContext] = useState({
    theme: themes.dark,
    switchTheme: () => {
      setThemeContext(current => ({
        ...current,
        theme: current.theme === themes.dark ? themes.light : themes.dark,
      }))
    },
  })

  return (
    <>
      <ThemeContext.Provider value={themeContext}>
        <ThemeProvider theme={createMuiTheme(themeContext.theme)}>
          <Routes />
          <CssBaseline />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
