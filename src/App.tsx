import React from 'react'
import { CssBaseline } from '@material-ui/core'
// import { ThemeProvider } from '@material-ui/styles'

import Routes from './Routes'
// import { darkTheme, lightTheme } from 'context'

export default function App() {
  // const [context, setContext] = useState({
  //   theme: darkTheme,
  //   switchTheme: () => {
  //     setContext(current => ({
  //       ...current,
  //       theme: current.theme === darkTheme ? lightTheme : darkTheme,
  //     }))
  //   },
  // })

  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  )
}
